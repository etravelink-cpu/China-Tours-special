/* Supplier-neutral customer routing. Product facts and version bindings stay intact. */
(function(){
 'use strict';
 function sha256(text){
  const k=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
  const bytes=new TextEncoder().encode(text),size=Math.ceil((bytes.length+9)/64)*64,buf=new Uint8Array(size);buf.set(bytes);buf[bytes.length]=0x80;
  const dv=new DataView(buf.buffer);dv.setUint32(size-4,bytes.length*8,false);
  const h=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19],rr=(x,n)=>(x>>>n)|(x<<(32-n));
  for(let offset=0;offset<size;offset+=64){
   const w=new Int32Array(64);for(let n=0;n<16;n++)w[n]=dv.getInt32(offset+n*4,false);
   for(let n=16;n<64;n++){const x=w[n-15],y=w[n-2];w[n]=(w[n-16]+(rr(x,7)^rr(x,18)^(x>>>3))+w[n-7]+(rr(y,17)^rr(y,19)^(y>>>10)))|0;}
   let [a,b,c,d,e,f,g,j]=h;
   for(let n=0;n<64;n++){const t1=(j+(rr(e,6)^rr(e,11)^rr(e,25))+((e&f)^(~e&g))+k[n]+w[n])|0,t2=((rr(a,2)^rr(a,13)^rr(a,22))+((a&b)^(a&c)^(b&c)))|0;j=g;g=f;f=e;e=(d+t1)|0;d=c;c=b;b=a;a=(t1+t2)|0;}
   [a,b,c,d,e,f,g,j].forEach((v,n)=>h[n]=(h[n]+v)|0);
  }
  return h.map(v=>(v>>>0).toString(16).padStart(8,'0')).join('');
 }
 const mask=id=>/^ET-[0-9A-F]{16}$/.test(String(id))?String(id):'ET-'+sha256('etrips-customer-v1:'+String(id)).slice(0,16).toUpperCase();
 const products=window.TOURS||[],known=new Set(),legacy=window.ETRIPS_V2_ALIASES||{};
 for(const p of products){const id=mask(p.id);if(known.has(id))throw new Error('Duplicate customer product identifier');known.add(id);p.id=id;delete p.supplierCode;for(const b of p.brochures||[])delete b.supplier;}
 function resolve(id){const value=mask(legacy[id]||id);return known.has(value)?value:null;}
 function rewrite(url){
  const u=new URL(url,location.href);if(u.origin!==location.origin)return u;
  for(const key of ['id','tour']){const current=u.searchParams.get(key);if(!current)continue;const next=resolve(current);if(next&&next!==current)u.searchParams.set(key,next);}
  return u;
 }
 const current=rewrite(location.href);if(current.href!==location.href)history.replaceState(history.state,'',current.href);
 function links(root){
  const items=[];if(root.nodeType===1&&root.matches('a[href]'))items.push(root);
  if(root.querySelectorAll)items.push(...root.querySelectorAll('a[href]'));
  for(const a of items){const old=a.getAttribute('href');if(!old||!/[?&](?:id|tour)=/.test(old))continue;let next;try{next=rewrite(old);}catch{continue;}
   if(next.origin===location.origin&&next.href!==new URL(old,location.href).href)a.setAttribute('href',next.pathname+next.search+next.hash);
  }
 }
 links(document);
 new MutationObserver(records=>{for(const record of records){if(record.type==='attributes')links(record.target);else for(const node of record.addedNodes)links(node);}}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['href']});
 window.EtripsCustomerProductId=Object.freeze({mask,resolve});
})();
