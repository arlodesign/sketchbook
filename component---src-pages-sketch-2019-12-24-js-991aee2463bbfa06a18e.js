(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{yaoo:function(t,r,n){"use strict";n.r(r);n("pJf4"),n("q8oJ"),n("8npG"),n("YbXK"),n("cFtU"),n("rzGZ"),n("m210"),n("4DPX"),n("q1tI");var e=n("Gmm/"),o=n("Wbzz"),a=n("qKvR");function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return u(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var c=function(t){var r;t.preload=function(){r=t.loadImage(Object(o.withPrefix)("/assets/santa.png"))},t.setup=function(){t.pixelDensity(1),t.createCanvas(660,840),t.background(255),t.image(r,0,0,t.width,t.height)},t.draw=function(){if(t.frameCount<t.width){for(var r=[],n=0;n<t.height;n++)r.push(t.get(t.frameCount-1,n));r.sort((function(r,n){return t.hue(t.color.apply(t,i(r)))-t.hue(t.color.apply(t,i(n)))})).forEach((function(r,n){t.set(t.frameCount-1,n,t.color.apply(t,i(r)))}))}else if(t.frameCount>=t.width&&t.frameCount<t.height+t.width){for(var e=[],o=0;o<t.width;o++)e.push(t.get(o,t.frameCount-1-t.width));e.sort((function(r,n){return t.saturation(t.color.apply(t,i(r)))-t.saturation(t.color.apply(t,i(n)))})).forEach((function(r,n){t.set(n,t.frameCount-1-t.width,t.color.apply(t,i(r)))}))}else t.noLoop();t.updatePixels()}};r.default=function(t){var r=t.location;return Object(a.c)(e.a,{sketch:c,path:r.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-12-24-js-991aee2463bbfa06a18e.js.map