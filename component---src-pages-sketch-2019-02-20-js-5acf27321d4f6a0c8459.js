(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{246:function(n,t,r){"use strict";r.r(t);r(105),r(69),r(44),r(106),r(104),r(344);var o=r(12),e=(r(0),r(340)),i=r(343),u=function(n){var t,r,o,e=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))}],u=0,a=0,c=10,s={},f=32,d=function(){};n.setup=function(){for(n.pixelDensity(4),n.createCanvas(660,840),n.background(0),s={x:n.width/2,y:n.height/2};Array.from(new Set([t,r,o])).length<3;)t=n.random(e),r=n.random(e),o=n.random(e);d=function(e){return n.color(t(e),r(e),o(e),f)},n.blendMode(n.HARD_LIGHT)},n.draw=function(){n.noFill(),n.strokeWeight(n.map(n.noise(a/5,u/5)*c,0,n.width,1,3)),n.stroke(d(a/4.5)),n.beginShape();for(var t=0;t<n.TWO_PI;t+=n.TWO_PI/3){var r=a+t,o=Object(i.a)(s.x,s.y,r,n.noise(a/5,u/5)*c),e=o.x,h=o.y;n.vertex(e,h)}n.endShape(n.CLOSE),a+=.01,u+=.01,f=(c+=.05)>n.width?f-.1:f,s=Object(i.a)(n.width/2,n.height/2,a/3,1.5*u),0===f&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(o.c)(e.a,{sketch:u,path:t.pathname})}},343:function(n,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"d",function(){return e}),r.d(t,"b",function(){return i});var o=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,o,e,i){void 0===i&&(i=!1);var u=n+Math.cos(r)*o,a=t+Math.sin(r)*e;return i?[u,a]:{x:u,y:a}};t.a=function(n,t,r,i,u){void 0===u&&(u=!1);var a=o(n,r,i),c=e(t,r,i);return u?[a,c]:{x:a,y:c}}},344:function(n,t,r){"use strict";var o=r(21),e=r(9),i=r(34),u=r(101),a=r(102),c=r(18),s=r(345),f=r(103);e(e.S+e.F*!r(68)(function(n){Array.from(n)}),"Array",{from:function(n){var t,r,e,d,h=i(n),b="function"==typeof this?this:Array,v=arguments.length,l=v>1?arguments[1]:void 0,p=void 0!==l,w=0,y=f(h);if(p&&(l=o(l,v>2?arguments[2]:void 0,2)),null==y||b==Array&&a(y))for(r=new b(t=c(h.length));t>w;w++)s(r,w,p?l(h[w],w):h[w]);else for(d=y.call(h),r=new b;!(e=d.next()).done;w++)s(r,w,p?u(d,l,[e.value,w],!0):e.value);return r.length=w,r}})},345:function(n,t,r){"use strict";var o=r(13),e=r(35);n.exports=function(n,t,r){t in n?o.f(n,t,e(0,r)):n[t]=r}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-20-js-5acf27321d4f6a0c8459.js.map