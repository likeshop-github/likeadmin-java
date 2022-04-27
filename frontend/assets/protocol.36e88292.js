var H=Object.defineProperty;var k=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var B=(e,n,t)=>n in e?H(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,x=(e,n)=>{for(var t in n||(n={}))q.call(n,t)&&B(e,t,n[t]);if(k)for(var t of k(n))G.call(n,t)&&B(e,t,n[t]);return e};import{n as Y,o as W}from"./setting.e1c98f73.js";import{a4 as F,d as E,t as $,v as w,y as J,af as Q,ag as X,ah as Z,ai as D,z as A,c as ee,V as ne,o as j,a as O,i as c,ac as f,ae as te,a3 as ae,r as C,w as g,F as ie,f as I,j as oe}from"./vendor.bbaa8c82.js";import{m as re}from"./index.7e8816f7.js";import{_ as le}from"./index.8fe53ee6.js";import{F as ue}from"./index.a653a24e.js";import"./index.99efea29.js";import"./index.d57d86d3.js";var se=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],de=function(e){return se.map(function(n){return n.toLowerCase()}).indexOf(e.toLowerCase())!==-1},ce=function(e,n,t){Object.keys(n).filter(de).forEach(function(o){var r=n[o];typeof r=="function"&&(o==="onInit"?r(e,t):t.on(o.substring(2),function(a){return r(a,t)}))})},fe=function(e,n,t,o){var r=e.modelEvents?e.modelEvents:null,a=Array.isArray(r)?r.join(" "):r;F(o,function(u,l){t&&typeof u=="string"&&u!==l&&u!==t.getContent({format:e.outputFormat})&&t.setContent(u)}),t.on(a||"change input undo redo",function(){n.emit("update:modelValue",t.getContent({format:e.outputFormat}))})},me=function(e,n,t,o,r,a){o.setContent(a()),t.attrs["onUpdate:modelValue"]&&fe(n,t,o,r),ce(e,t.attrs,o)},P=0,L=function(e){var n=Date.now(),t=Math.floor(Math.random()*1e9);return P++,e+"_"+t+P+String(n)},ve=function(e){return e!==null&&e.tagName.toLowerCase()==="textarea"},z=function(e){return typeof e=="undefined"||e===""?[]:Array.isArray(e)?e:e.split(" ")},pe=function(e,n){return z(e).concat(z(n))},ge=function(e){return e==null},M=function(){return{listeners:[],scriptId:L("tiny-script"),scriptLoaded:!1}},ye=function(){var e=M(),n=function(r,a,u,l){var i=a.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=r,i.src=u;var m=function(){i.removeEventListener("load",m),l()};i.addEventListener("load",m),a.head&&a.head.appendChild(i)},t=function(r,a,u){e.scriptLoaded?u():(e.listeners.push(u),r.getElementById(e.scriptId)||n(e.scriptId,r,a,function(){e.listeners.forEach(function(l){return l()}),e.scriptLoaded=!0}))},o=function(){e=M()};return{load:t,reinitialize:o}},_e=ye(),he=function(){return typeof window!="undefined"?window:global},y=function(){var e=he();return e&&e.tinymce?e.tinymce:null},be={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return e==="html"||e==="text"}}},_=globalThis&&globalThis.__assign||function(){return _=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)},Ce=function(e,n,t,o){return e(o||"div",{id:n,ref:t})},Se=function(e,n,t){return e("textarea",{id:n,visibility:"hidden",ref:t})},we=E({props:be,setup:function(e,n){var t=e.init?_({},e.init):{},o=$(e),r=o.disabled,a=o.modelValue,u=o.tagName,l=w(null),i=null,m=e.id||L("tiny-vue"),v=e.init&&e.init.inline||e.inline,p=!!n.attrs["onUpdate:modelValue"],V=!0,N=e.initialValue?e.initialValue:"",S="",R=function(s){return p?function(){return(a==null?void 0:a.value)?a.value:""}:function(){return s?N:S}},b=function(){var s=R(V),d=_(_({},t),{readonly:e.disabled,selector:"#"+m,plugins:pe(t.plugins,e.plugins),toolbar:e.toolbar||t.toolbar,inline:v,setup:function(h){i=h,h.on("init",function(T){return me(T,e,n,h,a,s)}),typeof t.setup=="function"&&t.setup(h)}});ve(l.value)&&(l.value.style.visibility=""),y().init(d),V=!1};F(r,function(s){var d;i!==null&&(typeof((d=i.mode)===null||d===void 0?void 0:d.set)=="function"?i.mode.set(s?"readonly":"design"):i.setMode(s?"readonly":"design"))}),F(u,function(s){var d;p||(S=i.getContent()),(d=y())===null||d===void 0||d.remove(i),A(function(){return b()})}),J(function(){if(y()!==null)b();else if(l.value&&l.value.ownerDocument){var s=e.cloudChannel?e.cloudChannel:"5",d=e.apiKey?e.apiKey:"no-api-key",h=ge(e.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+d+"/tinymce/"+s+"/tinymce.min.js":e.tinymceScriptSrc;_e.load(l.value.ownerDocument,h,b)}}),Q(function(){y()!==null&&y().remove(i)}),v||(X(function(){V||b()}),Z(function(){var s;p||(S=i.getContent()),(s=y())===null||s===void 0||s.remove(i)}));var K=function(s){var d;S=i.getContent(),(d=y())===null||d===void 0||d.remove(i),t=_(_({},t),s),A(function(){return b()})};return n.expose({rerender:K}),function(){return v?Ce(D,m,l,e.tagName):Se(D,m,l)}}});const Ve=E({props:{modelValue:{default:""},width:{default:"1000"},height:{default:"1000"}},emits:["update:modelValue"],setup(e,{emit:n}){const t=e;let o=ee({get:()=>t.modelValue||"",set:i=>{n("update:modelValue",i)}});const r=w(null),a=w({callback:null,type:"image"}),u=ne({apiKey:"mejzqiqf65aswd278mtojz1w7g3zysvdhg3sjen77zf7f6e9",init:{language:"zh_CN",placeholder:"\u5728\u8FD9\u91CC\u8F93\u5165\u6587\u5B57",min_width:t.width,min_height:t.height,height:t.height,resize:"both",branding:!1,font_formats:"\u5FAE\u8F6F\u96C5\u9ED1=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;\u82F9\u679C\u82F9\u65B9=PingFang SC,Microsoft YaHei,sans-serif;\u5B8B\u4F53=simsun,serif;\u4EFF\u5B8B\u4F53=FangSong,serif;\u9ED1\u4F53=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",plugins:"preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount textpattern autosave",toolbar:["fullscreen undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | bullist numlist | blockquote subscript superscript removeformat ","styleselect formatselect fontselect fontsizeselect |  table image axupimgs media charmap hr pagebreak insertdatetime  selectall visualblocks searchreplace | code print preview | indent2em lineheight formatpainter"],paste_data_images:!0,file_picker_types:"file image media",convert_urls:!1,file_picker_callback:(i,m,v)=>{v.filetype=="image"?a.value.type="image":v.filetype=="media"?a.value.type="video":a.value.type="file",r.value.showPopup(1),a.value.callback=i}}}),l=i=>{a.value.callback(i),r.value.fileList=[]};return(i,m)=>(j(),O("div",{class:"tinymce-boxz",style:ae({"max-width":e.width+"px","max-height":e.height+"px"})},[c(f(we),{modelValue:f(o),"onUpdate:modelValue":m[0]||(m[0]=v=>te(o)?o.value=v:o=v),"api-key":f(u).apiKey,init:f(u).init},null,8,["modelValue","api-key","init"]),c(re,{hiddenUpload:!0,type:a.value.type,ref_key:"materialRef",ref:r,onChange:l},null,8,["type"])],4))}});var U=le(Ve,[["__scopeId","data-v-29c4a99a"]]);const Fe=I("span",{class:"md f-w-600"},"\u670D\u52A1\u534F\u8BAE",-1),Ee=I("span",{class:"md f-w-600"},"\u9690\u79C1\u534F\u8BAE",-1),ke=oe("\u4FDD\u5B58"),je=E({setup(e){let n=w({service_title:"",service_content:"",privacy_title:"",privacy_content:""});const t=async()=>{n.value=await Y()},o=async()=>{await W(x({},n.value)),t()};return t(),(r,a)=>{const u=C("el-input"),l=C("el-form-item"),i=C("el-form"),m=C("el-card"),v=C("el-button");return j(),O(ie,null,[c(m,{shadow:"never"},{header:g(()=>[Fe]),default:g(()=>[c(i,{model:f(n),"label-width":"80px",size:"mini",inline:""},{default:g(()=>[c(l,{label:"\u534F\u8BAE\u540D\u79F0"},{default:g(()=>[c(u,{class:"ls-input",modelValue:f(n).service_title,"onUpdate:modelValue":a[0]||(a[0]=p=>f(n).service_title=p)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),c(U,{modelValue:f(n).service_content,"onUpdate:modelValue":a[1]||(a[1]=p=>f(n).service_content=p),width:"1000",height:"664",class:"m-l-14"},null,8,["modelValue"])]),_:1}),c(m,{shadow:"never",class:"m-t-15"},{header:g(()=>[Ee]),default:g(()=>[c(i,{model:f(n),"label-width":"80px",size:"mini",inline:""},{default:g(()=>[c(l,{label:"\u534F\u8BAE\u540D\u79F0"},{default:g(()=>[c(u,{class:"ls-input",modelValue:f(n).privacy_title,"onUpdate:modelValue":a[2]||(a[2]=p=>f(n).privacy_title=p)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),c(U,{modelValue:f(n).privacy_content,"onUpdate:modelValue":a[3]||(a[3]=p=>f(n).privacy_content=p),width:"1000",height:"664",class:"m-l-14"},null,8,["modelValue"])]),_:1}),c(ue,null,{default:g(()=>[c(v,{type:"primary",size:"small",onClick:o},{default:g(()=>[ke]),_:1})]),_:1})],64)}}});export{je as default};
