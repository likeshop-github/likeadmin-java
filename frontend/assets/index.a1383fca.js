import{d as s,bA as g,j as l,l as i,b as r,e as u}from"./index.1f7eca83.js";const d=s({components:{},props:{modelValue:{type:Object,default:()=>({})},pageSizes:{type:Array,default:()=>[10,20,30,40]},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"}},emits:["change"],setup(e,{emit:a}){return{sizeChange:()=>{e.modelValue.page=1,a("change")},pageChange:()=>{a("change")}}}}),m={class:"pagination"};function z(e,a,o,t,C,h){const p=l("el-pagination");return i(),r("div",m,[u(p,{currentPage:e.modelValue.page,"onUpdate:currentPage":a[0]||(a[0]=n=>e.modelValue.page=n),pageSize:e.modelValue.size,"onUpdate:pageSize":a[1]||(a[1]=n=>e.modelValue.size=n),"page-sizes":e.pageSizes,layout:e.layout,total:e.modelValue.count,"hide-on-single-page":"",onSizeChange:e.sizeChange,onCurrentChange:e.pageChange},null,8,["currentPage","pageSize","page-sizes","layout","total","onSizeChange","onCurrentChange"])])}var y=g(d,[["render",z]]);export{y as P};
