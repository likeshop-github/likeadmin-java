import{M as D,N as U,A as v,y as w,u as N,B as $}from"./element-plus.f93fd622.js";import{_ as j}from"./index.e14f68ca.js";import{_ as I}from"./picker.vue_vue_type_script_setup_true_lang.51278156.js";import{_ as L}from"./picker.29f42532.js";import{f as F}from"./index.ab5c8d8d.js";import{d as M,o as c,c as E,V as e,M as t,a as m,W as O,a8 as R,L as V,S as T,T as r}from"./@vue.cab01781.js";const G=r("\u5F00\u542F"),S=r("\u505C\u7528"),W={class:"flex-1"},q=m("div",{class:"form-tips"},"\u6700\u591A\u6DFB\u52A05\u5F20\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\uFF1A750px*240px",-1),z={class:"bg-fill-light flex items-center w-full p-4 mt-4"},H={class:"ml-3 flex-1"},J=r("\u6DFB\u52A0\u56FE\u7247"),ee=M({__name:"attr",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(a){const d=a,_=5,b=()=>{var n;((n=d.content.data)==null?void 0:n.length)<_?d.content.data.push({image:"",name:"",link:{}}):F.msgError(`\u6700\u591A\u6DFB\u52A0${_}\u5F20\u56FE\u7247`)},h=n=>{var u;if(((u=d.content.data)==null?void 0:u.length)<=1)return F.msgError("\u6700\u5C11\u4FDD\u7559\u4E00\u5F20\u56FE\u7247");d.content.data.splice(n,1)};return(n,u)=>{const i=D,g=U,s=v,B=L,k=w,x=I,A=j,C=N,y=$;return c(),E("div",null,[e(y,{"label-width":"70px"},{default:t(()=>{var p;return[e(s,{label:"\u662F\u5426\u542F\u7528"},{default:t(()=>[e(g,{modelValue:a.content.enabled,"onUpdate:modelValue":u[0]||(u[0]=o=>a.content.enabled=o)},{default:t(()=>[e(i,{label:1},{default:t(()=>[G]),_:1}),e(i,{label:0},{default:t(()=>[S]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u56FE\u7247\u8BBE\u7F6E"},{default:t(()=>[m("div",W,[q,(c(!0),E(O,null,R(a.content.data,(o,f)=>(c(),V(A,{key:f,onClose:l=>h(f),class:"max-w-[400px]"},{default:t(()=>[m("div",z,[e(B,{modelValue:o.image,"onUpdate:modelValue":l=>o.image=l,"upload-class":"bg-body","exclude-domain":""},null,8,["modelValue","onUpdate:modelValue"]),m("div",H,[e(s,{label:"\u56FE\u7247\u540D\u79F0"},{default:t(()=>[e(k,{modelValue:o.name,"onUpdate:modelValue":l=>o.name=l,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{class:"mt-[18px]",label:"\u56FE\u7247\u94FE\u63A5"},{default:t(()=>[e(x,{modelValue:o.link,"onUpdate:modelValue":l=>o.link=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)])])]),_:2},1032,["onClose"]))),128))])]),_:1}),((p=a.content.data)==null?void 0:p.length)<_?(c(),V(s,{key:0},{default:t(()=>[e(C,{type:"primary",onClick:b},{default:t(()=>[J]),_:1})]),_:1})):T("",!0)]}),_:1})])}}});export{ee as _};
