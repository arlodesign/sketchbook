(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{JcdU:function(t,n,r){"use strict";r.r(n);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo");var e=r("q1tI"),o=r.n(e),i=r("Bl7J"),a=r("9VVL"),c=(r("PZSu"),r("ViKx"));function u(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h={}.DEV&&!1,s=function(t){var n,r,e=t.random(70);t.setup=function(){t.frameRate(30),h&&t.pixelDensity(1),t.colorMode(t.HSL,100),t.createCanvas(660,840),t.background(e,20,10),n=t.color(e,50,50,10),r=t.color(e+30,100,100,10),t.createLoop(60,{gif:!!h&&{render:!1,open:!0},noiseRadius:.31})},t.draw=function(){var e=t.animLoop,o=e.noise1D,i=e.theta;t.strokeWeight(2),t.colorMode(t.HSB,100),t.push(),t.translate(t.width/2,t.height/2),t.noFill(),t.stroke(t.lerpColor(n,r,t.map(t.sin(i),-1,1,0,1))),t.curve.apply(t,u(Object(c.a)(0,0,i,t.height,!0)).concat([-t.width/2*o(-t.width),-t.height/2*o(-t.height),t.width/2*o(t.width),t.height/2*o(t.height)],u(Object(c.a)(0,0,i+t.PI,t.height,!0)))),t.pop(),!h&&1800===t.frameCount&&t.noLoop()}};n.default=function(){return o.a.createElement(i.a,null,o.a.createElement(a.a,{sketch:s}))}},ViKx:function(t,n,r){"use strict";r.d(n,"b",(function(){return e}));var e=function(t,n,r,e,o,i){void 0===i&&(i=!1);var a=t+Math.cos(r)*e,c=n+Math.sin(r)*o;return i?[a,c]:{x:a,y:c}};n.a=function(t,n,r,e,o){void 0===o&&(o=!1);var i=function(t,n,r){return t+Math.cos(n)*r}(t,r,e),a=function(t,n,r){return t+Math.sin(n)*r}(n,r,e);return o?[i,a]:{x:i,y:a}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-07-js-25922d5f606971ebb7b5.js.map