(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{SBb7:function(t,n,e){"use strict";e.r(n);e("q1tI");var r=e("Gmm/"),u=(e("PZSu"),e("av4u")),i=(e("Aw06"),e("qKvR")),o={}.DEV&&!0,a=function(t){var n=t.random(),e=t.HALF_PI,r=[],i=0,a=(t.sqrt(4050),function(){function n(n,e){this.x=n,this.y=e,this.rotate=t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI]),this.scale=t.random([1,-1]),this.rotateDirection=t.random([-1,1]),this.turning=!1,this.offset=t.noise(n,e)*t.TWO_PI}return n.prototype.draw=function(n){var r=t.animLoop.theta;n&&(this.rotate+=e*this.rotateDirection);var i=t.map(r%e,0,e,0,1);t.push(),t.translate(this.x+22.5,this.y+22.5),t.rotate(t.map(Object(u.easeInOutQuint)(i),0,1,this.rotate,this.rotate+e*this.rotateDirection)),t.scale(this.scale,1),t.strokeWeight(22.5),t.bezier(-22.5,-22.5,22.5,-22.5,-22.5,22.5,22.5,22.5),t.pop()},n}());t.setup=function(){t.pixelDensity(o?1:2),t.createCanvas(660,840),t.colorMode(t.HSB,1),t.stroke(n,.8,.7),t.createLoop(15,{gif:!!o&&{render:!1,open:!0}});for(var e=0;e<t.width;e+=45)for(var u=0;u<t.height;u+=45)r.push(new a(e,u))},t.draw=function(){t.blendMode(t.BLEND),t.background(1-n,1,1),t.blendMode(t.DARKEST),r.forEach((function(n){return n.draw(t.animLoop.theta%e<=i)})),i=t.animLoop.theta%e}};n.default=function(t){var n=t.location;return Object(i.c)(r.a,{sketch:a,path:n.pathname,description:""})}},av4u:function(t,n,e){"use strict";e.r(n),e.d(n,"linear",(function(){return r})),e.d(n,"easeInQuad",(function(){return u})),e.d(n,"easeOutQuad",(function(){return i})),e.d(n,"easeInOutQuad",(function(){return o})),e.d(n,"easeInCubic",(function(){return a})),e.d(n,"easeOutCubic",(function(){return c})),e.d(n,"easeInOutCubic",(function(){return s})),e.d(n,"easeInQuart",(function(){return f})),e.d(n,"easeOutQuart",(function(){return d})),e.d(n,"easeInOutQuart",(function(){return h})),e.d(n,"easeInQuint",(function(){return p})),e.d(n,"easeOutQuint",(function(){return I})),e.d(n,"easeInOutQuint",(function(){return b}));var r=function(t){return t},u=function(t){return t*t},i=function(t){return t*(2-t)},o=function(t){return t<.5?2*t*t:(4-2*t)*t-1},a=function(t){return t*t*t},c=function(t){return--t*t*t+1},s=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},f=function(t){return t*t*t*t},d=function(t){return 1- --t*t*t*t},h=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},p=function(t){return t*t*t*t*t},I=function(t){return 1+--t*t*t*t*t},b=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-17-js-a09b88e3a0a683fe43f9.js.map