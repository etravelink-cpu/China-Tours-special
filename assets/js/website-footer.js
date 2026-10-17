window.ETRIPS_FOOTER_CONFIG={"sequence": 8, "headings": {"contact": "联系方式", "contact_en": "Contact", "qr": "客服二维码", "qr_en": "Customer Service QR Codes", "office": "悉尼办公室 Sydney Office", "office_en": "Sydney Office", "address": "2 HENLEY ROAD, HOMEBUSH WEST, NSW, 2140, AU", "address_en": "2 HENLEY ROAD, HOMEBUSH WEST, NSW, 2140, AU", "map_url": "https://www.google.com/maps/search/?api=1&query=2+HENLEY+ROAD+HOMEBUSH+WEST+NSW+2140+AU", "copyright": "© 2026 Etrips 国安易游。保留所有权利。", "copyright_en": "© 2026 Etrips Global Easy Travel. All rights reserved.", "legal_title": "政策与条款", "legal_title_en": "Policies & legal information", "company_title": "公司信息", "company_title_en": "Company", "external_notice": "", "external_notice_en": ""}, "company_visible": false, "layout": "compact_policies_v1", "nav": [{"id": "au", "href": "list.html?d=australia", "label": "澳洲", "label_en": "Australia"}, {"id": "nz", "href": "list.html?d=nz", "label": "新西兰", "label_en": "New Zealand"}, {"id": "cn", "href": "list.html?d=china", "label": "中国", "label_en": "China"}, {"id": "asia", "href": "list.html?d=asia", "label": "亚洲", "label_en": "Asia"}, {"id": "eu", "href": "list.html?d=europe", "label": "欧洲", "label_en": "Europe"}, {"id": "us", "href": "list.html?d=america", "label": "美洲", "label_en": "Americas"}, {"id": "middleeastafrica", "href": "list.html?d=middleeastafrica", "label": "中东／非洲", "label_en": "Middle East / Africa"}, {"id": "special", "href": "list.html?d=special", "label": "特别订制", "label_en": "Special Custom"}, {"id": "custom", "href": "custom.html", "label": "私人订制", "label_en": "Private Custom"}, {"id": "about", "href": "about.html", "label": "关于我们", "label_en": "About Us"}, {"id": "contact", "href": "contact.html", "label": "联系我们", "label_en": "Contact Us"}, {"id": "faq", "href": "faq.html", "label": "常见问题", "label_en": "FAQ"}], "channels": [{"id": "phone1", "href": "tel:+61297646862", "label": "+61 2 9764 6862", "label_en": "+61 2 9764 6862"}, {"id": "phone2", "href": "tel:+61297642911", "label": "+61 2 9764 2911", "label_en": "+61 2 9764 2911"}, {"id": "email", "href": "mailto:info@etravelink.com.au", "label": "info@etravelink.com.au", "label_en": "info@etravelink.com.au"}], "wechat": [{"id": "xiaoyi", "qr": "assets/img/qr/wechat-xiaoyi.png", "kind": "STAFF", "label": "小易", "account": "E_travelink", "label_en": "Advisor Xiaoyi"}, {"id": "xiaoyou", "qr": "assets/img/qr/wechat-xiaoyou.png", "kind": "STAFF", "label": "小游", "account": "E-travelink", "label_en": "Advisor Xiaoyou"}, {"id": "official", "qr": "assets/img/qr/wechat-official.png", "kind": "OFFICIAL", "label": "公众号", "account": "etrips_au", "label_en": "Official Account"}], "legal": [{"id": "privacy", "href": "legal.html#privacy", "label": "隐私与资料说明", "label_en": "Privacy & personal information"}, {"id": "terms", "href": "legal.html#booking", "label": "预订与退改说明", "label_en": "Booking, changes & cancellations"}, {"id": "disclaimer", "href": "legal.html#website", "label": "网站使用说明", "label_en": "Website information & use"}], "company": [{"id": "company-about", "href": "about.html", "label": "关于我们", "label_en": "About Us"}, {"id": "company-contact", "href": "contact.html", "label": "联系我们", "label_en": "Contact Us"}]};
/* Configurable content slots only: keep original footer shell, icons and site navigation. */
(function(){
 'use strict';
 const c=window.ETRIPS_FOOTER_CONFIG;
 const base=/\/tours\//.test(location.pathname)?'../':'';
 const url=s=>/^(?:https?:|mailto:|tel:|#)/.test(s)?s:base+s;
 const text=(o,en)=>en?(o.label_en||o.label):o.label;
 const node=(tag,cls,value)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(value!=null)n.textContent=value;return n;};
 const anchor=(o,en)=>{const a=node('a','',text(o,en));a.href=url(o.href);if(/^https?:/.test(o.href)){a.target='_blank';a.rel='noopener noreferrer';}return a;};
 function apply(){
  const footer=document.getElementById('site-footer');if(!footer||!footer.querySelector('.footer-card'))return;
  const en=(window.Etrips?.getLang()||'zh')==='en',h=c.headings;
  const value=k=>en?(h[k+'_en']||h[k]):h[k];
  const nav=footer.querySelector('.footer-topnav');nav.replaceChildren();
  c.nav.forEach((o,i)=>{if(i)nav.append(node('span','','|'));nav.append(anchor(o,en));});
  const cols=footer.querySelectorAll('.footer-grid>div');
  const heading=cols[0].querySelector('h4');heading.removeAttribute('data-i18n');heading.textContent=value('contact');
  cols[0].querySelector('.muted').textContent=value('office');
  const channels=cols[0].querySelector('.footer-channels');channels.replaceChildren(...c.channels.map(o=>anchor(o,en)));
  const store=cols[0].querySelector('.footer-store');store.replaceChildren(anchor({label:h.address,label_en:h.address_en,href:h.map_url},en));
  cols[1].querySelector('h4').textContent=value('qr');
  const grid=cols[1].querySelector('.cc-qr-grid');
  const icon=grid.querySelector('.cc-qr-ico')?.cloneNode(true);
  grid.replaceChildren();
  c.wechat.filter(o=>o.qr).forEach(o=>{const card=node('div','cc-qr');if(icon)card.append(icon.cloneNode(true));const img=node('img');img.loading='lazy';img.src=base+o.qr;img.alt=text(o,en)+' 微信二维码';card.append(img,node('div','cc-qr-cap',text(o,en)));grid.append(card);});
  const compliance=footer.querySelector('.footer-compliance');
  const copyright=footer.querySelector('.footer-bottom')||node('div','footer-bottom');
  compliance.replaceChildren();
  const groups=node('div','footer-policy-groups');
  const addGroup=(title,items)=>{
   const section=node('nav','footer-policy-group');section.setAttribute('aria-label',title);
   section.append(node('h4','footer-policy-title',title));
   const links=node('div','footer-policy-links');links.append(...items.map(o=>anchor(o,en)));
   section.append(links);groups.append(section);
  };
  // Hidden company content stays in saved config; no hidden customer links are inserted.
  if(c.company_visible===true && c.company?.length){
   groups.classList.add('has-company');addGroup(value('company_title')||(en?'Company':'公司信息'),c.company);
  }
  addGroup(value('legal_title')||(en?'Policies & legal information':'政策与条款'),c.legal);
  compliance.append(groups);
  const notice=value('external_notice');
  if(notice)compliance.append(node('p','footer-external-note',notice));
  copyright.textContent=value('copyright');
  compliance.append(copyright);
  const body=document.querySelector('#wx-pop .wx-body');
  if(body){body.replaceChildren();c.wechat.filter(o=>o.kind==='STAFF').forEach(o=>{const card=node('div','wx-card'),meta=node('div','wx-meta');meta.append(node('span','wx-tag',text(o,en)),node('b','',o.account));card.append(meta);if(o.qr){const img=node('img','wx-qr');img.src=base+o.qr;img.alt=text(o,en)+' QR';card.append(img);}body.append(card);});}
  const button=document.querySelector('.float-btn.wechat');
  if(button)button.hidden=!c.wechat.some(o=>o.kind==='STAFF');
 }
 window.addEventListener('langchange',apply);
 document.addEventListener('DOMContentLoaded',()=>queueMicrotask(apply));
 if(document.readyState!=='loading')queueMicrotask(apply);
})();
