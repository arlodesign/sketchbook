(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{"0OHt":function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("rzGZ"),r("m210"),r("4DPX"),r("YbXK"),r("cFtU"),r("n0hJ"),r("q1tI");var e=r("Gmm/"),i=r("ViKx"),o=r("qKvR");function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return s(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var c=function(t){var n=t.random(20,80),r=[],e=function(){function r(){this.lines=[]}var e=r.prototype;return e.draw=function(r,e,i,o){t.strokeWeight(10),t.stroke(0),t.fill(n,100,100,80),t.triangle(r,e,i,o,t.width/2,t.height/2),this.lines.push([r,e,i,o]),this.lines.length>20&&(this.lines=this.lines.slice(1,20))},e.drawTrails=function(){t.noFill(),t.strokeWeight(1),this.lines.forEach((function(r,e){t.stroke(100-n,t.map(e,0,19,0,100),t.map(e,0,19,0,100),t.map(e,0,19,0,100)),t.triangle.apply(t,a(r).concat([t.width/2,t.height/2]))}))},r}(),o=function(){function n(){this.angle=t.random(t.TWO_PI),this.distance=t.random(t.height/2-10),this.speed=t.random([-1,1])*t.random(.001,.01),this.triangle=new e,this.set()}var r=n.prototype;return r.set=function(){this.vertex=Object(i.a)(t.width/2,t.height/2,this.angle,this.distance)},r.update=function(){this.angle+=this.speed,this.set()},n}();t.setup=function(){t.createCanvas(660,840),r=Array.from(Array(10),(function(){return new o})),t.colorMode(t.HSL,100),t.blendMode(t.HARD_LIGHT),t.strokeJoin(t.ROUND)},t.draw=function(){t.background(0);var n=[],e=a(r);for(n.push(e[0]),e.splice(0,1);e.length>0;){for(var i=t.dist(0,0,t.width,t.height),o=void 0,s=void 0,c=0;c<n.length;c++)for(var u=0;u<e.length;u++){var h=n[c].vertex,f=e[u].vertex,l=t.dist(h.x,h.y,f.x,f.y);l<i&&(i=l,o=c,s=u)}r[s].triangle.draw(n[o].vertex.x,n[o].vertex.y,e[s].vertex.x,e[s].vertex.y),n.push(e[s]),e.splice(s,1)}r.forEach((function(t){t.triangle.drawTrails(),t.update()}))}};n.default=function(t){var n=t.location;return Object(o.c)(e.a,{sketch:c,path:n.pathname,description:""})}},ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return i})),r.d(n,"b",(function(){return o}));var e=function(t,n,r){return t+Math.cos(n)*r},i=function(t,n,r){return t+Math.sin(n)*r},o=function(t,n,r,e,i,o){void 0===o&&(o=!1);var a=t+Math.cos(r)*e,s=n+Math.sin(r)*i;return o?[a,s]:{x:a,y:s}};n.a=function(t,n,r,o,a){void 0===a&&(a=!1);var s=e(t,r,o),c=i(n,r,o);return a?[s,c]:{x:s,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-05-js-83e070ca3e17a560855d.js.map