import{_ as E}from"./index.3fc6ee54.js";import{y as B,A as F,B as U,F as k,u as D}from"./element-plus.33d6376e.js";import{T as A,E as P}from"./@wangeditor.a814ca05.js";import{M as N}from"./picker.52c26ba6.js";import{i as b}from"./index.56860a69.js";import{d as C,s as x,e as y,E as R,o as g,c as w,U as t,u as d,k as S,_ as I,r as M,ad as T,a as V,L as a,M as K,K as O,V as z,S as H}from"./@vue.230e89ba.js";import{c as L,d as $}from"./website.40edebd9.js";import"./@vueuse.88988742.js";import"./dayjs.66926594.js";import"./axios.2d915936.js";import"./@element-plus.739f7923.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.cf4bbb26.js";import"./index.9ced5eb4.js";import"./usePaging.4b232826.js";import"./index.8851edf5.js";import"./index.vue_vue_type_script_setup_true_lang.b3f5bb6c.js";import"./vue3-video-play.1b377718.js";import"./vuedraggable.611a2338.js";import"./vue.1b105d76.js";import"./sortablejs.cd7e2c7e.js";import"./lodash.b68d77aa.js";import"./vue-router.c0281831.js";import"./pinia.1d1aade0.js";import"./vue-demi.bfae2336.js";import"./css-color-function.a8f9466d.js";import"./color.903ca10f.js";import"./clone.9d64bb7a.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.a96d99f2.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b3d01323.js";const j=C({__name:"index",props:{modelValue:{default:""},mode:{default:"simple"},height:{default:"100%"},width:{default:"auto"},toolbarConfig:{default:()=>({excludeKeys:["fullScreen"]})}},emits:["update:modelValue"],setup(i,{emit:e}){const m=i,u=x(),v=x();let l;const p={MENU_CONF:{uploadImage:{customBrowseAndUpload(o){var r;console.log(o),(r=v.value)==null||r.showPopup(-1),l=o}}}},c=y(()=>({height:b(m.height),width:b(m.width)})),s=y({get(){return m.modelValue},set(o){e("update:modelValue",o)}}),f=o=>{o.forEach(r=>{l(r)})};R(()=>{const o=u.value;o!=null&&o.destroy()});const _=o=>{u.value=o};return(o,r)=>(g(),w("div",{class:"border border-br flex flex-col",style:I(d(c))},[t(d(A),{class:"border-b border-br",editor:d(u),defaultConfig:i.toolbarConfig,mode:i.mode},null,8,["editor","defaultConfig","mode"]),t(d(P),{class:"overflow-y-auto flex-1",modelValue:d(s),"onUpdate:modelValue":r[0]||(r[0]=h=>S(s)?s.value=h:null),defaultConfig:p,mode:i.mode,onOnCreated:_},null,8,["modelValue","mode"]),t(N,{ref_key:"materialPickerRef",ref:v,limit:-1,"hidden-upload":"",onChange:f},null,512)],4))}}),q={class:"xl:flex"},G=V("span",{class:"font-medium"},"\u670D\u52A1\u534F\u8BAE",-1),J=V("span",{class:"font-medium"},"\u9690\u79C1\u534F\u8BAE",-1),Q=H("\u4FDD\u5B58"),Me=C({__name:"protocol",setup(i){const e=M({privacy:{content:"",name:""},service:{content:"",name:""}}),m=async()=>{e.value=await L()},u=async()=>{await $(e.value),m()};return m(),(v,l)=>{const p=B,c=F,s=U,f=j,_=k,o=D,r=E,h=T("perms");return g(),w(z,null,[V("div",q,[t(_,{class:"!border-none flex-1 xl:mr-4 mb-4",shadow:"never"},{header:a(()=>[G]),default:a(()=>[t(s,{model:e.value,"label-width":"80px"},{default:a(()=>[t(c,{label:"\u534F\u8BAE\u540D\u79F0"},{default:a(()=>[t(p,{modelValue:e.value.service.name,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value.service.name=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),t(f,{class:"mb-10",modelValue:e.value.service.content,"onUpdate:modelValue":l[1]||(l[1]=n=>e.value.service.content=n),height:"500"},null,8,["modelValue"])]),_:1}),t(_,{class:"!border-none flex-1 mb-4",shadow:"never"},{header:a(()=>[J]),default:a(()=>[t(s,{model:e.value,"label-width":"80px"},{default:a(()=>[t(c,{label:"\u534F\u8BAE\u540D\u79F0"},{default:a(()=>[t(p,{modelValue:e.value.privacy.name,"onUpdate:modelValue":l[2]||(l[2]=n=>e.value.privacy.name=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),t(f,{class:"mb-10",modelValue:e.value.privacy.content,"onUpdate:modelValue":l[3]||(l[3]=n=>e.value.privacy.content=n),height:"500"},null,8,["modelValue"])]),_:1})]),K((g(),O(r,null,{default:a(()=>[t(o,{type:"primary",onClick:u},{default:a(()=>[Q]),_:1})]),_:1})),[[h,["setting:protocol:save"]]])],64)}}});export{Me as default};