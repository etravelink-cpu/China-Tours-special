/* Exact public version/offer/date context; ordinary contact forms retain their delivery. */
(function(){
 'use strict';
 function attachProductLink(context){
  // Construct only from this site's product identity and validated selection.
  // Arbitrary URL/referrer/query fields never become staff links.
  if(!context?.valid)return context;
  const url=new URL('detail.html',location.href);
  const t=window.TOURS.find(t=>t.id===context.id);
  const q=window.EtripsCustomerProductId.query(t,context);
  url.username='';url.password='';url.search=q.toString();url.hash='';
  context.productUrl=url.href;
  context.text+='\n产品链接 / Product link: '+context.productUrl;
  context.summary=context.summary.replace('预发行 · 仅询价','行程咨询');
  context.customerText=context.summary+'\n版本 / Version: '+t.v2Public.version+'\n查看行程 / View trip: '+context.productUrl;
  return context;
 }
 function resolve(){
  const q=new URLSearchParams(location.search),id=q.get('tour')||q.get('id');
  if(!id)return null;
  const t=(window.TOURS||[]).find(p=>p.id===id),v=t?.v2Public;
  if(!v)return {valid:false,error:'此产品暂不可咨询，请返回线路目录选择。'};
  if(q.has('v')?q.get('v')!==window.EtripsCustomerProductId.version(t):(q.get('revision')!==v.revision||q.get('hash')!==v.contentHash))return {valid:false,error:'产品版本已更新或链接不完整，请返回产品重新选择方案和日期。',id};
  if(v.preRelease===true){
   if(v.bookingEnabled!==false||q.get('mode')!=='inquiry'||q.get('date')||q.get('offer')||q.get('plan'))return {valid:false,id,error:'此产品仅供行程咨询，请返回产品页重新进入；价格与日期须另行确认。'};
   const text=[t.nameZh,'产品 / Product: '+id,'预发行 · 仅询价','价格、日期、服务范围及余位待顾问确认。','Revision: '+v.revision,'Content: '+v.contentHash].join('\n');
   return attachProductLink({valid:true,id,revision:v.revision,hash:v.contentHash,preRelease:true,mode:'inquiry',text,summary:text.split('\n').slice(0,4).join('\n')});
  }
  const o=v.offers.find(x=>q.has('plan')?window.EtripsCustomerProductId.plan(t,x)===q.get('plan'):x.key===q.get('offer')),date=q.get('date')||'';
  if(!o)return {valid:false,error:'无法匹配所选套餐，请返回产品重新选择。',id};
  if(date&&!window.EtripsRecurringCalendar?.selectable(o,date))return {valid:false,error:'该日期已不适用于当前套餐，请返回产品重新选择。',id};
  const end=date?window.EtripsRecurringCalendar.monthDates(o,date.slice(0,7)).find(d=>d.date===date)?.endDate:'';
  const lines=[t.nameZh,'产品 / Product: '+t.id,'方案 / Package: '+o.label+' · '+o.days+'日',date?'意向日期 / Date: '+date+(end?' — '+end:''):'日期 / Date: 待咨询确认',o.leadDisplay||t.price,v.displayNotice||'','版本 / Version: '+v.version,'Revision: '+v.revision,'Content: '+v.contentHash];
  return attachProductLink({valid:true,id,date,offer:o.key,view:/^\d{4}-(0[1-9]|1[0-2])$/.test(q.get('view')||'')?q.get('view'):(date?date.slice(0,7):window.EtripsRecurringCalendar.initialMonth(o)),tab:['dates','itinerary','map','terms'].includes(q.get('tab'))?q.get('tab'):'dates',revision:v.revision,hash:v.contentHash,text:lines.join('\n'),summary:lines.slice(0,-3).join('\n')});
 }
 window.EtripsProductEnquiry={resolve};
 document.addEventListener('DOMContentLoaded',()=>{
  const form=document.querySelector('[data-enquiry="contact"]'),context=resolve();if(!form||!context)return;
  const panel=document.createElement('section');panel.id='product-enquiry-context';panel.style.cssText='padding:16px;background:#edf6fb;border-left:4px solid #287ca7;border-radius:8px;margin-bottom:20px;white-space:pre-wrap;overflow-wrap:anywhere';
  panel.textContent=context.valid?context.summary:context.error;
  const link=document.createElement('a');link.textContent=context.valid?'查看所选行程 / View selected trip':'返回产品 / Back to product';const back=new URLSearchParams({id:context.id||''});if(context.valid){for(const key of ['offer','revision','hash','date','view','tab'])if(context[key])back.set(key,context[key]);}link.href=context.valid?context.productUrl:context.id?'detail.html?'+back.toString():'list.html';panel.append(document.createElement('br'),link);form.prepend(panel);
  if(!context.valid){form.querySelector('[type="submit"]').disabled=true;}
 });
})();
