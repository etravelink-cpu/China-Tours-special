// Etrips 国安易游 — Detail page (4 tabs + PDF export)
(function(){
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
      const city = t.startCity ? `${I[lang]['detail.tag.from']||'出发城市'} ${t.startCity}` : '';
      document.getElementById('detail-head').innerHTML = `
        ${EtripsHeroSlider.render(t.img, lang==='zh'?t.nameZh:t.nameEn)}
        <div class="rp-detail-hero-in">
          <h1>${lang==='zh'?t.nameZh:t.nameEn}</h1>
          ${city?`<div class="detail-city">${city}</div>`:''}
          <div class="detail-tags">${tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div>
          <div class="detail-price">${price} <span style="font-size:13px;color:#cdd8e3">${I[lang]['detail.single']}: ${price}</span></div>
        </div>`;
      EtripsHeroSlider.init(document.querySelector('#detail-head .hero-slider'));
      // hero 不再使用背景图叠字; 改为左img右信息栏(结构在detail-head内)
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
    const ds = t.departureDates||[];
    const rule = t.depRule||null;          // 规则型: [0..6] 星期几
    const vf = t.validFrom||null;          // 有效起 YYYY-MM-DD
    const vt = t.validTo||null;            // 有效期止 YYYY-MM-DD
    const hasRule = Array.isArray(rule) && rule.length>0;
    const hasDates = Array.isArray(ds) && ds.length>0;
    if(!hasRule && !hasDates){ box.style.display='none'; return; }
    box.style.display='';
    const WEEKDAY_CN=['一','二','三','四','五','六','日'];
    // 规则文案
    let ruleTxt='';
    if(hasRule){
      ruleTxt='每周 '+rule.slice().sort((a,b)=>a-b).map(i=>WEEKDAY_CN[i]).join('、')+' 出发';
    }
    let validTxt='';
    if(vf||vt){ validTxt='有效期：'+(vf||'即日起')+' 至 '+(vt||'无限期'); }
    // 合并出发日集合: 规则型 + 指定日期型
    const depSet=new Set();
    if(hasDates){ ds.forEach(d=>depSet.add(d.date)); }
    // 构建未来12个月日历
    const today=new Date(); today.setHours(0,0,0,0);
    const ymList=[];
    let cy=today.getFullYear(), cm=today.getMonth();
    for(let n=0;n<12;n++){
      const y=cy, m=cm;
      // 有效期截断
      if(vt){ const [ty,tm]=vt.split('-').map(Number); if(y>ty||(y===ty&&m+1>tm)) break; }
      ymList.push([y,m]);
      if(m===11){cy=y+1;cm=0;}else{cm=m+1;}
    }
    function inRule(y,m,d){
      if(!hasRule) return false;
      const dt=new Date(y,m,d);
      const jsW=dt.getDay();              // 0=周日..6=周六 (JS)
      const backIdx=(jsW+6)%7;            // 转成后台索引: 0=周一..6=周日
      return rule.includes(backIdx);
    }
    function inRange(y,m,d){
      const dt=new Date(y,m,d);
      if(vf){ const [fy,fm,fd]=vf.split('-').map(Number); const f=new Date(fy,fm-1,fd); if(dt<f) return false; }
      if(vt){ const [ty,tm,td]=vt.split('-').map(Number); const t2=new Date(ty,tm-1,td); if(dt>t2) return false; }
      return true;
    }
    let monthsHtml='';
    ymList.forEach(([y,m])=>{
      const days=new Date(y,m+1,0).getDate();
      const lead=(new Date(y,m,1).getDay()+6)%7; // 转周一基准: 0=周一..6=周日(与表头WEEKDAY_CN一致)
      let cells='';
      for(let i=0;i<lead;i++) cells+='<td class="cal-empty"></td>';
      for(let d=1;d<=days;d++){
        const dt=new Date(y,m,d);
        const isDep = (hasRule && inRule(y,m,d) && inRange(y,m,d)) || depSet.has(y+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0'));
        let cls = isDep ? 'cal-dep' : 'cal-off';
        if(dt<today) cls+=' cal-past';
        cells+='<td class="'+cls+'">'+d+'</td>';
        if(dt.getDay()===6) cells+='</tr><tr>';
      }
      while(cells.split('</tr>').length % 1 !==0 && (cells.match(/<td/g)||[]).length %7!==0){
        cells+='<td class="cal-empty"></td>';
        if((cells.match(/<td/g)||[]).length%7===0){cells+='</tr><tr>';}
      }
      // 补齐最后一行到7格
      let cnt=(cells.match(/<td/g)||[]).length;
      while(cnt%7!==0){ cells+='<td class="cal-empty"></td>'; cnt++; }
      monthsHtml+='<div class="cal-month" data-ym="'+y+'-'+String(m+1).padStart(2,'0')+'"><table class="cal-t"><tr>'+WEEKDAY_CN.map(w=>'<th>'+w+'</th>').join('')+'</tr><tr>'+cells+'</tr></table></div>';
    });
    const note = t.surchargeNote ? '<p class="surcharge">⚠ '+t.surchargeNote+'</p>' : '';
    const head='<div class="cal-head"><button type="button" class="cal-prev">‹</button><span class="cal-cur"></span><button type="button" class="cal-next">›</button></div>';
    box.innerHTML = '<h3 style="color:var(--navy);margin:0 0 10px">出发日期 / 出团日历</h3>' + calHTML(t, {full:true});
    // 翻月由 calendarHTML 内联 onclick 处理
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
    // 按换行分段, 每段蓝色高亮(左边框)
    const paras = txt.split(/\n+/).map(s=>s.trim()).filter(Boolean)
      .map(p=>`<p class="intro-para">${p.replace(/</g,'&lt;')}</p>`).join('');
    box.innerHTML = `<h3 style="color:var(--navy);margin:0 0 10px">产品介绍</h3>${paras}`;
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
  
  // 日历翻月 (按钮内联调用): dir=-1/1
  window.EtripsDetail._navCal=function(btn, dir){
    const wrap=btn.closest('.cal-head').parentElement.querySelector('.cal-wrap');
    if(!wrap) return;
    const months=[...wrap.querySelectorAll('.cal-month')];
    const cur=btn.closest('.cal-head').querySelector('.cal-cur');
    let idx=parseInt(wrap.getAttribute('data-idx')||'0',10);
    idx=Math.max(0,Math.min(months.length-1,idx+dir));
    wrap.setAttribute('data-idx',idx);
    months.forEach((m,k)=>m.style.display=k===idx?'':'none');
    if(cur&&months[idx]) cur.textContent=months[idx].getAttribute('data-ym').replace('-','年')+'月';
  };

window.EtripsDetail = {
    bindCalendarNav,
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
