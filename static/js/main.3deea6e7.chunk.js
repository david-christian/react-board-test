(this.webpackJsonpweek22hw1=this.webpackJsonpweek22hw1||[]).push([[0],{35:function(n,t,e){},36:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e(20),a=e.n(i),o=e(4),u=e(2),s=e(3),j=e(5),b="token",d=function(n){return localStorage.setItem(b,n)},f=function(){return localStorage.getItem(b)},l="https://student-json-api.lidemy.me",O=function(n){return fetch("".concat(l,"/posts?id=").concat(n)).then((function(n){return n.json()}))},p=function(n,t){return fetch("".concat(l,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))},x=function(){var n=f();return fetch("".concat(l,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))},h=Object(c.createContext)(null);function v(){var n=Object(u.a)(["\n  color: red;\n"]);return v=function(){return n},n}var g=s.a.div(v());function m(){var n=Object(c.useContext)(h).setUser,t=Object(c.useState)(""),e=Object(o.a)(t,2),i=e[0],a=e[1],u=Object(c.useState)(""),s=Object(o.a)(u,2),b=s[0],f=s[1],l=Object(c.useState)(""),O=Object(o.a)(l,2),v=O[0],m=O[1],w=Object(j.f)();return Object(r.jsxs)("form",{onSubmit:function(t){if(""===i&&""===b)return t.preventDefault(),void m("\u5e33\u865f\u6216\u5bc6\u78bc\u672a\u8f38\u5165");m(null),p(i,b).then((function(t){if(0===t.ok)return m(t.message);d(t.token),x().then((function(t){if(1!==t.ok)return d(null),m(t.toString());n(t.data),w.push("/")}))}))},children:[Object(r.jsxs)("div",{children:["username:",Object(r.jsx)("input",{value:i,onChange:function(n){return a(n.target.value)}})]}),Object(r.jsxs)("div",{children:["password:",Object(r.jsx)("input",{type:"password",value:b,onChange:function(n){return f(n.target.value)}})]}),Object(r.jsx)("button",{children:"\u767b\u5165"}),Object(r.jsx)(g,{children:v&&v})]})}var w=e(9);function y(){var n=Object(u.a)([""]);return y=function(){return n},n}function S(){var n=Object(u.a)([""]);return S=function(){return n},n}function k(){var n=Object(u.a)([""]);return k=function(){return n},n}function C(){var n=Object(u.a)([""]);return C=function(){return n},n}function z(){var n=Object(u.a)(["\n  color: #ccc;\n  text-decoration: none;\n"]);return z=function(){return n},n}function P(){var n=Object(u.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]);return P=function(){return n},n}function U(){var n=Object(u.a)(["\n  font-size: 24px;\n  width: 80%;\n  color: #333;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return U=function(){return n},n}function A(){var n=Object(u.a)(["\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 16px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]);return A=function(){return n},n}function E(){var n=Object(u.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]);return E=function(){return n},n}var I=s.a.div(E()),J=s.a.div(A()),_=Object(s.a)(w.b)(U()),$=s.a.div(P()),D=Object(s.a)(w.b)(z()),G=s.a.div(C()),N=s.a.button(k()),T=s.a.button(S()),B=s.a.div(y());function L(n){var t=n.post,e=n.user,c=null;return e&&t.userId===e.id&&(c=!0),Object(r.jsxs)(J,{children:[Object(r.jsx)(_,{to:"/posts/".concat(t.id),children:t.title}),c&&Object(r.jsx)(D,{to:"/edit/".concat(t.id),children:"\u7de8\u8f2f"}),Object(r.jsx)($,{children:new Date(t.createdAt).toLocaleString()})]})}function H(n){var t=n.allPage,e=n.page,c=n.setPage,i=function(n){return"next"===n&&e<t?c(e+1):"prev"===n&&e>=2?c(e-1):void 0};return Object(r.jsxs)(G,{children:[Object(r.jsx)(N,{onClick:function(){return i("prev")},children:"\u4e0a\u4e00\u9801"}),Object(r.jsx)(T,{onClick:function(){return i("next")},children:"\u4e0b\u4e00\u9801"}),Object(r.jsxs)(B,{children:["\u7b2c",e,"\u9801/\u5171",t,"\u9801"]})]})}function M(){var n=Object(c.useState)(null),t=Object(o.a)(n,2),e=t[0],i=t[1],a=Object(c.useState)([]),u=Object(o.a)(a,2),s=u[0],j=u[1],b=Object(c.useState)(),d=Object(o.a)(b,2),f=d[0],O=d[1],p=Object(c.useState)(1),x=Object(o.a)(p,2),v=x[0],g=x[1],m=Object(c.useContext)(h).user;return Object(c.useEffect)((function(){fetch("".concat(l,"/posts?_sort=createdAt&_order=desc")).then((function(n){return n.json()})).then((function(n){O(Math.ceil(n.length/5))}))}),[]),Object(c.useEffect)((function(){(function(n,t){return fetch("".concat(l,"/posts?_sort=createdAt&_order=desc&_page=").concat(n,"&_limit=").concat(t)).then((function(n){return n.json()}))})(v,5).then((function(n){j(n),i(!0)}))}),[v]),Object(r.jsxs)(I,{children:[s.map((function(n){return Object(r.jsx)(L,{post:n,user:m},n.id)})),e&&Object(r.jsx)(H,{allPage:f,page:v,setPage:g})]})}function q(){var n=Object(u.a)(["\n  font-size: 24px;\n  margin-left: 10px;\n  margin-top: 20px;\n  white-space: pre-wrap;\n  word-break: break-all;\n"]);return q=function(){return n},n}function F(){var n=Object(u.a)(["\n  color: #ccc;\n  margin-left: 10px;\n  margin-top: 10px;\n"]);return F=function(){return n},n}function K(){var n=Object(u.a)(["\n  font-size: 60px;\n  word-break: break-all;\n"]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n  width: 50%;\n  margin: 0 auto;\n  display: block;\n  box-shadow: 0px 5px 8px black;\n  border-top: solid 2px black;\n  padding: 20px;\n"]);return Q=function(){return n},n}var R=s.a.div(Q()),V=s.a.div(K()),W=s.a.div(F()),X=s.a.div(q());function Y(){var n=Object(c.useState)(null),t=Object(o.a)(n,2),e=t[0],i=t[1],a=Object(j.h)().id;return Object(c.useEffect)((function(){O(a).then((function(n){return i(n[0])}))}),[a]),Object(r.jsxs)(R,{children:[Object(r.jsx)(V,{children:e&&e.title}),Object(r.jsx)(W,{children:e&&new Date(e.createdAt).toLocaleString()}),Object(r.jsx)(X,{children:e&&e.body})]})}function Z(){var n=Object(u.a)(["\n  color: red;\n"]);return Z=function(){return n},n}var nn=s.a.div(Z());function tn(){var n=Object(c.useContext)(h).setUser,t=Object(c.useState)(""),e=Object(o.a)(t,2),i=e[0],a=e[1],u=Object(c.useState)(""),s=Object(o.a)(u,2),b=s[0],f=s[1],O=Object(c.useState)(""),v=Object(o.a)(O,2),g=v[0],m=v[1],w=Object(c.useState)(""),y=Object(o.a)(w,2),S=y[0],k=y[1],C=Object(j.f)();return Object(r.jsxs)("form",{onSubmit:function(t){if(""===i&&""===b&&""===g)return t.preventDefault(),void k("\u66b1\u7a31\u6216\u5e33\u865f\u6216\u5bc6\u78bc \u672a\u8f38\u5165");var e,r,c;k(null),(e=i,r=b,c=g,fetch("".concat(l,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:e,username:r,password:c})}).then((function(n){return n.json()}))).then((function(t){if(0===t.ok)return k(t.message);p(b,"Lidemy").then((function(t){if(0===t.ok)return k(t.message);d(t.token),x().then((function(t){if(1!==t.ok)return d(null),k(t.toString());n(t.data),C.push("/")}))}))}))},children:[Object(r.jsxs)("div",{children:["nickname:",Object(r.jsx)("input",{value:i,onChange:function(n){return a(n.target.value)}})]}),Object(r.jsxs)("div",{children:["username:",Object(r.jsx)("input",{value:b,onChange:function(n){return f(n.target.value)}})]}),Object(r.jsxs)("div",{children:["password:",Object(r.jsx)("input",{type:"password",value:g,onChange:function(n){return m(n.target.value)}})]}),Object(r.jsx)("button",{children:"\u8a3b\u518a"}),Object(r.jsx)(nn,{children:S&&S})]})}function en(){var n=Object(u.a)(["\n  display: flex;\n  align-self: flex-end;\n  float: right;\n  margin-top: 30px;\n"]);return en=function(){return n},n}function rn(){var n=Object(u.a)(["\n  display: block;\n  width: 600px;\n  height: 500px;\n  padding: 12px;\n  box-sizing: border-box;\n  margin-top: 20px;\n"]);return rn=function(){return n},n}function cn(){var n=Object(u.a)(["\n  width: 600px;\n  font-size: 20px;\n  padding: 6px;\n  margin-top: 40px;\n  box-sizing: border-box;\n"]);return cn=function(){return n},n}function an(){var n=Object(u.a)(["\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 5px 8px black;\n  border-top: solid 2px black;\n  padding: 20px;\n"]);return an=function(){return n},n}var on=s.a.div(an()),un=s.a.input(cn()),sn=s.a.textarea(rn()),jn=s.a.button(en());function bn(){var n=Object(c.useState)(""),t=Object(o.a)(n,2),e=t[0],i=t[1],a=Object(c.useState)(""),u=Object(o.a)(a,2),s=u[0],b=u[1],d=Object(c.useState)(""),O=Object(o.a)(d,2),p=O[0],x=O[1],h=Object(j.f)();return Object(r.jsx)(on,{children:Object(r.jsxs)("form",{onSubmit:function(){(function(n,t){var e=f();return fetch("".concat(l,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))})(e,s).then((function(n){if(0===n.ok)return x(n.message);h.push("/")}))},children:[Object(r.jsx)(un,{value:e,onChange:function(n){return i(n.target.value)}}),Object(r.jsx)(sn,{value:s,onChange:function(n){return b(n.target.value)}}),p&&p,Object(r.jsx)(jn,{children:"\u9001\u51fa\u6587\u7ae0"})]})})}function dn(){var n=Object(u.a)(["\n  display: flex;\n  height: 100%;\n"]);return dn=function(){return n},n}function fn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100px;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n  ","\n"]);return fn=function(){return n},n}function ln(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n\n  "," {\n    margin-left: 64px;\n  }\n"]);return ln=function(){return n},n}function On(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  height: 64px;\n"]);return On=function(){return n},n}function pn(){var n=Object(u.a)(["\n  font-size: 32px;\n  font-weight: bold;\n"]);return pn=function(){return n},n}function xn(){var n=Object(u.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px 32px;\n  box-sizing: border-box;\n"]);return xn=function(){return n},n}var hn=s.a.div(xn()),vn=s.a.div(pn()),gn=s.a.div(On()),mn=s.a.div(ln(),gn),wn=Object(s.a)(w.b)(fn(),(function(n){return n.$active&&"background: rgba(0, 0, 0, 0.2);"})),yn=s.a.div(dn());function Sn(n){var t=n.user,e=n.pathname;return Object(r.jsxs)(yn,{children:[!t&&Object(r.jsx)(wn,{to:"/login",$active:"/login"===e,children:"\u767b\u5165"}),!t&&Object(r.jsx)(wn,{to:"/registered",$active:"/registered"===e,children:"\u8a3b\u518a"})]})}function kn(){var n=Object(j.g)(),t=Object(c.useContext)(h),e=t.user,i=t.setUser,a=t.isGetingUser,o=t.setIsGetingUser,u=Object(j.f)(),s=n.pathname;return Object(r.jsxs)(hn,{children:[Object(r.jsxs)(mn,{children:[Object(r.jsx)(vn,{children:"SPA \u7559\u8a00\u677f"}),Object(r.jsxs)(gn,{children:[Object(r.jsx)(wn,{to:"/",$active:"/"===n.pathname,children:"\u9996\u9801"}),e&&Object(r.jsx)(wn,{to:"/newpost",$active:"/newpost"===s,children:"\u767c\u4f48\u6587\u7ae0"})]})]}),Object(r.jsxs)(gn,{children:[e&&Object(r.jsx)(wn,{to:"/",onClick:function(){d(""),o(!0),i(null),"/"!==n.pathname&&u.push("/")},children:"\u767b\u51fa"}),a&&Object(r.jsx)(Sn,{user:e,pathname:s})]})]})}function Cn(){var n=Object(u.a)(["\n  display: flex;\n  align-self: flex-end;\n  float: right;\n  margin-top: 30px;\n"]);return Cn=function(){return n},n}function zn(){var n=Object(u.a)(["\n  display: block;\n  width: 600px;\n  height: 500px;\n  padding: 12px;\n  box-sizing: border-box;\n  margin-top: 20px;\n"]);return zn=function(){return n},n}function Pn(){var n=Object(u.a)(["\n  width: 600px;\n  font-size: 20px;\n  padding: 6px;\n  margin-top: 40px;\n  box-sizing: border-box;\n"]);return Pn=function(){return n},n}function Un(){var n=Object(u.a)(["\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 5px 8px black;\n  border-top: solid 2px black;\n  padding: 20px;\n"]);return Un=function(){return n},n}var An=s.a.div(Un()),En=s.a.input(Pn()),In=s.a.textarea(zn()),Jn=s.a.button(Cn());function _n(){var n=Object(c.useState)(""),t=Object(o.a)(n,2),e=t[0],i=t[1],a=Object(c.useState)(""),u=Object(o.a)(a,2),s=u[0],b=u[1],d=Object(c.useState)(""),f=Object(o.a)(d,2),p=f[0],x=f[1],h=Object(j.h)().id,v=Object(j.f)();return Object(c.useEffect)((function(){O(h).then((function(n){i(n[0].title),b(n[0].body)}))}),[h]),Object(r.jsx)(An,{children:Object(r.jsxs)("form",{onSubmit:function(){(function(n,t,e){return fetch("".concat(l,"/posts/").concat(e),{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))})(e,s,h).then((function(n){if(0===n.ok)return x(n.message);v.push("/")}))},children:[Object(r.jsx)(En,{value:e,onChange:function(n){return i(n.target.value)}}),Object(r.jsx)(In,{value:s,onChange:function(n){return b(n.target.value)}}),p&&p,Object(r.jsx)(Jn,{children:"\u7de8\u8f2f\u6587\u7ae0"})]})})}function $n(){var n=Object(u.a)([""]);return $n=function(){return n},n}var Dn=s.a.div($n());function Gn(){var n=Object(c.useState)(!1),t=Object(o.a)(n,2),e=t[0],i=t[1],a=Object(c.useState)(null),u=Object(o.a)(a,2),s=u[0],b=u[1];return Object(c.useEffect)((function(){if(f())return x().then((function(n){n.ok&&b(n.data)}));i(!0)}),[]),Object(r.jsx)(h.Provider,{value:{user:s,setUser:b,isGetingUser:e,setIsGetingUser:i},children:Object(r.jsx)(Dn,{children:Object(r.jsxs)(w.a,{children:[Object(r.jsx)(kn,{}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",children:Object(r.jsx)(M,{})}),Object(r.jsx)(j.a,{path:"/newpost",children:Object(r.jsx)(bn,{})}),Object(r.jsx)(j.a,{path:"/login",children:Object(r.jsx)(m,{})}),Object(r.jsx)(j.a,{path:"/posts/:id",children:Object(r.jsx)(Y,{})}),Object(r.jsx)(j.a,{path:"/edit/:id",children:Object(r.jsx)(_n,{})}),Object(r.jsx)(j.a,{path:"/registered",children:Object(r.jsx)(tn,{})})]})]})})})}e(35);a.a.render(Object(r.jsx)(Gn,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.3deea6e7.chunk.js.map