(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{ViKx:function(t,e,r){"use strict";r.d(e,"b",(function(){return n}));var n=function(t,e,r,n,a,o){void 0===o&&(o=!1);var i=t+Math.cos(r)*n,c=e+Math.sin(r)*a;return o?[i,c]:{x:i,y:c}};e.a=function(t,e,r,n,a){void 0===a&&(a=!1);var o=function(t,e,r){return t+Math.cos(e)*r}(t,r,n),i=function(t,e,r){return t+Math.sin(e)*r}(e,r,n);return a?[o,i]:{x:o,y:i}}},cRTl:function(t,e,r){"use strict";r.r(e);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("bHtr");var n=r("q1tI"),a=r.n(n),o=r("Bl7J"),i=r("9VVL"),c=(r("PZSu"),r("ViKx"));function u(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p={}.DEV&&!0,l=function(t){var e=t.random(50),r=[e,e+50],n=Array(5).fill().map((function(e,r){return t.floor(t.random(r,r+3))}));t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSL,100),t.blendMode(t.HARD_LIGHT),t.background(t.random(r),100,10),t.strokeWeight(2),t.createLoop(360,{noiseRadius:.5})},t.draw=function(){var e=t.animLoop,a=e.theta,o=e.noise1D,i=Object(c.a)(0,0,2*a,t.height,!0),l=Object(c.a)(0,0,-a*n[0],t.width/2*o(n[0]/100),!0),f=Object(c.a)(0,0,a*n[1],t.width/2*o(n[1]/100),!0),s=Object(c.a)(0,0,2*-a,t.width,!0);t.translate(t.width/2,t.height/2),t.rotate(a),t.stroke(r[t.floor(t.map(t.sin(a*n[2]),-1,1,0,2))],100,t.map(t.sin(a*n[3]),-1,1,50,100),t.map(t.cos(a*n[4]),-1,1,10,0)),t.noFill(),t.beginShape(),t.curveVertex.apply(t,u(i)),t.curveVertex.apply(t,u(l)),t.curveVertex.apply(t,u(f)),t.curveVertex.apply(t,u(s)),t.curveVertex.apply(t,u(i)),t.curveVertex.apply(t,u(l)),t.curveVertex.apply(t,u(f)),t.endShape(),21600===t.frameCount&&(t.noLoop(),p&&alert("done"))}};e.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{sketch:l}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-07-js-17d7237618548827c63b.js.map