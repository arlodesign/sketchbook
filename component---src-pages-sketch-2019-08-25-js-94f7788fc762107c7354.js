(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"2PzF":function(t,n,e){"use strict";e("rE2o"),e("ioFf"),e("rGqo");function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}var u=function(t){return"number"==typeof t},c=function(t){return t<0?0:t>1?1:t};function f(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e("KKXr"),e("bWfx");var s,l=function(t,n){return[t[0],t[1],n]},h=e("o0o1"),v=e.n(h);e("ls82");function p(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var d,y=Symbol(),g=function(){};!function(t){t[t.U8=0]="U8",t[t.U8C=1]="U8C",t[t.I8=2]="I8",t[t.U16=3]="U16",t[t.I16=4]="I16",t[t.U32=5]="U32",t[t.I32=6]="I32",t[t.F32=7]="F32",t[t.F64=8]="F64"}(d||(d={}));var b;p(s={},0,1),p(s,1,1),p(s,2,1),p(s,3,2),p(s,4,2),p(s,5,4),p(s,6,4),p(s,7,4),p(s,8,8);!function(t){t[t.FINE=0]="FINE",t[t.DEBUG=1]="DEBUG",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.SEVERE=4]="SEVERE",t[t.NONE=5]="NONE"}(b||(b={}));var m=function(t){return null!=t&&"function"==typeof t[Symbol.iterator]},w=function(){function t(n){o(this,t),this.value=n}return a(t,[{key:"deref",value:function(){return this.value}}]),t}(),x=function(t){return new w(t)},k=function(t){return t instanceof w},E=function(t){return t instanceof w?t:new w(t)},O=function(t){return t instanceof w?t.deref():t},j=function(t,n){return null!=t&&"function"==typeof t[n]},S=function(t){return null!=t&&"function"!=typeof t&&void 0!==t.length};function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t){return(A="function"==typeof Symbol&&"symbol"===L(Symbol.iterator)?function(t){return L(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":L(t)})(t)}function F(t,n){return!n||"object"!==A(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function R(t,n){return(R=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function z(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&R(t,n)}function I(t,n,e){return(I=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&R(o,e.prototype),o}).apply(null,arguments)}function D(t){var n="function"==typeof Map?new Map:void 0;return(D=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return I(t,arguments,_(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),R(r,t)})(t)}var T=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return void 0!==t?": "+t:""};return function(e){function r(e){return o(this,r),F(this,_(r).call(this,t(e)+n(e)))}return z(r,e),r}(D(Error))},N=T((function(){return"illegal arity"})),P=function(t){throw new N(t)},M=function(t){return 2===t.length?[void 0,t[1]]:3===t.length?[t[1],t[2]]:P(t.length)};function B(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=n[0],o=r[0],i=r[1],a=r[2],u=null==(n=M(n))[0]?o():n[0],c=n[1];return O(i(j(c,"$reduce")?c.$reduce(a,u):S(c)?G(a,u,c):U(a,u,c)))}var G=function(t,n,e){for(var r=0,o=e.length;r<o;r++)if(n=t(n,e[r]),k(n)){n=n.deref();break}return n},U=function(t,n,e){var r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done);r=!0){if(n=t(n,a.value),k(n)){n=n.deref();break}}}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n},q=function(t,n){return[t,function(t){return t},n]};function V(t){return t?f(t):q((function(){return[]}),(function(t,n){return t.push(n),t}))}var H=v.a.mark(K),W=v.a.mark(Y);function K(t,n){var e,r,o,i,a,u,c,f,s,l;return v.a.wrap((function(h){for(;;)switch(h.prev=h.next){case 0:e=t(V()),r=e[1],o=e[2],i=!0,a=!1,u=void 0,h.prev=6,c=n[Symbol.iterator]();case 8:if(i=(f=c.next()).done){h.next=19;break}if(s=f.value,l=o([],s),!k(l)){h.next=14;break}return h.delegateYield(O(r(l.deref())),"t0",13);case 13:return h.abrupt("return");case 14:if(!l.length){h.next=16;break}return h.delegateYield(l,"t1",16);case 16:i=!0,h.next=8;break;case 19:h.next=25;break;case 21:h.prev=21,h.t2=h.catch(6),a=!0,u=h.t2;case 25:h.prev=25,h.prev=26,i||null==c.return||c.return();case 28:if(h.prev=28,!a){h.next=31;break}throw u;case 31:return h.finish(28);case 32:return h.finish(25);case 33:return h.delegateYield(O(r([])),"t3",34);case 34:case"end":return h.stop()}}),H,null,[[6,21,25,33],[26,,28,32]])}function Y(t,n){var e,r,o,i,a,u,c,f;return v.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:e=t([g,g,function(t,n){return n}])[2],r=!0,o=!1,i=void 0,s.prev=4,a=n[Symbol.iterator]();case 6:if(r=(u=a.next()).done){s.next=21;break}if(c=u.value,f=e(y,c),!k(f)){s.next=15;break}if((f=O(f.deref()))===y){s.next=14;break}return s.next=14,f;case 14:return s.abrupt("return");case 15:if(f===y){s.next=18;break}return s.next=18,f;case 18:r=!0,s.next=6;break;case 21:s.next=27;break;case 23:s.prev=23,s.t0=s.catch(4),o=!0,i=s.t0;case 27:s.prev=27,s.prev=28,r||null==a.return||a.return();case 30:if(s.prev=30,!o){s.next=33;break}throw i;case 33:return s.finish(30);case 34:return s.finish(27);case 35:case"end":return s.stop()}}),W,null,[[4,23,27,35],[28,,30,34]])}var C=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Y,r=n.length-1;return m(n[r])?n.length>1?e(t.apply(null,n.slice(0,r)),n[r]):e(t(),n[0]):void 0};function J(t,n){return n?Y(J(t),n):function(n){var e=n[2];return l(n,(function(n,r){return e(n,t(r))}))}}function X(t,n,e){return new Q(t,n,e)}var Q=function(){function t(n,e,r){o(this,t),void 0===n?(n=0,e=1/0):void 0===e&&(e=n,n=0),r=void 0===r?n<e?1:-1:r,this.from=n,this.to=e,this.step=r}return a(t,[{key:Symbol.iterator,value:v.a.mark((function t(){var n,e,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.step,e=this.to,r=this.from,!(n>0)){t.next=12;break}case 4:if(!(r<e)){t.next=10;break}return t.next=7,r;case 7:r+=n,t.next=4;break;case 10:t.next=19;break;case 12:if(!(n<0)){t.next=19;break}case 13:if(!(r>e)){t.next=19;break}return t.next=16,r;case 16:r+=n,t.next=13;break;case 19:case"end":return t.stop()}}),t,this)}))},{key:"$reduce",value:function(t,n){var e=this.step;if(e>0)for(var r=this.from,o=this.to;r<o&&!k(n);r+=e)n=t(n,r);else for(var i=this.from,a=this.to;i>a&&!k(n);i+=e)n=t(n,i);return n}}]),t}();function $(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var r,o;switch(n.length){case 4:o=n[3],r=n[2];break;case 3:o=n[2];break;case 2:return J((function(t){return $(n[0],n[1],t)}));default:P(n.length)}return B(n[0](n[1]),r,o)}function Z(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=n[0],o=n[1],i=n[2],a=n[3],u=n[4],c=n[5],s=n[6],l=n[7],h=n[8],v=n[9];switch(n.length){case 0:P(0);case 1:return r;case 2:return function(){return r(o.apply(void 0,arguments))};case 3:return function(){return r(o(i.apply(void 0,arguments)))};case 4:return function(){return r(o(i(a.apply(void 0,arguments))))};case 5:return function(){return r(o(i(a(u.apply(void 0,arguments)))))};case 6:return function(){return r(o(i(a(u(c.apply(void 0,arguments))))))};case 7:return function(){return r(o(i(a(u(c(s.apply(void 0,arguments)))))))};case 8:return function(){return r(o(i(a(u(c(s(l.apply(void 0,arguments))))))))};case 9:return function(){return r(o(i(a(u(c(s(l(h.apply(void 0,arguments)))))))))};case 10:default:var p=function(){return r(o(i(a(u(c(s(l(h(v.apply(void 0,arguments))))))))))};return 10===n.length?p:Z.apply(void 0,[p].concat(f(n.slice(10))))}}function tt(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return Z.apply(null,n)}function nt(t,n){return n?K(nt(t),n):function(n){var e=n[2],r=t;return l(n,(function(t,n){return--r>0?e(t,n):0===r?E(e(t,n)):x(t)}))}}function et(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return C(et,n)||function(t){var e=t[2],r=n[0],o=n[1]||0;return l(t,(function(t,n){return e(t,r(o++,n))}))}}function rt(t,n){t=t||"";var e=!0;return n?f(n).join(t):q((function(){return""}),(function(n,r){return n=e?n+r:n+t+r,e=!1,n}))}var ot=v.a.mark(it);function it(){var t,n,e,r,o,i,a,u,c,f,s,l,h=arguments;return v.a.wrap((function(v){for(;;)switch(v.prev=v.next){case 0:for(t=h.length,n=new Array(t),e=0;e<t;e++)n[e]=h[e];r=n.map((function(t){return t[Symbol.iterator]()}));case 2:0,o=[],i=!0,a=!1,u=void 0,v.prev=7,c=r[Symbol.iterator]();case 9:if(i=(f=c.next()).done){v.next=18;break}if(s=f.value,!(l=s.next()).done){v.next=14;break}return v.abrupt("return");case 14:o.push(l.value);case 15:i=!0,v.next=9;break;case 18:v.next=24;break;case 20:v.prev=20,v.t0=v.catch(7),a=!0,u=v.t0;case 24:v.prev=24,v.prev=25,i||null==c.return||c.return();case 27:if(v.prev=27,!a){v.next=30;break}throw u;case 30:return v.finish(27);case 31:return v.finish(24);case 32:return v.next=34,o;case 34:v.next=2;break;case 36:case"end":return v.stop()}}),ot,null,[[7,20,24,32],[25,,27,31]])}var at=function(t){var n=r(t,2),e=n[0],o=n[1];return"".concat(e,"*").concat(o)},ut=T((function(){return"unsupported operation"})),ct=function(t){throw new ut(t)},ft=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new Array(5),r=function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=e[o[n].length]||t;return a?a.apply(void 0,o):ct("no impl for vec size ".concat(o[n].length))};return r.add=function(t,n){return e[t]=n},r.default=function(n){return t=n},r},st=function(t){return J(function(t){return function(n){return n>1?"".concat(t,"[i").concat(t,"+").concat(n,"*s").concat(t,"]"):1==n?"".concat(t,"[i").concat(t,"+s").concat(t,"]"):"".concat(t,"[i").concat(t,"]")}}(t),X())},lt=function(t){return J((function(n){return"".concat(t,"[").concat(n,"]")}),X())},ht=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"a",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",u=arguments.length>7&&void 0!==arguments[7]&&arguments[7];return[i,$(tt(nt(t),et((function(t,e){return n(e,t)}))),rt(o),it.apply(null,e.split(",").map(u?st:lt))),a,""!==r?"return ".concat(r,";"):""]},vt=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"a",r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return[r,"for(let i=a.length;--i>=0;) {",t(n.split(",").map(i?function(t){return"".concat(t,"[i").concat(t,"+i*s").concat(t,"]")}:function(t){return"".concat(t,"[i]")})),"}",o,null!==e?"return ".concat(e,";"):""]},pt=function(t,n){return"!".concat(t," && (").concat(t,"=").concat(n.split(",")[1],");")},dt=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"a",i=arguments.length>5?arguments[5]:void 0,a=arguments.length>6?arguments[6]:void 0,u=arguments.length>7?arguments[7]:void 0,c=arguments.length>8&&void 0!==arguments[8]&&arguments[8];return new Function(e,ht(t,n,r,o,i,a,u,c).join(""))},yt=function(t,n,e,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:o,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"a",u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",c=arguments.length>8?arguments[8]:void 0,s=arguments.length>9?arguments[9]:void 0,l=arguments.length>10&&void 0!==arguments[10]&&arguments[10];return new Function(r,"return (".concat(o,")=>{").concat(ht(t,e,i,a,u,c,s,l).join(""),"}")).apply(void 0,f(n))},gt=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"a",o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return new Function(n,vt(t,e,r,o,i,a).join(""))},bt=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"o,a,b",e=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"o",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=arguments.length>5?arguments[5]:void 0;e=e||n,i=null!=i?i:pt(r,n);var a=ft(o),u=function(o){return a.add(o,dt(o,t,n,e,r,"",i))};return a.default(gt(t,n,e,r,i)),[a,u(2),u(3),u(4)]},mt=function(t){return bt(function(t){return function(n){var e=r(n,3),o=e[0],i=e[1],a=e[2];return"".concat(o,"=").concat(i).concat(t).concat(a,";")}}(t))},wt=function(t){return bt(function(t){return function(n){var e=r(n,2),o=e[0],i=e[1];return"".concat(o,"=").concat(i).concat(t,"n;")}}(t),"o,a,n")},xt=r(mt("-"),4),kt=xt[0],Et=(xt[1],xt[2],xt[3],function(t){return Ot.add(t,dt(t,(function(t){var n=r(t,1)[0];return"".concat(n,"*").concat(n)}),"a","a","","+","return ",";"))}),Ot=ft();Ot.default(gt((function(t){var n=r(t,1)[0];return"sum+=".concat(n,"*").concat(n,";")}),"a",void 0,"sum","let sum=0;"));Et(2),Et(3),Et(4);var jt=function(t){return St.add(t,dt(t,at,"a,b",void 0,"","+","return ",";"))},St=ft();St.default(gt((function(t){var n=r(t,2),e=n[0],o=n[1];return"s+=".concat(e,"*").concat(o,";")}),"a,b",void 0,"s","let s=0;"));jt(2),jt(3),jt(4);var Lt=bt((function(t){var n=r(t,3),e=n[0],o=n[1],i=n[2];return"".concat(e,"=").concat(o,"+(").concat(i,"-").concat(o,")*n;")}),"o,a,b,n"),At=r(Lt,4),Ft=At[0],_t=At[1],Rt=(At[2],At[3],function(t){var n=r(t,2),e=n[0],o=n[1];return"t=".concat(e,"-").concat(o,";s+=t*t;")}),zt=function(t){return It.add(t,dt(t,Rt,"a,b",void 0,"s","","let t,s=0;"))},It=ft();It.default(gt(Rt,"a,b",void 0,"s","let t,s=0;"));zt(2),zt(3),zt(4),e("bHtr");var Dt,Tt=bt((function(t){var n=r(t,1)[0];return"".concat(n,"=n;")}),"a,n","a","a",0,""),Nt=r(Tt,4),Pt=(Nt[0],Nt[1],Nt[2],Nt[3],function(t){return j(t,"empty")?t.empty():(n=t.length,new Array(n).fill(0));var n}),Mt=bt((function(t){var n=r(t,2),e=n[0],o=n[1];return"".concat(e,"=").concat(o,";")}),"o,a",void 0,"o",1,"!o&&(o=[]);"),Bt=r(Mt,4),Gt=Bt[0],Ut=(Bt[1],Bt[2],Bt[3],Math.PI,Math.sqrt(5),Math.SQRT2,Math.sqrt(3),1e-6);!function(t){t[t.EQUAL=0]="EQUAL",t[t.FLAT=1]="FLAT",t[t.UNDER=2]="UNDER",t[t.OVER=3]="OVER",t[t.OTHER=4]="OTHER"}(Dt||(Dt={}));var qt=r(wt("*"),4),Vt=(qt[0],qt[1],qt[2],qt[3],r(mt("+"),4)),Ht=Vt[0],Wt=(Vt[1],Vt[2],Vt[3],function(t,n,e){var r=kt([],e,n),o=Ot(r);return o>1e-6?St(kt([],t,n),r)/o:void 0}),Kt=function(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=Wt(t,n,e);if(void 0!==a&&(!o||a>=i&&a<=1-i))return r=r||Pt(t),a<=0?Gt(r,n):a>=1?Gt(r,e):Ft(r,n,e,a)},Yt=Math.abs,Ct=Math.max,Jt=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ut;return Yt(t-n)<=e*Ct(1,Yt(t),Yt(n))},Xt=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ut;return Yt(t-n)<=e},Qt=function(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Ut,i=n[0]-t[0],a=n[1]-t[1],u=r[0]-e[0],c=r[1]-e[1],f=t[0]-e[0],s=t[1]-e[1],l=c*i-u*a,h=u*s-c*f,v=i*s-a*f;if(Xt(l,0,o)){if(Xt(h,0,o)&&Xt(v,0,o)){var p=Kt(e,t,n,void 0,!0)||Kt(r,t,n,void 0,!0);return{type:p?2:3,isec:p}}return{type:1}}v/=l;var d=1-o;return{type:o<(h/=l)&&h<d&&o<v&&v<d?4:5,isec:_t([],t,n,h),alpha:h,beta:v,det:l}},$t=T((function(){return"illegal argument(s)"})),Zt=r(wt("/"),4),tn=Zt[0],nn=(Zt[1],Zt[2],Zt[3],function(t,n){var e=t.length;!e&&function(t){throw new $t(t)}("no points"),!n&&(n=Pt(t[0]));for(var r=e;--r>=0;)Ht(n,n,t[r]);return tn(n,n,e)}),en=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ut;return t>n?1:t<-n?-1:0},rn=function(t,n,e){var r=t[0],o=t[1];return(n[0]-r)*(e[1]-o)-(e[0]-r)*(n[1]-o)},on=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Ut;return en(rn(t,n,e),r)},an=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Ut;e=e||nn(n);for(var o=n.length,i=o-1,a=0;a<o;i=a,a++){for(var u=[],c=n[i],f=n[a],s=on(c,f,e,r),l=t.length,h=l-1,v=0;v<l;h=v,v++){var p=t[h],d=t[v],y=on(c,f,d,r);on(c,f,p,r)===s?u.push(y!==s?Qt(c,f,p,d).isec:d):y===s&&u.push(Qt(c,f,p,d).isec,d)}if(u.length<2)return[];t=u}return t},un=function(t,n,e,r,o,i){var a=t[0],u=t[1],c=n[0]-a,f=n[1]-u,s=0,l=1,h=function(t,n){if(n<0&&Math.abs(t)<Ut)return!1;var e=n/t;if(t<0){if(e>l)return!1;e>s&&(s=e)}else{if(e<s)return!1;e<l&&(l=e)}return!0};if(h(-c,-(e[0]-a))&&h(c,r[0]-a)&&h(-f,-(e[1]-u))&&h(f,r[1]-u))return!o&&(o=[]),!i&&(i=[]),o[0]=s*c+a,o[1]=s*f+u,i[0]=l*c+a,i[1]=l*f+u,[o,i,s,l]},cn=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Ut,o=Wt(t,n,e);return void 0!==o&&It(t,Ft([],n,e,c(o)))<r*r},fn=function(t,n,e,r){return Ot(t)*rn(n,e,r)-Ot(n)*rn(t,e,r)+Ot(e)*rn(t,n,r)-Ot(r)*rn(t,n,e)>0},sn=function(t,n){for(var e=n.length-1,r=t[0],o=t[1],i=n[e],a=n[0],u=0,c=0;c<=e;i=a,a=n[++c])u=ln(r,o,i[0],i[1],a[0],a[1],u);return u},ln=function(t,n,e,r,o,i,a){return(r<n&&i>=n||i<n&&r>=n)&&(e<=t||o<=t)?a^(e+(n-r)/(i-r)*(o-e)<t?1:0):a},hn=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Ut,o=t[0],i=t[1],a=n[0],u=n[1],c=e[0],f=e[1],s=a-o,l=u-i,h=c-a,v=f-u,p=Math.abs(l),d=Math.abs(v);if(!(p<r&&d<r||Math.abs(s)<r&&Math.abs(h)<r)){var y,g,b,m,w,x,k,E,O=(o+a)/2,j=(i+u)/2,S=(a+c)/2,L=(u+f)/2;return p<r?E=(g=-h/v)*((k=O)-(m=S))+(x=L):d<r?E=(y=-s/l)*((k=S)-(b=O))+(w=j):(k=((y=-s/l)*(b=O)-(g=-h/v)*(m=S)+(x=L)-(w=j))/(y-g),E=p>d?y*(k-b)+w:g*(k-m)+x),[k,E]}},vn=0,pn=function(){function t(n,e){o(this,t),this.parent=n,this.id=e}return a(t,[{key:"setEnds",value:function(t,n){this.origin=t,this.sym.origin=n}},{key:"connect",value:function(n){var e=t.create();return e.splice(this.lnext),e.sym.splice(n),e.setEnds(this.dest,n.origin),e}},{key:"swap",value:function(){var t=this.oprev,n=this.sym.oprev;this.splice(t),this.sym.splice(n),this.splice(t.lnext),this.sym.splice(n.lnext),this.setEnds(t.dest,n.dest)}},{key:"remove",value:function(){this.splice(this.oprev),this.sym.splice(this.sym.oprev),delete this.parent}},{key:"splice",value:function(t){var n=this.onext.rot,e=t.onext.rot,r=t.onext,o=this.onext,i=e.onext,a=n.onext;return this.onext=r,t.onext=o,n.onext=i,e.onext=a,this}},{key:"oprev",get:function(){return this.rot.onext.rot}},{key:"rot",get:function(){return this.parent[this.id+1&3]}},{key:"invrot",get:function(){return this.parent[this.id+3&3]}},{key:"sym",get:function(){return this.parent[this.id+2&3]}},{key:"dnext",get:function(){return this.sym.onext.sym}},{key:"dprev",get:function(){return this.invrot.onext.invrot}},{key:"lnext",get:function(){return this.invrot.onext.rot}},{key:"lprev",get:function(){return this.onext.sym}},{key:"rnext",get:function(){return this.rot.onext.invrot}},{key:"rprev",get:function(){return this.sym.onext}},{key:"dest",get:function(){return this.sym.origin}}],[{key:"create",value:function(n,e){var r=new Array(4),o=r[0]=new t(r,vn),i=r[1]=new t(r,vn+1),a=r[2]=new t(r,vn+2),u=r[3]=new t(r,vn+3);return o.onext=o,a.onext=a,i.onext=u,u.onext=i,vn+=4,n&&e&&o.setEnds(n,e),o}}]),t}(),dn=function(t){return yn.add(t,yt(t,[Jt,Ut],(function(t){var n=r(t,2),e=n[0],o=n[1];return"eq(".concat(e,",").concat(o,",eps)")}),"eq,_eps","a,b,eps=_eps","a,b","","&&","return a.length === b.length && ",";"))},yn=ft();yn.default((function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ut;return j(t,"eqDelta")?t.eqDelta(n,e):j(n,"eqDelta")?n.eqDelta(t,e):bn(t,n,t.length,e)}));var gn=dn(2),bn=(dn(3),dn(4),function(t,n,e){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Ut,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1;e>0;e--,o+=a,i+=u)if(!Jt(t[o],n[i],r))return!1;return!0}),mn=(e("DW2E"),-1/0),wn=1/0,xn=(Object.freeze([mn,mn]),Object.freeze([wn,wn]),Object.freeze([1,1]),Object.freeze([0,0]));Object.freeze([1,0]),Object.freeze([0,1]),Object.freeze([mn,mn,mn]),Object.freeze([wn,wn,wn]),Object.freeze([1,1,1]),Object.freeze([0,0,0]),Object.freeze([1,0,0]),Object.freeze([0,1,0]),Object.freeze([0,0,1]),Object.freeze([mn,mn,mn,mn]),Object.freeze([wn,wn,wn,wn]),Object.freeze([1,1,1,1]),Object.freeze([0,0,0,0]),Object.freeze([1,0,0,0]),Object.freeze([0,1,0,0]),Object.freeze([0,0,1,0]),Object.freeze([0,0,0,1]);e.d(n,"a",(function(){return En}));var kn=function(t,n){return rn(t,n.dest.pos,n.origin.pos)>0},En=function(){function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e5;o(this,t);var r={pos:[0,-e],id:0},i={pos:[e,e],id:1},a={pos:[-e,e],id:2},c=pn.create(r,i),f=pn.create(i,a),s=pn.create(a,r);c.sym.splice(f),f.sym.splice(s),s.sym.splice(c),this.boundsTri=[r.pos,i.pos,a.pos],this.first=c,this.nextID=3,n&&n.length&&(u(n[0][0])?this.addKeys(n):this.addAll(n))}return a(t,[{key:"add",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ut,o=this.locate(t,e),i=r(o,2),a=i[0],u=i[1];if(u)return!1;cn(t,a.origin.pos,a.dest.pos)&&(a=a.oprev).onext.remove();var c=pn.create(a.origin,{pos:t,id:this.nextID++,val:n});c.splice(a);var f=c;do{c=a.connect(c.sym),a=c.oprev}while(a.lnext!==f);for(;;){var s=a.oprev;if(kn(s.dest.pos,a)&&fn(a.origin.pos,s.dest.pos,a.dest.pos,t))a.swap(),a=a.oprev;else{if(a.onext===f)break;a=a.onext.lprev}}return!0}},{key:"addKeys",value:function(t,n){var e=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var u=i.value;this.add(u,void 0,n)}}catch(c){r=!0,o=c}finally{try{e||null==a.return||a.return()}finally{if(r)throw o}}this.computeDual()}},{key:"addAll",value:function(t,n){var e=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var u=i.value;this.add(u[0],u[1],n)}}catch(c){r=!0,o=c}finally{try{e||null==a.return||a.return()}finally{if(r)throw o}}this.computeDual()}},{key:"locate",value:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ut,e=this.first;;){if(gn(t,e.origin.pos,n)||gn(t,e.dest.pos,n))return[e,!0];if(kn(t,e))e=e.sym;else if(kn(t,e.onext)){if(kn(t,e.dprev))return[e,!1];e=e.dprev}else e=e.onext}}},{key:"computeDual",value:function(){for(var t=[this.first.rot],n={},e={};t.length;){var r=t.pop();if(!n[r.id]){if(n[r.id]=!0,!r.origin||!e[r.origin.id]){var o=r.rot,i=o.origin.pos,a=this.isBoundary(i),u=(o=o.lnext).origin.pos;a=a&&this.isBoundary(u);var c=(o=o.lnext).origin.pos;a=a&&this.isBoundary(c);var f=this.nextID++;r.origin={pos:a?xn:hn(i,u,c),id:f},e[f]=!0}t.push(r.sym,r.onext,r.lnext)}}}},{key:"delaunay",value:function(t){var n=[],e={},r=t&&nn(t);return this.traverse((function(o){if(!e[o.id]){var i=o.lnext,a=i.lnext,u=o.origin.pos,c=i.origin.pos,f=a.origin.pos,s=[u,c,f];!t||sn(u,t)&&sn(c,t)&&sn(f,t)?n.push(s):(s=an(s,t,r)).length>2&&n.push(s),e[o.id]=e[i.id]=e[a.id]=!0}})),n}},{key:"voronoi",value:function(t){var n=[],e=t&&nn(t);return this.traverse(t?function(r){var o,i=r=r.rot,a=[],u=!1;do{o=r.origin.pos,a.push(o),u=u||!sn(o,t)}while((r=r.lnext)!==i);u&&(a=an(a,t,e)).length<3||n.push(a)}:function(t){var e=t=t.rot,r=[];do{r.push(t.origin.pos)}while((t=t.lnext)!==e);n.push(r)},!1),n}},{key:"edges",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,r=[],o={};return this.traverse((function(n){if(!o[n.id]&&!o[n.sym.id]){var i=n.origin.pos,a=n.dest.pos;if(!t.isBoundary(i)&&!t.isBoundary(a))if(e){var u=un(i,a,e[0],e[1]);u&&r.push([u[0],u[1]])}else r.push([i,a]);o[n.id]=!0}}),!0,n?this.first.rot:this.first),r}},{key:"traverse",value:function(t){for(var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.first,r=[e],o={},i={};r.length;)o[(e=r.pop()).id]||(o[e.id]=!0,this.isBoundary(e.origin.pos)||this.isBoundary(e.rot.origin.pos)||!n&&i[e.origin.id]||(i[e.origin.id]=!0,t(e,o,i)),r.push(e.sym,e.onext,e.lnext))}},{key:"isBoundary",value:function(t){var n=this.boundsTri;return gn(n[0],t)||gn(n[1],t)||gn(n[2],t)}}]),t}()},"F/bj":function(t,n,e){"use strict";e.r(n);e("I5cv"),e("/SS/"),e("HEwt"),e("a1Th"),e("rE2o"),e("ioFf"),e("rGqo"),e("yt8O"),e("Btvt"),e("XfO3"),e("T39b"),e("bHtr");var r=e("q1tI"),o=e.n(r),i=e("2PzF"),a=e("Bl7J"),u=e("9VVL"),c=e("ViKx");e("PZSu");function f(t,n,e){return(f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&s(o,e.prototype),o}).apply(null,arguments)}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h={}.DEV&&!1,v=function(t){var n,e,r,o=0,a=function(){function n(n,r){var o=t.noise(n,r);this.centerX=n,this.centerY=r,this.x=n,this.y=r,this.onBoundary=e.has(n)||e.has(r),this.dist=t.map(o,-1,1,0,t.width/10),this.dir=o<0?-1:1,this.offset=t.map(o,-1,1,0,t.width/10)}var r=n.prototype;return r.update=function(){if(!this.onBoundary){var n=t.animLoop,e=n.noise2D,r=n.theta,o=Object(c.a)(this.centerX,this.centerY,(this.offset+r)*this.dir,this.dist*e(this.x/1e3,this.y/1e3)),i=o.x,a=o.y;this.x=i,this.y=a}},r.getArray=function(){return[this.x,this.y]},n}(),u=function(){function e(n){this.pts=n.map((function(t){return f(a,l(t))})),this.dir=t.random([1,-1]),this.offset=t.random(t.TWO_PI)}return e.prototype.update=function(){var e=this,r=t.animLoop.theta;this.pts.forEach((function(t){return t.update()}));var i=t.createGraphics(t.width-20,t.width-20),a=t.createGraphics(t.width-20,t.width-20);i.background(255),i.noFill(),i.colorMode(t.HSB,1),i.stroke(o,1,1),a.fill(0),i.push(),i.translate(i.width/2,i.height/2),i.rotate((this.offset+r)*this.dir),i.stroke(1-o,1,1),i.strokeWeight(20);for(var u=-t.width/2;u<2*t.width;)i.line(-t.width,u-t.width,t.width,u-t.width),u+=40;i.pop(),[i,a].forEach((function(n){n.strokeWeight(20),n.strokeJoin(t.BEVEL),n.translate(n.width/2,n.height/2),n.beginShape(),e.pts.forEach((function(t){return n.vertex.apply(n,l(t.getArray()))})),n.endShape(t.CLOSE)}));var c=i.get();c.mask(a),t.image(c,n[0][0]-10,n[0][1]-10)},e}();t.setup=function(){t.pixelDensity(1),t.frameRate(30),t.createCanvas(660,840),t.colorMode(t.HSB,1),t.createLoop(30,{gif:!!h&&{render:!1,open:!0},noiseDetail:.5}),n=[[-t.width/2+20,-t.width/2+20],[t.width/2-20,-t.width/2+20],[t.width/2-20,t.width/2-20],[-t.width/2+20,t.width/2-20]],e=new Set(n.flat());var o=new Array(10).fill().map((function(){return[t.random.apply(t,l(n[3])),t.random.apply(t,l(n[3]))]})),a=new i.a(o);r=a.voronoi(n).map((function(t){return new u(t)}))},t.draw=function(){o=t.map(t.sin(t.animLoop.theta),-1,1,0,1),t.background(255),t.translate(t.width/2,t.height/2),r.forEach((function(t){return t.update()})),t.noFill(),t.stroke(o,1,1),t.strokeWeight(20),t.square.apply(t,l(n[0]).concat([t.width-40]))}};n.default=function(){return o.a.createElement(a.a,null,o.a.createElement(u.a,{sketch:v}),o.a.createElement("p",null,"Improved version of yesterday’s. Still pokey in browser, but the GIF it makes is ",o.a.createElement("code",null,":chefkiss:"),"."))}},ViKx:function(t,n,e){"use strict";e.d(n,"b",(function(){return r}));var r=function(t,n,e,r,o,i){void 0===i&&(i=!1);var a=t+Math.cos(e)*r,u=n+Math.sin(e)*o;return i?[a,u]:{x:a,y:u}};n.a=function(t,n,e,r,o){void 0===o&&(o=!1);var i=function(t,n,e){return t+Math.cos(n)*e}(t,e,r),a=function(t,n,e){return t+Math.sin(n)*e}(n,e,r);return o?[i,a]:{x:i,y:a}}},ls82:function(t,n,e){e("rGqo"),e("yt8O"),e("a1Th"),e("h7Nl"),e("VRzm"),e("Btvt"),e("/SS/"),e("f3/d"),e("8+KV"),e("hHhE"),e("rE2o"),e("ioFf");var r=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,n,e,r){var o=n&&n.prototype instanceof d?n:d,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,n,e){var r=s;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=O(a,e);if(u){if(u===p)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===s)throw r=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var c=f(t,n,e);if("normal"===c.type){if(r=e.done?v:l,c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=v,e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}t.wrap=c;var s="suspendedStart",l="suspendedYield",h="executing",v="completed",p={};function d(){}function y(){}function g(){}var b={};b[i]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(A([])));w&&w!==e&&r.call(w,i)&&(b=w);var x=g.prototype=d.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function E(t){var n;this._invoke=function(e,o){function i(){return new Promise((function(n,i){!function n(e,o,i,a){var u=f(t[e],t,o);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then((function(t){n("next",t,i,a)}),(function(t){n("throw",t,i,a)})):Promise.resolve(s).then((function(t){c.value=t,i(c)}),(function(t){return n("throw",t,i,a)}))}a(u.arg)}(e,o,n,i)}))}return n=n?n.then(i,i):i()}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:n,done:!0}}return y.prototype=x.constructor=g,g.constructor=y,g[u]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(n,e,r,o){var i=new E(c(n,e,r,o));return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(x),x[u]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=A,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),f=r.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},o0o1:function(t,n,e){t.exports=e("ls82")}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-25-js-94f7788fc762107c7354.js.map