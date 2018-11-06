webpackJsonp([1],{"0jH9":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Gu7T"),s=a.n(r),i=(a("ssT3"),{name:"Register",data:function(){return{captchaTpl:"",username:"",password:"",cpassword:"",captcha:"",msg:"",msgType:"",msgShow:!1}},created:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890",a="",r=[];try{r=[].concat(s()(Array(t))).map(function(){return e[Math.floor(Math.random()*e.length)]})}catch(t){}return r.forEach(function(t){a+='<span class="flex1 hcenter">'+t+"</span>"}),r=r.join(""),{tpl:a,captcha:r}}(6),e=t.tpl,a=t.captcha;this.captchaTpl=e,this.localCaptcha=a},register:function(t){var e=this;this.$nextTick(function(){("submit"===t.target.type?t.target:t.target.parentElement).canSubmit&&e.submit()})},submit:function(){if(this.captcha.toUpperCase()!==this.localCaptcha)this.showMsg("验证码不正确"),this.getCaptcha();else{var t={name:this.username,password:this.password,avatar:"https://api.adorable.io/avatars/200/"+this.username+".png"},e=this.$store.state.user;e&&e.name===t.name?this.showMsg("用户名已存在"):this.login(t)}},login:function(t){this.$store.dispatch("login",t),this.showMsg("注册成功","success")},showMsg:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";this.msg=t,this.msgType=a,this.msgShow=!1,this.$nextTick(function(){e.msgShow=!0})}}}),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[a("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(e){t.msgShow=e}}}),t._v(" "),a("div",{staticClass:"panel panel-default"},[t._m(0),t._v(" "),a("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("用户名")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator:input.required",value:{regex:/^[a-zA-Z]+\w*\s?\w*$/,error:"用户名要求以字母开头的单词字符"},expression:"{ regex: /^[a-zA-Z]+\\w*\\s?\\w*$/, error: '用户名要求以字母开头的单词字符' }",arg:"input",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写用户名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("密码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{regex:/^\w{6,16}$/,error:"密码要求 6 ~ 16 个单词字符"},expression:"{ regex: /^\\w{6,16}$/, error: '密码要求 6 ~ 16 个单词字符' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"请填写密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("确认密码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.cpassword,expression:"cpassword",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{target:"#password"},expression:"{ target: '#password' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"password",placeholder:"请填写确认密码"},domProps:{value:t.cpassword},on:{input:function(e){e.target.composing||(t.cpassword=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("图片验证码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.captcha,expression:"captcha",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"图片验证码"},expression:"{ title: '图片验证码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写验证码"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"thumbnail",attrs:{title:"点击图片重新获取验证码"},on:{click:t.getCaptcha}},[a("div",{staticClass:"captcha vcenter",domProps:{innerHTML:t._s(t.captchaTpl)}})]),t._v(" "),a("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"},on:{click:t.register}},[a("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v(" 注册\n        ")])])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("h3",{staticClass:"panel-title"},[this._v("请注册")])])}]};var n=a("VU/8")(i,o,!1,function(t){a("o5+H")},"data-v-fea64ee4",null);e.default=n.exports},"5zde":function(t,e,a){a("zQR9"),a("qyJz"),t.exports=a("FeBl").Array.from},Gu7T:function(t,e,a){"use strict";e.__esModule=!0;var r,s=a("c/Tr"),i=(r=s)&&r.__esModule?r:{default:r};e.default=function(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return(0,i.default)(t)}},Mhyx:function(t,e,a){var r=a("/bQp"),s=a("dSzd")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[s]===t)}},"c/Tr":function(t,e,a){t.exports={default:a("5zde"),__esModule:!0}},dY0y:function(t,e,a){var r=a("dSzd")("iterator"),s=!1;try{var i=[7][r]();i.return=function(){s=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!s)return!1;var a=!1;try{var i=[7],o=i[r]();o.next=function(){return{done:a=!0}},i[r]=function(){return o},t(i)}catch(t){}return a}},fBQ2:function(t,e,a){"use strict";var r=a("evD5"),s=a("X8DO");t.exports=function(t,e,a){e in t?r.f(t,e,s(0,a)):t[e]=a}},msXi:function(t,e,a){var r=a("77Pl");t.exports=function(t,e,a,s){try{return s?e(r(a)[0],a[1]):e(a)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},"o5+H":function(t,e){},qyJz:function(t,e,a){"use strict";var r=a("+ZMJ"),s=a("kM2E"),i=a("sB3e"),o=a("msXi"),n=a("Mhyx"),c=a("QRG4"),l=a("fBQ2"),u=a("3fs2");s(s.S+s.F*!a("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,a,s,d,p=i(t),m="function"==typeof this?this:Array,v=arguments.length,f=v>1?arguments[1]:void 0,h=void 0!==f,g=0,w=u(p);if(h&&(f=r(f,v>2?arguments[2]:void 0,2)),void 0==w||m==Array&&n(w))for(a=new m(e=c(p.length));e>g;g++)l(a,g,h?f(p[g],g):p[g]);else for(d=w.call(p),a=new m;!(s=d.next()).done;g++)l(a,g,h?o(d,f,[s.value,g],!0):s.value);return a.length=g,a}})}});
//# sourceMappingURL=1.7f6c7af2c130c6fd245c.js.map