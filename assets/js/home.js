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

    // 板块2 选择你的目的地（竖向长条卡）
    const dest = [
      {zh:'澳洲', en:'AUSTRALIA', img:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80', wide:true, href:'list.html?d=australia'},
      {zh:'新西兰', en:'NEW ZEALAND', img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', href:'list.html?d=nz'},
      {zh:'中国', en:'CHINA', img:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80', href:'list.html?d=china'},
      {zh:'欧洲', en:'EUROPE', img:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80', href:'list.html?d=europe'},
      {zh:'亚洲', en:'ASIA', img:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80', href:'list.html?d=asia'},
      {zh:'邮轮', en:'CRUISE', img:'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80', href:'list.html?d=cruise'},
      {zh:'私人订制', en:'PRIVATE TOUR', img:'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80', href:'custom.html'}
    ];
    document.getElementById('biz-grid').innerHTML = `<div class="dest-row">` + dest.map(d=>`
      <a class="dest-strip${d.wide?' wide':''}" href="${d.href}">
        <img src="${d.img}" alt="${d.zh}" loading="lazy">
        <div class="ov"></div>
        <div class="lbl">${d.zh}<span class="en">${d.en}</span></div>
      </a>`).join('') + `</div>`;

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

    // 板块8 联系方式 (5 channels, navy band) + minimal store info bar
    const hc = document.getElementById('home-contact');
    if(hc){
      hc.innerHTML = window.contactChannels(lang, {band:true}) + window.storeInfo(lang);
    }
  }

  document.addEventListener('DOMContentLoaded', rebuild);
  window.addEventListener('langchange', rebuild);
})();
