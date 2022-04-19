import{o as C}from"./setting.113aa7cb.js";import{_ as E}from"./index.9d3a8519.js";import{d as b,q as m,r as A,o as B,a as d,b as D,c as y,f as a,w as u,e,t as l,m as p,a0 as v,p as w,h as x}from"./vendor.d574ef89.js";const _=i=>(w("data-v-11713f03"),i=i(),x(),i),g={class:"cache"},S=_(()=>e("div",{class:"m-b-15"},"\u57FA\u672C\u4FE1\u606F",-1)),O=_(()=>e("span",null,"/",-1)),k={class:"m-t-15 flex"},z=_(()=>e("div",{class:"p-b-60"},"\u547D\u4EE4\u7EDF\u8BA1",-1)),I={class:"statistical-chart"},N=_(()=>e("div",{class:"p-b-40"},"\u5185\u5B58\u4FE1\u606F",-1)),V={class:"statistical-chart"},P=b({setup(i){m([{content:"\u7CFB\u7EDF\u7F13\u5B58",desc:"\u7CFB\u7EDF\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u5404\u7C7B\u7F13\u5B58\u6570\u636E"}]);const t=m({}),n=A({commandChartOption:{tooltip:{trigger:"item"},series:[{label:{show:!0},labelLine:{show:!0},type:"pie",radius:"85%",color:["#0D47A1","#1565C0","#1976D2","#1E88E5","#2196F3","#42A5F5","#64B5F6","#90CAF9","#BBDEFB","#E3F2FD","#CAF0F8","#ADE8F4","#90E0EF","#48CAE4","#00B4D8","#0096C7","#0077B6","#023E8A","#03045E","#8ecae6","#98c1d9","#D9ED92","#B5E48C","#99D98C","#76C893","#52B69A","#34A0A4","#168AAD","#1A759F","#1E6091","#184E77","#457b9d"],data:[{value:"",name:""}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},memoryChartOption:{tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{name:"Pressure",type:"gauge",radius:"100%",detail:{formatter:"{value}"},data:[{value:"",name:"\u5185\u5B58\u6D88\u8017"}]}]}}),F=async()=>{C({}).then(o=>{console.log(o),t.value=o.info,t.value.dbSize=o.dbSize||"",n.commandChartOption.series[0].data=o.commandStats,n.memoryChartOption.series[0].data=o.info.used_memory_human,console.log(n.memoryChartOption.series[0].data,"-------------------------+")}).catch(o=>{console.log("err",o)})};return B(()=>{F()}),(o,R)=>{const h=d("el-alert"),c=d("el-card"),s=d("el-form-item"),f=d("el-form"),r=d("v-chart");return D(),y("div",g,[a(c,{shadow:"never"},{default:u(()=>[a(h,{class:"xxl",title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u7BA1\u7406\u7CFB\u7EDF\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u7F13\u5B58",type:"primary",closable:!1,"show-icon":""})]),_:1}),a(c,{class:"m-t-15",shadow:"never"},{default:u(()=>[e("div",null,[S,a(f,{inline:!0,model:t.value,"label-width":"110px",size:"small"},{default:u(()=>[a(s,{label:"Redis\u7248\u672C"},{default:u(()=>[e("div",null,l(t.value.redis_version||"-"),1)]),_:1}),a(s,{label:"\u8FD0\u884C\u6A21\u5F0F"},{default:u(()=>[e("div",null,l(t.value.redis_mode||"-"),1)]),_:1}),a(s,{label:"\u7AEF\u53E3"},{default:u(()=>[e("div",null,l(t.value.tcp_port||"-"),1)]),_:1}),a(s,{label:"\u5BA2\u6237\u7AEF\u6570"},{default:u(()=>[e("div",null,l(t.value.connected_clients||"-"),1)]),_:1}),a(s,{label:"\u8FD0\u884C\u65F6\u95F4(\u5929)"},{default:u(()=>[e("div",null,l(t.value.uptime_in_days||"-"),1)]),_:1}),a(s,{label:"\u4F7F\u7528\u5185\u5B58"},{default:u(()=>[e("div",null,l(t.value.used_memory_human||"-"),1)]),_:1}),a(s,{label:"\u4F7F\u7528CPU"},{default:u(()=>[e("div",null,l(t.value.used_cpu_user_children||"-"),1)]),_:1}),a(s,{label:"\u5185\u5B58\u914D\u7F6E"},{default:u(()=>[e("div",null,l(t.value.maxmemory_human||"-"),1)]),_:1}),a(s,{label:"AOF\u662F\u5426\u5F00\u542F"},{default:u(()=>[e("div",null,l(t.value.aof_enabled||"-"),1)]),_:1}),a(s,{label:"RDB\u662F\u5426\u6210\u529F"},{default:u(()=>[e("div",null,l(t.value.rdb_last_bgsave_status||"-"),1)]),_:1}),a(s,{label:"Key\u6570\u91CF"},{default:u(()=>[e("div",null,l(t.value.dbSize||"-"),1)]),_:1}),a(s,{label:"\u7F51\u7EDC\u5165\u53E3/\u51FA\u53E3"},{default:u(()=>[e("div",null,[p(l(t.value.instantaneous_input_kbps||"-")+" ",1),O,p(" "+l(t.value.instantaneous_output_kbps||"-"),1)])]),_:1})]),_:1},8,["model"])])]),_:1}),e("div",k,[a(c,{class:"m-r-15 flex-1 test",shadow:"never"},{default:u(()=>[e("div",null,[z,e("div",I,[a(r,{class:"chart",option:v(n).commandChartOption},null,8,["option"])])])]),_:1}),a(c,{class:"flex-1",shadow:"never"},{default:u(()=>[e("div",null,[N,e("div",V,[a(r,{class:"chart",option:v(n).memoryChartOption},null,8,["option"])])])]),_:1})])])}}});var M=E(P,[["__scopeId","data-v-11713f03"]]);export{M as default};
