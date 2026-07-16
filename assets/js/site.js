// Etrips 国安易游 — Site core JS (shared shell, language, float widgets, footer)

(function(){
  const I18N = window.I18N;
  let lang = localStorage.getItem('etrips_lang') || 'zh';

  const NAV_ITEMS = [
    { key: 'nav.home', href: 'index.html' },
    { key: 'nav.australia', href: 'list.html?d=australia' },
    { key: 'nav.nz', href: 'list.html?d=nz' },
    { key: 'nav.china', href: 'list.html?d=china' },
    { key: 'nav.europe', href: 'list.html?d=europe' },
    { key: 'nav.asia', href: 'list.html?d=asia' },
    { key: 'nav.island', href: 'list.html?d=island' },
    { key: 'nav.america', href: 'list.html?d=america' },
    { key: 'nav.cruise', href: 'list.html?d=cruise' },
    { key: 'nav.custom', href: 'custom.html' }
  ];

  function t(key){
    return (I18N[lang] && I18N[lang][key]) || key;
  }

  function currentFile(){
    const file = location.pathname.split('/').pop();
    return file || 'index.html';
  }

  function isActiveLink(href){
    const here = currentFile();
    const there = href.split('?')[0];
    if(there === 'index.html') return here === '' || here === 'index.html';
    if(there === 'list.html'){
      if(here !== 'list.html') return false;
      const target = new URLSearchParams(href.split('?')[1] || '').get('d');
      const current = new URLSearchParams(location.search).get('d');
      return target ? target === current : true;
    }
    return here === there;
  }

  function navItem(item){
    const active = isActiveLink(item.href) ? ' is-active' : '';
    return `<li><a class="nav-link${active}" href="${item.href}" data-i18n="${item.key}">${t(item.key)}</a></li>`;
  }

  function renderHeader(){
    const el = document.getElementById('site-header');
    if(!el) return;
    el.innerHTML = `
      <div class="container header-shell">
        <a href="index.html" class="brand-lockup" aria-label="${t('brand.name')}">
          <img class="logo-img" src="assets/img/yiyou.png" alt="${t('brand.name')}">
          <span class="brand-copy">
            <span class="brand-name" data-i18n="brand.name">${t('brand.name')}</span>
            <span class="brand-slogan" data-i18n="brand.slogan">${t('brand.slogan')}</span>
          </span>
        </a>
        <button class="hamburger" id="hamburger" type="button" aria-expanded="false" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-panel" id="nav-panel">
          <ul class="nav" id="main-nav">${NAV_ITEMS.map(navItem).join('')}</ul>
          <div class="header-search">
            <select id="h-dest" class="h-select" aria-label="Destination">
              <option value="" data-i18n="search.dest">${t('search.dest')}</option>
              <option value="australia" data-i18n="dest.australia">${t('dest.australia')}</option>
              <option value="nz" data-i18n="dest.nz">${t('dest.nz')}</option>
              <option value="china" data-i18n="dest.china">${t('dest.china')}</option>
              <option value="europe" data-i18n="dest.europe">${t('dest.europe')}</option>
              <option value="asia" data-i18n="dest.asia">${t('dest.asia')}</option>
              <option value="cruise" data-i18n="dest.cruise">${t('dest.cruise')}</option>
              <option value="other" data-i18n="dest.other">${t('dest.other')}</option>
              <option value="custom" data-i18n="dest.custom">${t('dest.custom')}</option>
            </select>
            <button class="h-search" id="h-search" type="button" data-i18n="search.find">${t('search.find')}</button>
          </div>
        </div>
        <div class="header-actions">
          <button class="lang-btn" id="lang-toggle" type="button">${t('lang.switch')}</button>
          <a href="contact.html" class="btn btn-primary" data-i18n="btn.consult">${t('btn.consult')}</a>
        </div>
        <div class="nav-scrim" id="nav-scrim"></div>
      </div>`;

    const toggle = document.getElementById('lang-toggle');
    const burger = document.getElementById('hamburger');
    const scrim = document.getElementById('nav-scrim');
    const search = document.getElementById('h-search');
    if(toggle) toggle.addEventListener('click', toggleLang);
    if(burger) burger.addEventListener('click', ()=> toggleMenu());
    if(scrim) scrim.addEventListener('click', ()=> toggleMenu(false));
    if(search) search.addEventListener('click', onSearch);
    document.querySelectorAll('#main-nav a').forEach(link=>{
      link.addEventListener('click', ()=> toggleMenu(false));
    });
    syncHeaderState();
  }

  function onSearch(){
    const select = document.getElementById('h-dest');
    if(!select) return;
    const value = select.value;
    if(value === 'custom'){
      location.href = 'custom.html';
      return;
    }
    location.href = 'list.html' + (value ? ('?d=' + value) : '');
  }

  function toggleMenu(force){
    const header = document.getElementById('site-header');
    const burger = document.getElementById('hamburger');
    if(!header || !burger) return;
    const open = typeof force === 'boolean' ? force : !header.classList.contains('menu-open');
    header.classList.toggle('menu-open', open);
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function syncHeaderState(){
    const header = document.getElementById('site-header');
    if(!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  function renderFloat(){
    const el = document.getElementById('float-bar');
    if(!el) return;
    const c = window.CONTACT || {};
    const wx1 = c.wechat || 'E_travelink';
    const wx2 = c.wechat2 || 'E-travelink';
    el.innerHTML = `
      <a class="float-btn gold" href="contact.html" title="${t('float.quote')}">
        <span aria-hidden="true">${window.ICONS.chat}</span>
        <span data-i18n="float.quote">${t('float.quote')}</span>
      </a>
      <a class="float-btn outline" href="tel:${(c.hotline || '').replace(/\s/g,'')}" title="${t('float.call')}" aria-label="${t('float.call')}">
        ${window.ICONS.phone}
      </a>
      <button class="float-btn wechat" type="button" title="${t('float.wechat')}" aria-label="${t('float.wechat')}" onclick="EtripsFloat.toggle('wx-pop')">
        ${window.ICONS.wechat}
      </button>
      <div class="wx-pop" id="wx-pop" hidden>
        <div class="wx-row"><span class="wx-tag">${c.wechatName || 'WeChat'}</span><b>${wx1}</b></div>
        ${c.wechatQr ? `<img class="wx-qr" src="${c.wechatQr}" alt="${c.wechatName || 'WeChat'} QR">` : ''}
        <div class="wx-row"><span class="wx-tag">${c.wechat2Name || 'WeChat'}</span><b>${wx2}</b></div>
        ${c.wechat2Qr ? `<img class="wx-qr" src="${c.wechat2Qr}" alt="${c.wechat2Name || 'WeChat'} QR">` : ''}
        <div class="wx-row" data-i18n="float.wechat.copy">${t('float.wechat.copy')}</div>
      </div>`;
  }

  window.EtripsFloat = {
    toggle(id){
      const popup = document.getElementById(id);
      if(!popup) return;
      const shouldShow = popup.hidden;
      const current = document.getElementById('wx-pop');
      if(current) current.hidden = true;
      popup.hidden = !shouldShow;
    }
  };

  document.addEventListener('click', e=>{
    const popup = document.getElementById('wx-pop');
    if(popup && !popup.hidden && !popup.contains(e.target) && !e.target.closest('.float-btn.wechat')){
      popup.hidden = true;
    }
  });

  function renderFooter(){
    const el = document.getElementById('site-footer');
    if(!el) return;
    const c = window.CONTACT || {};
    el.innerHTML = `
      <div class="container footer-shell">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="brand-lockup">
              <img class="logo-img" src="assets/img/yiyou.png" alt="${t('brand.name')}">
              <span class="brand-copy">
                <span class="brand-name" data-i18n="brand.name">${t('brand.name')}</span>
                <span class="brand-slogan" data-i18n="brand.slogan">${t('brand.slogan')}</span>
              </span>
            </div>
            <p data-i18n="home.contact.lead">${t('home.contact.lead')}</p>
          </div>
          <div class="footer-cta">
            <div class="section-kicker" data-i18n="home.contact.kicker">${t('home.contact.kicker')}</div>
            <a href="contact.html" class="btn btn-gold" data-i18n="btn.consult">${t('btn.consult')}</a>
          </div>
        </div>
        <div class="footer-grid">
          <div class="footer-col">
            <h4 data-i18n="footer.nav">${t('footer.nav')}</h4>
            <div class="footer-links">
              <a href="list.html?d=australia" data-i18n="nav.australia">${t('nav.australia')}</a>
              <a href="list.html?d=nz" data-i18n="nav.nz">${t('nav.nz')}</a>
              <a href="list.html?d=china" data-i18n="nav.china">${t('nav.china')}</a>
              <a href="list.html?d=europe" data-i18n="nav.europe">${t('nav.europe')}</a>
              <a href="list.html?d=asia" data-i18n="nav.asia">${t('nav.asia')}</a>
              <a href="list.html?d=cruise" data-i18n="nav.cruise">${t('nav.cruise')}</a>
            </div>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer.service">${t('footer.service')}</h4>
            <div class="footer-links">
              <a href="custom.html" data-i18n="nav.custom">${t('nav.custom')}</a>
              <a href="departures.html" data-i18n="dep.title">${t('dep.title')}</a>
              <a href="faq.html" data-i18n="faq.title">${t('faq.title')}</a>
              <a href="about.html" data-i18n="about.title">${t('about.title')}</a>
              <a href="contact.html" data-i18n="contact.title">${t('contact.title')}</a>
            </div>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer.contact">${t('footer.contact')}</h4>
            <div class="footer-channels">
              <a href="tel:${(c.hotline || '').replace(/\s/g,'')}">${c.hotline || ''}</a>
              <a href="tel:${(c.hotline2 || '').replace(/\s/g,'')}">${c.hotline2 || ''}</a>
              <a href="mailto:${c.email || ''}">${c.email || ''}</a>
            </div>
            <div class="footer-store">
              <div data-i18n="footer.office">${t('footer.office')}</div>
              <a href="${c.mapUrl || '#'}" ${c.mapUrl ? 'target="_blank" rel="noopener"' : ''} data-i18n="footer.addr">${t('footer.addr')}</a>
            </div>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer.company">${t('footer.company')}</h4>
            <div class="cc-qr-grid">
              ${c.wechatQr ? `<div class="cc-qr"><img src="${c.wechatQr}" alt="${c.wechatName || 'WeChat'} QR"><div class="cc-qr-cap">${c.wechatName || 'WeChat'}</div></div>` : ''}
              ${c.wechat2Qr ? `<div class="cc-qr"><img src="${c.wechat2Qr}" alt="${c.wechat2Name || 'WeChat'} QR"><div class="cc-qr-cap">${c.wechat2Name || 'WeChat'}</div></div>` : ''}
              ${c.wechatOfficialQr ? `<div class="cc-qr"><img src="${c.wechatOfficialQr}" alt="${c.wechatOfficial || 'Official account'} QR"><div class="cc-qr-cap">${c.wechatOfficial || 'Official'}</div></div>` : ''}
            </div>
          </div>
        </div>
        <div class="footer-bottom" data-i18n="footer.copyright">${t('footer.copyright')}</div>
      </div>`;
  }

  function applyLang(){
    document.documentElement.lang = lang === 'zh' ? 'zh' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(I18N[lang] && I18N[lang][key] != null) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
      const key = el.getAttribute('data-i18n-ph');
      if(I18N[lang] && I18N[lang][key] != null) el.setAttribute('placeholder', I18N[lang][key]);
    });
    window.dispatchEvent(new CustomEvent('langchange',{detail:{lang:lang}}));
  }

  function toggleLang(){
    lang = lang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('etrips_lang', lang);
    renderHeader();
    renderFloat();
    renderFooter();
    applyLang();
    if(window.onLangChange) window.onLangChange(lang);
  }

  window.ICONS = {
    phone: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.3 4.2 2 2 0 0 1 4.3 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/></svg>',
    wechat: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8.9 4C4.6 4 1 6.9 1 10.6c0 2.1 1.1 4 3 5.3l-.8 2.7 2.9-1.4c.9.2 1.8.4 2.8.4 4.3 0 7.9-2.9 7.9-6.5S13.2 4 8.9 4Zm-2 5.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm4 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z"/><path d="M23 15.6c0-3.2-3.1-5.8-6.9-5.8s-6.9 2.6-6.9 5.8 3.1 5.8 6.9 5.8c.8 0 1.6-.1 2.3-.3l2.4 1.1-.6-2.1c1.7-1.1 2.8-2.7 2.8-4.5Zm-8.8-.6a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Zm3.8 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>',
    chat: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></svg>'
  };

  window.tourCard = function(tour, currentLang){
    const name = currentLang === 'zh' ? tour.nameZh : tour.nameEn;
    const summary = currentLang === 'zh' ? tour.blurbZh : tour.blurbEn;
    const tags = currentLang === 'zh' ? tour.tags : tour.tagsEn;
    const dest = currentLang === 'zh' ? tour.destZh : tour.destEn;
    const price = currentLang === 'zh' ? tour.price : tour.priceEn;
    return `<article class="card">
      <a href="subpage.html?id=${tour.id}">
        <img class="thumb" src="${tour.img}" alt="${name}" loading="lazy">
      </a>
      <div class="body">
        <div class="card-kicker">${dest}</div>
        <h3>${name}</h3>
        <p class="tour-card-copy">${summary}</p>
        <div class="meta">
          <span>${tour.days} ${I18N[currentLang]['common.days']}</span>
          <span class="price">${price}</span>
        </div>
        <div class="tag-row">${(tags || []).map(tag=>`<span class="tag">${tag}</span>`).join('')}</div>
        <div style="margin-top:auto">
          <a href="subpage.html?id=${tour.id}" class="btn btn-outline" data-i18n="btn.detail">${I18N[currentLang]['btn.detail']}</a>
        </div>
      </div>
    </article>`;
  };

  window.contactChannels = function(currentLang, opts){
    opts = opts || {};
    const c = window.CONTACT || {};
    const items = [
      {
        href: 'tel:' + (c.hotline || '').replace(/\s/g,''),
        icon: window.ICONS.phone,
        label: I18N[currentLang]['contact.phone'],
        val: (c.hotline || '') + (c.hotline2 ? '<br>' + c.hotline2 : '')
      },
      {
        href: 'contact.html',
        icon: window.ICONS.wechat,
        label: I18N[currentLang]['contact.wechatLabel'],
        val: c.wechat || ''
      },
      {
        href: 'mailto:' + (c.email || ''),
        icon: window.ICONS.mail,
        label: I18N[currentLang]['contact.emailLabel'],
        val: c.email || ''
      },
      {
        href: c.mapUrl || '#',
        icon: window.ICONS.pin,
        label: I18N[currentLang]['contact.storeLabel'],
        val: currentLang === 'zh' ? (c.addressZh || '') : (c.addressEn || '')
      }
    ];
    const cards = items.map(item=>`
      <a class="cc-item" href="${item.href}" ${item.href.indexOf('http') === 0 ? 'target="_blank" rel="noopener"' : ''}>
        <span class="cc-icon">${item.icon}</span>
        <span class="cc-label">${item.label}</span>
        <span class="cc-val">${item.val}</span>
      </a>`).join('');
    if(opts.band){
      return `<section class="contact-band">
        <div class="container">
          <div class="cb-head">
            <div>
              <div class="section-kicker" data-i18n="home.contact.kicker">${t('home.contact.kicker')}</div>
              <h2 data-i18n="home.contact.title">${t('home.contact.title')}</h2>
            </div>
            <div class="cb-sub" data-i18n="home.contact.lead">${t('home.contact.lead')}</div>
          </div>
          <div class="contact-grid">${cards}</div>
        </div>
      </section>`;
    }
    return `<div class="contact-grid">${cards}</div>`;
  };

  window.storeInfo = function(currentLang){
    const c = window.CONTACT || {};
    return `<section class="store-info">
      <div class="si-line">${currentLang === 'zh' ? (c.hoursZh || '') : (c.hoursEn || '')}</div>
      <div class="si-line">${currentLang === 'zh' ? (c.addressZh || '') : (c.addressEn || '')}</div>
      <div class="si-line">${c.hotline || ''}${c.hotline2 ? ' / ' + c.hotline2 : ''}</div>
      <div class="si-icons"><a href="contact.html" aria-label="WeChat">${window.ICONS.wechat}</a></div>
    </section>`;
  };

  document.addEventListener('DOMContentLoaded', ()=>{
    renderHeader();
    renderFloat();
    renderFooter();
    applyLang();
    syncHeaderState();
    window.addEventListener('scroll', syncHeaderState, { passive: true });
    document.addEventListener('keydown', e=>{
      if(e.key === 'Escape') toggleMenu(false);
    });
  });

  window.Etrips = {
    getLang: ()=> lang,
    I18N: I18N,
    applyLang: applyLang
  };
})();
