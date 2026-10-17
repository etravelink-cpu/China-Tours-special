/* Presentation only: counts reference existing product IDs, never product records. */
(function(){
 'use strict';
 let expanded=false,openGroups=null,scopeIndex=null;
 const mobile=()=>matchMedia('(max-width:820px)').matches;
 const say=(zh,en)=>window.Etrips.getLang()==='zh'?zh:en;
 const label=node=>{const copy=node.cloneNode(true);copy.querySelectorAll('.rp-arrow,.catalogue-count').forEach(n=>n.remove());return copy.textContent.trim();};
 const ids=node=>new Set([...node.querySelectorAll('[data-tour]')].map(n=>n.dataset.tour));
 function attach(activeDest,activeId){
  const nav=document.getElementById('list-tree'),layout=document.getElementById('rp-layout');
  if(!nav||!layout)return;
  let bar=document.getElementById('catalogue-summary');
  if(!bar){bar=document.createElement('div');bar.id='catalogue-summary';bar.className='catalogue-summary';layout.before(bar);}
  const market=window.EtripsMarkets.find(m=>m.zh===activeDest),dest=market?.[window.Etrips.getLang()]||activeDest;
  bar.replaceChildren();
  const text=document.createElement('div');text.className='catalogue-context';
  const path=document.createElement('div');path.className='catalogue-path';
  const count=document.createElement('div');count.className='catalogue-results';count.setAttribute('aria-live','polite');
  text.append(path,count);bar.append(text);
  const toggle=document.createElement('button');toggle.type='button';toggle.className='catalogue-toggle';toggle.setAttribute('aria-controls','list-tree');bar.append(toggle);
  const groups=[...nav.querySelectorAll('.rp-group')],all=ids(nav),empty=!all.size;
  layout.classList.toggle('catalogue-empty',empty);bar.classList.toggle('catalogue-empty',empty);
  if(openGroups){groups.forEach((g,i)=>g.classList.toggle('open',openGroups.includes(i)));}
  else{let g=[...nav.querySelectorAll('[data-tour]')].find(n=>n.dataset.tour===activeId)?.closest('.rp-group');while(g){g.classList.add('open');g=g.parentElement.closest('.rp-group');}}
  function syncGroups(){
   groups.forEach((g,i)=>{const title=g.querySelector(':scope > .rp-group-title'),body=g.querySelector(':scope > .rp-group-body');if(!title||!body)return;
    body.id='catalogue-group-'+i;title.setAttribute('aria-controls',body.id);title.setAttribute('aria-expanded',String(g.classList.contains('open')));
    const arrow=title.querySelector('.rp-arrow');if(arrow)arrow.textContent=g.classList.contains('open')?'▼':'▶';
    if(!title.querySelector('.catalogue-count')){const n=document.createElement('small');n.className='catalogue-count';n.textContent=ids(g).size;title.insertBefore(n,arrow);}
   });
   openGroups=groups.flatMap((g,i)=>g.classList.contains('open')?[i]:[]);
  }
  function updateScope(group){
   const crumbs=[];let g=group;
   while(g){const title=g.querySelector(':scope > .rp-group-title');if(title)crumbs.unshift(label(title));g=g.parentElement.closest('.rp-group');}
   path.textContent=[dest,...crumbs].filter(Boolean).join(' › ');
   const n=group?ids(group).size:all.size;
   count.textContent=say('本分类 '+n+' 款 · '+dest+'共 '+all.size+' 款',n+' in this group · '+all.size+' in '+dest);
   if(empty)count.textContent=say('可咨询订制行程','Tailor-made travel enquiries welcome');
   scopeIndex=group?groups.indexOf(group):null;
  }
  function disclosure(){
   nav.hidden=empty||(mobile()&&!expanded);toggle.hidden=empty;
   toggle.textContent=expanded?say('收起分类','Close filters'):say('筛选产品','Filter tours');toggle.setAttribute('aria-expanded',String(!nav.hidden));
  }
  function close(){expanded=false;updateScope(nav.querySelector('.rp-route.active')?.closest('.rp-group'));disclosure();}
  toggle.onclick=()=>{if(expanded){close();return;}expanded=true;disclosure();
   requestAnimationFrame(()=>{nav.style.scrollMarginTop=((document.getElementById('site-header')?.getBoundingClientRect().height||72)+bar.getBoundingClientRect().height+12)+'px';nav.scrollIntoView({block:'start',behavior:'instant'});});
  };
  nav.onkeydown=e=>{if(e.key==='Escape'&&mobile()&&expanded){close();toggle.focus();}};
  nav.onclick=e=>{
   const route=e.target.closest('[data-tour]');
   if(route){updateScope(route.closest('.rp-group'));expanded=false;syncGroups();disclosure();
    if(mobile())requestAnimationFrame(()=>{
     const heading=document.querySelector('#list-detail h2, #list-detail h3');if(!heading)return;
     const header=document.getElementById('site-header')?.getBoundingClientRect().height||72;
     heading.style.scrollMarginTop=(header+bar.getBoundingClientRect().height+16)+'px';heading.tabIndex=-1;heading.focus({preventScroll:true});heading.scrollIntoView({block:'start',behavior:'instant'});
    });
   }else{const title=e.target.closest('.rp-group-title');if(title){syncGroups();updateScope(title.closest('.rp-group'));}}
  };
  syncGroups();
  const selected=[...nav.querySelectorAll('[data-tour]')].find(n=>n.dataset.tour===activeId);
  updateScope(scopeIndex!==null?groups[scopeIndex]:selected?.closest('.rp-group'));disclosure();
  window.EtripsCatalogue.resize=disclosure;
 }
 window.EtripsCatalogue={attach};
 matchMedia('(max-width:820px)').addEventListener('change',()=>window.EtripsCatalogue.resize?.());
})();
