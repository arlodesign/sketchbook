(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{"4bH7":function(n,t,r){"use strict";r.r(t);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("q1tI");var o=r("Gmm/"),e=r("ViKx"),a=r("qKvR");function i(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(n){var t=n.random(80),r=0,o=1,a=0;n.setup=function(){n.createCanvas(660,840),n.colorMode(n.HSL,100),n.background(t,30,80),n.noFill(),n.blendMode(n.OVERLAY),n.ellipseMode(n.CENTER)},n.draw=function(){var c=n.noise(n.frameCount/1500,a);n.push(),n.stroke(n.map(n.cos(n.frameCount/150),-1,1,t,t+20),50,n.map(n.sin(a),-1,1,90,25),20*(1-c)),n.translate.apply(n,i(Object(e.a)(n.width/2,n.height/2,a,n.width/3*c,!0))),n.rotate(r),n.arc(0,0,n.width*c,50,n.frameCount/15,n.frameCount/15+n.PI),n.pop(),a+=n.TWO_PI/720,console.log(o),r-=n.HALF_PI/10800,a>n.TWO_PI&&(a=0,++o>15&&(n.noLoop(),console.log("done")))}};t.default=function(n){var t=n.location;return Object(a.c)(o.a,{sketch:c,path:t.pathname,description:""})}},ViKx:function(n,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return e})),r.d(t,"b",(function(){return a}));var o=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},a=function(n,t,r,o,e,a){void 0===a&&(a=!1);var i=n+Math.cos(r)*o,c=t+Math.sin(r)*e;return a?[i,c]:{x:i,y:c}};t.a=function(n,t,r,a,i){void 0===i&&(i=!1);var c=o(n,r,a),u=e(t,r,a);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-18-js-6f46476e0928eb5ec9c4.js.map