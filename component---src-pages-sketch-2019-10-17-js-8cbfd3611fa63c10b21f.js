(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{SBb7:function(t,n,e){"use strict";e.r(n);var r=e("q1tI"),o=e.n(r),i=e("Bl7J"),a=e("9VVL"),u=(e("PZSu"),e("av4u")),c={}.DEV&&!0,s=function(t){var n=t.random(),e=t.HALF_PI,r=[],o=0,i=(t.sqrt(4050),function(){function n(n,e){this.x=n,this.y=e,this.rotate=t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI]),this.scale=t.random([1,-1]),this.rotateDirection=t.random([-1,1]),this.turning=!1,this.offset=t.noise(n,e)*t.TWO_PI}return n.prototype.draw=function(n){var r=t.animLoop.theta;n&&(this.rotate+=e*this.rotateDirection);var o=t.map(r%e,0,e,0,1);t.push(),t.translate(this.x+22.5,this.y+22.5),t.rotate(t.map(Object(u.b)(o),0,1,this.rotate,this.rotate+e*this.rotateDirection)),t.scale(this.scale,1),t.strokeWeight(22.5),t.bezier(-22.5,-22.5,22.5,-22.5,-22.5,22.5,22.5,22.5),t.pop()},n}());t.setup=function(){t.pixelDensity(c?1:2),t.createCanvas(660,840),t.colorMode(t.HSB,1),t.stroke(n,.8,.7),t.createLoop(15,{gif:!!c&&{render:!1,open:!0}});for(var e=0;e<t.width;e+=45)for(var o=0;o<t.height;o+=45)r.push(new i(e,o))},t.draw=function(){t.blendMode(t.BLEND),t.background(1-n,1,1),t.blendMode(t.DARKEST),r.forEach((function(n){return n.draw(t.animLoop.theta%e<=o)})),o=t.animLoop.theta%e}};n.default=function(){return o.a.createElement(i.a,null,o.a.createElement(a.a,{sketch:s}))}},av4u:function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return o})),e.d(n,"d",(function(){return i})),e.d(n,"b",(function(){return a}));var r=function(t){return t*t},o=function(t){return t<.5?2*t*t:(4-2*t)*t-1},i=function(t){return 1+--t*t*t*t*t},a=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-17-js-8cbfd3611fa63c10b21f.js.map