import{Z as q,y as z,A as G,O as H,P as J,u as Z,B as K,G as Q,H as W,I as X,J as Y}from"./element-plus.f93fd622.js";import{f as T,b as ee}from"./index.ab5c8d8d.js";import{_ as te}from"./edit.vue_vue_type_script_setup_true_lang.85afe771.js";import{d as oe,e as ae}from"./department.9406e6bc.js";import{d as le,s as b,r as w,a0 as se,j as ne,n as F,ag as ie,o as r,c as ue,V as e,M as t,a as re,O as f,L as d,T as n,U as pe,S as $}from"./@vue.cab01781.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.66926594.js";import"./axios.2d915936.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.b68d77aa.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.a8f9466d.js";import"./color.903ca10f.js";import"./clone.9d64bb7a.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.a96d99f2.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";import"./index.ea69f3d7.js";import"./useDictOptions.254b0f8d.js";const de={class:"dept-lists"},me=n("\u67E5\u8BE2"),ce=n("\u91CD\u7F6E"),_e=n(" \u65B0\u589E "),fe=n(" \u5C55\u5F00/\u6298\u53E0 "),ve=n(" \u65B0\u589E "),Ee=n(" \u7F16\u8F91 "),ye=n(" \u5220\u9664 "),Xe=le({__name:"index",setup(ke){const g=b(),m=b(),B=b();let y=!1;const k=w(!1),C=w([]),p=se({isStop:"",name:""}),v=w(!1),c=async()=>{k.value=!0,C.value=await oe(p),k.value=!1},L=()=>{var a;(a=B.value)==null||a.resetFields(),c()},x=async a=>{var o,s;v.value=!0,await F(),a&&((o=m.value)==null||o.setFormData({pid:a})),(s=m.value)==null||s.open("add")},N=async a=>{var o,s;v.value=!0,await F(),(o=m.value)==null||o.open("edit"),(s=m.value)==null||s.getDetail(a)},P=async a=>{await T.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await ae({id:a}),T.msgSuccess("\u5220\u9664\u6210\u529F"),c()},S=()=>{y=!y,D(C.value,y)},D=(a,o=!0)=>{var s;for(const i in a)(s=g.value)==null||s.toggleRowExpansion(a[i],o),a[i].children&&D(a[i].children,o)};return ne(async()=>{await c(),F(()=>{S()})}),(a,o)=>{const s=z,i=G,h=H,A=J,u=Z,I=K,V=Q,O=ee,_=W,U=q,M=X,E=ie("perms"),j=Y;return r(),ue("div",de,[e(V,{class:"!border-none",shadow:"never"},{default:t(()=>[e(I,{ref_key:"formRef",ref:B,class:"mb-[-16px]",model:p,inline:!0},{default:t(()=>[e(i,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name"},{default:t(()=>[e(s,{class:"w-56",modelValue:p.name,"onUpdate:modelValue":o[0]||(o[0]=l=>p.name=l)},null,8,["modelValue"])]),_:1}),e(i,{label:"\u90E8\u95E8\u72B6\u6001",prop:"isStop"},{default:t(()=>[e(A,{class:"w-56",modelValue:p.isStop,"onUpdate:modelValue":o[1]||(o[1]=l=>p.isStop=l)},{default:t(()=>[e(h,{label:"\u5168\u90E8",value:""}),e(h,{label:"\u6B63\u5E38",value:"0"}),e(h,{label:"\u505C\u7528",value:"1"})]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:t(()=>[e(u,{type:"primary",onClick:c},{default:t(()=>[me]),_:1}),e(u,{onClick:L},{default:t(()=>[ce]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(V,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[re("div",null,[f((r(),d(u,{type:"primary",onClick:o[2]||(o[2]=l=>x())},{icon:t(()=>[e(O,{name:"el-icon-Plus"})]),default:t(()=>[_e]),_:1})),[[E,["system:dept:add"]]]),e(u,{onClick:S},{default:t(()=>[fe]),_:1})]),f((r(),d(M,{ref_key:"tableRef",ref:g,class:"mt-4",size:"large",data:C.value,"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(_,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name","min-width":"150","show-overflow-tooltip":""}),e(_,{label:"\u90E8\u95E8\u72B6\u6001",prop:"isStop","min-width":"100"},{default:t(({row:l})=>[e(U,{class:"ml-2",type:l.isStop?"danger":""},{default:t(()=>[n(pe(l.isStop?"\u505C\u7528":"\u6B63\u5E38"),1)]),_:2},1032,["type"])]),_:1}),e(_,{label:"\u6392\u5E8F",prop:"sort","min-width":"100"}),e(_,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime","min-width":"180"}),e(_,{label:"\u64CD\u4F5C",width:"160",fixed:"right"},{default:t(({row:l})=>[f((r(),d(u,{type:"primary",link:"",onClick:R=>x(l.id)},{default:t(()=>[ve]),_:2},1032,["onClick"])),[[E,["system:dept:add"]]]),f((r(),d(u,{type:"primary",link:"",onClick:R=>N(l)},{default:t(()=>[Ee]),_:2},1032,["onClick"])),[[E,["system:dept:edit"]]]),l.pid!==0?f((r(),d(u,{key:0,type:"danger",link:"",onClick:R=>P(l.id)},{default:t(()=>[ye]),_:2},1032,["onClick"])),[[E,["system:dept:del"]]]):$("",!0)]),_:1})]),_:1},8,["data"])),[[j,k.value]])]),_:1}),v.value?(r(),d(te,{key:0,ref_key:"editRef",ref:m,onSuccess:c,onClose:o[3]||(o[3]=l=>v.value=!1)},null,512)):$("",!0)])}}});export{Xe as default};
