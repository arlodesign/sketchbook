(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return e})),r.d(n,"b",(function(){return a}));var o=function(t,n,r){return t+Math.cos(n)*r},e=function(t,n,r){return t+Math.sin(n)*r},a=function(t,n,r,o,e,a){void 0===a&&(a=!1);var i=t+Math.cos(r)*o,c=n+Math.sin(r)*e;return a?[i,c]:{x:i,y:c}};n.a=function(t,n,r,a,i){void 0===i&&(i=!1);var c=o(t,r,a),u=e(n,r,a);return i?[c,u]:{x:c,y:u}}},s158:function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("q1tI");var o=r("Gmm/"),e=(r("PZSu"),r("ViKx")),a=r("qKvR");function i(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=t[r];return o}var u=function(t){t.setup=function(){t.frameRate(60),t.createCanvas(660,840),t.background(128),t.colorMode(t.HSL,2),t.blendMode(t.HARD_LIGHT),t.createLoop(120,{noiseRadius:2})},t.draw=function(){for(var n=t.animLoop,r=n.noise1D,o=n.theta,a=Object(e.a)(t.width/2,t.height/2,o,t.map(r(.01),-1,1,t.width/2,0),!0),c=0;c<t.TWO_PI;c+=t.TWO_PI/5)t.stroke(r(c/200)+1,r(c/300)+1,r(.05)+1,.25),t.line.apply(t,i(a).concat(i(e.a.apply(void 0,i(a).concat([o+c,t.map(r(c/100),-1,1,t.width/2,t.width/5),!0])))));7200===t.frameCount&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(a.c)(o.a,{sketch:u,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-26-js-05e61595a612f62c9c97.js.map