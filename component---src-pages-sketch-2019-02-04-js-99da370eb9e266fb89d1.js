(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{CTZA:function(n,r,t){"use strict";t.r(r);t("pJf4"),t("q8oJ"),t("m210"),t("4DPX"),t("n0hJ"),t("rzGZ"),t("Dq+y"),t("8npG"),t("ToIb"),t("YbXK"),t("cFtU"),t("q1tI");var e=t("Gmm/"),o=t("qKvR");function a(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,r){if(!n)return;if("string"==typeof n)return i(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(n,r)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}var u=function(n){var r,t=100,e=[],o=0,i=[function(r){return 240*n.abs(n.sin(r))},function(r){return 240*n.abs(n.cos(r))},function(r){return 240*n.abs(n.tan(r))},function(r){return 240*n.abs(n.sin(-r))},function(r){return 240*n.abs(n.cos(-r))},function(r){return 240*n.abs(n.tan(-r))},function(){return 240},function(){return 15},function(){return 128}];n.setup=function(){for(n.createCanvas(660,840),n.background(127),r=n.width-200;Array.from(new Set(e)).length<3;)e=[n.random(i),n.random(i),n.random(i)];n.blendMode(n.OVERLAY),n.rectMode(n.CENTER),n.strokeWeight(2)},n.draw=function(){n.translate(100,t);var i=n.floor(n.random(30)),u=r/i,c=n.color.apply(n,a(e.map((function(n){return n(t*o)}))).concat([127]));o%2?(n.noFill(),n.stroke(c)):(n.noStroke(),n.fill(c)),n.beginShape(),n.vertex(0,0);for(var f=0;f<i;f++){var s=n.lerp(u*f,u*(f+1),n.noise(f,t)),l=30*n.noise(t,f)*n.random([-1,1]);n.quadraticVertex(s,l,u*(f+1),0)}n.vertex(r,0),n.endShape(),(t+=30)>n.height-100&&(o++,t=100),15===o&&n.noLoop()}};r.default=function(n){var r=n.location;return Object(o.c)(e.a,{sketch:u,path:r.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-04-js-99da370eb9e266fb89d1.js.map