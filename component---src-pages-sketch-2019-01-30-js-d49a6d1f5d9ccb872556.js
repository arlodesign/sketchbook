(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{QNCt:function(t,e,r){"use strict";r.r(e);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("n0hJ"),r("q1tI");var n=r("Gmm/"),o=r("qKvR");function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=function(t){t.setup=function(){t.createCanvas(660,840),t.noStroke()},t.draw=function(){t.background("white");for(var e=[],r=0;r<=t.height+0;r+=10)e.push({y:r,distFromMouse:t.abs(r-t.mouseY)});var n=t.max.apply(t,i(e.map((function(t){return t.distFromMouse}))));e.forEach((function(r,o){r.y;var i=r.distFromMouse,a=t.map(i,0,n,t.map(t.mouseY,0,t.height,7,2),0);e[o].ex=t.pow(a,a)}));var o=e.reduce((function(t,e){return t+e.ex}),0),a=[0],u=0;e.forEach((function(e){var r=e.ex/o;a.push(u+t.height*r),u+=t.height*r}));e.forEach((function(e,r){var n=e.y,i=e.ex/o,u=(t.height,a[r]),c=a[r+1];t.fill(r%2?255:0),t.beginShape(),t.vertex(0,n),t.quadraticVertex(t.mouseX,u,t.width,n),t.vertex(t.width,n+10),t.quadraticVertex(t.mouseX,c,0,n+10),t.endShape()}))},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};e.default=function(t){var e=t.location;return Object(o.c)(n.a,{sketch:u,path:e.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-30-js-d49a6d1f5d9ccb872556.js.map