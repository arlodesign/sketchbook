(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{OumG:function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("q1tI");var e=r("Gmm/"),o=(r("PZSu"),r("ViKx")),i=r("qKvR");function a(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return u(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var c={}.DEV&&!1,s=function(t){t.setup=function(){c&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840),t.strokeWeight(10),t.createLoop(10,{gif:!!c&&{render:!1,open:!0},noiseRadius:.1})},t.draw=function(){t.blendMode(t.BLEND),t.background(0),t.blendMode(t.SCREEN);for(var n=t.animLoop.noise()+1,r=0;r<33;r++)t.push(),t.noFill(),t.stroke(["red","green","blue"][r%3]),t.translate(t.width/2,t.height/2),t.rotate(t.TWO_PI/33*r+t.animLoop.theta),t.ellipse.apply(t,a(Object(o.a)(0,0,t.TWO_PI/33*r,t.width/10*n,!0)).concat([t.width/2*t.map(t.sin(t.animLoop.theta),-1,1,n,0),t.height/2*t.map(t.cos(t.animLoop.theta),-1,1,0,n)])),t.pop()}};n.default=function(t){var n=t.location;return Object(i.c)(e.a,{sketch:s,path:n.pathname,description:""})}},ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return o})),r.d(n,"b",(function(){return i}));var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,o,i){void 0===i&&(i=!1);var a=t+Math.cos(r)*e,u=n+Math.sin(r)*o;return i?[a,u]:{x:a,y:u}};n.a=function(t,n,r,i,a){void 0===a&&(a=!1);var u=e(t,r,i),c=o(n,r,i);return a?[u,c]:{x:u,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-16-js-d7c02eb28e2265095411.js.map