(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{273:function(t,n,o){"use strict";o.r(n);o(48),o(387);var e=o(456),i=o.n(e),r=o(7),c=(o(0),o(416)),a=o.n(c),h=o(384),u=o(385),s=function(t){var n=[],o=0,e=function(){function n(n){this.i=n||this.i,this.stroke=this.i%2?255:0,this.location=t.createVector.apply(t,Object(u.a)(t.width/2,t.height/2,t.random(t.TWO_PI),t.random(t.width/4),!0)),this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.acceleration=a.a.Vector.random2D()}return n.prototype.draw=function(){this.acceleration=t.createVector(t.random(-1,1),t.random(-1,1)),this.velocity.add(this.acceleration),t.strokeWeight(t.map(t.dist(t.width/2,t.height/2,this.location.x,this.location.y),0,t.dist(t.width/2,t.height/2,t.width/2,0),100,10,!0)),t.stroke(this.stroke),t.beginShape(),t.vertex(this.location.x,this.location.y),this.location.add(this.velocity),t.vertex(this.location.x,this.location.y),t.endShape()},i()(n,[{key:"onScreen",get:function(){var n=this.location,o=n.x,e=n.y;return o>0&&o<t.width&&e>0&&e<t.height}}]),n}();t.setup=function(){t.createCanvas(660,840),t.background(255),n=Array.from({length:1e3},function(t,n){return new e(n)})},t.draw=function(){n.forEach(function(t){return t.draw()}),n.filter(function(t){return!t.onScreen}).forEach(function(t){t.constructor(),o++}),o>1e4&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(r.c)(h.a,{sketch:s,path:n.pathname,description:""})}},385:function(t,n,o){"use strict";o.d(n,"c",function(){return e}),o.d(n,"d",function(){return i}),o.d(n,"b",function(){return r});var e=function(t,n,o){return t+Math.cos(n)*o},i=function(t,n,o){return t+Math.sin(n)*o},r=function(t,n,o,e,i,r){void 0===r&&(r=!1);var c=t+Math.cos(o)*e,a=n+Math.sin(o)*i;return r?[c,a]:{x:c,y:a}};n.a=function(t,n,o,r,c){void 0===c&&(c=!1);var a=e(t,o,r),h=i(n,o,r);return c?[a,h]:{x:a,y:h}}},456:function(t,n){function o(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}t.exports=function(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-18-js-6644b13c25615c3daca5.js.map