(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{NVm1:function(t,e,r){"use strict";r.r(e);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("bHtr");var n=r("q1tI"),a=r.n(n),o=r("Bl7J"),i=r("9VVL"),c=(r("PZSu"),r("ViKx"));function u(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p={}.DEV&&!0,l=function(t){var e=t.random(80),r=Array(3).fill().map((function(){return t.floor(t.random(1,9))}));t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSL,100),t.background(e,100,90),t.createLoop(180,{noiseRadius:.1})},t.draw=function(){var n=t.animLoop,a=n.theta,o=n.noise1D,i=Object(c.a)(0,0,2*a,t.height/3,!0),l=Object(c.a)(0,0,-a*r[0],t.width/2*o(r[0]/100),!0),f=Object(c.a)(0,0,a*r[1],t.width/2*o(r[1]/100),!0),s=Object(c.a)(0,0,2*-a,t.width/3,!0);t.translate(t.width/2,t.height/2),t.rotate(a),t.stroke(t.map(o(r[3]/100),-1,1,e-20,e+20),100,t.map(t.cos(3*a),-1,1,50,100),t.map(t.cos(2*a),-1,1,10,0)),t.noFill(),t.beginShape(),t.curveVertex.apply(t,u(i)),t.curveVertex.apply(t,u(l)),t.curveVertex.apply(t,u(f)),t.curveVertex.apply(t,u(s)),t.curveVertex.apply(t,u(i)),t.curveVertex.apply(t,u(l)),t.curveVertex.apply(t,u(f)),t.endShape(),10800===t.frameCount&&(t.noLoop(),p&&alert("done"))}};e.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{sketch:l}))}},ViKx:function(t,e,r){"use strict";r.d(e,"b",(function(){return n}));var n=function(t,e,r,n,a,o){void 0===o&&(o=!1);var i=t+Math.cos(r)*n,c=e+Math.sin(r)*a;return o?[i,c]:{x:i,y:c}};e.a=function(t,e,r,n,a){void 0===a&&(a=!1);var o=function(t,e,r){return t+Math.cos(e)*r}(t,r,n),i=function(t,e,r){return t+Math.sin(e)*r}(e,r,n);return a?[o,i]:{x:o,y:i}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-05-js-1a599f4118cf868c4838.js.map