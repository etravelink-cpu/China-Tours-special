/* Customer presentation only. Source objects and stored product facts are immutable. */
(function(root){
 'use strict';
 const lines=s=>String(s||'').replace(/\r\n?/g,'\n').split('\n').map(s=>s.trim()).filter(Boolean);
 const stripBullet=s=>String(s).replace(/^[\s・·•\-]*(?:(?:✅|★|✓|✔|☑)[\s・·•\-]*)+/, '').trim();
 const clean=s=>lines(s).filter(s=>!['产品简介','旅行产品简介','行程亮点','行程特色'].includes(s.replace(/[：:]$/,''))).join('\n');
 const guide=d=>/^(行程攻略|旅游攻略|旅遊攻略|游玩攻略)$/.test(String(d.titleZh||'').trim());
 function splitDays(section,total){
  if(Number.isInteger(section.d)&&section.d>0)return [section];
  const ls=lines(section.descZh),starts=[];
  ls.forEach((line,i)=>{const m=line.match(/^第\s*(\d+)\s*[天日](?:\s+|[：:、.．-])(.+)$/);if(m)starts.push({i,n:Number(m[1]),heading:m[2]});});
  // Never interpret times, guide headings or an incomplete/ambiguous sequence as days.
  if(!starts.length||!Number.isInteger(Number(total))||Number(total)<1||starts.length!==Number(total)||starts.some((x,i)=>x.n!==i+1))return [section];
  const result=[],prefix=ls.slice(0,starts[0].i).filter(x=>x!==section.titleZh);
  if(prefix.length)result.push({...section,descZh:prefix.join('\n')});
  starts.forEach((x,i)=>result.push({...section,d:x.n,titleZh:x.heading,descZh:ls.slice(x.i+1,starts[i+1]?.i||ls.length).join('\n')}));
  return result;
 }
 function project(t,offer){
  const original=offer.itinerary||t.itinerary||[],advice=original.filter(guide),route=original.filter(x=>!guide(x));
  const intro=clean(t.introZh),explicit=/行程亮点|行程特色|✅|★/.test(t.introZh||'');
  const result={introTitle:explicit?'行程亮点':'产品介绍',intro,highlights:null,days:route.flatMap(x=>splitDays(x,offer.days)),details:[],notes:advice.map(x=>({title:'游玩提醒与攻略',text:x.descZh})),profile:'generic'};
  const shortLines=lines(intro);
  if(shortLines.length&&shortLines.every(s=>/^[・·\s]*(?:✅|★|✓|✔|☑)/.test(s))){result.highlights=shortLines.map(stripBullet);result.intro='';result.introTitle='行程亮点';}
  if(t.productType==='TICKET_ACTIVITY')result.days=result.days.map(d=>({...d,d:null}));
  // A known mixed introduction must not masquerade as a short highlights block.
  if(intro.length>350||/(?:\d{1,2}:\d{2}|接机时间|送机时间)/.test(intro))result.introTitle='产品介绍';
  const australia=t.dest==='australia'||t.destZh==='澳洲'||(t.tags||[]).some(s=>/^澳洲(?:\s|$)/.test(s));
  if(t.v2Public?.presentationRules?.layout==='SOURCE'||!australia)return result;
  // Segment only explicit source headings. No product ID or old revision lock.
  const il=lines(t.introZh),schedule=il.reduce((a,s,i)=>(s==='行程'&&a.push(i),a),[]);
  let overview=il;
  if(schedule.length===1&&il.slice(schedule[0]+1).some(s=>/^\d{1,2}:\d{2}/.test(s))){
   overview=il.slice(0,schedule[0]);result.intro=clean(overview.join('\n'));
   result.details.push({title:'参考时间与集合通知',text:il.slice(schedule[0]+1).join('\n'),collapsed:true});
  }
  const bullets=overview.filter(s=>/^[・·\s]*(?:✅|★|✓|✔)/.test(s));
  if(bullets.length>=2&&result.intro.length>350){
   result.highlights=bullets.map(stripBullet);result.intro='';result.introTitle='行程亮点';
   // Full source overview stays available; attached conditions are never summarized away.
   result.details.push({title:'景点详细介绍与亮点说明',text:overview.join('\n'),collapsed:true});
  }
  if(Number(offer.days)!==1||route.length!==1)return result;
  const rl=lines(route[0].descZh);
  const at=predicate=>{const found=rl.reduce((a,s,i)=>(predicate(s)&&a.push(i),a),[]);return found.length===1?found[0]:-1;};
  const routeAt=rl.findIndex((s,i)=>rl[i+1]==='⇣');
  const termsAt=at(s=>/^\**(?:蒸汽小火车|.+行程).*不可抗力说明/.test(s));
  const extraAt=at(s=>/^可以选择加购升级看台/.test(s));
  const pickupAt=at(s=>/^集合地点\s*[:：]/.test(s));
  if(!(routeAt>=0&&termsAt>routeAt&&extraAt>termsAt&&pickupAt>extraAt))return result;
  const groups=rl.slice(routeAt,termsAt).join('\n').split(/\n⇣\n/).map(s=>lines(s));
  if(groups.length<2||groups.some(g=>!g.length))return result;
  result.profile='AU_SOURCE_SECTIONS_20261017';
  result.days=groups.map((g,i)=>({d:null,titleZh:g[0],descZh:g.slice(1).join('\n'),routeStep:i+1}));
  if(routeAt)result.details.push({title:'行程详细介绍',text:rl.slice(0,routeAt).join('\n'),collapsed:true});
  result.details.push({title:'集合地点与回程下车点',text:rl.slice(pickupAt).join('\n'),collapsed:true});
  result.notes.unshift({title:'加购项目与适用条件',text:rl.slice(extraAt,pickupAt).join('\n')});
  result.notes.unshift({title:'行程调整及特殊情况',text:rl.slice(termsAt,extraAt).join('\n')});
  return result;
 }
 root.EtripsContent={project,splitDays};
})(typeof window==='undefined'?globalThis:window);

/* Version-bound view state; no product writes or duplicate product storage. */
(function(root){
 'use strict';
 const memory=new Map(),tabs=['dates','itinerary','map','terms'];
 const identity=t=>[t.id,t.v2Public.revision,t.v2Public.contentHash].join('|');
 function read(t,search){
  const d=t.v2Public,q=new URLSearchParams(search),same=q.get('id')===t.id;
  const explicit=same&&(q.has('offer')||q.has('plan'));
  const publicId=root.EtripsCustomerProductId;
  const masked=q.has('plan'),matched=explicit&&(masked?q.get('v')===publicId.version(t):q.get('revision')===d.revision&&q.get('hash')===d.contentHash);
  const raw=explicit?(matched?Object.fromEntries(q):{}):(memory.get(identity(t))||{});
  if(masked&&matched)raw.offer=d.offers.find(o=>publicId.plan(t,o)===q.get('plan'))?.key||'__INVALID_PLAN__';
  const fallback=d.offers.find(o=>o.default)||d.offers[0];
  const matchedOffer=d.offers.find(o=>o.key===raw.offer),offer=matchedOffer||fallback;
  const sharedDate=d.sharedDatesSelectable===true&&Array.isArray(d.sharedDepartureDates)&&d.sharedDepartureDates.some(x=>x.date===raw.date&&x.selectable===true);
  const date=matchedOffer&&raw.date&&(sharedDate||root.EtripsRecurringCalendar.selectable(offer,raw.date))?raw.date:'';
  return {offer:offer.key,date,view:/^\d{4}-(0[1-9]|1[0-2])$/.test(raw.view||'')?raw.view:(date?date.slice(0,7):root.EtripsRecurringCalendar.initialMonth(offer)),tab:tabs.includes(raw.tab)?raw.tab:'dates',invalid:!!(explicit&&!matched||raw.offer&&!matchedOffer||raw.date&&!date)};
 }
 function save(t,state){memory.set(identity(t),{...state});}
 function query(t,state,kind='id'){
  return root.EtripsCustomerProductId.query(t,state,kind);
 }
 root.EtripsProductSelection={read,save,query};
})(typeof window==='object'?window:globalThis);

