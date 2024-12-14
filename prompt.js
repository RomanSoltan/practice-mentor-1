import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const r=prompt("Enter value");function i(e){return new Promise((t,n)=>{const o=+e;isNaN(o)&&n("error"),o%2||setTimeout(()=>{t("even")},1e3),o%2&&setTimeout(()=>{t("odd")},2e3)})}i(r).then(e=>console.log(e)).catch(e=>console.log(e.message));
//# sourceMappingURL=prompt.js.map
