(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1185:function(e,t,n){"use strict";n.r(t);var r=n(1200),o=n(1191);for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);var f=n(22),component=Object(f.a)(o.default,r.a,r.b,!1,null,null,null);t.default=component.exports},1191:function(e,t,n){"use strict";n.r(t);var r=n(1192),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t.default=o.a},1192:function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(555)),c={components:{CreateDialog:r(n(554)).default},data:function(){return{reponame:this.$route.query.reponame}},layout:"centered",auth:"guest",methods:{createRepo:function(e){this.$refs.form.validate()&&(o.default.set("accessTokenEndpoint","https://nm-githubproxy.azurewebsites.net/api/handler/?reponame="+e,{expires:1}),this.$router.push("login"))}}};t.default=c},1200:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("CreateDialog",{attrs:{"personal-repo":e.reponame,persistent:!0,value:!0},on:{create:function(t){return e.createRepo(t)}}})},o=[]}}]);