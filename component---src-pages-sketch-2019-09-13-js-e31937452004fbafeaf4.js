(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{"5XLz":function(n,t,r){"use strict";r.r(t);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("bHtr");var e=r("q1tI"),u=r.n(e),o=r("Bl7J"),i=r("9VVL"),c=r("av4u"),a=(r("PZSu"),r("ViKx"));function f(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s={}.DEV&&!1,d=function(n){n.setup=function(){n.pixelDensity(1),n.createCanvas(660,840),n.noStroke(),n.colorMode(n.HSL,1),n.rectMode(n.CENTER),n.createLoop(60,{gif:!!s&&{render:!1,open:!0},noiseRadius:.1})},n.draw=function(){var t=n.animLoop,r=t.noise2D,e=t.theta;n.blendMode(n.BLEND),n.background(255),n.blendMode(n.MULTIPLY);for(var u=0;u<n.width/15;u++)for(var o=0;o<n.height/15;o++){var i=n.dist.apply(n,[15*u+7.5,15*o+7.5].concat(f(Object(a.a)(n.width/2,n.height/2,e,n.width,!0)))),s=15*Object(c.c)(n.map(n.cos(i+e),-1,1,0,1)),d=15*Object(c.c)(n.map(n.sin(i+e),-1,1,0,1));n.push(),n.fill("cyan"),n.translate(15*u+7.5,15*o+7.5),n.square(0,0,s,d),n.pop(),n.push(),n.fill("magenta"),n.translate(15*u+7.5,15*o+7.5),n.square(0,0,d,s),n.pop(),n.push(),n.fill("yellow"),n.translate(15*u+7.5,15*o+7.5),n.square(0,0,15*Object(c.c)(n.map(r(u,o),-1,1,0,1)),15*Object(c.c)(n.map(r(o,u),-1,1,0,1))),n.pop()}}};t.default=function(){return u.a.createElement(o.a,null,u.a.createElement(i.a,{sketch:d}))}},ViKx:function(n,t,r){"use strict";r.d(t,"b",(function(){return e}));var e=function(n,t,r,e,u,o){void 0===o&&(o=!1);var i=n+Math.cos(r)*e,c=t+Math.sin(r)*u;return o?[i,c]:{x:i,y:c}};t.a=function(n,t,r,e,u){void 0===u&&(u=!1);var o=function(n,t,r){return n+Math.cos(t)*r}(n,r,e),i=function(n,t,r){return n+Math.sin(t)*r}(t,r,e);return u?[o,i]:{x:o,y:i}}},av4u:function(n,t,r){"use strict";r.d(t,"f",(function(){return e})),r.d(t,"j",(function(){return u})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"i",(function(){return c})),r.d(t,"b",(function(){return a})),r.d(t,"g",(function(){return f})),r.d(t,"k",(function(){return s})),r.d(t,"d",(function(){return d})),r.d(t,"h",(function(){return l})),r.d(t,"l",(function(){return p})),r.d(t,"e",(function(){return h}));var e=function(n){return n*n},u=function(n){return n*(2-n)},o=function(n){return n<.5?2*n*n:(4-2*n)*n-1},i=function(n){return n*n*n},c=function(n){return--n*n*n+1},a=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},s=function(n){return 1- --n*n*n*n},d=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},l=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},h=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-13-js-e31937452004fbafeaf4.js.map