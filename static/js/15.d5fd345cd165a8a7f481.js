webpackJsonp([15],{ABpS:function(t,a,s){"use strict";(function(t){var e=s("7QTg");s.n(e);a.a={name:"index",data:function(){return{swiperOption:{autoplay:{stopOnLastSlide:!0},pagination:{el:".swiper-pagination"},loop:!0},navdata:[],city:"未知",orderdata:[],baoboo:!1,myprice:0}},methods:{baocancel:function(){this.baoboo=!1},haveorder:function(a){var s=this;t.ajax({type:"post",url:s.myurl+"/company/orderReceiving",data:{msdOrderId:a},success:function(t){200==t.status?(s.myajax(),plus.nativeUI.toast("接单成功")):alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}})},cancel:function(a){var s=this;t.ajax({type:"post",url:s.myurl+"/company/removeOrder",data:{msdOrderId:a,userId:localStorage.getItem("msdCompanyId"),type:2},success:function(t){200==t.status?(s.myajax(),plus.nativeUI.toast("取消成功")):alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}})},opennew:function(t,a){this.$store.state.navindex0=-1,this.$store.state.msdOrderId=a,void 0==localStorage.getItem("msdCompanyId")?this.$router.push({name:"denglu-shifu"}):this.$router.push({name:t})},opennew02:function(t){this.$router.push({name:t})},myajax:function(){var a=this;function s(){plus.geolocation.getCurrentPosition(function(t){a.city=t.address.city},function(t){plus.nativeUI.confirm("请检查手机网络或者位置服务开关是否打开后",function(t){if(0==t.index)if(mui.os.ios)plus.runtime.launchApplication({action:"app-settings:"},function(t){});else{var a=plus.android.runtimeMainActivity(),e=new(plus.android.importClass("android.content.Intent"))(plus.android.importClass("android.provider.Settings").ACTION_LOCATION_SOURCE_SETTINGS);a.startActivity(e),s()}else s()},{title:"定位失败",buttons:["点我设置","点击重试"],verticalAlign:"bottom"})})}2==localStorage.getItem("msdCoIsConsume")&&t.ajax({type:"post",url:a.myurl+"/company/companLogin",data:{phone:localStorage.getItem("msdCoPhone"),pwd:localStorage.getItem("shifumima")},success:function(s){if(200==s.status){if(1==s.data.msdCoIsIdentity&&localStorage.setItem("msdCoIsIdentity",1),2==s.data.msdCoIsConsume)return t.ajax({type:"post",url:a.myurl+"/company/queryMsdInsuranceRule",success:function(t){if(200==t.status)return a.myprice=t.data,void(a.baoboo=!0)},error:function(t){alert("网络连接失败，请检查网络后再试！")}}),!1;localStorage.setItem("msdCoIsConsume",1),t.ajax({type:"post",url:a.myurl+"/company/queryUnreceivedOrder",data:{msdCompanyId:localStorage.getItem("msdCompanyId")},success:function(t){200==t.status?a.orderdata=t.data:alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}})}},error:function(t){alert("网络连接失败，请检查网络后再试！")}}),window.plus?s():document.addEventListener("plusready",s,!1),t.ajax({type:"post",url:a.myurl+"/user/selectMsdBanner",success:function(t){200==t.status?a.navdata=t.data:alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}})}},mounted:function(){this.myajax()},components:{swiper:e.swiper,swiperSlide:e.swiperSlide},computed:{swiper:function(){return this.$refs.mySwiper.swiper},myurl:function(){return this.$store.state.myurl},msdOrderId:function(){return this.$store.state.msdOrderId},navindex0:function(){return this.$store.state.navindex0}}}}).call(a,s("7t+N"))},Gpw7:function(t,a){t.exports="data:image/png;base64,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"},Spdz:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("ABpS"),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"header"},[e("div",{staticClass:"header-cebian"},[e("div",{staticClass:"cebian-text"},[t._v(t._s(t.city))])]),t._v(" "),e("div",{staticClass:"header-text"},[t._v("接单大厅")]),t._v(" "),e("div",{staticClass:"header-cebian",on:{click:function(a){return t.opennew02("shouye-yonghu")}}},[e("div",{staticClass:"cebian-news"},[t._v("切换身份")])])]),t._v(" "),e("div",{staticClass:"main"},[e("div",{staticClass:"main-one"},[e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[e("swiper-slide",[e("iframe",{staticStyle:{width:"100%"},attrs:{frameborder:"0",src:"https://v.qq.com/txp/iframe/player.html?vid=y0859zpekao",allowFullScreen:"true"}})]),t._v(" "),t._l(t.navdata,function(a){return e("swiper-slide",[e("img",{attrs:{src:t._f("myimg")(a.msdBaImg)}})])}),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),t._l(t.orderdata,function(a){return e("div",{staticClass:"main-two",on:{click:function(s){return t.opennew("xiangqing-shifu",a.msdOrderId)}}},[e("div",{staticClass:"two-box"},[e("div",{staticClass:"two-left"},[e("img",{attrs:{src:t._f("myimg")(a.msdSsImg)}})]),t._v(" "),e("div",{staticClass:"two-right"},[e("div",{staticClass:"two-text"},[t._v("类型："+t._s(a.msdSsName))]),t._v(" "),e("div",{staticClass:"two-text"},[t._v("上门时间："+t._s(1==a.msdOrIsAppointmentTime?a.msdOrAppointmentTime:"立即上门"))]),t._v(" "),e("div",{staticClass:"two-text"},[t._v("订单地址："+t._s(a.msdAdProvince+a.msdAdCity+a.msdAdArea))]),t._v(" "),e("div",{staticClass:"two-zi"},[e("div",{staticClass:"two-text"},[t._v("价格：")]),t._v(" "),e("div",{staticClass:"two-news"},[t._v("￥"+t._s(a.msdOrPrice))])])])]),t._v(" "),e("div",{staticClass:"two-hezi"},[e("div",{staticClass:"two-word",on:{click:function(s){return s.stopPropagation(),t.cancel(a.msdOrderId)}}},[t._v("取消订单")]),t._v(" "),e("div",{staticClass:"two-word",on:{click:function(s){return s.stopPropagation(),t.haveorder(a.msdOrderId)}}},[t._v("接受订单")])])])}),t._v(" "),0==t.orderdata.length?e("img",{staticClass:"nodata",staticStyle:{margin:".8rem auto"},attrs:{src:s("RGgU")}}):t._e()],2),t._v(" "),e("div",{staticClass:"bottom"},[t._m(0),t._v(" "),e("div",{staticClass:"bottom-box",on:{click:function(a){return t.opennew("dingdan-shifu")}}},[e("img",{attrs:{src:s("y4ya")}}),t._v(" "),e("div",{staticClass:"bottom-news"},[t._v("订单")])]),t._v(" "),e("div",{staticClass:"bottom-box",on:{click:function(a){return t.opennew("wode-shifu")}}},[e("img",{attrs:{src:s("svVb")}}),t._v(" "),e("div",{staticClass:"bottom-news"},[t._v("我的")])])]),t._v(" "),t.baoboo?e("div",{staticClass:"layui"},[e("div",{staticClass:"layui-inner"},[e("p",[t._v("接单之前必须购买"+t._s(t.myprice.msdIrName))]),t._v(" "),e("p",[t._v(t._s(t.myprice.msdIrPrice)+"元/年"+t._s(t.myprice.msdIrName))]),t._v(" "),e("div",{staticClass:"btn-box"},[e("div",{staticClass:"btn",on:{click:t.baocancel}},[t._v("取消购买")]),t._v(" "),e("div",{staticClass:"btn",on:{click:function(a){return t.opennew("kaibaoxian")}}},[t._v("确认购买")])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"bottom-box"},[a("img",{attrs:{src:s("Gpw7")}}),this._v(" "),a("div",{staticClass:"bottom-text"},[this._v("大厅")])])}]};var n=function(t){s("x9/F")},o=s("VU/8")(e.a,i,!1,n,"data-v-10b9ee43",null);a.default=o.exports},"x9/F":function(t,a){}});