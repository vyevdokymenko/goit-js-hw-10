import{s as l}from"./assets/sprite-Dq4561ti.js";/* empty css                      */import{i as c}from"./assets/vendor-BbbuE1sJ.js";const t=document.querySelector(".form"),m=({value:o,delay:s,shouldResolve:i=!0})=>new Promise((e,n)=>{setTimeout(()=>{i?e(o):n(o)},s)});t.addEventListener("submit",o=>{o.preventDefault();const s=Math.max(Number(t.elements.delay.value),0),i=t.elements.state.value;m({value:s,delay:s,shouldResolve:i==="fulfilled"}).then(e=>{c.show({title:"OK",titleColor:"#FFFFFF",message:`Fulfilled promise in ${e}ms`,messageColor:"#FFFFFF",position:"topRight",transitionIn:"fadeIn",animateInside:!1,backgroundColor:"#59a10d",color:"#fff",icon:"toast-icon",class:"snackbar-toast",progressBarColor:"#326101",onOpening(n,r){const a=r.querySelector(".iziToast-icon");a.innerHTML=`
            <svg width="24" height="24" aria-hidden="true">
              <use href="${l}#x-success"></use>
            </svg>
          `}})}).catch(e=>{c.show({title:"Error",titleColor:"#FFFFFF",message:`Rejected promise in ${e}ms`,messageColor:"#FFFFFF",position:"topRight",transitionIn:"fadeIn",animateInside:!1,backgroundColor:"#ef4040",color:"#fff",icon:"toast-icon",class:"snackbar-toast",progressBarColor:"#b51b1b",onOpening(n,r){const a=r.querySelector(".iziToast-icon");a.innerHTML=`
            <svg width="24" height="24" aria-hidden="true">
              <use href="${l}#x-octagon"></use>
            </svg>
          `}})}),t.reset()});
//# sourceMappingURL=2-snackbar.js.map
