(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{215:function(t,n,r){"use strict";r.r(n);r(284),r(74),r(55),r(274),r(82),r(269),r(265);var e=r(0),i=r.n(e),o=r(267),u=r(268),c=function(t){var n,r,e,i,o,c,f,a=[],s=!1,l=!1,h=[function(n){return 240*t.abs(t.sin(n))},function(n){return 240*t.abs(t.cos(n))},function(n){return 240*t.abs(t.tan(n))},function(n){return 240*t.abs(t.sin(n+t.PI))},function(n){return 240*t.abs(t.cos(n+t.PI))},function(n){return 240*t.abs(t.tan(n+t.PI))},function(n){return 240*t.abs(t.sin(-n))},function(n){return 240*t.abs(t.cos(-n))},function(n){return 240*t.abs(t.tan(-n))},function(n){return 240*t.abs(t.sin(-n+t.PI))},function(n){return 240*t.abs(t.cos(-n+t.PI))},function(n){return 240*t.abs(t.tan(-n+t.PI))}];t.setup=function(){for(t.createCanvas(660,840),r=t.random([0,1]),(n=t.createGraphics(t.width,t.height)).background(r?0:255),n.stroke(r?255:0),n.strokeWeight(100),n.line(.25*t.width,150,.25*t.width,t.height-150),n.line(.5*t.width,150,.5*t.width,t.height-150),n.line(.75*t.width,150,.75*t.width,t.height-150),n.blendMode(r?t.DARKEST:t.LIGHTEST),n.noStroke();Array.from(new Set([i,o,c,f])).length<4;)i=t.random(h),o=t.random(h),c=t.random(h),f=t.random(h);for(var e=0;e<4;e++)a.push({r:t.HALF_PI*e,speed:t.random(.01,.1*(2-e/2))/t.TWO_PI,direction:t.random([-1,1])});a.sort(function(t,n){return t.r-n.r})},t.draw=function(){t.background(255),t.image(n,0,0);var r,h=Object(u.c)(t.width/2,a[0].r,t.width/2),d=t.width,v=t.height/2+t.sin(a[1].r)*(t.height/2),p=Object(u.c)(t.width/2,a[2].r,t.width/2),_=t.height,g=t.height/2+t.sin(a[3].r)*(t.height/2),y=t.lerp(0,h,.2),b=t.lerp(g,0,.2),w=t.lerp(d,p,.2),k=t.lerp(v,_,.2);s&&(t.stroke("red"),t.strokeWeight(1),t.line(d,v,p,_),t.line(0,g,h,0),t.strokeWeight(6),t.line(d,v,0,g),t.line(d,v,w,k),t.line(0,g,y,b),t.ellipse(w,k,12),t.ellipse(y,b,12));for(var x=0;x<a.length;x++)a[x].r+=a[x].speed*a[x].direction;t.frameCount>1&&(r=a[0].r,n.fill(i(r),o(r),c(r),f(3*r)),n.beginShape(),n.vertex(d,v),n.bezierVertex(w,k,y,b,0,g),n.vertex(e.X3,e.Y3),n.bezierVertex(e.leftHandleX,e.leftHandleY,e.rightHandleX,e.rightHandleY,e.X1,e.Y1),n.endShape()),e={X0:h,Y0:0,X1:d,Y1:v,X2:p,Y2:_,X3:0,Y3:g,rightHandleX:w,rightHandleY:k,leftHandleX:y,leftHandleY:b},t.abs(a[1].r)>3*t.TWO_PI&&t.abs(a[3].r)>3*t.TWO_PI&&(t.noLoop(),l=!0)},t.mousePressed=function(){s=!s,l&&t.redraw()}};n.default=function(t){var n=t.location;return i.a.createElement(o.a,{sketch:c,path:n.pathname,description:"Reload page for a different variation. Click or tap sketch to toggle guides."})}},265:function(t,n,r){var e=r(11);e(e.P,"Array",{fill:r(266)}),r(32)("fill")},266:function(t,n,r){"use strict";var e=r(25),i=r(73),o=r(14);t.exports=function(t){for(var n=e(this),r=o(n.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,r),f=u>2?arguments[2]:void 0,a=void 0===f?r:i(f,r);a>c;)n[c++]=t;return n}},268:function(t,n,r){"use strict";r.d(n,"c",function(){return e}),r.d(n,"d",function(){return i}),r.d(n,"b",function(){return o});var e=function(t,n,r){return t+Math.cos(n)*r},i=function(t,n,r){return t+Math.sin(n)*r},o=function(t,n,r,e,i,o){void 0===o&&(o=!1);var u=t+Math.cos(r)*e,c=n+Math.sin(r)*i;return o?[u,c]:{x:u,y:c}};n.a=function(t,n,r,o,u){void 0===u&&(u=!1);var c=e(t,r,o),f=i(n,r,o);return u?[c,f]:{x:c,y:f}}},269:function(t,n,r){"use strict";var e=r(17),i=r(11),o=r(25),u=r(79),c=r(80),f=r(14),a=r(270),s=r(81);i(i.S+i.F*!r(75)(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,i,l,h=o(t),d="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,_=void 0!==p,g=0,y=s(h);if(_&&(p=e(p,v>2?arguments[2]:void 0,2)),null==y||d==Array&&c(y))for(r=new d(n=f(h.length));n>g;g++)a(r,g,_?p(h[g],g):h[g]);else for(l=y.call(h),r=new d;!(i=l.next()).done;g++)a(r,g,_?u(l,p,[i.value,g],!0):i.value);return r.length=g,r}})},270:function(t,n,r){"use strict";var e=r(26),i=r(54);t.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},272:function(t,n,r){var e=r(35)("meta"),i=r(12),o=r(27),u=r(26).f,c=0,f=Object.isExtensible||function(){return!0},a=!r(18)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!o(t,e)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return a&&l.NEED&&f(t)&&!o(t,e)&&s(t),t}}},273:function(t,n,r){var e=r(12);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},274:function(t,n,r){"use strict";var e=r(275),i=r(273);t.exports=r(276)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},275:function(t,n,r){"use strict";var e=r(26).f,i=r(88),o=r(78),u=r(17),c=r(76),f=r(77),a=r(56),s=r(87),l=r(86),h=r(19),d=r(272).fastKey,v=r(273),p=h?"_s":"size",_=function(t,n){var r,e=d(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,n,r,a){var s=t(function(t,e){c(t,s,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[p]=0,null!=e&&f(e,r,t[a],t)});return o(s.prototype,{clear:function(){for(var t=v(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[p]=0},delete:function(t){var r=v(this,n),e=_(r,t);if(e){var i=e.n,o=e.p;delete r._i[e.i],e.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==e&&(r._f=i),r._l==e&&(r._l=o),r[p]--}return!!e},forEach:function(t){v(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!_(v(this,n),t)}}),h&&e(s.prototype,"size",{get:function(){return v(this,n)[p]}}),s},def:function(t,n,r){var e,i,o=_(t,n);return o?o.v=r:(t._l=o={i:i=d(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=o),e&&(e.n=o),t[p]++,"F"!==i&&(t._i[i]=o)),t},getEntry:_,setStrong:function(t,n,r){a(t,n,function(t,r){this._t=v(t,n),this._k=r,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?s(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,s(1))},r?"entries":"values",!r,!0),l(n)}}},276:function(t,n,r){"use strict";var e=r(6),i=r(11),o=r(20),u=r(78),c=r(272),f=r(77),a=r(76),s=r(12),l=r(18),h=r(75),d=r(36),v=r(277);t.exports=function(t,n,r,p,_,g){var y=e[t],b=y,w=_?"set":"add",k=b&&b.prototype,x={},m=function(t){var n=k[t];o(k,t,"delete"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof b&&(g||k.forEach&&!l(function(){(new b).entries().next()}))){var E=new b,P=E[w](g?{}:-0,1)!=E,O=l(function(){E.has(1)}),I=h(function(t){new b(t)}),S=!g&&l(function(){for(var t=new b,n=5;n--;)t[w](n,n);return!t.has(-0)});I||((b=n(function(n,r){a(n,b,t);var e=v(new y,n,b);return null!=r&&f(r,_,e[w],e),e})).prototype=k,k.constructor=b),(O||S)&&(m("delete"),m("has"),_&&m("get")),(S||P)&&m(w),g&&k.clear&&delete k.clear}else b=p.getConstructor(n,t,_,w),u(b.prototype,r),c.NEED=!0;return d(b,t),x[t]=b,i(i.G+i.W+i.F*(b!=y),x),g||p.setStrong(b,t,_),b}},277:function(t,n,r){var e=r(12),i=r(278).set;t.exports=function(t,n,r){var o,u=n.constructor;return u!==r&&"function"==typeof u&&(o=u.prototype)!==r.prototype&&e(o)&&i&&i(t,o),t}},278:function(t,n,r){var e=r(12),i=r(5),o=function(t,n){if(i(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{(e=r(17)(Function.call,r(279).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(i){n=!0}return function(t,r){return o(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:o}},279:function(t,n,r){var e=r(83),i=r(54),o=r(34),u=r(85),c=r(27),f=r(84),a=Object.getOwnPropertyDescriptor;n.f=r(19)?a:function(t,n){if(t=o(t),n=u(n,!0),f)try{return a(t,n)}catch(r){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},284:function(t,n,r){"use strict";var e=r(11),i=r(28),o=r(25),u=r(18),c=[].sort,f=[1,2,3];e(e.P+e.F*(u(function(){f.sort(void 0)})||!u(function(){f.sort(null)})||!r(285)(c)),"Array",{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},285:function(t,n,r){"use strict";var e=r(18);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-02-js-6a47de0f802dd7ce1b48.js.map