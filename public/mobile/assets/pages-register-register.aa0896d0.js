import{d as e,z as a,u as s,A as o,m as t,o as l,c as r,w as u,b as d,g as m,l as p,v as n,h as c,ai as i,r as f,a as _,i as b,k as x}from"./index.fe40b928.js";import{a as w,_ as g}from"./u-form-item.c826576b.js";import{_ as h}from"./u-form.0d3f4d0a.js";import{_ as v}from"./u-checkbox.5aaf41a4.js";import{_ as V}from"./u-button.027407c6.js";import{r as y}from"./account.fe20c01d.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.ecff0a89.js";import"./emitter.5b880544.js";var k=j(e({__name:"register",setup(e){const j=a(!1),k=s(),$=o((()=>1==k.getLoginConfig.openAgreement)),B=t({username:"",password:"",password2:""}),C=async()=>!j.value&&$.value?uni.$u.toast("请勾选已阅读并同意《服务协议》和《隐私协议》"):B.username?B.password?B.password2?B.password!=B.password2?uni.$u.toast("两次输入的密码不一致"):(await y(B),uni.$u.toast("注册成功"),void setTimeout((()=>{i()}),1e3)):uni.$u.toast("请输入确认密码"):uni.$u.toast("请输入密码"):uni.$u.toast("请输入账号");return(e,a)=>{const s=f(_("u-input"),w),o=f(_("u-form-item"),g),t=f(_("u-form"),h),i=b,y=x,k=f(_("u-checkbox"),v),U=f(_("u-button"),V);return l(),r(y,{class:"register bg-white min-h-full flex flex-col items-center px-[40rpx] pt-[40rpx] box-border"},{default:u((()=>[d(y,{class:"w-full"},{default:u((()=>[d(t,{borderBottom:"","label-width":150},{default:u((()=>[d(o,{label:"创建账号",borderBottom:""},{default:u((()=>[d(s,{class:"flex-1",modelValue:B.username,"onUpdate:modelValue":a[0]||(a[0]=e=>B.username=e),border:!1,placeholder:"请输入账号"},null,8,["modelValue"])])),_:1}),d(o,{label:"设置密码",borderBottom:""},{default:u((()=>[d(s,{class:"flex-1",type:"password",modelValue:B.password,"onUpdate:modelValue":a[1]||(a[1]=e=>B.password=e),placeholder:"6-20位数字+字母或符号组合",border:!1},null,8,["modelValue"])])),_:1}),d(o,{label:"确认密码",borderBottom:""},{default:u((()=>[d(s,{class:"flex-1",type:"password",modelValue:B.password2,"onUpdate:modelValue":a[2]||(a[2]=e=>B.password2=e),placeholder:"请确认密码",border:!1},null,8,["modelValue"])])),_:1})])),_:1}),m($)?(l(),r(y,{key:0,class:"mt-[40rpx]"},{default:u((()=>[d(k,{modelValue:j.value,"onUpdate:modelValue":a[5]||(a[5]=e=>j.value=e),shape:"circle"},{default:u((()=>[d(y,{class:"text-xs flex"},{default:u((()=>[p(" 已阅读并同意 "),d(y,{onClick:a[3]||(a[3]=n((()=>{}),["stop"]))},{default:u((()=>[d(i,{class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=service"},{default:u((()=>[p(" 《服务协议》 ")])),_:1})])),_:1}),p(" 和 "),d(y,{onClick:a[4]||(a[4]=n((()=>{}),["stop"]))},{default:u((()=>[d(i,{class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=privacy"},{default:u((()=>[p(" 《隐私协议》 ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})):c("v-if",!0),d(y,{class:"mt-[60rpx]"},{default:u((()=>[d(U,{type:"primary",shape:"circle",onClick:C},{default:u((()=>[p(" 注册 ")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-5a57eecc"]]);export{k as default};