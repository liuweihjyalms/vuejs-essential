webpackJsonp([1],{j7e0:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"Home",data:function(){return{msg:"",msgType:"",msgShow:!1}},beforeRouteEnter:function(t,e,s){var n=e.name,o=t.params.logout;s(function(t){if(t.$store.state.auth)switch(n){case"Register":t.showMsg("注册成功")}else o&&t.showMsg("操作成功")})},computed:{auth:function(){return this.$store.state.auth}},watch:{auth:function(t){t||this.showMsg("操作成功")}},methods:{showMsg:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.msg=t,this.msgType=e,this.msgShow=!0}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(e){t.msgShow=e}}})],1)},staticRenderFns:[]};var a=s("VU/8")(n,o,!1,function(t){s("wDwU")},"data-v-483d9a06",null);e.default=a.exports},wDwU:function(t,e){}});
//# sourceMappingURL=1.aa56411edc6564f5609e.js.map