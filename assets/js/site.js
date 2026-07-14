// Etrips 国安易游 — Site core JS (header, language, float widgets, footer, nav)

(function(){
  const I18N = window.I18N;
  let lang = localStorage.getItem('etrips_lang') || 'zh';

  // ---------- Build Header ----------
  function navItem(key, href, sub){
    let subHtml = '';
    if(sub){
      subHtml = '<ul class="submenu">';
      sub.forEach(s=> subHtml += `<li><a href="${s.href}" data-i18n="${s.key}">${I18N[lang][s.key]||s.key}</a></li>`);
      subHtml += '</ul>';
    }
    return `<li><a href="${href}" data-i18n="${key}">${I18N[lang][key]||key}</a>${subHtml}</li>`;
  }

  const NAV = [
    navItem('nav.home','index.html'),
    navItem('nav.australia','list.html?d=australia'),
    navItem('nav.nz','list.html?d=nz'),
    navItem('nav.china','list.html?d=china'),
    navItem('nav.europe','list.html?d=europe'),
    navItem('nav.asia','list.html?d=asia'),
    navItem('nav.cruise','list.html?d=cruise'),
    navItem('nav.custom','custom.html')
  ];

  function renderHeader(){
    const el = document.getElementById('site-header');
    if(!el) return;
    el.innerHTML = `
      <div class="container">
        <a href="index.html" class="logo">
          <img class="logo-img" src="assets/img/yiyou.png" alt="Etrips 国安易游">
        </a>
        <ul class="nav" id="main-nav">${NAV.join('')}</ul>
        <div class="header-search">
          <select id="h-dest" class="h-select" aria-label="目的地">
            <option value="" data-i18n="search.dest">目的地</option>
            <option value="australia" data-i18n="dest.australia">澳洲</option>
            <option value="nz" data-i18n="dest.nz">新西兰</option>
            <option value="china" data-i18n="dest.china">中国</option>
            <option value="europe" data-i18n="dest.europe">欧洲</option>
            <option value="asia" data-i18n="dest.asia">亚洲</option>
            <option value="cruise" data-i18n="dest.cruise">邮轮</option>
            <option value="custom" data-i18n="dest.custom">私人订制</option>
          </select>
          <select id="h-type" class="h-select" aria-label="参团方式">
            <option value="" data-i18n="search.type">参团方式</option>
            <option value="small" data-i18n="type.small">散拼团</option>
            <option value="private" data-i18n="type.private">私家团</option>
          </select>
          <button class="h-search" id="h-search" data-i18n="search.find">寻找</button>
        </div>
        <div class="header-actions">
          <button class="lang-btn" id="lang-toggle">${I18N[lang]['lang.switch']}</button>
          <a href="contact.html" class="btn btn-primary" data-i18n="btn.consult">${I18N[lang]['btn.consult']}</a>
          <button class="hamburger" id="hamburger"><span></span><span></span><span></span></button>
        </div>
      </div>`;
    document.getElementById('lang-toggle').addEventListener('click', toggleLang);
    document.getElementById('hamburger').addEventListener('click', ()=>{
      document.getElementById('main-nav').classList.toggle('open');
    });
    document.getElementById('h-search').addEventListener('click', ()=>{
      const d = document.getElementById('h-dest').value;
      const ty = document.getElementById('h-type').value;
      let url = 'list.html' + (d?('?d='+d):'') + (ty?((d?'&':'?')+'type='+encodeURIComponent(ty)):'');
      location.href = url;
    });
  }

  // ---------- Float widgets ----------
  const WA_SVG = `<svg viewBox="0 0 32 32" style="width:30px;height:30px"><circle cx="16" cy="16" r="16" fill="#25D366"/><path fill="#fff" d="M16 3C9.4 3 4 8.4 4 15c0 2.2.6 4.2 1.8 6L4 29l8.2-2.1c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.5c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.9 1.3 1.3-4.8-.3-.4c-1-1.6-1.5-3.4-1.5-5.3 0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10.8-10 10.8zm5.5-7.5c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.6-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3 4.8 4.2 1.7.7 2.3.8 3.1.7.5-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>`;

  function renderFloat(){
    const el = document.getElementById('float-bar');
    if(!el) return;
    const C = window.CONTACT || {};
    const wx1 = C.wechat || 'E_travelink', wx1n = C.wechatName || '小易', wx1qr = C.wechatQr || '';
    const wx2 = C.wechat2 || 'E-travelink', wx2n = C.wechat2Name || '小游';
    const wa = C.whatsapp || '', waqr = C.whatsappQr || '';
    el.innerHTML = `
      <div class="float-btn gold" data-i18n="float.quote" title="在线咨询" onclick="location.href='contact.html'">${I18N[lang]['float.quote']}</div>
      <div class="float-btn wechat" title="微信客服" onclick="EtripsFloat.toggle('wx-pop','.float-btn.wechat')"><img src="assets/img/wechat-icon.jpg" alt="微信"></div>
      <div class="float-btn whatsapp" title="WhatsApp" onclick="EtripsFloat.toggle('wa-pop','.float-btn.whatsapp')">${WA_SVG}</div>
      <div class="wx-pop" id="wx-pop" hidden>
        <div class="wx-row"><span class="wx-tag">${wx1n}</span> <b>${wx1}</b></div>
        ${wx1qr?`<img class="wx-qr" src="${wx1qr}" alt="${wx1n} QR">`:''}
        <div class="wx-row"><span class="wx-tag">${wx2n}</span> <b>${wx2}</b></div>
        ${C.wechat2Qr?`<img class="wx-qr" src="${C.wechat2Qr}" alt="${wx2n} QR">`:''}
        <div style="font-size:12px;color:#888;margin-top:6px">长按复制微信号 / 扫码添加</div>
      </div>
      <div class="wx-pop" id="wa-pop" hidden>
        ${waqr?`<img class="wx-qr" src="${waqr}" alt="WhatsApp QR">`:''}
        <div style="font-size:12px;color:#888;margin-top:6px">扫码添加 WhatsApp</div>
      </div>`;
  }

  window.EtripsFloat = {
    toggle(id, btnSel){
      const p = document.getElementById(id);
      if(!p) return;
      const show = p.hidden;
      ['wx-pop','wa-pop'].forEach(x=>{ const o=document.getElementById(x); if(o) o.hidden=true; });
      p.hidden = !show;
    }
  };
  document.addEventListener('click', e=>{
    ['wx-pop','wa-pop'].forEach(id=>{
      const p = document.getElementById(id);
      if(p && !p.hidden){
        const sel = id==='wx-pop' ? '.float-btn.wechat' : '.float-btn.whatsapp';
        if(!p.contains(e.target) && !e.target.closest(sel)) p.hidden = true;
      }
    });
  });

  // ---------- Footer ----------
  function renderFooter(){
    const el = document.getElementById('site-footer');
    if(!el) return;
    el.innerHTML = `
      <div class="footer-card">
      <div class="footer-inner">
        <nav class="footer-topnav">
          <a href="about.html" data-i18n="about.title">${I18N[lang]['about.title']}</a><span>|</span>
          <a href="contact.html" data-i18n="contact.title">${I18N[lang]['contact.title']}</a><span>|</span>
          <a href="faq.html" data-i18n="faq.title">${I18N[lang]['faq.title']}</a><span>|</span>
          <a href="departures.html" data-i18n="dep.title">${I18N[lang]['dep.title']}</a>
        </nav>
        <div class="footer-grid">
          <div>
            <h4 data-i18n="footer.nav">${I18N[lang]['footer.nav']}</h4>
            <a href="list.html?d=australia" data-i18n="nav.australia">${I18N[lang]['nav.australia']}</a>
            <a href="list.html?d=nz" data-i18n="nav.nz">${I18N[lang]['nav.nz']}</a>
            <a href="list.html?d=china" data-i18n="nav.china">${I18N[lang]['nav.china']}</a>
            <a href="list.html?d=europe" data-i18n="nav.europe">${I18N[lang]['nav.europe']}</a>
            <a href="list.html?d=asia" data-i18n="nav.asia">${I18N[lang]['nav.asia']}</a>
            <a href="list.html?d=cruise" data-i18n="nav.cruise">${I18N[lang]['nav.cruise']}</a>
            <a href="custom.html" data-i18n="nav.custom">${I18N[lang]['nav.custom']}</a>
          </div>
          <div>
            <h4 data-i18n="footer.company">${I18N[lang]['footer.company']}</h4>
            <a href="about.html" data-i18n="about.title">${I18N[lang]['about.title']}</a>
            <a href="contact.html" data-i18n="contact.title">${I18N[lang]['contact.title']}</a>
          </div>
          <div>
            <h4 data-i18n="footer.service">${I18N[lang]['footer.service']}</h4>
            <a href="faq.html" data-i18n="faq.title">${I18N[lang]['faq.title']}</a>
            <a href="departures.html" data-i18n="dep.title">${I18N[lang]['dep.title']}</a>
            <div class="contact-card-cyan">
              <div class="cc-row"><img src="assets/img/wechat-icon.jpg" alt="微信" class="cc-ico"> ${window.CONTACT.wechatName}：<b>${window.CONTACT.wechat}</b> / ${window.CONTACT.wechat2Name}：<b>${window.CONTACT.wechat2}</b></div>
              <div class="cc-row"><svg class="cc-ico" viewBox="0 0 32 32" style="background:#25D366;border-radius:3px"><path fill="#fff" d="M16 3C9.4 3 4 8.4 4 15c0 2.2.6 4.2 1.8 6L4 29l8.2-2.1c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.5c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.9 1.3 1.3-4.8-.3-.4c-1-1.6-1.5-3.4-1.5-5.3 0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10.8-10 10.8zm5.5-7.5c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.6-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3 4.8 4.2 1.7.7 2.3.8 3.1.7.5-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg> WhatsApp</div>
              <div class="cc-row"><img src="assets/img/wechat-icon.jpg" alt="微信" class="cc-ico"> 公众号：<b>${window.CONTACT.wechatOfficial}</b></div>
              <div class="cc-qr-grid">
                ${window.CONTACT.wechatQr?`<div class="cc-qr"><img src="${window.CONTACT.wechatQr}" alt="${window.CONTACT.wechatName} 微信二维码"><div class="cc-qr-cap">${window.CONTACT.wechatName}</div></div>`:''}
                ${window.CONTACT.wechat2Qr?`<div class="cc-qr"><img src="${window.CONTACT.wechat2Qr}" alt="${window.CONTACT.wechat2Name} 微信二维码"><div class="cc-qr-cap">${window.CONTACT.wechat2Name}</div></div>`:''}
                ${window.CONTACT.whatsappQr?`<div class="cc-qr"><img src="${window.CONTACT.whatsappQr}" alt="WhatsApp 二维码"><div class="cc-qr-cap">WhatsApp</div></div>`:''}
                ${window.CONTACT.wechatOfficialQr?`<div class="cc-qr"><img src="${window.CONTACT.wechatOfficialQr}" alt="${window.CONTACT.wechatOfficial} 公众号二维码"><div class="cc-qr-cap">公众号</div></div>`:''}
              </div>
            </div>
          </div>
          <div>
            <h4 data-i18n="footer.contact">${I18N[lang]['footer.contact']}</h4>
            <div class="muted" style="margin-bottom:8px">悉尼办公室 Sydney Office</div>
            <div class="footer-channels">
              <a href="tel:${window.CONTACT.hotline.replace(/\\s/g,'')}">☎ ${window.CONTACT.hotline}</a>
              <a href="tel:${window.CONTACT.hotline2.replace(/\\s/g,'')}">☎ ${window.CONTACT.hotline2}</a>
              <a href="mailto:${window.CONTACT.email}">✉ ${window.CONTACT.email}</a>
            </div>
            <div class="footer-store">📍 ${I18N[lang]['footer.addr']}</div>
          </div>
        </div>
        <div class="footer-compliance">
          <a href="#" data-i18n="footer.privacy">${I18N[lang]['footer.privacy']}</a>
          <a href="#" data-i18n="footer.terms">${I18N[lang]['footer.terms']}</a>
          <a href="#" data-i18n="footer.disclaimer">${I18N[lang]['footer.disclaimer']}</a>
        </div>
      </div>
      <div class="footer-bottom">${I18N[lang]['footer.copyright']}</div>
      </div>
      </div>`;
  }

  // ---------- Language ----------
  function applyLang(){
    document.documentElement.lang = (lang==='zh')?'zh':'en';
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(I18N[lang][key]!=null) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
      const key = el.getAttribute('data-i18n-ph');
      if(I18N[lang][key]!=null) el.setAttribute('placeholder', I18N[lang][key]);
    });
    window.dispatchEvent(new CustomEvent('langchange',{detail:{lang}}));
  }
  function toggleLang(){
    lang = (lang==='zh')?'en':'zh';
    localStorage.setItem('etrips_lang', lang);
    renderHeader(); renderFloat(); renderFooter(); applyLang();
    if(window.onLangChange) window.onLangChange(lang);
  }

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', ()=>{
    renderHeader(); renderFloat(); renderFooter(); applyLang();
  });
  // expose
  window.Etrips = { getLang: ()=>lang, I18N, applyLang };

  // ---------- Shared tour card renderer ----------
  window.tourCard = function(t, lang){
    const I = window.I18N;
    const name = lang==='zh'?t.nameZh:t.nameEn;
    const tags = lang==='zh'?t.tags:t.tagsEn;
    const price = lang==='zh'?t.price:t.priceEn;
    return `<a class="card" href="subpage.html?id=${t.id}">
      <img class="thumb" src="${t.img}" alt="${name}">
      <div class="body">
        <h3>${name}</h3>
        <div class="meta"><span>${t.days} ${I[lang]['common.days']}</span><span>${price}</span></div>
        <div>${tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div>
        <p style="margin-top:10px"><a href="subpage.html?id=${t.id}" class="btn btn-outline" data-i18n="btn.detail">${I[lang]['btn.detail']}</a></p>
      </div></a>`;
  };

  // ---------- Shared contact channels (5 channels) ----------
  // Icons: colored SVG (sky-blue phone / lavender WhatsApp / mint WeChat / grey mail / red pin)
  window.ICONS = {
    phone: '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#5bb8e8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" width="34" height="34" fill="#b69be6"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.24.68-1.4 1.3-1.9 1.35-.5.05-.5.4-.3.8.2.4.95 1.5 1.95 2 .5.25 1 .4 1.5.5.7.15 1.3.1 1.8-.1.8-.3 1.4-.9 1.5-1.7.1-.8.3-2.6.1-3.3-.2-.7-1-1.2-1.9-1.5-.9-.3-1.6-.4-2.4-.3-.8.1-1.8.4-2.6 1.1-.1.1-.2.2-.3.3-.2-.1-.6-.3-1.2-.6-.6-.3-1.1-.5-1.6-.7l-.2-.1a7.6 7.6 0 0 1-3.5-3.2c-.3-.6-.3-1.2-.2-1.7.1-.5.5-1 .9-1.3.3-.3.7-.4 1.1-.5l.3-.1c.2 0 .4 0 .6.4.2.4.7 1.3.8 1.4.1.1.2.2.1.4 0 .1-.1.3-.2.4-.1.1-.2.3-.4.4-.1.1-.3.3-.4.4-.2.2-.3.4-.1.6.2.2.9 1.4 1.9 2.3 1.3 1.1 2.4 1.5 2.9 1.6.1 0 .3 0 .4-.2.1-.2.4-.8.6-1.1.2-.3.3-.2.5-.1l1.4.7c.4.2.8.4 1 .6.2.2.2.5.1.7z"/></svg>',
    wechat: '<svg viewBox="0 0 24 24" width="34" height="34" fill="#4ec9a5"><ellipse cx="9" cy="10" rx="7" ry="6"/><ellipse cx="16" cy="15" rx="6" ry="5" opacity=".85"/><circle cx="6.5" cy="9" r="1" fill="#fff"/><circle cx="11.5" cy="9" r="1" fill="#fff"/><circle cx="14" cy="14" r=".9" fill="#fff"/><circle cx="18" cy="14" r=".9" fill="#fff"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#9aa6b2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" width="34" height="34" fill="#e23b3b"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>'
  };

  window.contactChannels = function(lang, opts){
    opts = opts || {};
    const c = window.CONTACT;
    const wa = c.whatsapp.replace(/\s/g,'');
    const ICON = window.ICONS;
    const items = [
      { href:'tel:'+c.hotline.replace(/\s/g,''), icon:ICON.phone,
        label: lang==='zh'?'客服热线':'Hotline',
        val: c.hotline+'<br>'+c.hotline2 },
      { href:'https://wa.me/'+wa, icon:ICON.whatsapp, target:true,
        label: 'WhatsApp', val: c.whatsapp },
      { href:'contact.html', icon:ICON.wechat,
        label: lang==='zh'?'官方微信':'WeChat', val: c.wechat },
      { href:'mailto:'+c.email, icon:ICON.mail,
        label: lang==='zh'?'工作邮箱':'Email', val: c.email },
      { href: c.mapUrl, icon:ICON.pin, target:true,
        label: lang==='zh'?'线下门店定位':'Store Location',
        val: (lang==='zh'?c.addressZh:c.addressEn).replace(/,\s*/g,'<br>') }
    ];
    const cards = items.map(it=>`
      <a class="cc-item" href="${it.href}" ${it.target?'target="_blank" rel="noopener"':''}>
        <span class="cc-icon">${it.icon}</span>
        <span class="cc-label">${it.label}</span>
        <span class="cc-val">${it.val}</span>
      </a>`).join('');
    if(opts.band){
      return `<section class="contact-band">
        <div class="container">
          <div class="cb-head">
            <h2>${lang==='zh'?'联系方式':'Contact'}</h2>
            <div class="cb-sub">${lang==='zh'?'悉尼办公室 Sydney Office':'Sydney Office'}</div>
          </div>
          <div class="contact-grid">${cards}</div>
        </div>
      </section>`;
    }
    return `<div class="contact-grid">${cards}</div>`;
  };

  // ---------- Minimal centered store info bar (hours / address / phone + WeChat & WhatsApp icons) ----------
  window.storeInfo = function(lang){
    const c = window.CONTACT;
    const wa = c.whatsapp.replace(/\s/g,'');
    const ICON = window.ICONS;
    return `<section class="store-info">
      <div class="si-line">${lang==='zh'?c.hoursZh:c.hoursEn}</div>
      <div class="si-line">${c.addressZh}</div>
      <div class="si-line">${c.hotline}　${c.hotline2}</div>
      <div class="si-icons">
        <a href="contact.html" title="WeChat" aria-label="WeChat">${ICON.wechat}</a>
        <a href="https://wa.me/${wa}" target="_blank" rel="noopener" title="WhatsApp" aria-label="WhatsApp">${ICON.whatsapp}</a>
      </div>
    </section>`;
  };
})();
