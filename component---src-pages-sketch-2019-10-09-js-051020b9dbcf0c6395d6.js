(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{ViKx:function(n,t,r){"use strict";r.d(t,"b",(function(){return e}));var e=function(n,t,r,e,o,u){void 0===u&&(u=!1);var i=n+Math.cos(r)*e,c=t+Math.sin(r)*o;return u?[i,c]:{x:i,y:c}};t.a=function(n,t,r,e,o){void 0===o&&(o=!1);var u=function(n,t,r){return n+Math.cos(t)*r}(n,r,e),i=function(n,t,r){return n+Math.sin(t)*r}(t,r,e);return o?[u,i]:{x:u,y:i}}},av4u:function(n,t,r){"use strict";r.d(t,"f",(function(){return e})),r.d(t,"j",(function(){return o})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return i})),r.d(t,"i",(function(){return c})),r.d(t,"b",(function(){return a})),r.d(t,"g",(function(){return f})),r.d(t,"k",(function(){return d})),r.d(t,"d",(function(){return s})),r.d(t,"h",(function(){return l})),r.d(t,"l",(function(){return p})),r.d(t,"e",(function(){return h}));var e=function(n){return n*n},o=function(n){return n*(2-n)},u=function(n){return n<.5?2*n*n:(4-2*n)*n-1},i=function(n){return n*n*n},c=function(n){return--n*n*n+1},a=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},s=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},l=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},h=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},kM05:function(n,t,r){"use strict";r.r(t);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo");var e=r("q1tI"),o=r.n(e),u=r("Bl7J"),i=r("9VVL"),c=r("av4u"),a=(r("PZSu"),r("ViKx"));function f(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d={}.DEV&&!1,s=function(n){var t,r=n.random(50);n.setup=function(){d&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(660,840),n.background(255),n.colorMode(n.HSB,100),n.strokeCap(n.SQUARE),n.createLoop(60,{gif:!!d&&{render:!1,open:!0}}),t=n.dist(0,0,n.width/2,n.height/2)/10},n.draw=function(){var e=n.animLoop,o=e.theta;e.noise1D;n.translate(n.width/2,n.height/2),n.rotate(n.QUARTER_PI);for(var u=0;u<10;u++){var i=n.map(n.sin(o*(u+1)),-1,1,1,0),d=(n.TWO_PI,Object(a.a)(0,0,o*(u%2?1:-1),t*u,!0)),s=Object(a.a)(0,0,o*(u%2?1:-1),t*(u+1),!0);n.stroke(n.lerpColor(n.color(r,100,25),n.color(r+50,25,100),Object(c.e)(i))),n.strokeWeight(n.map(u,0,10,1,7)),n.line.apply(n,f(d).concat(f(s)))}}};t.default=function(){return o.a.createElement(u.a,null,o.a.createElement(i.a,{sketch:s}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-09-js-051020b9dbcf0c6395d6.js.map