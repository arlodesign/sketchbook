(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{"4cVC":function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("n0hJ"),r("q1tI");var e=r("Gmm/"),i=(r("PZSu"),r("ViKx")),o=r("qKvR");function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var u=function(t){var n,r=t.getURLParams().render,e=[],o=function(){function r(){this.a=t.random(t.TWO_PI)}return r.prototype.draw=function(){var r;(r=n).line.apply(r,[n.width/2,n.height/2].concat(a(Object(i.a)(n.width/2,n.height/2,this.a*t.animLoop.noise1D(this.a),t.sqrt(n.width/2*(n.width/2)+n.height/2*(n.height/2)),!0))))},r}();t.setup=function(){t.pixelDensity(r?2:1),t.frameRate(30),t.createCanvas(660,840),t.createLoop(20,{gif:!!r&&{render:!1,open:!0},noiseRadius:.1}),e=Array(100).fill().map((function(){return new o})),n=t.createGraphics(135,135)},t.draw=function(){t.animLoop.noise1D;t.background(255),n.background(255),e.forEach((function(t){return t.draw()}));for(var r=0;r<=t.ceil(t.width/135);r++)for(var i=0;i<=t.ceil(t.height/135);i++)t.push(),t.translate(135*r+67.5,135*i+67.5),t.scale(r%2?1:-1,i%2?-1:1),t.image(n,-67.5,-67.5),t.pop()}};n.default=function(t){var n=t.location;return Object(o.c)(e.a,{sketch:u,path:n.pathname,description:""})}},ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return i})),r.d(n,"b",(function(){return o}));var e=function(t,n,r){return t+Math.cos(n)*r},i=function(t,n,r){return t+Math.sin(n)*r},o=function(t,n,r,e,i,o){void 0===o&&(o=!1);var a=t+Math.cos(r)*e,c=n+Math.sin(r)*i;return o?[a,c]:{x:a,y:c}};n.a=function(t,n,r,o,a){void 0===a&&(a=!1);var c=e(t,r,o),u=i(n,r,o);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2020-01-23-js-11ac3de52c1e270ed7d6.js.map