(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return i})),r.d(n,"b",(function(){return e}));var o=function(t,n,r){return t+Math.cos(n)*r},i=function(t,n,r){return t+Math.sin(n)*r},e=function(t,n,r,o,i,e){void 0===e&&(e=!1);var a=t+Math.cos(r)*o,c=n+Math.sin(r)*i;return e?[a,c]:{x:a,y:c}};n.a=function(t,n,r,e,a){void 0===a&&(a=!1);var c=o(t,r,e),u=i(n,r,e);return a?[c,u]:{x:c,y:u}}},"xx+Q":function(t,n,r){"use strict";r.r(n);r("a1Th"),r("rE2o"),r("ioFf"),r("bHtr"),r("rGqo"),r("yt8O"),r("Btvt"),r("T39b"),r("XfO3"),r("HEwt"),r("q1tI");var o=r("Gmm/"),i=r("Wbzz"),e=r("ViKx"),a=r("qKvR");function c(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function(t){var n,r,o=4,a=[],u=function(){function n(){var n=[function(n){return 240*t.abs(t.sin(n))},function(n){return 240*t.abs(t.cos(n))},function(n){return 240*t.abs(t.tan(n))},function(n){return 240*t.abs(t.sin(n+t.PI))},function(n){return 240*t.abs(t.cos(n+t.PI))},function(n){return 240*t.abs(t.tan(n+t.PI))},function(n){return 240*t.abs(t.sin(-n))},function(n){return 240*t.abs(t.cos(-n))},function(n){return 240*t.abs(t.tan(-n))},function(n){return 240*t.abs(t.sin(-n+t.PI))},function(n){return 240*t.abs(t.cos(-n+t.PI))},function(n){return 240*t.abs(t.tan(-n+t.PI))}];for(this.cf=[];Array.from(new Set(this._cf)).length<3;)this._cf=[t.random(n),t.random(n),t.random(n)];this.points=Array(o).fill().map((function(t){return new s}))}var r=n.prototype;return r._clr=function(){return t.color(this._cf[0](t.frameCount),this._cf[1](t.frameCount),this._cf[2](t.frameCount))},r.draw=function(){var n=this;t.blendMode(t.frameCount%3?t.DIFFERENCE:t.ADD),t.noStroke(),t.fill(this._clr()),t.beginShape(),t.vertex(this.points[0].location.x,this.points[0].location.y),this.points.forEach((function(r,o){var i=r.location;0!==o&&(t.vertex(i.x,i.y),n.points[o].move())})),t.vertex(this.points[0].location.x,this.points[0].location.y),t.endShape(t.CLOSE)},n}(),s=function(){function n(){this._angle=t.random(t.TWO_PI),this._dist=t.random(200,350),this._speed=t.random([-.05,.05]),this.location=this._getLocation()}var o=n.prototype;return o._getLocation=function(){return Object(e.a)(r.x,r.y,this._angle,this._dist)},o.move=function(){this._angle+=this._speed,this.location=this._getLocation()},n}();t.preload=function(){n=t.loadImage(Object(i.withPrefix)("/assets/susan.png"))},t.setup=function(){t.createCanvas(660,840),t.background(255),r=t.createVector(t.width/2,350),a=c(Array(3).keys()).map((function(t){return new u})),setTimeout((function(){t.noLoop()}),2e4)},t.draw=function(){a.forEach((function(t,n){return t.draw()})),t.blendMode(t.DARKEST),t.image(n,0,0,t.width,t.height)}};n.default=function(t){var n=t.location;return Object(a.c)(o.a,{sketch:u,path:n.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-08-js-0acab31d1bc147e4bfac.js.map