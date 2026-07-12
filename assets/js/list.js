// Etrips 国安易游 — List page (filters + grid)
(function(){
  const T = window.TOURS, I = window.I18N;
  let lang = 'zh';

  function match(t){
    const d=document.getElementById('f-days').value;
    const m=document.getElementById('f-month').value;
    const b=document.getElementById('f-budget').value;
    const ty=document.getElementById('f-type').value;
    if(d){ if(d==='s'&&!(t.days<=7))return false; if(d==='m'&&!(t.days>=8&&t.days<=10))return false; if(d==='l'&&!(t.days>=11))return false; }
    if(m && t.monthEn!=='Year-round' && m==='summer' && t.month!=='夏季') return false;
    if(b && t.budget!==b) return false;
    if(ty && t.type!==ty) return false;
    return true;
  }

  function render(){
    lang = window.Etrips.getLang();
    const q = new URLSearchParams(location.search).get('d');
    const qt = new URLSearchParams(location.search).get('type');
    if(qt) { const sel=document.getElementById('f-type'); if(sel) sel.value=qt; }
    const grid = document.getElementById('list-grid');
    let list = T.filter(match);
    if(q) list = list.filter(t=>t.dest===q);
    if(qt) list = list.filter(t=>t.type===decodeURIComponent(qt));
    if(!list.length){ grid.innerHTML = '<p class="muted">暂无符合条件的线路。</p>'; return; }
    grid.innerHTML = list.map(t=>window.tourCard(t,lang)).join('');
    // 目的地分区行程规划（统一格式，按 ?d= 取用）
    const rp = document.getElementById('region-plan');
    if(rp){
      const plan = (window.REGION_PLANS && q && window.REGION_PLANS[q]) ? window.REGION_PLANS[q] : '';
      rp.innerHTML = plan;
      rp.hidden = !plan;
    }
    // re-apply labels on cards after render (detail/btn)
    window.Etrips.applyLang();
  }

  ['f-days','f-month','f-budget','f-type'].forEach(id=>{
    document.addEventListener('DOMContentLoaded',()=>{
      document.getElementById(id).addEventListener('change', render);
    });
  });

  document.addEventListener('DOMContentLoaded', ()=>{
    // preset destination filter from URL
    render();
  });
  window.addEventListener('langchange', render);
})();
