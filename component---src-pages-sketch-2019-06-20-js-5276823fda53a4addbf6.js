(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{"/Q6G":function(n,t,r){"use strict";r.r(t);r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("Vd3H"),r("XfO3"),r("HEwt"),r("q1tI");var a=r("Gmm/"),o=r("ViKx"),e=r("qKvR");function i(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function(n){var t=[],r=[];n.setup=function(){n.createCanvas(660,840,n.WEBGL),(t=Array.from(Array(10),(function(){return{a:n.random(n.TWO_PI),d:n.random()}}))).sort((function(n,t){return n.a-t.a})),r=[t],n.noFill()},n.draw=function(){n.background(0),n.camera(200*n.sin(n.frameCount/200),200*n.cos(n.frameCount/200),500*n.map(n.cos(n.frameCount/1e3),-1,1,0,1),0,0,0,0,1,0);for(var a=function(t){var a=r[t];n.stroke(255,n.map(t,0,r.length,255,0)),n.rotateX(n.map(t,0,r.length,0,n.HALF_PI)),n.beginShape(),a.forEach((function(r){return n.vertex.apply(n,i(Object(o.a)(0,0,r.a,r.d+10*t,!0)))})),n.endShape(n.CLOSE)},e=r.length-1;e>=0;e--)a(e);r.unshift(t.map((function(t){var r=t.a,a=t.d;return{a:n.constrain(r*n.map(n.noise(r,n.frameCount/500),0,1,.1,1.9),0,n.TWO_PI),d:a*n.noise(a,n.frameCount/500)*10}}))),r.length>n.height/20&&r.pop()}};t.default=function(n){var t=n.location;return Object(e.c)(a.a,{sketch:u,path:t.pathname,description:""})}},ViKx:function(n,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return e}));var a=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,a,o,e){void 0===e&&(e=!1);var i=n+Math.cos(r)*a,u=t+Math.sin(r)*o;return e?[i,u]:{x:i,y:u}};t.a=function(n,t,r,e,i){void 0===i&&(i=!1);var u=a(n,r,e),c=o(t,r,e);return i?[u,c]:{x:u,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-20-js-5276823fda53a4addbf6.js.map