(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{247:function(n,t,r){"use strict";r.r(t);r(338),r(105),r(69),r(44),r(106),r(104),r(341);var o=r(12),i=(r(0),r(337)),e=r(340),a=function(n){var t,r,o,i,a,u,c=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))}],f=0,s=0,d=0,l=function(){};n.setup=function(){for(n.pixelDensity(4),n.createCanvas(660,840),n.background(0),t=n.random(.05,.1)/n.TWO_PI*n.random([-1,1]),r=n.random(.15,.25)/n.TWO_PI*n.random([-1,1]),o=n.random(.01,.015)/n.TWO_PI;Array.from(new Set([i,a,u])).length<3;)i=n.random(c),a=n.random(c),u=n.random(c);l=function(t){return n.color(i(t),a(t),u(t),8)},n.noStroke(),n.blendMode(n.HARD_LIGHT)},n.draw=function(){n.translate(n.width/2,n.height*n.sin(d));var i=Object(e.a)(0,0,f,200),a=i.x,u=i.y,c=Object(e.a)(a,u,s,500*n.sin(d));n.height*n.sin(d)<0&&u<0&&c.y<0?n.noLoop():(n.fill(l(2*d)),n.beginShape(),n.vertex(0,0),n.quadraticVertex(c.x,c.y,a,u),n.endShape(n.CLOSE),f+=t,s+=r,d+=o)}};t.default=function(n){var t=n.location;return Object(o.c)(i.a,{sketch:a,path:t.pathname,description:"Reload page for a different variation."})}},338:function(n,t,r){var o=r(9);o(o.P,"Array",{fill:r(339)}),r(67)("fill")},339:function(n,t,r){"use strict";var o=r(34),i=r(100),e=r(18);n.exports=function(n){for(var t=o(this),r=e(t.length),a=arguments.length,u=i(a>1?arguments[1]:void 0,r),c=a>2?arguments[2]:void 0,f=void 0===c?r:i(c,r);f>u;)t[u++]=n;return t}},340:function(n,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"d",function(){return i}),r.d(t,"b",function(){return e});var o=function(n,t,r){return n+Math.cos(t)*r},i=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,o,i,e){void 0===e&&(e=!1);var a=n+Math.cos(r)*o,u=t+Math.sin(r)*i;return e?[a,u]:{x:a,y:u}};t.a=function(n,t,r,e,a){void 0===a&&(a=!1);var u=o(n,r,e),c=i(t,r,e);return a?[u,c]:{x:u,y:c}}},341:function(n,t,r){"use strict";var o=r(21),i=r(9),e=r(34),a=r(101),u=r(102),c=r(18),f=r(342),s=r(103);i(i.S+i.F*!r(68)(function(n){Array.from(n)}),"Array",{from:function(n){var t,r,i,d,l=e(n),v="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,p=void 0!==b,y=0,m=s(l);if(p&&(b=o(b,h>2?arguments[2]:void 0,2)),null==m||v==Array&&u(m))for(r=new v(t=c(l.length));t>y;y++)f(r,y,p?b(l[y],y):l[y]);else for(d=m.call(l),r=new v;!(i=d.next()).done;y++)f(r,y,p?a(d,b,[i.value,y],!0):i.value);return r.length=y,r}})},342:function(n,t,r){"use strict";var o=r(13),i=r(35);n.exports=function(n,t,r){t in n?o.f(n,t,i(0,r)):n[t]=r}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-21-js-44dd5af1ee1bea44e268.js.map