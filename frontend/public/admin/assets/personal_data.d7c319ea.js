var V=Object.defineProperty;var F=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var v=(t,l,o)=>l in t?V(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o,w=(t,l)=>{for(var o in l||(l={}))y.call(l,o)&&v(t,o,l[o]);if(F)for(var o of F(l))D.call(l,o)&&v(t,o,l[o]);return t};import{M as b}from"./index.7a292c55.js";import{F as h}from"./index.47065b61.js";import{u as k,j as U,k as M}from"./index.9d3a8519.js";import{d as x,q as _,r as S,o as q,a as i,b as z,c as I,f as a,w as s,a0 as N,m as R,E as n}from"./vendor.d574ef89.js";import"./index.9e1a91f5.js";import"./index.30f51e6f.js";const j={class:"personal-data"},T=R("\u4FDD\u5B58"),P=x({setup(t){const{store:l}=k(),o=_(),e=_({avatar:"",username:"",nickname:"",password_old:"",password:"",password_confirm:""}),B=S({avatar:[{required:!0,message:"\u5934\u50CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:["change"]}],nickname:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]}),f=async()=>{let d=await U();e.value=d==null?void 0:d.user},c=async()=>{if(e.value.password_old||e.value.password||e.value.password_confirm){if(!e.value.password_old)return n({type:"error",message:"\u8BF7\u8F93\u5165\u5F53\u524D\u5BC6\u7801"});if(!e.value.password)return n({type:"error",message:"\u8BF7\u8F93\u5165\u65B0\u7684\u5BC6\u7801"});if(!e.value.password_confirm)return n({type:"error",message:"\u8BF7\u8F93\u5165\u786E\u5B9A\u5BC6\u7801"});if(e.value.password_confirm!=e.value.password)return n({type:"error",message:"\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u6837"})}if(e.value.password_old&&e.value.password&&e.value.password_confirm){if(e.value.password_old.length<6||e.value.password_old.length>32)return n({type:"error",message:"\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4"});if(e.value.password.length<6||e.value.password.length>32)return n({type:"error",message:"\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4"});if(e.value.password_confirm.length<6||e.value.password_confirm.length>32)return n({type:"error",message:"\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4"})}await M(w({},e.value)),f(),l.dispatch("user/getUser")},E=d=>{!d||d.validate(u=>{if(!u)return!1;c()})};return q(()=>{f()}),(d,u)=>{const p=i("el-form-item"),m=i("el-input"),A=i("el-form"),C=i("el-card"),g=i("el-button");return z(),I("div",j,[a(C,{class:"m-t-15",shadow:"never"},{default:s(()=>[a(A,{ref_key:"formRefs",ref:o,class:"ls-form",model:e.value,rules:N(B),"label-width":"150px",size:"small"},{default:s(()=>[a(p,{label:"\u5934\u50CF\uFF1A",prop:"avatar"},{default:s(()=>[a(b,{modelValue:e.value.avatar,"onUpdate:modelValue":u[0]||(u[0]=r=>e.value.avatar=r),limit:1},null,8,["modelValue"])]),_:1}),a(p,{label:"\u8D26\u53F7\uFF1A",prop:"username"},{default:s(()=>[a(m,{modelValue:e.value.username,"onUpdate:modelValue":u[1]||(u[1]=r=>e.value.username=r),placeholder:"",disabled:""},null,8,["modelValue"])]),_:1}),a(p,{label:"\u540D\u79F0\uFF1A",prop:"nickname"},{default:s(()=>[a(m,{modelValue:e.value.nickname,"onUpdate:modelValue":u[2]||(u[2]=r=>e.value.nickname=r),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),a(p,{label:"\u5F53\u524D\u5BC6\u7801\uFF1A",prop:"password_old"},{default:s(()=>[a(m,{modelValue:e.value.password_old,"onUpdate:modelValue":u[3]||(u[3]=r=>e.value.password_old=r),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),a(p,{label:"\u65B0\u7684\u5BC6\u7801\uFF1A",prop:"password"},{default:s(()=>[a(m,{modelValue:e.value.password,"onUpdate:modelValue":u[4]||(u[4]=r=>e.value.password=r),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),a(p,{label:"\u786E\u5B9A\u5BC6\u7801\uFF1A",prop:"password_confirm"},{default:s(()=>[a(m,{modelValue:e.value.password_confirm,"onUpdate:modelValue":u[5]||(u[5]=r=>e.value.password_confirm=r),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),a(h,null,{default:s(()=>[a(g,{type:"primary",size:"small",onClick:u[6]||(u[6]=r=>E(o.value))},{default:s(()=>[T]),_:1})]),_:1})])}}});export{P as default};