/* ETRIPS_PUBLIC_DISPLAY_20261015: presentation only; staff evidence stays intact. */
(function(root){
 'use strict';
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function dateLabel(d){
  if(d?.status==='soldout')return '售罄';
  if(d?.status==='cutoff')return '已截止';
  if(d?.status==='pending'||d?.selectable===false)return '日期请咨询';
  return '出发日期，余位请咨询';
 }
 function summary(offer){
  if(offer.calendarRules?.length){
   // Only concise, already-exported recurrence wording is used here.
   const labels=[...new Set(offer.calendarRules.map(r=>String(r.label||'').split(/[·；;]/)[0].trim()).filter(Boolean))];
   return '<p><b>'+labels.map(esc).join('；')+'</b> · 余位与价格请咨询</p>';
  }
  const dates=offer.fixedDepartures||offer.departures||[],groups=new Map();
  for(const d of [...dates].sort((a,b)=>String(a.date).localeCompare(String(b.date)))){
   if(!/^\d{4}-\d{2}-\d{2}$/.test(d.date))continue;
   let state=d.status;
   if(root.EtripsCalendarContract&&root.EtripsRecurringCalendar&&(offer.fixedRules||offer.fixedDepartures)){
    state=root.EtripsCalendarContract.dayState(root.EtripsRecurringCalendar.model(offer),d.date).state;
    if(!['preview','soldout','cutoff','pending'].includes(state))continue;
   }
   const month=d.date.slice(0,7),flag=state==='soldout'?'（售罄）':state==='cutoff'?'（已截止）':state==='pending'?'（请咨询）':'';
   if(!groups.has(month))groups.set(month,new Map());
   groups.get(month).set(d.date,String(Number(d.date.slice(8)))+'日'+flag);
  }
  if(!groups.size)return '<p>出发日期请咨询</p>';
  const label=/抵达/.test(offer.dateDisplayLabel||'')?'抵达日期':'出发日期';
  let html='<p><b>'+label+'</b></p>',year='';
  for(const [month,days] of groups){
   if(month.slice(0,4)!==year){year=month.slice(0,4);html+='<p><b>'+year+'年</b></p>';}
   html+='<p class="v2-compact-dates" style="margin:3px 0">'+Number(month.slice(5))+'月：'+[...days.values()].map(esc).join('、')+'</p>';
  }
  return html;
 }
 function currentMap(data,offer){
  // An explicit empty offer list is authoritative. Never borrow another package's map.
  const maps=Array.isArray(offer.routeMaps)?offer.routeMaps:(data.offers?.length===1?data.routeMaps:[]);
  return (maps||[]).find(m=>m&&(m.image||m.staticImage))||null;
 }
 const api={dateLabel,summary,currentMap};root.EtripsPublicDisplay=api;
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window==='undefined'?globalThis:window);

/* Product brochures only. One entry: prefer PDF, then image; preserve all source assets. */
(function(root){
 'use strict';
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function classify(items){
  const groups={images:[],files:[]},seen=new Set();
  for(const b of Array.isArray(items)?items:[]){
   if(b.role && b.role!=='BROCHURE')continue;
   const url=String(b.url||'');
   if(!/^assets\/v2-products\/[A-Za-z0-9_-]+\/[a-f0-9]{64}\.(?:jpe?g|png|pdf)$/i.test(url)||seen.has(url))continue;
   seen.add(url);const format=url.split('.').pop().toUpperCase();
   groups[format==='PDF'?'files':'images'].push({url,format:format==='JPEG'?'JPG':format});
  }
  return groups;
 }
 function preferred(items){
  const groups=classify(items);return groups.files[0]||groups.images[0]||null;
 }
 function render(items){
  const b=preferred(items);if(!b)return '';
  return '<a class="btn v2-brochure-action" target="_blank" rel="noopener noreferrer" href="'+esc(b.url)+'" aria-label="打开'+(b.format==='PDF'?'PDF':'图片')+'彩页（新标签页）"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/></svg>彩页 '+esc(b.format)+' <span aria-hidden="true">↗</span></a>';
 }
 root.EtripsBrochureMenu={render,classify,preferred};
 if(typeof module==='object'&&module.exports)module.exports=root.EtripsBrochureMenu;
})(typeof window==='object'?window:globalThis);

/* Source-only calendar contract. Parity checked against calendar_contract.py. */
(function(root){
 'use strict';
 const VERSION='OFFICIAL_CALENDAR_CONTRACT_20261011.1';
 const weekdays=['SUN','MON','TUE','WED','THU','FRI','SAT'];
 function validDay(value){
  if(!/^\d{4}-\d{2}-\d{2}$/.test(value||''))return false;
  const d=new Date(value+'T00:00:00Z');return Number.isFinite(+d)&&d.toISOString().slice(0,10)===value;
 }
 function localNow(now,zone){
  const p=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now).map(x=>[x.type,x.value]));
  return {date:`${p.year}-${p.month}-${p.day}`,time:`${p.hour}:${p.minute}`};
 }
 const result=(state,reason)=>({state,selectable:state==='preview',reason});
 const cutoffValid=c=>c&&typeof c==='object'&&Boolean(c.evidence_id)&&Number.isSafeInteger(c.days_before)&&c.days_before>=0&&/^([01]\d|2[0-3]):[0-5]\d$/.test(c.local_time||'');
 function occurrence(rule,day,now=new Date(),referenceZone='Australia/Sydney'){
  if(!validDay(day)||rule.ocr_pending||rule.generation_blocked_reason)return null;
  const kind=rule.rule_kind,pattern=rule.recurrence_json||{};
  let active=kind==='FIXED'&&rule.fixed_date===day;
  if(kind==='RECURRING'){
   if(pattern.recurrence_pattern==='DAILY')active=true;
   else if(['WEEKLY_RECURRING','MULTI_WEEKLY_RECURRING'].includes(pattern.recurrence_pattern)){
    const days=pattern.weekday;
    if(!Array.isArray(days)||!days.length||new Set(days).size!==days.length||days.some(x=>!weekdays.includes(x)))return null;
    active=days.includes(weekdays[new Date(day+'T00:00:00Z').getUTCDay()]);
   }else return null;
  }else if(kind!=='FIXED')return null;
  const exceptions=rule.exceptions||[];
  if(exceptions.some(x=>x.exception_date===day&&x.exception_kind==='CANCEL'))return null;
  if(exceptions.some(x=>x.exception_date===day&&x.exception_kind==='ADD'))active=true;
  if(!active)return null;
  const start=rule.effective_from,end=rule.effective_until;
  if(start&&!validDay(start)||end&&!validDay(end)||start&&end&&end<start)return result('pending','班期有效范围待核对');
  if(start&&day<start||end&&day>end)return null;
  if(exceptions.some(x=>!['ADD','CANCEL'].includes(x.exception_kind)||!validDay(x.exception_date)))return result('pending','班期例外条件待完整核对');
  const zone=rule.time_zone||(rule.date_semantics==='DATE_ONLY'?(rule.date_reference_zone||referenceZone):null);
  let clock;try{clock=zone?localNow(now,zone):null;}catch(_){clock=null;}
  if(!clock)return result('pending','出发地时区待核对，暂不能选择日期');
  const departure=String(rule.departure_time_local||'').slice(0,5);
  if(departure&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(departure))return result('pending','出发时刻待核对');
  if(day<clock.date||day===clock.date&&departure&&clock.time>=departure)return result('past','已过期，不可用');
  if(rule.execution_state!=='EXECUTABLE'||!(rule.verification_state==='VERIFIED'||rule.calendar_human_confirmed===true||rule.calendar_automatic_confirmed===true))return result('pending','班期尚未完整核对，暂不能选择日期');
  if(rule.inventory_state==='SOLD_OUT')return result('soldout','官网标注售罄；保留出团日期，不能选择');
  const cutoff=pattern.booking_cutoff;
  if(cutoff!==undefined&&cutoff!==null){
   if(!cutoffValid(cutoff))return result('pending','预订截止条件或来源依据待核对');
   if(!rule.time_zone)return result('pending','预订截止时区待核对，暂不能选择日期');
   const stop=new Date(day+'T00:00:00Z');stop.setUTCDate(stop.getUTCDate()-cutoff.days_before);
   if(!Number.isFinite(+stop)||stop.getUTCFullYear()<1)return result('pending','预订截止条件或来源依据待核对');
   const cutoffDay=stop.toISOString().slice(0,10);
   if(clock.date>cutoffDay||clock.date===cutoffDay&&clock.time>=cutoff.local_time)return result('cutoff','已过预订截止；仍保留出团日期');
  }
  let reason=rule.source_method==='STAFF_DEPARTURE_ENTRY'?'人工登记班期 · 待邮件确认':'官方班期 · 待邮件确认';
  if(rule.date_semantics==='DATE_ONLY')reason+='；仅日期参考，班期按当地日期判断';
  else if(day===clock.date&&!departure)reason+='；当天出发时间待确认';
  return result('preview',reason);
 }
 function dayState(model,day,now=new Date()){
  const states=(model.rules||[]).map(r=>occurrence(r,day,now,model.reference_zone||'Australia/Sydney')).filter(Boolean);
  for(const state of ['soldout','preview','cutoff','pending','past']){
   if(state==='past'&&model.staff_view===false)continue;
   const found=states.find(x=>x.state===state);if(found)return found;
  }
  return {state:'empty',selectable:false};
 }
 function candidates(model,now=new Date()){
  const days=new Set(),reference=model.reference_zone||'Australia/Sydney';
  for(const r of model.rules||[]){
   if(r.rule_kind==='FIXED'&&validDay(r.fixed_date))days.add(r.fixed_date);
   for(const x of r.exceptions||[])if(x.exception_kind==='ADD'&&validDay(x.exception_date))days.add(x.exception_date);
   if(r.rule_kind!=='RECURRING'||r.ocr_pending||r.generation_blocked_reason)continue;
   let today;try{today=localNow(now,r.time_zone||r.date_reference_zone||reference).date;}catch(_){continue;}
   let start=validDay(r.effective_from)&&r.effective_from>today?r.effective_from:today;
   const cutoff=(r.recurrence_json||{}).booking_cutoff;
   if(cutoffValid(cutoff)){
    const lead=new Date(today+'T00:00:00Z');lead.setUTCDate(lead.getUTCDate()+cutoff.days_before);
    if(!Number.isFinite(+lead)||lead.getUTCFullYear()>9999)continue;
    if(lead.toISOString().slice(0,10)>start)start=lead.toISOString().slice(0,10);
   }
   const cursor=new Date(start+'T00:00:00Z');
   for(let i=0;i<14+7*(r.exceptions||[]).length;i++,cursor.setUTCDate(cursor.getUTCDate()+1)){
    const value=cursor.toISOString().slice(0,10);
    if(validDay(r.effective_until)&&value>r.effective_until)break;
    const state=occurrence(r,value,now,reference);
    if(state&&state.state!=='past')days.add(value);
   }
  }
  return [...days].sort();
 }
 function firstSelectable(model,now=new Date()){return candidates(model,now).find(d=>dayState(model,d,now).selectable)||null;}
 function initialMonth(model,now=new Date()){
  const days=candidates(model,now),first=days.find(d=>dayState(model,d,now).selectable)||days.find(d=>['soldout','cutoff'].includes(dayState(model,d,now).state));
  if(first)return first.slice(0,7);
  const reference=model.reference_zone||'Australia/Sydney',zone=(model.rules||[]).find(r=>r.time_zone)?.time_zone||reference;
  try{return localNow(now,zone).date.slice(0,7);}catch(_){return localNow(now,reference).date.slice(0,7);}
 }
 const api={VERSION,validDay,localNow,occurrence,dayState,candidates,firstSelectable,initialMonth,cutoffValid};
 root.EtripsCalendarContract=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window==='undefined'?globalThis:window);

/* Public dates use the same contract as the staff calendar. No inventory claim. */
(function(root){
 'use strict';
 const contract=typeof module!=='undefined'&&module.exports?require('./calendar_contract.js'):root.EtripsCalendarContract;
 function rawRule(rule){
  if(rule.calendarContract)return rule.calendarContract;
  // Existing public recurrence DTOs were exported only after source verification.
  return {rule_kind:'RECURRING',recurrence_json:{recurrence_pattern:rule.pattern,weekday:rule.weekdays},effective_from:rule.from,effective_until:rule.until,time_zone:rule.timeZone,departure_time_local:rule.time,exceptions:(rule.exceptions||[]).map(x=>({exception_date:x.date,exception_kind:x.kind})),verification_state:'VERIFIED',execution_state:'EXECUTABLE'};
 }
 function model(offer){
  let rules=[...(offer.fixedRules||[]),...(offer.calendarRules||[]).map(rawRule)];
  if(!offer.fixedRules){
   rules=rules.concat((offer.fixedDepartures||[]).map(d=>({rule_kind:'FIXED',fixed_date:d.date,date_semantics:'DATE_ONLY',date_reference_zone:offer.calendarRules?.[0]?.timeZone||'Australia/Sydney',verification_state:'VERIFIED',execution_state:'EXECUTABLE',inventory_state:d.status==='soldout'?'SOLD_OUT':'NOT_STATED'})));
  }
  return {rules,reference_zone:offer.referenceZone||offer.calendarRules?.[0]?.timeZone||'Australia/Sydney',staff_view:false};
 }
 function localToday(zone,now=new Date()){return contract.localNow(now,zone).date;}
 function monthDates(offer,view,now=new Date()){
  if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(view))return [];
  const source=model(offer),[year,month]=view.split('-').map(Number),count=new Date(Date.UTC(year,month,0)).getUTCDate(),dates=[];
  for(let d=1;d<=count;d++){
   const value=view+'-'+String(d).padStart(2,'0'),state=contract.dayState(source,value,now);
   if(!['preview','soldout','cutoff','pending'].includes(state.state))continue;
   const end=new Date(value+'T00:00:00Z');end.setUTCDate(end.getUTCDate()+offer.days-1);
   dates.push({date:value,endDate:end.toISOString().slice(0,10),status:state.state==='preview'?'unconfirmed':state.state,selectable:state.selectable,reason:state.reason});
  }
  return dates;
 }
 function initialMonth(offer,now=new Date()){return contract.initialMonth(model(offer),now);}
 function selectable(offer,day,now=new Date()){return contract.dayState(model(offer),day,now).selectable;}
 const api={localToday,monthDates,initialMonth,selectable,model,VERSION:contract.VERSION};root.EtripsRecurringCalendar=api;
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window==='undefined'?globalThis:window);

