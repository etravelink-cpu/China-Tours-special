// Etrips 国安易游 — Home page rendering (sections 2-6 + form + hero dots)

window.EtripsForm = {
  submit(e){
    e.preventDefault();
    const f = e.target;
    const lang = window.Etrips.getLang();
    document.getElementById('form-msg').textContent =
      lang==='zh' ? '✅ 已收到您的咨询，顾问将尽快与您联系！' : '✅ We received your request, an advisor will contact you soon!';
    f.reset();
    return false;
  }
};

(function(){
  const T = window.TOURS, R = window.REVIEWS, TIP = window.TIPS, I = window.I18N;
  let lang = 'zh';

  function rebuild(){
    lang = window.Etrips.getLang();

    // 板块2 四大业务
    const biz = [
      {k:'home.biz.au', h:'澳洲境内旅行', en:'Australia Tours', img:'https://picsum.photos/seed/etrips-biz1/600/400', d:'australia'},
      {k:'home.biz.nz', h:'新西兰南北岛', en:'New Zealand', img:'https://picsum.photos/seed/etrips-biz2/600/400', d:'nz'},
      {k:'home.biz.cn', h:'中国全境长线', en:'China Long Tours', img:'https://picsum.photos/seed/etrips-biz3/600/400', d:'china'},
      {k:'home.biz.eu', h:'欧洲漫游', en:'Europe Roaming', img:'https://picsum.photos/seed/etrips-biz5/600/400', d:'europe'},
      {k:'home.biz.cruise', h:'邮轮专栏', en:'Cruise Collection', img:'https://picsum.photos/seed/etrips-biz6/600/400', d:'cruise'},
      {k:'home.biz.asia', h:'亚洲+大洋洲岛国', en:'Asia & Oceania', img:'https://picsum.photos/seed/etrips-biz4/600/400', d:'asia'}
    ];
    document.getElementById('biz-grid').innerHTML = biz.map(b=>`
      <a class="card" href="list.html?d=${b.d}">
        <img class="thumb" src="${b.img}" alt="">
        <div class="body"><h3>${lang==='zh'?b.h:b.en}</h3>
        <p class="muted">${lang==='zh'?'覆盖全线产品':'Full product line'}</p></div>
      </a>`).join('');

    // 板块3 爆款6卡
    document.getElementById('hot-grid').innerHTML = T.slice(0,6).map(t=>tourCard(t,lang)).join('');

    // 板块4 优势
    const adv = ['home.adv1','home.adv2','home.adv3','home.adv4'];
    const icons = ['✓','🗣','🌿','🎁'];
    document.getElementById('adv-grid').innerHTML = adv.map((a,i)=>`
      <div class="adv-item"><div class="adv-icon">${icons[i]}</div>
      <h4>${I[lang][a]}</h4></div>`).join('');

    // 板块5 评价
    document.getElementById('review-grid').innerHTML = R.map(r=>`
      <div class="review"><div class="stars">★★★★★</div>
      <p>${lang==='zh'?r.textZh:r.textEn}</p>
      <div class="who">— ${lang==='zh'?r.nameZh:r.nameEn}</div></div>`).join('');

    // 板块8 联系方式 (5 channels, navy band)
    const hc = document.getElementById('home-contact');
    if(hc) hc.innerHTML = window.contactChannels(lang, {band:true});
  }

  document.addEventListener('DOMContentLoaded', rebuild);
  window.addEventListener('langchange', rebuild);
})();
