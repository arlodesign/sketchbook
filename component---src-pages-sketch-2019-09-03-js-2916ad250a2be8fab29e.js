(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return o})),r.d(n,"b",(function(){return a}));var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},a=function(t,n,r,e,o,a){void 0===a&&(a=!1);var i=t+Math.cos(r)*e,u=n+Math.sin(r)*o;return a?[i,u]:{x:i,y:u}};n.a=function(t,n,r,a,i){void 0===i&&(i=!1);var u=e(t,r,a),c=o(n,r,a);return i?[u,c]:{x:u,y:c}}},ZF34:function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("q1tI");var e=r("Gmm/"),o=(r("PZSu"),r("ViKx")),a=r("qKvR");function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return u(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var c={}.DEV&&!1,f=function(t){var n=t.random(100/7);t.setup=function(){t.frameRate(60),c&&t.pixelDensity(1),t.createCanvas(660,840),t.background(0),t.colorMode(t.HSB,100),t.blendMode(t.SCREEN),t.strokeWeight(2),t.createLoop(60,{gif:!!c&&{render:!1,open:!0},noiseRadius:.5})},t.draw=function(){var r=t.animLoop,e=r.noise2D,a=r.theta;t.translate.apply(t,i(Object(o.a)(t.width/2,t.height/2,-a,e(.01,.02)*(t.width/2),!0)));for(var u=1;u<=7;u++){var f=e(.06*u,.08*u)*t.height,s=(e(.05*u,.07*u)+1)/3,d=a+t.TWO_PI*(u/7),p=Object(o.a)(0,0,d,f),l=p.x,h=p.y;t.stroke(n+100/7*(u-1),50,25,50),t.line(l*s,h*s,l,h)}3600===t.frameCount&&!c&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(a.c)(e.a,{sketch:f,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-03-js-2916ad250a2be8fab29e.js.map