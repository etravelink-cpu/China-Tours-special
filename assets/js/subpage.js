// Etrips 国安易游 — Long-form subpage (reference style: etrips.com.au)
(function(){
  const T = window.TOURS, I = window.I18N;
  let lang = 'zh', cur = null;

  function find(){
    const id = new URLSearchParams(location.search).get('id');
    cur = T.find(t=>t.id===id) || T[0];
  }

  function hero(t){
    const name = lang==='zh'?t.nameZh:t.nameEn;
    return `<section class="sp-hero" style="background-image:linear-gradient(180deg,rgba(19,41,63,.55),rgba(19,41,63,.7)),url('${t.img}')">
      <div class="container">
        <a href="list.html?d=${t.dest}" class="sp-back">← ${I[lang]['btn.back']}</a>
        <h1>${name}</h1>
        <div class="sp-tags">${tagsHtml(t)}</div>
        <p class="sp-sub">${lang==='zh'?t.blurbZh:t.blurbEn}</p>
      </div>
    </section>`;
  }

  function tagsHtml(t){
    const tags = lang==='zh'?t.tags:t.tagsEn;
    return (tags||[]).map(x=>`<span class="tag">${x}</span>`).join('');
  }

  function intro(t){
    const txt = lang==='zh'?t.introZh:t.introEn;
    if(!txt) return '';
    return `<section class="section"><div class="container sp-intro">
      <h2 class="section-title">${I[lang]['sp.intro']}</h2>
      <p>${txt}</p></div></section>`;
  }

  function itinerary(t){
    const days = t.itinerary||[];
    if(!days.length) return '';
    return `<section class="section" style="background:var(--paper)"><div class="container">
      <h2 class="section-title">${I[lang]['sp.itinerary']}</h2>
      <div class="sp-days">
        ${days.map(d=>`
          <div class="sp-day">
            <div class="sp-day-head"><span class="sp-day-no">${d.d}</span>
              <h3>${lang==='zh'?d.titleZh:d.titleEn}</h3></div>
            <div class="sp-day-body">
              <p>${lang==='zh'?d.descZh:d.descEn}</p>
              <ul class="sp-spots">${(lang==='zh'?d.spotsZh:d.spotsEn).map(s=>`<li>${s}</li>`).join('')}</ul>
              <div class="sp-meta">
                <span><b style='color:var(--gold-deep);font-weight:600'>${I[lang]['label.transport']}</b> ${lang==='zh'?d.transportZh:d.transportEn}</span>
                <span><b style='color:var(--gold-deep);font-weight:600'>${I[lang]['label.meals']}</b> ${lang==='zh'?d.mealZh:d.mealEn}</span>
                <span><b style='color:var(--gold-deep);font-weight:600'>${I[lang]['label.hotel']}</b> ${lang==='zh'?d.hotelZh:d.hotelEn}</span>
              </div>
            </div>
          </div>`).join('')}
      </div></div></section>`;
  }

  function gallery(t){
    if(!t.gallery||!t.gallery.length) return '';
    return `<section class="section"><div class="container">
      <h2 class="section-title">${I[lang]['sp.gallery']}</h2>
      <div class="sp-gallery">${t.gallery.map(g=>`<img src="${g}" alt=""></div>`).join('')}</div>
    </div></section>`;
  }

  function priceTable(t){
    if(!t.priceTable||!t.priceTable.length) return '';
    const note = lang==='zh'?t.priceNoteZh:t.priceNoteEn;
    return `<section class="section" style="background:var(--paper)"><div class="container">
      <h2 class="section-title">${I[lang]['sp.price']}</h2>
      <table class="sp-table">
        <thead><tr><th>${I[lang]['sp.item']}</th><th>${I[lang]['sp.fee']}</th></tr></thead>
        <tbody>${t.priceTable.map(r=>`<tr><td>${lang==='zh'?r.itemZh:r.itemEn}</td><td>${lang==='zh'?r.priceZh:r.priceEn}</td></tr>`).join('')}</tbody>
      </table>
      ${note?`<p class="muted" style="margin-top:12px">${note}</p>`:''}
    </div></section>`;
  }

  function specs(t){
    if(!t.specs||!t.specs.length) return '';
    return `<section class="section"><div class="container">
      <h2 class="section-title">${I[lang]['sp.specs']}</h2>
      <div class="sp-specs">${t.specs.map(s=>`
        <div class="sp-spec"><div class="sp-spec-k">${lang==='zh'?s.kZh:s.kEn}</div>
        <div class="sp-spec-v">${lang==='zh'?s.vZh:s.vEn}</div></div>`).join('')}</div>
    </div></section>`;
  }

  function cta(t){
    return `<section class="section sp-cta">
      <div class="container" style="text-align:center">
        <h2>${lang==='zh'?'立即咨询，锁定席位':'Enquire now to secure your seat'}</h2>
        <div style="margin-top:16px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <a href="contact.html" class="btn btn-primary">${I[lang]['btn.consult']}</a>
        </div>
      </div></section>`;
  }

  function render(){
    lang = window.Etrips.getLang();
    find();
    if(!cur) return;
    document.title = `Etrips | ${lang==='zh'?cur.nameZh:cur.nameEn}`;
    document.getElementById('subpage').innerHTML =
      hero(cur)+intro(cur)+itinerary(cur)+gallery(cur)+priceTable(cur)+specs(cur)+cta(cur);
  }

  document.addEventListener('DOMContentLoaded', render);
  window.addEventListener('langchange', render);
})();
