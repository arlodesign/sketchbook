(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{N4d0:function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("q1tI");var e=r("Gmm/"),o=(r("PZSu"),r("ViKx")),a=r("qKvR");function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return u(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var c={}.DEV&&!1,f=function(t){t.setup=function(){t.frameRate(30),c&&t.pixelDensity(1),t.createCanvas(660,840),t.background(255),t.noFill(),t.blendMode(t.MULTIPLY),t.createLoop(120,{gif:!!c&&{render:!1,open:!0}})},t.draw=function(){var n=t.animLoop,r=n.noise1D,e=n.noise2D,a=n.theta;["cyan","magenta","yellow"].forEach((function(n,u){var c=t.color(n);c.setAlpha(16),t.stroke(c),t.push(),t.translate.apply(t,i(Object(o.a)(t.width/3,t.height/2,a+u*(t.TWO_PI/3),t.map(t.cos(a+u*(t.TWO_PI/3)),-1,1,t.height/2,0,!0),!0))),t.rotate(t.map(r((u+1)/100,{radius:.1}),-1,1,t.TWO_PI,0));var f=t.map(e(n.length,u+1,{radius:2}),-1,1,t.width/2,t.width),s=t.map(e(u+1,n.length,{radius:2}),-1,1,t.height/4,t.height/8);t.ellipse(0,0,f,s),t.pop()})),!c&&3600===t.frameCount&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(a.c)(e.a,{sketch:f,path:n.pathname,description:""})}},ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return o})),r.d(n,"b",(function(){return a}));var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},a=function(t,n,r,e,o,a){void 0===a&&(a=!1);var i=t+Math.cos(r)*e,u=n+Math.sin(r)*o;return a?[i,u]:{x:i,y:u}};n.a=function(t,n,r,a,i){void 0===i&&(i=!1);var u=e(t,r,a),c=o(n,r,a);return i?[u,c]:{x:u,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-23-js-89ebe6dd632d081d21b9.js.map