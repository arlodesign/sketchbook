(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{QCfa:function(n,t,r){"use strict";r.r(t);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo");var e=r("q1tI"),u=r.n(e),o=r("Bl7J"),i=r("9VVL"),c=r("ViKx"),a=(r("PZSu"),r("av4u"));function f(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s={}.DEV&&!1,d=function(n){var t,r,e;n.setup=function(){n.pixelDensity(1),s&&n.frameRate(30),n.createCanvas(660,840),n.background(255),n.colorMode(n.HSL,n.TWO_PI),t=n.height/2/20,r=n.height/2+5*t,e=n.random(n.TWO_PI),n.createLoop(30,{gif:!!s&&{render:!1,open:!0},noiseRadius:1})},n.draw=function(){var u=n.animLoop,o=u.noise1D,i=u.theta;n.translate(n.width/2,n.height/2),n.rotate(i);for(var s=0;s<=r;s+=t){n.push(),n.rotate(o(s+t)*Object(a.c)(n.abs(n.sin(i)))*n.TWO_PI);for(var d=0;d<n.TWO_PI;d+=n.TWO_PI/(n.TWO_PI*(s+t)))n.stroke(e,n.map(s,0,r,n.QUARTER_PI,n.TWO_PI),d),n.line.apply(n,f(Object(c.a)(0,0,d,s,!0)).concat(f(Object(c.a)(0,0,d,s+t,!0))));n.pop()}}};t.default=function(){return u.a.createElement(o.a,null,u.a.createElement(i.a,{sketch:d}))}},ViKx:function(n,t,r){"use strict";r.d(t,"b",(function(){return e}));var e=function(n,t,r,e,u,o){void 0===o&&(o=!1);var i=n+Math.cos(r)*e,c=t+Math.sin(r)*u;return o?[i,c]:{x:i,y:c}};t.a=function(n,t,r,e,u){void 0===u&&(u=!1);var o=function(n,t,r){return n+Math.cos(t)*r}(n,r,e),i=function(n,t,r){return n+Math.sin(t)*r}(t,r,e);return u?[o,i]:{x:o,y:i}}},av4u:function(n,t,r){"use strict";r.d(t,"f",(function(){return e})),r.d(t,"j",(function(){return u})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"i",(function(){return c})),r.d(t,"b",(function(){return a})),r.d(t,"g",(function(){return f})),r.d(t,"k",(function(){return s})),r.d(t,"d",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"l",(function(){return h})),r.d(t,"e",(function(){return l}));var e=function(n){return n*n},u=function(n){return n*(2-n)},o=function(n){return n<.5?2*n*n:(4-2*n)*n-1},i=function(n){return n*n*n},c=function(n){return--n*n*n+1},a=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},s=function(n){return 1- --n*n*n*n},d=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},p=function(n){return n*n*n*n*n},h=function(n){return 1+--n*n*n*n*n},l=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-07-js-94ada3d9d020373d13b2.js.map