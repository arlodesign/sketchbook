(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{ViKx:function(n,t,r){"use strict";r.d(t,"b",(function(){return e}));var e=function(n,t,r,e,a,o){void 0===o&&(o=!1);var i=n+Math.cos(r)*e,u=t+Math.sin(r)*a;return o?[i,u]:{x:i,y:u}};t.a=function(n,t,r,e,a){void 0===a&&(a=!1);var o=function(n,t,r){return n+Math.cos(t)*r}(n,r,e),i=function(n,t,r){return n+Math.sin(t)*r}(t,r,e);return a?[o,i]:{x:o,y:i}}},"q+nj":function(n,t,r){"use strict";r.r(t);r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("bHtr"),r("Vd3H"),r("XfO3"),r("HEwt");var e=r("q1tI"),a=r.n(e),o=r("Bl7J"),i=r("9VVL"),u=r("ViKx");function c(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(n){var t=[],r=[];n.setup=function(){n.pixelDensity(1),n.createCanvas(660,840),(t=Array.from(Array(5),(function(t,r){return{a:n.random(n.TWO_PI*(r/5),n.TWO_PI*((r+1)/5)),d:n.random(10)}}))).sort((function(n,t){return n.a-t.a})),r=[t],n.noStroke()},n.draw=function(){n.background(0);for(var e=function(t){var e=r[t].sort((function(n,t){return n.a-t.a}));n.fill(t%2?255:0),n.beginShape(),e.forEach((function(r){return n.vertex.apply(n,c(Object(u.a)(n.width/2,n.height/2,r.a,r.d+20*t,!0)))})),n.vertex.apply(n,c(Object(u.a)(n.width/2,n.height/2,e[0].a,e[0].d+20*t,!0))),n.endShape(n.CLOSE)},a=r.length-1;a>=0;a--)e(a);r.unshift(t.map((function(t){var r=t.a,e=t.d;return{a:n.TWO_PI-(r*n.map(n.noise(r,n.frameCount/500),0,1,.1,1.9)+n.TWO_PI/1080*n.frameCount),d:e*n.map(n.noise(e,n.frameCount/250),0,1,.1,2)}}))),r.length>n.height/20&&r.pop()}};t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{sketch:f}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-18-js-8c1f9c86b83e495dd431.js.map