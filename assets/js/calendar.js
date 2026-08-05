// Etrips 出团日历共用组件 (detail 页与产品卡共用, 保证视觉/逻辑一致)
// 不依赖 detail.js, 可独立加载于首页/列表页
(function(){
  // 生成出团日历 HTML
  // opts.full=true: 12个月+翻月(detail/卡片); false: 仅当月无翻月
  function calendarHTML(t, opts){
    opts = opts || {};
    const full = opts.full !== false;
    const ds = t.departureDates || [];
    const rule = t.depRule || null;
    const vf = t.validFrom || null;
    const vt = t.validTo || null;
    const hasRule = Array.isArray(rule) && rule.length > 0;
    const hasDates = Array.isArray(ds) && ds.length > 0;
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
      const lead = new Date(y,m,1).getDay();
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
    const head = full ? '<div class="cal-head"><button type="button" class="cal-prev" onclick="if(window.EtripsCalendar)window.EtripsCalendar._navCal(this,-1)">‹</button><span class="cal-cur"></span><button type="button" class="cal-next" onclick="if(window.EtripsCalendar)window.EtripsCalendar._navCal(this,1)">›</button></div>' : '';
    const ruleBox = (ruleTxt||validTxt) ? '<div class="rule-box"><p style="margin:0"><b>出发规则：</b>'+(ruleTxt||'按指定日期')+(validTxt?'　<b>'+validTxt+'</b>':'')+'</p></div>' : '';
    const hint = full ? '<p style="font-size:12px;color:#8a97a6;margin:8px 0 0">（橙色为可出发日期，库存随时变化，下单前请二次确认）</p>' : '';
    return ruleBox + head + '<div class="cal-wrap">'+monthsHtml+'</div>' + note + hint;
  }

  // 翻月 (按钮内联调用)
  function _navCal(btn, dir){
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

  window.EtripsCalendar = { calendarHTML, _navCal };
})();
