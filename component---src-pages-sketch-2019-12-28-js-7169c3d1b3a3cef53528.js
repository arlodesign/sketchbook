(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{"sw+o":function(t,r,n){"use strict";n.r(r);n("pJf4"),n("q8oJ"),n("8npG"),n("YbXK"),n("cFtU"),n("rzGZ"),n("m210"),n("4DPX"),n("q1tI");var o=n("Gmm/"),e=n("Wbzz"),a=(n("PZSu"),n("qKvR"));function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return u(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,o=new Array(r);n<r;n++)o[n]=t[n];return o}var c=function(t){var r,n=t.getURLParams().render,o=function(r,n,o){return t.hue(t.color(r,n,o))};t.preload=function(){r=t.loadImage(Object(e.withPrefix)("/assets/leaves.png"))},t.setup=function(){t.pixelDensity(1),t.frameRate(30),t.createCanvas(660,840),t.createLoop(40,{gif:!!n&&{render:!1,open:!0},noiseRadius:.1})},t.draw=function(){t.background(255),t.image(r,0,0,t.width,t.height),t.loadPixels();for(var n=function(r){for(var n=t.floor(t.abs(t.animLoop.noise2D(1,r/100))*(t.width/5))+1,e=t.floor(t.animLoop.noise2D(2,r/200,{noiseRadius:10})*(t.width/10)),a=function(e){for(var a=[],u=e;u<Math.min(e+n,t.width);u++)a.push(t.get(u,r));a.sort((function(t,r){return o.apply(void 0,i(t))-o.apply(void 0,i(r))})).forEach((function(n,o){t.set(o+e,r,t.color.apply(t,i(n)))}))},u=t.width/2-e;u<t.width;u+=n)a(u);for(var c=function(e){for(var a=[],u=e;u>Math.max(e-n,0);u--)a.push(t.get(u,r));a.sort((function(t,r){return o.apply(void 0,i(t))-o.apply(void 0,i(r))})).forEach((function(n,o){t.set(e-o,r,t.color.apply(t,i(n)))}))},f=t.width/2-e;f>0;f-=n)c(f)},e=0;e<t.height;e++)n(e);t.updatePixels(),t.frameCount<1200&&console.log(t.frameCount+" / 1200")}};r.default=function(t){var r=t.location;return Object(a.c)(o.a,{sketch:c,path:r.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-12-28-js-7169c3d1b3a3cef53528.js.map