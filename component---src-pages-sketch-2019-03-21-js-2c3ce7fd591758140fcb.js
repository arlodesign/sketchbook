(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{244:function(t,o,n){"use strict";n.r(o);n(82),n(259),n(255),n(74),n(287);var i=n(0),e=n.n(i),r=n(286),a=n.n(r),c=n(257),s=function(t){var o=function(){function o(){this.color=t.color(t.random(33,66),50,75),this.location=t.createVector(t.random(t.width),t.random(t.height)),this.prevLocations=[],this.velocity=a.a.Vector.random2D()}var n=o.prototype;return n.update=function(){var o=t.createVector(t.mouseX,t.mouseY);o.sub(this.location),o.setMag(.1),this.velocity.add(o.add(a.a.Vector.random2D())),this.prevLocations.push([this.location.x,this.location.y]),this.prevLocations.length>15&&(this.prevLocations=this.prevLocations.slice(1,30)),this.location.add(this.velocity),this.velocity.limit(5)},n.draw=function(){var o=this;t.beginShape(),this.prevLocations.forEach(function(n,i){t.fill(t.lerpColor(t.color(0,0),o.color,1/o.prevLocations.length*i)),t.ellipse.apply(t,n.concat([30]))}),t.endShape(),t.fill(this.color),t.ellipse(this.location.x,this.location.y,30)},o}(),n=[];t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),n=Array.from({length:30},function(){return new o}),t.noStroke()},t.draw=function(){t.background(0),n.forEach(function(t){t.update(),t.draw()})},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};o.default=function(t){var o=t.location;return e.a.createElement(c.a,{sketch:s,path:o.pathname,description:"More experimentations with vector math. The particles are attracted to a mouse pointer or taps on the canvas."})}},255:function(t,o,n){var i=n(11);i(i.P,"Array",{fill:n(256)}),n(32)("fill")},256:function(t,o,n){"use strict";var i=n(25),e=n(73),r=n(14);t.exports=function(t){for(var o=i(this),n=r(o.length),a=arguments.length,c=e(a>1?arguments[1]:void 0,n),s=a>2?arguments[2]:void 0,u=void 0===s?n:e(s,n);u>c;)o[c++]=t;return o}},259:function(t,o,n){"use strict";var i=n(17),e=n(11),r=n(25),a=n(79),c=n(80),s=n(14),u=n(260),l=n(81);e(e.S+e.F*!n(75)(function(t){Array.from(t)}),"Array",{from:function(t){var o,n,e,h,f=r(t),p="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,m=void 0!==d,w=0,y=l(f);if(m&&(d=i(d,v>2?arguments[2]:void 0,2)),null==y||p==Array&&c(y))for(n=new p(o=s(f.length));o>w;w++)u(n,w,m?d(f[w],w):f[w]);else for(h=y.call(f),n=new p;!(e=h.next()).done;w++)u(n,w,m?a(h,d,[e.value,w],!0):e.value);return n.length=w,n}})},260:function(t,o,n){"use strict";var i=n(26),e=n(54);t.exports=function(t,o,n){o in t?i.f(t,o,e(0,n)):t[o]=n}},287:function(t,o,n){"use strict";n(285)("sub",function(t){return function(){return t(this,"sub","","")}})}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-21-js-2c3ce7fd591758140fcb.js.map