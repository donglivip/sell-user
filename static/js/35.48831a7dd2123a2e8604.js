webpackJsonp([35],{DICJ:function(t,a,s){"use strict";(function(t){a.a={name:"chongzhi",data:function(){return{tabdata:[],msdCsName:"",msdCsPrice:"",layuiboo:!1}},methods:{layuichange:function(){this.layuiboo=!this.layuiboo},add:function(){var a=this;return""==a.msdCsName?(alert("请输入服务名称！"),!1):""==a.msdCsPrice?(alert("请输入服务价格！"),!1):void t.ajax({type:"post",url:a.myurl+"/company/insertCompanyService",data:{msdCompanyId:localStorage.getItem("msdCompanyId"),msdCsName:a.msdCsName,msdCsPrice:a.msdCsPrice},success:function(t){200==t.status?(a.layuichange(),a.myajax()):alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}})},godelete:function(a){var s=this;t.ajax({type:"post",url:s.myurl+"/company/updateCompanyService",data:{msdCompanyServiceId:a,msdCsIsDelete:1},success:function(t){200==t.status?s.myajax():alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}})},myajax:function(){var a=this;t.ajax({type:"post",url:a.myurl+"/company/queryCompanyServiceList",data:{msdCompanyId:localStorage.getItem("msdCompanyId")},success:function(t){200==t.status?a.tabdata=t.data:alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}})},back:function(){this.$router.back()},opennew:function(t){this.$router.push({name:t})}},mounted:function(){this.myajax()},computed:{myurl:function(){return this.$store.state.myurl}}}}).call(a,s("7t+N"))},I5i5:function(t,a){},"l/20":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("DICJ"),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"header"},[e("div",{staticClass:"header-cebian",on:{click:function(a){return t.back()}}},[e("img",{attrs:{src:s("i5dz")}})]),t._v(" "),e("div",{staticClass:"header-text"},[t._v("服务项目")]),t._v(" "),e("div",{staticClass:"header-cebian"})]),t._v(" "),e("div",{staticClass:"main"},[t._l(t.tabdata,function(a){return e("div",{staticClass:"main-box"},[e("div",{staticClass:"main-lift"},[e("div",{staticClass:"lift-text"},[t._v(t._s(a.msdCsName))]),t._v(" "),e("div",{staticClass:"lift-news"},[t._v("¥"+t._s(a.msdCsPrice))])]),t._v(" "),e("div",{staticClass:"main-right",on:{click:function(s){return t.godelete(a.msdCompanyServiceId)}}},[e("div",{staticClass:"right-text"},[t._v("删除")])])])}),t._v(" "),e("div",{staticClass:"btn",on:{click:function(a){return t.layuichange()}}},[t._v("\n\t\t\t添加项目\n\t\t")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.layuiboo,expression:"layuiboo"}],staticClass:"layui"},[e("div",{staticClass:"layui-inner"},[e("div",{staticClass:"tile"},[t._v("添加项目")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.msdCsName,expression:"msdCsName"}],attrs:{type:"text"},domProps:{value:t.msdCsName},on:{input:function(a){a.target.composing||(t.msdCsName=a.target.value)}}}),t._v(" "),e("div",{staticClass:"tile"},[t._v("服务价格")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.msdCsPrice,expression:"msdCsPrice"}],attrs:{type:"number"},domProps:{value:t.msdCsPrice},on:{input:function(a){a.target.composing||(t.msdCsPrice=a.target.value)}}}),t._v(" "),e("div",{staticClass:"btn",on:{click:function(a){return t.add()}}},[t._v("\n\t\t\t\t\t确认添加\n\t\t\t\t")]),t._v(" "),e("div",{staticClass:"tile",on:{click:function(a){return t.layuichange()}}},[t._v("取消")])])])],2)])},staticRenderFns:[]};var n=function(t){s("I5i5")},r=s("VU/8")(e.a,i,!1,n,"data-v-67982d0c",null);a.default=r.exports}});