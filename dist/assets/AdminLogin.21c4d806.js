import{i as o,P as E,j as e,r,Q as B}from"./index.49abb02d.js";import{G as h,T as N,l as T}from"./logo-municipal.e4ff8055.js";import{u as l}from"./useBreakpoint.a8619116.js";import"./createSvgIcon.d218a5bf.js";function D(t){return h({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"}}]})(t)}function M(t){return h({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(t)}const z=({error:t,saveData:a,selected:s,password:n,handleInputNameChange:i,setPasword:m,inputNameText:d,inputLastNameText:g,handleInputLastNameChange:p,handleCheckboxChange:v})=>{const c=l("sm");return o(E,{children:[e("div",{className:c?"input-container":"input-container-mobile",children:e(N,{error:!!t,id:"input-name",label:"Usuario",variant:"standard",onChange:i,className:c?"input":"input-mobile",value:d})}),o("div",{className:c?"input-container eye-container":"input-container-mobile eye-container",children:[e(N,{error:!!t,id:"input-last-name",label:"Contrase\xF1a",type:n?"text":"password",variant:"standard",onChange:p,className:c?"input":"input-mobile",value:g}),e("div",{className:c?"eye-position":"eye-position-mobile",onClick:()=>m(!n),children:n?e(D,{className:"eye eye-close"}):e(M,{className:"eye eye-open"})})]}),t?e("div",{className:"error-relative",children:e("div",{className:"error-container",children:e("span",{className:"error",children:"Debe completar los campos"})})}):null,o("div",{className:"actives-container",children:[o("div",{className:"checkbox-container",children:[e("input",{type:"checkbox",className:"checkbox",onChange:v,checked:s}),e("span",{className:c?"span-text":"span-text-mobile",children:"Recordar usuario"})]}),e("button",{className:"button",onClick:a,children:"INGRESAR"})]})]})},j=()=>{l("sm");const t="",[a,s]=r.exports.useState(t),[n,i]=r.exports.useState(t),[m,d]=r.exports.useState(""),[g,p]=r.exports.useState(""),[v,c]=r.exports.useState(!1),f=B(),I=document.getElementById("input-name"),S=document.getElementById("input-last-name"),y=()=>{s(I.value)},b=()=>{i(S.value)},k=u=>{d(u.target.checked),u.target.checked===!1&&(localStorage.removeItem("nombre",a),localStorage.removeItem("contrase\xF1a",n),localStorage.setItem("toggle-switch",!1))},L=a!==t&&n!==t&&a!=null&&n!=null,C=()=>{L&&(m===!0&&(localStorage.setItem("nombre",a),localStorage.setItem("contrase\xF1a",n)),a!==""&&n!==""&&localStorage.setItem("toggle-switch",m===!0),f("/admin/zoonosis")),(a===""||n==="")&&(setTimeout(()=>{p("vacio")},0),setTimeout(()=>{p("")},3e3))},F=()=>localStorage.getItem("nombre"),w=()=>localStorage.getItem("contrase\xF1a"),A=()=>localStorage.getItem("toggle-switch")==="true";return r.exports.useEffect(()=>{if(window.localStorage.length===1){const u=document.getElementById("input-last-name"),x=document.getElementById("input-name");u.value===""||x.value===""?(i(n),s(a)):(i(u.value),s(x.value))}else s(F()),i(w()),d(A())},[]),e(z,{error:g,saveData:C,selected:m,password:v,handleInputNameChange:y,setPasword:c,inputNameText:a,inputLastNameText:n,handleInputLastNameChange:b,handleCheckboxChange:k})},O=()=>{const t=l("sm");return o("div",{className:t?"text-container":"text-container-mobile",children:[e("h1",{className:"title-text",children:"PORTAL DE GESTI\xD3N DE ZOONOSIS"}),e("span",{className:"span-text",children:"Acceso administradores"}),e("p",{className:"text",children:"Ingrese usuario y contrase\xF1a para acceder al portal con privilegios de administrador"})]})},R=({setSide:t})=>{const a=l("sm");return e("div",{className:"container",onClick:()=>t(!0),children:o("div",{className:a?"form-container":"form-container-mobile",children:[e(O,{}),e(j,{})]})})};function G(t){return h({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"}}]})(t)}function V(t){return h({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"}}]})(t)}function H(t){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(t)}const P=()=>o("div",{className:"footer-container",children:[o("div",{className:"contact-container",children:[e(G,{className:"contact-icon"}),e("span",{className:"span-text color-text",children:"(03489) - 407000"})]}),e("div",{className:"contact-container",children:o("a",{href:"mailto:verificaciones@campana.gov.ar",children:[e(H,{className:"contact-icon"}),e("span",{className:"span-text color-text",children:"verificaciones@campana.gov.ar"})]})}),o("div",{className:"contact-container",children:[e(V,{className:"contact-icon"}),e("span",{className:"span-text color-text",children:"Av. Varela 371"})]})]}),q=()=>{const[t,a]=r.exports.useState(!1),s=l("lg"),n=l("md");return o("div",{className:"home-container",children:[s&&e("div",{className:"home",style:t?{flex:1.5,transition:".5s ease"}:{flex:2,transition:".5s ease"},onClick:()=>a(!1),children:e("a",{href:"https://www.campana.gob.ar/",style:{cursor:"pointer"},children:e("img",{className:"logo",src:T,alt:"logo municipalidad de campana"})})}),e(R,{setSide:a}),n&&e(P,{})]})};export{q as default};