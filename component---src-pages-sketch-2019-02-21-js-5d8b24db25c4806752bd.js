(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{233:function(t,n,r){"use strict";r.r(n);r(258),r(74),r(55),r(267),r(82),r(262);var e=r(0),o=r.n(e),i=r(260),u=r(261),f=function(t){var n,r,e,o,i,f,c=[function(n){return 240*t.abs(t.sin(n))},function(n){return 240*t.abs(t.cos(n))},function(n){return 240*t.abs(t.tan(n))},function(n){return 240*t.abs(t.sin(n+t.PI))},function(n){return 240*t.abs(t.cos(n+t.PI))},function(n){return 240*t.abs(t.tan(n+t.PI))},function(n){return 240*t.abs(t.sin(-n))},function(n){return 240*t.abs(t.cos(-n))},function(n){return 240*t.abs(t.tan(-n))},function(n){return 240*t.abs(t.sin(-n+t.PI))},function(n){return 240*t.abs(t.cos(-n+t.PI))},function(n){return 240*t.abs(t.tan(-n+t.PI))}],a=0,s=0,l=0,v=function(){};t.setup=function(){for(t.pixelDensity(4),t.createCanvas(660,840),t.background(0),n=t.random(.05,.1)/t.TWO_PI*t.random([-1,1]),r=t.random(.15,.25)/t.TWO_PI*t.random([-1,1]),e=t.random(.01,.015)/t.TWO_PI;Array.from(new Set([o,i,f])).length<3;)o=t.random(c),i=t.random(c),f=t.random(c);v=function(n){return t.color(o(n),i(n),f(n),8)},t.noStroke(),t.blendMode(t.HARD_LIGHT)},t.draw=function(){t.translate(t.width/2,t.height*t.sin(l));var o=Object(u.a)(0,0,a,200),i=o.x,f=o.y,c=Object(u.a)(i,f,s,500*t.sin(l));t.height*t.sin(l)<0&&f<0&&c.y<0?t.noLoop():(t.fill(v(2*l)),t.beginShape(),t.vertex(0,0),t.quadraticVertex(c.x,c.y,i,f),t.endShape(t.CLOSE),a+=n,s+=r,l+=e)}};n.default=function(t){var n=t.location;return o.a.createElement(i.a,{sketch:f,path:n.pathname,description:"Reload page for a different variation."})}},258:function(t,n,r){var e=r(11);e(e.P,"Array",{fill:r(259)}),r(32)("fill")},259:function(t,n,r){"use strict";var e=r(25),o=r(73),i=r(14);t.exports=function(t){for(var n=e(this),r=i(n.length),u=arguments.length,f=o(u>1?arguments[1]:void 0,r),c=u>2?arguments[2]:void 0,a=void 0===c?r:o(c,r);a>f;)n[f++]=t;return n}},261:function(t,n,r){"use strict";r.d(n,"c",function(){return e}),r.d(n,"d",function(){return o}),r.d(n,"b",function(){return i});var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,o,i){void 0===i&&(i=!1);var u=t+Math.cos(r)*e,f=n+Math.sin(r)*o;return i?[u,f]:{x:u,y:f}};n.a=function(t,n,r,i,u){void 0===u&&(u=!1);var f=e(t,r,i),c=o(n,r,i);return u?[f,c]:{x:f,y:c}}},262:function(t,n,r){"use strict";var e=r(17),o=r(11),i=r(25),u=r(79),f=r(80),c=r(14),a=r(263),s=r(81);o(o.S+o.F*!r(75)(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,o,l,v=i(t),p="function"==typeof this?this:Array,h=arguments.length,d=h>1?arguments[1]:void 0,_=void 0!==d,y=0,b=s(v);if(_&&(d=e(d,h>2?arguments[2]:void 0,2)),null==b||p==Array&&f(b))for(r=new p(n=c(v.length));n>y;y++)a(r,y,_?d(v[y],y):v[y]);else for(l=b.call(v),r=new p;!(o=l.next()).done;y++)a(r,y,_?u(l,d,[o.value,y],!0):o.value);return r.length=y,r}})},263:function(t,n,r){"use strict";var e=r(26),o=r(54);t.exports=function(t,n,r){n in t?e.f(t,n,o(0,r)):t[n]=r}},265:function(t,n,r){var e=r(35)("meta"),o=r(12),i=r(27),u=r(26).f,f=0,c=Object.isExtensible||function(){return!0},a=!r(18)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++f,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,e)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!i(t,e)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return a&&l.NEED&&c(t)&&!i(t,e)&&s(t),t}}},266:function(t,n,r){var e=r(12);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},267:function(t,n,r){"use strict";var e=r(268),o=r(266);t.exports=r(269)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(o(this,"Set"),t=0===t?0:t,t)}},e)},268:function(t,n,r){"use strict";var e=r(26).f,o=r(88),i=r(78),u=r(17),f=r(76),c=r(77),a=r(56),s=r(87),l=r(86),v=r(19),p=r(265).fastKey,h=r(266),d=v?"_s":"size",_=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,n,r,a){var s=t(function(t,e){f(t,s,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,null!=e&&c(e,r,t[a],t)});return i(s.prototype,{clear:function(){for(var t=h(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var r=h(this,n),e=_(r,t);if(e){var o=e.n,i=e.p;delete r._i[e.i],e.r=!0,i&&(i.n=o),o&&(o.p=i),r._f==e&&(r._f=o),r._l==e&&(r._l=i),r[d]--}return!!e},forEach:function(t){h(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!_(h(this,n),t)}}),v&&e(s.prototype,"size",{get:function(){return h(this,n)[d]}}),s},def:function(t,n,r){var e,o,i=_(t,n);return i?i.v=r:(t._l=i={i:o=p(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=i),e&&(e.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:_,setStrong:function(t,n,r){a(t,n,function(t,r){this._t=h(t,n),this._k=r,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?s(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,s(1))},r?"entries":"values",!r,!0),l(n)}}},269:function(t,n,r){"use strict";var e=r(6),o=r(11),i=r(20),u=r(78),f=r(265),c=r(77),a=r(76),s=r(12),l=r(18),v=r(75),p=r(36),h=r(270);t.exports=function(t,n,r,d,_,y){var b=e[t],g=b,w=_?"set":"add",x=g&&g.prototype,E={},m=function(t){var n=x[t];i(x,t,"delete"==t?function(t){return!(y&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof g&&(y||x.forEach&&!l(function(){(new g).entries().next()}))){var k=new g,O=k[w](y?{}:-0,1)!=k,P=l(function(){k.has(1)}),I=v(function(t){new g(t)}),S=!y&&l(function(){for(var t=new g,n=5;n--;)t[w](n,n);return!t.has(-0)});I||((g=n(function(n,r){a(n,g,t);var e=h(new b,n,g);return null!=r&&c(r,_,e[w],e),e})).prototype=x,x.constructor=g),(P||S)&&(m("delete"),m("has"),_&&m("get")),(S||O)&&m(w),y&&x.clear&&delete x.clear}else g=d.getConstructor(n,t,_,w),u(g.prototype,r),f.NEED=!0;return p(g,t),E[t]=g,o(o.G+o.W+o.F*(g!=b),E),y||d.setStrong(g,t,_),g}},270:function(t,n,r){var e=r(12),o=r(271).set;t.exports=function(t,n,r){var i,u=n.constructor;return u!==r&&"function"==typeof u&&(i=u.prototype)!==r.prototype&&e(i)&&o&&o(t,i),t}},271:function(t,n,r){var e=r(12),o=r(5),i=function(t,n){if(o(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{(e=r(17)(Function.call,r(272).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(o){n=!0}return function(t,r){return i(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:i}},272:function(t,n,r){var e=r(83),o=r(54),i=r(34),u=r(85),f=r(27),c=r(84),a=Object.getOwnPropertyDescriptor;n.f=r(19)?a:function(t,n){if(t=i(t),n=u(n,!0),c)try{return a(t,n)}catch(r){}if(f(t,n))return o(!e.f.call(t,n),t[n])}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-21-js-5d8b24db25c4806752bd.js.map