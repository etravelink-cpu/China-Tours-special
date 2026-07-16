// Etrips 国安易游 — Homepage rendering

window.EtripsForm = {
  submit(e){
    e.preventDefault();
    const form = e.target;
    const currentLang = window.Etrips.getLang();
    const get = name => (form.querySelector('[name="'+name+'"]') || {}).value || '';
    const now = new Date();
    const pad = n => String(n).padStart(2,'0');
    const ref = 'ET-' + now.getFullYear() + pad(now.getMonth()+1) + pad(now.getDate()) + '-' + pad(now.getHours()) + pad(now.getMinutes()) + pad(now.getSeconds());
    const record = {
      ref: ref,
      source: get('source') || location.pathname,
      tourRef: get('tourRef') || 'General enquiry',
      name: get('name'),
      phone: get('phone'),
      email: get('email'),
      dest: get('dest'),
      date: get('date'),
      pax: get('pax'),
      notes: get('notes'),
      at: now.toISOString()
    };
    try{
      const key = 'etrips_leads';
      const items = JSON.parse(localStorage.getItem(key) || '[]');
      items.push(record);
      localStorage.setItem(key, JSON.stringify(items));
    }catch(_){}
    const msg = document.getElementById('form-msg');
    if(msg){
      msg.textContent = currentLang === 'zh'
        ? '已收到咨询，我们会尽快联系您。编号 ' + ref
        : 'We received your enquiry and will be in touch soon. Ref ' + ref;
    }
    form.reset();
    return false;
  }
};

