(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return a})),r.d(n,"b",(function(){return i}));var e=function(t,n,r){return t+Math.cos(n)*r},a=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,a,i){void 0===i&&(i=!1);var o=t+Math.cos(r)*e,c=n+Math.sin(r)*a;return i?[o,c]:{x:o,y:c}};n.a=function(t,n,r,i,o){void 0===o&&(o=!1);var c=e(t,r,i),u=a(n,r,i);return o?[c,u]:{x:c,y:u}}},ejyU:function(t,n,r){"use strict";r.r(n);r("q8oJ"),r("8npG"),r("m210"),r("4DPX"),r("rzGZ"),r("YbXK"),r("cFtU"),r("q1tI");var e=r("Gmm/"),a=r("ViKx"),i=r("qKvR");function o(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(t){var n=[],r=[];t.setup=function(){t.pixelDensity(1),t.createCanvas(660,840),(n=Array.from(Array(100),(function(){return{a:t.random(t.TWO_PI),d:t.random(10)}}))).sort((function(t,n){return t.a-n.a})),r=[n],t.noFill()},t.draw=function(){t.background(0);for(var e=function(n){var e=r[n];t.stroke(255,t.map(n,0,r.length,255,0)),t.beginShape(),t.curveVertex.apply(t,o(Object(a.a)(t.width/2,t.height/2,e[e.length-3].a,e[e.length-3].d+6*n,!0))),t.curveVertex.apply(t,o(Object(a.a)(t.width/2,t.height/2,e[e.length-2].a,e[e.length-2].d+6*n,!0))),t.curveVertex.apply(t,o(Object(a.a)(t.width/2,t.height/2,e[e.length-1].a,e[e.length-1].d+6*n,!0))),e.forEach((function(r){return t.curveVertex.apply(t,o(Object(a.a)(t.width/2,t.height/2,r.a,r.d+6*n,!0)))})),t.endShape()},i=r.length-1;i>=0;i--)e(i);r.unshift(n.map((function(n){var r=n.a,e=n.d;return{a:t.constrain(r*t.map(t.noise(r,t.frameCount/500),0,1,.1,1.9),0,t.TWO_PI),d:e*t.noise(e,t.frameCount/500)*10}}))),r.length>t.height/12&&r.pop()}};n.default=function(t){var n=t.location;return Object(i.c)(e.a,{sketch:c,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-17-js-8e1821763d50d1ce8c0f.js.map