(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{448:function(n,t,r){"use strict";r.r(t);var u=r(10),e=(r(0),r(452)),o=r(453),i=(r(455),r(469)),c={}.DEV&&!1,a=function(n){var t,r,u;n.setup=function(){n.pixelDensity(1),c&&n.frameRate(30),n.createCanvas(660,840),n.background(255),n.colorMode(n.HSL,n.TWO_PI),t=n.height/2/20,r=n.height/2+5*t,u=n.random(n.TWO_PI),n.createLoop(30,{gif:!!c&&{render:!1,open:!0},noiseRadius:1})},n.draw=function(){var e=n.animLoop,c=e.noise1D,a=e.theta;n.translate(n.width/2,n.height/2),n.rotate(a);for(var f=0;f<=r;f+=t){n.push(),n.rotate(c(f+t)*Object(i.c)(n.abs(n.sin(a)))*n.TWO_PI);for(var d=0;d<n.TWO_PI;d+=n.TWO_PI/(n.TWO_PI*(f+t)))n.stroke(u,n.map(f,0,r,n.QUARTER_PI,n.TWO_PI),d),n.line.apply(n,Object(o.a)(0,0,d,f,!0).concat(Object(o.a)(0,0,d,f+t,!0)));n.pop()}}};t.default=function(n){var t=n.location;return Object(u.c)(e.a,{sketch:a,path:t.pathname,description:""})}},453:function(n,t,r){"use strict";r.d(t,"c",function(){return u}),r.d(t,"d",function(){return e}),r.d(t,"b",function(){return o});var u=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},o=function(n,t,r,u,e,o){void 0===o&&(o=!1);var i=n+Math.cos(r)*u,c=t+Math.sin(r)*e;return o?[i,c]:{x:i,y:c}};t.a=function(n,t,r,o,i){void 0===i&&(i=!1);var c=u(n,r,o),a=e(t,r,o);return i?[c,a]:{x:c,y:a}}},469:function(n,t,r){"use strict";r.d(t,"f",function(){return u}),r.d(t,"j",function(){return e}),r.d(t,"c",function(){return o}),r.d(t,"a",function(){return i}),r.d(t,"i",function(){return c}),r.d(t,"b",function(){return a}),r.d(t,"g",function(){return f}),r.d(t,"k",function(){return d}),r.d(t,"d",function(){return s}),r.d(t,"h",function(){return p}),r.d(t,"l",function(){return h}),r.d(t,"e",function(){return v});var u=function(n){return n*n},e=function(n){return n*(2-n)},o=function(n){return n<.5?2*n*n:(4-2*n)*n-1},i=function(n){return n*n*n},c=function(n){return--n*n*n+1},a=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},s=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},p=function(n){return n*n*n*n*n},h=function(n){return 1+--n*n*n*n*n},v=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-07-js-bb1cee155aaff8881960.js.map