(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{259:function(t,o,n){"use strict";n.r(o);n(104),n(350),n(347),n(385);var i=n(12),r=(n(0),n(383)),e=n.n(r),a=n(346),c=function(t){var o=function(){function o(){this.color=t.color(t.random(33,66),50,75),this.location=t.createVector(t.random(t.width),t.random(t.height)),this.prevLocations=[],this.velocity=e.a.Vector.random2D()}var n=o.prototype;return n.update=function(){var o=t.createVector(t.mouseX,t.mouseY);o.sub(this.location),o.setMag(.1),this.velocity.add(o.add(e.a.Vector.random2D())),this.prevLocations.push([this.location.x,this.location.y]),this.prevLocations.length>15&&(this.prevLocations=this.prevLocations.slice(1,30)),this.location.add(this.velocity),this.velocity.limit(5)},n.draw=function(){var o=this;t.beginShape(),this.prevLocations.forEach(function(n,i){t.fill(t.lerpColor(t.color(0,0),o.color,1/o.prevLocations.length*i)),t.ellipse.apply(t,n.concat([30]))}),t.endShape(),t.fill(this.color),t.ellipse(this.location.x,this.location.y,30)},o}(),n=[];t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),n=Array.from({length:30},function(){return new o}),t.noStroke()},t.draw=function(){t.background(0),n.forEach(function(t){t.update(),t.draw()})},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};o.default=function(t){var o=t.location;return Object(i.c)(a.a,{sketch:c,path:o.pathname,description:"More experimentations with vector math. The particles are attracted to a mouse pointer or taps on the canvas."})}},347:function(t,o,n){var i=n(9);i(i.P,"Array",{fill:n(348)}),n(67)("fill")},348:function(t,o,n){"use strict";var i=n(34),r=n(100),e=n(18);t.exports=function(t){for(var o=i(this),n=e(o.length),a=arguments.length,c=r(a>1?arguments[1]:void 0,n),s=a>2?arguments[2]:void 0,u=void 0===s?n:r(s,n);u>c;)o[c++]=t;return o}},350:function(t,o,n){"use strict";var i=n(21),r=n(9),e=n(34),a=n(101),c=n(102),s=n(18),u=n(351),l=n(103);r(r.S+r.F*!n(68)(function(t){Array.from(t)}),"Array",{from:function(t){var o,n,r,h,f=e(t),v="function"==typeof this?this:Array,p=arguments.length,d=p>1?arguments[1]:void 0,m=void 0!==d,g=0,w=l(f);if(m&&(d=i(d,p>2?arguments[2]:void 0,2)),null==w||v==Array&&c(w))for(n=new v(o=s(f.length));o>g;g++)u(n,g,m?d(f[g],g):f[g]);else for(h=w.call(f),n=new v;!(r=h.next()).done;g++)u(n,g,m?a(h,d,[r.value,g],!0):r.value);return n.length=g,n}})},351:function(t,o,n){"use strict";var i=n(13),r=n(35);t.exports=function(t,o,n){o in t?i.f(t,o,r(0,n)):t[o]=n}},385:function(t,o,n){"use strict";n(386)("sub",function(t){return function(){return t(this,"sub","","")}})},386:function(t,o,n){var i=n(9),r=n(14),e=n(28),a=/"/g,c=function(t,o,n,i){var r=String(e(t)),c="<"+o;return""!==n&&(c+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),c+">"+r+"</"+o+">"};t.exports=function(t,o){var n={};n[t]=o(c),i(i.P+i.F*r(function(){var o=""[t]('"');return o!==o.toLowerCase()||o.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-21-js-dd9c60b7acf82c3aae12.js.map