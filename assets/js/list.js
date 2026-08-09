// Etrips 国安易游 — List page (左 list 地区分类树 + 右 detail 内联产品详情)
// 树结构: 仅当前目的地(类目 -> 子区域 -> 产品); 目的地切换走导航/页脚「目的地」入口
// 右 detail 形态与后台产品预览页一致(hero+标签+标题+meta+产品介绍+ tabs)
(function () {

function calHTML(t, opts){
    opts = opts || {};
    const full = opts.full !== false;
    const ds = t.departureDates || [];
    const rule = t.depRule || null;
    const vf = t.validFrom || null;
    const vt = t.validTo || null;
    // 按区域锁死日历类型: 澳洲/新西兰=规则型(隐藏固定日期), 其余所有区域(中国/亚洲/欧洲/美加/海岛/其他...)=固定日期型(隐藏规则型). 每产品只显一套, 另一套彻底隐藏
    const _dest = (t.dest || '').toLowerCase();
    const _ruleDest = (_dest === 'australia' || _dest === 'nz');  // 澳新=规则型
    let hasRule = Array.isArray(rule) && rule.length > 0;
    let hasDates = Array.isArray(ds) && ds.length > 0;
    if (_ruleDest) hasDates = false;   // 澳新: 强制规则型, 隐藏固定日期
    else hasRule = false;              // 其他区域: 强制固定日期型, 隐藏规则型
    if(!hasRule && !hasDates) return '';
    const WEEKDAY_CN = ['一','二','三','四','五','六','日'];
    let ruleTxt = '';
    if(hasRule){ ruleTxt = '每周 ' + rule.slice().sort((a,b)=>a-b).map(i=>WEEKDAY_CN[i]).join('、') + ' 出发'; }
    let validTxt = '';
    if(vf || vt){ validTxt = '有效期：' + (vf || '即日起') + ' 至 ' + (vt || '无限期'); }
    const depSet = new Set();
    if(hasDates){ ds.forEach(d=>depSet.add(d.date)); }
    const today = new Date(); today.setHours(0,0,0,0);
    const ymList = [];
    let cy = today.getFullYear(), cm = today.getMonth();
    const limit = full ? 12 : 1;
    for(let n=0;n<limit;n++){
      const y=cy, m=cm;
      if(vt){ const [ty,tm]=vt.split('-').map(Number); if(y>ty || (y===ty && m+1>tm)) break; }
      ymList.push([y,m]);
      if(m===11){cy=y+1;cm=0;}else{cm=m+1;}
    }
    function inRule(y,m,d){
      if(!hasRule) return false;
      const dt = new Date(y,m,d);
      const backIdx = (dt.getDay()+6)%7;
      return rule.includes(backIdx);
    }
    function inRange(y,m,d){
      const dt = new Date(y,m,d);
      if(vf){ const [fy,fm,fd]=vf.split('-').map(Number); if(dt < new Date(fy,fm-1,fd)) return false; }
      if(vt){ const [ty,tm,td]=vt.split('-').map(Number); if(dt > new Date(ty,tm-1,td)) return false; }
      return true;
    }
    let monthsHtml = '';
    ymList.forEach(([y,m])=>{
      const days = new Date(y,m+1,0).getDate();
      const lead = (new Date(y,m,1).getDay()+6)%7;
      let cells = '';
      for(let i=0;i<lead;i++) cells += '<td class="cal-empty"></td>';
      for(let d=1;d<=days;d++){
        const dt = new Date(y,m,d);
        const isDep = (hasRule && inRule(y,m,d) && inRange(y,m,d)) || depSet.has(y+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0'));
        let cls = isDep ? 'cal-dep' : 'cal-off';
        if(dt < today) cls += ' cal-past';
        cells += '<td class="'+cls+'">'+d+'</td>';
        if(dt.getDay()===6) cells += '</tr><tr>';
      }
      let cnt = (cells.match(/<td/g)||[]).length;
      while(cnt%7!==0){ cells += '<td class="cal-empty"></td>'; cnt++; }
      const mIdx = ymList.findIndex(p=>p[0]===y && p[1]===m);
      monthsHtml += '<div class="cal-month" data-ym="'+y+'-'+String(m+1).padStart(2,'0')+'"'+(mIdx>0?' style="display:none"':'')+'><table class="cal-t"><tr>'+WEEKDAY_CN.map(w=>'<th>'+w+'</th>').join('')+'</tr><tr>'+cells+'</tr></table></div>';
    });
    const note = t.surchargeNote ? '<p class="surcharge">⚠ '+t.surchargeNote+'</p>' : '';
    const head = full ? '<div class="cal-head"><button type="button" class="cal-prev" onclick="calNav(this,-1)">‹</button><span class="cal-cur"></span><button type="button" class="cal-next" onclick="calNav(this,1)">›</button></div>' : '';
    const ruleBox = (ruleTxt||validTxt) ? '<div class="rule-box"><p style="margin:0"><b>出发规则：</b>'+(ruleTxt||'按指定日期')+(validTxt?'　<b>'+validTxt+'</b>':'')+'</p></div>' : '';
    const hint = full ? '<p style="font-size:12px;color:#8a97a6;margin:8px 0 0">（橙色为可出发日期，库存随时变化，下单前请二次确认）</p>' : '';
    return ruleBox + head + '<div class="cal-wrap">'+monthsHtml+'</div>' + note + hint;
  }

  // 翻月 (按钮内联调用)
  function calNav(btn, dir){
    const wrap = btn.closest('.cal-head').parentElement.querySelector('.cal-wrap');
    if(!wrap) return;
    const months = [...wrap.querySelectorAll('.cal-month')];
    const cur = btn.closest('.cal-head').querySelector('.cal-cur');
    let idx = parseInt(wrap.getAttribute('data-idx')||'0',10);
    idx = Math.max(0, Math.min(months.length-1, idx+dir));
    wrap.setAttribute('data-idx', idx);
    months.forEach((m,k)=>m.style.display = k===idx?'':'none');
    if(cur && months[idx]) cur.textContent = months[idx].getAttribute('data-ym').replace('-','年')+'月';
  }

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

  // 中国区子类固定顺序(用户指定: 江南上海-北京西安-长江三峡-九寨张家界云南贵州-广东广西福建海南-山东山西东北河南-新疆甘肃西藏青海丝绸之路)
  const CN_ORDER = ["江南上海", "北京西安", "长江三峡", "九寨张家界云南贵州", "广东广西福建海南", "山东山西东北河南", "新疆甘肃西藏青海丝绸之路"];
  // 欧洲区子类固定顺序(隐藏类目层, 任你行前置, 去"欧洲其他")
  const EU_ORDER = ["任你行", "多国连线", "红线线路", "黄线线路", "绿线线路", "蓝线线路", "棕线线路", "紫线线路", "橙线线路", "金线线路", "粉线线路"];
  // 亚洲区子类固定顺序(保留类目层; 巴厘岛/斐济归亚洲其他, 不单列)
  const ASIA_ORDER = ["日本", "韩国", "台湾", "越南", "泰国", "柬埔寨", "新加坡马来西亚", "亚洲其他"];
  // 美加区子类固定顺序(隐藏类目层; 机票套餐/其他置后, 方便扩展)
  const NA_ORDER = ["东岸", "西岸", "东西岸", "南美", "美加其他", "机票套餐"];
  // 澳洲区子类固定顺序(隐藏类目层, 单门票置后)
  const AU_ORDER = ["悉尼及周边", "墨尔本及周边", "黄金海岸&布里斯班", "凯恩斯（大堡礁）", "圣灵群岛", "西澳/珀斯", "乌鲁鲁/北领地", "塔斯马尼亚", "阿德莱德/南澳", "澳洲跨地区联游", "澳洲其他", "单门票·单项体验"];

  // 构建树数据(仅按当前目的地)
  function buildTree() {
    const tree = {}; // destZh -> cat -> sub -> [tours]
    const putSub = (d, c, s, t) => {
      tree[d] = tree[d] || {};
      tree[d][c] = tree[d][c] || {};
      tree[d][c][s] = tree[d][c][s] || [];
      tree[d][c][s].push(t);
    };
    const put = (d, t) => {
      const c = catShort(t.category);
      const s = t.subRegion || "其他";
      putSub(d, c, s, t);
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
    // 特别订制: 不显示类目层; 非签证产品平铺, 签证单独留可折叠下拉
    const putSP = (t) => {
      const isVisa = (t.category === "签证·其他") || /签证/.test(t.nameZh || "");
      tree["特别订制"] = tree["特别订制"] || {};
      tree["特别订制"]["__sp__"] = tree["特别订制"]["__sp__"] || {};
      if (isVisa) {
        tree["特别订制"]["__sp__"]["签证"] = tree["特别订制"]["__sp__"]["签证"] || [];
        tree["特别订制"]["__sp__"]["签证"].push(t);
      } else {
        tree["特别订制"]["__sp__"]["__flat__"] = tree["特别订制"]["__sp__"]["__flat__"] || [];
        tree["特别订制"]["__sp__"]["__flat__"].push(t);
      }
    };
    // 中国: 保留类目层(超值特价/纯玩), 子类按 CN_ORDER 固定顺序; 支持跨类目重复(subRegions 数组)
    const putCN = (t) => {
      const c = catShort(t.category);
      const regs = (t.subRegions && t.subRegions.length) ? t.subRegions : (t.subRegion ? [t.subRegion] : []);
      regs.forEach((s) => putSub("中国", c, s, t));
    };
    // 欧洲: 不显示类目层, 直接按 EU_ORDER 固定顺序平铺; 丢弃"欧洲其他"
    const putEU = (t) => {
      const s = t.subRegion || "其他";
      if (s === "欧洲其他") return;
      tree["欧洲"] = tree["欧洲"] || {};
      tree["欧洲"]["__eu__"] = tree["欧洲"]["__eu__"] || {};
      tree["欧洲"]["__eu__"][s] = tree["欧洲"]["__eu__"][s] || [];
      tree["欧洲"]["__eu__"][s].push(t);
    };
    // 亚洲: 保留类目层; 巴厘岛/斐济/海岛其他 不单列, 归并亚洲其他
    const putAsia = (t) => {
      let s = t.subRegion || "亚洲其他";
      if (["巴厘岛", "斐济", "海岛其他"].includes(s)) s = "亚洲其他";
      putSub("亚洲", catShort(t.category), s, t);
    };
    // 美加: 隐藏类目层; 按地理子类平铺, 机票套餐类归"机票套餐"置后, 方便扩展
    const putNA = (t) => {
      const isFlight = (t.category === "含机票特别订制团") || /机票/.test(t.category || "");
      const s = isFlight ? "机票套餐" : (t.subRegion || "美加其他");
      tree["美加"] = tree["美加"] || {};
      tree["美加"]["__na__"] = tree["美加"]["__na__"] || {};
      tree["美加"]["__na__"][s] = tree["美加"]["__na__"][s] || [];
      tree["美加"]["__na__"][s].push(t);
    };
    // 澳洲: 隐藏类目层; 按 AU_ORDER 固定顺序平铺子类
    const putAU = (t) => {
      const s = t.subRegion || "澳洲其他";
      tree["澳洲"] = tree["澳洲"] || {};
      tree["澳洲"]["__au__"] = tree["澳洲"]["__au__"] || {};
      tree["澳洲"]["__au__"][s] = tree["澳洲"]["__au__"][s] || [];
      tree["澳洲"]["__au__"][s].push(t);
      // 季节性产品独立导航: 滑雪(可扩展到其他季节/地区). 与城市子类并列, 按 seasonTag 归组
      if (t.seasonTag === "滑雪") {
        tree["澳洲"]["__au__"]["滑雪"] = tree["澳洲"]["__au__"]["滑雪"] || [];
        tree["澳洲"]["__au__"]["滑雪"].push(t);
      }
    };
    T.forEach((t) => {
      const d = t.destZh || t.dest || "其他";
      if (t.dest === "nz") { putNZ(t); return; }
      if (t.dest === "china") { putCN(t); return; }
      if (t.dest === "europe") { putEU(t); return; }
      if (t.dest === "america") { putNA(t); return; }
      if (t.dest === "australia") { putAU(t); return; }
      // 海岛合并进亚洲(用户要求); 邮轮/特别订制从"其他"桶拆分
      if (t.dest === "island") { putAsia(t); return; }
      if (t.dest === "other") {
        const nm = t.nameZh || "";
        if (/邮轮|游轮/.test(nm)) { put("邮轮", t); return; }
        putSP(t); return;
      }
      if (t.dest === "asia") { putAsia(t); return; }
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
    const isFlat = (cats["__nz__"] && Object.keys(cats).length === 1) ||
                   (cats["__sp__"] && Object.keys(cats).length === 1) ||
                   (cats["__eu__"] && Object.keys(cats).length === 1) ||
                   (cats["__na__"] && Object.keys(cats).length === 1) ||
                   (cats["__au__"] && Object.keys(cats).length === 1); // 新西兰/特别订制/欧洲/美加/澳洲 无类目层
    let catHtml = "";
    // 子类排序(中国按 CN_ORDER, 欧洲按 EU_ORDER, 亚洲按 ASIA_ORDER, 美加按 NA_ORDER, 澳洲按 AU_ORDER, 其余按插入序)
    const subOrder = (dest) =>
      dest === "中国" ? CN_ORDER : dest === "欧洲" ? EU_ORDER : dest === "亚洲" ? ASIA_ORDER : dest === "美加" ? NA_ORDER : dest === "澳洲" ? AU_ORDER : null;
    // 类目层排序(超值特价 -> 纯玩无购物 -> 机票套餐 -> 其他)
    const CAT_ORDER = ["超值特价", "纯玩无购物", "机票套餐", "签证", "其他"];
    const catKeys = CAT_ORDER.filter((k) => k in cats).concat(Object.keys(cats).filter((k) => !CAT_ORDER.includes(k)));
    catKeys.forEach((c) => {
      const subs = cats[c];
      // 机票套餐类目: 直接全部平铺(不按地区子类分组)
      if (c === "机票套餐") {
        const allItems = [];
        Object.values(subs).forEach((arr) => arr.forEach((t) => allItems.push(t)));
        allItems.sort((a, b) => (a.days || 0) - (b.days || 0));
        const flatHtml = allItems
          .map(
            (t) =>
              `<div class="rp-route${t.id === activeId ? " active" : ""}" data-tour="${esc(t.id)}" tabindex="0" role="button">${esc(lang === "zh" ? t.nameZh : t.nameEn)}</div>`,
          )
          .join("");
        catHtml += `<div class="rp-group rp-cat"><div class="rp-group-title" tabindex="0" role="button">${esc(c)}<span class="rp-arrow">▶</span></div><div class="rp-group-body">${flatHtml}</div></div>`;
        return;
      }
      const order = subOrder(activeDest);
      const subKeys = order
        ? order.filter((k) => k in subs).concat(Object.keys(subs).filter((k) => !order.includes(k)))
        : Object.keys(subs);
      let subHtml = "";
      subKeys.forEach((s) => {
        if (s === "滑雪") return; // 滑雪已内嵌悉尼及周边下, 不在澳洲顶层渲染
        const items = (subs[s] || []).slice().sort((a, b) => (a.days || 0) - (b.days || 0)).filter((t) => t.seasonTag !== "滑雪"); // 天数升序; 滑雪项剔除(仅悉尼下嵌套组显示)
        const itemHtml = items
          .map(
            (t) =>
              `<div class="rp-route${t.id === activeId ? " active" : ""}" data-tour="${esc(t.id)}" tabindex="0" role="button">${esc(lang === "zh" ? t.nameZh : t.nameEn)}</div>`,
          )
          .join("");
        if (s === "__flat__") {
          // 特别订制: 非签证产品直接平铺(无分组标题)
          subHtml += itemHtml;
        } else if (s === "签证") {
          // 签证: 可折叠下拉(默认收起)
          subHtml += `<div class="rp-group"><div class="rp-group-title" tabindex="0" role="button">签证<span class="rp-arrow">▶</span></div><div class="rp-group-body">${itemHtml}</div></div>`;
        } else {
          let _body = itemHtml;
          // 悉尼及周边: 滑雪产品内嵌为孙组(季节性集合, 可扩展到其他季节/地区), 主列表剔除滑雪项避免重复
          if (s === "悉尼及周边" && subs["滑雪"] && subs["滑雪"].length) {
            const _nonSki = items.filter((t) => t.seasonTag !== "滑雪");
            const _skiItems = subs["滑雪"].slice().sort((a, b) => (a.days || 0) - (b.days || 0))
              .map((t) => `<div class="rp-route${t.id === activeId ? " active" : ""}" data-tour="${esc(t.id)}" tabindex="0" role="button">${esc(lang === "zh" ? t.nameZh : t.nameEn)}</div>`).join("");
            _body = _nonSki.map((t) => `<div class="rp-route${t.id === activeId ? " active" : ""}" data-tour="${esc(t.id)}" tabindex="0" role="button">${esc(lang === "zh" ? t.nameZh : t.nameEn)}</div>`).join("")
              + `<div class="rp-group rp-sub"><div class="rp-group-title" tabindex="0" role="button">🎿 滑雪<span class="rp-arrow">▶</span></div><div class="rp-group-body">${_skiItems}</div></div>`;
          }
          subHtml += `<div class="rp-group"><div class="rp-group-title" tabindex="0" role="button">${esc(s)}<span class="rp-arrow">▶</span></div><div class="rp-group-body">${_body}</div></div>`;
        }
      });
      // 新西兰/特别订制/欧洲: 不渲染类目层(隐藏 __nz__/__sp__/__eu__ 占位), 直接显示子类
      if (isFlat) {
        catHtml += subHtml;
      } else {
        catHtml += `<div class="rp-group rp-cat"><div class="rp-group-title" tabindex="0" role="button">${esc(c)}<span class="rp-arrow">▶</span></div><div class="rp-group-body">${subHtml}</div></div>`;
      }
    });
    nav.innerHTML = catHtml;
    // 默认展开第一个类目/子类(特别订制不强制展开签证下拉)
    const firstOpen = (isFlat && activeDest !== "特别订制") ? nav.querySelector(".rp-group") : nav.querySelector(".rp-cat");
    if (firstOpen) {
      firstOpen.classList.add("open");
      const ar = firstOpen.querySelector(":scope > .rp-group-title .rp-arrow");
      if (ar) ar.textContent = "▼";
    }
    // 绑定展开/收起 (互斥手风琴: 点击同层只展开一个, 自动收起其他)
    nav.querySelectorAll(".rp-group-title").forEach((ti) => {
      ti.addEventListener("click", () => {
        const g = ti.closest(".rp-group");
        const parent = g.parentElement;
        const willOpen = !g.classList.contains("open");
        parent.querySelectorAll(":scope > .rp-group").forEach((sib) => {
          if (sib !== g) {
            sib.classList.remove("open");
            const sa = sib.querySelector(":scope > .rp-group-title .rp-arrow");
            if (sa) sa.textContent = "▶";
          }
        });
        const open = g.classList.toggle("open", willOpen);
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
        // 将选中产品写入 URL(?id=), 刷新/分享后自动恢复选中状态(根治: 每次刷新回到默认空白)
        const params = new URLSearchParams(location.search);
        params.set("id", id);
        history.replaceState(null, "", "?" + params.toString());
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
  function renderDetail(id, opts) {
    opts = opts || {};
    const showFullDetail = opts.showFullDetail !== false; // detail 页传 false 隐藏
    const t = T.find((x) => x.id === id);
    const box = document.getElementById("list-detail");
    if (!t) {
      box.innerHTML = '<div class="rp-coming-box">未找到该产品</div>';
      return;
    }
    const heroImg = (Array.isArray(t.img) ? t.img[0] : (t.img || "assets/img/destinations/other.jpg"));
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
    // 出发日历(有班期即显示): 可视化月历, 出发日高亮
    let depHtml = "";
    // 有具体班期(departureDates)或规则型出发(depRule)都显示日历, 与 detail/卡片共用 calendar.js
    const _hasDep = (t.departureDates && t.departureDates.length) || (t.depRule && t.depRule.length);
    if (_hasDep) {
      const _cal = calHTML(t, {full:true});
      depHtml =
        "<div class='rp-sec'><h4>出发日历</h4>" +
        "<p style='font-size:12px;color:#8a97a6;margin:0 0 8px'>（出发日已高亮，库存随时变化，下单前请二次确认）</p>" +
        _cal + "</div>";
    }
    const itin = (t.itinerary || [])
      .map((d) => {
        const zh = lang === "zh";
        const theme = zh ? d.titleZh : d.titleEn;
        const overview = (zh ? d.descZh : d.descEn) || "";
        const spots = (zh ? d.spotsZh : d.spotsEn) || [];
        const foot = [];
        const tr = zh ? d.transportZh : d.transportEn;
        const me = zh ? d.mealZh : d.mealEn;
        const ho = zh ? d.hotelZh : d.hotelEn;
        if (tr) foot.push("<span>🚗 " + esc(tr) + "</span>");
        if (me) foot.push("<span>🍽 " + esc(me) + "</span>");
        if (ho) foot.push("<span>🏨 " + esc(ho) + "</span>");
        return (
          "<div class='itin-day'>" +
            "<div class='d-side'><div class='d-no'>" + esc(d.d) + "</div>" +
            (theme ? "<div class='d-theme'>" + esc(theme) + "</div>" : "") +
            "</div>" +
            "<div class='d-body'>" +
              (overview ? "<div class='d-overview'>" + esc(overview).replace(/\n/g, "<br>") + "</div>" : "") +
              (spots.length ? "<div class='d-spots'>" + spots.map(esc).join("　") + "</div>" : "") +
              (foot.length ? "<div class='d-foot'>" + foot.join("") + "</div>" : "") +
            "</div>" +
          "</div>"
        );
      })
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
      "<div class='rp-detail-hero'>" + EtripsHeroSlider.render(t.img, lang === 'zh' ? t.nameZh : t.nameEn) + "<div class='rp-detail-hero-in'><h3>" + esc(lang === "zh" ? t.nameZh : t.nameEn) + "</h3>" +
      "<div class='rp-meta'><span>" + (t.startCity ? esc(t.startCity) : esc(t.destZh || t.dest)) + "</span><span>" + days + " 天</span>" + (tags.length ? "<span>" + tags.map(esc).join("</span><span>") + "</span>" : "") + "</div>" +
      "<div class='detail-price' style='margin:10px 0 4px'>" + esc(t.price || '') + "</div>" +
      (function(){
        const _single = (rows.length && rows[0].single) ? rows[0].single : '';
        return _single ? "<div class='detail-single' style='font-size:13px;color:#8a97a6'>单人房差: A$" + esc(_single) + "</div>" : "";
      })() +
      "<div class='rp-detail-actions' style='margin-top:12px;display:flex;gap:10px;flex-wrap:wrap'>" +
      "<a href='contact.html' class='btn btn-primary'>在线咨询</a>" +
      "<a href='booking.html' class='btn btn-gold'>预约占位</a>" +
      "</div>" +
      "</div></div>" +
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
      (showFullDetail ? "<div style='padding:18px 24px'><a href='detail.html?id=" + encodeURIComponent(t.id) + "' target='_blank' rel='noopener' class='btn btn-primary' style='width:100%;text-align:center'>查看完整详情页</a></div>" : "") +
      "";
      EtripsHeroSlider.init(box.querySelector('.rp-detail-hero .hero-slider'));

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
      // detail.html 复用本文件的 renderDetail, 但不应执行 list 主渲染(无 #list-tree 容器)
      if (!document.getElementById("list-tree")) return;
      lang = window.Etrips.getLang();
    const q = new URLSearchParams(location.search).get("d");
    const urlId = new URLSearchParams(location.search).get("id");
    const tree = buildTree();
    // ?d= 支持英文键(australia)或中文(澳洲); 默认中国
    const DEST_KEY_ZH = { australia: "澳洲", nz: "新西兰", china: "中国", asia: "亚洲", europe: "欧洲", america: "美加", special: "特别订制", cruise: "邮轮", other: "其他", island: "亚洲" };
    let activeDest = (q && tree[q]) ? q : (DEST_KEY_ZH[q] && tree[DEST_KEY_ZH[q]]) ? DEST_KEY_ZH[q] : (tree["中国"] ? "中国" : Object.keys(tree)[0]);
    // 邮轮板块: 走 buildTree 的"邮轮"桶(island/other 拆分逻辑已保留); 空桶时显示暂无在售, 不回退中国
    if (q === 'cruise') activeDest = '邮轮';
    // 标题直接显示目的地(不走 i18n 以免被覆盖)
    const titleEl = document.getElementById("hot-title");
    if (titleEl) titleEl.textContent = activeDest + "线路";
    // 默认选中: 当前目的地第一个产品
    let activeId = (urlId && T.find(x => x.id === urlId)) ? urlId : null;
    if (tree[activeDest] && !activeId) {
      const cats = Object.keys(tree[activeDest]);
      // 默认打开: 第一个类目 -> 第一个子类(按各目的地子类排序,如AU_ORDER悉尼优先) -> 按天数升序第一个产品(与页面渲染一致; 下架产品不在TOURS自动跳过)
      const catOrder = (activeDest === '澳洲') ? AU_ORDER.filter(c => cats.includes(c)) : cats;
      outer: for (const c of catOrder) {
        const subs = tree[activeDest][c];
        for (const s of Object.keys(subs)) {
          if (subs[s] && subs[s].length) {
            const first = subs[s].slice().sort((a, b) => { const da=(a.departureDates||[]).length, db=(b.departureDates||[]).length; if(da!==db) return db-da; const ia=a.img?1:0, ib=b.img?1:0; if(ia!==ib) return ib-ia; return (a.days||0)-(b.days||0); })[0];
            activeId = first.id;
            break outer;
          }
        }
      }
    }
    renderTree(tree, activeId, activeDest);
    if (activeId) renderDetail(activeId);
    window.Etrips.applyLang({ emit: false });
  }

  document.addEventListener("DOMContentLoaded", render);
  window.addEventListener("langchange", render);

  // 暴露内联详情渲染器, 供 detail.html 复用(单一模板真相: list/detail 一致)
  window.EtripsRenderDetail = renderDetail;
  window.goBack = function () {
    location.href = "index.html";
  };
})();
