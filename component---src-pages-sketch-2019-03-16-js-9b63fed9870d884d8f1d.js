(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{239:function(n,t,o){"use strict";o.r(t);o(74),o(255),o(82),o(259);var r=o(0),e=o.n(r),i=o(257),a=function(n){var t=30,o=[],r=[],e=function(){function o(){this.vector=n.createVector(n.randomGaussian(.666*n.width,t),n.randomGaussian(.666*n.height,t)),this.velocity=n.createVector(n.random(-1,1),n.random(-1,1)),this.onCanvas=!0}return o.prototype.draw=function(){var o=this.vector,r=o.x,e=o.y,i=n.map(n.dist(r,e,.666*n.width,.666*n.height),0,n.dist(0,0,.666*n.width,.666*n.height),1,t);this.onCanvas&&(n.ellipse(r,e,i),this.vector.add(this.velocity),this.velocity.add(n.map(n.noise(n.frameCount/100,r/10,e/10),0,1,-.05,.05),n.map(n.noise(n.frameCount/100,e/10,r/10),0,1,-.05,.05))),(r<-t||r>n.width+t)&&(e<-t||e>n.height+t)&&(this.onCanvas=!1)},o}();n.setup=function(){n.createCanvas(660,840),n.colorMode(n.HSB,100),o=[n.color(n.random(0,50),50,25),n.color(n.random(50,100),50,75)],n.background(o[1]),r=Array.from({length:500},function(){return new e}),n.noStroke()},n.draw=function(){n.fill(n.lerpColor.apply(n,o.concat([n.map(n.sin(n.frameCount/100),-1,1,0,1)]))),r.forEach(function(n){return n.draw()}),r.filter(function(n){return!n.onCanvas}).length>250&&n.noLoop()}};t.default=function(n){var t=n.location;return e.a.createElement(i.a,{sketch:a,path:t.pathname,description:"Refresh page for a different color variation"})}},255:function(n,t,o){var r=o(11);r(r.P,"Array",{fill:o(256)}),o(32)("fill")},256:function(n,t,o){"use strict";var r=o(25),e=o(73),i=o(14);n.exports=function(n){for(var t=r(this),o=i(t.length),a=arguments.length,c=e(a>1?arguments[1]:void 0,o),s=a>2?arguments[2]:void 0,u=void 0===s?o:e(s,o);u>c;)t[c++]=n;return t}},259:function(n,t,o){"use strict";var r=o(17),e=o(11),i=o(25),a=o(79),c=o(80),s=o(14),u=o(260),f=o(81);e(e.S+e.F*!o(75)(function(n){Array.from(n)}),"Array",{from:function(n){var t,o,e,h,l=i(n),d="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,m=void 0!==p,w=0,g=f(l);if(m&&(p=r(p,v>2?arguments[2]:void 0,2)),null==g||d==Array&&c(g))for(o=new d(t=s(l.length));t>w;w++)u(o,w,m?p(l[w],w):l[w]);else for(h=g.call(l),o=new d;!(e=h.next()).done;w++)u(o,w,m?a(h,p,[e.value,w],!0):e.value);return o.length=w,o}})},260:function(n,t,o){"use strict";var r=o(26),e=o(54);n.exports=function(n,t,o){t in n?r.f(n,t,e(0,o)):n[t]=o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-16-js-9b63fed9870d884d8f1d.js.map