(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{420:function(t,n,e){"use strict";e.r(n);e(75),e(184),e(180);var i=e(0),r=(e(1),e(255)),o=e(535),a=function(t){var n=t.random(20,80),e=[],i=function(){function e(){this.lines=[]}var i=e.prototype;return i.draw=function(e,i,r,o){t.strokeWeight(10),t.stroke(0),t.fill(n,100,100,80),t.triangle(e,i,r,o,t.width/2,t.height/2),this.lines.push([e,i,r,o]),this.lines.length>20&&(this.lines=this.lines.slice(1,20))},i.drawTrails=function(){t.noFill(),t.strokeWeight(1),this.lines.forEach((function(e,i){t.stroke(100-n,t.map(i,0,19,0,100),t.map(i,0,19,0,100),t.map(i,0,19,0,100)),t.triangle.apply(t,e.concat([t.width/2,t.height/2]))}))},e}(),r=function(){function n(){this.angle=t.random(t.TWO_PI),this.distance=t.random(t.height/2-10),this.speed=t.random([-1,1])*t.random(.001,.01),this.triangle=new i,this.set()}var e=n.prototype;return e.set=function(){this.vertex=Object(o.a)(t.width/2,t.height/2,this.angle,this.distance)},e.update=function(){this.angle+=this.speed,this.set()},n}();t.setup=function(){t.createCanvas(660,840),e=Array.from(Array(10),(function(){return new r})),t.colorMode(t.HSL,100),t.blendMode(t.HARD_LIGHT),t.strokeJoin(t.ROUND)},t.draw=function(){t.background(0);var n=[],i=[].concat(e);for(n.push(i[0]),i.splice(0,1);i.length>0;){for(var r=t.dist(0,0,t.width,t.height),o=void 0,a=void 0,s=0;s<n.length;s++)for(var c=0;c<i.length;c++){var h=n[s].vertex,u=i[c].vertex,d=t.dist(h.x,h.y,u.x,u.y);d<r&&(r=d,o=s,a=c)}e[a].triangle.draw(n[o].vertex.x,n[o].vertex.y,i[a].vertex.x,i[a].vertex.y),n.push(i[a]),i.splice(a,1)}e.forEach((function(t){t.triangle.drawTrails(),t.update()}))}};n.default=function(t){var n=t.location;return Object(i.c)(r.a,{sketch:a,path:n.pathname,description:""})}},535:function(t,n,e){"use strict";e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return r})),e.d(n,"b",(function(){return o}));var i=function(t,n,e){return t+Math.cos(n)*e},r=function(t,n,e){return t+Math.sin(n)*e},o=function(t,n,e,i,r,o){void 0===o&&(o=!1);var a=t+Math.cos(e)*i,s=n+Math.sin(e)*r;return o?[a,s]:{x:a,y:s}};n.a=function(t,n,e,o,a){void 0===a&&(a=!1);var s=i(t,e,o),c=r(n,e,o);return a?[s,c]:{x:s,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-05-js-c8a55e2f2f9518bdeb14.js.map