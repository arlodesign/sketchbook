(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{ViKx:function(t,n,r){"use strict";r.d(n,"b",(function(){return o}));var o=function(t,n,r,o,e,a){void 0===a&&(a=!1);var i=t+Math.cos(r)*o,c=n+Math.sin(r)*e;return a?[i,c]:{x:i,y:c}};n.a=function(t,n,r,o,e){void 0===e&&(e=!1);var a=function(t,n,r){return t+Math.cos(n)*r}(t,r,o),i=function(t,n,r){return t+Math.sin(n)*r}(n,r,o);return e?[a,i]:{x:a,y:i}}},s158:function(t,n,r){"use strict";r.r(n);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo");var o=r("q1tI"),e=r.n(o),a=r("Bl7J"),i=r("9VVL"),c=(r("PZSu"),r("ViKx"));function u(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(t){t.setup=function(){t.frameRate(60),t.createCanvas(660,840),t.background(128),t.colorMode(t.HSL,2),t.blendMode(t.HARD_LIGHT),t.createLoop(120,{noiseRadius:2})},t.draw=function(){for(var n=t.animLoop,r=n.noise1D,o=n.theta,e=Object(c.a)(t.width/2,t.height/2,o,t.map(r(.01),-1,1,t.width/2,0),!0),a=0;a<t.TWO_PI;a+=t.TWO_PI/5)t.stroke(r(a/200)+1,r(a/300)+1,r(.05)+1,.25),t.line.apply(t,u(e).concat(u(c.a.apply(void 0,u(e).concat([o+a,t.map(r(a/100),-1,1,t.width/2,t.width/5),!0])))));7200===t.frameCount&&t.noLoop()}};n.default=function(){return e.a.createElement(a.a,null,e.a.createElement(i.a,{sketch:f}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-26-js-15ec5d6add24d48ec9bc.js.map