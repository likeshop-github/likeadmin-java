var G=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var $=(i,r,d)=>r in i?G(i,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):i[r]=d,z=(i,r)=>{for(var d in r||(r={}))K.call(r,d)&&$(i,d,r[d]);if(R)for(var d of R(r))O.call(r,d)&&$(i,d,r[d]);return i},T=(i,r)=>H(i,J(r));import{m as Q}from"./index.700403e6.js";import{F as W}from"./index.41aa7d3c.js";import{u as ee,a as ue,b as te,c as le,d as ae}from"./index.83bc3204.js";import{a as oe,b as se}from"./organize.e4627e58.js";import{d as re,y as B,c as ne,t as de,X as ie,A as pe,r as _,Y as me,a as E,i as e,w as l,Z as _e,b as C,o as c,_ as o,F as N,h as S,$ as Fe,f as fe,k as F,E as ce}from"./vendor.26ab8f26.js";import"./index.169d3980.js";import"./pages.de166038.js";import"./index.76d54eea.js";const ve={class:"admin"},Be=fe("div",{class:"muted"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100px\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),ge=F("\u65B0\u589E\u90E8\u95E8"),be=F("|"),we=F("\u5237\u65B0"),De=F("\u65B0\u589E\u5C97\u4F4D"),Ve=F("|"),ye=F("\u5237\u65B0"),Ee=F("\u65B0\u589E\u89D2\u8272"),Ce=F("|"),Ae=F("\u5237\u65B0"),ke=F("\u4FDD\u5B58"),ze=re({setup(i){const r=B(null),{router:d,route:j}=ee(),f=ne(()=>{var s;return(s=j.query)==null?void 0:s.id}),b=B(!1),w=B([]),A=B([]),k=B([]),{formData:u,rules:D}=de(ie({formData:{username:"",nickname:"",role:"",avatar:"",password:"",password_confirm:"",isDisable:0,isMultipoint:0,deptId:"",postId:""},rules:{username:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:["blur"]}],nickname:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}],role:[{required:!0,message:"\u8BF7\u9009\u62E9\u89D2\u8272",trigger:["blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur",pattern:/(^[^\s]*$)/},{validator:(s,t,n)=>{t?n():n(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801"))},trigger:"blur"}],password_confirm:[{required:!0,message:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",trigger:"blur",pattern:/(^[^\s]*$)/},{validator:(s,t,n)=>{u.value.password&&(t||n(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")),t!==u.value.password&&n(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!"))),n()},trigger:"blur"}]}})),h=()=>{ue({page_type:0}).then(s=>{w.value=s.lists,f.value&&u.value.root==1&&w.value.push({id:0,name:"\u7CFB\u7EDF\u7BA1\u7406\u5458"})})},x=()=>{oe({}).then(s=>{A.value=I(s)})},I=s=>s.map(n=>{const v=n.children||[];return v.length&&I(v),n.status==0?n.disabled=!0:n.disabled=!1,n}),L=()=>{se({page_type:0}).then(s=>{k.value=s.lists})},P=()=>{if(!f.value){D.value.password,D.value.password_confirm;return}b.value=!0,te({id:f.value}).then(s=>{u.value=s}).finally(()=>{b.value=!1})},X=()=>{var s;(s=r.value)==null||s.validate(t=>{if(!t)return;Array.isArray(u.value.deptId)&&(u.value.deptId=u.value.deptId[u.value.deptId.length-1]),(f.value?le(T(z({},u.value),{id:f.value})):ae(u.value)).then(()=>{setTimeout(()=>d.go(-1),500),ce({type:"success",message:"\u4FDD\u5B58\u6210\u529F"})})})};return pe(()=>{P(),h(),x(),L()}),(s,t)=>{const n=_("el-page-header"),v=_("el-card"),g=_("el-input"),p=_("el-form-item"),Y=_("el-cascader"),m=_("el-button"),V=_("router-link"),U=_("el-option"),q=_("el-select"),M=_("el-switch"),Z=me("loading");return c(),E("div",ve,[e(v,{shadow:"never"},{default:l(()=>[e(n,{content:o(f)?"\u7F16\u8F91\u7BA1\u7406\u5458":"\u65B0\u589E\u7BA1\u7406\u5458",onBack:t[0]||(t[0]=a=>s.$router.back())},null,8,["content"])]),_:1}),_e((c(),C(v,{shadow:"never",class:"m-t-15"},{default:l(()=>[e(o(Fe),{ref_key:"formRefs",ref:r,rules:o(D),class:"ls-form",model:o(u),"label-width":"150px",size:"small"},{default:l(()=>[e(p,{label:"\u8D26\u53F7\uFF1A",prop:"username"},{default:l(()=>[e(g,{modelValue:o(u).username,"onUpdate:modelValue":t[1]||(t[1]=a=>o(u).username=a),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7"},null,8,["modelValue"])]),_:1}),e(p,{label:"\u5934\u50CF\uFF1A"},{default:l(()=>[e(Q,{modelValue:o(u).avatar,"onUpdate:modelValue":t[2]||(t[2]=a=>o(u).avatar=a),limit:1},null,8,["modelValue"]),Be]),_:1}),e(p,{label:"\u540D\u79F0\uFF1A",prop:"nickname"},{default:l(()=>[e(g,{modelValue:o(u).nickname,"onUpdate:modelValue":t[3]||(t[3]=a=>o(u).nickname=a),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(p,{label:"\u5F52\u5C5E\u90E8\u95E8",prop:"deptId"},{default:l(()=>[e(Y,{modelValue:o(u).deptId,"onUpdate:modelValue":t[4]||(t[4]=a=>o(u).deptId=a),options:A.value,props:{value:"id",label:"name",checkStrictly:!0},clearable:""},null,8,["modelValue","options"]),e(V,{to:"/organize/department",target:"_blank"},{default:l(()=>[e(m,{type:"text",style:{margin:"0 10px"}},{default:l(()=>[ge]),_:1})]),_:1}),e(m,{type:"text"},{default:l(()=>[be]),_:1}),e(m,{type:"text",onClick:x},{default:l(()=>[we]),_:1})]),_:1}),e(p,{label:"\u5C97\u4F4D",prop:"postId"},{default:l(()=>[e(q,{modelValue:o(u).postId,"onUpdate:modelValue":t[5]||(t[5]=a=>o(u).postId=a),placeholder:"\u8BF7\u9009\u62E9\u5C97\u4F4D"},{default:l(()=>[(c(!0),E(N,null,S(k.value,(a,y)=>(c(),C(U,{key:y,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e(V,{to:"/organize/post",target:"_blank"},{default:l(()=>[e(m,{type:"text",style:{margin:"0 10px"}},{default:l(()=>[De]),_:1})]),_:1}),e(m,{type:"text"},{default:l(()=>[Ve]),_:1}),e(m,{type:"text",onClick:L},{default:l(()=>[ye]),_:1})]),_:1}),e(p,{label:"\u89D2\u8272\uFF1A",prop:"role"},{default:l(()=>[e(q,{modelValue:o(u).role,"onUpdate:modelValue":t[6]||(t[6]=a=>o(u).role=a),placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272",disabled:o(f)&&o(u).root},{default:l(()=>[(c(!0),E(N,null,S(w.value,(a,y)=>(c(),C(U,{key:y,label:a.name,value:a.id+""},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"]),e(V,{to:"/permission/role",target:"_blank"},{default:l(()=>[e(m,{type:"text",style:{margin:"0 10px"}},{default:l(()=>[Ee]),_:1})]),_:1}),e(m,{type:"text"},{default:l(()=>[Ce]),_:1}),e(m,{type:"text",onClick:h},{default:l(()=>[Ae]),_:1})]),_:1}),e(p,{label:"\u5BC6\u7801\uFF1A",prop:"password"},{default:l(()=>[e(g,{modelValue:o(u).password,"onUpdate:modelValue":t[7]||(t[7]=a=>o(u).password=a),"show-password":"",type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(p,{label:"\u786E\u8BA4\u5BC6\u7801\uFF1A",prop:"password_confirm"},{default:l(()=>[e(g,{modelValue:o(u).password_confirm,"onUpdate:modelValue":t[8]||(t[8]=a=>o(u).password_confirm=a),"show-password":"",type:"password",placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(p,{label:"\u7BA1\u7406\u5458\u72B6\u6001"},{default:l(()=>[e(M,{modelValue:o(u).isDisable,"onUpdate:modelValue":t[9]||(t[9]=a=>o(u).isDisable=a),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1}),e(p,{label:"\u652F\u6301\u591A\u5904\u767B\u5F55"},{default:l(()=>[e(M,{modelValue:o(u).isMultipoint,"onUpdate:modelValue":t[10]||(t[10]=a=>o(u).isMultipoint=a),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1})),[[Z,b.value]]),e(W,null,{default:l(()=>[e(m,{type:"primary",size:"small",onClick:X},{default:l(()=>[ke]),_:1})]),_:1})])}}});export{ze as default};
