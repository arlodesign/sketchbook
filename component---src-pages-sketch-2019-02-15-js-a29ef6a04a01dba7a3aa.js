(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{"K+yR":function(t,r,e){"use strict";e.r(r);e("pJf4"),e("q8oJ"),e("8npG"),e("YbXK"),e("cFtU"),e("rzGZ"),e("m210"),e("4DPX"),e("q1tI");var n=e("Gmm/"),o=e("qKvR");function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var c=function(t){t.setup=function(){t.createCanvas(660,840,t.WEBGL),t.stroke(255),t.strokeWeight(.5),t.noFill(),t.noiseDetail(4,.5),t.rectMode(t.CENTER),t.camera(-t.width/4,-t.height/4,400,-t.width/4,-t.height/4,0,0,1,0)},t.draw=function(){t.background(0);for(var r=5-t.width/2,e=5-t.height/2,n=[];r<0;){for(var o=[];e<0;){var i=t.noise(.005*r,.005*e,t.frameCount/250);o.push([r,e,t.map(i,0,1,-400,400)]),e+=5}n.push(o),r+=5,e=5-t.height/2}n.forEach((function(r){t.beginShape(),r.forEach((function(r){return t.vertex.apply(t,a(r))})),t.endShape()}));for(var c=0;c<n[0].length;c++){t.beginShape();for(var u=0;u<n.length;u++)t.vertex.apply(t,a(n[u][c]));t.endShape()}}};r.default=function(t){var r=t.location;return Object(o.c)(n.a,{sketch:c,path:r.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-15-js-a29ef6a04a01dba7a3aa.js.map