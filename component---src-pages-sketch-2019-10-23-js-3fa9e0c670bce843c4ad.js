(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{E8Cl:function(t,e,n){"use strict";n.r(e);n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("rE2o"),n("ioFf"),n("rGqo"),n("bHtr");var r=n("q1tI"),i=n.n(r),a=n("Bl7J"),o=n("9VVL"),u=n("ViKx");n("PZSu");function c(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f={}.DEV&&!1,l=function(t){var e,n=Array(3),r=Array(3),i=function(){function e(e){this._angle=t.random(t.TWO_PI*e,t.TWO_PI*(e+1)),this.distance=t.width/2,this.seed=t.random(.1)}var n,r,i;return n=e,(r=[{key:"angle",get:function(){return this._angle*t.animLoop.noise1D(this.seed)}},{key:"coord",get:function(){return Object(u.a)(t.width/2,t.height/2,this.angle,this.distance,!0)}}])&&h(n.prototype,r),i&&h(n,i),e}();t.setup=function(){t.pixelDensity(1),t.frameRate(30),t.createCanvas(660,840),t.createLoop(49,{gif:!!f&&{render:!1,open:!0},noiseRadius:.1}),t.noStroke(),e=function(){return t.map(t.sin(t.animLoop.theta),-1,1,10,40)},n=n.fill(null).map((function(t,e){return new i(e)})),r=r.fill(null).map((function(t,e){return new i(e)}))},t.draw=function(){t.background(255);var r=t.createGraphics(t.width,t.height);r.fill(0);for(var i=0;i<t.width;i+=t.width/e())r.rect(i,0,t.width/e()/2,t.height);var a=t.createGraphics(t.width,t.height);a.fill(0),a.beginShape(),n.forEach((function(t){var e=t.coord;return a.vertex.apply(a,c(e))})),a.endShape(a.CLOSE);var o=r.get();o.mask(a),t.image(o,0,0),t.blendMode(t.SCREEN),t.fill("lightblue"),t.rect(0,0,t.width,t.height),t.blendMode(t.BLEND);for(var u=t.width*-t.animLoop.theta/t.TWO_PI+t.width/e()/2;u<t.width;u+=t.width/e())t.rect(u,0,t.width/e()/2,t.height)}};e.default=function(){return i.a.createElement(a.a,null,i.a.createElement(o.a,{sketch:l}))}},ViKx:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));var r=function(t,e,n,r,i,a){void 0===a&&(a=!1);var o=t+Math.cos(n)*r,u=e+Math.sin(n)*i;return a?[o,u]:{x:o,y:u}};e.a=function(t,e,n,r,i){void 0===i&&(i=!1);var a=function(t,e,n){return t+Math.cos(e)*n}(t,n,r),o=function(t,e,n){return t+Math.sin(e)*n}(e,n,r);return i?[a,o]:{x:a,y:o}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-23-js-3fa9e0c670bce843c4ad.js.map