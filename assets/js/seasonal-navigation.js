/* Holiday collections are views of the existing public catalogue, never new markets. */
(function (root) {
  'use strict';
  const collections = [
    {key:'CHRISTMAS_NEW_YEAR', codes:['CHRISTMAS','NEW_YEAR'], zh:'圣诞新年产品', en:'Christmas & New Year', icon:'🎄'},
    {key:'CHINESE_NEW_YEAR', codes:['CHINESE_NEW_YEAR','LUNAR_NEW_YEAR'], zh:'春节产品', en:'Lunar New Year', icon:'🏮'},
    {key:'EASTER', codes:['EASTER'], zh:'复活节产品', en:'Easter', icon:'🌷'},
    {key:'SCHOOL_HOLIDAY', codes:['SCHOOL_HOLIDAY'], zh:'学校假期产品', en:'School Holidays', icon:'☀'},
    {key:'SEASONAL', codes:['SEASONAL'], zh:'季节限定产品', en:'Seasonal Trips', icon:'🍂'}
  ];
  const labels = {'圣诞':'CHRISTMAS','聖誕':'CHRISTMAS','新年':'NEW_YEAR','春节':'CHINESE_NEW_YEAR','春節':'CHINESE_NEW_YEAR','复活节':'EASTER','復活節':'EASTER','学校假期':'SCHOOL_HOLIDAY','學生假期':'SCHOOL_HOLIDAY','学生假期':'SCHOOL_HOLIDAY','學校假期':'SCHOOL_HOLIDAY','季节限定':'SEASONAL','季節限定':'SEASONAL'};
  function codes(t) {
    // Structured sealed codes take precedence, including an explicitly empty list.
    if (Array.isArray(t.themeCodes)) return t.themeCodes;
    // Compatibility for older public previews: exact saved labels only, never descriptions.
    return (Array.isArray(t.tags) ? t.tags : []).map(x => labels[x] || x);
  }
  function current(t, today) {
    today = today || localToday();
    if (t.validTo && t.validTo < today) return false;
    const dates = (t.departureDates || []).filter(x => /^\d{4}-\d{2}-\d{2}$/.test(x.date || ''));
    if (dates.length) return dates.some(x => x.date >= today && !['soldout','SOLD_OUT','CANCELLED'].includes(x.status));
    return true; // Catalogue without fixed dates: do not invent a validity range.
  }
  function localToday() {
    const d=new Date(); return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
  }
  function definition(key) { return collections.find(x => x.key === key); }
  function matches(t, key, today) {
    const def=definition(key);
    return !!def && current(t,today) && def.codes.some(x => codes(t).includes(x));
  }
  function unique(items) { return [...new Map(items.map(x => [x.id,x])).values()]; }
  function treeItems(cats) { return unique(Object.values(cats || {}).flatMap(subs => Object.values(subs).flat())); }
  function available(items,today) {
    return collections.map(def => ({...def,items:unique(items).filter(t => matches(t,def.key,today))})).filter(x => x.items.length);
  }
  function filterTree(tree,key,today) {
    const out={};
    for (const [dest,cats] of Object.entries(tree)) for (const [cat,subs] of Object.entries(cats)) for (const [sub,items] of Object.entries(subs)) {
      const selected=items.filter(t => matches(t,key,today));
      if (selected.length) { out[dest] ||= {}; out[dest][cat] ||= {}; out[dest][cat][sub]=selected; }
    }
    return out;
  }
  root.EtripsSeasons={collections,definition,codes,current,matches,available,treeItems,filterTree};
})(typeof window === 'undefined' ? globalThis : window);
