(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{253:function(n,t,o){"use strict";o.r(t);o(381),o(26),o(20),o(8),o(93),o(48),o(382);var i=o(13),r=(o(0),o(379)),e=o(384),a=o(380),c=function(n){var t,o,i=4,r=[],c=function(){function t(){var t=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))}];for(this.cf=[];Array.from(new Set(this._cf)).length<3;)this._cf=[n.random(t),n.random(t),n.random(t)];this.points=Array(i).fill().map(function(n){return new s})}var o=t.prototype;return o._clr=function(){return n.color(this._cf[0](n.frameCount),this._cf[1](n.frameCount),this._cf[2](n.frameCount))},o.draw=function(){var t=this;n.blendMode(n.frameCount%3?n.DIFFERENCE:n.ADD),n.noStroke(),n.fill(this._clr()),n.beginShape(),n.vertex(this.points[0].location.x,this.points[0].location.y),this.points.forEach(function(o,i){var r=o.location;0!==i&&(n.vertex(r.x,r.y),t.points[i].move())}),n.vertex(this.points[0].location.x,this.points[0].location.y),n.endShape(n.CLOSE)},t}(),s=function(){function t(){this._angle=n.random(n.TWO_PI),this._dist=n.random(200,350),this._speed=n.random([-.05,.05]),this.location=this._getLocation()}var i=t.prototype;return i._getLocation=function(){return Object(a.a)(o.x,o.y,this._angle,this._dist)},i.move=function(){this._angle+=this._speed,this.location=this._getLocation()},t}();n.preload=function(){t=n.loadImage(Object(e.c)("/assets/susan.png"))},n.setup=function(){n.createCanvas(660,840),n.background(255),o=n.createVector(n.width/2,350),r=[].concat(Array(3).keys()).map(function(n){return new c}),setTimeout(function(){n.noLoop()},2e4)},n.draw=function(){r.forEach(function(n,t){return n.draw()}),n.blendMode(n.DARKEST),n.image(t,0,0,n.width,n.height)}};t.default=function(n){var t=n.location;return Object(i.c)(r.a,{sketch:c,path:t.pathname,description:"Reload page for a different variation."})}},380:function(n,t,o){"use strict";o.d(t,"c",function(){return i}),o.d(t,"d",function(){return r}),o.d(t,"b",function(){return e});var i=function(n,t,o){return n+Math.cos(t)*o},r=function(n,t,o){return n+Math.sin(t)*o},e=function(n,t,o,i,r,e){void 0===e&&(e=!1);var a=n+Math.cos(o)*i,c=t+Math.sin(o)*r;return e?[a,c]:{x:a,y:c}};t.a=function(n,t,o,e,a){void 0===a&&(a=!1);var c=i(n,o,e),s=r(t,o,e);return a?[c,s]:{x:c,y:s}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-08-js-243cd2e71577c53e7564.js.map