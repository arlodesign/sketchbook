(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{485:function(t,n,e){e(29),e(30),e(55),e(56),e(51),e(12),e(143),e(18),e(22),e(103),e(75),e(58);var r=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,n,e,r){var o=n&&n.prototype instanceof d?n:d,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,n,e){var r=s;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return _()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=E(a,e);if(u){if(u===p)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===s)throw r=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var c=f(t,n,e);if("normal"===c.type){if(r=e.done?v:l,c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=v,e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}t.wrap=c;var s="suspendedStart",l="suspendedYield",h="executing",v="completed",p={};function d(){}function y(){}function g(){}var b={};b[i]=function(){return this};var m=Object.getPrototypeOf,x=m&&m(m(A([])));x&&x!==e&&r.call(x,i)&&(b=x);var w=g.prototype=d.prototype=Object.create(b);function k(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function O(t){var n;this._invoke=function(e,o){function i(){return new Promise(function(n,i){!function n(e,o,i,a){var u=f(t[e],t,o);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then(function(t){n("next",t,i,a)},function(t){n("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},function(t){return n("throw",t,i,a)})}a(u.arg)}(e,o,n,i)})}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:n,done:!0}}return y.prototype=w.constructor=g,g.constructor=y,g[u]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},k(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(n,e,r,o){var i=new O(c(n,e,r,o));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},k(w),w[u]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=A,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),f=r.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},492:function(t,n,e){t.exports=e(485)},501:function(t,n,e){"use strict";e(75),e(58),e(29);function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}var u=function(t){return"number"==typeof t};function c(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e(24),e(39);var f,s=function(t,n){return[t[0],t[1],n]},l=e(492),h=e.n(l);e(485);function v(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var p,d=Symbol(),y=function(){};!function(t){t[t.U8=0]="U8",t[t.U8C=1]="U8C",t[t.I8=2]="I8",t[t.U16=3]="U16",t[t.I16=4]="I16",t[t.U32=5]="U32",t[t.I32=6]="I32",t[t.F32=7]="F32",t[t.F64=8]="F64"}(p||(p={}));var g;v(f={},0,1),v(f,1,1),v(f,2,1),v(f,3,2),v(f,4,2),v(f,5,4),v(f,6,4),v(f,7,4),v(f,8,8);!function(t){t[t.FINE=0]="FINE",t[t.DEBUG=1]="DEBUG",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.SEVERE=4]="SEVERE",t[t.NONE=5]="NONE"}(g||(g={}));var b=function(t){return null!=t&&"function"==typeof t[Symbol.iterator]},m=function(){function t(n){o(this,t),this.value=n}return a(t,[{key:"deref",value:function(){return this.value}}]),t}(),x=function(t){return new m(t)},w=function(t){return t instanceof m},k=function(t){return t instanceof m?t:new m(t)},O=function(t){return t instanceof m?t.deref():t},E=function(t,n){return null!=t&&"function"==typeof t[n]},j=function(t){return null!=t&&"function"!=typeof t&&void 0!==t.length};function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t){return(L="function"==typeof Symbol&&"symbol"===S(Symbol.iterator)?function(t){return S(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":S(t)})(t)}function A(t,n){return!n||"object"!==L(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function z(t,n){return(z=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function F(t,n,e){return(F=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&z(o,e.prototype),o}).apply(null,arguments)}function N(t){var n="function"==typeof Map?new Map:void 0;return(N=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return F(t,arguments,_(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),z(r,t)})(t)}var I=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return void 0!==t?": "+t:""};return function(e){function r(e){return o(this,r),A(this,_(r).call(this,t(e)+n(e)))}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&z(t,n)}(r,N(Error)),r}()},R=I(function(){return"illegal arity"}),T=function(t){throw new R(t)},D=function(t){return 2===t.length?[void 0,t[1]]:3===t.length?[t[1],t[2]]:T(t.length)};function P(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=n[0],o=r[0],i=r[1],a=r[2],u=null==(n=D(n))[0]?o():n[0],c=n[1];return O(i(E(c,"$reduce")?c.$reduce(a,u):j(c)?U(a,u,c):M(a,u,c)))}var U=function(t,n,e){for(var r=0,o=e.length;r<o;r++)if(n=t(n,e[r]),w(n)){n=n.deref();break}return n},M=function(t,n,e){var r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done);r=!0){if(n=t(n,a.value),w(n)){n=n.deref();break}}}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n},B=function(t,n){return[t,function(t){return t},n]};function G(t){return t?c(t):B(function(){return[]},function(t,n){return t.push(n),t})}var q=h.a.mark(V),Y=h.a.mark(C);function V(t,n){var e,r,o,i,a,u,c,f,s,l;return h.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:e=t(G()),r=e[1],o=e[2],i=!0,a=!1,u=void 0,h.prev=6,c=n[Symbol.iterator]();case 8:if(i=(f=c.next()).done){h.next=19;break}if(s=f.value,l=o([],s),!w(l)){h.next=14;break}return h.delegateYield(O(r(l.deref())),"t0",13);case 13:return h.abrupt("return");case 14:if(!l.length){h.next=16;break}return h.delegateYield(l,"t1",16);case 16:i=!0,h.next=8;break;case 19:h.next=25;break;case 21:h.prev=21,h.t2=h.catch(6),a=!0,u=h.t2;case 25:h.prev=25,h.prev=26,i||null==c.return||c.return();case 28:if(h.prev=28,!a){h.next=31;break}throw u;case 31:return h.finish(28);case 32:return h.finish(25);case 33:return h.delegateYield(O(r([])),"t3",34);case 34:case"end":return h.stop()}},q,null,[[6,21,25,33],[26,,28,32]])}function C(t,n){var e,r,o,i,a,u,c,f;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:e=t([y,y,function(t,n){return n}])[2],r=!0,o=!1,i=void 0,s.prev=4,a=n[Symbol.iterator]();case 6:if(r=(u=a.next()).done){s.next=21;break}if(c=u.value,f=e(d,c),!w(f)){s.next=15;break}if((f=O(f.deref()))===d){s.next=14;break}return s.next=14,f;case 14:return s.abrupt("return");case 15:if(f===d){s.next=18;break}return s.next=18,f;case 18:r=!0,s.next=6;break;case 21:s.next=27;break;case 23:s.prev=23,s.t0=s.catch(4),o=!0,i=s.t0;case 27:s.prev=27,s.prev=28,r||null==a.return||a.return();case 30:if(s.prev=30,!o){s.next=33;break}throw i;case 33:return s.finish(30);case 34:return s.finish(27);case 35:case"end":return s.stop()}},Y,null,[[4,23,27,35],[28,,30,34]])}var Q=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C,r=n.length-1;return b(n[r])?n.length>1?e(t.apply(null,n.slice(0,r)),n[r]):e(t(),n[0]):void 0};function $(t,n){return n?C($(t),n):function(n){var e=n[2];return s(n,function(n,r){return e(n,t(r))})}}function H(t,n,e){return new J(t,n,e)}var J=function(){function t(n,e,r){o(this,t),void 0===n?(n=0,e=1/0):void 0===e&&(e=n,n=0),r=void 0===r?n<e?1:-1:r,this.from=n,this.to=e,this.step=r}return a(t,[{key:Symbol.iterator,value:h.a.mark(function t(){var n,e,r;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.step,e=this.to,r=this.from,!(n>0)){t.next=12;break}case 4:if(!(r<e)){t.next=10;break}return t.next=7,r;case 7:r+=n,t.next=4;break;case 10:t.next=19;break;case 12:if(!(n<0)){t.next=19;break}case 13:if(!(r>e)){t.next=19;break}return t.next=16,r;case 16:r+=n,t.next=13;break;case 19:case"end":return t.stop()}},t,this)})},{key:"$reduce",value:function(t,n){var e=this.step;if(e>0)for(var r=this.from,o=this.to;r<o&&!w(n);r+=e)n=t(n,r);else for(var i=this.from,a=this.to;i>a&&!w(n);i+=e)n=t(n,i);return n}}]),t}();function K(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var r,o;switch(n.length){case 4:o=n[3],r=n[2];break;case 3:o=n[2];break;case 2:return $(function(t){return K(n[0],n[1],t)});default:T(n.length)}return P(n[0](n[1]),r,o)}function W(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=n[0],o=n[1],i=n[2],a=n[3],u=n[4],f=n[5],s=n[6],l=n[7],h=n[8],v=n[9];switch(n.length){case 0:T(0);case 1:return r;case 2:return function(){return r(o.apply(void 0,arguments))};case 3:return function(){return r(o(i.apply(void 0,arguments)))};case 4:return function(){return r(o(i(a.apply(void 0,arguments))))};case 5:return function(){return r(o(i(a(u.apply(void 0,arguments)))))};case 6:return function(){return r(o(i(a(u(f.apply(void 0,arguments))))))};case 7:return function(){return r(o(i(a(u(f(s.apply(void 0,arguments)))))))};case 8:return function(){return r(o(i(a(u(f(s(l.apply(void 0,arguments))))))))};case 9:return function(){return r(o(i(a(u(f(s(l(h.apply(void 0,arguments)))))))))};case 10:default:var p=function(){return r(o(i(a(u(f(s(l(h(v.apply(void 0,arguments))))))))))};return 10===n.length?p:W.apply(void 0,[p].concat(c(n.slice(10))))}}function X(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return W.apply(null,n)}function Z(t,n){return n?V(Z(t),n):function(n){var e=n[2],r=t;return s(n,function(t,n){return--r>0?e(t,n):0===r?k(e(t,n)):x(t)})}}function tt(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return Q(tt,n)||function(t){var e=t[2],r=n[0],o=n[1]||0;return s(t,function(t,n){return e(t,r(o++,n))})}}function nt(t,n){t=t||"";var e=!0;return n?c(n).join(t):B(function(){return""},function(n,r){return n=e?n+r:n+t+r,e=!1,n})}var et=h.a.mark(rt);function rt(){var t,n,e,r,o,i,a,u,c,f,s,l,v=arguments;return h.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:for(t=v.length,n=new Array(t),e=0;e<t;e++)n[e]=v[e];r=n.map(function(t){return t[Symbol.iterator]()});case 2:0,o=[],i=!0,a=!1,u=void 0,h.prev=7,c=r[Symbol.iterator]();case 9:if(i=(f=c.next()).done){h.next=18;break}if(s=f.value,!(l=s.next()).done){h.next=14;break}return h.abrupt("return");case 14:o.push(l.value);case 15:i=!0,h.next=9;break;case 18:h.next=24;break;case 20:h.prev=20,h.t0=h.catch(7),a=!0,u=h.t0;case 24:h.prev=24,h.prev=25,i||null==c.return||c.return();case 27:if(h.prev=27,!a){h.next=30;break}throw u;case 30:return h.finish(27);case 31:return h.finish(24);case 32:return h.next=34,o;case 34:h.next=2;break;case 36:case"end":return h.stop()}},et,null,[[7,20,24,32],[25,,27,31]])}var ot=function(t){var n=r(t,2),e=n[0],o=n[1];return"".concat(e,"*").concat(o)},it=I(function(){return"unsupported operation"}),at=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new Array(5),r=function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=e[o[n].length]||t;return a?a.apply(void 0,o):function(t){throw new it(t)}("no impl for vec size ".concat(o[n].length))};return r.add=function(t,n){return e[t]=n},r.default=function(n){return t=n},r},ut=function(t){return $(function(t){return function(n){return n>1?"".concat(t,"[i").concat(t,"+").concat(n,"*s").concat(t,"]"):1==n?"".concat(t,"[i").concat(t,"+s").concat(t,"]"):"".concat(t,"[i").concat(t,"]")}}(t),H())},ct=function(t){return $(function(n){return"".concat(t,"[").concat(n,"]")},H())},ft=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"a",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",u=arguments.length>7&&void 0!==arguments[7]&&arguments[7];return[i,K(X(Z(t),tt(function(t,e){return n(e,t)})),nt(o),rt.apply(null,e.split(",").map(u?ut:ct))),a,""!==r?"return ".concat(r,";"):""]},st=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"a",r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return[r,"for(let i=a.length;--i>=0;) {",t(n.split(",").map(i?function(t){return"".concat(t,"[i").concat(t,"+i*s").concat(t,"]")}:function(t){return"".concat(t,"[i]")})),"}",o,null!==e?"return ".concat(e,";"):""]},lt=function(t,n){return"!".concat(t," && (").concat(t,"=").concat(n.split(",")[1],");")},ht=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"a",i=arguments.length>5?arguments[5]:void 0,a=arguments.length>6?arguments[6]:void 0,u=arguments.length>7?arguments[7]:void 0,c=arguments.length>8&&void 0!==arguments[8]&&arguments[8];return new Function(e,ft(t,n,r,o,i,a,u,c).join(""))},vt=function(t,n,e,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:o,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"a",u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",f=arguments.length>8?arguments[8]:void 0,s=arguments.length>9?arguments[9]:void 0,l=arguments.length>10&&void 0!==arguments[10]&&arguments[10];return new Function(r,"return (".concat(o,")=>{").concat(ft(t,e,i,a,u,f,s,l).join(""),"}")).apply(void 0,c(n))},pt=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"a",o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return new Function(n,st(t,e,r,o,i,a).join(""))},dt=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"o,a,b",e=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"o",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=arguments.length>5?arguments[5]:void 0;e=e||n,i=null!=i?i:lt(r,n);var a=at(o),u=function(o){return a.add(o,ht(o,t,n,e,r,"",i))};return a.default(pt(t,n,e,r,i)),[a,u(2),u(3),u(4)]},yt=function(t){return dt(function(t){return function(n){var e=r(n,3),o=e[0],i=e[1],a=e[2];return"".concat(o,"=").concat(i).concat(t).concat(a,";")}}(t))},gt=function(t){return dt(function(t){return function(n){var e=r(n,2),o=e[0],i=e[1];return"".concat(o,"=").concat(i).concat(t,"n;")}}(t),"o,a,n")},bt=r(yt("-"),4),mt=bt[0],xt=(bt[1],bt[2],bt[3],function(t){return wt.add(t,ht(t,function(t){var n=r(t,1)[0];return"".concat(n,"*").concat(n)},"a","a","","+","return ",";"))}),wt=at();wt.default(pt(function(t){var n=r(t,1)[0];return"sum+=".concat(n,"*").concat(n,";")},"a",void 0,"sum","let sum=0;"));xt(2),xt(3),xt(4);var kt=function(t){return Ot.add(t,ht(t,ot,"a,b",void 0,"","+","return ",";"))},Ot=at();Ot.default(pt(function(t){var n=r(t,2),e=n[0],o=n[1];return"s+=".concat(e,"*").concat(o,";")},"a,b",void 0,"s","let s=0;"));kt(2),kt(3),kt(4);var Et=dt(function(t){var n=r(t,3),e=n[0],o=n[1],i=n[2];return"".concat(e,"=").concat(o,"+(").concat(i,"-").concat(o,")*n;")},"o,a,b,n"),jt=r(Et,4),St=jt[0],Lt=jt[1],At=(jt[2],jt[3],function(t){var n=r(t,2),e=n[0],o=n[1];return"t=".concat(e,"-").concat(o,";s+=t*t;")}),_t=function(t){return zt.add(t,ht(t,At,"a,b",void 0,"s","","let t,s=0;"))},zt=at();zt.default(pt(At,"a,b",void 0,"s","let t,s=0;"));_t(2),_t(3),_t(4),e(446);var Ft,Nt=dt(function(t){var n=r(t,1)[0];return"".concat(n,"=n;")},"a,n","a","a",0,""),It=r(Nt,4),Rt=(It[0],It[1],It[2],It[3],function(t){return E(t,"empty")?t.empty():(n=t.length,new Array(n).fill(0));var n}),Tt=dt(function(t){var n=r(t,2),e=n[0],o=n[1];return"".concat(e,"=").concat(o,";")},"o,a",void 0,"o",1,"!o&&(o=[]);"),Dt=r(Tt,4),Pt=Dt[0],Ut=(Dt[1],Dt[2],Dt[3],Math.PI,Math.sqrt(5),Math.SQRT2,Math.sqrt(3),1e-6);!function(t){t[t.EQUAL=0]="EQUAL",t[t.FLAT=1]="FLAT",t[t.UNDER=2]="UNDER",t[t.OVER=3]="OVER",t[t.OTHER=4]="OTHER"}(Ft||(Ft={}));var Mt=r(gt("*"),4),Bt=(Mt[0],Mt[1],Mt[2],Mt[3],r(yt("+"),4)),Gt=Bt[0],qt=(Bt[1],Bt[2],Bt[3],function(t,n,e){var r=mt([],e,n),o=wt(r);return o>1e-6?Ot(mt([],t,n),r)/o:void 0}),Yt=function(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=qt(t,n,e);if(void 0!==a&&(!o||a>=i&&a<=1-i))return r=r||Rt(t),a<=0?Pt(r,n):a>=1?Pt(r,e):St(r,n,e,a)},Vt=Math.abs,Ct=Math.max,Qt=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ut;return Vt(t-n)<=e*Ct(1,Vt(t),Vt(n))},$t=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ut;return Vt(t-n)<=e},Ht=function(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Ut,i=n[0]-t[0],a=n[1]-t[1],u=r[0]-e[0],c=r[1]-e[1],f=t[0]-e[0],s=t[1]-e[1],l=c*i-u*a,h=u*s-c*f,v=i*s-a*f;if($t(l,0,o)){if($t(h,0,o)&&$t(v,0,o)){var p=Yt(e,t,n,void 0,!0)||Yt(r,t,n,void 0,!0);return{type:p?2:3,isec:p}}return{type:1}}v/=l;var d=1-o;return{type:o<(h/=l)&&h<d&&o<v&&v<d?4:5,isec:Lt([],t,n,h),alpha:h,beta:v,det:l}},Jt=I(function(){return"illegal argument(s)"}),Kt=r(gt("/"),4),Wt=Kt[0],Xt=(Kt[1],Kt[2],Kt[3],function(t,n){var e=t.length;!e&&function(t){throw new Jt(t)}("no points"),!n&&(n=Rt(t[0]));for(var r=e;--r>=0;)Gt(n,n,t[r]);return Wt(n,n,e)}),Zt=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ut;return t>n?1:t<-n?-1:0},tn=function(t,n,e){var r=t[0],o=t[1];return(n[0]-r)*(e[1]-o)-(e[0]-r)*(n[1]-o)},nn=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Ut;return Zt(tn(t,n,e),r)},en=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Ut;e=e||Xt(n);for(var o=n.length,i=o-1,a=0;a<o;i=a,a++){for(var u=[],c=n[i],f=n[a],s=nn(c,f,e,r),l=t.length,h=l-1,v=0;v<l;h=v,v++){var p=t[h],d=t[v],y=nn(c,f,d,r);nn(c,f,p,r)===s?u.push(y!==s?Ht(c,f,p,d).isec:d):y===s&&u.push(Ht(c,f,p,d).isec,d)}if(u.length<2)return[];t=u}return t},rn=function(t,n){for(var e=n.length-1,r=t[0],o=t[1],i=n[e],a=n[0],u=0,c=0;c<=e;i=a,a=n[++c])u=on(r,o,i[0],i[1],a[0],a[1],u);return u},on=function(t,n,e,r,o,i,a){return(r<n&&i>=n||i<n&&r>=n)&&(e<=t||o<=t)?a^(e+(n-r)/(i-r)*(o-e)<t?1:0):a},an=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Ut,o=t[0],i=t[1],a=n[0],u=n[1],c=e[0],f=e[1],s=a-o,l=u-i,h=c-a,v=f-u,p=Math.abs(l),d=Math.abs(v);if(!(p<r&&d<r||Math.abs(s)<r&&Math.abs(h)<r)){var y,g,b,m,x,w,k,O,E=(o+a)/2,j=(i+u)/2,S=(a+c)/2,L=(u+f)/2;return p<r?O=(g=-h/v)*((k=E)-(m=S))+(w=L):d<r?O=(y=-s/l)*((k=S)-(b=E))+(x=j):(k=((y=-s/l)*(b=E)-(g=-h/v)*(m=S)+(w=L)-(x=j))/(y-g),O=p>d?y*(k-b)+x:g*(k-m)+w),[k,O]}},un=0,cn=function(){function t(n,e){o(this,t),this.parent=n,this.id=e}return a(t,[{key:"setEnds",value:function(t,n){this.origin=t,this.sym.origin=n}},{key:"connect",value:function(n){var e=t.create();return e.splice(this.lnext),e.sym.splice(n),e.setEnds(this.dest,n.origin),e}},{key:"swap",value:function(){var t=this.oprev,n=this.sym.oprev;this.splice(t),this.sym.splice(n),this.splice(t.lnext),this.sym.splice(n.lnext),this.setEnds(t.dest,n.dest)}},{key:"remove",value:function(){this.splice(this.oprev),this.sym.splice(this.sym.oprev),delete this.parent}},{key:"splice",value:function(t){var n=this.onext.rot,e=t.onext.rot,r=t.onext,o=this.onext,i=e.onext,a=n.onext;return this.onext=r,t.onext=o,n.onext=i,e.onext=a,this}},{key:"oprev",get:function(){return this.rot.onext.rot}},{key:"rot",get:function(){return this.parent[this.id+1&3]}},{key:"invrot",get:function(){return this.parent[this.id+3&3]}},{key:"sym",get:function(){return this.parent[this.id+2&3]}},{key:"dnext",get:function(){return this.sym.onext.sym}},{key:"dprev",get:function(){return this.invrot.onext.invrot}},{key:"lnext",get:function(){return this.invrot.onext.rot}},{key:"lprev",get:function(){return this.onext.sym}},{key:"rnext",get:function(){return this.rot.onext.invrot}},{key:"rprev",get:function(){return this.sym.onext}},{key:"dest",get:function(){return this.sym.origin}}],[{key:"create",value:function(n,e){var r=new Array(4),o=r[0]=new t(r,un),i=r[1]=new t(r,un+1),a=r[2]=new t(r,un+2),u=r[3]=new t(r,un+3);return o.onext=o,a.onext=a,i.onext=u,u.onext=i,un+=4,n&&e&&o.setEnds(n,e),o}}]),t}(),fn=function(t){return sn.add(t,vt(t,[Qt,Ut],function(t){var n=r(t,2),e=n[0],o=n[1];return"eq(".concat(e,",").concat(o,",eps)")},"eq,_eps","a,b,eps=_eps","a,b","","&&","return a.length === b.length && ",";"))},sn=at();sn.default(function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ut;return E(t,"eqDelta")?t.eqDelta(n,e):E(n,"eqDelta")?n.eqDelta(t,e):hn(t,n,t.length,e)});var ln=fn(2),hn=(fn(3),fn(4),function(t,n,e){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Ut,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1;e>0;e--,o+=a,i+=u)if(!Qt(t[o],n[i],r))return!1;return!0}),vn=(e(500),-1/0),pn=1/0,dn=(Object.freeze([vn,vn]),Object.freeze([pn,pn]),Object.freeze([1,1]),Object.freeze([0,0]));Object.freeze([1,0]),Object.freeze([0,1]),Object.freeze([vn,vn,vn]),Object.freeze([pn,pn,pn]),Object.freeze([1,1,1]),Object.freeze([0,0,0]),Object.freeze([1,0,0]),Object.freeze([0,1,0]),Object.freeze([0,0,1]),Object.freeze([vn,vn,vn,vn]),Object.freeze([pn,pn,pn,pn]),Object.freeze([1,1,1,1]),Object.freeze([0,0,0,0]),Object.freeze([1,0,0,0]),Object.freeze([0,1,0,0]),Object.freeze([0,0,1,0]),Object.freeze([0,0,0,1]);e.d(n,"a",function(){return gn});var yn=function(t,n){return tn(t,n.dest.pos,n.origin.pos)>0},gn=function(){function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e5;o(this,t);var r={pos:[0,-e],id:0},i={pos:[e,e],id:1},a={pos:[-e,e],id:2},c=cn.create(r,i),f=cn.create(i,a),s=cn.create(a,r);c.sym.splice(f),f.sym.splice(s),s.sym.splice(c),this.boundsTri=[r.pos,i.pos,a.pos],this.first=c,this.nextID=3,n&&n.length&&(u(n[0][0])?this.addKeys(n):this.addAll(n))}return a(t,[{key:"add",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ut,o=r(this.locate(t,e),2),i=o[0];if(o[1])return!1;(function(t,n,e){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Ut,i=qt(t,n,e);return void 0!==i&&zt(t,St([],n,e,(r=i)<0?0:r>1?1:r))<o*o})(t,i.origin.pos,i.dest.pos)&&(i=i.oprev).onext.remove();var a=cn.create(i.origin,{pos:t,id:this.nextID++,val:n});a.splice(i);var u,c,f,s,l=a;do{a=i.connect(a.sym),i=a.oprev}while(i.lnext!==l);for(;;){var h=i.oprev;if(yn(h.dest.pos,i)&&(u=i.origin.pos,c=h.dest.pos,f=i.dest.pos,s=t,wt(u)*tn(c,f,s)-wt(c)*tn(u,f,s)+wt(f)*tn(u,c,s)-wt(s)*tn(u,c,f)>0))i.swap(),i=i.oprev;else{if(i.onext===l)break;i=i.onext.lprev}}return!0}},{key:"addKeys",value:function(t,n){var e=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var u=i.value;this.add(u,void 0,n)}}catch(c){r=!0,o=c}finally{try{e||null==a.return||a.return()}finally{if(r)throw o}}this.computeDual()}},{key:"addAll",value:function(t,n){var e=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var u=i.value;this.add(u[0],u[1],n)}}catch(c){r=!0,o=c}finally{try{e||null==a.return||a.return()}finally{if(r)throw o}}this.computeDual()}},{key:"locate",value:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ut,e=this.first;;){if(ln(t,e.origin.pos,n)||ln(t,e.dest.pos,n))return[e,!0];if(yn(t,e))e=e.sym;else if(yn(t,e.onext)){if(yn(t,e.dprev))return[e,!1];e=e.dprev}else e=e.onext}}},{key:"computeDual",value:function(){for(var t=[this.first.rot],n={},e={};t.length;){var r=t.pop();if(!n[r.id]){if(n[r.id]=!0,!r.origin||!e[r.origin.id]){var o=r.rot,i=o.origin.pos,a=this.isBoundary(i),u=(o=o.lnext).origin.pos;a=a&&this.isBoundary(u);var c=(o=o.lnext).origin.pos;a=a&&this.isBoundary(c);var f=this.nextID++;r.origin={pos:a?dn:an(i,u,c),id:f},e[f]=!0}t.push(r.sym,r.onext,r.lnext)}}}},{key:"delaunay",value:function(t){var n=[],e={},r=t&&Xt(t);return this.traverse(function(o){if(!e[o.id]){var i=o.lnext,a=i.lnext,u=o.origin.pos,c=i.origin.pos,f=a.origin.pos,s=[u,c,f];!t||rn(u,t)&&rn(c,t)&&rn(f,t)?n.push(s):(s=en(s,t,r)).length>2&&n.push(s),e[o.id]=e[i.id]=e[a.id]=!0}}),n}},{key:"voronoi",value:function(t){var n=[],e=t&&Xt(t);return this.traverse(t?function(r){var o,i=r=r.rot,a=[],u=!1;do{o=r.origin.pos,a.push(o),u=u||!rn(o,t)}while((r=r.lnext)!==i);u&&(a=en(a,t,e)).length<3||n.push(a)}:function(t){var e=t=t.rot,r=[];do{r.push(t.origin.pos)}while((t=t.lnext)!==e);n.push(r)},!1),n}},{key:"edges",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,r=[],o={};return this.traverse(function(n){if(!o[n.id]&&!o[n.sym.id]){var i=n.origin.pos,a=n.dest.pos;if(!t.isBoundary(i)&&!t.isBoundary(a))if(e){var u=function(t,n,e,r,o,i){var a=t[0],u=t[1],c=n[0]-a,f=n[1]-u,s=0,l=1,h=function(t,n){if(n<0&&Math.abs(t)<Ut)return!1;var e=n/t;if(t<0){if(e>l)return!1;e>s&&(s=e)}else{if(e<s)return!1;e<l&&(l=e)}return!0};if(h(-c,-(e[0]-a))&&h(c,r[0]-a)&&h(-f,-(e[1]-u))&&h(f,r[1]-u))return!o&&(o=[]),!i&&(i=[]),o[0]=s*c+a,o[1]=s*f+u,i[0]=l*c+a,i[1]=l*f+u,[o,i,s,l]}(i,a,e[0],e[1]);u&&r.push([u[0],u[1]])}else r.push([i,a]);o[n.id]=!0}},!0,n?this.first.rot:this.first),r}},{key:"traverse",value:function(t){for(var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.first,r=[e],o={},i={};r.length;)o[(e=r.pop()).id]||(o[e.id]=!0,this.isBoundary(e.origin.pos)||this.isBoundary(e.rot.origin.pos)||!n&&i[e.origin.id]||(i[e.origin.id]=!0,t(e,o,i)),r.push(e.sym,e.onext,e.lnext))}},{key:"isBoundary",value:function(t){var n=this.boundsTri;return ln(n[0],t)||ln(n[1],t)||ln(n[2],t)}}]),t}()}}]);
//# sourceMappingURL=4-1c5486b69e485ba6b660.js.map