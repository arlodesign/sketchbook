(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{326:function(t,n,i){"use strict";i.r(n);i(104),i(345),i(342);var r=i(12),e=(i(0),i(341)),o=i(344),a=function(t){var n=t.random(20,80),i=[],r=function(){function i(){this.lines=[]}var r=i.prototype;return r.draw=function(i,r,e,o){t.strokeWeight(10),t.stroke(0),t.fill(n,100,100,80),t.triangle(i,r,e,o,t.width/2,t.height/2),this.lines.push([i,r,e,o]),this.lines.length>20&&(this.lines=this.lines.slice(1,20))},r.drawTrails=function(){t.noFill(),t.strokeWeight(1),this.lines.forEach(function(i,r){t.stroke(100-n,t.map(r,0,19,0,100),t.map(r,0,19,0,100),t.map(r,0,19,0,100)),t.triangle.apply(t,i.concat([t.width/2,t.height/2]))})},i}(),e=function(){function n(){this.angle=t.random(t.TWO_PI),this.distance=t.random(t.height/2-10),this.speed=t.random([-1,1])*t.random(.001,.01),this.triangle=new r,this.set()}var i=n.prototype;return i.set=function(){this.vertex=Object(o.a)(t.width/2,t.height/2,this.angle,this.distance)},i.update=function(){this.angle+=this.speed,this.set()},n}();t.setup=function(){t.createCanvas(660,840),i=Array.from(Array(10),function(){return new e}),t.colorMode(t.HSL,100),t.blendMode(t.HARD_LIGHT),t.strokeJoin(t.ROUND)},t.draw=function(){t.background(0);var n=[],r=[].concat(i);for(n.push(r[0]),r.splice(0,1);r.length>0;){for(var e=t.dist(0,0,t.width,t.height),o=void 0,a=void 0,s=0;s<n.length;s++)for(var c=0;c<r.length;c++){var u=n[s].vertex,h=r[c].vertex,f=t.dist(u.x,u.y,h.x,h.y);f<e&&(e=f,o=s,a=c)}i[a].triangle.draw(n[o].vertex.x,n[o].vertex.y,r[a].vertex.x,r[a].vertex.y),n.push(r[a]),r.splice(a,1)}i.forEach(function(t){t.triangle.drawTrails(),t.update()})}};n.default=function(t){var n=t.location;return Object(r.c)(e.a,{sketch:a,path:n.pathname,description:""})}},342:function(t,n,i){var r=i(9);r(r.P,"Array",{fill:i(343)}),i(67)("fill")},343:function(t,n,i){"use strict";var r=i(34),e=i(100),o=i(18);t.exports=function(t){for(var n=r(this),i=o(n.length),a=arguments.length,s=e(a>1?arguments[1]:void 0,i),c=a>2?arguments[2]:void 0,u=void 0===c?i:e(c,i);u>s;)n[s++]=t;return n}},344:function(t,n,i){"use strict";i.d(n,"c",function(){return r}),i.d(n,"d",function(){return e}),i.d(n,"b",function(){return o});var r=function(t,n,i){return t+Math.cos(n)*i},e=function(t,n,i){return t+Math.sin(n)*i},o=function(t,n,i,r,e,o){void 0===o&&(o=!1);var a=t+Math.cos(i)*r,s=n+Math.sin(i)*e;return o?[a,s]:{x:a,y:s}};n.a=function(t,n,i,o,a){void 0===a&&(a=!1);var s=r(t,i,o),c=e(n,i,o);return a?[s,c]:{x:s,y:c}}},345:function(t,n,i){"use strict";var r=i(21),e=i(9),o=i(34),a=i(101),s=i(102),c=i(18),u=i(346),h=i(103);e(e.S+e.F*!i(68)(function(t){Array.from(t)}),"Array",{from:function(t){var n,i,e,f,l=o(t),d="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,g=void 0!==p,w=0,y=h(l);if(g&&(p=r(p,v>2?arguments[2]:void 0,2)),null==y||d==Array&&s(y))for(i=new d(n=c(l.length));n>w;w++)u(i,w,g?p(l[w],w):l[w]);else for(f=y.call(l),i=new d;!(e=f.next()).done;w++)u(i,w,g?a(f,p,[e.value,w],!0):e.value);return i.length=w,i}})},346:function(t,n,i){"use strict";var r=i(13),e=i(35);t.exports=function(t,n,i){n in t?r.f(t,n,e(0,i)):t[n]=i}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-05-js-98212671bb7b14d91101.js.map