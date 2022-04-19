import{m as b}from"./setting.113aa7cb.js";import{d as D,r as h,q as r,o as B,a as m,b as C,c as E,e as u,f as l,w as e,t,a0 as w}from"./vendor.d574ef89.js";import"./index.9d3a8519.js";const x={class:"system-environment"},A={class:"flex"},y=u("div",null,"CPU",-1),N={class:"m-t-15"},g=u("div",null,"\u5185\u5B58",-1),k={class:"m-t-15"},z=u("div",null,"\u670D\u52A1\u5668\u4FE1\u606F",-1),I={class:"m-t-15"},G=u("div",null,"Java\u865A\u62DF\u673A\u4FE1\u606F",-1),J={class:"m-t-15"},S=u("div",null,"\u786C\u76D8\u72B6\u6001",-1),T={class:"m-t-15"},U=D({setup(j){const F=h({disk:[]}),i=r({}),_=r({}),d=r({}),o=r({}),f=()=>{b().then(s=>{console.log("res",s),i.value=s.cpu,_.value=s.mem,d.value=s.sys,o.value=s.jvm,F.disk=s.disk}).catch(s=>{console.log("err",s)})};return B(()=>{f()}),(s,P)=>{const a=m("el-form-item"),c=m("el-form"),v=m("el-card"),n=m("el-table-column"),p=m("el-table");return C(),E("div",x,[u("div",A,[l(v,{class:"flex-1 m-r-15",shadow:"never"},{default:e(()=>[y,u("div",N,[l(c,{inline:!0,model:i.value,"label-width":"110px",size:"small"},{default:e(()=>[l(a,{label:"\u6838\u5FC3\u6570"},{default:e(()=>[u("div",null,t(i.value.cpuNum||"-"),1)]),_:1}),l(a,{label:"\u7528\u6237\u4F7F\u7528\u7387"},{default:e(()=>[u("div",null,t(i.value.used||"-")+"%",1)]),_:1}),l(a,{label:"\u7CFB\u7EDF\u4F7F\u7528\u7387"},{default:e(()=>[u("div",null,t(i.value.sys||"-")+"%",1)]),_:1}),l(a,{label:"\u5F53\u524D\u7A7A\u95F2\u7387"},{default:e(()=>[u("div",null,t(i.value.free||"-")+"%",1)]),_:1})]),_:1},8,["model"])])]),_:1}),l(v,{class:"flex-1",shadow:"never"},{default:e(()=>[g,u("div",k,[l(c,{inline:!0,model:_.value,"label-width":"110px",size:"small"},{default:e(()=>[l(a,{label:"\u603B\u5185\u5B58"},{default:e(()=>[u("div",null,t(_.value.total||"-")+"G",1)]),_:1}),l(a,{label:"\u5DF2\u7528\u5185\u5B58"},{default:e(()=>[u("div",null,t(_.value.used||"-")+"G",1)]),_:1}),l(a,{label:"\u5269\u4F59\u5185\u5B58"},{default:e(()=>[u("div",null,t(_.value.free||"-")+"G",1)]),_:1}),l(a,{label:"\u4F7F\u7528\u7387"},{default:e(()=>[u("div",null,t(_.value.usage||"-")+"%",1)]),_:1})]),_:1},8,["model"])])]),_:1})]),l(v,{shadow:"never",class:"m-t-15"},{default:e(()=>[z,u("div",I,[l(c,{inline:!0,model:d.value,"label-width":"160px",size:"small"},{default:e(()=>[l(a,{label:"\u670D\u52A1\u5668\u540D\u79F0"},{default:e(()=>[u("div",null,t(d.value.computerName||"-"),1)]),_:1}),l(a,{label:"\u670D\u52A1\u5668IP"},{default:e(()=>[u("div",null,t(d.value.computerIp||"-"),1)]),_:1}),l(a,{label:"\u64CD\u4F5C\u7CFB\u7EDF"},{default:e(()=>[u("div",null,t(d.value.osName||"-"),1)]),_:1}),l(a,{label:"\u7CFB\u7EDF\u67B6\u6784"},{default:e(()=>[u("div",null,t(d.value.osArch||"-"),1)]),_:1}),l(a,{label:"\u9879\u76EE\u8DEF\u5F84"},{default:e(()=>[u("div",null,t(d.value.userDir||"-"),1)]),_:1})]),_:1},8,["model"])])]),_:1}),l(v,{shadow:"never",class:"m-t-15"},{default:e(()=>[G,u("div",J,[l(c,{inline:!0,model:o.value,"label-width":"120px",size:"small"},{default:e(()=>[l(a,{label:"Java\u540D\u79F0"},{default:e(()=>[u("div",null,t(o.value.name||"-"),1)]),_:1}),l(a,{label:"\u542F\u52A8\u65F6\u95F4"},{default:e(()=>[u("div",null,t(o.value.startTime||"-"),1)]),_:1}),l(a,{label:"\u5B89\u88C5\u8DEF\u5F84"},{default:e(()=>[u("div",null,t(o.value.home||"-"),1)]),_:1}),l(a,{label:"\u8FD0\u884C\u53C2\u6570"},{default:e(()=>[u("div",null,t(o.value.inputArgs||"-"),1)]),_:1}),l(a,{label:"Java\u7248\u672C"},{default:e(()=>[u("div",null,t(o.value.version||"-"),1)]),_:1}),l(a,{label:"\u8FD0\u884C\u65F6\u957F"},{default:e(()=>[u("div",null,t(o.value.runTime||"-"),1)]),_:1})]),_:1},8,["model"])])]),_:1}),l(v,{shadow:"never",class:"m-t-15"},{default:e(()=>[S,u("div",T,[l(p,{data:w(F).disk,size:"medium"},{default:e(()=>[l(n,{prop:"dirName",label:"\u76D8\u7B26\u8DEF\u5F84"}),l(n,{prop:"sysTypeName",label:"\u6587\u4EF6\u7CFB\u7EDF"}),l(n,{prop:"typeName",label:"\u76D8\u7B26\u7C7B\u578B"}),l(n,{prop:"total",label:"\u603B\u5927\u5C0F"}),l(n,{prop:"free",label:"\u53EF\u4EE5\u5927\u5C0F"}),l(n,{prop:"used",label:"\u5DF2\u7528\u5927\u5C0F"}),l(n,{prop:"usage",label:"\u5DF2\u7528\u767E\u5206\u6BD4"})]),_:1},8,["data"])])]),_:1})])}}});export{U as default};
