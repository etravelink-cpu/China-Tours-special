// Etrips 国安易游 — Detail page
// 统一策略: 复用 list.js 的 window.EtripsRenderDetail (单一模板真相),
// detail 与 list 内联详情渲染完全一致; 本文件仅叠加 detail 专属增强:
//   - 日历翻月(calNav, 已在 list 模板内联调用)
//   - PDF 导出(按钮)
//   - 酒店/退改政策 作为追加块(不新增 tab, 保持与 list 的 5 tab 一致)
(function () {
  const T = window.TOURS;
  function find() {
    const id = new URLSearchParams(location.search).get('id');
    return T.find(t => t.id === id) || null;
  }

  function render() {
    const t = find();
    const body = document.getElementById('detail-body');
    if (!t) {
      body.innerHTML = '<div class="rp-coming-box">未找到该产品</div>';
      return;
    }
    // 提供 list 模板所需的容器, 复用其渲染器
    body.innerHTML = '<div id="list-detail"></div>';
    if (typeof window.EtripsRenderDetail === 'function') {
      window.EtripsRenderDetail(t.id);
    } else {
      body.innerHTML = '<div class="rp-coming-box">详情加载中…</div>';
      return;
    }
    const detail = body.querySelector('#list-detail');
    if (detail) {
      // 把渲染结果提到 body 直接子级(去掉多余包裹)
      while (detail.firstChild) body.insertBefore(detail.firstChild, detail);
      body.removeChild(detail);
    }
    // 追加 detail 专属块: 酒店 / 退改政策(保持 list 的 tab 体系不变)
    appendExtraBlocks(t, body);
    // 显示 PDF 按钮
    const pdfBtn = document.getElementById('pdf-btn');
    if (pdfBtn) pdfBtn.style.display = '';
  }

  // 酒店 + 退改政策: 作为内容追加到"费用说明"/"参团须知"对应面板之后
  function appendExtraBlocks(t, body) {
    const lang = (window.Etrips && window.Etrips.getLang) ? window.Etrips.getLang() : 'zh';
    // 酒店
    if (t.hotels && t.hotels.length) {
      const costPanel = body.querySelector(".rp-tab-panel[data-tab='cost']");
      if (costPanel) {
        const h = document.createElement('div');
        h.className = 'rp-sec';
        h.innerHTML = '<h4>参考酒店</h4><div class="grid grid-2">' + t.hotels.map(x =>
          `<div class="card"><div class="body"><h3>${esc(lang === 'zh' ? x.nameZh : x.nameEn)}</h3>` +
          `<p class="muted">${esc(lang === 'zh' ? x.levelZh : x.levelEn)} · ${esc(lang === 'zh' ? x.noteZh : x.noteEn)}</p></div></div>`
        ).join('') + '</div>';
        costPanel.appendChild(h);
      }
    }
    // 退改政策(参团须知面板后追加)
    const noticeTxt = (t.cancellationPolicy || '').trim();
    if (noticeTxt) {
      const notesPanel = body.querySelector(".rp-tab-panel[data-tab='notes']");
      if (notesPanel) {
        const c = document.createElement('div');
        c.className = 'rp-sec';
        c.innerHTML = '<h4>退改政策</h4><p class="muted" style="white-space:pre-wrap;line-height:1.85">' + esc(noticeTxt) + '</p>';
        notesPanel.appendChild(c);
      }
    }
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  // PDF 导出: 打印当前详情
  window.EtripsDetailPDF = function () {
    window.print();
  };

  document.addEventListener("DOMContentLoaded", render);
  window.addEventListener("langchange", render);
})();
