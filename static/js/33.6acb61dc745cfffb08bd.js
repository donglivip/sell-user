webpackJsonp([33],{CSPc:function(t,e,a){"use strict";(function(t){e.a={name:"openvip-shifu",data:function(){return{price:"",state:1,channel:"",mydata:{},payboo:!1,myid:""}},methods:{payshow:function(t){this.myid=t,this.payboo=!this.payboo},change:function(t){this.state=t},have:function(){var e=this;t.ajax({type:"post",url:e.myurl+"/user/queryMsdMember",success:function(t){e.mydata=t.data,0==t.data.length&&(alert("会员功能暂时没有开通呢！"),e.back())},error:function(t){alert("网络连接失败，请检查网络后再试！")}})},myajax:function(){var e=this;3==e.state?t.ajax({type:"post",url:e.myurl+"/user/insertMember",dataType:"json",data:{msdUserId:localStorage.getItem("msdCompanyId"),msdMemberId:e.myid,type:2},success:function(t){200==t.status?(localStorage.setItem("msdCoIsMemeber",1),e.back()):alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}}):t.ajax({type:"post",url:e.myurl+"/user/insertCompanyMemberAPIWX",dataType:"json",data:{msdUserId:localStorage.getItem("msdCompanyId"),state:e.state,msdMemberId:e.myid},success:function(t){1==e.state?plus.payment.request(e.channel[0],t.data[0],function(t){plus.nativeUI.alert("支付成功！",function(){localStorage.setItem("msdCoIsMemeber",1),e.back()})},function(t){alert("支付失败！")}):plus.payment.request(e.channel[1],t,function(t){plus.nativeUI.alert("支付成功！",function(){localStorage.setItem("msdCoIsMemeber",1),e.back()})},function(t){alert("支付失败！")})},error:function(t){alert("网络连接失败，请检查网络后再试！")}})},back:function(){this.$router.back()},opennew:function(t){this.$router.push({name:t})}},mounted:function(){var t=this;function e(){plus.payment.getChannels(function(e){t.channel=e},function(t){alert("获取支付通道失败："+t.message)})}t.have(),window.plus?e():document.addEventListener("plusready",e,!1)},computed:{myurl:function(){return this.$store.state.myurl}}}}).call(e,a("7t+N"))},HzMh:function(t,e){},fz77:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("CSPc"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"header"},[s("div",{staticClass:"header-cebian",on:{click:function(e){return t.back()}}},[s("img",{attrs:{src:a("i5dz")}})]),t._v(" "),s("div",{staticClass:"header-text"},[t._v("开通vip")]),t._v(" "),s("div",{staticClass:"header-cebian"})]),t._v(" "),t.payboo?t._e():s("div",{staticClass:"main"},t._l(t.mydata,function(e){return s("block",[s("div",{staticClass:"title"},[t._v("\n\t\t\t\t"+t._s(e.msdMeName)+"\n\t\t\t")]),t._v(" "),s("div",{staticClass:"text",domProps:{innerHTML:t._s(e.msdMeResult)}}),t._v(" "),s("div",{staticClass:"btn",on:{click:function(a){return t.payshow(e.msdMemberId)}}},[t._v("\n\t\t\t\t立即加入"+t._s(e.msdMeName)+"/支付"+t._s(e.msdMePrice)+"元\n\t\t\t")])])}),1),t._v(" "),t.payboo?s("div",{staticClass:"main"},[t._m(0),t._v(" "),s("div",{staticClass:"main-three"},[s("div",{staticClass:"three-box",on:{click:function(e){return t.change(1)}}},[s("div",{staticClass:"three-text"},[t._v("支付宝")]),t._v(" "),1!=t.state?s("img",{attrs:{src:a("//pS")}}):t._e(),t._v(" "),1==t.state?s("img",{attrs:{src:a("5ZYg")}}):t._e()]),t._v(" "),s("div",{staticClass:"three-box",on:{click:function(e){return t.change(2)}}},[s("div",{staticClass:"three-text"},[t._v("微信")]),t._v(" "),2!=t.state?s("img",{attrs:{src:a("//pS")}}):t._e(),t._v(" "),2==t.state?s("img",{attrs:{src:a("5ZYg")}}):t._e()]),t._v(" "),s("div",{staticClass:"three-box",on:{click:function(e){return t.change(3)}}},[s("div",{staticClass:"three-text"},[t._v("钱包支付")]),t._v(" "),3!=t.state?s("img",{attrs:{src:a("//pS")}}):t._e(),t._v(" "),3==t.state?s("img",{attrs:{src:a("5ZYg")}}):t._e()])]),t._v(" "),s("div",{staticClass:"bottom active",on:{click:function(e){return t.myajax()}}},[s("div",{staticClass:"bottom-text"},[t._v("确认开通 ")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-two"},[e("div",{staticClass:"two-text"},[this._v("付款方式")])])}]};var i=function(t){a("HzMh")},r=a("VU/8")(s.a,n,!1,i,"data-v-fef69d16",null);e.default=r.exports}});