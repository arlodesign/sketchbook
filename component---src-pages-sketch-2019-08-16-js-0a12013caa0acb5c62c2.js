(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return o})),r.d(n,"b",(function(){return i}));var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,o,i){void 0===i&&(i=!1);var a=t+Math.cos(r)*e,c=n+Math.sin(r)*o;return i?[a,c]:{x:a,y:c}};n.a=function(t,n,r,i,a){void 0===a&&(a=!1);var c=e(t,r,i),u=o(n,r,i);return a?[c,u]:{x:c,y:u}}},gqQl:function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("n0hJ"),r("q1tI");var e=r("Gmm/"),o=r("ViKx"),i=(r("PZSu"),r("qKvR"));function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var u={}.DEV&&!1,f=function(t){t.setup=function(){t.pixelDensity(1),u&&t.frameRate(30),t.createCanvas(660,840),t.noStroke(),t.colorMode(t.HSB,1),t.createLoop(15,{gif:!!u&&{render:!1,open:!0},noiseRadius:1})},t.draw=function(){t.blendMode(t.BLEND),t.background(255),t.blendMode(t.HARD_LIGHT);for(var n=t.animLoop,r=n.noise1D,e=n.theta,i=t.PI;i>0;i-=t.PI/20)for(var c=0;c<t.TWO_PI;c+=t.TWO_PI/3)t.fill(t.map(r(t.cos(c+e-i)),-1,1,0,1),50,100,t.map(i,t.PI,0,0,.5)),t.circle.apply(t,a(Object(o.a)(t.width/2,t.height/2,c+e-i,t.map(r(t.sin(e-i)),-1,1,0,t.width/3),!0)).concat([t.map(i,t.PI,0,1e3,10)])),t.fill(t.map(r(t.cos(c+e)),-1,1,0,1),50,100),t.circle.apply(t,a(Object(o.a)(t.width/2,t.height/2,c+e,t.map(r(t.sin(e)),-1,1,0,t.width/3),!0)).concat([10]))}};n.default=function(t){var n=t.location;return Object(i.c)(e.a,{sketch:f,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-16-js-0a12013caa0acb5c62c2.js.map