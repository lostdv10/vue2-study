(function(){"use strict";var t={8663:function(t,e,n){var i=n(6369),r=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")])])])])}],s={name:"App"},l=s,a=n(1001),u=(0,a.Z)(l,r,o,!1,null,null,null),c=u.exports,v=n(2631),f=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Home组件内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:"News"}},[e("router-view")],1)],1)])},p=[],h={name:"Home"},m=h,d=(0,a.Z)(m,f,p,!1,null,null,null),_=d.exports,g=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About组件的内容")])},w=[],b={name:"About",beforeRouteEnter(t,e,n){console.log("About--beforeRouteEnter",t,e),"atguigu"===localStorage.getItem("school")?n():alert("学校名不对，无权限查看！")},beforeRouteLeave(t,e,n){console.log("About--beforeRouteLeave",t,e),n()}},y=b,x=(0,a.Z)(y,g,w,!1,null,null,null),C=x.exports,k=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("欢迎学习vue")]),t._m(0),t._m(1),t._m(2)])},O=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003 "),e("input",{attrs:{type:"text"}})])}],Z={name:"News",data(){return{opacity:1}},activated(){console.log("News组件被激活了"),this.timer=setInterval((()=>{this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){console.log("News组件失活了"),clearInterval(this.timer)}},P=Z,q=(0,a.Z)(P,k,O,!1,null,null,null),R=q.exports,j=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messageList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"xiangqing",params:{id:n.id,title:n.title}}}},[t._v(" "+t._s(n.title)+" ")]),e("button",{on:{click:function(e){return t.showPush(n)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.showReplace(n)}}},[t._v("replace查看")])],1)})),0),e("hr"),e("router-view")],1)},A=[],N=(n(7658),{name:"News",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{showPush(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},showReplace(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}}}),E=N,I=(0,a.Z)(E,j,A,!1,null,null,null),L=I.exports,H=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号："+t._s(t.id))]),e("li",[t._v("消息标题："+t._s(t.title))])])},T=[],D={name:"Detail",props:["id","title"]},M=D,S=(0,a.Z)(M,H,T,!1,null,null,null),$=S.exports;const z=new v.ZP({routes:[{name:"guanyv",path:"/about",component:C,meta:{title:"关于"}},{name:"zhuye",path:"/home",component:_,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:R,meta:{title:"新闻"},beforeEnter(t,e,n){console.log("独享路由守卫",t,e),"atguigu"===localStorage.getItem("school")?n():alert("暂无权限查看")}},{name:"xiaoxi",path:"message",component:L,meta:{title:"消息"},children:[{name:"xiangqing",path:"detail",component:$,meta:{title:"详情"},props(t){return{id:t.query.id,title:t.query.title}}}]}]}]});z.afterEach(((t,e)=>{console.log("后置路由守卫",t,e),document.title=t.meta.title||"硅谷系统"}));var F=z;i.ZP.config.productionTip=!1,i.ZP.use(v.ZP),new i.ZP({el:"#app",render:t=>t(c),router:F})}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],o=t[c][2];for(var l=!0,a=0;a<i.length;a++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[a])}))?i.splice(a--,1):(l=!1,o<s&&(s=o));if(l){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={826:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,s=i[0],l=i[1],a=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(a)var c=a(n)}for(e&&e(i);u<s.length;u++)o=s[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},i=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(8663)}));i=n.O(i)})();
//# sourceMappingURL=index.b95d69d6.js.map