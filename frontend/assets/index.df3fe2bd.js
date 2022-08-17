import{y as O,A as J,u as K,B as H,F as Q,G as W,o as X,p as Y,q as Z,J as ee,M as oe}from"./element-plus.33d6376e.js";import{u as te,_ as ne}from"./usePaging.4b232826.js";import{f as k,b as ae}from"./index.80c2a703.js";import{a as le,b as se,d as ie,c as de,e as ue,s as me}from"./code.f1ae5579.js";import{_ as re}from"./data-table.vue_vue_type_script_setup_true_lang.ca93d821.js";import{_ as ce}from"./code-preview.vue_vue_type_script_setup_true_lang.8496e9ff.js";import{d as pe,$ as U,r as _e,a4 as fe,ad as be,o as l,c as h,U as e,L as o,u as b,M as u,K as f,a as F,k as ge,R as we,S as d}from"./@vue.230e89ba.js";import"./@vueuse.88988742.js";import"./dayjs.66926594.js";import"./axios.2d915936.js";import"./@element-plus.739f7923.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.b68d77aa.js";import"./vue-router.c0281831.js";import"./pinia.1d1aade0.js";import"./vue-demi.bfae2336.js";import"./css-color-function.a8f9466d.js";import"./color.903ca10f.js";import"./clone.9d64bb7a.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.a96d99f2.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b3d01323.js";import"./index.4107e0ad.js";import"./vue-clipboard3.91d4fd5f.js";import"./clipboard.c0a70c0c.js";function Ce(E,p="\u6587\u4EF6\u540D\u79F0.zip"){const m=new Blob([E],{type:"application/octet-stream;charset=UTF-8"});console.log(m.text());const _=window.URL.createObjectURL(m),s=document.createElement("a");s.style.display="none",s.href=_,s.setAttribute("download",p),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(_)}const he={class:"code-generation"},Fe=d("\u67E5\u8BE2"),ye=d("\u91CD\u7F6E"),ve={class:"flex"},ke=d(" \u5BFC\u5165\u6570\u636E\u8868 "),Ee=d(" \u5220\u9664 "),De=d(" \u751F\u6210\u4EE3\u7801 "),Te={class:"mt-4"},Ve={class:"flex items-center"},Be=d(" \u9884\u89C8 "),xe=d(" \u7F16\u8F91 "),Ue=d(" \u66F4\u591A "),Ne=d(" \u751F\u6210\u4EE3\u7801 "),Se=d(" \u540C\u6B65 "),$e=d(" \u5220\u9664 "),Ae={class:"flex justify-end mt-4"},wo=pe({__name:"index",setup(E){const p=U({tableName:"",tableComment:""}),m=U({show:!1,loading:!1,code:{}}),{pager:_,getLists:s,resetParams:N,resetPage:S}=te({fetchFun:ue,params:p}),w=_e([]),$=n=>{w.value=n},A=async n=>{await k.confirm("\u786E\u5B9A\u8981\u540C\u6B65\u8868\u7ED3\u6784\uFF1F"),await me({id:n})},D=async n=>{await k.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await le({id:n}),s()},L=async n=>{const t=await se({id:n});m.code=t,m.show=!0},T=async n=>{const t=V(n,0),r=V(n,1);if(t){const C=await ie({tables:t});Ce(C,"likeadmin-curd.zip")}r&&(await de({tables:r}),k.msgSuccess("\u751F\u6210\u6210\u529F"))},V=(n,t)=>n.filter(({genType:r})=>r==t).map(({tableName:r})=>r).join(),P=(n,t)=>{switch(n){case"generate":T([t]);break;case"sync":A(t.id);break;case"delete":D(t.id)}};return s(),(n,t)=>{const r=O,C=J,i=K,R=H,B=Q,y=ae,g=W,j=fe("router-link"),v=X,z=Y,I=Z,M=ee,q=ne,c=be("perms"),G=oe;return l(),h("div",he,[e(B,{class:"!border-none",shadow:"never"},{default:o(()=>[e(R,{class:"mb-[-16px]",model:p,inline:""},{default:o(()=>[e(C,{label:"\u8868\u540D\u79F0"},{default:o(()=>[e(r,{class:"w-56",modelValue:p.tableName,"onUpdate:modelValue":t[0]||(t[0]=a=>p.tableName=a)},null,8,["modelValue"])]),_:1}),e(C,{label:"\u8868\u63CF\u8FF0"},{default:o(()=>[e(r,{class:"w-56",modelValue:p.tableComment,"onUpdate:modelValue":t[1]||(t[1]=a=>p.tableComment=a)},null,8,["modelValue"])]),_:1}),e(C,null,{default:o(()=>[e(i,{type:"primary",onClick:b(S)},{default:o(()=>[Fe]),_:1},8,["onClick"]),e(i,{onClick:b(N)},{default:o(()=>[ye]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),u((l(),f(B,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[F("div",ve,[u((l(),f(re,{class:"inline-block mr-[10px]",onSuccess:b(s)},{default:o(()=>[e(i,{type:"primary"},{icon:o(()=>[e(y,{name:"el-icon-Plus"})]),default:o(()=>[ke]),_:1})]),_:1},8,["onSuccess"])),[[c,["gen:importTable"]]]),u((l(),f(i,{disabled:!w.value.length,onClick:t[2]||(t[2]=a=>D(w.value)),type:"danger"},{icon:o(()=>[e(y,{name:"el-icon-Delete"})]),default:o(()=>[Ee]),_:1},8,["disabled"])),[[c,["gen:delTable"]]]),u((l(),f(i,{disabled:!w.value.length,onClick:t[3]||(t[3]=a=>T(w.value))},{default:o(()=>[De]),_:1},8,["disabled"])),[[c,["gen:genCode","gen:downloadCode"]]])]),F("div",Te,[e(M,{data:b(_).lists,size:"large",onSelectionChange:$},{default:o(()=>[e(g,{type:"selection",width:"55"}),e(g,{label:"\u8868\u540D\u79F0",prop:"tableName","min-width":"180"}),e(g,{label:"\u8868\u63CF\u8FF0",prop:"tableComment","min-width":"180"}),e(g,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime","min-width":"180"}),e(g,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime","min-width":"180"}),e(g,{label:"\u64CD\u4F5C",width:"160",fixed:"right"},{default:o(({row:a})=>[F("div",Ve,[u((l(),f(i,{type:"primary",link:"",onClick:x=>L(a.id)},{default:o(()=>[Be]),_:2},1032,["onClick"])),[[c,["gen:previewCode"]]]),u((l(),f(i,{type:"primary",link:""},{default:o(()=>[e(j,{to:{path:"/dev_tools/code/edit",query:{id:a.id}}},{default:o(()=>[xe]),_:2},1032,["to"])]),_:2},1024)),[[c,["gen:editTable"]]]),u((l(),f(I,{class:"ml-2",onCommand:x=>P(x,a)},{dropdown:o(()=>[e(z,null,{default:o(()=>[u((l(),h("div",null,[e(v,{command:"generate"},{default:o(()=>[e(i,{type:"primary",link:""},{default:o(()=>[Ne]),_:1})]),_:1})])),[[c,["gen:genCode","gen:downloadCode"]]]),u((l(),h("div",null,[e(v,{command:"sync"},{default:o(()=>[e(i,{type:"primary",link:""},{default:o(()=>[Se]),_:1})]),_:1})])),[[c,["gen:syncTable"]]]),u((l(),h("div",null,[e(v,{command:"delete"},{default:o(()=>[e(i,{type:"danger",link:""},{default:o(()=>[$e]),_:1})]),_:1})])),[[c,["gen:delTable"]]])]),_:1})]),default:o(()=>[e(i,{type:"primary",link:""},{default:o(()=>[Ue,e(y,{name:"el-icon-ArrowDown",size:14})]),_:1})]),_:2},1032,["onCommand"])),[[c,["gen:genCode","gen:downloadCode","gen:syncTable","gen:delTable"]]])])]),_:1})]),_:1},8,["data"])]),F("div",Ae,[e(q,{modelValue:b(_),"onUpdate:modelValue":t[4]||(t[4]=a=>ge(_)?_.value=a:null),onChange:b(s)},null,8,["modelValue","onChange"])])]),_:1})),[[G,b(_).loading]]),m.show?(l(),f(ce,{key:0,modelValue:m.show,"onUpdate:modelValue":t[5]||(t[5]=a=>m.show=a),code:m.code},null,8,["modelValue","code"])):we("",!0)])}}});export{wo as default};