/* Public navigation approved 2026-10-13, Constitution 39.54; no database remapping. */
(function(){
 const items=[
  {key:'australia',zh:'澳洲',en:'Australia',image:'australia.jpg'},
  {key:'nz',zh:'新西兰',en:'New Zealand',image:'nz.jpg'},
  {key:'china',zh:'中国',en:'China',image:'china.jpg'},
  {key:'asia',zh:'亚洲',en:'Asia',image:'asia.jpg'},
  {key:'europe',zh:'欧洲',en:'Europe',image:'europe.jpg'},
  {key:'america',zh:'美洲',en:'Americas',image:'america.jpg'},
  {key:'middleeastafrica',zh:'中东／非洲',en:'Middle East & Africa',image:null},
  {key:'special',zh:'特别订制',en:'Special Journeys',image:'special.jpg'}
 ];
 window.EtripsMarkets=Object.freeze(items.map(Object.freeze));
 for(const lang of ['zh','en'])for(const m of items){window.I18N[lang]['nav.'+m.key]=m[lang];window.I18N[lang]['dest.'+m.key]=m[lang];}
 window.I18N.zh['home.dest.lede']='澳洲、新西兰、中国、亚洲、欧洲、美洲、中东／非洲与特别订制，从这里开始规划下一程。';
 window.I18N.en['home.dest.lede']='Explore Australia, New Zealand, China, Asia, Europe, the Americas, the Middle East & Africa, and special journeys.';
})();

/* Destination controls use the same stable keys as header and footer. */
(function(){
 function update(){
  const select=document.querySelector('form[data-enquiry="custom"] select[name="dest"]');if(!select)return;
  const old=select.value,first=!select.dataset.marketsBound;
  const requested=new URLSearchParams(location.search).get('dest');
  const key=first?((window.EtripsMarkets.some(m=>m.key===requested)||requested==='other')?requested:(window.EtripsMarkets.find(m=>old.startsWith(m.zh))?.key||'australia')):old;
  const lang=window.Etrips.getLang();select.replaceChildren();
  for(const m of [...window.EtripsMarkets,{key:'other',zh:'其他／尚未确定',en:'Other / undecided'}]){const o=document.createElement('option');o.value=m.key;o.textContent=m[lang];select.append(o);}
  select.value=[...select.options].some(o=>o.value===key)?key:'other';select.dataset.marketsBound='true';
 }
 document.addEventListener('DOMContentLoaded',update);window.addEventListener('langchange',update);
})();
