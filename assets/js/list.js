// Etrips 国安易游 — List page (filters + grid)
(function(){
  const T = window.TOURS, I = window.I18N;
  let lang = 'zh';

  function match(t){
    const d=document.getElementById('f-days').value;
    const m=document.getElementById('f-month').value;
    const b=document.getElementById('f-budget').value;
    if(d){ if(d==='s'&&!(t.days<=7))return false; if(d==='m'&&!(t.days>=8&&t.days<=10))return false; if(d==='l'&&!(t.days>=11))return false; }
    if(m && t.monthEn!=='Year-round' && m==='summer' && t.month!=='夏季') return false;
    if(b && t.budget!==b) return false;
    return true;
  }

  function render(){
    lang = window.Etrips.getLang();
    const q = new URLSearchParams(location.search).get('d');
    const qt = new URLSearchParams(location.search).get('type');
    const grid = document.getElementById('list-grid');
    let list = T.filter(match);
    if(q) list = list.filter(t=>t.dest===q);
    if(qt) list = list.filter(t=>t.type===decodeURIComponent(qt));
    if(!list.length){ grid.innerHTML = '<p class="muted">暂无符合条件的线路。</p>'; }
    else { grid.innerHTML = list.map(t=>window.tourCard(t,lang)).join(''); }
    // 目的地分区行程规划（统一格式，按 ?d= 取用）
    const rp = document.getElementById('region-plan');
    const hasPlan = !!(window.REGION_PLANS && q && window.REGION_PLANS[q]);
    if(rp){
      rp.innerHTML = hasPlan ? window.REGION_PLANS[q] : '';
      rp.hidden = !hasPlan;
      // 在每个路线详情卡 hero 区显示 大人/儿童/婴儿 三项价
      rp.querySelectorAll('.rp-route-pane').forEach(p=>{
        const pa=parseFloat(p.getAttribute('data-p-adult'))||0;
        const pc=parseFloat(p.getAttribute('data-p-child'))||0;
        const pi=parseFloat(p.getAttribute('data-p-infant'))||0;
        const hero=p.querySelector('.rp-detail-hero-in');
        if(!hero) return;
        const fmt=v=> v>0 ? ('A$ '+v) : '待确认';
        let box=hero.querySelector('.rp-price-row');
        if(!box){
          box=document.createElement('div'); box.className='rp-price-row';
          hero.appendChild(box);
        }
        box.innerHTML = '<span class="rp-price-item"><b>大人</b> '+fmt(pa)+'</span>'
                      + '<span class="rp-price-item"><b>儿童</b> '+fmt(pc)+'</span>'
                      + '<span class="rp-price-item"><b>婴儿</b> '+fmt(pi)+'</span>';
      });
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
        // 详情卡内 tab 切换（借鉴 echinatours 产品页 tab 布局）
        panes.forEach(p=>{
          const tabs=p.querySelectorAll('.rp-tab');
          tabs.forEach(t=> t.addEventListener('click', ()=>{
            const tid=t.dataset.tab;
            p.querySelectorAll('.rp-tab').forEach(x=>x.classList.toggle('active', x===t));
            p.querySelectorAll('.rp-tab-panel').forEach(x=>x.classList.toggle('active', x.dataset.tab===tid));
          }));
          const ft=p.querySelector('.rp-tab'); if(ft) ft.click();
        });
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
    const backBtn = document.getElementById('back-btn');
    if(backBtn) backBtn.hidden = !subpage;
    // re-apply labels on cards after render (detail/btn)
    window.Etrips.applyLang();
  }

  ['f-days','f-month','f-budget'].forEach(id=>{
    document.addEventListener('DOMContentLoaded',()=>{
      document.getElementById(id).addEventListener('change', render);
    });
  });

  document.addEventListener('DOMContentLoaded', ()=>{
    // preset destination filter from URL
    render();
  });
  window.addEventListener('langchange', render);

  // 下载行程单：仅打印当前激活路线详情卡为带 logo 单页 PDF
  window.printRoute = function(btn){
    const pane = btn.closest('.rp-route-pane');
    if(!pane) return;
    const title = (pane.querySelector('.rp-detail-hero-in h3') || {}).textContent || '';
    let ph = document.getElementById('print-header');
    if(!ph){
      ph = document.createElement('div');
      ph.id = 'print-header';
      document.body.appendChild(ph);
    }
    ph.innerHTML =
      '<div class="ph-logo"><img src="assets/img/logo.png" alt="Etrips 国安易游"></div>' +
      '<div class="ph-co"><div class="ph-name">Etrips 国安易游</div>' +
      '<div class="ph-slogan">易行天下，奔赴山海</div></div>' +
      '<div class="ph-title">' + title + '</div>' +
      '<div class="ph-meta">电话 ' + (window.CONTACT.hotline||'') + (window.CONTACT.hotline2?' / '+window.CONTACT.hotline2:'') +
      ' · 邮箱 ' + (window.CONTACT.email||'') + ' · 微信 ' + (window.CONTACT.wechat||'') +
      
      (window.CONTACT.addressZh?'<br>门店 ' + window.CONTACT.addressZh:'') + '</div>';
    document.body.classList.add('printing-route');
    const onAfter = ()=>{ document.body.classList.remove('printing-route'); window.removeEventListener('afterprint', onAfter); };
    window.addEventListener('afterprint', onAfter);
    window.print();
  };

  // 路线详情：出发日期选择联动
  window.onRouteDateChange = function(sel){
    const pane = sel.closest('.rp-route-pane');
    const inp = pane.querySelector('.rp-date-input');
    if(sel.value === '__custom__'){
      if(!inp.getAttribute('min')) inp.setAttribute('min', new Date().toISOString().slice(0,10));
      inp.hidden = false;
      setTimeout(()=>inp.focus(), 50);
    } else {
      inp.hidden = true;
      inp.value = '';
    }
  };

  // 立即预订：带团名 + 出发日期跳 booking.html
  window.goBook = function(btn){
    const pane = btn.closest('.rp-route-pane');
    if(!pane){ location.href = 'booking.html'; return; }
    const title = (pane.querySelector('.rp-detail-hero-in h3') || {}).textContent || '';
    const sel = pane.querySelector('.rp-date-select');
    const inp = pane.querySelector('.rp-date-input');
    let date = sel ? sel.value : '';
    if(date === '__custom__') date = inp && inp.value ? inp.value : '';
    const params = new URLSearchParams();
    params.set('route', title);
    if(date) params.set('date', date);
    location.href = 'booking.html?' + params.toString();
  };

  // 在线咨询：带团名 + 出发日期跳 contact.html
  window.goConsult = function(btn){
    const pane = btn.closest('.rp-route-pane');
    if(!pane) { location.href = 'contact.html'; return; }
    const title = (pane.querySelector('.rp-detail-hero-in h3') || {}).textContent || '';
    const sel = pane.querySelector('.rp-date-select');
    const inp = pane.querySelector('.rp-date-input');
    let date = sel ? sel.value : '';
    if(date === '__custom__') date = inp && inp.value ? inp.value : '';
    const params = new URLSearchParams();
    params.set('route', title);
    if(date) params.set('date', date);
    location.href = 'contact.html?' + params.toString();
  };

  // 返回：固定回本站主页（避免从外链直进时 history.back 跳出本站）
  window.goBack = function(){
    location.href = 'index.html';
  };
})();
