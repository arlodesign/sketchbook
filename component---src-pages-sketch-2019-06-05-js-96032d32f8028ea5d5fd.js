(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"0OHt":function(t,n,e){"use strict";e.r(n);e("a1Th"),e("Btvt"),e("rE2o"),e("ioFf"),e("rGqo"),e("XfO3"),e("HEwt"),e("bHtr");var r=e("q1tI"),i=e.n(r),o=e("Bl7J"),a=e("9VVL"),s=e("ViKx");function c(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=function(t){var n=t.random(20,80),e=[],r=function(){function e(){this.lines=[]}var r=e.prototype;return r.draw=function(e,r,i,o){t.strokeWeight(10),t.stroke(0),t.fill(n,100,100,80),t.triangle(e,r,i,o,t.width/2,t.height/2),this.lines.push([e,r,i,o]),this.lines.length>20&&(this.lines=this.lines.slice(1,20))},r.drawTrails=function(){t.noFill(),t.strokeWeight(1),this.lines.forEach((function(e,r){t.stroke(100-n,t.map(r,0,19,0,100),t.map(r,0,19,0,100),t.map(r,0,19,0,100)),t.triangle.apply(t,c(e).concat([t.width/2,t.height/2]))}))},e}(),i=function(){function n(){this.angle=t.random(t.TWO_PI),this.distance=t.random(t.height/2-10),this.speed=t.random([-1,1])*t.random(.001,.01),this.triangle=new r,this.set()}var e=n.prototype;return e.set=function(){this.vertex=Object(s.a)(t.width/2,t.height/2,this.angle,this.distance)},e.update=function(){this.angle+=this.speed,this.set()},n}();t.setup=function(){t.createCanvas(660,840),e=Array.from(Array(10),(function(){return new i})),t.colorMode(t.HSL,100),t.blendMode(t.HARD_LIGHT),t.strokeJoin(t.ROUND)},t.draw=function(){t.background(0);var n=[],r=c(e);for(n.push(r[0]),r.splice(0,1);r.length>0;){for(var i=t.dist(0,0,t.width,t.height),o=void 0,a=void 0,s=0;s<n.length;s++)for(var h=0;h<r.length;h++){var u=n[s].vertex,l=r[h].vertex,f=t.dist(u.x,u.y,l.x,l.y);f<i&&(i=f,o=s,a=h)}e[a].triangle.draw(n[o].vertex.x,n[o].vertex.y,r[a].vertex.x,r[a].vertex.y),n.push(r[a]),r.splice(a,1)}e.forEach((function(t){t.triangle.drawTrails(),t.update()}))}};n.default=function(){return i.a.createElement(o.a,null,i.a.createElement(a.a,{sketch:h}))}},ViKx:function(t,n,e){"use strict";e.d(n,"b",(function(){return r}));var r=function(t,n,e,r,i,o){void 0===o&&(o=!1);var a=t+Math.cos(e)*r,s=n+Math.sin(e)*i;return o?[a,s]:{x:a,y:s}};n.a=function(t,n,e,r,i){void 0===i&&(i=!1);var o=function(t,n,e){return t+Math.cos(n)*e}(t,e,r),a=function(t,n,e){return t+Math.sin(n)*e}(n,e,r);return i?[o,a]:{x:o,y:a}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-05-js-96032d32f8028ea5d5fd.js.map