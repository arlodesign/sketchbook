(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{233:function(t,n,r){"use strict";r.r(n);r(304),r(88),r(59),r(38),r(313),r(87),r(307);var e=r(9),o=(r(0),r(303)),i=r(306),u=function(t){var n,r,e,o,u,f,c=[function(n){return 240*t.abs(t.sin(n))},function(n){return 240*t.abs(t.cos(n))},function(n){return 240*t.abs(t.tan(n))},function(n){return 240*t.abs(t.sin(n+t.PI))},function(n){return 240*t.abs(t.cos(n+t.PI))},function(n){return 240*t.abs(t.tan(n+t.PI))},function(n){return 240*t.abs(t.sin(-n))},function(n){return 240*t.abs(t.cos(-n))},function(n){return 240*t.abs(t.tan(-n))},function(n){return 240*t.abs(t.sin(-n+t.PI))},function(n){return 240*t.abs(t.cos(-n+t.PI))},function(n){return 240*t.abs(t.tan(-n+t.PI))}],a=0,s=0,l=0,v=function(){};t.setup=function(){for(t.pixelDensity(4),t.createCanvas(660,840),t.background(0),n=t.random(.05,.1)/t.TWO_PI*t.random([-1,1]),r=t.random(.15,.25)/t.TWO_PI*t.random([-1,1]),e=t.random(.01,.015)/t.TWO_PI;Array.from(new Set([o,u,f])).length<3;)o=t.random(c),u=t.random(c),f=t.random(c);v=function(n){return t.color(o(n),u(n),f(n),8)},t.noStroke(),t.blendMode(t.HARD_LIGHT)},t.draw=function(){t.translate(t.width/2,t.height*t.sin(l));var o=Object(i.a)(0,0,a,200),u=o.x,f=o.y,c=Object(i.a)(u,f,s,500*t.sin(l));t.height*t.sin(l)<0&&f<0&&c.y<0?t.noLoop():(t.fill(v(2*l)),t.beginShape(),t.vertex(0,0),t.quadraticVertex(c.x,c.y,u,f),t.endShape(t.CLOSE),a+=n,s+=r,l+=e)}};n.default=function(t){var n=t.location;return Object(e.c)(o.a,{sketch:u,path:n.pathname,description:"Reload page for a different variation."})}},304:function(t,n,r){var e=r(12);e(e.P,"Array",{fill:r(305)}),r(36)("fill")},305:function(t,n,r){"use strict";var e=r(28),o=r(79),i=r(16);t.exports=function(t){for(var n=e(this),r=i(n.length),u=arguments.length,f=o(u>1?arguments[1]:void 0,r),c=u>2?arguments[2]:void 0,a=void 0===c?r:o(c,r);a>f;)n[f++]=t;return n}},306:function(t,n,r){"use strict";r.d(n,"c",function(){return e}),r.d(n,"d",function(){return o}),r.d(n,"b",function(){return i});var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,o,i){void 0===i&&(i=!1);var u=t+Math.cos(r)*e,f=n+Math.sin(r)*o;return i?[u,f]:{x:u,y:f}};n.a=function(t,n,r,i,u){void 0===u&&(u=!1);var f=e(t,r,i),c=o(n,r,i);return u?[f,c]:{x:f,y:c}}},307:function(t,n,r){"use strict";var e=r(21),o=r(12),i=r(28),u=r(84),f=r(85),c=r(16),a=r(308),s=r(86);o(o.S+o.F*!r(80)(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,o,l,v=i(t),p="function"==typeof this?this:Array,h=arguments.length,d=h>1?arguments[1]:void 0,_=void 0!==d,y=0,b=s(v);if(_&&(d=e(d,h>2?arguments[2]:void 0,2)),null==b||p==Array&&f(b))for(r=new p(n=c(v.length));n>y;y++)a(r,y,_?d(v[y],y):v[y]);else for(l=b.call(v),r=new p;!(o=l.next()).done;y++)a(r,y,_?u(l,d,[o.value,y],!0):o.value);return r.length=y,r}})},308:function(t,n,r){"use strict";var e=r(29),o=r(58);t.exports=function(t,n,r){n in t?e.f(t,n,o(0,r)):t[n]=r}},309:function(t,n,r){var e=r(40)("meta"),o=r(13),i=r(30),u=r(29).f,f=0,c=Object.isExtensible||function(){return!0},a=!r(22)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++f,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,e)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!i(t,e)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return a&&l.NEED&&c(t)&&!i(t,e)&&s(t),t}}},310:function(t,n,r){var e=r(13);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},313:function(t,n,r){"use strict";var e=r(314),o=r(310);t.exports=r(315)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(o(this,"Set"),t=0===t?0:t,t)}},e)},314:function(t,n,r){"use strict";var e=r(29).f,o=r(94),i=r(83),u=r(21),f=r(81),c=r(82),a=r(60),s=r(93),l=r(92),v=r(23),p=r(309).fastKey,h=r(310),d=v?"_s":"size",_=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,n,r,a){var s=t(function(t,e){f(t,s,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,null!=e&&c(e,r,t[a],t)});return i(s.prototype,{clear:function(){for(var t=h(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var r=h(this,n),e=_(r,t);if(e){var o=e.n,i=e.p;delete r._i[e.i],e.r=!0,i&&(i.n=o),o&&(o.p=i),r._f==e&&(r._f=o),r._l==e&&(r._l=i),r[d]--}return!!e},forEach:function(t){h(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!_(h(this,n),t)}}),v&&e(s.prototype,"size",{get:function(){return h(this,n)[d]}}),s},def:function(t,n,r){var e,o,i=_(t,n);return i?i.v=r:(t._l=i={i:o=p(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=i),e&&(e.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:_,setStrong:function(t,n,r){a(t,n,function(t,r){this._t=h(t,n),this._k=r,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?s(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,s(1))},r?"entries":"values",!r,!0),l(n)}}},315:function(t,n,r){"use strict";var e=r(6),o=r(12),i=r(17),u=r(83),f=r(309),c=r(82),a=r(81),s=r(13),l=r(22),v=r(80),p=r(41),h=r(316);t.exports=function(t,n,r,d,_,y){var b=e[t],g=b,w=_?"set":"add",x=g&&g.prototype,E={},k=function(t){var n=x[t];i(x,t,"delete"==t?function(t){return!(y&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof g&&(y||x.forEach&&!l(function(){(new g).entries().next()}))){var m=new g,O=m[w](y?{}:-0,1)!=m,P=l(function(){m.has(1)}),I=v(function(t){new g(t)}),S=!y&&l(function(){for(var t=new g,n=5;n--;)t[w](n,n);return!t.has(-0)});I||((g=n(function(n,r){a(n,g,t);var e=h(new b,n,g);return null!=r&&c(r,_,e[w],e),e})).prototype=x,x.constructor=g),(P||S)&&(k("delete"),k("has"),_&&k("get")),(S||O)&&k(w),y&&x.clear&&delete x.clear}else g=d.getConstructor(n,t,_,w),u(g.prototype,r),f.NEED=!0;return p(g,t),E[t]=g,o(o.G+o.W+o.F*(g!=b),E),y||d.setStrong(g,t,_),g}},316:function(t,n,r){var e=r(13),o=r(317).set;t.exports=function(t,n,r){var i,u=n.constructor;return u!==r&&"function"==typeof u&&(i=u.prototype)!==r.prototype&&e(i)&&o&&o(t,i),t}},317:function(t,n,r){var e=r(13),o=r(5),i=function(t,n){if(o(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{(e=r(21)(Function.call,r(318).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(o){n=!0}return function(t,r){return i(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:i}},318:function(t,n,r){var e=r(89),o=r(58),i=r(39),u=r(91),f=r(30),c=r(90),a=Object.getOwnPropertyDescriptor;n.f=r(23)?a:function(t,n){if(t=i(t),n=u(n,!0),c)try{return a(t,n)}catch(r){}if(f(t,n))return o(!e.f.call(t,n),t[n])}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-21-js-ae63e08cb0aa3e5afbc5.js.map