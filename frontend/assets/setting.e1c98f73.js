var g=Object.defineProperty;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;var o=(t,i,n)=>i in t?g(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,s=(t,i)=>{for(var n in i||(i={}))u.call(i,n)&&o(t,n,i[n]);if(r)for(var n of r(i))a.call(i,n)&&o(t,n,i[n]);return t};import{x as e}from"./index.8fe53ee6.js";function c(){return e.get("/setting/getCopyright")}function C(t){return e.post("/setting/setCopyright",s({},t))}function m(){return e.get("/setting/getWebsite")}function S(t){return e.post("/setting/setWebsite",s({},t))}function b(){return e.get("/setting.web.web_setting/getAgreement")}function y(t){return e.post("/setting.web.web_setting/setAgreement",t)}function h(){return e.get("/monitor/server")}const G=()=>e.get("/setting.customer_service/getConfig"),v=t=>e.post("/setting.customer_service/setConfig",t);function l(){return e.get("/setting.user.user/getConfig")}function w(t){return e.post("/setting.user.user/setConfig",t)}function L(){return e.get("/setting.user.user/getRegisterConfig")}function W(t){return e.post("/setting.user.user/setRegisterConfig",t)}function _(t){return e.get("/system/log/operate",{params:t})}function x(t){return e.get("/monitor/cache",{params:t})}export{G as a,v as b,x as c,h as d,_ as e,l as f,w as g,L as h,W as i,c as j,C as k,m as l,S as m,b as n,y as o};
