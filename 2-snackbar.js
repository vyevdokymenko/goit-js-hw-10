import{s as a}from"./assets/sprite-Dq4561ti.js";/* empty css                      */import{i as n}from"./assets/vendor-BbbuE1sJ.js";const c={titleColor:"#FFFFFF",messageColor:"#FFFFFF",position:"topRight",transitionIn:"fadeIn",animateInside:!1,color:"#fff",icon:"toast-icon",class:"snackbar-toast"},l=t=>{const s={title:"OK",message:`Fulfilled promise in ${t}ms`,backgroundColor:"#59a10d",progressBarColor:"#326101",onOpening(o,e){const r=e.querySelector(".iziToast-icon");r.innerHTML=`
       <svg width="24" height="24" aria-hidden="true">
        <use href="${a}#x-success"></use>
       </svg>
    `}};return{...c,...s}},u=t=>{const s={title:"Error",message:`Rejected promise in ${t}ms`,backgroundColor:"#ef4040",progressBarColor:"#b51b1b",onOpening(o,e){const r=e.querySelector(".iziToast-icon");r.innerHTML=`
       <svg width="24" height="24" aria-hidden="true">
        <use href="${a}#x-octagon"></use>
       </svg>
    `}};return{...c,...s}},i=document.querySelector(".form"),m=({value:t,delay:s,shouldResolve:o=!0})=>new Promise((e,r)=>{setTimeout(()=>{o?e(t):r(t)},s)});i.addEventListener("submit",t=>{t.preventDefault();const s=Math.max(Number(i.elements.delay.value),0),o=i.elements.state.value;m({value:s,delay:s,shouldResolve:o==="fulfilled"}).then(e=>n.show(l(e))).catch(e=>n.show(u(e))),i.reset()});
//# sourceMappingURL=2-snackbar.js.map
