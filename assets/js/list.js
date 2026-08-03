// Etrips 国安易游 — List page (左 list 地区分类树 + 右 detail 内联产品详情)
// 树结构: 地区(destZh) -> 类目(category 短名=tags[0]) -> 子区域(subRegion) -> 产品
// 右 detail 形态与后台产品预览页一致(hero+标签+标题+meta+产品介绍+ tabs)
(function () {
  const T = window.TOURS,
    I = window.I18N;
  let lang = "zh";

  // 地区顺序(与导航/原型一致)
  const DEST_ORDER = ["中国", "澳洲", "亚洲", "欧洲", "美加", "海岛", "新西兰", "其他"];
  // 类目短名映射(后台 Product_Category 全名 -> 树显示短名)
  const CAT_SHORT = {
    "超值特惠团": "超值",
    "超值精品": "超值精品",
    "纯玩无购物团": "纯玩",
    "含机票特别订制团": "含机票",
    "签证·其他": "签证",
    "": "其他",
  };
  function catShort(c) {
    return CAT_SHORT[c] || c || "其他";
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
    );
  }

  // 构建树数据
  function buildTree() {
    const tree = {}; // destZh -> cat -> sub -> [tours]
    T.forEach((t) => {
      const d = t.destZh || t.dest || "其他";
      const c = catShort(t.category);
      const s = t.subRegion || "其他";
      tree[d] = tree[d] || {};
      tree[d][c] = tree[d][c] || {};
      tree[d][c][s] = tree[d][c][s] || [];
      tree[d][c][s].push(t);
    });
    return tree;
  }

  // 渲染左栏树
  function renderTree(tree, activeId) {
    const nav = document.getElementById("list-tree");
    const dests = DEST_ORDER.filter((d) => tree[d]).concat(
      Object.keys(tree).filter((d) => !DEST_ORDER.includes(d)),
    );
    let html = "";
    dests.forEach((d) => {
      const cats = tree[d];
      let catHtml = "";
      Object.keys(cats).forEach((c) => {
        const subs = cats[c];
        let subHtml = "";
        Object.keys(subs).forEach((s) => {
          const items = subs[s];
          let itemHtml = items
            .map(
              (t) =>
                `<div class="rp-route${t.id === activeId ? " active" : ""}" data-tour="${esc(t.id)}" tabindex="0" role="button">${esc(lang === "zh" ? t.nameZh : t.nameEn)}</div>`,
            )
            .join("");
          subHtml += `<div class="rp-group"><div class="rp-group-title" tabindex="0" role="button">${esc(s)}<span class="rp-arrow">▶</span></div><div class="rp-group-body">${itemHtml}</div></div>`;
        });
        catHtml += `<div class="rp-group rp-cat"><div class="rp-group-title" tabindex="0" role="button">${esc(c)}<span class="rp-arrow">▶</span></div><div class="rp-group-body">${subHtml}</div></div>`;
      });
      html += `<div class="rp-group rp-dest"><div class="rp-group-title" tabindex="0" role="button">${esc(d)}<span class="rp-arrow">▶</span></div><div class="rp-group-body">${catHtml}</div></div>`;
    });
    nav.innerHTML = html;
    // 默认展开第一个地区 + 其第一个类目
    const firstDest = nav.querySelector(".rp-dest");
    if (firstDest) {
      firstDest.classList.add("open");
      const ar = firstDest.querySelector(":scope > .rp-group-title .rp-arrow");
      if (ar) ar.textContent = "▼";
      const firstCat = firstDest.querySelector(".rp-cat");
      if (firstCat) {
        firstCat.classList.add("open");
        const ar2 = firstCat.querySelector(":scope > .rp-group-title .rp-arrow");
        if (ar2) ar2.textContent = "▼";
      }
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
    // 价格表首行
    let priceHtml = '<p class="muted">无出发班期</p>';
    if (rows.length) {
      const p = rows[0];
      const cell = (v) => (v === "" || v == null ? "—" : "A$" + v);
      priceHtml =
        '<table class="pt rp-pricetable"><thead><tr><th>城市</th><th>成人</th><th>儿童占床</th><th>儿童不占床</th><th>婴儿</th><th>单房差</th><th>综合服务费</th><th>小费预付</th><th>额外接送机</th></tr></thead><tbody>' +
        '<tr><td>' + esc(p.city || "") + "</td><td>" + cell(p.adult) + "</td><td>" + cell(p.childbed) + "</td><td>" + cell(p.childnobed) + "</td><td>" + cell(p.infant) + "</td><td>" + cell(p.single) + "</td><td>" + cell(p.service) + "</td><td>" + cell(p.tip) + "</td><td>" + cell(p.transfer) + "</td></tr>" +
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
    // 行程
    const itin = (t.itinerary || [])
      .map(
        (d) =>
          "<div class='rp-timeline'><div class='rp-time'>" + esc(d.d) + " " + esc(lang === "zh" ? d.titleZh : d.titleEn) + "</div><div>" + esc(lang === "zh" ? d.descZh : d.descEn).replace(/\n/g, "<br>") + "</div></div>",
      )
      .join("");
    const itinHtml = itin
      ? "<div class='rp-sec'><h4>行程安排</h4>" + itin + "</div>"
      : "";
    // 费用说明
    const inc = (t.includes || []).filter(Boolean);
    const costHtml = inc.length
      ? "<div class='rp-sec'><h4>费用说明</h4><ul class='includes'>" + inc.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul></div>"
      : "";
    // 参团须知
    const notice = (t.participationNotice || "").trim();
    const noticeHtml = notice
      ? "<div class='rp-sec'><h4>参团须知</h4><p class='muted' style='white-space:pre-wrap;line-height:1.85'>" + esc(notice) + "</p></div>"
      : "";
    // 彩页
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

    // tab 切换
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
    // 默认选中: ?d= 对应地区第一个产品, 否则中国第一个产品
    let activeId = null;
    const destList = Object.keys(tree);
    const targetDest = q && tree[q] ? q : (tree["中国"] ? "中国" : destList[0]);
    if (targetDest && tree[targetDest]) {
      const cats = Object.keys(tree[targetDest]);
      outer: for (const c of cats) {
        for (const s of Object.keys(tree[targetDest][c])) {
          if (tree[targetDest][c][s].length) {
            activeId = tree[targetDest][c][s][0].id;
            break outer;
          }
        }
      }
    }
    renderTree(tree, activeId);
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
