(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{245:function(t,o,n){"use strict";n.r(o);n(84),n(318),n(315),n(350);var i=n(9),r=(n(0),n(348)),e=n.n(r),a=n(314),c=function(t){var o=function(){function o(){this.color=t.color(t.random(33,66),50,75),this.location=t.createVector(t.random(t.width),t.random(t.height)),this.prevLocations=[],this.velocity=e.a.Vector.random2D()}var n=o.prototype;return n.update=function(){var o=t.createVector(t.mouseX,t.mouseY);o.sub(this.location),o.setMag(.1),this.velocity.add(o.add(e.a.Vector.random2D())),this.prevLocations.push([this.location.x,this.location.y]),this.prevLocations.length>15&&(this.prevLocations=this.prevLocations.slice(1,30)),this.location.add(this.velocity),this.velocity.limit(5)},n.draw=function(){var o=this;t.beginShape(),this.prevLocations.forEach(function(n,i){t.fill(t.lerpColor(t.color(0,0),o.color,1/o.prevLocations.length*i)),t.ellipse.apply(t,n.concat([30]))}),t.endShape(),t.fill(this.color),t.ellipse(this.location.x,this.location.y,30)},o}(),n=[];t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),n=Array.from({length:30},function(){return new o}),t.noStroke()},t.draw=function(){t.background(0),n.forEach(function(t){t.update(),t.draw()})},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};o.default=function(t){var o=t.location;return Object(i.c)(a.a,{sketch:c,path:o.pathname,description:"More experimentations with vector math. The particles are attracted to a mouse pointer or taps on the canvas."})}},315:function(t,o,n){var i=n(12);i(i.P,"Array",{fill:n(316)}),n(36)("fill")},316:function(t,o,n){"use strict";var i=n(28),r=n(79),e=n(16);t.exports=function(t){for(var o=i(this),n=e(o.length),a=arguments.length,c=r(a>1?arguments[1]:void 0,n),s=a>2?arguments[2]:void 0,u=void 0===s?n:r(s,n);u>c;)o[c++]=t;return o}},318:function(t,o,n){"use strict";var i=n(21),r=n(12),e=n(28),a=n(81),c=n(82),s=n(16),u=n(319),l=n(83);r(r.S+r.F*!n(80)(function(t){Array.from(t)}),"Array",{from:function(t){var o,n,r,h,f=e(t),v="function"==typeof this?this:Array,p=arguments.length,d=p>1?arguments[1]:void 0,m=void 0!==d,g=0,w=l(f);if(m&&(d=i(d,p>2?arguments[2]:void 0,2)),null==w||v==Array&&c(w))for(n=new v(o=s(f.length));o>g;g++)u(n,g,m?d(f[g],g):f[g]);else for(h=w.call(f),n=new v;!(r=h.next()).done;g++)u(n,g,m?a(h,d,[r.value,g],!0):r.value);return n.length=g,n}})},319:function(t,o,n){"use strict";var i=n(29),r=n(58);t.exports=function(t,o,n){o in t?i.f(t,o,r(0,n)):t[o]=n}},350:function(t,o,n){"use strict";n(351)("sub",function(t){return function(){return t(this,"sub","","")}})},351:function(t,o,n){var i=n(12),r=n(22),e=n(24),a=/"/g,c=function(t,o,n,i){var r=String(e(t)),c="<"+o;return""!==n&&(c+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),c+">"+r+"</"+o+">"};t.exports=function(t,o){var n={};n[t]=o(c),i(i.P+i.F*r(function(){var o=""[t]('"');return o!==o.toLowerCase()||o.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-21-js-3df2b15a7d81339fe29e.js.map