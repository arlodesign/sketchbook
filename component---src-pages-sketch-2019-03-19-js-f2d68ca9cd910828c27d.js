(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{ViKx:function(n,t,r){"use strict";r.d(t,"c",(function(){return e})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return a}));var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},a=function(n,t,r,e,o,a){void 0===a&&(a=!1);var i=n+Math.cos(r)*e,u=t+Math.sin(r)*o;return a?[i,u]:{x:i,y:u}};t.a=function(n,t,r,a,i){void 0===i&&(i=!1);var u=e(n,r,a),c=o(t,r,a);return i?[u,c]:{x:u,y:c}}},yEmQ:function(n,t,r){"use strict";r.r(t);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("n0hJ"),r("q1tI");var e=r("Gmm/"),o=r("ViKx"),a=r("qKvR");function i(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return u(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var c=function(n){var t,r,e=[];n.setup=function(){n.createCanvas(660,840),r=n.dist(-100,-100,n.width+100,n.height+100),e=[n.random(20,40),n.random(60,80)],n.background(e[0]),n.colorMode(n.HSB,100),n.blendMode(n.DIFFERENCE),n.noStroke()},n.draw=function(){var a=Object(o.a)(-100,-100,n.frameCount/100,n.width*n.noise(n.frameCount/1e3),!0),u=o.a.apply(void 0,i(a).concat([n.frameCount/2,r*n.noise(n.frameCount/100),!0]));n.fill(n.frameCount%2?e[0]:e[1],50,75),t&&(n.beginShape(),n.vertex(-100,-100),n.vertex.apply(n,i(t)),n.vertex.apply(n,i(u)),n.endShape(n.CLOSE)),t=u,--r<0&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(a.c)(e.a,{sketch:c,path:t.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-19-js-f2d68ca9cd910828c27d.js.map