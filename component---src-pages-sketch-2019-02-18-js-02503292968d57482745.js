(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{230:function(t,n,r){"use strict";r.r(n);r(253),r(74),r(55),r(262),r(82),r(257);var e=r(0),o=r.n(e),i=r(255),u=r(259),c=function(t){var n,r,e,o,i=[{letter:"T",x:337,y:225},{letter:"H",x:416,y:225},{letter:"I",x:493,y:225},{letter:"S",x:571,y:225},{letter:"I",x:78,y:375},{letter:"S",x:156,y:375},{letter:"J",x:312,y:375},{letter:"U",x:390,y:375},{letter:"S",x:468,y:375},{letter:"T",x:546,y:375},{letter:"I",x:49,y:525},{letter:"N",x:127,y:525},{letter:"Y",x:283,y:525},{letter:"O",x:361,y:525},{letter:"U",x:439,y:525},{letter:"R",x:517,y:525},{letter:"H",x:22,y:675},{letter:"E",x:100,y:675},{letter:"A",x:178,y:675},{letter:"D",x:256,y:675}].reverse(),c=[function(n){return 240*t.abs(t.sin(n))},function(n){return 240*t.abs(t.cos(n))},function(n){return 240*t.abs(t.tan(n))},function(n){return 240*t.abs(t.sin(n+t.PI))},function(n){return 240*t.abs(t.cos(n+t.PI))},function(n){return 240*t.abs(t.tan(n+t.PI))},function(n){return 240*t.abs(t.sin(-n))},function(n){return 240*t.abs(t.cos(-n))},function(n){return 240*t.abs(t.tan(-n))},function(n){return 240*t.abs(t.sin(-n+t.PI))},function(n){return 240*t.abs(t.cos(-n+t.PI))},function(n){return 240*t.abs(t.tan(-n+t.PI))}],f=0,a=[],s=0;t.preload=function(){n=t.loadFont(Object(u.c)("/assets/Cousine-BoldItalic.otf"))},t.setup=function(){for(t.createCanvas(660,840),t.background(255),t.textAlign(t.LEFT),t.textFont(n),t.textSize(130),t.textLeading(150);Array.from(new Set([r,e,o])).length<3;)r=t.random(c),e=t.random(c),o=t.random(c)},t.draw=function(){t.fill(255,s<2?255:0),t.noStroke();var u,c=i[f],l=c.letter,p=c.x,v=c.y;if(t.text(l,p,v),t.frameCount%60==1){var h=n.textToPoints(l,p,v,130,{sampleFactor:.05});a=a.concat(h.map(function(n){var r=n.x,e=n.y;return{position:t.createVector(r,e),velocity:t.createVector(t.random(-2,2),t.random(-2,2)),acceleration:t.createVector(t.random(-.05,.05),t.random(-.05,.05))}}))}u=t.frameCount/(60*i.length*2),t.stroke(r(u),e(u),o(u),64),a.forEach(function(n,r){var e=n.position,o=n.velocity,i=n.acceleration;a[r].position=e.add(o.add(i)),(e.x<20||e.x>t.width-20||e.y<20||e.y>t.height-20)&&a.splice(r,1)}),a.length>0&&function(){var n=a.map(function(t){return{position:t.position,reached:!1}});n[0].reached=!0;for(var r=function(){var r=2*t.dist(0,0,t.width,t.height),e=void 0,o=void 0;n.forEach(function(i,u){i.reached||n.forEach(function(n,c){if(!n.reached){var f=t.dist(i.position.x,i.position.y,n.position.x,n.position.y);f<r&&(r=f,e=u,o=c)}})}),t.line(n[e].position.x,n[e].position.y,n[o].position.x,n[o].position.y),n[o].reached=!0};n.filter(function(t){return t.reached}).length<n.length;)r()}(),t.frameCount%60==0&&f++,f===i.length&&(f=0,s++),s>2&&t.noLoop()}};n.default=function(t){var n=t.location;return o.a.createElement(i.a,{sketch:c,path:n.pathname})}},253:function(t,n,r){var e=r(11);e(e.P,"Array",{fill:r(254)}),r(32)("fill")},254:function(t,n,r){"use strict";var e=r(25),o=r(73),i=r(14);t.exports=function(t){for(var n=e(this),r=i(n.length),u=arguments.length,c=o(u>1?arguments[1]:void 0,r),f=u>2?arguments[2]:void 0,a=void 0===f?r:o(f,r);a>c;)n[c++]=t;return n}},257:function(t,n,r){"use strict";var e=r(17),o=r(11),i=r(25),u=r(79),c=r(80),f=r(14),a=r(258),s=r(81);o(o.S+o.F*!r(75)(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,o,l,p=i(t),v="function"==typeof this?this:Array,h=arguments.length,d=h>1?arguments[1]:void 0,y=void 0!==d,x=0,_=s(p);if(y&&(d=e(d,h>2?arguments[2]:void 0,2)),null==_||v==Array&&c(_))for(r=new v(n=f(p.length));n>x;x++)a(r,x,y?d(p[x],x):p[x]);else for(l=_.call(p),r=new v;!(o=l.next()).done;x++)a(r,x,y?u(l,d,[o.value,x],!0):o.value);return r.length=x,r}})},258:function(t,n,r){"use strict";var e=r(26),o=r(54);t.exports=function(t,n,r){n in t?e.f(t,n,o(0,r)):t[n]=r}},260:function(t,n,r){var e=r(35)("meta"),o=r(12),i=r(27),u=r(26).f,c=0,f=Object.isExtensible||function(){return!0},a=!r(18)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,e)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!i(t,e)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return a&&l.NEED&&f(t)&&!i(t,e)&&s(t),t}}},261:function(t,n,r){var e=r(12);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},262:function(t,n,r){"use strict";var e=r(263),o=r(261);t.exports=r(264)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(o(this,"Set"),t=0===t?0:t,t)}},e)},263:function(t,n,r){"use strict";var e=r(26).f,o=r(88),i=r(78),u=r(17),c=r(76),f=r(77),a=r(56),s=r(87),l=r(86),p=r(19),v=r(260).fastKey,h=r(261),d=p?"_s":"size",y=function(t,n){var r,e=v(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,n,r,a){var s=t(function(t,e){c(t,s,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,null!=e&&f(e,r,t[a],t)});return i(s.prototype,{clear:function(){for(var t=h(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var r=h(this,n),e=y(r,t);if(e){var o=e.n,i=e.p;delete r._i[e.i],e.r=!0,i&&(i.n=o),o&&(o.p=i),r._f==e&&(r._f=o),r._l==e&&(r._l=i),r[d]--}return!!e},forEach:function(t){h(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!y(h(this,n),t)}}),p&&e(s.prototype,"size",{get:function(){return h(this,n)[d]}}),s},def:function(t,n,r){var e,o,i=y(t,n);return i?i.v=r:(t._l=i={i:o=v(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=i),e&&(e.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:y,setStrong:function(t,n,r){a(t,n,function(t,r){this._t=h(t,n),this._k=r,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?s(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,s(1))},r?"entries":"values",!r,!0),l(n)}}},264:function(t,n,r){"use strict";var e=r(6),o=r(11),i=r(20),u=r(78),c=r(260),f=r(77),a=r(76),s=r(12),l=r(18),p=r(75),v=r(36),h=r(265);t.exports=function(t,n,r,d,y,x){var _=e[t],g=_,b=y?"set":"add",w=g&&g.prototype,m={},E=function(t){var n=w[t];i(w,t,"delete"==t?function(t){return!(x&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(x&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return x&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof g&&(x||w.forEach&&!l(function(){(new g).entries().next()}))){var k=new g,S=k[b](x?{}:-0,1)!=k,F=l(function(){k.has(1)}),I=p(function(t){new g(t)}),P=!x&&l(function(){for(var t=new g,n=5;n--;)t[b](n,n);return!t.has(-0)});I||((g=n(function(n,r){a(n,g,t);var e=h(new _,n,g);return null!=r&&f(r,y,e[b],e),e})).prototype=w,w.constructor=g),(F||P)&&(E("delete"),E("has"),y&&E("get")),(P||S)&&E(b),x&&w.clear&&delete w.clear}else g=d.getConstructor(n,t,y,b),u(g.prototype,r),c.NEED=!0;return v(g,t),m[t]=g,o(o.G+o.W+o.F*(g!=_),m),x||d.setStrong(g,t,y),g}},265:function(t,n,r){var e=r(12),o=r(266).set;t.exports=function(t,n,r){var i,u=n.constructor;return u!==r&&"function"==typeof u&&(i=u.prototype)!==r.prototype&&e(i)&&o&&o(t,i),t}},266:function(t,n,r){var e=r(12),o=r(5),i=function(t,n){if(o(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{(e=r(17)(Function.call,r(267).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(o){n=!0}return function(t,r){return i(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:i}},267:function(t,n,r){var e=r(83),o=r(54),i=r(34),u=r(85),c=r(27),f=r(84),a=Object.getOwnPropertyDescriptor;n.f=r(19)?a:function(t,n){if(t=i(t),n=u(n,!0),f)try{return a(t,n)}catch(r){}if(c(t,n))return o(!e.f.call(t,n),t[n])}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-18-js-02503292968d57482745.js.map