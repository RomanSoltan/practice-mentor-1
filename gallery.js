var n=o=>{throw TypeError(o)};var l=(o,a,t)=>a.has(o)||n("Cannot "+t);var r=(o,a,t)=>(l(o,a,"read from private field"),t?t.call(o):a.get(o)),i=(o,a,t)=>a.has(o)?n("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(o):a.set(o,t);import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{a as c}from"./assets/vendor-N5iQpiFS.js";var s,p;class h{constructor(){i(this,s,"https://api.unsplash.com/photos");i(this,p,"gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58")}async getPopularPhoto(a){const t=new URLSearchParams({query:"popular",page:a,per_page:12,orientation:"portrait",client_id:r(this,p)}),{data:e}=await c(`${r(this,s)}?${t}`);return e}}s=new WeakMap,p=new WeakMap;const P=new h;P.getPopularPhoto(1).then(o=>{console.log(o)});
//# sourceMappingURL=gallery.js.map
