var n=a=>{throw TypeError(a)};var p=(a,t,o)=>t.has(a)||n("Cannot "+o);var l=(a,t,o)=>(p(a,t,"read from private field"),o?o.call(a):t.get(a)),e=(a,t,o)=>t.has(a)?n("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,o);import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{a as c}from"./assets/vendor-N5iQpiFS.js";var r,s;class m{constructor(){e(this,r,"https://api.unsplash.com/photos");e(this,s,"gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58")}async getPopularPhoto(t){const o=new URLSearchParams({query:"popular",page:t,per_page:12,orientation:"portrait",client_id:l(this,s)}),{data:i}=await c(`${l(this,r)}?${o}`);return i}}r=new WeakMap,s=new WeakMap;const g=a=>a.map(t=>`
      <li class="gallery__item">
        <img class="gallery-img" src="${t.urls.small}" alt="${t.alt_description}">
      </li>
    `).join(""),h=document.querySelector(".gallery"),u=new m;u.getPopularPhoto(1).then(a=>{console.log(a),h.innerHTML=g(a)});
//# sourceMappingURL=gallery.js.map
