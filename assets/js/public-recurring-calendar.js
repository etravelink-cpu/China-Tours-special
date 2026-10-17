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
