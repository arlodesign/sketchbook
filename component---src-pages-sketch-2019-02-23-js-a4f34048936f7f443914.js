(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{T4v5:function(n,t,r){"use strict";function o(n,t,r){n%2?(t(),r()):(r(),t())}r.d(t,"a",(function(){return o}))},ViKx:function(n,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return e})),r.d(t,"b",(function(){return a}));var o=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},a=function(n,t,r,o,e,a){void 0===a&&(a=!1);var i=n+Math.cos(r)*o,c=t+Math.sin(r)*e;return a?[i,c]:{x:i,y:c}};t.a=function(n,t,r,a,i){void 0===i&&(i=!1);var c=o(n,r,a),u=e(t,r,a);return i?[c,u]:{x:c,y:u}}},"dR+X":function(n,t,r){"use strict";r.r(t);r("YbXK"),r("cFtU"),r("q8oJ"),r("8npG"),r("m210"),r("4DPX"),r("rzGZ"),r("q1tI");var o=r("Gmm/"),e=r("ViKx"),a=r("T4v5"),i=r("qKvR");function c(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function(n){var t,r,o,i;n.setup=function(){n.createCanvas(660,840),n.noFill(),n.background(240),n.colorMode(n.HSB,100),n.blendMode(n.HARD_LIGHT),r=3*n.dist(0,0,n.width,n.height),o=n.random(0,49),i=n.random(50,100),t=[-n.width/3,-n.height/3]};var u=function(o){n.beginShape();for(var a=0;a<n.TWO_PI;a+=.4/3){var i=e.a.apply(void 0,c(t).concat([a*n.noise(r/1e3,o(a+n.frameCount/1e3)),r*n.noise(a/1e3,o(a+n.frameCount/500))])),u=i.x,f=i.y;n.vertex(u,f)}n.endShape()};n.draw=function(){Object(a.a)(n.frameCount,(function(){n.stroke(o,n.map(n.tan(n.frameCount/300),-1,1,66,33),66,10),u(Math.cos)}),(function(){n.stroke(i,n.map(n.tan(n.frameCount/300),-1,1,33,66),66,10),u(Math.sin)})),(r-=.4)<n.dist.apply(n,[0,0].concat(c(t)))&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(i.c)(o.a,{sketch:u,path:t.pathname,description:"Be patient. Sometimes this one starts drawing off-canvas."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-23-js-a4f34048936f7f443914.js.map