(function(){
  const TOURS = window.TOURS || [];
  const REVIEWS = window.REVIEWS || [];
  const TIPS = window.TIPS || [];
  const I18N = window.I18N;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lang = 'zh';

  const ICONS = {
    compass: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.7 7-7 2.7 2.7-7 7-2.7Z"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    route: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-3 0-5-2-5-5s2-5 5-5h6c2 0 4-2 4-4s-2-4-4-4"/><path d="m7 17 2 2-2 2"/><path d="m15 7-2-2 2-2"/></svg>',
    shield: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9.5 12 1.8 1.8L15.5 9.5"/></svg>',
    wave: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c2.5 0 2.5-4 5-4s2.5 4 5 4 2.5-4 5-4 2.5 4 5 4"/><path d="M2 17c2.5 0 2.5-4 5-4s2.5 4 5 4 2.5-4 5-4 2.5 4 5 4"/></svg>',
    luggage: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="7" width="12" height="13" rx="2"/><path d="M9 7V5a3 3 0 0 1 6 0v2M10 11v5M14 11v5"/></svg>',
    chat: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></svg>',
    star: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 2.8 5.6 6.2.9-4.5 4.4 1.1 6.1L12 17.2 6.4 20l1.1-6.1L3 9.5l6.2-.9L12 3Z"/></svg>'
  };

  const heroSlides = [
    { img: 'assets/img/hero-sydney.jpg', href: 'list.html?d=australia', tag: 'home.hero1.tag', title: 'home.hero1.title', sub: 'home.hero1.sub', cta: 'home.hero1.cta' },
    { img: 'assets/img/destinations/china.jpg', href: 'list.html?d=china', tag: 'home.hero2.tag', title: 'home.hero2.title', sub: 'home.hero2.sub', cta: 'home.hero2.cta' },
    { img: 'assets/img/hero-japan.jpg', href: 'list.html?d=asia', tag: 'home.hero3.tag', title: 'home.hero3.title', sub: 'home.hero3.sub', cta: 'home.hero3.cta' },
    { img: 'assets/img/destinations/cruise.jpg', href: 'list.html?d=cruise', tag: 'home.hero4.tag', title: 'home.hero4.title', sub: 'home.hero4.sub', cta: 'home.hero4.cta' }
  ];

  function tx(key){
    return (I18N[lang] && I18N[lang][key]) || key;
  }

  function renderHero(){
    const wrap = document.getElementById('hero-slides');
    const dots = document.getElementById('hero-dots');
    if(!wrap || !dots) return;
    const notes = [
      { icon: ICONS.compass, key: 'home.hero.note1' },
      { icon: ICONS.chat, key: 'home.hero.note2' },
      { icon: ICONS.luggage, key: 'home.hero.note3' }
    ];
    wrap.innerHTML = heroSlides.map((slide, index)=>`
      <article class="hero-slide${index === 0 ? ' active' : ''}">
        <div class="hero-media" style="background-image:url('${slide.img}')"></div>
        <div class="hero-overlay"></div>
        <div class="container hero-grid">
          <div class="hero-panel">
            <div class="hero-kicker">${tx(slide.tag)}</div>
            <h1>${tx(slide.title)}</h1>
            <p class="hero-sub">${tx(slide.sub)}</p>
            <div class="hero-actions">
              <a href="${slide.href}" class="btn btn-gold">${tx(slide.cta)}</a>
              <a href="contact.html" class="btn btn-outline" style="color:#fff;border-color:rgba(255,255,255,.34)">${tx('btn.consult')}</a>
            </div>
          </div>
          <aside class="hero-brief">
            <div class="hero-brief-label">${tx('home.story.kicker')}</div>
            <h2>${tx('home.contact.title')}</h2>
            <p>${tx('home.hero.brief')}</p>
            <div class="hero-notes">
              ${notes.map(note=>`
                <div class="hero-note">
                  <span class="hero-note-icon">${note.icon}</span>
                  <div class="hero-note-text">${tx(note.key)}</div>
                </div>`).join('')}
            </div>
            <a href="custom.html" class="btn btn-secondary">${tx('nav.custom')}</a>
          </aside>
        </div>
      </article>`).join('');

    dots.innerHTML = heroSlides.map((_, index)=>`<button class="dot${index === 0 ? ' on' : ''}" type="button" data-i="${index}" aria-label="Slide ${index + 1}"></button>`).join('');

    const slideEls = Array.from(wrap.querySelectorAll('.hero-slide'));
    const dotEls = Array.from(dots.querySelectorAll('.dot'));
    let current = 0;
    function go(next){
      current = (next + slideEls.length) % slideEls.length;
      slideEls.forEach((slide, index)=> slide.classList.toggle('active', index === current));
      dotEls.forEach((dot, index)=> dot.classList.toggle('on', index === current));
    }
    dotEls.forEach(dot=> dot.addEventListener('click', ()=> go(Number(dot.dataset.i))));
    if(window.__heroTimer){
      clearInterval(window.__heroTimer);
      window.__heroTimer = null;
    }
    if(!reduceMotion){
      window.__heroTimer = setInterval(()=> go(current + 1), 5600);
    }
  }

  function renderSignals(){
    const signals = [
      { icon: ICONS.compass, title: 'home.signal1.title', body: 'home.signal1.body' },
      { icon: ICONS.calendar, title: 'home.signal2.title', body: 'home.signal2.body' },
      { icon: ICONS.route, title: 'home.signal3.title', body: 'home.signal3.body' },
      { icon: ICONS.shield, title: 'home.signal4.title', body: 'home.signal4.body' }
    ];
    const el = document.getElementById('signal-grid');
    if(!el) return;
    el.innerHTML = signals.map(signal=>`
      <article class="signal-card">
        <span class="signal-icon">${signal.icon}</span>
        <h3>${tx(signal.title)}</h3>
        <p>${tx(signal.body)}</p>
      </article>`).join('');
  }

  function renderDestinations(){
    const destinations = [
      { key: 'dest.australia', sub: 'home.dest.australia.sub', img: 'assets/img/destinations/australia.jpg', href: 'list.html?d=australia', size: 'wide' },
      { key: 'dest.nz', sub: 'home.dest.nz.sub', img: 'assets/img/destinations/nz.jpg', href: 'list.html?d=nz', size: 'wide' },
      { key: 'dest.china', sub: 'home.dest.china.sub', img: 'assets/img/destinations/china.jpg', href: 'list.html?d=china', size: 'tall' },
      { key: 'dest.europe', sub: 'home.dest.europe.sub', img: 'assets/img/destinations/europe.jpg', href: 'list.html?d=europe' },
      { key: 'dest.asia', sub: 'home.dest.asia.sub', img: 'assets/img/destinations/asia.jpg', href: 'list.html?d=asia' },
      { key: 'dest.cruise', sub: 'home.dest.cruise.sub', img: 'assets/img/destinations/cruise.jpg', href: 'list.html?d=cruise' },
      { key: 'dest.custom', sub: 'home.dest.custom.sub', img: 'assets/img/destinations/custom.jpg', href: 'custom.html', size: 'wide' }
    ];
    const el = document.getElementById('biz-grid');
    if(!el) return;
    el.innerHTML = `<div class="destination-grid">${destinations.map(dest=>`
      <a class="destination-card" data-size="${dest.size || ''}" href="${dest.href}">
        <img src="${dest.img}" alt="${tx(dest.key)}" loading="lazy">
        <div class="destination-card-content">
          <h3>${tx(dest.key)}</h3>
          <p>${tx(dest.sub)}</p>
        </div>
      </a>`).join('')}</div>`;
  }

  function renderFeaturedTours(){
    const featured = TOURS.slice(0, 6);
    const el = document.getElementById('hot-grid');
    if(!el) return;
    el.innerHTML = featured.map(tour=> window.tourCard(tour, lang)).join('');
  }

  function renderProcess(){
    const steps = [
      { icon: ICONS.wave, step: 'home.plan1.step', title: 'home.plan1.title', body: 'home.plan1.body' },
      { icon: ICONS.calendar, step: 'home.plan2.step', title: 'home.plan2.title', body: 'home.plan2.body' },
      { icon: ICONS.route, step: 'home.plan3.step', title: 'home.plan3.title', body: 'home.plan3.body' }
    ];
    const el = document.getElementById('process-grid');
    if(!el) return;
    el.innerHTML = steps.map(step=>`
      <article class="process-card">
        <span class="process-icon">${step.icon}</span>
        <div class="process-step">${tx(step.step)}</div>
        <h3>${tx(step.title)}</h3>
        <p>${tx(step.body)}</p>
      </article>`).join('');
  }

  function renderAdvantages(){
    const items = [
      { icon: ICONS.shield, title: 'home.adv1', body: 'home.adv1.body' },
      { icon: ICONS.chat, title: 'home.adv2', body: 'home.adv2.body' },
      { icon: ICONS.star, title: 'home.adv3', body: 'home.adv3.body' },
      { icon: ICONS.luggage, title: 'home.adv4', body: 'home.adv4.body' }
    ];
    const el = document.getElementById('adv-grid');
    if(!el) return;
    el.innerHTML = items.map(item=>`
      <article class="adv-item">
        <span class="adv-icon">${item.icon}</span>
        <h4>${tx(item.title)}</h4>
        <p>${tx(item.body)}</p>
      </article>`).join('');
  }

  function renderReviews(){
    const el = document.getElementById('review-grid');
    if(!el) return;
    el.innerHTML = REVIEWS.map(review=>`
      <article class="review">
        <div class="stars">★★★★★</div>
        <p>${lang === 'zh' ? review.textZh : review.textEn}</p>
        <div class="who">${lang === 'zh' ? review.nameZh : review.nameEn}</div>
      </article>`).join('');
  }

  function renderTips(){
    const el = document.getElementById('tips-grid');
    if(!el) return;
    el.innerHTML = TIPS.map(tip=>`
      <article class="tip">
        <span class="tip-icon">${ICONS.star}</span>
        <p>${lang === 'zh' ? tip.zh : tip.en}</p>
      </article>`).join('');
  }

  function renderContact(){
    const el = document.getElementById('home-contact');
    if(!el) return;
    el.innerHTML = window.contactChannels(lang, { band: true });
  }

  function rebuild(){
    lang = window.Etrips.getLang();
    renderHero();
    renderSignals();
    renderDestinations();
    renderFeaturedTours();
    renderProcess();
    renderAdvantages();
    renderReviews();
    renderTips();
    renderContact();
  }

  window.EtripsDatePicker = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    init(){
      const trigger = document.getElementById('date-trigger');
      const pop = document.getElementById('date-pop');
      const hidden = document.querySelector('input[name="date"]');
      const departures = (window.DEPARTURES || []).map(item=> item.date);
      if(!trigger || !pop || !hidden) return;
      const pad = n => String(n).padStart(2, '0');
      const render = ()=>{
        const first = new Date(this.year, this.month, 1).getDay();
        const start = (first + 6) % 7;
        const total = new Date(this.year, this.month + 1, 0).getDate();
        const today = new Date();
        const todayKey = `${today.getFullYear()}-${pad(today.getMonth()+1)}-${pad(today.getDate())}`;
        let cells = '';
        for(let i = 0; i < start; i++) cells += '<span class="dc empty"></span>';
        for(let day = 1; day <= total; day++){
          const key = `${this.year}-${pad(this.month + 1)}-${pad(day)}`;
          const available = departures.includes(key);
          const isToday = key === todayKey;
          cells += `<span class="dc${available ? ' on' : ''}${isToday ? ' today' : ''}" ${available ? `data-d="${key}"` : ''}>${isToday ? '今天' : day}</span>`;
        }
        pop.innerHTML = `<div class="dp-head">${this.year}-${pad(this.month + 1)}<span class="dp-next" id="dp-next">›</span></div>
          <div class="dp-wk"><span>周一</span><span>周二</span><span>周三</span><span>周四</span><span>周五</span><span>周六</span><span>周日</span></div>
          <div class="dp-grid">${cells}</div>`;
        const next = pop.querySelector('#dp-next');
        if(next){
          next.onclick = ()=>{
            this.month += 1;
            if(this.month > 11){
              this.month = 0;
              this.year += 1;
            }
            render();
          };
        }
        pop.querySelectorAll('.dc.on').forEach(cell=>{
          cell.addEventListener('click', ()=>{
            hidden.value = cell.dataset.d;
            trigger.textContent = cell.dataset.d;
            pop.hidden = true;
          });
        });
      };
      trigger.addEventListener('click', ()=>{
        pop.hidden = !pop.hidden;
        if(!pop.hidden) render();
      });
      document.addEventListener('click', e=>{
        if(!pop.hidden && !pop.contains(e.target) && e.target !== trigger) pop.hidden = true;
      });
    }
  };

  document.addEventListener('DOMContentLoaded', ()=>{
    rebuild();
    if(document.getElementById('date-trigger')) window.EtripsDatePicker.init();
  });
  window.addEventListener('langchange', rebuild);
})();
