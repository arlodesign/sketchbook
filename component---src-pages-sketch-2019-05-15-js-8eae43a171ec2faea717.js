(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{GkyO:function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("rzGZ"),r("m210"),r("4DPX"),r("n0hJ"),r("YbXK"),r("cFtU"),r("q1tI");var e=r("Gmm/"),i=r("ViKx"),a=r("qKvR");function o(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var h=function(t){var n=Array.from(Array(4),(function(){return t.TWO_PI*t.random()/750})),r=[0,t.HALF_PI,t.PI,t.PI+t.HALF_PI];t.setup=function(){t.createCanvas(660,840),t.noStroke()},t.draw=function(){var e=t.height/2;t.blendMode(t.BLEND),t.background(255),t.blendMode(t.MULTIPLY),t.fill("yellow"),t.quad.apply(t,o(Object(i.a)(t.width/2,t.height/2,r[0],e,!0)).concat(o(Object(i.a)(t.width/2,t.height/2,r[1],e,!0)),o(Object(i.a)(t.width/2,t.height/2,r[2],e,!0)),o(Object(i.a)(t.width/2,t.height/2,r[3],e,!0)))),t.fill("magenta"),t.quad.apply(t,o(Object(i.a)(t.width/2,t.height/2,t.TWO_PI/3+r[0],e,!0)).concat(o(Object(i.a)(t.width/2,t.height/2,t.TWO_PI/3+r[1],e,!0)),o(Object(i.a)(t.width/2,t.height/2,t.TWO_PI/3+r[2],e,!0)),o(Object(i.a)(t.width/2,t.height/2,t.TWO_PI/3+r[3],e,!0)))),t.fill("cyan"),t.quad.apply(t,o(Object(i.a)(t.width/2,t.height/2,t.TWO_PI/3*2+r[0],e,!0)).concat(o(Object(i.a)(t.width/2,t.height/2,t.TWO_PI/3*2+r[1],e,!0)),o(Object(i.a)(t.width/2,t.height/2,t.TWO_PI/3*2+r[2],e,!0)),o(Object(i.a)(t.width/2,t.height/2,t.TWO_PI/3*2+r[3],e,!0))));for(var a=0;a<r.length;a++)r[a]+=n[a]}};n.default=function(t){var n=t.location;return Object(a.c)(e.a,{sketch:h,path:n.pathname,description:""})}},ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return i})),r.d(n,"b",(function(){return a}));var e=function(t,n,r){return t+Math.cos(n)*r},i=function(t,n,r){return t+Math.sin(n)*r},a=function(t,n,r,e,i,a){void 0===a&&(a=!1);var o=t+Math.cos(r)*e,c=n+Math.sin(r)*i;return a?[o,c]:{x:o,y:c}};n.a=function(t,n,r,a,o){void 0===o&&(o=!1);var c=e(t,r,a),h=i(n,r,a);return o?[c,h]:{x:c,y:h}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-15-js-8eae43a171ec2faea717.js.map