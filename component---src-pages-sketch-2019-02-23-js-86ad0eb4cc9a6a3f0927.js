(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{T4v5:function(t,n,r){"use strict";function e(t,n,r){t%2?(n(),r()):(r(),n())}r.d(n,"a",(function(){return e}))},ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return o})),r.d(n,"b",(function(){return a}));var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},a=function(t,n,r,e,o,a){void 0===a&&(a=!1);var i=t+Math.cos(r)*e,c=n+Math.sin(r)*o;return a?[i,c]:{x:i,y:c}};n.a=function(t,n,r,a,i){void 0===i&&(i=!1);var c=e(t,r,a),u=o(n,r,a);return i?[c,u]:{x:c,y:u}}},"dR+X":function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("q1tI");var e=r("Gmm/"),o=r("ViKx"),a=r("T4v5"),i=r("qKvR");function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return u(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var f=function(t){var n,r,e,i;t.setup=function(){t.createCanvas(660,840),t.noFill(),t.background(240),t.colorMode(t.HSB,100),t.blendMode(t.HARD_LIGHT),r=3*t.dist(0,0,t.width,t.height),e=t.random(0,49),i=t.random(50,100),n=[-t.width/3,-t.height/3]};var u=function(e){t.beginShape();for(var a=0;a<t.TWO_PI;a+=.4/3){var i=o.a.apply(void 0,c(n).concat([a*t.noise(r/1e3,e(a+t.frameCount/1e3)),r*t.noise(a/1e3,e(a+t.frameCount/500))])),u=i.x,f=i.y;t.vertex(u,f)}t.endShape()};t.draw=function(){Object(a.a)(t.frameCount,(function(){t.stroke(e,t.map(t.tan(t.frameCount/300),-1,1,66,33),66,10),u(Math.cos)}),(function(){t.stroke(i,t.map(t.tan(t.frameCount/300),-1,1,33,66),66,10),u(Math.sin)})),(r-=.4)<t.dist.apply(t,[0,0].concat(c(n)))&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(i.c)(e.a,{sketch:f,path:n.pathname,description:"Be patient. Sometimes this one starts drawing off-canvas."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-23-js-86ad0eb4cc9a6a3f0927.js.map