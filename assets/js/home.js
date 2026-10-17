(function () {
  const T = window.TOURS,
    R = window.REVIEWS,
    TIP = window.TIPS,
    I = window.I18N;
  let lang = "zh";

  function renderHero() {
    const HERO = [
      {
        img: "assets/img/v2/au-apostles-1440.webp",
        video: "assets/video/hero-twelve-apostles.mp4",
        poster: "assets/video/hero-twelve-apostles-poster.jpg",
        tag: "易行天下，奔赴山海 · Connects you with moments",
        h1: "探索世界 · 从澳洲出发",
        sub: "从澳洲出发，抵达全球每一个值得去的地方",
        tagEn: "Connects you with moments",
        h1En: "Explore the World, from Australia",
        subEn: "From Australia to everywhere worth going",
        href: "list.html",
        cta: "查看线路",
        ctaEn: "View Tours",
      },
      {
        img: "assets/img/v2/cn-zhangjiajie-1440.webp",
        video: "assets/video/hero-zhangjiajie.mp4",
        poster: "assets/video/hero-zhangjiajie-poster.jpg",
        tag: "千年文明 · 山水中国",
        h1: "深度中国 · 长线定制",
        sub: "云南·西北·华东，规划适合您的行程",
        tagEn: "Timeless China",
        h1En: "Deep China, Long-haul Journeys",
        subEn: "Yunnan, the Northwest and Jiangnan, small groups or private",
        href: "list.html?d=china",
        cta: "查看线路",
        ctaEn: "View Tours",
      },
      {
        img: "assets/img/v2/as-fuji-1440.webp",
        video: "assets/video/hero-fuji.mp4",
        poster: "assets/video/hero-fuji-poster.jpg",
        tag: "樱花与温泉 · 日本本州",
        h1: "日本本州 · 旅行灵感",
        sub: "东京·富士山·京都，咨询行程安排",
        tagEn: "Sakura & Onsen, Honshu",
        h1En: "Japan Honshu Classic",
        subEn: "Tokyo, Mt Fuji and Kyoto, tailor-made",
        href: "list.html?d=asia",
        cta: "查看线路",
        ctaEn: "View Tours",
      },
      {
        img: "assets/img/v2/nz-milford-1440.webp",
        video: "assets/video/hero-milford.mp4",
        poster: "assets/video/hero-milford-poster.jpg",
        tag: "冰川峡湾 · 纯净新西兰",
        h1: "新西兰 · 南北岛环游",
        sub: "米尔福德峡湾·皇后镇，探索旅行灵感",
        tagEn: "Fiords & Glaciers, Pure NZ",
        h1En: "New Zealand, Both Islands",
        subEn: "Explore travel ideas around Milford Sound and Queenstown",
        href: "list.html?d=nz",
        cta: "查看线路",
        ctaEn: "View Tours",
      },
      {
        img: "assets/img/v2/cr-sunset-960.webp",
        video: "assets/video/hero-sydney-harbour.mp4",
        poster: "assets/video/hero-sydney-harbour-poster.jpg",
        tag: "蓝海邮轮 · 一站度假",
        h1: "邮轮专线 · 悉尼启航",
        sub: "咨询邮轮目的地、航期与所选服务",
        tagEn: "Blue-water Cruising",
        h1En: "Cruise Lines from Sydney Harbour",
        subEn: "Ask about cruise destinations, sailings and chosen services",
        href: "list.html?d=cruise",
        cta: "查看线路",
        ctaEn: "View Tours",
      },
    ].filter(s=>!s.href.includes("d=cruise"));
    const wrap = document.getElementById("hero-slides");
    const dots = document.getElementById("hero-dots");
    if (!wrap) return;
    const noMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    wrap.innerHTML = HERO.map(
      (s, i) => `
      <div class="hero-slide${i === 0 ? " active" : ""}"${i === 0 ? ` style="background-image:url('${s.video && !noMotion ? s.poster : s.img}')"` : ` data-bg="${s.video && !noMotion ? s.poster : s.img}"`}>
        ${s.video && !noMotion ? `<video class="hero-video" muted loop playsinline preload="none" poster="${s.poster}" data-vsrc="${s.video}" aria-hidden="true"></video>` : ""}
        <div class="container">
          <div class="hero-content">
            <p class="hero-tagline">${lang === "zh" ? s.tag : s.tagEn}</p>
            ${i === 0 ? "<h1>" : '<p class="hero-title">'}${lang === "zh" ? s.h1 : s.h1En}${i === 0 ? "</h1>" : "</p>"}
            <p class="hero-sub">${lang === "zh" ? s.sub : s.subEn}</p>
            <div class="hero-cta">
              <a href="${s.href}" class="btn btn-gold">${lang === "zh" ? s.cta : s.ctaEn}</a>
              <a href="custom.html" class="btn btn-hero-outline">${lang === "zh" ? "私人订制 · Tailor-made" : "Tailor-made"}</a>
            </div>
          </div>
        </div>
      </div>`,
    ).join("");
    dots.innerHTML = HERO.map(
      (_, i) =>
        `<button type="button" class="dot${i === 0 ? " on" : ""}" data-i="${i}" aria-label="${lang === "zh" ? "第" + (i + 1) + "张" : "Slide " + (i + 1)}"></button>`,
    ).join("");
    let cur = 0;
    const slides = [...wrap.querySelectorAll(".hero-slide")];
    const dotEls = [...dots.querySelectorAll(".dot")];
    function hydrate() {
      slides.forEach((sl) => {
        if (sl.dataset.bg) {
          sl.style.backgroundImage = "url('" + sl.dataset.bg + "')";
          delete sl.dataset.bg;
        }
      });
    }
    function playActive() {
      slides.forEach((sl, i) => {
        const v = sl.querySelector(".hero-video");
        if (!v) return;
        if (i === cur) {
          if (v.dataset.vsrc) {
            v.src = v.dataset.vsrc;
            delete v.dataset.vsrc;
          }
          const p = v.play();
          if (p) p.catch(() => {});
        } else if (!v.paused) {
          v.pause();
        }
      });
    }
    function go(n) {
      hydrate();
      cur = (n + slides.length) % slides.length;
      slides.forEach((sl, i) => sl.classList.toggle("active", i === cur));
      dotEls.forEach((d, i) => d.classList.toggle("on", i === cur));
      playActive();
    }
    function armTimer() {
      if (window.__heroTimer) clearInterval(window.__heroTimer);
      window.__heroTimer = setInterval(() => go(cur + 1), 7000);
    }
    dotEls.forEach((d) =>
      d.addEventListener("click", () => {
        go(+d.dataset.i);
        armTimer();
      }),
    );
    playActive();
    armTimer();
  }

function rebuild() {
    lang = window.Etrips.getLang();
    renderHero();

    // 板块2 选择你的目的地（竖向长条卡）
    const dest=window.EtripsMarkets.map(m=>({zh:m.zh,en:m.en.toUpperCase(),img:m.image?'assets/img/destinations/'+m.image:'',href:'list.html?d='+m.key}));
    document.getElementById("biz-grid").innerHTML =
      `<div class="dest-row">` +
      dest
        .map(
          (d) => `
      <a class="dest-strip${d.wide ? " wide" : ""}" href="${d.href}">
        ${d.img?`<img src="${d.img}" alt="${d.zh}" loading="lazy">`:`<div class="dest-abstract" aria-hidden="true"></div>`}
        <div class="ov"></div>
        <div class="lbl">${d.zh}<span class="en">${d.en}</span></div>
      </a>`,
        )
        .join("") +
      `</div>`;

    // References only: use featured order when supplied; otherwise diversify the published catalogue.
    const available=[...new Map(T.filter(t=>t.v2Public).map(t=>[t.id,t])).values()];
    const chosen=available.filter(t=>t.featured).sort((a,b)=>(a.forder??999)-(b.forder??999)).slice(0,6);
    if(!chosen.length){
      for(let round=0;chosen.length<6;round++){
        let added=false;for(const market of window.EtripsMarkets){const t=available.filter(x=>x.dest===market.key)[round];if(t&&chosen.length<6){chosen.push(t);added=true;}}
        if(!added)break;
      }
    }
    const safe=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const hotWrap=document.getElementById('hot-grid');hotWrap.className='catalogue-cards';
    hotWrap.innerHTML=chosen.map(t=>{
      const name=(lang==='zh'?t.nameZh:t.nameEn)||t.nameZh,market=window.EtripsMarkets.find(m=>m.key===t.dest);
      const days=[...new Set(t.v2Public.offers.map(o=>o.days).filter(Boolean))].sort((a,b)=>a-b);
      const summary=t.productType==='TICKET_ACTIVITY'?(lang==='zh'?'门票与单项活动':'Tickets & activities'):(days.join('/')+(lang==='zh'?'日':' days'));
      const img=Array.isArray(t.img)?t.img[0]:t.img;
      return '<a class="catalogue-card" href="list.html?d='+encodeURIComponent(t.dest)+'&amp;id='+encodeURIComponent(t.id)+'">'+(img?'<img src="'+safe(img)+'" alt="" loading="lazy" width="400" height="240">':'')+'<div class="catalogue-card-body"><div class="catalogue-card-meta">'+safe(market?.[lang]||t.destZh)+' · '+safe(summary)+'</div><h3>'+safe(name)+'</h3><span class="catalogue-card-link">'+(lang==='zh'?'查看行程 →':'Explore this trip →')+'</span></div></a>';
    }).join('');
    document.getElementById('tours').hidden=!chosen.length;

    // 板块4 优势（真人实景图 + 编号，无 emoji — 见 DESIGN.md）
    const adv = ["home.adv1", "home.adv2", "home.adv3", "home.adv4"];
    const copy = (key) => String(I[lang][key] || "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    document.getElementById("adv-grid").innerHTML = adv
      .map((a, i) => `
      <article class="adv-item">
        <img class="adv-img" src="assets/img/adv/adv-${i + 1}.jpg" alt="" loading="lazy" width="640" height="480">
        <span class="adv-num">0${i + 1} | ${copy(a + '.tag')}</span>
        <h3 data-i18n="${a}.title">${copy(a + '.title').replace(' · ', '&nbsp;· ')}</h3>
        <p class="adv-desc" data-i18n="${a}.desc">${copy(a + '.desc')}</p>
      </article>`).join("");

    // 板块6 出行小贴士
    const TIP = window.TIPS || [];
    document.getElementById("tips-grid").innerHTML = TIP.map(
      (t) =>
        `<div class="tip"><span class="tip-ico" aria-hidden="true"></span><p>${lang === "zh" ? t.zh : t.en}</p></div>`,
    ).join("");
  }

  // 自定义日期选择器：独立初始化（首页/子页皆可，不依赖首页 rebuild）
  if (document.getElementById("date-trigger") && window.EtripsDatePicker)
    window.EtripsDatePicker.init();

  // ---------- 自定义日期选择器（橙条表头 / 周一列首 / 今天红标 / 真实发团日高亮） ----------
  window.EtripsDatePicker = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    init() {
      const trigger = document.getElementById("date-trigger");
      const pop = document.getElementById("date-pop");
      const hidden = document.querySelector('input[name="date"]');
      const avail = (window.DEPARTURES || []).map((d) => d.date); // 真实发团日 YYYY-MM-DD
      const render = () => {
        const y = this.year,
          m = this.month;
        const first = new Date(y, m, 1).getDay(); // 0=Sun
        const start = (first + 6) % 7; // 周一为列首
        const days = new Date(y, m + 1, 0).getDate();
        const wk = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
        const pad = (n) => String(n).padStart(2, "0");
        const today = new Date();
        const tkey = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
        let cells = "";
        for (let i = 0; i < start; i++)
          cells += '<span class="dc empty"></span>';
        for (let d = 1; d <= days; d++) {
          const key = `${y}-${pad(m + 1)}-${pad(d)}`;
          const isToday = key === tkey;
          const can = avail.includes(key);
          cells += `<span class="dc${can ? " on" : ""}${isToday ? " today" : ""}" ${can ? `data-d="${key}"` : ""}>${isToday ? "今天" : d}</span>`;
        }
        pop.innerHTML = `<div class="dp-head">${y}-${pad(m + 1)} <span class="dp-next" id="dp-next">›</span></div>
          <div class="dp-wk">${wk.map((w) => `<span>${w}</span>`).join("")}</div>
          <div class="dp-grid">${cells}</div>`;
        pop.querySelector("#dp-next").onclick = () => {
          this.month++;
          if (this.month > 11) {
            this.month = 0;
            this.year++;
          }
          render();
        };
        pop.querySelectorAll(".dc.on").forEach(
          (c) =>
            (c.onclick = () => {
              hidden.value = c.dataset.d;
              trigger.textContent = c.dataset.d;
              pop.hidden = true;
            }),
        );
      };
      trigger.onclick = () => {
        pop.hidden = !pop.hidden;
        if (!pop.hidden) render();
      };
      document.addEventListener("click", (e) => {
        if (!pop.hidden && !pop.contains(e.target) && e.target !== trigger)
          pop.hidden = true;
      });
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("date-trigger") && window.EtripsDatePicker)
      window.EtripsDatePicker.init();
  });
  document.addEventListener("DOMContentLoaded", rebuild);
  window.addEventListener("langchange", rebuild);
})();
