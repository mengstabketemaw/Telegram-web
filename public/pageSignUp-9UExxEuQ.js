import{a as m,e as P,_ as w,g as I,i as y}from"./index-V9prFj2_.js";import{L as E}from"./loginPage-xt3lysfz.js";import{P as N}from"./page-UoJ5ebDX.js";import{I as v,r as f,w as k}from"./wrapEmojiText-PgUc0oWi.js";import{P as A,a as S}from"./avatar-qM-zG4BL.js";import{I as F,B as M}from"./button-nX8trwgz.js";import{p as U}from"./putPreloader-hijTKqyN.js";import"./scrollable-a8VUE4jl.js";let d=null;const x=async()=>{const e=new E({className:"page-signUp",withInputWrapper:!0,titleLangKey:"YourName",subtitleLangKey:"Login.Register.Subtitle"});e.imageDiv.classList.add("avatar-edit"),e.title.classList.add("fullName");const o=document.createElement("canvas");o.id="canvas-avatar",o.className="avatar-edit-canvas";const b=F("cameraadd","avatar-edit-icon");e.imageDiv.append(o,b);let u;e.imageDiv.addEventListener("click",()=>{A.createPopup(S).open(o,a=>{u=a})});const g=a=>{const n=t.value||"",r=s.value||"",l=n||r?(n+" "+r).trim():"";l?f(e.title,k(l)):f(e.title,y("YourName"))},L=()=>new Promise((a,n)=>{if(!u)return a();u().then(r=>{m.managers.appProfileManager.uploadProfilePhoto(r).then(a,n)},n)}),t=new v({label:"FirstName",maxLength:70}),s=new v({label:"LastName",maxLength:64}),c=M("btn-primary btn-color-primary"),p=new P.IntlElement({key:"StartMessaging"});return c.append(p.element),e.inputWrapper.append(t.container,s.container,c),t.input.addEventListener("input",g),s.input.addEventListener("input",g),c.addEventListener("click",function(a){if(t.input.classList.contains("error")||s.input.classList.contains("error"))return!1;if(!t.value.length)return t.input.classList.add("error"),!1;this.disabled=!0;const n=t.value.trim(),r=s.value.trim(),l={phone_number:d.phone_number,phone_code_hash:d.phone_code_hash,first_name:n,last_name:r};p.update({key:"PleaseWait"});const h=U(this);m.managers.apiManager.invokeApi("auth.signUp",l).then(i=>{switch(i._){case"auth.authorization":m.managers.apiManager.setUser(i.user),L().finally(()=>{w(()=>import("./pageIm-D3BIWMsS.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(_=>{_.default.mount()})});break;default:p.update({key:i._}),this.removeAttribute("disabled"),h.remove();break}}).catch(i=>{switch(this.removeAttribute("disabled"),h.remove(),i.type){default:p.update({key:i.type});break}})}),I(),new Promise(a=>{window.requestAnimationFrame(a)})},q=new N("page-signUp",!0,x,e=>{d=e,m.managers.appStateManager.pushToState("authState",{_:"authStateSignUp",authCode:e})});export{q as default};
//# sourceMappingURL=pageSignUp-9UExxEuQ.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./pageIm-D3BIWMsS.js","./index-V9prFj2_.js","./index-a9cJFIqq.css","./page-UoJ5ebDX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}