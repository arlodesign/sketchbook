(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{ViKx:function(t,n,e){"use strict";e.d(n,"b",(function(){return r}));var r=function(t,n,e,r,i,o){void 0===o&&(o=!1);var a=t+Math.cos(e)*r,s=n+Math.sin(e)*i;return o?[a,s]:{x:a,y:s}};n.a=function(t,n,e,r,i){void 0===i&&(i=!1);var o=function(t,n,e){return t+Math.cos(n)*e}(t,e,r),a=function(t,n,e){return t+Math.sin(n)*e}(n,e,r);return i?[o,a]:{x:o,y:a}}},q0B8:function(t,n,e){"use strict";e.r(n);e("a1Th"),e("Btvt"),e("rE2o"),e("ioFf"),e("rGqo"),e("Vd3H"),e("XfO3"),e("HEwt");var r=e("q1tI"),i=e.n(r),o=e("Bl7J"),a=e("9VVL"),s=e("ViKx");function u(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(t){var n=[],e=function(){function n(){this.angle=t.random(t.TWO_PI),this.distance=t.random(t.height/2-10),this.speed=t.random([-1,1])*t.random(.001,.01),this.set()}var e=n.prototype;return e.set=function(){this.vertex=Object(s.a)(t.width/2,t.height/2,this.angle,this.distance)},e.update=function(){this.angle+=this.speed,this.angle<0&&(this.angle=t.TWO_PI+this.angle),this.angle>t.TWO_PI&&(this.angle=this.angle-t.TWO_PI),this.set()},n}();t.setup=function(){t.createCanvas(660,840),n=Array.from(Array(10),(function(){return Array.from(Array(5),(function(){return new e}))})),t.colorMode(t.HSB,100),t.strokeJoin(t.ROUND),t.strokeWeight(20),t.noFill()},t.draw=function(){t.blendMode(t.BLEND),t.background(10),t.blendMode(t.ADD),n.forEach((function(e,r){var i=[],o=u(e);for(i.push(o[0]),o.splice(0,1);o.length>0;){for(var a=t.dist(0,0,t.width,t.height),s=void 0,c=0;c<i.length;c++)for(var h=0;h<o.length;h++){var f=i[c].vertex,l=o[h].vertex,d=t.dist(f.x,f.y,l.x,l.y);d<a&&(a=d,s=h)}i.push(o[s]),o.splice(s,1)}t.stroke(r*(100/n.length),100,100),t.beginShape(),e.sort((function(t,n){return t.angle-n.angle})).forEach((function(n){t.vertex(n.vertex.x,n.vertex.y),n.update()})),t.endShape(t.CLOSE)}))}};n.default=function(){return i.a.createElement(o.a,null,i.a.createElement(a.a,{sketch:c}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-07-js-70f62055579c30efcd21.js.map