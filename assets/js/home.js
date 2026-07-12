// Etrips 国安易游 — Home page rendering (sections 2-6 + form + hero dots)

window.EtripsForm = {
  submit(e){
    e.preventDefault();
    const f = e.target;
    const lang = window.Etrips.getLang();
    const get = n => (f.querySelector('[name="'+n+'"]')||{}).value || '';
    // 自动编号：ET-YYYYMMDD-HHMMSS
    const d = new Date();
    const p = n => String(n).padStart(2,'0');
    const ref = 'ET-' + d.getFullYear() + p(d.getMonth()+1) + p(d.getDate()) + '-' + p(d.getHours()) + p(d.getMinutes()) + p(d.getSeconds());
    const source = get('source') || location.pathname;
    const tourRef = get('tourRef') || '通用咨询';
    const rec = { ref, source, tourRef,
      name:get('name'), phone:get('phone'), email:get('email'), dest:get('dest'),
      date:get('date'), pax:get('pax'), notes:get('notes'),
      at: d.toISOString() };
    // 本地留痕（无后端，存浏览器）
    try{ const k='etrips_leads'; const a=JSON.parse(localStorage.getItem(k)||'[]'); a.push(rec); localStorage.setItem(k, JSON.stringify(a)); }catch(_){}
    document.getElementById('form-msg').textContent =
      (lang==='zh'
        ? '✅ 已收到咨询（编号 '+ref+'，来源：'+source+'，线路：'+tourRef+'），顾问将尽快联系您！'
        : '✅ Received (ref '+ref+', source: '+source+', tour: '+tourRef+'). An advisor will contact you soon!');
    f.reset();
    return false;
  }
};

