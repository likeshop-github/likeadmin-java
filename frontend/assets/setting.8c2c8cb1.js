var g=Object.defineProperty;var r=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var o=(t,s,i)=>s in t?g(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,n=(t,s)=>{for(var i in s||(s={}))a.call(s,i)&&o(t,i,s[i]);if(r)for(var i of r(s))u.call(s,i)&&o(t,i,s[i]);return t};import{r as e}from"./index.83bc3204.js";function f(){return e.get("/setting/basics/getCopyright")}function C(t){return e.post("/setting/basics/setCopyright",n({},t))}function m(){return e.get("/setting/basics/getWebsite")}function S(t){return e.post("/setting/basics/setWebsite",n({},t))}function b(){return e.get("/setting.web.web_setting/getAgreement")}function y(t){return e.post("/setting.web.web_setting/setAgreement",t)}function h(){return e.get("/monitor/server")}const l=()=>e.get("/setting.customer_service/getConfig"),G=t=>e.post("/setting.customer_service/setConfig",t);function v(){return e.get("/setting.user.user/getConfig")}function L(t){return e.post("/setting.user.user/setConfig",t)}function d(){return e.get("/setting.user.user/getRegisterConfig")}function w(t){return e.post("/setting.user.user/setRegisterConfig",t)}function W(t){return e.get("/system/log/operate",{params:t})}function _(t){return e.get("/monitor/cache",{params:t})}function q(){return e.get("/setting/storage/list")}function A(t){return e.get("/setting/storage/detail",{params:t})}function P(t){return e.post("/setting/storage/edit",t)}export{A as a,P as b,l as c,G as d,q as e,_ as f,h as g,W as h,v as i,L as j,d as k,w as l,f as m,C as n,m as o,S as p,b as q,y as r};
