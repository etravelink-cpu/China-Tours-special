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
    const hasPlan = !!(window.REGION_PLANS && q && window.REGION_PLANS[q]);
    if(rp){
      rp.innerHTML = hasPlan ? window.REGION_PLANS[q] : '';
      rp.hidden = !hasPlan;
      // 子页新布局 v2：2级分组导航 + 路线详情卡（.rp-nav2）
      const nav2 = rp.querySelector('.rp-nav2');
      if(nav2){
        const groups = nav2.querySelectorAll('.rp-group');
        groups.forEach(g=>{
          const title=g.querySelector('.rp-group-title');
          const arrow=g.querySelector('.rp-arrow');
          title.addEventListener('click',()=>{
            const open=g.classList.toggle('open');
            if(arrow) arrow.textContent = open ? '▼' : '▶';
          });
        });
        const routes = nav2.querySelectorAll('.rp-route');
        const panes = rp.querySelectorAll('.rp-route-pane');
        const activateRoute = rid => {
          routes.forEach(r=>r.classList.toggle('active', r.dataset.route===rid));
          panes.forEach(p=>p.classList.toggle('active', p.dataset.route===rid));
          if(window.innerWidth <= 760){ const da=rp.querySelector('.rp-detail-area'); if(da) da.scrollIntoView({behavior:'smooth',block:'start'}); }
        };
        routes.forEach(r=> r.addEventListener('click', ()=>{
          const grp=r.closest('.rp-group');
          if(grp && !grp.classList.contains('open')){
            grp.classList.add('open');
            const ar=grp.querySelector('.rp-arrow'); if(ar) ar.textContent='▼';
          }
          activateRoute(r.dataset.route);
        }) );
        // 默认激活第一个（悉尼及周边第一条）
        const first = routes[0];
        if(first) activateRoute(first.dataset.route);
      } else {
        // 子页旧布局：分区 tab → 面板（.rp-nav / .rp-panel）
        const nav = rp.querySelector('.rp-nav');
        if(nav){
          const btns = nav.querySelectorAll('button[data-rp]');
          const panels = rp.querySelectorAll('.rp-panel[data-rp]');
          const activate = idx => {
            btns.forEach(b=>b.classList.toggle('active', b.dataset.rp===idx));
            panels.forEach(p=>p.classList.toggle('active', p.dataset.rp===idx));
          };
          btns.forEach(b=> b.addEventListener('click', ()=>activate(b.dataset.rp)) );
          activate('0');
        }
      }
      // 子页 Banner 轮播（仅 europe 等含 .rp-slides 的块）
      const slides = rp.querySelectorAll('.rp-slide');
      if(slides.length > 1){
        let si = 0;
        setInterval(()=>{
          slides[si].classList.remove('active');
          si = (si+1) % slides.length;
          slides[si].classList.add('active');
        }, 4500);
      }
    }
    // 子页模式：隐藏「最受欢迎线路」标题+推荐卡+筛选栏，仅留分区规划+FAQ
    const subpage = !!q && hasPlan;
    const hotTitle = document.getElementById('hot-title');
    const listGrid = document.getElementById('list-grid');
    const filterBar = document.getElementById('filter-bar');
    if(hotTitle) hotTitle.hidden = subpage;
    if(listGrid) listGrid.hidden = subpage;
    if(filterBar) filterBar.hidden = subpage;
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
