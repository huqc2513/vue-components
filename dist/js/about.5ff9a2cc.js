(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,e,n){var i=n("fc6a"),r=n("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return r(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?c(t):r(i(t))}},"0dd2":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",{staticClass:"t-thead"},[n("tr",[t.selection?[n("selectionCell",{attrs:{value:t.checkedAll},on:{"on-change":t.changecheckedAll}})]:t._e(),t._l(t.columns,(function(e,i){return n("th",{key:i},[t._v(t._s(e.title))])}))],2)]),n("tbody",t._l(t.list,(function(e,i){return n("tr",{key:i},[t.selection?[n("selectionCell",{attrs:{index:i,value:e.checked},on:{"on-change":t.changeItem}})]:t._e(),t._l(t.columns,(function(i,r){return n("td",{key:r},["slot"in i&&!0===i.slot?[t._t(i.key,null,{row:e})]:[t._v(" "+t._s(e[i.key])+" ")]],2)}))],2)})),0)])},r=[],a=(n("4de4"),n("d81d"),n("a434"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"selectionCell-wrap"},[n("div",[n("checkbox",{attrs:{value:t.$attrs.value},on:{"on-change":t.change}})],1)])}),o=[],c=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("span",[t.group?n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],class:{activeClass:t.groupStyle},attrs:{type:"checkbox"},domProps:{value:t.label,checked:Array.isArray(t.model)?t._i(t.model,t.label)>-1:t.model},on:{change:[function(e){var n=t.model,i=e.target,r=!!i.checked;if(Array.isArray(n)){var a=t.label,o=t._i(n,a);i.checked?o<0&&(t.model=n.concat([a])):o>-1&&(t.model=n.slice(0,o).concat(n.slice(o+1)))}else t.model=r},t.change]}}):n("input",{class:{activeClass:t.currentValue},attrs:{type:"checkbox"},domProps:{value:t.currentValue,checked:t.currentValue},on:{change:t.change}})]),t._v(" "+t._s(t.label)+" "),t._t("default")],2)}),s=[],u=(n("c975"),n("4260")),l={name:"iCheckbox",props:{label:{type:[String,Number,Boolean],default:""},value:{type:[String,Number,Boolean],default:!1}},computed:{groupStyle:function(){return this.group,!1}},watch:{value:function(){this.updateModel()}},data:function(){return{currentValue:this.value,model:[],group:!1,parent:null}},mounted:function(){this.parent=Object(u["a"])(this,"iCheckboxGroup"),this.parent?this.group=!0:this.updateModel()},methods:{updateModel:function(){this.currentValue=this.value},change:function(t){var e=t.target.checked;if(this.currentValue=e,this.group){this.checkboxGroup=Object(u["a"])(this,"iCheckboxGroup");var n=this.checkboxGroup.currentValue.indexOf(this.label);n<0||(this.checkboxGroup.currentValue.splice(n,1),this.checkboxGroup.change(this.checkboxGroup.currentValue))}else this.$emit("input",e),this.$emit("on-change",e)}}},f=l,d=(n("30fe"),n("2877")),h=Object(d["a"])(f,c,s,!1,null,null,null),p=h.exports,v={components:{checkbox:p},props:{index:Number},methods:{change:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("input",t),this.$emit("on-change",t,this.index)}}},g=v,m=(n("7aec"),Object(d["a"])(g,a,o,!1,null,null,null)),b=m.exports,y={components:{selectionCell:b},props:{selection:{type:Boolean,default:!0},columns:{type:Array,default:function(){return[]}},data:{type:Array,default:function(){return[]}}},data:function(){return{checkedAll:!1,list:[]}},watch:{checkedAll:function(t){},data:{immediate:!0,deep:!0,handler:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.list=e.map((function(e){return e.checked=t.checkedAll,e}))}},list:{deep:!0,handler:function(t){this.checkAllStatus()}}},methods:{changecheckedAll:function(t){this.transfromChecked(t)},transfromChecked:function(t){var e=this;this.$nextTick((function(){e.list.forEach((function(n,i){n.checked=t;var r=n;e.list.splice(i,1,r)})),e.emitCheckedData(e.list)}))},changeItem:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=this.list[e];n.checked=t,void 0!==e&&this.list.splice(e,1,n),this.emitCheckedData(this.list)},emitCheckedData:function(t){var e=t.map((function(t){return t}));e=e.filter((function(t){if(t.checked)return t})),console.log("arr",e)},checkAllStatus:function(){var t=this.list.every((function(t){return t.checked}));t&&(this.checkedAll=!0)}}},x=y,k=(n("4471"),Object(d["a"])(x,i,r,!1,null,null,null));e["a"]=k.exports},"138a":function(t,e,n){},"159b":function(t,e,n){var i=n("da84"),r=n("fdbc"),a=n("17c2"),o=n("9112");for(var c in r){var s=i[c],u=s&&s.prototype;if(u&&u.forEach!==a)try{o(u,"forEach",a)}catch(l){u.forEach=a}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,r=n("b301");t.exports=r("forEach")?function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},1870:function(t,e,n){"use strict";var i=n("df98"),r=n.n(i);r.a},"1b67":function(t,e,n){},"1dde":function(t,e,n){var i=n("d039"),r=n("b622"),a=n("60ae"),o=r("species");t.exports=function(t){return a>=51||!i((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),r=n("825a"),a=n("d039"),o=n("ad6d"),c="toString",s=RegExp.prototype,u=s[c],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=c;(l||f)&&i(RegExp.prototype,c,(function(){var t=r(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?o.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"30fe":function(t,e,n){"use strict";var i=n("fbfd"),r=n.n(i);r.a},"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,r=n("69f3"),a=n("7dd0"),o="String Iterator",c=r.set,s=r.getterFor(o);a(String,"String",(function(t){c(this,{type:o,string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=i(n,r),e.index+=t.length,{value:t,done:!1})}))},"3e51":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-wrapper"},[n("div",{staticClass:"paging-size"},[n("v-select",{on:{onChange:t.changePageSize},model:{value:t.currentPageSize,callback:function(e){t.currentPageSize=e},expression:"currentPageSize"}},[n("template",{slot:"content"},[n("div",[t._v(" "+t._s(t.currentPageSize)+" 条/每页 ")])]),t._l(t.sizes,(function(e,i){return n("v-options",{key:i,attrs:{value:e,selected:e==t.pageSize}},[t._v(t._s(e)+"条/每页")])}))],2),n("div",{staticClass:"total-data"},[t._v("共 "+t._s(t.total)+"条")])],1),n("ul",[t.current-1>0?n("li",{staticClass:"paging-item",on:{click:function(e){return t.jump(t.current-1)}}},[t._v("上一页")]):t._e(),n("li",{staticClass:"paging-item",class:[1===t.current?"current":""],attrs:{title:"1"},on:{click:function(e){return t.jump(1)}}},[t._v("1")]),t.current>=5?n("li",{staticClass:"paging-item",on:{click:function(e){return t.jump(t.current-5)}}},[t._v("...")]):t._e(),t.current-2>1?n("li",{staticClass:"paging-item",on:{click:function(e){return t.jump(t.current-2)}}},[t._v(t._s(t.current-2))]):t._e(),t.current-1>1?n("li",{staticClass:"paging-item",on:{click:function(e){return t.jump(t.current-1)}}},[t._v(t._s(t.current-1))]):t._e(),1!==t.current&&t.current!==t.allPages?n("li",{staticClass:"paging-item current",on:{click:function(e){return t.jump(t.current)}}},[t._v(t._s(t.current))]):t._e(),t.current+1<t.allPages&&t.current!==t.allPages?n("li",{staticClass:"paging-item",on:{click:function(e){return t.jump(t.current+1)}}},[t._v(t._s(t.current+1))]):t._e(),t.current+2<t.allPages&&t.current!==t.allPages?n("li",{staticClass:"paging-item",on:{click:function(e){return t.jump(t.current+2)}}},[t._v(t._s(t.current+2))]):t._e(),t.allPages-t.current>=4?n("li",{staticClass:"paging-item",on:{click:function(e){return t.jump(t.current+5)}}},[t._v("...")]):t._e(),t.total>1?n("li",{staticClass:"paging-item",class:[t.current===t.allPages?"current":""],on:{click:function(e){return t.jump(t.allPages)}}},[t._v(t._s(t.allPages))]):t._e(),t.allPages-t.current>1?n("li",{staticClass:"paging-item",on:{click:function(e){return t.jump(t.current+1)}}},[t._v("下一页")]):t._e(),n("li",{staticClass:"paging-jump"},[n("span",[t._v(" 跳转至 ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.jumpPage,expression:"jumpPage"}],attrs:{autocomplete:"off",spellcheck:"false",type:"nubmer",max:t.total,min:"0"},domProps:{value:t.jumpPage},on:{blur:t.blur,input:function(e){e.target.composing||(t.jumpPage=e.target.value)}}})])])])},r=[],a=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside.capture",value:t.onClickOutside,expression:"onClickOutside",modifiers:{capture:!0}},{name:"click-outside",rawName:"v-click-outside:mousedown.capture",value:t.onClickOutside,expression:"onClickOutside",arg:"mousedown",modifiers:{capture:!0}}],staticClass:"i-select-box",style:t.styles},[n("div",{class:{"i-select-wrap":!0,"active-border ":t.isOpen},on:{click:t.trigger}},[t.chooseItem?n("div",[t._t("content",[t._v(" "+t._s(t.chooseItem)+" ")])],2):t.placeholder?n("div",{staticClass:"placeholder-text"},[t._v(" "+t._s(t.placeholder)+" ")]):t._e()]),n("transition",{attrs:{name:"transition-drop"}},[t.isOpen?n("div",{staticClass:"i-select-content-wrap"},[t._t("default")],2):t._e()])],1)}),o=[],c=n("7609");function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d="click",h=Object.create(null),p=Object.create(null),v=Object.create(null),g=Object.create(null),m=[h,p],b=function(t,e,n,i){var r=n.target,a=function(e){var i=e.el;if(i!==r&&!i.contains(r)){var a=e.binding;a.modifiers.stop&&n.stopPropagation(),a.modifiers.prevent&&n.preventDefault(),a.value.call(t,n)}};e[i].forEach(a)},y=function(t,e){return t?v[e]?v[e]:(v[e]=function(t){b(this,h,t,e)},v[e]):g[e]?g[e]:(g[e]=function(t){b(this,p,t,e)},g[e])},x=Object.defineProperties({},{$captureInstances:{value:h},$nonCaptureInstances:{value:p},$captureEventHandlers:{value:v},$nonCaptureEventHandlers:{value:g},bind:{value:function(t,e){if("function"!==typeof e.value)throw new TypeError("Binding value must be a function.");var n=e.arg||d,i=l({},e,{},{arg:n,modifiers:l({},{capture:!1,prevent:!1,stop:!1},{},e.modifiers)}),r=i.modifiers.capture,a=r?h:p;Array.isArray(a[n])||(a[n]=[]),1===a[n].push({el:t,binding:i})&&"object"===("undefined"===typeof document?"undefined":s(document))&&document&&document.addEventListener(n,y(r,n),r)}},unbind:{value:function(t){var e=function(e){return e.el!==t},n=function(t){var n=Object.keys(t);if(n.length){var i=t===h,r=function(n){var r=t[n].filter(e);r.length?t[n]=r:("object"===("undefined"===typeof document?"undefined":s(document))&&document&&document.removeEventListener(n,y(i,n),i),delete t[n])};n.forEach(r)}};m.forEach(n)}},version:{enumerable:!0,value:c["a"]}});var k={name:"i-Select",directives:{clickOutside:x},props:{placeholder:[String],disabled:{type:Boolean,default:!1},value:{type:[String,Number]},width:{type:[String,Number],default:100}},provide:{Select:void 0},data:function(){return{isOpen:!1,chooseItem:this.value}},computed:{styles:function(){return{width:this.width+"px"}}},created:function(){console.log(this.value)},watch:{value:function(t){t&&(this.chooseItem=t,this.$emit("input",t))}},methods:{onChange:function(t){this.chooseItem=t,this.$emit("onChange",t),this.$emit("input",t),this.isOpen=!1},trigger:function(){this.isOpen=!this.isOpen},onClickOutside:function(){this.isOpen=!1}}},S=k,_=(n("8796"),n("2877")),w=Object(_["a"])(S,a,o,!1,null,"2be0ff98",null),C=w.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"i-select-options-box":!0,"option-active-item":t.isActive},on:{click:function(e){return e.stopPropagation(),t.handleClick(e)}}},[t._t("default")],2)},O=[],P=n("4260"),A={name:"i-Option",directives:{clickOutside:x},props:{disabled:{type:Boolean,default:!1},value:[String,Number]},inject:["Select"],data:function(){return{isOpen:!1,isActive:!1}},mounted:function(){this.ParentSelect=Object(P["a"])(this,"i-Select"),this.ParentSelect.value===this.value&&(this.isActive=!0)},methods:{handleClick:function(){this.ParentSelect.onChange.chooseItem!=this.value?(this.ParentSelect.onChange(this.value),this.isActive=!1):this.isActive=!0}}},j=A,I=(n("1870"),Object(_["a"])(j,E,O,!1,null,"2f371a8f",null)),N=I.exports,L={components:{vSelect:C,vOptions:N},data:function(){return{jumpPage:0,currentPageSize:this.pageSize}},computed:{allPages:function(){var t=Math.ceil(this.total/this.currentPageSize);return 0===t?1:t},current:function(){var t=this.currentPage;return t<=0&&(t=1),t>=this.allPages&&(t=this.allPages),t}},props:{total:Number,currentPage:Number,pageSize:Number,sizes:{type:Array,default:function(){return[5,15,25,35]}}},mounted:function(){this.jumpPage=1},watch:{current:function(){this.total,this.current}},methods:{jump:function(t){t=Number(t),t<=0&&(t=0),t>=this.allPages&&(t=this.allPages),this.$emit("jump",t)},changePageSize:function(t){var e=this;this.currentPageSize=Number(t),this.$nextTick((function(){e.$emit("changePageSize",e.currentPageSize,1)}))},blur:function(t){var e=t.target.value;e=Number(e),e<=0&&(e=1),e>=this.allPages&&(e=this.allPages),this.jump(e),this.jumpPage=e}}},T=L,$=(n("8e8f"),Object(_["a"])(T,i,r,!1,null,null,null));e["a"]=$.exports},"3f0e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-table",{attrs:{data:t.list,columns:t.column},scopedSlots:t._u([{key:"name",fn:function(e){var i=e.row;return[t._v(" 我是自定义内容 "),n("span",[t._v(t._s(i.name))])]}}])}),n("page",{attrs:{total:t.total,currentPage:t.current,pageSize:t.pageSize,sizes:[5,10,20,50]},on:{changePageSize:t.changePageSize,jump:t.jump}})],1)},r=[],a=(n("fb6a"),n("0dd2")),o=n("3e51"),c=function(){for(var t=[],e=1;e<=100;e++)t.push({name:"张"+e+"山",age:e});return t},s=c(),u={data:function(){return{checkedAll:!0,total:s.length,pageSize:10,current:3,data:s,column:[{key:"name",title:"姓名",slot:!0},{key:"age",title:"年龄"}]}},components:{vTable:a["a"],page:o["a"]},computed:{list:function(){var t=(this.current-1)*this.pageSize,e=t+this.pageSize>=this.total?this.total:t+this.pageSize,n=this.data.slice(t,e);return n}},created:function(){},methods:{changePageSize:function(t){this.current=1,this.pageSize=t},jump:function(t){this.current=t}}},l=u,f=(n("f391"),n("2877")),d=Object(f["a"])(l,i,r,!1,null,null,null);e["default"]=d.exports},4260:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("99af"),n("c975"),n("b0c0");function i(t,e){var n=t.$parent,i=n.$options.name;while(n&&(!i||[e].indexOf(i)<0))n=n.$parent,n&&(i=n.$options.name);return n}},4471:function(t,e,n){"use strict";var i=n("8322"),r=n.n(i);r.a},"4de4":function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").filter,a=n("d039"),o=n("1dde"),c=o("filter"),s=c&&!a((function(){[].filter.call({length:-1,0:1},(function(t){throw t}))}));i({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var i=n("f8c2"),r=n("7b0b"),a=n("9bdd"),o=n("e95a"),c=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,f,d,h=r(t),p="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,m=void 0!==g,b=0,y=u(h);if(m&&(g=i(g,v>2?arguments[2]:void 0,2)),void 0==y||p==Array&&o(y))for(e=c(h.length),n=new p(e);e>b;b++)s(n,b,m?g(h[b],b):h[b]);else for(f=y.call(h),d=f.next,n=new p;!(l=d.call(f)).done;b++)s(n,b,m?a(f,g,[l.value,b],!0):l.value);return n.length=b,n}},"56a3":function(t,e,n){"use strict";var i=n("a4b9"),r=n.n(i);r.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),r=n("5899"),a="["+r+"]",o=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},6547:function(t,e,n){var i=n("a691"),r=n("1d80"),a=function(t){return function(e,n){var a,o,c=String(r(e)),s=i(n),u=c.length;return s<0||s>=u?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):a:t?c.slice(s,s+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(t,e,n){var i=n("861d"),r=n("e8b5"),a=n("b622"),o=a("species");t.exports=function(t,e){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?i(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7156:function(t,e,n){var i=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var a,o;return r&&"function"==typeof(a=e.constructor)&&a!==n&&i(o=a.prototype)&&o!==n.prototype&&r(t,o),t}},"746f":function(t,e,n){var i=n("428f"),r=n("5135"),a=n("c032"),o=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||o(e,t,{value:a.f(t)})}},7609:function(t){t.exports=JSON.parse('{"a":"4.0.19"}')},"7aec":function(t,e,n){"use strict";var i=n("bde4"),r=n.n(i);r.a},8322:function(t,e,n){},8418:function(t,e,n){"use strict";var i=n("c04e"),r=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var o=i(e);o in t?r.f(t,o,a(0,n)):t[o]=n}},8796:function(t,e,n){"use strict";var i=n("b695"),r=n.n(i);r.a},"8e8f":function(t,e,n){"use strict";var i=n("1b67"),r=n.n(i);r.a},"99af":function(t,e,n){"use strict";var i=n("23e7"),r=n("d039"),a=n("e8b5"),o=n("861d"),c=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),f=n("1dde"),d=n("b622"),h=n("60ae"),p=d("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=h>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=f("concat"),y=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},x=!m||!b;i({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,i,r,a,o=c(this),f=l(o,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(a=-1===e?o:arguments[e],y(a)){if(r=s(a.length),d+r>v)throw TypeError(g);for(n=0;n<r;n++,d++)n in a&&u(f,d,a[n])}else{if(d>=v)throw TypeError(g);u(f,d++,a)}return f.length=d,f}})},a434:function(t,e,n){"use strict";var i=n("23e7"),r=n("23cb"),a=n("a691"),o=n("50c4"),c=n("7b0b"),s=n("65f0"),u=n("8418"),l=n("1dde"),f=Math.max,d=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!l("splice")},{splice:function(t,e){var n,i,l,v,g,m,b=c(this),y=o(b.length),x=r(t,y),k=arguments.length;if(0===k?n=i=0:1===k?(n=0,i=y-x):(n=k-2,i=d(f(a(e),0),y-x)),y+n-i>h)throw TypeError(p);for(l=s(b,i),v=0;v<i;v++)g=x+v,g in b&&u(l,v,b[g]);if(l.length=i,n<i){for(v=x;v<y-i;v++)g=v+i,m=v+n,g in b?b[m]=b[g]:delete b[m];for(v=y;v>y-i+n;v--)delete b[v-1]}else if(n>i)for(v=y-i;v>x;v--)g=v+i-1,m=v+n-1,g in b?b[m]=b[g]:delete b[m];for(v=0;v<n;v++)b[v+x]=arguments[v+2];return b.length=y-i+n,l}})},a4b9:function(t,e,n){},a4d3:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),a=n("d066"),o=n("c430"),c=n("83ab"),s=n("4930"),u=n("fdbf"),l=n("d039"),f=n("5135"),d=n("e8b5"),h=n("861d"),p=n("825a"),v=n("7b0b"),g=n("fc6a"),m=n("c04e"),b=n("5c6c"),y=n("7c73"),x=n("df75"),k=n("241c"),S=n("057f"),_=n("7418"),w=n("06cf"),C=n("9bf2"),E=n("d1e7"),O=n("9112"),P=n("6eeb"),A=n("5692"),j=n("f772"),I=n("d012"),N=n("90e3"),L=n("b622"),T=n("c032"),$=n("746f"),z=n("d44e"),M=n("69f3"),V=n("b727").forEach,D=j("hidden"),G="Symbol",X="prototype",F=L("toPrimitive"),H=M.set,R=M.getterFor(G),B=Object[X],Y=r.Symbol,J=a("JSON","stringify"),q=w.f,W=C.f,U=S.f,Q=E.f,K=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),nt=A("wks"),it=r.QObject,rt=!it||!it[X]||!it[X].findChild,at=c&&l((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=q(B,e);i&&delete B[e],W(t,e,n),i&&t!==B&&W(B,e,i)}:W,ot=function(t,e){var n=K[t]=y(Y[X]);return H(n,{type:G,tag:t,description:e}),c||(n.description=e),n},ct=s&&"symbol"==typeof Y.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},st=function(t,e,n){t===B&&st(Z,e,n),p(t);var i=m(e,!0);return p(n),f(K,i)?(n.enumerable?(f(t,D)&&t[D][i]&&(t[D][i]=!1),n=y(n,{enumerable:b(0,!1)})):(f(t,D)||W(t,D,b(1,{})),t[D][i]=!0),at(t,i,n)):W(t,i,n)},ut=function(t,e){p(t);var n=g(e),i=x(n).concat(pt(n));return V(i,(function(e){c&&!ft.call(n,e)||st(t,e,n[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=m(t,!0),n=Q.call(this,e);return!(this===B&&f(K,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(K,e)||f(this,D)&&this[D][e])||n)},dt=function(t,e){var n=g(t),i=m(e,!0);if(n!==B||!f(K,i)||f(Z,i)){var r=q(n,i);return!r||!f(K,i)||f(n,D)&&n[D][i]||(r.enumerable=!0),r}},ht=function(t){var e=U(g(t)),n=[];return V(e,(function(t){f(K,t)||f(I,t)||n.push(t)})),n},pt=function(t){var e=t===B,n=U(e?Z:g(t)),i=[];return V(n,(function(t){!f(K,t)||e&&!f(B,t)||i.push(K[t])})),i};if(s||(Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),n=function(t){this===B&&n.call(Z,t),f(this,D)&&f(this[D],e)&&(this[D][e]=!1),at(this,e,b(1,t))};return c&&rt&&at(B,e,{configurable:!0,set:n}),ot(e,t)},P(Y[X],"toString",(function(){return R(this).tag})),E.f=ft,C.f=st,w.f=dt,k.f=S.f=ht,_.f=pt,c&&(W(Y[X],"description",{configurable:!0,get:function(){return R(this).description}}),o||P(B,"propertyIsEnumerable",ft,{unsafe:!0}))),u||(T.f=function(t){return ot(L(t),t)}),i({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:Y}),V(x(nt),(function(t){$(t)})),i({target:G,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=Y(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),i({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),i({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ht,getOwnPropertySymbols:pt}),i({target:"Object",stat:!0,forced:l((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(v(t))}}),J){var vt=!s||l((function(){var t=Y();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}));i({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var i,r=[t],a=1;while(arguments.length>a)r.push(arguments[a++]);if(i=e,(h(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ct(e))return e}),r[1]=e,J.apply(null,r)}})}Y[X][F]||O(Y[X],F,Y[X].valueOf),z(Y,G),I[D]=!0},a630:function(t,e,n){var i=n("23e7"),r=n("4df4"),a=n("1c7e"),o=!a((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:o},{from:r})},a9e3:function(t,e,n){"use strict";var i=n("83ab"),r=n("da84"),a=n("94ca"),o=n("6eeb"),c=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),f=n("d039"),d=n("7c73"),h=n("241c").f,p=n("06cf").f,v=n("9bf2").f,g=n("58a8").trim,m="Number",b=r[m],y=b.prototype,x=s(d(y))==m,k=function(t){var e,n,i,r,a,o,c,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+u}for(a=u.slice(2),o=a.length,c=0;c<o;c++)if(s=a.charCodeAt(c),s<48||s>r)return NaN;return parseInt(a,i)}return+u};if(a(m,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var S,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(x?f((function(){y.valueOf.call(n)})):s(n)!=m)?u(new b(k(e)),n,_):k(e)},w=i?h(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;w.length>C;C++)c(b,S=w[C])&&!c(_,S)&&v(_,S,p(b,S));_.prototype=y,y.constructor=_,o(r,m,_)}},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var i=n("83ab"),r=n("9bf2").f,a=Function.prototype,o=a.toString,c=/^\s*function ([^ (]*)/,s="name";!i||s in a||r(a,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},b301:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!n||!i((function(){n.call(null,e||function(){throw 1},1)}))}},b389:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 滑动轮播图 "),n("div",{staticClass:"box"},[n("div",{ref:"cont",staticClass:"container"},[t._m(0),n("div",{staticClass:"swiper-pagination"})])]),n("div",{staticClass:"btn-box"},[n("button",{on:{click:function(e){return e.stopPropagation(),t.goto(0)}}},[t._v("0")]),n("button",{on:{click:function(e){return e.stopPropagation(),t.goto(1)}}},[t._v("1")]),n("button",{on:{click:function(e){return e.stopPropagation(),t.goto(2)}}},[t._v("2")]),n("button",{on:{click:function(e){return e.stopPropagation(),t.goto(3)}}},[t._v("3")]),n("button",{on:{click:function(e){return e.stopPropagation(),t.goto(4)}}},[t._v("4")])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner-wrap"},[n("div",{staticClass:"red"},[t._v("1")]),n("div",{staticClass:"yellow"},[t._v("2")]),n("div",{staticClass:"green"},[t._v("3")]),n("div",{staticClass:"pink"},[t._v("4")])])}];n("99af"),n("159b");function a(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function o(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return a(t)||o(t)||c()}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}var d={index:1,loop:!0,threshold:.2,autoplay:{delay:2e3},pagination:{el:".swiper-pagination"}},h=function(){function t(e){u(this,t),e.el&&(this.initParameter(d,e),this.initEvent(),this.initAotuplay(),this.renderdot(),this.setIndex(this.index,!1))}return f(t,[{key:"initParameter",value:function(t,e){Object.assign(t,e),this.opt=t,this.el=e.el,this.index=t.index,this.el.firstElementChild&&(this.EleHandle=new g({el:this.el.firstElementChild,opt:this.opt}),this.maxIndex=this.el.firstElementChild.children.length,this.elwidth=this.el.offsetWidth)}},{key:"initEvent",value:function(){var t=this.el;this.handleEvent=this.handleEvent.bind(this),p(t,"touchstart",this.handleEvent),p(t,"mousedown",this.handleEvent),p(t,"touchmove",this.handleEvent),p(t,"mousemove",this.handleEvent),p(t,"touchend",this.handleEvent),p(t,"mouseup",this.handleEvent),p(t.firstElementChild,"transitionend",this.handleEvent)}},{key:"renderdot",value:function(){var t=this.opt,e=t.pagination,n=t.loop,i=e.el,r=this.el.querySelector(i),a=this.el.firstElementChild.children.length,o=0,c=document.createDocumentFragment();if(r){n&&(a-=2);while(o<a){o++;var s=document.createElement("span");s.setAttribute("index",o),o===this.index?s.setAttribute("class","dot active-dot"):s.setAttribute("class","dot"),c.appendChild(s)}r.innerHTML="",r.appendChild(c)}}},{key:"initAotuplay",value:function(){var t=this,e=this.opt,n=e.autoplay,i=void 0!==n&&n;e.loop;if(i){var r=i.delay;this.AotuplayInterval=setInterval((function(){t.index>=t.maxIndex?t.index=1:t.index++,t.setIndex(t.index)}),r)}}},{key:"resetInterVal",value:function(t){clearInterval(this.AotuplayInterval),t&&this.initAotuplay()}},{key:"destroy",value:function(){var t=this,e=["touchstart","mousedown","touchmove","mousemove","touchend","mouseup",""];e.forEach((function(e){v(t.el,e,t.handleEvent)})),v(this.el.firstElementChild,"transitionend",this.handleEvent)}},{key:"_start",value:function(t){this.state=!0;var e=t.touches?t.touches[0]:t;this.startX=e.pageX,this.startY=e.pageY,this.resetInterVal()}},{key:"_move",value:function(t){if(this.state){var e=t.touches?t.touches[0]:t;this.deltaX=e.pageX-this.startX,this.deltaY=e.pageY-this.startY,this.direction=e.pageX>this.startX?"left":"right";var n=0;n=-this.index*this.elwidth+this.deltaX,this.EleHandle.moveEle(n)}}},{key:"_end",value:function(t){this.state=!1;var e=Math.abs(this.deltaX);e/this.elwidth>=this.opt.threshold?("left"===this.direction?this.index=this.index<=0?0:--this.index:"right"===this.direction&&(this.index=this.index>=this.maxIndex-1?this.maxIndex-1:this.index+1),this.setIndex(this.index)):this.setIndex(this.index)}},{key:"setDotIndex",value:function(t){t<=1?t=0:t--;var e=this.opt.pagination,n=e.el,i=this.el.querySelector(n).children;i&&(i.forEach((function(t){t.classList.remove("active-dot")})),i[t]&&i[t].classList.add("active-dot"))}},{key:"setIndex",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t<=1&&(t=1),this.opt.loop?t>=this.maxIndex&&(t=this.maxIndex-2):t--,this.index=t,this.setDotIndex(this.index),this.resetInterVal(!0),this.EleHandle.calculateOffsetX(t,e)}},{key:"correctionLoopOffsetX",value:function(){0===this.index&&(this.index=this.maxIndex-2,this.setIndex(this.index,!1)),this.index===this.maxIndex-1&&(this.index=1,this.setIndex(this.index,!1))}},{key:"handleEvent",value:function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this.EleHandle.removeTranstion(),this.opt.loop&&this.correctionLoopOffsetX();break;case"click":break}}}]),t}();function p(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.addEventListener(e,n,{passive:!1,capture:!!i})}function v(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.removeEventListener(e,n,{passive:!1,capture:!!i})}var g=function(){function t(e){var n=e.opt,i=e.el;u(this,t),this.el=i,this.transtionName="transtion-move",n.loop&&this.cloneFirstAndLastNode()}return f(t,[{key:"cloneFirstAndLastNode",value:function(){var t=this.el.children,e=t[0].cloneNode(!0),n=t[t.length-1].cloneNode(!0),i=[n].concat(s(t),[e]);i.forEach((function(t,e){t.setAttribute("index",e)})),this.el.insertBefore(n,t[0]),this.el.appendChild(e)}},{key:"setTranstion",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.4;this.loadCssCode(".".concat(this.transtionName,"{\n      transition:all ").concat(t,"s ease\n    }")),this.el.classList.add(this.transtionName)}},{key:"moveEle",value:function(t){this.el.style.cssText="transform:translateX(".concat(t,"px);")}},{key:"removeTranstion",value:function(){this.el.classList.remove(this.transtionName)}},{key:"loadCssCode",value:function(t){var e=document.createElement("style");e.type="text/css",e.rel="stylesheet",e.appendChild(document.createTextNode(t));var n=document.getElementsByTagName("head")[0];n.appendChild(e)}},{key:"calculateOffsetX",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(this.el.children.length,this.el.parentNode.offsetWidth),i=t*n;e&&this.setTranstion(),this.moveEle(-i)}}]),t}(),m=h,b={mounted:function(){this.cont=this.$refs.cont,this.swiper=new m({el:this.cont})},methods:{goto:function(t){this.swiper.setIndex(t)}}},y=b,x=(n("56a3"),n("2877")),k=Object(x["a"])(y,i,r,!1,null,null,null);e["default"]=k.exports},b695:function(t,e,n){},b727:function(t,e,n){var i=n("f8c2"),r=n("44ad"),a=n("7b0b"),o=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f;return function(h,p,v,g){for(var m,b,y=a(h),x=r(y),k=i(p,v,3),S=o(x.length),_=0,w=g||c,C=e?w(h,S):n?w(h,0):void 0;S>_;_++)if((d||_ in x)&&(m=x[_],b=k(m,_,y),t))if(e)C[_]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return _;case 2:s.call(C,m)}else if(l)return!1;return f?-1:u||l?l:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},bae5:function(t,e,n){"use strict";var i=n("138a"),r=n.n(i);r.a},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"example"},[n("h4",[t._v("组件列表")]),n("div",{staticClass:"row",on:{click:function(e){return t.goto("/table")}}},[n("button",[t._v("table组件")]),n("p",[t._v(" 仿view table组件实现，支持自定义slot插槽 ")])]),n("div",{staticClass:"row",on:{click:function(e){return t.goto("/swiper")}}},[n("button",[t._v("swiper组件 ")]),n("p",[t._v(" 无缝滚动轮播图组件 ")])])])])},r=[],a=(n("fb6a"),n("0dd2")),o=n("3e51"),c=function(){for(var t=[],e=1;e<=100;e++)t.push({name:"张"+e+"山",age:e});return t},s=c(),u={data:function(){return{checkedAll:!0,total:s.length,pageSize:10,current:3,data:s,column:[{key:"name",title:"姓名",slot:!0},{key:"age",title:"年龄"}]}},components:{vTable:a["a"],page:o["a"]},computed:{list:function(){var t=(this.current-1)*this.pageSize,e=t+this.pageSize>=this.total?this.total:t+this.pageSize,n=this.data.slice(t,e);return n}},created:function(){},methods:{goto:function(t){this.$router.push(t)}}},l=u,f=(n("bae5"),n("2877")),d=Object(f["a"])(l,i,r,!1,null,null,null);e["default"]=d.exports},bde4:function(t,e,n){},c032:function(t,e,n){var i=n("b622");e.f=i},c975:function(t,e,n){"use strict";var i=n("23e7"),r=n("4d64").indexOf,a=n("b301"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,s=a("indexOf");i({target:"Array",proto:!0,forced:c||s},{indexOf:function(t){return c?o.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},d28b:function(t,e,n){var i=n("746f");i("iterator")},d81d:function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").map,a=n("d039"),o=n("1dde"),c=o("map"),s=c&&!a((function(){[].map.call({length:-1,0:1},(function(t){throw t}))}));i({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,n){var i=n("da84"),r=n("fdbc"),a=n("e260"),o=n("9112"),c=n("b622"),s=c("iterator"),u=c("toStringTag"),l=a.values;for(var f in r){var d=i[f],h=d&&d.prototype;if(h){if(h[s]!==l)try{o(h,s,l)}catch(v){h[s]=l}if(h[u]||o(h,u,f),r[f])for(var p in a)if(h[p]!==a[p])try{o(h,p,a[p])}catch(v){h[p]=a[p]}}}},df98:function(t,e,n){},e01a:function(t,e,n){"use strict";var i=n("23e7"),r=n("83ab"),a=n("da84"),o=n("5135"),c=n("861d"),s=n("9bf2").f,u=n("e893"),l=a.Symbol;if(r&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var h=d.prototype=l.prototype;h.constructor=d;var p=h.toString,v="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;s(h,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(o(f,t))return"";var n=v?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:d})}},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},f340:function(t,e,n){},f391:function(t,e,n){"use strict";var i=n("f340"),r=n.n(i);r.a},fb6a:function(t,e,n){"use strict";var i=n("23e7"),r=n("861d"),a=n("e8b5"),o=n("23cb"),c=n("50c4"),s=n("fc6a"),u=n("8418"),l=n("1dde"),f=n("b622"),d=f("species"),h=[].slice,p=Math.max;i({target:"Array",proto:!0,forced:!l("slice")},{slice:function(t,e){var n,i,l,f=s(this),v=c(f.length),g=o(t,v),m=o(void 0===e?v:e,v);if(a(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[d],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(f,g,m);for(i=new(void 0===n?Array:n)(p(m-g,0)),l=0;g<m;g++,l++)g in f&&u(i,l,f[g]);return i.length=l,i}})},fbfd:function(t,e,n){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.5ff9a2cc.js.map