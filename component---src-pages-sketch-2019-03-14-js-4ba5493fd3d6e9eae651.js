(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{252:function(n,t,r){"use strict";r.r(t);r(342),r(105),r(69),r(44),r(106),r(104),r(345);var o=r(12),e=(r(0),r(341)),i=function(n){var t,r,o,e=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))},function(){return 240},function(){return 15},function(){return 128}],i=0,u={},a=1;n.setup=function(){for(n.createCanvas(660,840),n.background(32),u=n.createVector(0,-40);Array.from(new Set([t,r,o])).length<3;)t=n.random(e),r=n.random(e),o=n.random(e);n.noStroke()},n.draw=function(){n.fill(t(i),r(i),o(i),32),u.x=n.map(n.noise(u.y*a/50,n.frameCount*a/5e3),0,1,.25*n.width,.75*n.width),n.ellipse(u.x,u.y,n.map(n.noise(u.y*a/100,n.frameCount*a/1e4),0,1,0,n.width),20),u.y+=a,u.y>n.height+20&&(a>3&&n.noLoop(),u.y=-40,i+=n.HALF_PI/2,a++,n.blendMode(a%2?n.SCREEN:n.MULTIPLY))}};t.default=function(n){var t=n.location;return Object(o.c)(e.a,{sketch:i,path:t.pathname,description:""})}},342:function(n,t,r){var o=r(9);o(o.P,"Array",{fill:r(343)}),r(67)("fill")},343:function(n,t,r){"use strict";var o=r(34),e=r(100),i=r(18);n.exports=function(n){for(var t=o(this),r=i(t.length),u=arguments.length,a=e(u>1?arguments[1]:void 0,r),c=u>2?arguments[2]:void 0,f=void 0===c?r:e(c,r);f>a;)t[a++]=n;return t}},345:function(n,t,r){"use strict";var o=r(21),e=r(9),i=r(34),u=r(101),a=r(102),c=r(18),f=r(346),s=r(103);e(e.S+e.F*!r(68)(function(n){Array.from(n)}),"Array",{from:function(n){var t,r,e,l,d=i(n),h="function"==typeof this?this:Array,v=arguments.length,b=v>1?arguments[1]:void 0,p=void 0!==b,w=0,y=s(d);if(p&&(b=o(b,v>2?arguments[2]:void 0,2)),null==y||h==Array&&a(y))for(r=new h(t=c(d.length));t>w;w++)f(r,w,p?b(d[w],w):d[w]);else for(l=y.call(d),r=new h;!(e=l.next()).done;w++)f(r,w,p?u(l,b,[e.value,w],!0):e.value);return r.length=w,r}})},346:function(n,t,r){"use strict";var o=r(13),e=r(35);n.exports=function(n,t,r){t in n?o.f(n,t,e(0,r)):n[t]=r}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-14-js-4ba5493fd3d6e9eae651.js.map