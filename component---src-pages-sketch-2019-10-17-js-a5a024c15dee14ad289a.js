(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{SBb7:function(t,n,r){"use strict";r.r(n);var e=r("q1tI"),o=r.n(e),u=r("Bl7J"),i=r("9VVL"),c=(r("PZSu"),r("av4u")),a={}.DEV&&!0,f=function(t){var n=t.random(),r=t.HALF_PI,e=[],o=0,u=(t.sqrt(4050),function(){function n(n,r){this.x=n,this.y=r,this.rotate=t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI]),this.scale=t.random([1,-1]),this.rotateDirection=t.random([-1,1]),this.turning=!1,this.offset=t.noise(n,r)*t.TWO_PI}return n.prototype.draw=function(n){var e=t.animLoop.theta;n&&(this.rotate+=r*this.rotateDirection);var o=t.map(e%r,0,r,0,1);t.push(),t.translate(this.x+22.5,this.y+22.5),t.rotate(t.map(Object(c.e)(o),0,1,this.rotate,this.rotate+r*this.rotateDirection)),t.scale(this.scale,1),t.strokeWeight(22.5),t.bezier(-22.5,-22.5,22.5,-22.5,-22.5,22.5,22.5,22.5),t.pop()},n}());t.setup=function(){t.pixelDensity(a?1:2),t.createCanvas(660,840),t.colorMode(t.HSB,1),t.stroke(n,.8,.7),t.createLoop(15,{gif:!!a&&{render:!1,open:!0}});for(var r=0;r<t.width;r+=45)for(var o=0;o<t.height;o+=45)e.push(new u(r,o))},t.draw=function(){t.blendMode(t.BLEND),t.background(1-n,1,1),t.blendMode(t.DARKEST),e.forEach((function(n){return n.draw(t.animLoop.theta%r<=o)})),o=t.animLoop.theta%r}};n.default=function(){return o.a.createElement(u.a,null,o.a.createElement(i.a,{sketch:f}))}},av4u:function(t,n,r){"use strict";r.d(n,"f",(function(){return e})),r.d(n,"j",(function(){return o})),r.d(n,"c",(function(){return u})),r.d(n,"a",(function(){return i})),r.d(n,"i",(function(){return c})),r.d(n,"b",(function(){return a})),r.d(n,"g",(function(){return f})),r.d(n,"k",(function(){return s})),r.d(n,"d",(function(){return d})),r.d(n,"h",(function(){return h})),r.d(n,"l",(function(){return p})),r.d(n,"e",(function(){return l}));var e=function(t){return t*t},o=function(t){return t*(2-t)},u=function(t){return t<.5?2*t*t:(4-2*t)*t-1},i=function(t){return t*t*t},c=function(t){return--t*t*t+1},a=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},f=function(t){return t*t*t*t},s=function(t){return 1- --t*t*t*t},d=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},h=function(t){return t*t*t*t*t},p=function(t){return 1+--t*t*t*t*t},l=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-17-js-a5a024c15dee14ad289a.js.map