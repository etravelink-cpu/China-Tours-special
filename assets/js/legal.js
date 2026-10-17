(function(){
 'use strict';
 function anchor(){
  const id=decodeURIComponent(location.hash.slice(1));
  const target=document.getElementById(id);
  if(target && target.matches('details.faq-item')){target.open=true;target.scrollIntoView({block:'start'});}
  document.querySelectorAll('.legal-toc a').forEach(a=>{
   if(a.hash===(location.hash||'#privacy'))a.setAttribute('aria-current','location');
   else a.removeAttribute('aria-current');
  });
 }
 function title(){
  const heading=document.querySelector('.legal-page h1');
  if(heading)document.title=heading.textContent+' · Etrips';
 }
 document.addEventListener('DOMContentLoaded',()=>{anchor();title();});
 window.addEventListener('hashchange',anchor);
 window.addEventListener('langchange',title);
})();
