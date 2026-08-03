// Etrips 国安易游 — Detail page (4 tabs + PDF export)
(function(){
  const T = window.TOURS, I = window.I18N;
  let lang = 'zh', cur = null;

  function find(){
    const id = new URLSearchParams(location.search).get('id');
    return T.find(t=>t.id===id) || null;
  }

  function renderHead(t){
    const tags = lang==='zh'
      ? [`${I[lang]['detail.tag.days']} ${t.days}`, I[lang]['detail.tag.group'], I[lang]['detail.tag.leader'], I[lang]['detail.tag.allinc'], ...t.tags]
      : [`${I[lang]['detail.tag.days']} ${t.days}`, I[lang]['detail.tag.group'], I[lang]['detail.tag.leader'], I[lang]['detail.tag.allinc'], ...t.tagsEn];
    const price = lang==='zh'?t.price:t.priceEn;
    document.getElementById('detail-head').innerHTML = `
      <h1>${lang==='zh'?t.nameZh:t.nameEn}</h1>
      <div class="muted" style="color:#cdd8e3">${I[lang]['detail.tourid']}: <b>${t.id}</b></div>
      <div class="detail-tags">${tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div>
      <div class="detail-price">${price} <span style="font-size:13px;color:#cdd8e3">${I[lang]['detail.single']}: ${price}</span></div>
      <p style="margin-top:10px">
        <button class="btn btn-gold" onclick="EtripsDetail.downloadPDF()">${I[lang]['btn.download']}</button>
      </p>`;
  }

  function renderItinerary(t){
    document.getElementById('panel-itinerary').innerHTML = t.itinerary.map(d=>{
      const zh = lang==='zh';
      const theme = zh ? d.titleZh : d.titleEn;
      const overview = (zh ? d.descZh : d.descEn) || '';
      const spots = (zh ? d.spotsZh : d.spotsEn) || [];
      const foot = [];
      const tr = zh ? d.transportZh : d.transportEn;
      const me = zh ? d.mealZh : d.mealEn;
      const ho = zh ? d.hotelZh : d.hotelEn;
      if (tr) foot.push("<span>🚗 "+tr+"</span>");
      if (me) foot.push("<span>🍽 "+me+"</span>");
      if (ho) foot.push("<span>🏨 "+ho+"</span>");
      return "<div class='itin-day'>"+
        "<div class='d-side'><div class='d-no'>"+d.d+"</div>"+
        (theme?"<div class='d-theme'>"+theme+"</div>":"")+
        "</div>"+
        "<div class='d-body'>"+
          (overview?"<div class='d-overview'>"+overview.replace(/\n/g,'<br>')+"</div>":"")+
          (spots.length?"<div class='d-spots'>"+spots.join('　')+"</div>":"")+
          (foot.length?"<div class='d-foot'>"+foot.join('')+"</div>":"")+
        "</div>"+
      "</div>";
    }).join('');
  }

  function renderHotel(t){
    document.getElementById('panel-hotel').innerHTML = `
      <div class="grid grid-2">
      ${t.hotels.map(h=>`
        <div class="card"><div class="body">
          <h3>${lang==='zh'?h.nameZh:h.nameEn}</h3>
          <p class="muted">${lang==='zh'?h.levelZh:h.levelEn} · ${lang==='zh'?h.noteZh:h.noteEn}</p>
        </div></div>`).join('')}
      </div>`;
  }

  function renderExtra(t){
    const zh = (t.participationNotice||'').trim(), en = (t.participationNotice||'').trim();
    const txt = lang==='zh' ? zh : (en||zh);
    document.getElementById('panel-extra').innerHTML = `
      <h3 style="color:var(--navy)">参团须知</h3>
      <div class="muted" style="white-space:pre-wrap;word-break:break-word;line-height:1.7">${(txt||'暂无参团须知').replace(/</g,'&lt;')}</div>`;
  }

  function renderPrice(t){
    const box = document.getElementById('detail-price');
    if(!box) return;
    const rows = t.priceTable||[];
    if(!rows.length){ box.style.display='none'; return; }
    box.style.display='';
    const head = `<tr><th>城市</th><th>成人</th><th>儿童占床</th><th>儿童不占床</th><th>婴儿</th><th>单房差</th><th>综合服务费</th><th>小费预付</th><th>额外接送机</th></tr>`;
    const body = rows.map(p=>`<tr><td>${p.city||''}</td><td>A$${p.adult}</td><td>A$${p.childbed}</td><td>A$${p.childnobed}</td><td>A$${p.infant}</td><td>A$${p.single}</td><td>A$${p.service}</td><td>A$${p.tip}</td><td>A$${p.transfer}</td></tr>`).join('');
    box.innerHTML = `<h3 style="color:var(--navy);margin:0 0 10px">价格明细</h3><table class="pt">${head}${body}</table><p style="margin-top:8px;font-size:12px;color:#8a97a6">备注：部分行程设有淡旺季价格，请以产品彩页所列适用日期及价格为准。</p>`;
  }

  function renderDeparture(t){
    const box = document.getElementById('detail-dep');
    if(!box) return;
    if(!(t.dest==='australia'||t.dest==='nz')){ box.style.display='none'; return; }
    const ds = t.departureDates||[];
    if(!ds.length){ box.style.display='none'; return; }
    box.style.display='';
    const groups = {};
    ds.forEach(d=>{ const ym=d.date.slice(0,7); (groups[ym]=groups[ym]||[]).push(d); });
    const parts = Object.keys(groups).sort().map(ym=>{
      const m = parseInt(ym.split('-')[1],10);
      const items = groups[ym].map(d=>{
        const day = d.date.slice(8,10)+'日';
        if(d.status==='soldout') return day+'（售罄）';
        if(d.status==='limited') return day+'（余位紧张）';
        if(d.status==='open') return day+'（报名中）';
        return day;
      }).join('、');
      return `<div style="margin:4px 0"><b>${m}月：</b>${items}</div>`;
    }).join('');
    box.innerHTML = `<h3 style="color:var(--navy);margin:0 0 10px">出发日期</h3><div class="rp-dep-list"><p style="font-size:12px;color:#8a97a6;margin:0 0 8px">（库存随时变化，下单前请二次确认）</p>${parts}</div>`;
  }

  function renderCancel(t){
    document.getElementById('panel-cancel').innerHTML = `
      <h3 style="color:var(--navy)">${I[lang]['detail.cancel.title']}</h3>
      <ul class="notes">
        <li>出发前 30 天以上取消：扣除定金 20%。</li>
        <li>出发前 15-29 天取消：扣除总费用 50%。</li>
        <li>出发前 7-14 天取消：扣除总费用 70%。</li>
        <li>出发前 7 天内取消：扣除总费用 100%。</li>
        <li>以上为通用模板，具体以合同为准。</li>
      </ul>`;
  }

  function renderBrochure(t){
    const panel = document.getElementById('panel-brochure');
    if(!panel) return;
    const list = t.brochures||[];
    if(!list.length){
      panel.innerHTML = `<p class="muted">暂无彩页下载</p>`;
      return;
    }
    panel.innerHTML = `<ul class="includes">${list.map(b=>`<li><a href="${b.url}" target="_blank" rel="noopener">${b.file}</a></li>`).join('')}</ul>`;
  }

  function hasContent(arr){ return Array.isArray(arr) && arr.length>0; }

  function renderIntro(t){
    const box = document.getElementById('detail-intro');
    if(!box) return;
    const zh = (t.introZh||'').trim(), en = (t.introEn||'').trim();
    const txt = lang==='zh' ? zh : (en||zh);
    if(!txt){ box.style.display='none'; return; }  // 没内容就隐藏
    box.style.display='';
    box.innerHTML = `<h3 style="color:var(--navy);margin:0 0 10px">产品介绍</h3><p class="muted" style="white-space:pre-wrap;word-break:break-word;line-height:1.7">${txt.replace(/</g,'&lt;')}</p>`;
  }

  function renderAll(){
    lang = window.Etrips.getLang();
    cur = find();
    if(!cur){
      document.getElementById('detail-head').innerHTML = `<h1>产品不存在</h1><p class="muted">未找到线路编号 "${new URLSearchParams(location.search).get('id')}" 对应的产品，可能已下架或链接有误。</p>`;
      ['detail-intro','detail-price','detail-dep'].forEach(id=>{const b=document.getElementById(id); if(b) b.style.display='none';});
      document.getElementById('tabs').style.display='none';
      ['panel-itinerary','panel-hotel','panel-extra','panel-brochure','panel-cancel'].forEach(id=>{const b=document.getElementById(id); if(b) b.innerHTML='';});
      window.Etrips.applyLang();
      return;
    }
    renderHead(cur);
    renderIntro(cur);
    renderPrice(cur);
    renderDeparture(cur);
    // 空区块隐藏: 无内容则不显示对应 tab 按钮 + 不渲染空面板
    const showItin = hasContent(cur.itinerary);
    const showHotel = hasContent(cur.hotels);
    const showExtra = (cur.participationNotice||'').trim().length>0;
    const showBro = hasContent(cur.brochures);
    document.querySelectorAll('#tabs button').forEach(b=>{
      const t=b.dataset.tab;
      if(t==='itinerary' && !showItin) b.style.display='none';
      else if(t==='hotel' && !showHotel) b.style.display='none';
      else if(t==='extra' && !showExtra) b.style.display='none';
      else if(t==='brochure' && !showBro) b.style.display='none';
      else b.style.display='';
    });
    if(showItin) renderItinerary(cur);
    if(showHotel) renderHotel(cur);
    if(showExtra) renderExtra(cur);
    if(showBro) renderBrochure(cur);
    renderCancel(cur);  // 退改政策固定模板, 始终显示
    // 若当前激活 tab 被隐藏, 激活第一个可见 tab
    const active = document.querySelector('#tabs button.active');
    if(active && active.style.display==='none'){
      const firstVisible = document.querySelector("#tabs button:not([style*='display: none'])");
      if(firstVisible){ firstVisible.classList.add('active'); document.getElementById('panel-'+firstVisible.dataset.tab).classList.add('active'); }
    }
    window.Etrips.applyLang();
    document.querySelectorAll('a.btn-primary[href="contact.html"],a.btn-gold[href="booking.html"]').forEach(a=>{
      a.href = (a.classList.contains('btn-primary') ? 'contact.html' : 'booking.html') + '?tour=' + encodeURIComponent(cur.id);
    });
  }

  // Tabs
  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('#tabs button').forEach(b=>{
      b.addEventListener('click',()=>{
        document.querySelectorAll('#tabs button').forEach(x=>x.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        document.getElementById('panel-'+b.dataset.tab).classList.add('active');
      });
    });
    renderAll();
  });
  window.addEventListener('langchange', renderAll);

  // PDF export (print-based, no deps)
  window.EtripsDetail = {
    downloadPDF(){
      const t = cur; if(!t) return;
      const lines = [];
      lines.push(`Etrips 国安易游 / Etrips Global Easy Travel`);
      lines.push(`${lang==='zh'?t.nameZh:t.nameEn}  (${t.id})`);
      lines.push(`Price: ${lang==='zh'?t.price:t.priceEn}  |  Days: ${t.days}`);
      lines.push(''); lines.push(lang==='zh'?'【每日行程】':'[Itinerary]');
      t.itinerary.forEach(d=>{
        lines.push(`${d.d} ${lang==='zh'?d.titleZh:d.titleEn}`);
        lines.push(`  ${lang==='zh'?d.descZh:d.descEn}`);
        lines.push(`  景点: ${lang==='zh'?d.spotsZh.join('、'):d.spotsEn.join(', ')}`);
        lines.push(`  ${lang==='zh'?d.transportZh:d.transportEn} | ${lang==='zh'?d.mealZh:d.mealEn} | ${lang==='zh'?d.hotelZh:d.hotelEn}`);
      });
      lines.push(''); lines.push(lang==='zh'?'【费用包含】':'[Included]');
      (lang==='zh'?t.includes:t.includesEn).forEach(x=>lines.push('  - '+x));
      lines.push(''); lines.push(lang==='zh'?'【费用不含】':'[Excluded]');
      (lang==='zh'?t.excludes:t.excludesEn).forEach(x=>lines.push('  - '+x));
      const w = window.open('', '_blank');
      w.document.write(`<pre style="font-family:monospace;padding:24px;white-space:pre-wrap">${lines.join('\n')}</pre>
        <script>window.onload=()=>window.print()<\/script>`);
      w.document.close();
    }
  };
})();
