import{d as k,r as C,aM as $,bA as w,j as s,l as c,b as S,p as i,aQ as g,e as p,ag as E,w as o,q as d,$ as r,g as y,ac as B}from"./index.1f7eca83.js";const T=k({components:{},props:{title:{type:String,default:""},content:{type:String,default:"\u786E\u8BA4\u8981\u5220\u9664\uFF1F"},confirmButtonText:{type:[String,Boolean],default:"\u786E\u8BA4"},cancelButtonText:{type:[String,Boolean],default:"\u53D6\u6D88"},width:{type:String,default:"400px"},disabled:{type:Boolean,default:!1},async:{type:Boolean,default:!1},clickModalClose:{type:Boolean,default:!0},customClass:{type:String,default:""}},emits:["confirm","cancel"],setup(e,{emit:t}){const l=C(!1),f=a=>{t(a),(!e.async||a==="cancel")&&u()},u=()=>{l.value=!1},m=()=>{e.disabled||(l.value=!0)};return $("visible",l),{visible:l,handleEvent:f,close:u,open:m}}}),V={class:"dialog"},A={class:"dialog-footer"};function D(e,t,l,f,u,m){const a=s("warning-filled"),_=s("el-icon"),v=s("el-button"),b=s("el-dialog");return c(),S("div",V,[i("div",{class:"dialog__trigger",onClick:t[0]||(t[0]=(...n)=>e.open&&e.open(...n))},[g(e.$slots,"trigger",{},void 0,!0)]),p(b,{modelValue:e.visible,"onUpdate:modelValue":t[3]||(t[3]=n=>e.visible=n),"custom-class":e.customClass,"append-to-body":!0,width:e.width,"close-on-click-modal":e.clickModalClose},E({footer:o(()=>[i("div",A,[e.cancelButtonText?(c(),y(v,{key:0,size:"small",onClick:t[1]||(t[1]=n=>e.handleEvent("cancel"))},{default:o(()=>[d(r(e.cancelButtonText),1)]),_:1})):B("",!0),e.confirmButtonText?(c(),y(v,{key:1,size:"small",type:"primary",onClick:t[2]||(t[2]=n=>e.handleEvent("confirm"))},{default:o(()=>[d(r(e.confirmButtonText),1)]),_:1})):B("",!0)])]),default:o(()=>[g(e.$slots,"default",{},()=>[d(r(e.content),1)],!0)]),_:2},[e.title?{name:"title",fn:o(()=>[d(r(e.title),1)])}:{name:"title",fn:o(()=>[i("div",{class:"flex col-center"},[p(_,{size:25,color:e.$variables.color_warning},{default:o(()=>[p(a)]),_:1},8,["color"]),i("span",{class:"m-l-6"},"\u6E29\u99A8\u63D0\u793A")])])}]),1032,["modelValue","custom-class","width","close-on-click-modal"])])}var h=w(T,[["render",D],["__scopeId","data-v-4df00bd3"]]);export{h as P};