(function(){
  const T = window.TOURS, R = window.REVIEWS, TIP = window.TIPS, I = window.I18N;
  let lang = 'zh';

  function renderHero(){
    const HERO = [
      {img:'assets/img/hero-sydney.jpg', tag:'易行天下，奔赴山海 · Connects you with moments',
       h1:'探索世界 · 从澳洲出发', sub:'从澳洲出发，抵达全球每一个值得去的地方', href:'list.html', cta:'查看线路'},
      {img:'assets/img/destinations/china.jpg', tag:'千年文明 · 山水中国',
       h1:'深度中国 · 长线定制', sub:'云南·西北·华东，小团私家任你选', href:'list.html?d=china', cta:'查看线路'},
      {img:'assets/img/hero-japan.jpg', tag:'浪漫红叶 · 日本秋冬',
       h1:'日本本州 · 红叶季', sub:'东京·富士山·京都，经典全包', href:'list.html?d=asia', cta:'查看线路'},
      {img:'assets/img/destinations/cruise.jpg', tag:'蓝海邮轮 · 一站度假',
       h1:'邮轮专线 · 海岛漫游', sub:'悉尼出发，途经海岛，全程邮轮度假', href:'list.html?d=cruise', cta:'查看线路'}
    ];
    const wrap = document.getElementById('hero-slides');
    const dots = document.getElementById('hero-dots');
    if(!wrap) return;
    wrap.innerHTML = HERO.map((s,i)=>`
      <div class="hero-slide${i===0?' active':''}" style="background-image:linear-gradient(90deg,rgba(14,42,71,.5),rgba(14,42,71,.2) 55%,rgba(14,42,71,0)),url('${s.img}')">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <p class="hero-tagline">${s.tag}</p>
          <h1>${s.h1}</h1>
          <p class="hero-sub">${s.sub}</p>
          <div class="hero-cta">
            <a href="${s.href}" class="btn btn-gold">${s.cta}</a>
            <a href="contact.html" class="btn btn-hero-outline">免费询价</a>
          </div>
        </div>
      </div>`).join('');
    dots.innerHTML = HERO.map((_,i)=>`<span class="dot${i===0?' on':''}" data-i="${i}"></span>`).join('');
    let cur = 0;
    const slides = [...wrap.querySelectorAll('.hero-slide')];
    const dotEls = [...dots.querySelectorAll('.dot')];
    function go(n){
      cur = (n+slides.length)%slides.length;
      slides.forEach((sl,i)=>sl.classList.toggle('active',i===cur));
      dotEls.forEach((d,i)=>d.classList.toggle('on',i===cur));
    }
    dotEls.forEach(d=>d.addEventListener('click',()=>go(+d.dataset.i)));
    if(window.__heroTimer) clearInterval(window.__heroTimer);
    window.__heroTimer = setInterval(()=>go(cur+1), 5000);
  }

  function rebuild(){
    lang = window.Etrips.getLang();
    renderHero();

    // 板块2 选择你的目的地（竖向长条卡）
    const dest = [
      {zh:'澳洲', en:'AUSTRALIA', img:'assets/img/destinations/australia.jpg', href:'list.html?d=australia'},
      {zh:'新西兰', en:'NEW ZEALAND', img:'assets/img/destinations/nz.jpg', href:'list.html?d=nz'},
      {zh:'中国', en:'CHINA', img:'assets/img/destinations/china.jpg', href:'list.html?d=china'},
      {zh:'欧洲', en:'EUROPE', img:'assets/img/destinations/europe.jpg', href:'list.html?d=europe'},
      {zh:'亚洲', en:'ASIA', img:'assets/img/destinations/asia.jpg', href:'list.html?d=asia'},
      {zh:'邮轮', en:'CRUISE', img:'assets/img/destinations/cruise.jpg', href:'list.html?d=cruise'},
      {zh:'私人订制', en:'PRIVATE TOUR', img:'assets/img/destinations/custom.jpg', href:'custom.html'}
    ];
    document.getElementById('biz-grid').innerHTML = `<div class="dest-row">` + dest.map(d=>`
      <a class="dest-strip${d.wide?' wide':''}" href="${d.href}">
        <img src="${d.img}" alt="${d.zh}" loading="lazy">
        <div class="ov"></div>
        <div class="lbl">${d.zh}<span class="en">${d.en}</span></div>
      </a>`).join('') + `</div>`;

    // 板块3 爆款6卡（横向滚动）
    const HOT = T.slice(0,9);
    const hotWrap = document.getElementById('hot-grid');
    hotWrap.className = 'grid grid-3';
    hotWrap.innerHTML = HOT.map(t=>window.tourCard(t,lang)).join('');

    // 板块4 优势
    const adv = ['home.adv1','home.adv2','home.adv3','home.adv4'];
    const icons = ['✓','🗣','🌿','🎁'];
    document.getElementById('adv-grid').innerHTML = adv.map((a,i)=>`
      <div class="adv-item"><div class="adv-icon">${icons[i]}</div>
      <h4>${I[lang][a]}</h4></div>`).join('');

    // 板块5 评价
    document.getElementById('review-grid').innerHTML = R.map(r=>`
      <div class="review"><div class="stars">★★★★★</div>
      <p>${lang==='zh'?r.textZh:r.textEn}</p>
      <div class="who">— ${lang==='zh'?r.nameZh:r.nameEn}</div></div>`).join('');

    // 板块6 出行小贴士
    const TIP = window.TIPS || [];
    document.getElementById('tips-grid').innerHTML = TIP.map(t=>`<div class="tip"><span class="tip-ico">💡</span><p>${lang==='zh'?t.zh:t.en}</p></div>`).join('');

    // 板块7 自定义出发日期选择器
    if(document.getElementById('date-trigger') && window.EtripsDatePicker) window.EtripsDatePicker.init();
  }

  // ---------- 自定义日期选择器（橙条表头 / 周一列首 / 今天红标 / 真实发团日高亮） ----------
  window.EtripsDatePicker = {
    year: new Date().getFullYear(), month: new Date().getMonth(),
    init(){
      const trigger = document.getElementById('date-trigger');
      const pop = document.getElementById('date-pop');
      const hidden = document.querySelector('input[name="date"]');
      const avail = (window.DEPARTURES||[]).map(d=>d.date); // 真实发团日 YYYY-MM-DD
      const render = ()=>{
        const y=this.year, m=this.month;
        const first=new Date(y,m,1).getDay();      // 0=Sun
        const start=(first+6)%7;                    // 周一为列首
        const days=new Date(y,m+1,0).getDate();
        const wk=['周一','周二','周三','周四','周五','周六','周日'];
        const pad=n=>String(n).padStart(2,'0');
        const today=new Date(); const tkey=`${today.getFullYear()}-${pad(today.getMonth()+1)}-${pad(today.getDate())}`;
        let cells='';
        for(let i=0;i<start;i++) cells+='<span class="dc empty"></span>';
        for(let d=1;d<=days;d++){
          const key=`${y}-${pad(m+1)}-${pad(d)}`;
          const isToday=key===tkey;
          const can=avail.includes(key);
          cells+=`<span class="dc${can?' on':''}${isToday?' today':''}" ${can?`data-d="${key}"`:''}>${isToday?'今天':d}</span>`;
        }
        pop.innerHTML=`<div class="dp-head">${y}-${pad(m+1)} <span class="dp-next" id="dp-next">›</span></div>
          <div class="dp-wk">${wk.map(w=>`<span>${w}</span>`).join('')}</div>
          <div class="dp-grid">${cells}</div>`;
        pop.querySelector('#dp-next').onclick=()=>{ this.month++; if(this.month>11){this.month=0;this.year++;} render(); };
        pop.querySelectorAll('.dc.on').forEach(c=>c.onclick=()=>{
          hidden.value=c.dataset.d; trigger.textContent=c.dataset.d; pop.hidden=true;
        });
      };
      trigger.onclick=()=>{ pop.hidden=!pop.hidden; if(!pop.hidden) render(); };
      document.addEventListener('click',e=>{ if(!pop.hidden && !pop.contains(e.target) && e.target!==trigger) pop.hidden=true; });
    }
  };

  document.addEventListener('DOMContentLoaded', rebuild);
  window.addEventListener('langchange', rebuild);
})();
