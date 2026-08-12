import{s as a}from"./assets/sprite-Dq4561ti.js";/* empty css                      */import{i as n}from"./assets/vendor-BbbuE1sJ.js";const c={titleColor:"#FFFFFF",messageColor:"#FFFFFF",position:"topRight",transitionIn:"fadeIn",animateInside:!1,color:"#fff",icon:"toast-icon",class:"snackbar-toast"},l=s=>{const t={title:"OK",message:`Fulfilled promise in ${s}ms`,backgroundColor:"#59a10d",progressBarColor:"#326101",onOpening(o,e){const i=e.querySelector(".iziToast-icon");i.innerHTML=`
       <svg width="24" height="24" aria-hidden="true">
        <use href="${a}#x-success"></use>
       </svg>
    `}};return{...c,...t}},m=s=>{const t={title:"Error",message:`Rejected promise in ${s}ms`,backgroundColor:"#ef4040",progressBarColor:"#b51b1b",onOpening(o,e){const i=e.querySelector(".iziToast-icon");i.innerHTML=`
       <svg width="24" height="24" aria-hidden="true">
        <use href="${a}#x-octagon"></use>
       </svg>
    `}};return{...c,...t}},r=document.querySelector(".form"),u=({value:s,delay:t,shouldResolve:o=!0})=>new Promise((e,i)=>{setTimeout(()=>{o?e(s):i(s)},t)});r.addEventListener("submit",s=>{s.preventDefault();const t=Math.max(Number(r.elements.delay.value),0),o=r.elements.state.value;u({value:t,delay:t,shouldResolve:o==="fulfilled"}).then(e=>n.show({...l(e),message:`Fulfilled promise in ${e}ms`})).catch(e=>n.show({...m(e),message:`Rejected promise in ${e}ms`})),r.reset()});
//# sourceMappingURL=2-snackbar.js.map
