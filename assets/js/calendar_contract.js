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
