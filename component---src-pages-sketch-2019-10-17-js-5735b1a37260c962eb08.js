(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{SBb7:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("Bl7J"),i=n("9VVL"),s=(n("PZSu"),n("av4u")),u={}.DEV&&!0,c=function(t){var e=t.random(),n=t.HALF_PI,r=[],o=0,a=(t.sqrt(4050),function(){function e(e,n){this.x=e,this.y=n,this.rotate=t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI]),this.scale=t.random([1,-1]),this.rotateDirection=t.random([-1,1]),this.turning=!1,this.offset=t.noise(e,n)*t.TWO_PI}return e.prototype.draw=function(e){var r=t.animLoop.theta;e&&(this.rotate+=n*this.rotateDirection);var o=t.map(r%n,0,n,0,1);t.push(),t.translate(this.x+22.5,this.y+22.5),t.rotate(t.map(Object(s.b)(o),0,1,this.rotate,this.rotate+n*this.rotateDirection)),t.scale(this.scale,1),t.strokeWeight(22.5),t.bezier(-22.5,-22.5,22.5,-22.5,-22.5,22.5,22.5,22.5),t.pop()},e}());t.setup=function(){t.pixelDensity(u?1:2),t.createCanvas(660,840),t.colorMode(t.HSB,1),t.stroke(e,.8,.7),t.createLoop(15,{gif:!!u&&{render:!1,open:!0}});for(var n=0;n<t.width;n+=45)for(var o=0;o<t.height;o+=45)r.push(new a(n,o))},t.draw=function(){t.blendMode(t.BLEND),t.background(1-e,1,1),t.blendMode(t.DARKEST),r.forEach((function(e){return e.draw(t.animLoop.theta%n<=o)})),o=t.animLoop.theta%n}};e.default=function(){return o.a.createElement(a.a,null,o.a.createElement(i.a,{sketch:c}))}},av4u:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(t){return t<.5?2*t*t:(4-2*t)*t-1},o=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-17-js-5735b1a37260c962eb08.js.map