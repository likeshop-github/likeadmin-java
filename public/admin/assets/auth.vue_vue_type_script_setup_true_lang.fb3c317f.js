import{B as K,V as S,D as T,E as N,F as I}from"./element-plus.f5eb07a0.js";import{a as L,b as M}from"./role.af1a3999.js";import{m as P}from"./menu.d19d4b04.js";import{P as j}from"./index.f69f13bd.js";import{f as q,t as H}from"./index.1256601b.js";import{d as O,s as i,r as u,a0 as U,o as z,c as G,V as t,M as c,a as _,n as v}from"./@vue.cab01781.js";const J={class:"edit-popup"},te=O({__name:"auth",emits:["success","close"],setup(Q,{expose:k,emit:p}){const o=i(),f=i(),r=i(),y=u(!1),d=u(!0),h=u([]),m=u([]),l=U({id:"",name:"",remark:"",sort:0,isDisable:0,menus:[]}),C={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]},b=async()=>{const e=await P();m.value=e,h.value=H(e)},x=()=>{var s,n;const e=(s=o.value)==null?void 0:s.getCheckedKeys(),a=(n=o.value)==null?void 0:n.getHalfCheckedKeys();return e==null||e.unshift.apply(e,a),e},E=()=>{l.menus.forEach(e=>{v(()=>{var a;(a=o.value)==null||a.setChecked(e,!0,!1)})})},F=e=>{const a=m.value;for(let s=0;s<a.length;s++)o.value.store.nodesMap[a[s].id].expanded=e},g=e=>{var a,s;e?(a=o.value)==null||a.setCheckedKeys(h.value.map(n=>n.id)):(s=o.value)==null||s.setCheckedKeys([])},D=async()=>{var e,a;await((e=f.value)==null?void 0:e.validate()),l.menus=x(),await L({...l,menuIds:l.menus.join()}),(a=r.value)==null||a.close(),q.msgSuccess("\u64CD\u4F5C\u6210\u529F"),p("success")},w=()=>{p("close")};return k({open:()=>{var e;(e=r.value)==null||e.open()},setFormData:async e=>{await b();const a=await M({id:e.id});for(const s in l)a[s]!=null&&a[s]!=null&&(l[s]=a[s]);v(()=>{E()})}}),(e,a)=>{const s=K,n=S,B=T,R=N,V=I;return z(),G("div",J,[t(j,{ref_key:"popupRef",ref:r,title:"\u6743\u9650\u8BBE\u7F6E",async:!0,width:"550px",onConfirm:D,onClose:w},{default:c(()=>[t(V,{class:"ls-form",ref_key:"formRef",ref:f,rules:C,model:l,"label-width":"60px"},{default:c(()=>[t(R,{class:"h-[400px] sm:h-[600px]"},{default:c(()=>[t(B,{label:"\u6743\u9650",prop:"menus"},{default:c(()=>[_("div",null,[t(s,{label:"\u5C55\u5F00/\u6298\u53E0",onChange:F}),t(s,{label:"\u5168\u9009/\u4E0D\u5168\u9009",onChange:g}),t(s,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=A=>d.value=A),label:"\u7236\u5B50\u8054\u52A8"},null,8,["modelValue"]),_("div",null,[t(n,{ref_key:"treeRef",ref:o,data:m.value,props:{label:"menuName",children:"children"},"check-strictly":!d.value,"node-key":"id","default-expand-all":y.value,"show-checkbox":""},null,8,["data","check-strictly","default-expand-all"])])])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},512)])}}});export{te as _};