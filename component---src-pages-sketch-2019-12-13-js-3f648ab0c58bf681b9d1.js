(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return o})),r.d(n,"b",(function(){return i}));var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,o,i){void 0===i&&(i=!1);var a=t+Math.cos(r)*e,c=n+Math.sin(r)*o;return i?[a,c]:{x:a,y:c}};n.a=function(t,n,r,i,a){void 0===a&&(a=!1);var c=e(t,r,i),u=o(n,r,i);return a?[c,u]:{x:c,y:u}}},le9h:function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("n0hJ"),r("q1tI");var e=r("Gmm/"),o=r("ViKx"),i=(r("PZSu"),r("qKvR"));function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var u=function(t){var n=t.getURLParams().render,r=[],e=function(){function n(n,r,e){this.color=t.color(n),this.color.setAlpha(216),this.noiseA=t.random(),this.noiseB=t.random(),this.spin=r,this.direction=e?-1:1,this.func=e?Math.sin:Math.cos}return n.prototype.draw=function(){var n=t.animLoop,r=n.noise1D,e=n.theta,i=t.map(r(this.noiseA),-1,1,10,35),c=137.5/360*t.TWO_PI+.01*r(this.noiseB);t.fill(this.color),t.noStroke(),t.push(),t.translate(t.width/2,t.height/2),t.rotate(e*this.direction);for(var u=1;u<3e3;u++){var s=Object(o.a)(0,0,u*c,i*t.sqrt(u),!0);t.push(),t.translate.apply(t,a(s)),t.rotate(e*this.spin*-this.direction),t.rectMode(t.CENTER),t.square(0,0,t.map(t.dist.apply(t,[0,0].concat(a(s))),0,t.sqrt(t.width/2*(t.width/2)+t.height/2*(t.height/2)),t.map(this.func(e),-1,1,40,10),t.map(this.func(2*e),-1,1,10,40))),t.pop()}t.pop()},n}();t.setup=function(){t.pixelDensity(1),t.frameRate(30),t.createCanvas(660,840),t.createLoop(20,{gif:!!n&&{render:!1,open:!0},noiseRadius:.5});var o=t.shuffle(Array(9).fill().map((function(t,n){return n+3})));t.shuffle(["cyan","yellow","magenta"]).forEach((function(t,n){r.push(new e(t,o[n],n%2))})),r=[new e("cyan"),new e("yellow"),new e("magenta")]},t.draw=function(){t.blendMode(t.BLEND),t.background(255),t.blendMode(t.MULTIPLY),r.forEach((function(t){return t.draw()}))}};n.default=function(t){var n=t.location;return Object(i.c)(e.a,{sketch:u,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-12-13-js-3f648ab0c58bf681b9d1.js.map