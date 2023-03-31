import{d as a,z as e,aR as t,m as s,A as r,W as l,o as u,e as i,h as o,b as c,w as d,g as n,l as m,t as _,c as f,F as p,J as g,ai as x,r as y,a as h,y as v,k as b}from"./index.108434b2.js";import{g as w,_ as j,a as k}from"./pay.006dac2e.js";import{_ as R}from"./u-image.15c7ce71.js";import{_ as O}from"./u-button.b8216aa1.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.cfc830b8.js";var C=A(a({__name:"payment_result",setup(a){const A={succeed:{text:"支付成功",image:"/static/images/payment/icon_succeed.png"},waiting:{text:"等待支付",image:"/static/images/payment/icon_waiting.png"}},C=e(t.LOADING),E=e({id:"",from:""}),I=s({order:{}}),L=r((()=>{const a=!!I.pay_status;return A[a?"succeed":"waiting"]})),N=()=>{g({url:"/pages/index/index"})},z=()=>{if("recharge"===E.value.from)x()};return l((async a=>{try{if(!a.id)throw new Error("订单不存在");E.value=a,await new Promise(((a,e)=>{w({order_id:E.value.id,from:E.value.from}).then((e=>{Object.assign(I,e),a(e)})).catch((a=>{e(a)}))})),C.value=t.NORMAL}catch(e){console.log(e),C.value=t.ERROR}})),(a,e)=>{const t=y(h("u-empty"),j),s=y(h("u-image"),R),r=v,l=b,g=y(h("u-button"),O),x=y(h("page-status"),k);return u(),i(p,null,[o(" 页面状态 "),c(x,{status:C.value},{error:d((()=>[c(t,{text:"订单不存在",mode:"order"})])),default:d((()=>[c(l,{class:"payment-result p-[20rpx]"},{default:d((()=>[c(l,{class:"result bg-white p-[20rpx] rounded-md"},{default:d((()=>[c(l,{class:"flex flex-col items-center my-[40rpx]"},{default:d((()=>[o(" 支付状态图片 "),c(s,{class:"status-image",src:n(L).image,width:"100",height:"100",shape:"circle"},null,8,["src"]),o(" 支付状态文字 "),c(r,{class:"text-2xl font-medium mt-[20rpx]"},{default:d((()=>[m(_(n(L).text),1)])),_:1}),c(l,{class:"text-3xl font-medium mt-[20rpx]"},{default:d((()=>[m(" ¥ "+_(I.order.order_amount),1)])),_:1})])),_:1}),o(" 支付信息 "),c(l,{class:"result-info"},{default:d((()=>[c(l,{class:"result-info__item"},{default:d((()=>[c(r,null,{default:d((()=>[m("订单编号")])),_:1}),c(r,null,{default:d((()=>[m(_(I.order.order_sn),1)])),_:1})])),_:1}),c(l,{class:"result-info__item"},{default:d((()=>[c(r,null,{default:d((()=>[m("付款时间")])),_:1}),c(r,null,{default:d((()=>[m(_(I.order.pay_time),1)])),_:1})])),_:1}),c(l,{class:"result-info__item"},{default:d((()=>[c(r,null,{default:d((()=>[m("支付方式")])),_:1}),I.pay_status?(u(),f(r,{key:0},{default:d((()=>[m(_(I.order.pay_way||"-"),1)])),_:1})):(u(),f(r,{key:1},{default:d((()=>[m("未支付")])),_:1}))])),_:1})])),_:1})])),_:1}),c(l,{class:"mt-[40rpx]"},{default:d((()=>[c(l,{class:"mb-[20rpx]"},{default:d((()=>["recharge"==E.value.from?(u(),f(g,{key:0,type:"primary",shape:"circle","hover-class":"none",onClick:z},{default:d((()=>[m(" 继续充值 ")])),_:1})):o("v-if",!0)])),_:1}),c(l,{class:"mb-[20rpx]"},{default:d((()=>[c(g,{type:"primary",plain:"",shape:"circle","hover-class":"none",onClick:N},{default:d((()=>[m(" 返回首页 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["status"])],2112)}}}),[["__scopeId","data-v-424b78a4"]]);export{C as default};
