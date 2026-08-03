// Etrips 国安易游 — List page (左 list 地区分类树 + 右 detail 内联产品详情)
// 树结构: 仅当前目的地(类目 -> 子区域 -> 产品); 目的地切换走导航/页脚「目的地」入口
// 右 detail 形态与后台产品预览页一致(hero+标签+标题+meta+产品介绍+ tabs)
(function () {
  const T = window.TOURS,
    I = window.I18N;
  let lang = "zh";

  // 类目短名映射(后台 Product_Category 全名 -> 树显示短名)
  // 前台统一 3 类: 超值特价 / 纯玩无购物 / 机票套餐
  const CAT_SHORT = {
    "超值特惠团": "超值特价",
    "超值精品": "超值特价",
    "纯玩无购物团": "纯玩无购物",
    "含机票特别订制团": "机票套餐",
    "签证·其他": "签证",
    "": "其他",
  };
  function catShort(c) {
    return CAT_SHORT[c] || c || "其他";
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]),
    );
  }

  // 构建树数据(仅按当前目的地)
  function buildTree() {
    const tree = {}; // destZh -> cat -> sub -> [tours]
    const put = (d, t) => {
      const c = catShort(t.category);
      const s = t.subRegion || "其他";
      tree[d] = tree[d] || {};
      tree[d][c] = tree[d][c] || {};
      tree[d][c][s] = tree[d][c][s] || [];
      tree[d][c][s].push(t);
    };
    // 新西兰: 不显示类目层, 直接按地理分组(北岛/南岛/南北岛连线), 丢弃"新西兰其他"
    const putNZ = (t) => {
      const sub = (t.subRegion || "").replace(/^新西兰/, ""); // 新西兰南岛 -> 南岛
      if (!sub || sub === "其他") return; // 不要"新西兰其他"
      const label = { "南岛": "南岛", "北岛": "北岛", "南北岛连线": "南北岛连线" }[sub] || sub;
      tree["新西兰"] = tree["新西兰"] || {};
      tree["新西兰"]["__nz__"] = tree["新西兰"]["__nz__"] || {};
      tree["新西兰"]["__nz__"][label] = tree["新西兰"]["__nz__"][label] || [];
      tree["新西兰"]["__nz__"][label].push(t);
    };
    T.forEach((t) => {
      const d = t.destZh || t.dest || "其他";
      if (t.dest === "nz") { putNZ(t); return; }
      // 海岛合并进亚洲(用户要求); 邮轮/特别订制从"其他"桶拆分
      if (t.dest === "island") { put("亚洲", t); return; }
      if (t.dest === "other") {
        const nm = t.nameZh || "";
        if (/邮轮|游轮/.test(nm)) { put("邮轮", t); return; }
        put("特别订制", t); return;
      }
      put(d, t);
    });
    return tree;
  }

  // 渲染左栏树(仅当前目的地: 类目 -> 子区域 -> 产品)
  function renderTree(tree, activeId, activeDest) {
    const nav = document.getElementById("list-tree");
    if (!tree[activeDest]) {
      nav.innerHTML = '<div class="rp-coming-box">该目的地暂无在售线路</div>';
      return;
    }
    const cats = tree[activeDest];
    const isNZ = cats["__nz__"] && Object.keys(cats).length === 1; // 新西兰无类目层
    let catHtml = "";
    Object.keys(cats).forEach((c) => {
      const subs = cats[c];
      let subHtml = "";
      Object.keys(subs).forEach((s) => {
        const items = subs[s];
        const itemHtml = items
          .map(
            (t) =>
              `<div class="rp-route${t.id === activeId ? " active" : ""}" data-tour="${esc(t.id)}" tabindex="0" role="button">${esc(lang === "zh" ? t.nameZh : t.nameEn)}</div>`,
          )
          .join("");
        subHtml += `<div class="rp-group"><div class="rp-group-title" tabindex="0" role="button">${esc(s)}<span class="rp-arrow">▶</span></div><div class="rp-group-body">${itemHtml}</div></div>`;
      });
      // 新西兰: 不渲染类目层(隐藏 __nz__ 占位), 直接显示地理子类
      if (isNZ) {
        catHtml += subHtml;
      } else {
        catHtml += `<div class="rp-group rp-cat"><div class="rp-group-title" tabindex="0" role="button">${esc(c)}<span class="rp-arrow">▶</span></div><div class="rp-group-body">${subHtml}</div></div>`;
      }
    });
    nav.innerHTML = catHtml;
    // 默认展开第一个类目/子类
    const firstOpen = isNZ ? nav.querySelector(".rp-group") : nav.querySelector(".rp-cat");
    if (firstOpen) {
      firstOpen.classList.add("open");
      const ar = firstOpen.querySelector(":scope > .rp-group-title .rp-arrow");
      if (ar) ar.textContent = "▼";
    }
    // 绑定展开/收起
    nav.querySelectorAll(".rp-group-title").forEach((ti) => {
      ti.addEventListener("click", () => {
        const g = ti.closest(".rp-group");
        const open = g.classList.toggle("open");
        const ar = ti.querySelector(".rp-arrow");
        if (ar) ar.textContent = open ? "▼" : "▶";
      });
      ti.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          ti.click();
        }
      });
    });
    // 绑定产品点击 -> 右侧内联渲染
    nav.querySelectorAll(".rp-route").forEach((r) => {
      r.addEventListener("click", () => {
        const id = r.dataset.tour;
        nav.querySelectorAll(".rp-route.active").forEach((x) => x.classList.remove("active"));
        r.classList.add("active");
        renderDetail(id);
        if (window.innerWidth <= 820) {
          document.getElementById("list-detail").scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      r.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          r.click();
        }
      });
    });
  }

  // 右 detail: 与后台预览页一致
  function renderDetail(id) {
    const t = T.find((x) => x.id === id);
    const box = document.getElementById("list-detail");
    if (!t) {
      box.innerHTML = '<div class="rp-coming-box">未找到该产品</div>';
      return;
    }
    const heroImg = t.img || "assets/img/destinations/other.jpg";
    const tags = (lang === "zh" ? t.tags : t.tagsEn).filter(Boolean);
    const price = lang === "zh" ? t.price : t.priceEn;
    const rows = t.priceTable || [];
    const days = t.days || 0;
    let priceHtml = '<p class="muted">无出发班期</p>';
    if (rows.length) {
      const p = rows[0];
      const cell = (v) => (v === "" || v == null ? "—" : "A$" + v);
      priceHtml =
        '<table class="pt rp-pricetable"><thead><tr><th>城市</th><th>成人</th><th>儿童占床</th><th>儿童不占床</th><th>婴儿</th><th>单房差</th><th>综合服务费</th><th>小费预付</th><th>额外接送机</th></tr></thead><tbody>' +
        "<tr><td>" + esc(p.city || "") + "</td><td>" + cell(p.adult) + "</td><td>" + cell(p.childbed) + "</td><td>" + cell(p.childnobed) + "</td><td>" + cell(p.infant) + "</td><td>" + cell(p.single) + "</td><td>" + cell(p.service) + "</td><td>" + cell(p.tip) + "</td><td>" + cell(p.transfer) + "</td></tr>" +
        "</tbody></table><p style='margin-top:8px;font-size:12px;color:#8a97a6'>备注：部分行程设有淡旺季价格，请以产品彩页所列适用日期及价格为准。</p>";
    }
    // 出发日历(仅澳新)
    let depHtml = "";
    if ((t.dest === "australia" || t.dest === "nz") && (t.departureDates || []).length) {
      const ds = t.departureDates;
      const groups = {};
      ds.forEach((d) => {
        const ym = d.date.slice(0, 7);
        (groups[ym] = groups[ym] || []).push(d);
      });
      const parts = Object.keys(groups).sort().map((ym) => {
        const m = parseInt(ym.split("-")[1], 10);
        const items = groups[ym]
          .map((d) => {
            const day = d.date.slice(8, 10) + "日";
            if (d.status === "soldout") return day + "（售罄）";
            if (d.status === "limited") return day + "（余位紧张）";
            if (d.status === "open") return day + "（报名中）";
            return day;
          })
          .join("、");
        return "<div style='margin:4px 0'><b>" + m + "月：</b>" + items + "</div>";
      }).join("");
      depHtml =
        "<div class='rp-sec'><h4>出发日历</h4><p style='font-size:12px;color:#8a97a6;margin:0 0 8px'>（库存随时变化，下单前请二次确认）</p>" + parts + "</div>";
    }
    const itin = (t.itinerary || [])
      .map(
        (d) =>
          "<div class='rp-timeline'><div class='rp-time'>" + esc(d.d) + " " + esc(lang === "zh" ? d.titleZh : d.titleEn) + "</div><div>" + esc(lang === "zh" ? d.descZh : d.descEn).replace(/\n/g, "<br>") + "</div></div>",
      )
      .join("");
    const itinHtml = itin
      ? "<div class='rp-sec'><h4>行程安排</h4>" + itin + "</div>"
      : "";
    const inc = (t.includes || []).filter(Boolean);
    const costHtml = inc.length
      ? "<div class='rp-sec'><h4>费用说明</h4><ul class='includes'>" + inc.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul></div>"
      : "";
    const notice = (t.participationNotice || "").trim();
    const noticeHtml = notice
      ? "<div class='rp-sec'><h4>参团须知</h4><p class='muted' style='white-space:pre-wrap;line-height:1.85'>" + esc(notice) + "</p></div>"
      : "";
    const bro = (t.brochures || []).filter(Boolean);
    const broHtml = bro.length
      ? "<div class='rp-sec'><h4>彩页下载</h4><ul class='includes'>" + bro.map((b) => "<li><a href='" + esc(b.url) + "' target='_blank' rel='noopener'>" + esc(b.file) + "</a></li>").join("") + "</ul></div>"
      : "";

    box.innerHTML =
      "<div class='rp-detail-hero' style=\"background-image:url('" + esc(heroImg) + "')\"><div class='rp-detail-hero-in'><h3>" + esc(lang === "zh" ? t.nameZh : t.nameEn) + "</h3>" +
      "<div class='rp-meta'><span>" + esc(t.destZh || t.dest) + "</span><span>" + days + " 天</span>" + (tags.length ? "<span>" + tags.map(esc).join("</span><span>") + "</span>" : "") + "</div></div></div>" +
      "<div class='rp-detail-cta'><a href='booking.html?tour=" + encodeURIComponent(t.id) + "' class='btn btn-gold'>预约占位</a><a href='contact.html?tour=" + encodeURIComponent(t.id) + "' class='btn btn-primary'>在线咨询</a></div>" +
      "<div class='rp-tabs'>" +
      "<div class='rp-tab active' data-tab='price'>日期和价格</div>" +
      "<div class='rp-tab' data-tab='itinerary'>行程安排</div>" +
      "<div class='rp-tab' data-tab='cost'>费用说明</div>" +
      "<div class='rp-tab' data-tab='notes'>参团须知</div>" +
      "<div class='rp-tab' data-tab='brochure'>彩页下载</div>" +
      "</div>" +
      "<div class='rp-tab-panel active' data-tab='price'><div class='rp-summary'><div><b>行程天数</b>" + days + " 天</div>" + (price && price !== "待确认" ? "<div><b>起价</b>" + esc(price) + "</div>" : "") + "</div>" + priceHtml + depHtml + "</div>" +
      "<div class='rp-tab-panel' data-tab='itinerary'>" + itinHtml + "</div>" +
      "<div class='rp-tab-panel' data-tab='cost'>" + costHtml + "</div>" +
      "<div class='rp-tab-panel' data-tab='notes'>" + noticeHtml + "</div>" +
      "<div class='rp-tab-panel' data-tab='brochure'>" + broHtml + "</div>" +
      "<div style='padding:18px 24px'><a href='detail.html?id=" + encodeURIComponent(t.id) + "' class='btn btn-primary' style='width:100%;text-align:center'>查看完整详情页</a></div>";

    box.querySelectorAll(".rp-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const tid = tab.dataset.tab;
        box.querySelectorAll(".rp-tab").forEach((x) => x.classList.toggle("active", x === tab));
        box.querySelectorAll(".rp-tab-panel").forEach((x) => x.classList.toggle("active", x.dataset.tab === tid));
      });
    });
    box.scrollTop = 0;
  }

  function render() {
    lang = window.Etrips.getLang();
    const q = new URLSearchParams(location.search).get("d");
    const tree = buildTree();
    // ?d= 支持英文键(australia)或中文(澳洲); 默认中国
    const DEST_KEY_ZH = { australia: "澳洲", nz: "新西兰", china: "中国", asia: "亚洲", europe: "欧洲", america: "美加", special: "特别订制", cruise: "邮轮", other: "其他", island: "亚洲" };
    const activeDest = (q && tree[q]) ? q : (DEST_KEY_ZH[q] && tree[DEST_KEY_ZH[q]]) ? DEST_KEY_ZH[q] : (tree["中国"] ? "中国" : Object.keys(tree)[0]);
    // 标题直接显示目的地(不走 i18n 以免被覆盖)
    const titleEl = document.getElementById("hot-title");
    if (titleEl) titleEl.textContent = activeDest + "线路";
    // 默认选中: 当前目的地第一个产品
    let activeId = null;
    if (tree[activeDest]) {
      const cats = Object.keys(tree[activeDest]);
      outer: for (const c of cats) {
        for (const s of Object.keys(tree[activeDest][c])) {
          if (tree[activeDest][c][s].length) {
            activeId = tree[activeDest][c][s][0].id;
            break outer;
          }
        }
      }
    }
    renderTree(tree, activeId, activeDest);
    if (activeId) renderDetail(activeId);
    window.Etrips.applyLang({ emit: false });
  }

  ["f-days", "f-month", "f-budget"].forEach((id) => {
    document.addEventListener("DOMContentLoaded", () => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("change", render);
    });
  });

  document.addEventListener("DOMContentLoaded", render);
  window.addEventListener("langchange", render);

  window.goBack = function () {
    location.href = "index.html";
  };
})();
