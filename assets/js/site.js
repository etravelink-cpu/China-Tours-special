// Etrips 国安易游 — Site core JS (header, language, float widgets, footer, nav)

(function () {
  const I18N = window.I18N;
  let lang = localStorage.getItem("etrips_lang") || "zh";
  // 子目录页面(如 /tours/)注入的相对链接/图片需回到站点根
  const BASE = /\/tours\//.test(location.pathname) ? "../" : "";

  // ---------- Build Header ----------
  function navItem(key, href, sub) {
    let subHtml = "";
    if (sub) {
      subHtml = '<ul class="submenu">';
      sub.forEach(
        (s) =>
          (subHtml += `<li><a href="${BASE}${s.href}" data-i18n="${s.key}">${I18N[lang][s.key] || s.key}</a></li>`),
      );
      subHtml += "</ul>";
    }
    return `<li><a href="${BASE}${href}" data-i18n="${key}">${I18N[lang][key] || key}</a>${subHtml}</li>`;
  }

  const NAV = [
    navItem("nav.home", "index.html"),
    navItem("nav.australia", "list.html?d=australia"),
    navItem("nav.nz", "list.html?d=nz"),
    navItem("nav.china", "list.html?d=china"),
    navItem("nav.europe", "list.html?d=europe"),
    navItem("nav.asia", "list.html?d=asia"),
    navItem("nav.island", "list.html?d=island"),
    navItem("nav.america", "list.html?d=america"),
    navItem("nav.cruise", "list.html?d=cruise"),
    navItem("nav.custom", "custom.html"),
  ];

  function setNavOpen(open) {
    const nav = document.getElementById("main-nav");
    const btn = document.getElementById("hamburger");
    if (!nav || !btn) return;
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
  }

  function markActiveNav() {
    const currentPath = location.pathname.split("/").pop() || "index.html";
    const currentDest = new URLSearchParams(location.search).get("d") || "";
    document.querySelectorAll("#main-nav a[href]").forEach((a) => {
      const url = new URL(a.getAttribute("href"), location.href);
      const path = url.pathname.split("/").pop() || "index.html";
      const dest = url.searchParams.get("d") || "";
      const isActive =
        path === currentPath && (path !== "list.html" || dest === currentDest);
      a.classList.toggle("active", isActive);
    });
  }

  function renderHeader() {
    const el = document.getElementById("site-header");
    if (!el) return;
    el.innerHTML = `
      <div class="container">
        <a href="${BASE}index.html" class="logo">
          <img class="logo-img" src="${BASE}assets/img/yiyou.png" alt="Etrips 国安易游">
        </a>
        <ul class="nav" id="main-nav">${NAV.join("")}</ul>
        <div class="header-search">
          <select id="h-dest" class="h-select" aria-label="${I18N[lang]["search.dest"]}">
            <option value="" data-i18n="search.dest">目的地</option>
            <option value="australia" data-i18n="dest.australia">澳洲</option>
            <option value="nz" data-i18n="dest.nz">新西兰</option>
            <option value="china" data-i18n="dest.china">中国</option>
            <option value="europe" data-i18n="dest.europe">欧洲</option>
            <option value="asia" data-i18n="dest.asia">亚洲</option>
            <option value="cruise" data-i18n="dest.cruise">邮轮</option>
            <option value="other" data-i18n="dest.other">其他</option>
            <option value="custom" data-i18n="dest.custom">私人订制</option>
          </select>
          <button class="h-search" id="h-search" data-i18n="search.find">寻找</button>
        </div>
        <div class="header-actions">
          <button class="lang-btn" id="lang-toggle">${I18N[lang]["lang.switch"]}</button>
          <a href="${BASE}contact.html" class="btn btn-primary" data-i18n="btn.consult">${I18N[lang]["btn.consult"]}</a>
          <button class="hamburger" id="hamburger" type="button" aria-label="Toggle navigation" aria-controls="main-nav" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>
      </div>`;
    document
      .getElementById("lang-toggle")
      .addEventListener("click", toggleLang);
    document.getElementById("hamburger").addEventListener("click", () => {
      const nav = document.getElementById("main-nav");
      setNavOpen(!nav.classList.contains("open"));
    });
    document.querySelectorAll("#main-nav a").forEach((a) => {
      a.addEventListener("click", () => {
        if (window.innerWidth <= 1080) setNavOpen(false);
      });
    });
    document.getElementById("h-search").addEventListener("click", () => {
      const d = document.getElementById("h-dest").value;
      let url = "list.html" + (d ? "?d=" + d : "");
      location.href = BASE + url;
    });
    markActiveNav();
  }

  // ---------- Float widgets ----------

  function renderFloat() {
    const el = document.getElementById("float-bar");
    if (!el) return;
    const C = window.CONTACT || {};
    const wx1 = C.wechat || "E_travelink",
      wx1n = C.wechatName || "小易",
      wx1qr = C.wechatQr || "";
    const wx2 = C.wechat2 || "E-travelink",
      wx2n = C.wechat2Name || "小游";
    el.innerHTML = `
      <button type="button" class="float-btn gold" data-i18n="float.quote" title="${I18N[lang]["float.quote"]}" onclick="location.href='${BASE}contact.html'">${I18N[lang]["float.quote"]}</button>
      <button type="button" class="float-btn wechat" title="${I18N[lang]["wx.title"]}" aria-haspopup="dialog" aria-expanded="false" onclick="EtripsFloat.toggle('wx-pop','.float-btn.wechat')"><img src="${BASE}assets/img/wechat-icon.jpg" alt="WeChat"></button>
      <div class="wx-pop" id="wx-pop" hidden>
        <div class="wx-row"><span class="wx-tag">${wx1n}</span> <b>${wx1}</b></div>
        ${wx1qr ? `<img class="wx-qr" src="${BASE}${wx1qr}" alt="${wx1n} QR">` : ""}
        <div class="wx-row"><span class="wx-tag">${wx2n}</span> <b>${wx2}</b></div>
        ${C.wechat2Qr ? `<img class="wx-qr" src="${BASE}${C.wechat2Qr}" alt="${wx2n} QR">` : ""}
        <div style="font-size:12px;color:#4E6076;margin-top:6px">${I18N[lang]["wx.caption"]}</div>
      </div>
    `;
  }

  window.EtripsFloat = {
    toggle(id, btnSel) {
      const p = document.getElementById(id);
      if (!p) return;
      const show = p.hidden;
      const btn = btnSel && document.querySelector(btnSel);
      if (btn) btn.setAttribute("aria-expanded", show ? "true" : "false");
      ["wx-pop"].forEach((x) => {
        const o = document.getElementById(x);
        if (o) o.hidden = true;
      });
      p.hidden = !show;
    },
  };
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const p = document.getElementById("wx-pop");
    if (p && !p.hidden) {
      p.hidden = true;
      const b = document.querySelector(".float-btn.wechat");
      if (b) { b.setAttribute("aria-expanded", "false"); b.focus(); }
      return;
    }
    const nav = document.getElementById("main-nav");
    if (nav && nav.classList.contains("open")) {
      setNavOpen(false);
      const h = document.getElementById("hamburger");
      if (h) h.focus();
    }
  });
  document.addEventListener("click", (e) => {
    const nav = document.getElementById("main-nav");
    if (
      nav &&
      nav.classList.contains("open") &&
      !e.target.closest("#site-header")
    ) {
      setNavOpen(false);
    }
    ["wx-pop"].forEach((id) => {
      const p = document.getElementById(id);
      if (p && !p.hidden) {
        const sel = ".float-btn.wechat";
        if (!p.contains(e.target) && !e.target.closest(sel)) p.hidden = true;
      }
    });
  });

  // ---------- Footer ----------
  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    el.innerHTML = `
      <div class="footer-card">
      <div class="footer-inner">
        <nav class="footer-topnav">
          <a href="${BASE}list.html?d=australia">${I18N[lang]["nav.australia"]}</a><span>|</span>
          <a href="${BASE}list.html?d=nz">${I18N[lang]["nav.nz"]}</a><span>|</span>
          <a href="${BASE}list.html?d=china">${I18N[lang]["nav.china"]}</a><span>|</span>
          <a href="${BASE}list.html?d=europe">${I18N[lang]["nav.europe"]}</a><span>|</span>
          <a href="${BASE}list.html?d=asia">${I18N[lang]["nav.asia"]}</a><span>|</span>
          <a href="${BASE}list.html?d=island">${I18N[lang]["nav.island"]}</a><span>|</span>
          <a href="${BASE}list.html?d=america">${I18N[lang]["nav.america"]}</a><span>|</span>
          <a href="${BASE}list.html?d=cruise">${I18N[lang]["nav.cruise"]}</a><span>|</span>
          <a href="${BASE}custom.html">${I18N[lang]["nav.custom"]}</a><span>|</span>
          <a href="${BASE}about.html" data-i18n="about.title">${I18N[lang]["about.title"]}</a><span>|</span>
          <a href="${BASE}contact.html" data-i18n="contact.title">${I18N[lang]["contact.title"]}</a><span>|</span>
          <a href="${BASE}faq.html" data-i18n="faq.title">${I18N[lang]["faq.title"]}</a><span>|</span>
          <a href="${BASE}departures.html" data-i18n="dep.title">${I18N[lang]["dep.title"]}</a>
        </nav>
        <div class="footer-grid footer-grid-2">
          <div>
            <h4 data-i18n="footer.contact">${I18N[lang]["footer.contact"]}</h4>
            <div class="muted" style="margin-bottom:8px">悉尼办公室 Sydney Office</div>
            <div class="footer-channels">
              <a href="tel:${window.CONTACT.hotline.replace(/\s/g, "")}">${window.CONTACT.hotline}</a>
              <a href="tel:${window.CONTACT.hotline2.replace(/\s/g, "")}">${window.CONTACT.hotline2}</a>
              <a href="mailto:${window.CONTACT.email}">${window.CONTACT.email}</a>
            </div>
            <div class="footer-store"><a href="${window.CONTACT.mapUrl}" target="_blank" rel="noopener">${I18N[lang]["footer.addr"]}</a></div>
          </div>
          <div>
            <h4>${I18N[lang]["footer.qr"]}</h4>
            <div class="cc-qr-grid">
              ${window.CONTACT.wechatQr ? `<div class="cc-qr"><span class="cc-qr-ico">${window.ICONS.wechat}</span><img loading="lazy" src="${BASE}${window.CONTACT.wechatQr}" alt="${window.CONTACT.wechatName} 微信二维码"><div class="cc-qr-cap">${window.CONTACT.wechatName}</div></div>` : ""}
              ${window.CONTACT.wechat2Qr ? `<div class="cc-qr"><span class="cc-qr-ico">${window.ICONS.wechat}</span><img loading="lazy" src="${BASE}${window.CONTACT.wechat2Qr}" alt="${window.CONTACT.wechat2Name} 微信二维码"><div class="cc-qr-cap">${window.CONTACT.wechat2Name}</div></div>` : ""}

              ${window.CONTACT.wechatOfficialQr ? `<div class="cc-qr"><span class="cc-qr-ico">${window.ICONS.wechat}</span><img loading="lazy" src="${BASE}${window.CONTACT.wechatOfficialQr}" alt="${window.CONTACT.wechatOfficial} 公众号二维码"><div class="cc-qr-cap">${I18N[lang]["footer.mp"]}</div></div>` : ""}
            </div>
          </div>
        </div>
        <div class="footer-compliance">
          <a href="#" data-i18n="footer.privacy">${I18N[lang]["footer.privacy"]}</a>
          <a href="#" data-i18n="footer.terms">${I18N[lang]["footer.terms"]}</a>
          <a href="#" data-i18n="footer.disclaimer">${I18N[lang]["footer.disclaimer"]}</a>
        </div>
      </div>
      <div class="footer-bottom">${I18N[lang]["footer.copyright"]}</div>
      </div>`;
  }

  // ---------- Language ----------
  function applyLang(options) {
    const emit = !options || options.emit !== false;
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (I18N[lang][key] != null) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (I18N[lang][key] != null)
        el.setAttribute("placeholder", I18N[lang][key]);
    });
    if (emit)
      window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }
  function toggleLang() {
    lang = lang === "zh" ? "en" : "zh";
    localStorage.setItem("etrips_lang", lang);
    renderHeader();
    renderFloat();
    renderFooter();
    applyLang();
    if (window.onLangChange) window.onLangChange(lang);
  }

  // ---------- Init ----------
  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFloat();
    renderFooter();
    applyLang();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) setNavOpen(false);
  });
  // expose
  window.Etrips = { getLang: () => lang, I18N, applyLang };

  // ---------- Shared tour card renderer ----------
  window.tourCard = function (t, lang) {
    const I = window.I18N;
    const name = lang === "zh" ? t.nameZh : t.nameEn;
    const tags = lang === "zh" ? t.tags : t.tagsEn;
    const price = lang === "zh" ? t.price : t.priceEn;
    const dest = lang === "zh" ? t.destZh : t.destEn;
    return `<a class="card" href="${BASE}subpage.html?id=${t.id}">
      <div class="thumb-wrap">
        <img class="thumb" src="${t.img}" alt="${name}" loading="lazy">
        <span class="thumb-chip">${t.days} ${I[lang]["common.days"]}</span>
      </div>
      <div class="body">
        <span class="card-eyebrow">${dest || ""}</span>
        <h3>${name}</h3>
        <div class="meta"><span class="price">${price} ${lang === "zh" ? "起" : "from"}</span></div>
        <div>${tags.map((x) => `<span class="tag">${x}</span>`).join("")}</div>
        <p style="margin-top:10px"><span class="btn btn-outline" data-i18n="btn.detail">${I[lang]["btn.detail"]}</span></p>
      </div></a>`;
  };

  // ---------- Shared contact channels (5 channels) ----------
  // Icons: colored SVG (sky-blue phone / mint WeChat / grey mail / red pin)
  window.ICONS = {
    phone:
      '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#5bb8e8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    wechat:
      '<svg viewBox="0 0 24 24" width="34" height="34" fill="#4ec9a5"><ellipse cx="9" cy="10" rx="7" ry="6"/><ellipse cx="16" cy="15" rx="6" ry="5" opacity=".85"/><circle cx="6.5" cy="9" r="1" fill="#fff"/><circle cx="11.5" cy="9" r="1" fill="#fff"/><circle cx="14" cy="14" r=".9" fill="#fff"/><circle cx="18" cy="14" r=".9" fill="#fff"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#9aa6b2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" width="34" height="34" fill="#e23b3b"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
  };

  window.contactChannels = function (lang, opts) {
    opts = opts || {};
    const c = window.CONTACT;
    const ICON = window.ICONS;
    const items = [
      {
        href: "tel:" + c.hotline.replace(/\s/g, ""),
        icon: ICON.phone,
        label: lang === "zh" ? "客服热线" : "Hotline",
        val: c.hotline + "<br>" + c.hotline2,
      },
      {
        href: "contact.html",
        icon: ICON.wechat,
        label: lang === "zh" ? "官方微信" : "WeChat",
        val: c.wechat,
      },
      {
        href: "mailto:" + c.email,
        icon: ICON.mail,
        label: lang === "zh" ? "工作邮箱" : "Email",
        val: c.email,
      },
      {
        href: c.mapUrl,
        icon: ICON.pin,
        target: true,
        label: lang === "zh" ? "线下门店定位" : "Store Location",
        val: (lang === "zh" ? c.addressZh : c.addressEn).replace(
          /,\s*/g,
          "<br>",
        ),
      },
    ];
    const cards = items
      .map(
        (it) => `
      <a class="cc-item" href="${it.href}" ${it.target ? 'target="_blank" rel="noopener"' : ""}>
        <span class="cc-icon">${it.icon}</span>
        <span class="cc-label">${it.label}</span>
        <span class="cc-val">${it.val}</span>
      </a>`,
      )
      .join("");
    if (opts.band) {
      return `<section class="contact-band">
        <div class="container">
          <div class="cb-head">
            <h2>${lang === "zh" ? "联系方式" : "Contact"}</h2>
            <div class="cb-sub">${lang === "zh" ? "悉尼办公室 Sydney Office" : "Sydney Office"}</div>
          </div>
          <div class="contact-grid">${cards}</div>
        </div>
      </section>`;
    }
    return `<div class="contact-grid">${cards}</div>`;
  };

  // ---------- Minimal centered store info bar (hours / address / phone + WeChat icons) ----------
  window.storeInfo = function (lang) {
    const c = window.CONTACT;
    const ICON = window.ICONS;
    return `<section class="store-info">
      <div class="si-line">${lang === "zh" ? c.hoursZh : c.hoursEn}</div>
      <div class="si-line">${c.addressZh}</div>
      <div class="si-line">${c.hotline}　${c.hotline2}</div>
      <div class="si-icons">
        <a href="contact.html" title="WeChat" aria-label="WeChat">${ICON.wechat}</a>
      </div>
    </section>`;
  };
})();
