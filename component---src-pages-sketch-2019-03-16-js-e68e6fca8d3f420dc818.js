(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{254:function(n,t,o){"use strict";o.r(t);o(339),o(104),o(342);var r=o(12),i=(o(0),o(338)),e=function(n){var t=30,o=[],r=[],i=function(){function o(){this.vector=n.createVector(n.randomGaussian(.666*n.width,t),n.randomGaussian(.666*n.height,t)),this.velocity=n.createVector(n.random(-1,1),n.random(-1,1)),this.onCanvas=!0}return o.prototype.draw=function(){var o=this.vector,r=o.x,i=o.y,e=n.map(n.dist(r,i,.666*n.width,.666*n.height),0,n.dist(0,0,.666*n.width,.666*n.height),1,t);this.onCanvas&&(n.ellipse(r,i,e),this.vector.add(this.velocity),this.velocity.add(n.map(n.noise(n.frameCount/100,r/10,i/10),0,1,-.05,.05),n.map(n.noise(n.frameCount/100,i/10,r/10),0,1,-.05,.05))),(r<-t||r>n.width+t)&&(i<-t||i>n.height+t)&&(this.onCanvas=!1)},o}();n.setup=function(){n.createCanvas(660,840),n.colorMode(n.HSB,100),o=[n.color(n.random(0,50),50,25),n.color(n.random(50,100),50,75)],n.background(o[1]),r=Array.from({length:500},function(){return new i}),n.noStroke()},n.draw=function(){n.fill(n.lerpColor.apply(n,o.concat([n.map(n.sin(n.frameCount/100),-1,1,0,1)]))),r.forEach(function(n){return n.draw()}),r.filter(function(n){return!n.onCanvas}).length>250&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(r.c)(i.a,{sketch:e,path:t.pathname,description:"Refresh page for a different color variation"})}},339:function(n,t,o){var r=o(9);r(r.P,"Array",{fill:o(340)}),o(67)("fill")},340:function(n,t,o){"use strict";var r=o(34),i=o(100),e=o(18);n.exports=function(n){for(var t=r(this),o=e(t.length),a=arguments.length,c=i(a>1?arguments[1]:void 0,o),s=a>2?arguments[2]:void 0,u=void 0===s?o:i(s,o);u>c;)t[c++]=n;return t}},342:function(n,t,o){"use strict";var r=o(21),i=o(9),e=o(34),a=o(101),c=o(102),s=o(18),u=o(343),f=o(103);i(i.S+i.F*!o(68)(function(n){Array.from(n)}),"Array",{from:function(n){var t,o,i,h,l=e(n),d="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,m=void 0!==p,w=0,g=f(l);if(m&&(p=r(p,v>2?arguments[2]:void 0,2)),null==g||d==Array&&c(g))for(o=new d(t=s(l.length));t>w;w++)u(o,w,m?p(l[w],w):l[w]);else for(h=g.call(l),o=new d;!(i=h.next()).done;w++)u(o,w,m?a(h,p,[i.value,w],!0):i.value);return o.length=w,o}})},343:function(n,t,o){"use strict";var r=o(13),i=o(35);n.exports=function(n,t,o){t in n?r.f(n,t,i(0,o)):n[t]=o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-16-js-e68e6fca8d3f420dc818.js.map