/* V2 public detail renderer; only handles products carrying verified v2Public data. */
(function(){
 'use strict';
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const money=p=>p.state==='ENQUIRY'?'询价':p.amount==null?'请咨询':esc(p.currency)+' '+Number(p.amount).toLocaleString('zh-CN',{maximumFractionDigits:2});
 const paras=s=>'<div class="v2-copy">'+esc(s).replace(/(?:\r?\n\s*){3,}/g,'\n\n')+'</div>';
 const highlights=s=>'<div class="v2-highlights">'+String(s??'').replace(/\r\n?/g,'\n').split('\n').map(line=>line.trim()).filter(Boolean).filter(line=>!['产品简介','行程特色','行程亮点'].includes(line.replace(/[：:]$/,''))).map(line=>'<p>'+esc(line)+'</p>').join('')+'</div>';
 function notices(s){
  const lines=String(s??'').replace(/\r\n?/g,'\n').split('\n').map(x=>x.trim()).filter(Boolean),out=[];
  for(let i=0;i<lines.length;i++){
   const line=lines[i];
   if(line.startsWith('|')&&/^\|(?:\s*:?-+:?\s*\|)+$/.test(lines[i+1]||'')){
    const cells=row=>row.replace(/^\||\|$/g,'').split('|').map(x=>esc(x.trim()));
    const head=cells(line);i+=2;const rows=[];
    while(i<lines.length&&lines[i].startsWith('|')){rows.push(cells(lines[i]));i++;}i--;
    out.push('<div class="v2-table-scroll"><table class="v2-quotes"><thead><tr>'+head.map(x=>'<th scope="col">'+x+'</th>').join('')+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+row.map(x=>'<td>'+x+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>');
   }else if(/^#{1,3}\s/.test(line)){out.push('<h4>'+esc(line.replace(/^#{1,3}\s+/,''))+'</h4>');}
   else if(/^(?:純玩團特殊條款|纯玩团特殊条款|訂位及取消辦法|订位及取消办法)$/.test(line)){out.push('<h4>'+esc(line)+'</h4>');}
   else{out.push('<p>'+esc(line.replace(/^-\s+/,'• '))+'</p>');}
  }
  return '<div class="v2-notice-copy">'+out.join('')+'</div>';
 }
 const publicTerms=text=>String(text||'').replace('酒店及航班等以供应商最终确认为准。','酒店及航班安排以最终预订确认为准。').replace('官网通用地接条款包含“不含国际国内机票”等文字，不能直接套用于含机票套餐；完整退改、机票范围及适用条件须人工对照 Flyer 与供应商确认。','');
 const publicScope=text=>String(text||'').replace('按 Flyer 包机票栏目：往返航程＋日本地接安排；地接对应官方网页9日行程。','包含往返航程及9日日本地接行程。').replace('按 Flyer 陆地段栏目：','');
 const safeURL=url=> /^(?:assets\/|https:\/\/)/.test(url||'')?url:'#';
 const link=(url,text)=>'<a target="_blank" rel="noopener noreferrer" href="'+esc(safeURL(url))+'">'+esc(text)+'</a>';
 const today=()=>{const ps=new Intl.DateTimeFormat('en-CA',{timeZone:'Australia/Sydney',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()); return ['year','month','day'].map(k=>ps.find(x=>x.type===k).value).join('-');};


 function priceView(p){
  const rules={"[\"3251091f-0308-4054-beae-df07fb907192\",\"成人\",\"FARE\",\"AUD\",\"99\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"3251091f-0308-4054-beae-df07fb907192\",\"儿童不占床\",\"FARE\",\"AUD\",\"399\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"3251091f-0308-4054-beae-df07fb907192\",\"儿童占床\",\"FARE\",\"AUD\",\"999\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"3251091f-0308-4054-beae-df07fb907192\",\"单人房差\",\"SUPPLEMENT\",\"AUD\",\"900\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"3251091f-0308-4054-beae-df07fb907192\",\"综合服务费\",\"FEE\",\"AUD\",\"130\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"0f469f0f-6f18-4e6b-a7ae-80dcc21f8f0b\",\"儿童占床\",\"FARE\",\"AUD\",\"1898\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"0f469f0f-6f18-4e6b-a7ae-80dcc21f8f0b\",\"儿童不占床\",\"FARE\",\"AUD\",\"1198\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"0f469f0f-6f18-4e6b-a7ae-80dcc21f8f0b\",\"综合服务费\",\"FEE\",\"AUD\",\"220\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"0f469f0f-6f18-4e6b-a7ae-80dcc21f8f0b\",\"单人房差\",\"SUPPLEMENT\",\"AUD\",\"820\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"4aa09cf1-80ed-44b5-a5b0-19a785b7c2ea\",\"成人\",\"FARE\",\"AUD\",\"1499\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"4aa09cf1-80ed-44b5-a5b0-19a785b7c2ea\",\"儿童占床\",\"FARE\",\"AUD\",\"1149\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"4aa09cf1-80ed-44b5-a5b0-19a785b7c2ea\",\"单人房差\",\"SUPPLEMENT\",\"AUD\",\"600\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"125e99bb-4bd2-49dd-8499-f59539114c76\",\"成人／官网展示价\",\"FARE\",\"AUD\",\"699\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"0628f38f-8b90-4c7a-866e-45c79e386487\",\"成人／官网展示价\",\"FARE\",\"AUD\",\"899\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"b5a1d1c6-970f-411e-8ff8-3c9efffd91be\",\"成人／官网展示价\",\"FARE\",\"AUD\",\"1069\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"039974f2-723f-4259-bf2b-208ebfbb41ab\",\"成人\",\"FARE\",\"AUD\",\"185\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"039974f2-723f-4259-bf2b-208ebfbb41ab\",\"婴儿\",\"FARE\",\"AUD\",\"95\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"039974f2-723f-4259-bf2b-208ebfbb41ab\",\"儿童\",\"FARE\",\"AUD\",\"165\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"05d9f484-cda2-4e73-9bdf-1f78899bf37d\",\"成人\",\"FARE\",\"AUD\",\"799\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"05d9f484-cda2-4e73-9bdf-1f78899bf37d\",\"儿童\",\"FARE\",\"AUD\",\"799\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"05d9f484-cda2-4e73-9bdf-1f78899bf37d\",\"儿童不占床\",\"FARE\",\"AUD\",\"400\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"423daeef-ae3a-4dbc-b10f-191c05c1bf6c\",\"成人\",\"FARE\",\"AUD\",\"1939\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"423daeef-ae3a-4dbc-b10f-191c05c1bf6c\",\"儿童\",\"FARE\",\"AUD\",\"1859\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"423daeef-ae3a-4dbc-b10f-191c05c1bf6c\",\"单房差\",\"OPTIONAL_ACTIVITY\",\"AUD\",\"625\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"423daeef-ae3a-4dbc-b10f-191c05c1bf6c\",\"单房差\",\"SUPPLEMENT\",\"AUD\",\"625\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"4791c15a-153e-4478-9884-cd6c4876214e\",\"成人\",\"FARE\",\"AUD\",\"55\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"4791c15a-153e-4478-9884-cd6c4876214e\",\"儿童\",\"FARE\",\"AUD\",\"33\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"6f5c04d4-bb44-43a4-87ac-6d0afcad351f\",\"成人\",\"FARE\",\"AUD\",\"3026\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"6f5c04d4-bb44-43a4-87ac-6d0afcad351f\",\"儿童不占床\",\"FARE\",\"AUD\",\"840\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"6f5c04d4-bb44-43a4-87ac-6d0afcad351f\",\"儿童\",\"FARE\",\"AUD\",\"2911\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"ed608994-7332-4f47-a2c2-f39172892df3\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"269\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"ed608994-7332-4f47-a2c2-f39172892df3\",\"儿童不占床（无早餐） Child Without Bed（No Breakfast)\",\"FARE\",\"AUD\",\"299\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"ed608994-7332-4f47-a2c2-f39172892df3\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"499\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"ed608994-7332-4f47-a2c2-f39172892df3\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"320\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"ed608994-7332-4f47-a2c2-f39172892df3\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"110\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"67b2f4ae-5ad5-4239-a5c2-4bcb1e408d50\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"879\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"67b2f4ae-5ad5-4239-a5c2-4bcb1e408d50\",\"儿童不占床（无早餐） Child Without Bed（No Breakfast)\",\"FARE\",\"AUD\",\"599\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"67b2f4ae-5ad5-4239-a5c2-4bcb1e408d50\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"879\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"67b2f4ae-5ad5-4239-a5c2-4bcb1e408d50\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"90\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"67b2f4ae-5ad5-4239-a5c2-4bcb1e408d50\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"270\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"67b2f4ae-5ad5-4239-a5c2-4bcb1e408d50\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"939\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"67b2f4ae-5ad5-4239-a5c2-4bcb1e408d50\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"939\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"67b2f4ae-5ad5-4239-a5c2-4bcb1e408d50\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"110\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"67b2f4ae-5ad5-4239-a5c2-4bcb1e408d50\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"330\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"a8e40078-da58-4ac9-bebe-223708856e1f\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"999\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"a8e40078-da58-4ac9-bebe-223708856e1f\",\"儿童不占床（无早餐） Child Without Bed（No Breakfast)\",\"FARE\",\"AUD\",\"799\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"a8e40078-da58-4ac9-bebe-223708856e1f\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"999\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"a8e40078-da58-4ac9-bebe-223708856e1f\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"150\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"a8e40078-da58-4ac9-bebe-223708856e1f\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"260\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"08fe8d70-3e9f-47a1-95bd-289f6a2b2981\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"999\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"08fe8d70-3e9f-47a1-95bd-289f6a2b2981\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"999\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"08fe8d70-3e9f-47a1-95bd-289f6a2b2981\",\"儿童不占床（无早餐） Child Without Bed（No Breakfast)\",\"FARE\",\"AUD\",\"849\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"08fe8d70-3e9f-47a1-95bd-289f6a2b2981\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"310\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"08fe8d70-3e9f-47a1-95bd-289f6a2b2981\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"150\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e311aa7f-3af2-430c-a42b-339a188510f9\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"799\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e311aa7f-3af2-430c-a42b-339a188510f9\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"799\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e311aa7f-3af2-430c-a42b-339a188510f9\",\"儿童不占床（无早餐） Child Without Bed（No Breakfast)\",\"FARE\",\"AUD\",\"699\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e311aa7f-3af2-430c-a42b-339a188510f9\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"120\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e311aa7f-3af2-430c-a42b-339a188510f9\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"180\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e311aa7f-3af2-430c-a42b-339a188510f9\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"999\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e311aa7f-3af2-430c-a42b-339a188510f9\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"999\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e311aa7f-3af2-430c-a42b-339a188510f9\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"225\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e311aa7f-3af2-430c-a42b-339a188510f9\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"150\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"51b19c8e-5b7e-4dde-8207-be04863ecdf9\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"199\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"51b19c8e-5b7e-4dde-8207-be04863ecdf9\",\"儿童不占床（无早餐） Child Without Bed（No Breakfast)\",\"FARE\",\"AUD\",\"299\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"51b19c8e-5b7e-4dde-8207-be04863ecdf9\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"499\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"51b19c8e-5b7e-4dde-8207-be04863ecdf9\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"270\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"51b19c8e-5b7e-4dde-8207-be04863ecdf9\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"100\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"4c863644-350b-45f3-8b58-ad596779fbd0\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"49\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"4c863644-350b-45f3-8b58-ad596779fbd0\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"999\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"4c863644-350b-45f3-8b58-ad596779fbd0\",\"儿童不占床（无早餐） Child Without Bed（No Breakfast)\",\"FARE\",\"AUD\",\"499\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"4c863644-350b-45f3-8b58-ad596779fbd0\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"600\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"4c863644-350b-45f3-8b58-ad596779fbd0\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"140\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"aa53864b-d510-4ecd-980d-7d9ec600d652\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"0\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"aa53864b-d510-4ecd-980d-7d9ec600d652\",\"儿童不占床（无早餐） Child Without Bed（No Breakfast)\",\"FARE\",\"AUD\",\"1298\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"aa53864b-d510-4ecd-980d-7d9ec600d652\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"1798\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"aa53864b-d510-4ecd-980d-7d9ec600d652\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"180\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"aa53864b-d510-4ecd-980d-7d9ec600d652\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"650\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e28a6db3-9590-465d-8b0c-e158d2fd40ec\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"199\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e28a6db3-9590-465d-8b0c-e158d2fd40ec\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"499\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e28a6db3-9590-465d-8b0c-e158d2fd40ec\",\"儿童不占床（无早餐） Child Without Bed（No Breakfast)\",\"FARE\",\"AUD\",\"299\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e28a6db3-9590-465d-8b0c-e158d2fd40ec\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"270\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"e28a6db3-9590-465d-8b0c-e158d2fd40ec\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"100\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"6b77f493-b374-453b-8290-65744352322b\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"369\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"6b77f493-b374-453b-8290-65744352322b\",\"儿童不占床（无早餐） Child Without Bed（No Breakfast)\",\"FARE\",\"AUD\",\"299\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"6b77f493-b374-453b-8290-65744352322b\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"699\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"6b77f493-b374-453b-8290-65744352322b\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"390\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"6b77f493-b374-453b-8290-65744352322b\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"130\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"5a63dee3-e924-4b79-b423-ed431ba2d6b0\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"49\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"5a63dee3-e924-4b79-b423-ed431ba2d6b0\",\"儿童不占床（无早餐） Child Without Bed（No Breakfast)\",\"FARE\",\"AUD\",\"599\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"5a63dee3-e924-4b79-b423-ed431ba2d6b0\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"170\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"96e7c8f3-6152-4800-a1af-2001144d518a\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"498\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"96e7c8f3-6152-4800-a1af-2001144d518a\",\"儿童不占床（无早餐） Child Without Bed（No Breakfast)\",\"FARE\",\"AUD\",\"499\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"96e7c8f3-6152-4800-a1af-2001144d518a\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"699\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"96e7c8f3-6152-4800-a1af-2001144d518a\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"95\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"96e7c8f3-6152-4800-a1af-2001144d518a\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"390\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"bd7d2f5f-947b-4da6-9ae1-31e8b875de08\",\"成人报名费Tour Fee\",\"FARE\",\"AUD\",\"1099\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"bd7d2f5f-947b-4da6-9ae1-31e8b875de08\",\"儿童占床（含早餐）Child With Bed\",\"FARE\",\"AUD\",\"1499\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"bd7d2f5f-947b-4da6-9ae1-31e8b875de08\",\"儿童不占床（无早餐） Child Without Bed（No Breakfast)\",\"FARE\",\"AUD\",\"899\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"bd7d2f5f-947b-4da6-9ae1-31e8b875de08\",\"综合服务费（大小同价） Service Fee\",\"FEE\",\"AUD\",\"170\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"},"[\"bd7d2f5f-947b-4da6-9ae1-31e8b875de08\",\"单人房间差Single Supplement\",\"SUPPLEMENT\",\"AUD\",\"680\"]":{"unit":"PER_PERSON","basis":"USER_AUTHORIZED_ROW_TYPE","display":"每人"}};
  const r=rules[JSON.stringify([p._displayRevision||'',p.label,p.kind,p.currency,String(Number(p.amount))])];return r&&(!p.unit||['UNKNOWN','NOT_CAPTURED'].includes(p.unit))&&!p.unitLiteral?{...p,unit:r.unit,unitLiteral:r.unit==='OTHER'?r.display:'',displayUnitBasis:r.basis}:p;
 }
 function isExtra(p){return p.kind!=='FARE'||['MANDATORY_EXTRA','OPTIONAL_EXTRA'].includes(p.chargeBasis);}
 function visibleExtra(p){
  p=priceView(p);
  const state=p.state||p.price_state,unit=p.unit||p.unit_basis;
  // Customer rows show confirmed charges; unresolved facts remain in staff records.
  if(state!=='FIXED'||!unit||['UNKNOWN','NOT_CAPTURED','NOT_APPLICABLE'].includes(unit))return false;
  if(unit==='OTHER'&&!p.unitLiteral)return false;
  const amount=p.amount;
  return amount!==null&&amount!==undefined&&String(amount).trim()!==''&&Number.isFinite(Number(amount))&&Number(amount)>0&&!!p.currency&&!!String(p.label||'').trim();
 }
 function priceOrder(p){
  if(Number.isFinite(p.displayOrder))return p.displayOrder;
  const label=p.label||'';return /成人|adult/i.test(label)?0:/[儿兒]童.*不[占佔]床|child.*without/i.test(label)?20:/[儿兒]童|child/i.test(label)?10:/[婴嬰][儿兒]|infant/i.test(label)?30:/单.*房|單.*房|single/i.test(label)?40:50;
 }
 function referencePriceGroups(value){
  return (value?.priceGroups||[]).map(g=>({...g,rows:g.rows.filter(p=>g.kind==='FARE'||visibleExtra(p)).sort((a,b)=>priceOrder(a)-priceOrder(b))})).filter(g=>g.rows.length);
 }

 function conditionText(value,kind){
  const headings={includes:['费用包含','价格包含'],excludes:['费用不含','价格不含'],booking:['预订须知','参团须知','预订注意事项'],cancellation:['退改政策','退改规定','退改条件']};
  const lines=String(value??'').replace(/\r\n?/g,'\n').trim().split('\n');
  while(lines.length&&(!(lines[0]||'').trim()||(headings[kind]||[]).includes(lines[0].trim().replace(/[：:]$/,''))))lines.shift();
  const parts=lines.join('\n').trim().split(/\n\s*\n/),out=[];
  for(const p of parts){if(!out.length||p.trim()!==out[out.length-1].trim())out.push(p);}
  return out.join('\n\n');
 }
 // Presentation only: each input offer keeps its own scope; amounts are never combined.
 function compactPriceTable(prices){
  const aliases={"成人／官网展示价":["成人",""],"成人报名费Tour Fee":["成人","报名费"],"成人报名费":["成人","报名费"],"儿童占床（含早餐）Child With Bed":["儿童占床","含早餐"],"儿童不占床（无早餐） Child Without Bed（No Breakfast)":["儿童不占床","无早餐"],"12岁以下儿童占床（含早餐）":["儿童占床","12岁以下 · 含早餐"],"12岁以下儿童不占床（无早餐）":["儿童不占床","12岁以下 · 无早餐"],"单人房间差Single Supplement":["单房差",""],"单人房差":["单房差",""],"单房差每人一共":["单房差","每人全程"],"综合服务费（大小同价） Service Fee":["服务费","成人儿童同价"],"综合服务费（大小同价）":["服务费","成人儿童同价"],"综合服务费":["服务费",""],"酒店续住（双人房含早/晚） Pre/Post Hotel":["酒店续住","双人房 · 含早"],"酒店续住（双人房含早／每晚）":["酒店续住","双人房 · 含早 · 每晚"],"额外接/送机 （2人起，每人价格）Extra Transfer":["额外接送机","2人起 · 每人价格"],"额外接／送机（2人起，每人价格）":["额外接送机","2人起 · 每人价格"]};
  const short=p=>/^团前接机到达航班时间/.test(p.label)?['团前接机',p.label]:/^团后送机离开航班时间/.test(p.label)?['团后送机',p.label]:[p.displayLabel||(aliases[p.label]||[p.label,''])[0],p.displayCondition??(aliases[p.label]||[p.label,''])[1]];
  const unit=p=>p.unitText||({PER_PERSON:'每人',PER_ROOM:'每房',PER_NIGHT:'每晚',PER_DAY:'每日',PER_GROUP:'每团',PER_VEHICLE:'每车',PER_BOOKING:'每单',PER_ROOM_PER_NIGHT:'每房／每晚',PER_PERSON_PER_NIGHT:'每人／每晚'}[p.unit]||p.unitLiteral||'计价方式请咨询');
  const order=p=>(isExtra(p)?100:0)+(/成人|adult/i.test(p.label)?0:/[儿兒]童|child/i.test(p.label)?1:/[婴嬰][儿兒]|infant/i.test(p.label)?2:3);
  const groups=new Map();
  for(const original of prices){
   const p=priceView(original);
   if(isExtra(p)&&!visibleExtra(p))continue;
   // Different currencies, units and explicit scopes never become a comparable row.
   const key=JSON.stringify([p.currency,p.unit,p.unitLiteral||'',p.scopeKey||'']);
   if(!groups.has(key))groups.set(key,[]);
   groups.get(key).push(p);
  }
  return '<style>.v2-price-scroll{max-width:100%;overflow-x:auto}.v2-quotes.v2-compact-prices{min-width:0;width:100%;table-layout:auto}.v2-compact-prices caption{text-align:left;padding:8px 0;color:#536d85}.v2-compact-prices th,.v2-compact-prices td{min-width:92px!important;padding:10px 12px;white-space:normal;overflow-wrap:anywhere;text-align:left}.v2-compact-prices td>strong{white-space:nowrap}.v2-compact-prices small{display:block;font-weight:400;margin-top:3px}.v2-compact-prices .v2-extra-heading{background:#fff4e6}.v2-compact-prices details{padding:6px;margin:6px 0 0;font-size:12px;max-width:260px}.v2-compact-prices details p{white-space:pre-wrap}.v2-price-scroll-hint{display:none}@media(max-width:600px){.v2-compact-prices th,.v2-compact-prices td{padding:8px}.v2-price-scroll-hint{display:block;font-size:12px;color:#637587}}</style>'+
   [...groups.values()].map(values=>{
    const rows=[...values].sort((a,b)=>order(a)-order(b)),fare=rows.filter(p=>!isExtra(p)),extra=rows.filter(isExtra);
    return '<div class="v2-table-scroll v2-price-scroll" role="region" aria-label="行程报价，可横向滚动" tabindex="0"><table class="v2-quotes v2-compact-prices"><caption>'+esc((rows[0].currency||'币种请咨询')+' · '+unit(rows[0]))+'</caption><thead><tr>'+(fare.length?'<th scope="colgroup" colspan="'+fare.length+'">行程团费</th>':'')+(extra.length?'<th scope="colgroup" class="v2-extra-heading" colspan="'+extra.length+'">附加费用 · 另付</th>':'')+'</tr><tr>'+rows.map(p=>{const [name,condition]=short(p);return '<th scope="col" title="'+esc(p.label)+'">'+esc(name)+(condition?'<small>'+esc(condition)+'</small>':'')+(isExtra(p)?'<small>'+esc(p.chargeBasis==='MANDATORY_EXTRA'?'必付':p.chargeBasis==='OPTIONAL_EXTRA'?'按需':'另付')+'</small>':'')+'</th>';}).join('')+'</tr></thead><tbody><tr>'+rows.map(p=>{
     const valid=['FIXED','ZERO','FREE'].includes(p.state)&&p.amount!==null&&p.amount!==undefined&&String(p.amount).trim()!==''&&Number.isFinite(Number(p.amount))&&Number(p.amount)>=0;
     const amount=p.state==='ENQUIRY'?'请咨询':!valid?'金额请咨询':new Intl.NumberFormat('en-AU',{minimumFractionDigits:2,maximumFractionDigits:4}).format(Number(p.amount))+' '+(p.currency||'');
     return '<td><strong>'+esc(amount)+'</strong>'+(p.condition?'<details><summary>适用条件</summary><p>'+esc(p.condition)+'</p></details>':'')+'</td>';
    }).join('')+'</tr></tbody></table></div>';
   }).join('')+'<p class="v2-price-scroll-hint">可左右滑动查看全部价格。</p>';
 }

 function dayQuoteHTML(offers,selectedKey,revision=''){
  if(!offers.length)return '';
  const groups=new Map(),labelFor=p=>{
   const aliases={"成人／官网展示价":["成人",""],"成人报名费Tour Fee":["成人","报名费"],"成人报名费":["成人","报名费"],"儿童占床（含早餐）Child With Bed":["儿童占床","含早餐"],"儿童不占床（无早餐） Child Without Bed（No Breakfast)":["儿童不占床","无早餐"],"单人房间差Single Supplement":["单房差",""],"单人房差":["单房差",""],"综合服务费（大小同价） Service Fee":["服务费","成人儿童同价"],"综合服务费（大小同价）":["服务费","成人儿童同价"],"综合服务费":["服务费",""],"酒店续住（双人房含早/晚） Pre/Post Hotel":["酒店续住","双人房 · 含早"],"酒店续住（双人房含早／每晚）":["酒店续住","双人房 · 含早 · 每晚"],"额外接/送机 （2人起，每人价格）Extra Transfer":["额外接送机","2人起 · 每人价格"],"额外接／送机（2人起，每人价格）":["额外接送机","2人起 · 每人价格"]};
   const alias=aliases[p.label]||[p.label,''];return [p.seasonLabel?alias[0]:p.displayLabel||alias[0],p.seasonLabel?alias[1]:p.displayCondition??alias[1]];
  };
  offers.forEach(offer=>offer.prices.forEach(original=>{
   const p=priceView(original);if(isExtra(p)&&!visibleExtra(p))return;
   const groupKey=JSON.stringify([p.currency,p.unit,p.unitLiteral||'',p.scopeKey||'']);
   if(!groups.has(groupKey))groups.set(groupKey,{currency:p.currency,unit:p.unit,unitLiteral:p.unitLiteral||'',offers:new Map(),columns:new Map()});
   const group=groups.get(groupKey),[label,condition]=labelFor(p),columnKey=JSON.stringify([label,condition,p.kind,p.chargeBasis||'']);
   if(!group.columns.has(columnKey))group.columns.set(columnKey,{key:columnKey,label,condition,kind:p.kind,chargeBasis:p.chargeBasis||'',order:priceOrder(p)});
   const rowKey=JSON.stringify([offer.key,p.seasonLabel||'']);
   if(!group.offers.has(rowKey))group.offers.set(rowKey,{offer,season:p.seasonLabel||'',prices:new Map()});
   const row=group.offers.get(rowKey),cell=row.prices.get(columnKey)||[];cell.push(p);row.prices.set(columnKey,cell);
  }));
  const amount=p=>{const valid=['FIXED','ZERO','FREE'].includes(p.state)&&p.amount!==null&&p.amount!==undefined&&String(p.amount).trim()!==''&&Number.isFinite(Number(p.amount))&&Number(p.amount)>=0;return p.state==='ENQUIRY'?'请咨询':!valid?'金额请咨询':new Intl.NumberFormat('en-AU',{minimumFractionDigits:2,maximumFractionDigits:4}).format(Number(p.amount))+' '+(p.currency||'');};
  const unitText=g=>g.unitText||({PER_PERSON:'每人',PER_ROOM:'每房',PER_NIGHT:'每晚',PER_DAY:'每日',PER_GROUP:'每团',PER_VEHICLE:'每车',PER_BOOKING:'每单',PER_ROOM_PER_NIGHT:'每房／每晚',PER_PERSON_PER_NIGHT:'每人／每晚'}[g.unit]||g.unitLiteral||'计价方式请咨询');
  return [...groups.values()].map(group=>{
   const columns=[...group.columns.values()].sort((a,b)=>(a.kind!=='FARE')-(b.kind!=='FARE')||a.order-b.order),fares=columns.filter(x=>x.kind==='FARE'&&!['MANDATORY_EXTRA','OPTIONAL_EXTRA'].includes(x.chargeBasis)),extras=columns.filter(x=>!fares.includes(x));
   const headers=columns.map(x=>'<th scope="col">'+esc(x.label)+(x.condition?'<small>'+esc(x.condition)+'</small>':'')+(x.kind!=='FARE'?'<small>'+esc(x.chargeBasis==='MANDATORY_EXTRA'?'必付':x.chargeBasis==='OPTIONAL_EXTRA'?'按需':'另付')+'</small>':'')+'</th>').join('');
   const rows=[...group.offers.values()].sort((a,b)=>(a.season==='淡季'?0:a.season==='旺季'?1:2)-(b.season==='淡季'?0:b.season==='旺季'?1:2)).map(({offer,prices,season})=>{
    const primary=season||(offers.length===1&&offer.title?offer.title:offer.label);
    const durationInTitle=offer.days&&new RegExp('(?:^|\\D)'+offer.days+'\\s*[天日]').test(primary);
    return '<tr'+(offer.key===selectedKey?' class="v2-quote-current"':'')+'><th scope="row">'+esc(primary)+(offer.days&&!durationInTitle&&!season?'<small>'+esc(offer.days)+'日</small>':'')+(!season&&offer.scope&&offer.scope!=='报价适用日期及附加条件，请咨询顾问确认。'?'<small>'+esc(offer.scope)+'</small>':'')+'</th>'+columns.map(column=>'<td>'+((prices.get(column.key)||[]).map(p=>'<strong>'+esc(amount(p))+'</strong>'+(p.condition?'<details><summary>适用条件</summary><p>'+esc(p.condition)+'</p></details>':'')).join('<br>')||'—')+'</td>').join('')+'</tr>';
   }).join('');
   return '<style>.v2-compact-prices .v2-quote-current>*{background:#eaf6fc}</style><div class="v2-table-scroll v2-price-scroll" role="region" aria-label="行程报价，可横向滚动" tabindex="0"><table class="v2-quotes v2-compact-prices"><caption>'+esc((group.currency||'币种请咨询')+' · '+unitText(group))+'</caption><thead><tr><th scope="colgroup" rowspan="2">方案／季节</th>'+(fares.length?'<th scope="colgroup" colspan="'+fares.length+'">行程团费</th>':'')+(extras.length?'<th scope="colgroup" class="v2-extra-heading" colspan="'+extras.length+'">附加费用 · 另付</th>':'')+'</tr><tr>'+headers+'</tr></thead><tbody>'+rows+'</tbody></table></div>';
  }).join('')+'<p class="v2-price-scroll-hint">可左右滑动查看全部价格。</p><p class="v2-price-note">具体日期、适用条件及余位请咨询确认。</p>'+(offers.some(o=>o.prices.some(p=>p.seasonLabel))?'<p role="note">季节与具体日期的适用关系尚未确认，请咨询。</p>':'');
 }


 function quoteHTML(offers,selectedKey,ticket=false,revision=''){
  if(!offers.length)return '';
  offers=offers.map(o=>({...o,prices:o.prices.map(p=>priceView({...p,_displayRevision:revision}))}));
  return dayQuoteHTML(offers,selectedKey,revision);
 }

 function creditHTML(t){
  const credits=(t.heroCredits||[]).filter(c=>c.author||c.source_url||c.license);
  if(!credits.length)return '';
  return '<details class="v2-image-credit"><summary aria-label="图片来源与许可">ⓘ</summary><div>'+credits.map(c=>'<p>'+esc(c.author)+(c.source_url?' · '+link(c.source_url,'图片来源'):'')+(c.license_url?' · '+link(c.license_url,c.license||'许可'):c.license?' · '+esc(c.license):'')+'</p>').join('')+'</div></details>';
 }
 function heroHTML(t){
  const images=[...new Set((t.img||[]).filter(url=>safeURL(url)!=='#'))];
  return '<div class="v2-gallery" role="region" aria-roledescription="轮播" aria-label="产品图片" tabindex="0"><div class="v2-gallery-stage"><div class="v2-gallery-track">'+images.map((url,i)=>'<a class="v2-gallery-slide" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer" aria-label="查看产品图片 '+(i+1)+'" aria-hidden="'+(i!==0)+'" tabindex="'+(i===0?0:-1)+'"><img src="'+esc(url)+'" alt="'+esc(t.nameZh)+' · 图片 '+(i+1)+'" '+(i?'loading="lazy" decoding="async"':'loading="eager" fetchpriority="high" decoding="async"')+'>'+((t.heroCaptions||[])[t.img.indexOf(url)]?'<span class="v2-gallery-caption">'+esc(t.heroCaptions[t.img.indexOf(url)])+'</span>':'')+'</a>').join('')+'</div></div>'+creditHTML(t)+(images.length>1?'<button class="v2-gallery-prev" type="button" aria-label="上一张产品图片">‹</button><button class="v2-gallery-next" type="button" aria-label="下一张产品图片">›</button><div class="v2-gallery-controls"><div class="v2-gallery-dots">'+images.map((_,i)=>'<button type="button" aria-label="显示第 '+(i+1)+' 张产品图片" aria-current="'+(i===0)+'" data-slide="'+i+'"></button>').join('')+'</div><span class="v2-gallery-count">1 / '+images.length+'</span><button type="button" class="v2-gallery-pause" aria-label="暂停图片轮播">Ⅱ</button></div>':'')+'</div>';
 }
 function setupHero(box){
  const gallery=box.querySelector('.v2-gallery'),slides=[...gallery.querySelectorAll('.v2-gallery-slide')];
  if(slides.length<2)return;
  const track=gallery.querySelector('.v2-gallery-track'),dots=[...gallery.querySelectorAll('[data-slide]')],pause=gallery.querySelector('.v2-gallery-pause');
  let index=0,paused=matchMedia('(prefers-reduced-motion: reduce)').matches,startX=null;
  function show(next){index=(next+slides.length)%slides.length;track.style.transform='translateX(-'+index*100+'%)';slides.forEach((slide,i)=>{slide.setAttribute('aria-hidden',String(i!==index));slide.tabIndex=i===index?0:-1;});dots.forEach((dot,i)=>dot.setAttribute('aria-current',String(i===index)));gallery.querySelector('.v2-gallery-count').textContent=(index+1)+' / '+slides.length;}
  function state(){pause.textContent=paused?'▶':'Ⅱ';pause.setAttribute('aria-label',paused?'播放图片轮播':'暂停图片轮播');}
  gallery.querySelector('.v2-gallery-prev').addEventListener('click',()=>show(index-1));
  gallery.querySelector('.v2-gallery-next').addEventListener('click',()=>show(index+1));
  dots.forEach(dot=>dot.addEventListener('click',()=>show(Number(dot.dataset.slide))));
  pause.addEventListener('click',()=>{paused=!paused;state();});state();
  gallery.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();show(index+(e.key==='ArrowRight'?1:-1));}});
  gallery.addEventListener('touchstart',e=>{startX=e.touches[0].clientX;},{passive:true});
  gallery.addEventListener('touchend',e=>{if(startX!==null){const diff=e.changedTouches[0].clientX-startX;if(Math.abs(diff)>45)show(index+(diff<0?1:-1));startX=null;}},{passive:true});
  const timer=setInterval(()=>{if(!gallery.isConnected){clearInterval(timer);return;}if(!paused&&!document.hidden&&!gallery.matches(':hover')&&!gallery.contains(document.activeElement))show(index+1);},6000);
 }
 function renderContent(t,offer,box,offers){
  const say=(zh,en)=>window.Etrips?.getLang()==='en'?en:zh;
  const c=EtripsContent.project(t,offer),intro=box.querySelector('.v2-intro');
  const rule=t.v2Public?.presentationRules,labels=rule?.origin==='SYSTEM'?{}:rule?.labels||{};
  if(labels.intro)c.introTitle=labels.intro;
  intro.hidden=!c.intro&&!c.highlights;
  intro.innerHTML='<h3>'+esc(say(c.introTitle,c.introTitle==='行程亮点'?'Highlights':'Overview'))+'</h3>'+(c.highlights?'<ul class="v2-concise-highlights">'+c.highlights.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ul>':highlights(c.intro));
  const sectionHTML=x=>'<section class="v2-content-section"><h4>'+esc(x.title)+'</h4>'+paras(x.text)+'</section>';
  const detailHTML=x=>'<details class="v2-content-details"><summary>'+esc(x.title)+'</summary>'+paras(x.text)+'</details>';
  const timeline=box.querySelector('.v2-timeline');
  timeline.innerHTML=(c.arrangementNote?'<p class="v2-content-note">'+esc(c.arrangementNote)+'</p>':'')+c.days.map(dayHTML).join('')+c.details.map(detailHTML).join('');
  const label=box.querySelector('.v2-daily-title'),hasDays=c.days.some(d=>Number.isInteger(d.d)&&d.d>0);
  label.hidden=offers.length===1||!hasDays;
  if(!label.hidden)label.textContent=offer.label+(offer.flights?say(' · 地接行程',' · Land itinerary'):'');
  const terms=box.querySelector('[data-v2-panel="terms"]');
  let extra=terms.querySelector('.v2-content-notes');
  if(!extra){extra=document.createElement('div');extra.className='v2-content-notes';terms.append(extra);}
  extra.innerHTML=c.notes.concat(t.v2Public.importantNotes?[{title:'重要提示',text:t.v2Public.importantNotes}]:[]).map(sectionHTML).join('');
  if(rule){for(const [key,text] of Object.entries(labels)){if(key==='intro'||!text)continue;const button=box.querySelector('[data-v2-tab="'+key+'"]');if(button)button.textContent=text;}timeline.querySelectorAll('.v2-content-details').forEach(el=>{el.open=rule.details_open===true;});if(labels.itinerary)box.querySelector('.v2-arrangement-title').textContent=labels.itinerary;}
  // Only the pricing tab displays exact quotes; source-specific terms remain available here.
  let action=timeline.querySelector('.v2-conditions-link');
  if(c.notes.length){action=document.createElement('button');action.type='button';action.className='btn v2-conditions-link';action.textContent=say('查看自费、适用条件与游玩提醒','View optional extras, conditions and tips');action.addEventListener('click',()=>box.querySelector('[data-v2-tab="terms"]').click());timeline.append(action);}
 }

 function dayHTML(d){
  const lines=String(d.descZh??'').replace(/\r\n?/g,'\n').split('\n').map(line=>line.trim()).filter(Boolean);
  if(lines[0]===String(d.d))lines.shift();
  if(lines[0]===String(d.titleZh??'').trim())lines.shift();
  const body=lines.map(line=>'<p'+(/^(?:住宿|酒店)[：:]/.test(line)?' class="v2-day-stay"':'')+'>'+esc(line)+'</p>').join('');
  return '<section class="v2-day"><header class="v2-day-header">'+(Number.isInteger(d.d)&&d.d>0?'<span class="v2-day-number">第 '+esc(d.d)+'天</span>':d.routeStep?'<span class="v2-day-number">'+esc(d.routeStep)+'</span>':'')+'<h4>'+esc(d.titleZh)+'</h4></header><div class="v2-day-body">'+body+'</div></section>';
 }
 function calendarHTML(offer,view,ticket=false){
  const [year,month]=view.split('-').map(Number); const count=new Date(Date.UTC(year,month,0)).getUTCDate(),lead=(new Date(Date.UTC(year,month-1,1)).getUTCDay()+6)%7;
  const cells=Array.from({length:lead},()=>'<span aria-hidden="true"></span>');
  for(let day=1;day<=count;day++){
   const date=view+'-'+String(day).padStart(2,'0'), d=offer.departures.find(x=>x.date===date),sold=d?.status==='soldout',blocked=d?.selectable===false,label=EtripsPublicDisplay.dateLabel(d).replace('出发日期',ticket?'使用日期':offer.dateDisplayLabel||'出发日期');
   cells.push(d?'<button type="button" class="v2-date'+(sold?' soldout':blocked?' unavailable':' highlight')+'" data-date="'+date+'" '+(sold||blocked?'disabled':'')+' aria-label="'+date+' '+esc(label)+'">'+day+(sold?'<small>售罄</small>':blocked?'<small>不可选</small>':'')+'</button>':'<span class="v2-day-off">'+day+'</span>');
  }
  return '<div class="v2-cal-nav"><button type="button" data-month="-1" aria-label="上个月">‹</button><b>'+year+'年'+month+'月</b><button type="button" data-month="1" aria-label="下个月">›</button></div><div class="v2-cal-grid">'+['一','二','三','四','五','六','日'].map(x=>'<b>周'+x+'</b>').join('')+cells.join('')+'</div>';
 }
 function feeContactNote(){return '<p class="v2-fee-contact-note" role="note">如需额外接送、升级或其他服务，请联系顾问确认适用项目及费用，经您确认后安排。已确认订单按双方确认的服务内容及费用执行。</p>';}
 window.EtripsCustomerDisplay=Object.freeze({visibleExtra,isExtra,feeContactNote,conditionText,priceView,renderContent,compactPriceTable,dayQuoteHTML});
 function inquiryReferenceHTML(value,includeConditions=true){
  if(!value)return '';
  if(!['NOVA_DAY_REFERENCE_20261017.1','ETRIPS_INQUIRY_REFERENCE_20261025.1'].includes(value.version)||value.bookingEnabled!==false||value.inventoryConfirmed!==false||value.priceDateMapping!=='NOT_CONFIRMED'||!Array.isArray(value.priceGroups)||!Array.isArray(value.calendarRules))throw new Error('Invalid inquiry reference contract');
  let html='<section class="v2-inquiry-reference" aria-label="参考报价与班期">';
  if(value.consultationText)html+='<p role="note">'+esc(value.consultationText)+'</p>';
  const weekdays={MON:'周一',TUE:'周二',WED:'周三',THU:'周四',FRI:'周五',SAT:'周六',SUN:'周日'};
  const zones={'Australia/Sydney':'悉尼','Australia/Melbourne':'墨尔本','Australia/Brisbane':'昆士兰','Australia/Perth':'珀斯','Australia/Adelaide':'阿德莱德','Australia/Hobart':'塔斯马尼亚','Australia/Darwin':'达尔文'};
  if(value.calendarRules.length){
   html+='<h3>出发安排</h3><ul>';
   value.calendarRules.forEach(rule=>{
    if(rule.mode==='FIXED'){
     const months=new Map();for(const date of [...new Set(rule.fixedDates||[])].sort()){if(!/^20\d{2}-\d{2}-\d{2}$/.test(date))continue;const month=date.slice(0,7);if(!months.has(month))months.set(month,[]);months.get(month).push(date);}
     for(const [month,dates] of months)html+='<li><strong>'+esc((rule.dateDisplayLabel||'出发日期')+' · '+month.replace('-', '年')+'月')+'</strong><p>'+dates.map(date=>'<span style="display:inline-block;margin:4px 10px 4px 0">'+esc(date.slice(8)+'日'+((rule.soldOutDates||[]).includes(date)?'（售罄）':date<today()?'（已过期）':''))+'</span>').join('')+'</p></li>';
     return;
    }
    const text=rule.mode==='TEXT'?String(rule.text||''):rule.mode==='DAILY'?'每天出发':rule.mode==='WEEKLY'?(rule.weekdays||[]).map(d=>weekdays[d]||'').join('、')+'出发':(rule.fixedDates||[]).join('、');
    html+='<li><strong>'+esc(text)+'</strong>'+esc(rule.timeZone?' · '+(zones[rule.timeZone]||'出发地')+'当地日期':'');
    if(rule.start||rule.end)html+='<p>'+esc((rule.start||'开始日期未列')+' 至 '+(rule.end||'结束日期未列'))+'</p>';
    if(rule.cutoff&&Number.isInteger(rule.cutoff.days_before)&&/^([01]\d|2[0-3]):[0-5]\d$/.test(rule.cutoff.local_time||''))html+='<p>'+esc('报名截止：出发前'+rule.cutoff.days_before+'天 '+rule.cutoff.local_time+'（当地时间）')+'</p>';
    html+='</li>';
   });
   html+='</ul>';
  }
  const priceGroups=referencePriceGroups(value);
  if(priceGroups.length){
   html+='<h3>参考报价</h3>';
   priceGroups.forEach((group,index)=>{
    html+='<details class="v2-reference-group"'+(index===0?' open':'')+'><summary>'+esc((group.kind==='FARE'?'':'附加项目 · ')+group.label)+'</summary><table><caption class="sr-only">'+esc(group.label)+'参考报价</caption><thead><tr><th scope="col">旅客／项目</th><th scope="col">参考金额</th><th scope="col">计价单位</th></tr></thead><tbody>';
    group.rows.forEach(row=>{
     if(row.state!=='ENQUIRY'&&(!['FIXED','ZERO','ZERO_VALID','FREE'].includes(row.state)||!/^[A-Z]{3}$/.test(row.currency||'')||!Number.isFinite(Number(row.amount))||Number(row.amount)<0||!row.unit))throw new Error('Incomplete reference price');
     const amount=row.state==='ENQUIRY'?'请咨询':new Intl.NumberFormat('en-AU',{style:'currency',currency:row.currency,currencyDisplay:'code',minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(row.amount));
     html+='<tr><th scope="row">'+esc(row.label)+'</th><td>'+esc(amount)+'</td><td>'+esc(row.unit)+'</td></tr>';
     const conditions=row.conditions||{};
     if(conditions.season_label||conditions.observed_selected_date)html+='<tr><td colspan="3">'+esc([conditions.season_label,conditions.observed_selected_date].filter(Boolean).join(' · '))+'</td></tr>';
    });
    html+='</tbody></table></details>';
   });
  }
  if(includeConditions)for(const [key,label] of [['includes','费用包含'],['excludes','费用不含'],['bookingNotes','参团须知'],['cancellation','退改条件']])if(conditionText(value[key],{includes:'includes',excludes:'excludes',bookingNotes:'booking',cancellation:'cancellation'}[key]).trim())html+='<details class="v2-reference-group"><summary>'+label+'</summary>'+paras(conditionText(value[key],{includes:'includes',excludes:'excludes',bookingNotes:'booking',cancellation:'cancellation'}[key]))+'</details>';
  return html+feeContactNote()+'</section>';
 }
 function calendarPresentation(t){
  const original=t.v2Public,meta=original.calendarPresentation||window.EtripsCalendarPresentation?.[original.contentHash];
  if(!meta)return t;
  const label=meta.dateLabel==='抵达日期'?meta.dateLabel:null,sold=new Set((meta.soldOutDates||[]).filter(d=>/^20\d{2}-\d{2}-\d{2}$/.test(d)));
  const dates=values=>(values||[]).map(d=>sold.has(d.date)?{...d,status:'soldout',selectable:false}:d);
  const offers=(original.offers||[]).map(o=>({...o,...(label?{dateDisplayLabel:label}:{}),departures:dates(o.departures),fixedDepartures:dates(o.fixedDepartures),fixedRules:o.fixedRules?.map(r=>({...r,...(sold.has(r.fixed_date)?{inventory_state:'SOLD_OUT'}:{})}))}));
  const reference=original.referenceData?{...original.referenceData,calendarRules:original.referenceData.calendarRules.map(r=>r.mode==='FIXED'?{...r,...(label?{dateDisplayLabel:label}:{}),soldOutDates:[...new Set([...(r.soldOutDates||[]),...sold])]}:r)}:undefined;
  return {...t,v2Public:{...original,offers,...(reference?{referenceData:reference}:{}),...(label&&original.sharedDateLabel?{sharedDateLabel:label}:{}),sharedDepartureDates:dates(original.sharedDepartureDates)}};
 }
 window.EtripsCalendarProject=calendarPresentation;
 window.EtripsV2Detail=function(t,box,opts){
  t=calendarPresentation(t);
  box._v2Cleanup?.();
  if(t.v2Public.preRelease===true){
   const d=t.v2Public;
   if(d.bookingEnabled!==false||d.offers.length||t.departureDates.length)throw new Error('Inquiry-only product contains bookable data');
   const query=window.EtripsCustomerProductId.query(t,{},'tour');query.set('mode','inquiry');
   const consult='<a class="btn btn-primary v2-consult-link" href="contact.html?'+esc(query.toString())+'">咨询此行程</a>';
   const prefix='inquiry-'+String(t.id).replace(/[^a-zA-Z0-9]/g,''),reference=d.referenceData||{};
   const text=(key,kind)=>conditionText(d.staffPreview?d[key]:reference[key]||d[key]||'',kind);
   const conditions=[['includes','费用包含','includes'],['excludes','费用不含','excludes']].map(([key,label,kind])=>text(key,kind).trim()?'<section><h3>'+label+'</h3>'+paras(text(key,kind))+'</section>':'').join('');
   const terms=[['bookingNotes','参团须知','booking'],['cancellation','退改规定','cancellation']].map(([key,label,kind])=>text(key,kind).trim()?'<section class="v2-booking-notices"><h3>'+label+'</h3>'+notices(text(key,kind))+'</section>':'').join('');
   box.innerHTML='<article class="v2-detail v2-inquiry-only"><div class="v2-hero">'+heroHTML({...t,img:t.img.slice(0,1),heroCaptions:(t.heroCaptions||[]).slice(0,1)})+'<div><p class="v2-tags">'+esc((t.tags||[]).join(' · ')||t.destZh||'')+'</p><h2>'+esc(t.nameZh)+'</h2><section class="v2-release-note" role="note">'+esc(d.staffPreview?d.displayNotice:d.consultationNotice||'行程咨询 · 价格、出发日期及余位请确认。')+'</section><p><strong>'+esc(referencePriceGroups(d.referenceData).length?'查看下方参考报价':d.referenceData?.calendarRules.length?'查看下方出发安排参考':'价格与班期请咨询')+'</strong></p>'+consult+'<section class="v2-intro"></section></div></div><div class="v2-tabs" role="tablist" aria-label="产品详情">'+[['dates','日期与价格'],['itinerary',t.productType==='TICKET_ACTIVITY'?'游玩说明':'行程安排'],['terms','参团须知']].map(([key,label])=>'<button type="button" role="tab" id="'+prefix+'-tab-'+key+'" aria-controls="'+prefix+'-panel-'+key+'" data-v2-tab="'+key+'">'+label+'</button>').join('')+'</div>'+[['dates',inquiryReferenceHTML(d.referenceData,false)+conditions+(!d.referenceData?feeContactNote():'')],['itinerary','<h3 class="v2-arrangement-title">'+(t.productType==='TICKET_ACTIVITY'?'游玩说明':'行程安排')+'</h3><h3 class="v2-daily-title"></h3><div class="v2-timeline"></div>'],['terms',terms]].map(([key,html])=>'<section role="tabpanel" tabindex="0" id="'+prefix+'-panel-'+key+'" aria-labelledby="'+prefix+'-tab-'+key+'" data-v2-panel="'+key+'">'+html+'</section>').join('')+'</article>';
   const tabs=[...box.querySelectorAll('[role=tab]')],panels=[...box.querySelectorAll('[role=tabpanel]')];
   const choose=key=>{if(!tabs.some(b=>b.dataset.v2Tab===key))key='dates';tabs.forEach(b=>{const active=b.dataset.v2Tab===key;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});panels.forEach(p=>{p.hidden=p.dataset.v2Panel!==key;});};
   tabs.forEach((b,i)=>{b.addEventListener('click',()=>choose(b.dataset.v2Tab));b.addEventListener('keydown',e=>{const n=e.key==='ArrowRight'?(i+1)%tabs.length:e.key==='ArrowLeft'?(i+tabs.length-1)%tabs.length:e.key==='Home'?0:e.key==='End'?tabs.length-1:-1;if(n>=0){e.preventDefault();tabs[n].focus();}});});
   choose(new URLSearchParams(location.search).get('tab')||'dates');
   renderContent(t,{days:t.days,itinerary:t.itinerary,label:'行程安排'},box,[{}]);
   setupHero(box);
   if((opts||{}).showFullDetail!==false)box.querySelector('article').insertAdjacentHTML('beforeend','<p><a class="btn" href="detail.html?id='+encodeURIComponent(t.id)+'">查看完整详情页</a></p>');
   return;
  }
  const lifecycle=new AbortController();
  const data=t.v2Public,offers=data.offers,state=EtripsProductSelection.read(t,location.search);
  const ticket=t.productType==='TICKET_ACTIVITY';
  const sharedDates=Array.isArray(data.sharedDepartureDates)?data.sharedDepartureDates:[];
  let selectedOffer=offers.find(o=>o.key===state.offer),view=state.view,requestedDate=state.date,activeTab=state.tab;
  if(sharedDates.length&&!requestedDate)view=sharedDates[0].date.slice(0,7);
  const alive=()=>box.isConnected&&!lifecycle.signal.aborted;
  const say=(zh,en)=>window.Etrips?.getLang()==='en'?en:zh;
  const offerText=o=>o.label==='标准行程'?(ticket?say('门票／活动','Ticket / activity'):o.days+say('日行程',' days')):(new RegExp('^'+o.days+'日方案$').test(o.label)?o.days+say('日方案','-day option'):o.label+' · '+o.days+say('日',' days'));
  function saveState(){
   const state={offer:selectedOffer.key,date:requestedDate,view,tab:activeTab};EtripsProductSelection.save(t,state);
   const q=new URLSearchParams(location.search);for(const key of ['id','offer','revision','hash','date','view','tab'])q.delete(key);
   for(const [key,value] of EtripsProductSelection.query(t,state))q.set(key,value);
   history.replaceState(history.state,'',location.pathname+'?'+q.toString()+location.hash);
   return state;
  }
  const tabPrefix='v2-'+t.id+'-'+(box.id||'detail');
  const dateSelectable=(offer,date)=>data.sharedDatesSelectable===true&&sharedDates.some(x=>x.date===date&&x.selectable===true)||EtripsRecurringCalendar.selectable(offer,date);
  box.innerHTML='<article class="v2-detail"><div class="v2-hero">'+heroHTML(t)+'<div><p class="v2-tags">'+t.tags.map(esc).join(' · ')+'</p><h2>'+esc(t.nameZh)+'</h2>'+(offers.length>1?'<p><b>'+offers.map(o=>esc(offerText(o))).join(' ／ ')+'</b></p>':'')+'<section class="v2-release-note">'+esc(data.displayNotice||'')+'</section><section class="v2-intro"><h3>行程亮点</h3>'+highlights(t.introZh)+'</section><div class="v2-overview-actions"><a class="btn btn-gold v2-consult-link" target="_blank" rel="noopener noreferrer" href="contact.html?tour='+encodeURIComponent(t.id)+'"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8 8H4l1.8-4A8 8 0 1 1 20 11.5Z"/><path d="M8 10h8M8 14h5"/></svg>咨询本行程</a>'+EtripsBrochureMenu.render(t.brochures)+'</div></div></div><div class="v2-tabs" role="tablist" aria-label="产品详情">'+[['dates','日期与价格'],['itinerary','行程安排'],['map','行程地图'],['terms','参团须知']].map(([key,text],i)=>'<button type="button" role="tab" id="'+tabPrefix+'-tab-'+key+'" aria-controls="'+tabPrefix+'-panel-'+key+'" tabindex="'+(i?-1:0)+'" aria-selected="'+(!i)+'" data-v2-tab="'+key+'">'+text+'</button>').join('')+'</div><section role="tabpanel" tabindex="0" id="'+tabPrefix+'-panel-dates" aria-labelledby="'+tabPrefix+'-tab-dates" data-v2-panel="dates"><label class="v2-offer-control">选择套餐 <select class="v2-offer-select" aria-label="选择套餐">'+offers.map(o=>'<option value="'+esc(o.key)+'">'+esc(offerText(o))+'</option>').join('')+'</select></label><div class="v2-date-summary"></div><div class="v2-calendar"></div><p class="v2-cal-hint"><span class="v2-cal-key"></span>出发日期 · 斜线为售罄；余位请咨询。</p><p class="v2-selected-date" role="status"></p><a class="btn btn-primary v2-booking-link" hidden>咨询所选日期</a><div class="v2-selected-quotes"></div>'+(conditionText(data.includes,'includes').trim()?'<h3>费用包含</h3>'+paras(conditionText(data.includes,'includes')):'')+(conditionText(data.excludes,'excludes').trim()?'<h3>费用不含</h3>'+paras(conditionText(data.excludes,'excludes')):'')+feeContactNote()+'</section><section role="tabpanel" tabindex="0" id="'+tabPrefix+'-panel-itinerary" aria-labelledby="'+tabPrefix+'-tab-itinerary" data-v2-panel="itinerary" hidden><h3 class="v2-arrangement-title">行程安排</h3><h3 class="v2-daily-title">每日行程 <small>'+t.days+'日行程</small></h3>'+ (offers.some(o=>o.flights)?'<p>含机票套餐包含前后航程及下列地接行程；航班、出发机场及时间以最终预订确认为准。</p>':'')+''+offers.filter(o=>o.flights).map(o=>'<details open><summary>'+esc(o.label)+' · 前后航程</summary>'+paras(o.flights)+'</details>').join('')+'<div class="v2-timeline">'+t.itinerary.map(dayHTML).join('')+'</div>'+'</section><section role="tabpanel" tabindex="0" id="'+tabPrefix+'-panel-map" aria-labelledby="'+tabPrefix+'-tab-map" data-v2-panel="map" hidden><h3>行程地图</h3><div class="v2-mini-map" aria-label="行程地图"></div><ol class="v2-route-stops">'+(data.routeMaps?.[0]?.points||[]).map(p=>'<li>'+esc(p.name)+'</li>').join('')+'</ol><p class="v2-route-note">'+esc(data.routeMaps?.[0]?.note||'')+'</p></section><section role="tabpanel" tabindex="0" id="'+tabPrefix+'-panel-terms" aria-labelledby="'+tabPrefix+'-tab-terms" data-v2-panel="terms" hidden><h3>参团须知</h3><h4 class="v2-offer-terms-title">方案适用条件</h4><div class="v2-notice-offers">'+offers.map(o=>'<section class="v2-notice-offer"><header><h4>'+esc(o.label)+'</h4><span>'+o.days+'日</span></header><div class="v2-notice-scope">'+notices(publicScope(o.scope))+'</div>'+notices(publicTerms(o.terms))+'</section>').join('')+'</div><section class="v2-booking-notices"><h3>参团及退改须知</h3>'+ (offers.some(o=>o.flights)?'<p class="v2-notice-applies">以下地接条款请结合所选套餐适用条件查看；含机票套餐同时参阅上方对应条件。</p>':'')+''+notices(data.bookingNotes)+'</section>'+(conditionText(data.cancellation,'cancellation').trim()?'<section class="v2-booking-notices"><h3>退改规定</h3>'+notices(conditionText(data.cancellation,'cancellation'))+'</section>':'')+'</section>'+(opts.showFullDetail!==false?'<div class="v2-full-detail-action"><a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="detail.html?id='+encodeURIComponent(t.id)+'">查看完整详情页</a></div>':'')+'</article>';
  setupHero(box);
  box.querySelector('.v2-offer-select').value=selectedOffer.key;
  box.querySelector('.v2-offer-control').hidden=offers.length===1;
  if(offers.length===1)box.querySelector('.v2-offer-control').hidden=true;
  box.querySelector('.v2-release-note').hidden=!data.displayNotice;
  function selectTab(key){
   const button=box.querySelector('[data-v2-tab="'+key+'"]');if(!button||button.hidden)key='dates';activeTab=key;
   box.querySelectorAll('[data-v2-tab]').forEach(x=>{const selected=x.dataset.v2Tab===key;x.setAttribute('aria-selected',String(selected));x.tabIndex=selected?0:-1;});
   box.querySelectorAll('[data-v2-panel]').forEach(panel=>panel.hidden=panel.dataset.v2Panel!==key);
   refreshConsultation();
  }
  box.querySelectorAll('[data-v2-tab]').forEach(button=>button.addEventListener('click',()=>selectTab(button.dataset.v2Tab)));

  box.querySelector('.v2-tabs').addEventListener('keydown',e=>{const tabs=[...box.querySelectorAll('[data-v2-tab]')].filter(tab=>!tab.hidden),i=tabs.indexOf(document.activeElement);if(i<0)return;let next=null;if(e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==null){e.preventDefault();tabs[next].focus();}});
  function renderMap(target){
   const current=EtripsPublicDisplay.currentMap(data,selectedOffer);
   const tab=box.querySelector('[data-v2-tab="map"]'),panel=box.querySelector('[data-v2-panel="map"]');
   function hideMap(){
    const moveFocus=tab===document.activeElement||panel.contains(document.activeElement);
    tab.hidden=true;panel.hidden=true;target.replaceChildren();delete target.dataset.currentImage;
    box.querySelector('.v2-route-stops').replaceChildren();box.querySelector('.v2-route-note').textContent='';
    panel.querySelector('.v2-map-attribution')?.remove();
    if(tab.getAttribute('aria-selected')==='true')box.querySelector('[data-v2-tab="dates"]').click();
    if(moveFocus)box.querySelector('[data-v2-tab="dates"]').focus();
   }
   const source=current?.image||current?.staticImage;
   if(!source||target.dataset.failedImage===source){hideMap();return;}
   tab.hidden=false;panel.hidden=tab.getAttribute('aria-selected')!=='true';
   if(target.dataset.currentImage===source)return;
   target.dataset.currentImage=source;
   target.innerHTML='<a target="_blank" rel="noopener" href="'+esc(source)+'"><img src="'+esc(source)+'" alt="'+esc(selectedOffer.label)+'行程地图" style="display:block;width:100%;height:auto"></a>';
   target.querySelector('img').addEventListener('error',()=>{if(target.dataset.currentImage!==source)return;target.dataset.failedImage=source;hideMap();},{once:true});
   box.querySelector('.v2-route-stops').innerHTML=(current.points||[]).map(p=>'<li>'+esc(p.name)+'</li>').join('');
   box.querySelector('.v2-route-note').textContent=current.note||'';
   panel.querySelector('.v2-map-attribution')?.remove();
   if(current.staticImage){const credit=document.createElement('small');credit.className='v2-map-attribution';credit.innerHTML='Data from <a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noopener noreferrer">Natural Earth</a>';panel.append(credit);}
   target.style.height='auto';
  }
  function refreshConsultation(){
   const snapshot=saveState(),query=EtripsProductSelection.query(t,snapshot,'tour');
   const url='contact.html?'+query.toString();box.querySelector('.v2-consult-link').href=url;
   const request=box.querySelector('.v2-booking-link');request.href=url;request.hidden=!requestedDate;
   const full=box.querySelector('.v2-full-detail-action a');if(full)full.href='detail.html?'+EtripsProductSelection.query(t,snapshot).toString();
   box.querySelector('.v2-selected-date').textContent=requestedDate?say('已选择 ','Selected ')+offerText(selectedOffer)+' · '+requestedDate+say('。请联系顾问确认余位及具体安排后预订。','. Please confirm availability and arrangements with an advisor.'):(state.invalid?say('原选择版本或日期已不可用，请重新核对套餐和日期。','The previous version or date is unavailable. Please check the option and date again.'):'');
  }
  function refresh(){
   if(!alive())return;
   if(selectedOffer.calendarRules||selectedOffer.fixedRules)selectedOffer.departures=EtripsRecurringCalendar.monthDates(selectedOffer,view);
   const invalidDate=!!requestedDate&&!dateSelectable(selectedOffer,requestedDate);
   if(invalidDate){requestedDate='';state.invalid=true;}
   refreshConsultation();
   const currentDays=selectedOffer.itinerary||t.itinerary;
   box.querySelector('.v2-timeline').innerHTML=currentDays.map(dayHTML).join('');
   box.querySelector('.v2-daily-title').textContent=selectedOffer.label+' · '+selectedOffer.days+'日 · '+(selectedOffer.flights?'下列为地接行程，前后航程见上方':'每日行程');
   const flightPanel=box.querySelector('[data-v2-panel="itinerary"]');
   flightPanel.querySelectorAll(':scope > details,:scope > p').forEach(el=>el.remove());
   if(selectedOffer.flights){const el=document.createElement('section');el.className='v2-selected-flights';el.innerHTML='<h4>本方案前后航程</h4>'+paras(selectedOffer.flights);flightPanel.querySelector('.v2-timeline').before(el);}
   box.querySelectorAll('.v2-selected-flights').forEach((el,i,els)=>{if(i<els.length-1||!selectedOffer.flights)el.remove();});
   const noticesBox=box.querySelector('.v2-notice-offers');
   const scopeText=publicScope(selectedOffer.scope).trim(),termsText=publicTerms(selectedOffer.terms).trim();
   const generic=new Set(['报价适用日期及附加条件，请咨询顾问确认。']);
   const meaningfulScope=scopeText&&!generic.has(scopeText)&&!/^标准行程\s*[·・]?\s*\d+日?$/.test(scopeText);
   const meaningfulTerms=termsText&&!generic.has(termsText);
   noticesBox.hidden=!meaningfulScope&&!meaningfulTerms;box.querySelector('.v2-offer-terms-title').hidden=noticesBox.hidden;
   noticesBox.innerHTML=noticesBox.hidden?'':'<section><h4>'+esc(selectedOffer.label)+' · '+selectedOffer.days+'日</h4>'+notices(meaningfulScope?scopeText:'')+notices(meaningfulTerms?termsText:'')+'</section>';
   box.querySelector('.v2-notice-applies')?.remove();
   const booking=conditionText(selectedOffer.bookingNoticeOverride||data.bookingNotes,'booking'),bookingBox=box.querySelector('.v2-booking-notices');bookingBox.hidden=!booking;bookingBox.innerHTML='<h3>参团须知</h3>'+notices(booking);
   box.querySelectorAll('.v2-booking-notices')[1]?.toggleAttribute('hidden',!!selectedOffer.bookingNoticeOverride);
   const mapBox=box.querySelector('.v2-mini-map');renderMap(mapBox);
   if(selectedOffer.itinerary){
    box.querySelector('.v2-timeline').innerHTML=selectedOffer.itinerary.map(dayHTML).join('');
    box.querySelector('.v2-daily-title').textContent='逐日行程 · '+selectedOffer.label+' · '+selectedOffer.days+'日';
    const adult=selectedOffer.prices.find(p=>p.lead);
   }
   renderContent(t,selectedOffer,box,offers);
   box.querySelector('.v2-selected-quotes').innerHTML=quoteHTML(offers,selectedOffer.key,ticket,data.revision);
   if(sharedDates.length)box.querySelectorAll('.v2-price-note').forEach(note=>{note.textContent='价格及日期已确认；实时余位与报名办理请咨询。';});
   const calendarOffer=sharedDates.length?{...selectedOffer,dateDisplayLabel:data.sharedDateLabel||'出发日期',departures:sharedDates,fixedDepartures:sharedDates}:selectedOffer;
   box.querySelector('.v2-date-summary').innerHTML=sharedDates.length?'<p><b>A、AB、AA团价格及产品级'+esc(data.sharedDateLabel||'出发日期')+'已确认；日期可选</b></p>':EtripsPublicDisplay.summary(selectedOffer);
   const calendarHint=box.querySelector('.v2-cal-hint');
   if(sharedDates.length)calendarHint.textContent='已确认日期可选。实时余位及报名办理请咨询。';
   const cal=box.querySelector('.v2-calendar');cal.innerHTML=calendarHTML(calendarOffer,view,ticket);
   cal.querySelectorAll('[data-month]').forEach(b=>b.addEventListener('click',()=>{const [y,m]=view.split('-').map(Number),date=new Date(Date.UTC(y,m-1+Number(b.dataset.month),1));view=date.toISOString().slice(0,7);refresh();}));
   cal.querySelectorAll('[data-date]').forEach(b=>b.addEventListener('click',()=>{if(!dateSelectable(selectedOffer,b.dataset.date)){refresh();return;}requestedDate=b.dataset.date;state.invalid=false;refresh();}));
   cal.querySelectorAll('[data-date]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.date===requestedDate)));
   if(ticket){
    const ticketLabels=data.presentationRules?.origin==='SYSTEM'?{}:data.presentationRules?.labels||{};
    const summary=box.querySelector('.v2-date-summary');summary.innerHTML=summary.innerHTML.replace(/出发日期/g,'使用日期').replace(/每天出发/g,'每日可选').replace(/每周([^<；]+)出发/g,'每周$1可选');
    box.querySelector('.v2-cal-hint').textContent=say('使用日期 · 可用情况请咨询。','Visit date · Please enquire about availability.');
    box.querySelector('.v2-consult-link').lastChild.textContent=say('咨询门票／活动','Enquire about tickets / activities');
    box.querySelector('[data-v2-tab="itinerary"]').textContent=ticketLabels.itinerary||say('游玩说明','Visit information');
    box.querySelector('[data-v2-tab="terms"]').textContent=ticketLabels.terms||say('预订须知','Booking notes');
    box.querySelector('.v2-arrangement-title').textContent=ticketLabels.itinerary||say('游玩说明','Visit information');
    box.querySelector('.v2-daily-title').hidden=true;
    box.querySelector('.v2-intro h3').textContent=ticketLabels.intro||(EtripsContent.project(t,selectedOffer).introTitle==='行程亮点'?say('体验亮点','Highlights'):say('产品介绍','Overview'));
    box.querySelector('[data-v2-panel="terms"] > h3').textContent=ticketLabels.terms||say('预订须知','Booking notes');
    box.querySelector('[data-v2-panel="terms"] > h4').textContent=say('适用条件','Conditions');
    const ticketScopeHeading=box.querySelector('.v2-notice-offers h4');
    if(ticketScopeHeading)ticketScopeHeading.textContent=offerText(selectedOffer);
    box.querySelector('.v2-booking-notices h3').textContent=say('预订及退改须知','Booking, changes and cancellations');
   }
   if(ticket&&window.Etrips?.getLang()==='en'){const summary=box.querySelector('.v2-date-summary');summary.innerHTML=summary.innerHTML.replace(/每日可选/g,'Daily visits').replace(/使用日期/g,'Visit dates').replace(/余位与价格请咨询/g,'Please enquire about availability and prices');}

  }
  box.querySelector('.v2-offer-select')?.addEventListener('change',e=>{selectedOffer=offers.find(o=>o.key===e.target.value);requestedDate='';state.invalid=false;view=EtripsRecurringCalendar.initialMonth(selectedOffer);refresh();});
  refresh();selectTab(activeTab);
  window.addEventListener('pageshow',()=>{if(alive())refresh();},{signal:lifecycle.signal});
  const calendarTimer=setInterval(()=>{if(!alive()){clearInterval(calendarTimer);return;}if(!document.hidden)refresh();},60000);
  document.addEventListener('visibilitychange',()=>{if(alive()&&!document.hidden)refresh();},{signal:lifecycle.signal});
  box._v2Cleanup=()=>{lifecycle.abort();clearInterval(calendarTimer);};
 };
})();

/* ETRIPS_CALENDAR_PRESENTATION */
window.EtripsCalendarPresentation={"d38ef4e8b053e45c0ee8a900bbca58ef44de53e8451f5da5872945adcd115376":{"dateLabel":"抵达日期"},"c0f5a59c4a11d2316c29e442e00d4a575e7322d46548c859fbc359072f4145ea":{"dateLabel":"抵达日期"},"8492708e6768f2ad6d152b47cc324fac5130ffdff12c3758cf90e4818de4be91":{"dateLabel":"抵达日期","soldOutDates":["2026-03-12","2026-04-23","2026-09-03","2026-09-10","2026-10-08"]},"ac7a318d60ccf06af85ec62401de5fc2ef921c5e47abfe819d81984c8e5de138":{"dateLabel":"抵达日期"},"79d267ad259f791e171eda3a8ca078585fde66169f6892346efc1731a7c0f0e2":{"dateLabel":"抵达日期","soldOutDates":["2026-09-01","2026-09-04","2026-09-22","2026-10-06","2026-10-09","2026-10-13","2026-10-16","2026-10-20","2026-10-23","2026-10-25","2026-10-27","2026-11-06"]},"b45628b0f2972a20bb0e3f0eff9d25b5594ab18b0690897f2f325fc02560e8a9":{"dateLabel":"抵达日期"},"213dbafc851a55d2420ca4776c4999f6e301067279400870f6e4c8ef2e622e0a":{"dateLabel":"抵达日期","soldOutDates":["2026-03-05","2026-03-12","2026-03-19","2026-03-26","2026-04-02","2026-04-09","2026-04-16","2026-04-23","2026-05-07","2026-05-14","2026-05-21","2026-05-28","2026-06-04","2026-06-11","2026-06-18","2026-06-25","2026-07-09","2026-07-16","2026-07-23","2026-07-30","2026-08-06","2026-08-13","2026-08-20","2026-08-27","2026-09-03","2026-09-10","2026-09-17","2026-09-24","2026-10-08","2026-10-15"]},"3e36790d9d17a75f2f7b6cdcadf1236ee2aec0cfc4bb07b7f3ea9df935033c0a":{"dateLabel":"抵达日期","soldOutDates":["2026-10-06","2026-10-13","2026-10-20","2026-10-21","2026-10-23","2026-10-27","2026-10-29","2026-10-30","2026-11-03","2026-11-06","2026-11-10","2026-11-24"]},"4a124e2af8b7c5a312923d02b4ee41a491ac57a1dd2987ace6ba7c46d02972c0":{"dateLabel":"抵达日期","soldOutDates":["2026-04-10","2026-06-19","2026-07-10","2026-10-09","2026-11-06"]},"a939a7fce8ba091da685edf5fddb00a8d91f6cfdb5fc25baaccdeb115cee16e9":{"dateLabel":"抵达日期"},"8d84d2f48e6e9bb429832423325fe34bd6f02b4f3527d0df7397cc292771babd":{"dateLabel":"抵达日期","soldOutDates":["2026-03-12","2026-03-19","2026-04-16","2026-04-23","2026-05-14","2026-06-18","2026-09-03","2026-09-10","2026-10-08"]},"3462871c6c0858715ae84cbff3f48952a7d7846198305fc8122a087a7f408bec":{"dateLabel":"抵达日期"},"196f3684524b3102252bd9656e6f6dea1889f4f6b8831818230ec31024288290":{"dateLabel":"抵达日期"},"72ca79d4244bc99565c8a0a18b593faa365534796f459c967542486161e3bd3e":{"dateLabel":"抵达日期"},"ad84492c1d639c3f7f147c40797d10987d4b8e1efc771b6a771a5690a037fd83":{"dateLabel":"抵达日期","soldOutDates":["2026-03-12","2026-03-19","2026-03-26","2026-04-02","2026-04-09","2026-04-16","2026-04-23","2026-09-03","2026-09-10","2026-10-08","2026-10-15"]},"584701dc3ea5c19c24b17294c6b0bac8f9a5a9cdb77c20b45055a69c3a0c7ae0":{"dateLabel":"抵达日期","soldOutDates":["2026-06-04","2026-08-13"]},"525297b10c8c79f3c97f1e4b6f36f9a393f41ea73cdaa12dddf51e8cf1937bfc":{"dateLabel":"抵达日期","soldOutDates":["2026-03-08","2026-03-15","2026-03-22","2026-04-05","2026-04-19","2026-04-26","2026-10-11"]},"f2ea2c8430ecd6c56d818f0d3c2b09b155f7d72d97285e2d8f6728907b2e65d6":{"dateLabel":"抵达日期"},"8c22938300cc67c8d3bd05f2512a51ecf38f139b60cad8f0412a85a808ac2fef":{"dateLabel":"抵达日期","soldOutDates":["2026-10-05","2026-10-19","2026-10-26","2026-10-29"]},"5109cd9dd98b736d92367b84364d84e6bdcd17dce3db826c3469c79606d8162b":{"dateLabel":"抵达日期","soldOutDates":["2026-03-09","2026-03-12","2026-03-16","2026-03-19","2026-03-23","2026-03-30","2026-04-06","2026-04-09","2026-04-13","2026-04-16","2026-04-20","2026-08-13","2026-08-20","2026-09-03","2026-09-24","2026-10-08","2026-10-12","2026-10-31"]},"6c543e1e3e593f613d7da3028a7b04342df7835b9f18eba3a1905d16e9a3eccd":{"dateLabel":"抵达日期","soldOutDates":["2026-09-17","2026-09-21","2026-10-05","2026-10-08","2026-10-15","2026-10-22","2026-10-26","2026-10-29","2026-11-02","2026-11-05","2026-11-09","2026-11-12","2026-11-16","2026-11-19","2026-11-23","2026-11-26"]},"e411582aac8bac9b0b5b151dbf577e0b5d9250f4f0bf38c00076a4283cc8537c":{"dateLabel":"抵达日期","soldOutDates":["2026-09-03","2026-09-10","2026-10-08"]},"0e0776f81ee6a89633ebee0c4823b1931a628700e441a8e22c3aa6148dbc9300":{"dateLabel":"抵达日期"},"68483f59f779c594c6cc1333f0984af67fe50cba3fead8a8862d7851c52acae3":{"dateLabel":"抵达日期"},"3045cf0c256099a995c0d92f632a2624abd3e7c2b9cccc4f52086cb711ffb78c":{"dateLabel":"抵达日期"},"b51f7f7e072f6e72465e6a58ca2cad3fd3f03db2e5f75174e2536eb2c3a6b779":{"dateLabel":"抵达日期"},"be9e35f9ce908b1e8dab1917b92c2707087f11f8d2d3b80ca9e8aa497dc9572e":{"dateLabel":"抵达日期"},"e3f13036c6623c093cf63b00ce9fe0cdd9eb37749a588c15c60d45a3e49813f2":{"dateLabel":"抵达日期"},"ad71b00c236da4bde67712d96902188bb75d0e99eef94a84b3334eb931977a73":{"dateLabel":"抵达日期"},"29e45d0f97d7f46e6054cc51410155cef68230d8a27a4bc1dae538823b9ad111":{"dateLabel":"抵达日期"},"8bf49ea0f9f2bb22cd268d4a830d242d7dcaf4e6e2e7b975f1b7d97d5b9fc1d5":{"dateLabel":"抵达日期"},"473fdc7d6081dd2a4ad4cd3fb523ce5d9bdf84429373cd07346c79a429acaa3a":{"dateLabel":"抵达日期"},"d3331b55993fecff5ff9195925fc4167be847ea3bab42a1d7e8e6630839dc107":{"dateLabel":"抵达日期"},"1f3af1c7b7950cee8d7cc9307664b4410347bac621815841b9ff58bd325df7a7":{"dateLabel":"抵达日期"},"db4aba18af0cecc2ea60267b4537a5718c673fa9f45efcbbec23e7f0dd6efbba":{"dateLabel":"抵达日期"},"f3bd44a2e70bbcdbe9e691a9f09190941ba71698608677103160556e740607da":{"dateLabel":"抵达日期"},"bf611469ec6e07a625becd5ac291a1f70b6b9814d5bd50bce600e40ba2b2cd53":{"dateLabel":"抵达日期"},"f42ad8c42a3de359ef5e871f8c1928d488acc278eea05ac2a8aefc295ce3ddc4":{"dateLabel":"抵达日期"},"3f58d67d145e63410c5f8e337a944609ab81796339711d8d877a5d21b6f1586f":{"dateLabel":"抵达日期"},"1655aee5cf548063ae451b75b1371f91c870a99a0f3d492ea4e9d8a98de8274a":{"dateLabel":"抵达日期"},"daf6f9d7f8a14059ebba2df615a8a92f11242ac1f8a2f02a479293f6b53567a6":{"dateLabel":"抵达日期"},"52c09aee387163e579f8a3c147cc17bfe3d72ab2d4bbf109305871dbd51016f9":{"dateLabel":"抵达日期"},"518d16a6e7d6fbc6c1ed9aee98a26faf9532e98cdbb7dc39c80cadf04191e285":{"dateLabel":"抵达日期"},"c5e6a370e4dce33dcdf913a62e43c24198a03ae0f7c517d5ed6e98bac8d7af9f":{"dateLabel":"抵达日期"}};
