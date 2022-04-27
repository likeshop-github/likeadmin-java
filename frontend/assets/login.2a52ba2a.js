import{d as V,v as f,c as C,V as A,y as E,r,a as K,f as l,a3 as L,g as F,i as n,w as u,E as N,o as $,a6 as w,j as D}from"./vendor.bbaa8c82.js";import{_ as R,u as U,w as y,A as B}from"./index.8fe53ee6.js";const q=V({setup(){const{store:e,router:t,route:b}=U(),_=f(null),g=f(null),i=f(!1),c=f(!1),d=C(()=>e.getters.config),a=A({account:"",password:""}),m={account:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:["blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["blur"]}]},h=()=>{var o;if(!a.password)return(o=_.value)==null?void 0:o.focus();p()},p=()=>{var o;(o=g.value)==null||o.validate(v=>{!v||(c.value=!0,y.set(B,{remember:i.value,account:a.account}),e.dispatch("user/login",a).then(()=>{const{query:{redirect:s}}=b,k=typeof s=="string"?s:"/";N({type:"success",message:"\u767B\u5F55\u6210\u529F"}),t.replace(k)}).catch(s=>{console.log(s)}).finally(()=>{c.value=!1}))})};return E(()=>{const o=y.get(B);o.remember&&(i.value=o.remember,a.account=o.account)}),{config:d,passwordRefs:_,loginFormRefs:g,loginForm:a,loginLoading:c,rules:m,handleEnter:h,handleLogin:p,remAccount:i}}}),x={class:"login flex flex-col"},M={class:"flex-1 flex flex-center"},S={class:"login-card bg-white flex"},T={class:"login-form flex flex-col"},j={class:"f-s-24 f-w-500 text-center m-b-40"},z={class:"m-b-20"},I=D("\u767B\u5F55"),O={class:"login-footer"},G={class:"flex flex-center muted xs m-t-20"},H={class:"m-r-10"},J=["href"];function P(e,t,b,_,g,i){const c=r("avatar"),d=r("el-icon"),a=r("el-input"),m=r("el-form-item"),h=r("lock"),p=r("el-form"),o=r("el-checkbox"),v=r("el-button");return $(),K("div",x,[l("div",M,[l("div",S,[l("div",{class:"login-img",style:L({"background-image":`url(${e.config.webBackdrop})`})},null,4),l("div",T,[l("div",j,F(e.config.webName),1),n(p,{ref:"loginFormRefs",model:e.loginForm,"status-icon":"",rules:e.rules},{default:u(()=>[n(m,{prop:"account"},{default:u(()=>[n(a,{modelValue:e.loginForm.account,"onUpdate:modelValue":t[0]||(t[0]=s=>e.loginForm.account=s),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",onKeyup:w(e.handleEnter,["enter"])},{prepend:u(()=>[n(d,null,{default:u(()=>[n(c)]),_:1})]),_:1},8,["modelValue","onKeyup"])]),_:1}),n(m,{prop:"password"},{default:u(()=>[n(a,{ref:"passwordRefs",modelValue:e.loginForm.password,"onUpdate:modelValue":t[1]||(t[1]=s=>e.loginForm.password=s),"show-password":"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onKeyup:w(e.handleLogin,["enter"])},{prepend:u(()=>[n(d,null,{default:u(()=>[n(h)]),_:1})]),_:1},8,["modelValue","onKeyup"])]),_:1})]),_:1},8,["model","rules"]),l("div",z,[n(o,{modelValue:e.remAccount,"onUpdate:modelValue":t[2]||(t[2]=s=>e.remAccount=s),label:"\u8BB0\u4F4F\u8D26\u53F7"},null,8,["modelValue"])]),n(v,{type:"primary",loading:e.loginLoading,onClick:e.handleLogin},{default:u(()=>[I]),_:1},8,["loading","onClick"])])])]),l("div",O,[l("div",G,[l("span",H,F(e.config.copyright_info),1),l("a",{class:"link muted",href:e.config.icp_link,target:"_blank"},F(e.config.icp_number),9,J)])])])}var X=R(q,[["render",P],["__scopeId","data-v-251a09a4"]]);export{X as default};
