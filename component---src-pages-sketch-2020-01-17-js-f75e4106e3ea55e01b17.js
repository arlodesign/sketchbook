(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return u})),r.d(n,"b",(function(){return i}));var e=function(t,n,r){return t+Math.cos(n)*r},u=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,u,i){void 0===i&&(i=!1);var a=t+Math.cos(r)*e,o=n+Math.sin(r)*u;return i?[a,o]:{x:a,y:o}};n.a=function(t,n,r,i,a){void 0===a&&(a=!1);var o=e(t,r,i),c=u(n,r,i);return a?[o,c]:{x:o,y:c}}},av4u:function(t,n,r){"use strict";r.r(n),r.d(n,"linear",(function(){return e})),r.d(n,"easeInQuad",(function(){return u})),r.d(n,"easeOutQuad",(function(){return i})),r.d(n,"easeInOutQuad",(function(){return a})),r.d(n,"easeInCubic",(function(){return o})),r.d(n,"easeOutCubic",(function(){return c})),r.d(n,"easeInOutCubic",(function(){return f})),r.d(n,"easeInQuart",(function(){return s})),r.d(n,"easeOutQuart",(function(){return d})),r.d(n,"easeInOutQuart",(function(){return p})),r.d(n,"easeInQuint",(function(){return h})),r.d(n,"easeOutQuint",(function(){return b})),r.d(n,"easeInOutQuint",(function(){return l}));var e=function(t){return t},u=function(t){return t*t},i=function(t){return t*(2-t)},a=function(t){return t<.5?2*t*t:(4-2*t)*t-1},o=function(t){return t*t*t},c=function(t){return--t*t*t+1},f=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},s=function(t){return t*t*t*t},d=function(t){return 1- --t*t*t*t},p=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},h=function(t){return t*t*t*t*t},b=function(t){return 1+--t*t*t*t*t},l=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},c4Y5:function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("q1tI");var e=r("Gmm/"),u=(r("PZSu"),r("ViKx")),i=r("av4u"),a=r("qKvR");function o(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var f=function(t){var n=t.getURLParams().render;t.setup=function(){t.pixelDensity(1),t.frameRate(60),t.createCanvas(660,840,t.WEBGL),t.noStroke(),t.createLoop(60,{gif:!!n&&{render:!1,open:!0},noiseRadius:2})},t.draw=function(){var n=t.animLoop,r=n.theta,e=n.noise1D;t.background(0),t.specularMaterial(128),t.pointLight.apply(t,[255,255,0].concat(o(Object(u.a)(0,0,r,t.width/2,!0)),[t.width*Object(i.easeInOutQuart)(t.abs(e(5)))])),t.pointLight.apply(t,[0,255,255].concat(o(Object(u.a)(0,0,r+t.TWO_PI/3,t.width/2,!0)),[t.width*Object(i.easeInOutQuart)(t.abs(e(7)))])),t.pointLight.apply(t,[255,0,255].concat(o(Object(u.a)(0,0,r+t.TWO_PI/3*2,t.width/2,!0)),[t.width*Object(i.easeInOutQuart)(t.abs(e(9)))]));for(var a=-t.width/2;a<=t.width/2;a+=30)for(var c=-t.height/2;c<=t.height/2;c+=30)t.push(),t.translate(a,c,15*t.cos(r+t.dist.apply(t,[a,c].concat(o(Object(u.a)(0,0,-r,10*t.height,!0)))))),t.box(30),t.pop()}};n.default=function(t){var n=t.location;return Object(a.c)(e.a,{sketch:f,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2020-01-17-js-f75e4106e3ea55e01b17.js.map