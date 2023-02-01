/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{118:function(n,e,t){n.exports=t(130)},130:function(n,e,t){"use strict";t.r(e);var a=t(44),r=t(0),i=t.n(r),o=t(17),c=t.n(o),u=t(9),l=t(68),f=t(18),s=t(55),d=t(58),m=t.n(d),b=t(10);function p(){var n=Object(u.a)(["\n        animation-name: ",";\n        animation-duration: 2s;\n        animation-iteration-count: 1;\n        animation-fill-mode: forwards;\n        animation-timing-function: ease-in;\n    "]);return p=function(){return n},n}function g(){var n=Object(u.a)(["\n            animation-name: ",";\n            animation-duration: 2s;\n            animation-iteration-count: 1;\n            animation-fill-mode: forwards;\n            animation-timing-function: ease-in;\n        "]);return g=function(){return n},n}function h(){var n=Object(u.a)(["\n            animation-name: ",";\n            animation-duration: 2s;\n            animation-iteration-count: 1;\n            animation-fill-mode: forwards;\n            animation-timing-function: ease-in-out;\n        "]);return h=function(){return n},n}function v(){var n=Object(u.a)(["\n                animation-name: ",";\n                animation-duration: 2s;\n                animation-iteration-count: 1;\n                animation-fill-mode: forwards;\n                animation-timing-function: ease-in;\n            "]);return v=function(){return n},n}function j(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    background: #ffffff;\n    min-height: 100%;\n    overflow: hidden;\n    z-index: 10;\n    width: 100%;\n\n    "," {\n        svg {\n            ","\n        }\n    \n        ","\n    }\n\n    "," {\n        ","\n    }\n\n    ","\n"]);return j=function(){return n},n}function O(){var n=Object(u.a)(["\n    0% {\n        min-height: 100%;\n    }    \n\n    50% {\n        min-height: 100%;\n    }\n\n    75% {\n        min-height: 90px;\n    }\n\n    100% {\n        min-height: 90px;\n    }\n"]);return O=function(){return n},n}function x(){var n=Object(u.a)(["\n    0% {\n        height: 100%;\n    }    \n\n    50% {\n        height: 100%;\n    }\n\n    75% {\n        height: 0%;\n    }\n\n    100% {\n        height: 0%;\n    }\n"]);return x=function(){return n},n}function E(){var n=Object(u.a)(["\n    0% {\n        fill: #fff;\n    }\n\n    66% {\n        fill: #fff;\n    }\n\n    100% {\n        fill: #000;\n    }\n"]);return E=function(){return n},n}function w(){var n=Object(u.a)(["\n    0% {\n        top: calc(50% - 109px);\n        width: 100px;\n    }\n\n    33% {\n        top: 20px;\n        width: 50px;\n    }\n\n    100% {\n        top: 20px;\n        width: 50px;\n    }\n"]);return w=function(){return n},n}function y(){var n=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: #000000;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n"]);return y=function(){return n},n}function k(){var n=Object(u.a)(["\n    position: absolute;\n    top: calc(50% - 109px);\n    width: 100px;\n    z-index: 100; \n\n    svg {\n        fill: #fff;\n    }\n"]);return k=function(){return n},n}var C=b.b.div(k()),M=b.b.div(y()),S=Object(b.c)(w()),N=Object(b.c)(E()),z=Object(b.c)(x()),T=Object(b.c)(O()),D=b.b.div(j(),C,(function(n){return!n.loading&&Object(b.a)(v(),N)}),(function(n){return!n.loading&&Object(b.a)(h(),S)}),M,(function(n){return!n.loading&&Object(b.a)(g(),z)}),(function(n){return!n.loading&&Object(b.a)(p(),T)})),V=function(n){var e=n.loading;return Object(r.useEffect)((function(){document.title="Hashicups"})),i.a.createElement(D,{loading:e?1:0},i.a.createElement(C,null,i.a.createElement("svg",{id:"logo_image",viewBox:"0 0 33 36"},i.a.createElement("g",{id:"logo_path"},i.a.createElement("path",{d:"M20 26.7l5.4-3V3.2L20 0v15.3h-6.9v-6l-5.5 3v20.5l5.5 3.2V20.7H20z"}),i.a.createElement("path",{d:"M28 4.6v20.8l-8 4.4V36l13-7.5v-21zM13.1 0L0 7.5v21l5.1 2.9V10.6l8-4.4z"})))),i.a.createElement(M,null))},_=t(12),B=t(85),W=400,X=.3,q=1.2,L="transform ".concat(W,"ms cubic-bezier(0.68, -0.55, 0.265, 1.55)"),Y="transform ".concat(W,"ms ease"),A={offset:0,desired:0,active:0};function I(n,e){return(e-1+n)%n}function P(n,e){switch(e.type){case"jump":return Object(a.a)({},n,{desired:e.desired});case"next":return Object(a.a)({},n,{desired:(t=e.length,r=n.active,(r+1)%t)});case"prev":return Object(a.a)({},n,{desired:I(e.length,n.active)});case"done":return Object(a.a)({},n,{offset:NaN,active:n.desired});case"drag":return Object(a.a)({},n,{offset:e.offset});default:return n}var t,r}function R(n,e,t,a,r){e(a*n>=r.clientWidth*X?a>0?{type:"next",length:t}:{type:"prev",length:t}:{type:"drag",offset:0})}function F(){var n=Object(u.a)(["\n            path {\n                animation: "," 6s forwards;\n            }\n        "]);return F=function(){return n},n}function H(){var n=Object(u.a)(["\n    cursor: pointer;\n    \n    #a, #b, #c, #d, #e {\n        fill: none;\n        stroke: rgba(255, 255, 255, 0.3);\n        stroke-dashoffset: 0;\n        stroke-width: 0.7;\n        transition: all 300ms ease-in-out;\n    }\n\n    #a {\n        stroke-dasharray: 12.15426254272461;\n    }\n    \n    #b {\n        stroke-dasharray: 19.79115867614746;\n    }\n    \n    #c {\n        stroke-dasharray: 53.00725173950195;\n    }\n    \n    #d {\n        stroke-dasharray: 23.70177841186523;\n    }\n    \n    #e {\n        stroke-dasharray: 8.837481498718262;\n    }\n\n    ","\n"]);return H=function(){return n},n}function J(){var n=Object(u.a)(["\n    20% { stroke-dashoffset: 40; stroke: #ffffff; }\n    40% { stroke-dashoffset: 0;  stroke: rgba(255, 255, 255, 0.3); }\n    80% { stroke-dashoffset: 0;  stroke: rgba(255, 255, 255, 0.3); }\n    100% { stroke-dashoffset: 0;  stroke: rgba(255, 255, 255, 0.3); }\n"]);return J=function(){return n},n}var U=Object(b.c)(J()),G=b.b.svg(H(),(function(n){return n.active&&Object(b.a)(F(),U)})),K=function(n){var e=n.onValidate,t=Object(r.useState)(!1),a=Object(_.a)(t,2),o=a[0],c=a[1];return i.a.createElement(G,{id:"fingerprint",width:"100px",height:"100px",viewBox:"0 0 32 32",onClick:function(){return c(!0),void setTimeout((function(){c(!1),e()}),2e3)},active:o},i.a.createElement("g",{id:"document",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},i.a.createElement("g",{id:"_fingerprint",transform:"translate(1.000000, 1.000000)",stroke:"rgba(255, 255, 255, 0.2)"},i.a.createElement("g",{transform:"translate(7.000000, 6.000000)",strokeLinecap:"round"},i.a.createElement("path",{id:"a",d:"M3.14414922,1.97419264 C3.14414922,1.97419264 5.30885997,0.506351808 9.06036082,0.506351808 C12.8118617,0.506351808 14.781903,1.97419264 14.781903,1.97419264"}),i.a.createElement("path",{id:"b",d:"M0.466210729,7.27628774 C0.466210729,7.27628774 3.19024811,2.75878123 9.09512428,2.96502806 C15.0000005,3.17127489 17.4745821,7.17202872 17.4745821,7.17202872"}),i.a.createElement("path",{id:"c",d:"M2,16.4687762 C2,16.4687762 1.12580828,14.9305411 1.27082278,11.9727304 C1.45871447,8.14036841 5.19587478,5.30175361 9.05270871,5.30175361 C12.9095426,5.30175361 15.0000001,7.82879552 15.8975926,9.33195218 C16.5919575,10.4947729 17.7597991,14.4361492 14.6226101,15.0206592 C12.41268,15.4324056 11.5911303,13.4911155 11.5911303,12.9859143 C11.5911303,11.9727302 11.1054172,10.2336826 9.05270848,10.2336826 C6.99999978,10.2336826 6.11384543,11.8665663 6.4593664,13.7955614 C6.6532895,14.8782069 7.59887942,18.3701197 12.0173963,19.5605638"}),i.a.createElement("path",{id:"d",d:"M7.0204614,19.6657197 C7.0204614,19.6657197 3.88328263,16.5690127 3.88328268,12.9603117 C3.88328274,9.35161068 6.59923746,7.80642537 9.0076008,7.80642554 C11.4159641,7.8064257 14.1798468,9.55747124 14.1798468,12.759562"}),i.a.createElement("path",{id:"e",d:"M8.95538742,12.6694189 C8.95538742,12.6694189 9.04883608,18.1288401 15.069217,17.3610597"})))))};function $(){var n=Object(u.a)(["\n    0% {\n        height: 250px;\n    }\n\n    100% {\n        height: 0px;\n    }\n"]);return $=function(){return n},n}function Q(){var n=Object(u.a)(["\n    0% {\n        height: 0px;\n    }\n\n    100% {\n        height: 250px;\n    }\n"]);return Q=function(){return n},n}function Z(){var n=Object(u.a)(["\n    font-family: 'Montserrat', sans-serif;\n    font-size: 20px;\n    color: #ffffff;\n    font-weight: 700;\n    text-align: center;\n    max-width: 50%;\n"]);return Z=function(){return n},n}function nn(){var n=Object(u.a)(["\n        animation: "," 0.2s;\n        animation-timing-function: ease-in;\n    "]);return nn=function(){return n},n}function en(){var n=Object(u.a)(["\n        animation: "," 0.3s;\n        animation-timing-function: ease-out;\n    "]);return en=function(){return n},n}function tn(){var n=Object(u.a)(["\n    background-color: #1563ff;\n    height: 250px;\n    width: 100%;\n    position: absolute;\n    bottom: -25px;\n    z-index: 300;\n    border-radius: 50px/25px;\n    box-sizing: border-box;\n    padding-top: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    ","\n"]);return tn=function(){return n},n}var an=b.b.div(tn(),(function(n){return n.show?Object(b.a)(en(),on):Object(b.a)(nn(),cn)})),rn=b.b.div(Z()),on=Object(b.c)(Q()),cn=Object(b.c)($()),un=function(n){var e=n.show,t=n.setShow,a=n.setPaid,o=Object(r.useState)(e),c=Object(_.a)(o,2),u=c[0],l=c[1];Object(r.useEffect)((function(){e&&l(!0)}),[e]);return u&&i.a.createElement(an,{show:e,onAnimationEnd:function(){e||l(!1)}},i.a.createElement(rn,null,"Confirm your purchase"),i.a.createElement(K,{onValidate:function(){a(!0),t(!1)}}))};function ln(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    overflow: hidden;\n    position: relative;\n\n    animation-name: ",";\n    animation-delay: 1s;\n    animation-duration: 1s;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-in-out;\n    overscroll-behavior: none;\n"]);return ln=function(){return n},n}function fn(){var n=Object(u.a)(["\n    0% {\n        transform: translateY(80px);\n    }\n\n    100% {\n        transform: translateY(0);\n    }\n"]);return fn=function(){return n},n}function sn(){var n=Object(u.a)(["\n    0% {\n        transform: translateY(50px);\n    }\n\n    100% {\n        transform: translateY(0);\n    }\n"]);return sn=function(){return n},n}function dn(){var n=Object(u.a)(["\n        background-image: url(",");\n    "]);return dn=function(){return n},n}function mn(){var n=Object(u.a)(["\n    ","\n\n    background-size: auto 360px;\n    background-repeat: no-repeat;\n    background-position: center 80px;\n    width: 100%;\n    height: 500px;\n"]);return mn=function(){return n},n}function bn(){var n=Object(u.a)(["\n            animation-name: ",";\n            animation-duration: 0.3s;\n            animation-iteration-count: 1;\n            animation-fill-mode: forwards;\n            animation-timing-function: linear;\n        "]);return bn=function(){return n},n}function pn(){var n=Object(u.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    "," {\n        ","\n    }\n"]);return pn=function(){return n},n}function gn(){var n=Object(u.a)(["\n        background: #ffcc00;\n    "]);return gn=function(){return n},n}function hn(){var n=Object(u.a)(["\n        animation-name: ",";\n        animation-duration: 0.3s;\n        animation-delay: 0.1s;\n        animation-iteration-count: 1;\n        animation-fill-mode: forwards;\n        animation-timing-function: linear;\n    "]);return hn=function(){return n},n}function vn(){var n=Object(u.a)(["\n    box-sizing: border-box;\n    font-weight: 600;\n    border: 1px solid;\n    border-radius: 50px;\n    padding: 11px 24px;\n    text-align: center;\n    display: inline-block;\n    width: 90px;\n    background: #1563ff;\n    border-color: #1563ff;\n    color: #ffffff;\n    margin: 20px auto 0 auto;\n    transform: translateY(100px);\n    ","\n\n    ","\n"]);return vn=function(){return n},n}function jn(){var n=Object(u.a)(["\n    font-family: 'Montserrat', sans-serif;\n    font-size: 20px;\n    font-weight: 700;\n    text-transform: Capitalize;\n    text-align: center;\n    transform: translateY(100px);\n"]);return jn=function(){return n},n}function On(){var n=Object(u.a)(["\n    0% {\n        left: -","%;\n    }    \n\n    100% {\n        left: 0%;\n    }\n"]);return On=function(){return n},n}function xn(){var n=Object(u.a)(["\n    position: relative;\n    overflow: hidden;\n    overscroll-behavior: none;\n    text-align: center;\n"]);return xn=function(){return n},n}var En=b.b.div(xn()),wn=b.b.div(jn()),yn=b.b.div(vn(),(function(n){return n.ready&&Object(b.a)(hn(),Sn)}),(function(n){return n.paid&&Object(b.a)(gn())})),kn=b.b.div(pn(),wn,(function(n){return n.active&&n.ready&&Object(b.a)(bn(),Mn)})),Cn=b.b.div(mn(),(function(n){return n.src&&Object(b.a)(dn(),n.src)})),Mn=Object(b.c)(sn()),Sn=Object(b.c)(fn()),Nn=b.b.div(ln(),(function(n){return Object(b.c)(On(),100*(n.length+2))})),zn=function(n,e,t){var a=n.id,r=n.name,o=n.image;return i.a.createElement(kn,{key:a,active:e,ready:t},i.a.createElement(Cn,{alt:r,src:"".concat("","/img").concat(o)}),i.a.createElement(wn,null,r))},Tn=t(170),Dn=t(162),Vn=t(164),_n=t(174),Bn=t(177),Wn=t(178),Xn=t(169),qn=t(24),Ln=t(171),Yn=t(94),An=t(159),In=t(172);function Pn(){var n=Object(u.a)(['\nmutation {\n  pay(\n    details: {\n      name: "','",\n      type: "','",\n      number: "','",\n      expiry: "','",\n      cv2: ',",\n      amount: 3.99,\n    }\n  ){\n    id,\n    card_plaintext,\n    card_ciphertext,\n    message\n  } \n}\n"]);return Pn=function(){return n},n}var Rn=Object(An.a)((function(n){return{root:{margin:n.spacing(1),flexGrow:1},inputLabel:{margin:n.spacing(1)},formControl:{margin:n.spacing(2),marginTop:n.spacing(2)},selectEmpty:{marginTop:n.spacing(2)},button:{marginTop:n.spacing(2)},paper:{padding:n.spacing(2),textAlign:"center",color:n.palette.text.secondary},textField:{}}}));function Fn(n){var e=Rn(),t=i.a.useState({message:"Not Submitted",card_plaintext:"No value until form is submitted...",card_ciphertext:"No value until form is submitted..."}),a=Object(_.a)(t,2),o=a[0],c=a[1],u=i.a.useState(""),l=Object(_.a)(u,2),f=l[0],d=l[1],b=i.a.useState(""),p=Object(_.a)(b,2),g=p[0],h=p[1],v=i.a.useState(""),j=Object(_.a)(v,2),O=j[0],x=j[1],E=i.a.useState(0),w=Object(_.a)(E,2),y=w[0],k=w[1],C=Object(r.useState)(new Date),M=Object(_.a)(C,2),S=M[0],N=M[1],z=m()(Pn(),g,f,O,S,y),T=Object(s.a)(z,{onCompleted:function(n){c(n.pay)},onError:function(n){alert(n)}}),D=Object(_.a)(T,1)[0];return i.a.createElement("div",{className:e.root},i.a.createElement(Dn.a,{container:!0,spacing:3,direction:"column"},i.a.createElement(Dn.a,{item:!0,xs:12},i.a.createElement(Vn.a,{fullWidth:!0},i.a.createElement(_n.a,{id:"cardTypeMUILabel",variant:"standard",className:e.root,required:!0},n.dropdownDefault),i.a.createElement(In.a,{id:"cardTypeMUI",value:f,onChange:function(n){d(n.target.value)},className:e.root},i.a.createElement(Bn.a,{value:""},i.a.createElement("em",null,"None")),i.a.createElement(Bn.a,{value:"Visa"},"Visa"),i.a.createElement(Bn.a,{value:"Mastercard"},"Mastercard"),i.a.createElement(Bn.a,{value:"AmericanExpress"},"AmericanExpress")),i.a.createElement(Wn.a,{id:"name",label:"Cardholder Name",className:e.root,onChange:function(n){h(n.target.value)},required:!0}),i.a.createElement(Wn.a,{id:"number",label:"Card Number",className:e.root,onChange:function(n){x(n.target.value)},required:!0}),i.a.createElement(Wn.a,{id:"cvc",label:"CVC",className:e.root,onChange:function(n){k(n.target.value)},required:!0}),i.a.createElement(qn.a,{utils:Yn.a,className:e.root},i.a.createElement(Ln.a,{margin:"normal",id:"date-picker-dialog",label:"Expiry Date",format:"MM/dd/yyyy",value:S,onChange:function(n){N(n)},className:e.root,KeyboardButtonProps:{"aria-label":"change date"},required:!0}))),i.a.createElement(Xn.a,{variant:"contained",className:e.button,fullWidth:!0,type:"submit",onClick:function(n){n.preventDefault(),f&&g&&O&&y&&S?D():alert("One of the required fields is missing")}},"Submit Payment"),i.a.createElement("p",null," Status: ",i.a.createElement("b",null,o.message)," "),i.a.createElement("p",null," Encryption Status: ",i.a.createElement("b",null,o.card_ciphertext)," "),i.a.createElement("p",null," CardData Returned from Backend in plaintext :( : ",i.a.createElement("b",null,o.card_plaintext)))))}function Hn(){return i.a.createElement(Fn,{dropdownDefault:"Card Type"})}function Jn(){var n=Object(u.a)(["\n    position: fixed;\n    top: 90px;\n    width: 100%;\n"]);return Jn=function(){return n},n}function Un(){var n=Object(u.a)(["\n{\n    coffees {\n        id\n        name\n        image\n        price\n    }\n}\n"]);return Un=function(){return n},n}var Gn=m()(Un()),Kn=Object(b.b)((function(n){var e=n.className,t=n.items,a=function(n,e){var t=Object(r.useReducer)(P,A),a=Object(_.a)(t,2),i=a[0],o=a[1],c=Object(r.useState)(void 0),u=Object(_.a)(c,2),l=u[0],f=u[1],s=Object(B.a)({onSwiping:function(n){var e=n.deltaX>0?-1:1;o({type:"drag",offset:e*Math.min(Math.abs(n.deltaX),q*l.clientWidth)})},onSwipedLeft:function(e){R(e.deltaX,o,n,1,l)},onSwipedRight:function(e){R(e.deltaX,o,n,-1,l)},preventDefaultTouchmoveEvent:!0,trackMouse:!0,trackTouch:!0}),d=s.ref,m={onMouseDown:s.onMouseDown,ref:function(n){return f(n&&n.firstElementChild),d(n)}};Object(r.useEffect)((function(){if(e>0){var t=setTimeout((function(){return o({type:"next",length:n})}),e);return function(){return clearTimeout(t)}}}),[i.offset,i.active,e,n]),Object(r.useEffect)((function(){var n=setTimeout((function(){return o({type:"done"})}),W);return function(){return clearTimeout(n)}}),[i.desired]);var b={transform:"translateX(0)",width:"".concat(100*(n+2),"%"),left:"-".concat(100*(i.active+1),"%")};if(i.desired!==i.active){var p=Math.abs(i.active-i.desired),g=Math.sign(i.offset||0),h=(p>n/2?1:-1)*Math.sign(i.desired-i.active),v=100*(g||h)/(n+2);b.transition=Y,b.transform="translateX(".concat(v,"%)")}else isNaN(i.offset)||(0!==i.offset?b.transform="translateX(".concat(i.offset,"px)"):b.transition=L);return[i.active,function(n){return o({type:"jump",desired:n})},m,b]}(t.length,-1),o=Object(_.a)(a,4),c=o[0],u=o[2],l=o[3],s=Object(f.f)(),d=Object(r.useState)(!1),m=Object(_.a)(d,2),b=m[0],p=m[1],g=Object(r.useState)(!1),h=Object(_.a)(g,2),v=h[0],j=h[1],O=Object(r.useState)(!1),x=Object(_.a)(O,2),E=x[0],w=x[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(En,{className:e},i.a.createElement(Nn,Object.assign({},u,{style:l,length:t.length,onAnimationEnd:function(){b||p(!0)}}),zn(t[t.length-1],!1,b),t.map((function(n,e){return zn(n,c===e,b)})),zn(t[0],!1,b)),i.a.createElement(yn,{ready:b,onClick:function(){return s.push("/payments")},paid:E},"Buy")),i.a.createElement(un,{show:v,setShow:j,setPaid:w}))}))(Jn()),$n=function(){var n=Object(s.b)(Gn),e=n.loading,t=n.error,a=n.data;return t?i.a.createElement("p",null,"Error :("):i.a.createElement(l.a,null,i.a.createElement(f.c,null,i.a.createElement(f.a,{path:"/payments"},i.a.createElement(V,{loading:e}),i.a.createElement(Tn.a,{style:{paddingTop:"5em"}},i.a.createElement(Hn,null))),i.a.createElement(f.a,{path:"/"},i.a.createElement(V,{loading:e}),!e&&i.a.createElement(Kn,{items:a.coffees}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qn=t(45),Zn=t(96),ne=t(93),ee=t(95),te=t(23),ae=Object(Zn.a)({uri:"/api"}),re=Object(ne.a)((function(n,e){var t=e.headers,r=localStorage.getItem("token");return{headers:Object(a.a)({},t,{authorization:r?"Bearer ".concat(r):""})}})),ie=new Qn.a({link:re.concat(ae),cache:new ee.a}),oe=i.a.createElement(te.a,{client:ie},i.a.createElement($n,null));c.a.render(oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[118,1,2]]]);
//# sourceMappingURL=main.aa269359.chunk.js.map