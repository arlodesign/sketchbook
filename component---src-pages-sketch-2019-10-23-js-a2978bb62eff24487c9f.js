(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{E8Cl:function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("n0hJ"),r("q1tI");var e=r("Gmm/"),i=r("ViKx"),a=(r("PZSu"),r("qKvR"));function o(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return u(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function c(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var f={}.DEV&&!1,h=function(t){var n,r=Array(3),e=Array(3),a=function(){function n(n){this._angle=t.random(t.TWO_PI*n,t.TWO_PI*(n+1)),this.distance=t.width/2,this.seed=t.random(.1)}var r,e,a;return r=n,(e=[{key:"angle",get:function(){return this._angle*t.animLoop.noise1D(this.seed)}},{key:"coord",get:function(){return Object(i.a)(t.width/2,t.height/2,this.angle,this.distance,!0)}}])&&c(r.prototype,e),a&&c(r,a),n}();t.setup=function(){t.pixelDensity(1),t.frameRate(30),t.createCanvas(660,840),t.createLoop(49,{gif:!!f&&{render:!1,open:!0},noiseRadius:.1}),t.noStroke(),n=function(){return t.map(t.sin(t.animLoop.theta),-1,1,10,40)},r=r.fill(null).map((function(t,n){return new a(n)})),e=e.fill(null).map((function(t,n){return new a(n)}))},t.draw=function(){t.background(255);var e=t.createGraphics(t.width,t.height);e.fill(0);for(var i=0;i<t.width;i+=t.width/n())e.rect(i,0,t.width/n()/2,t.height);var a=t.createGraphics(t.width,t.height);a.fill(0),a.beginShape(),r.forEach((function(t){var n=t.coord;return a.vertex.apply(a,o(n))})),a.endShape(a.CLOSE);var u=e.get();u.mask(a),t.image(u,0,0),t.blendMode(t.SCREEN),t.fill("lightblue"),t.rect(0,0,t.width,t.height),t.blendMode(t.BLEND);for(var c=t.width*-t.animLoop.theta/t.TWO_PI+t.width/n()/2;c<t.width;c+=t.width/n())t.rect(c,0,t.width/n()/2,t.height)}};n.default=function(t){var n=t.location;return Object(a.c)(e.a,{sketch:h,path:n.pathname,description:""})}},ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return i})),r.d(n,"b",(function(){return a}));var e=function(t,n,r){return t+Math.cos(n)*r},i=function(t,n,r){return t+Math.sin(n)*r},a=function(t,n,r,e,i,a){void 0===a&&(a=!1);var o=t+Math.cos(r)*e,u=n+Math.sin(r)*i;return a?[o,u]:{x:o,y:u}};n.a=function(t,n,r,a,o){void 0===o&&(o=!1);var u=e(t,r,a),c=i(n,r,a);return o?[u,c]:{x:u,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-23-js-a2978bb62eff24487c9f.js.map