(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{av4u:function(t,n,r){"use strict";r.d(n,"f",(function(){return i})),r.d(n,"j",(function(){return e})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return c})),r.d(n,"i",(function(){return s})),r.d(n,"b",(function(){return o})),r.d(n,"g",(function(){return u})),r.d(n,"k",(function(){return h})),r.d(n,"d",(function(){return f})),r.d(n,"h",(function(){return v})),r.d(n,"l",(function(){return d})),r.d(n,"e",(function(){return l}));var i=function(t){return t*t},e=function(t){return t*(2-t)},a=function(t){return t<.5?2*t*t:(4-2*t)*t-1},c=function(t){return t*t*t},s=function(t){return--t*t*t+1},o=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},u=function(t){return t*t*t*t},h=function(t){return 1- --t*t*t*t},f=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},v=function(t){return t*t*t*t*t},d=function(t){return 1+--t*t*t*t*t},l=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},wcjR:function(t,n,r){"use strict";r.r(n);r("bHtr");var i=r("q1tI"),e=r.n(i),a=r("Bl7J"),c=r("9VVL"),s=(r("PZSu"),r("av4u")),o={}.DEV&&!1,u=function(t){var n=66,r=[],i=function(){function r(r,i){this.x=r,this.y=i,this.canvas=t.createGraphics(n,n),this.rotate=t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI]),this.rotateDirection=t.random([-1,1]),this.turning=!1,this.offset=t.noise(r,i)*t.QUARTER_PI,this.prevMod=0}return r.prototype.draw=function(){var r=t.animLoop.theta+this.offset;r%t.HALF_PI<=this.prevMod&&(this.rotate+=t.HALF_PI*this.rotateDirection);var i=t.map(r%t.HALF_PI,0,t.HALF_PI,0,1);this.canvas.background(255),this.canvas.push(),this.canvas.translate(n/2,n/2),this.canvas.rotate(t.map(Object(s.e)(i),0,1,this.rotate,this.rotate+t.HALF_PI*this.rotateDirection)),this.canvas.fill(192),this.canvas.noStroke(),this.canvas.circle(-n/2,-n/2,n/2),this.canvas.circle(n/2,n/2,n/2),this.canvas.circle(n/2,-n/2,n/2),this.canvas.circle(-n/2,n/2,n/2),this.canvas.stroke(192),this.canvas.strokeWeight(n/12),this.canvas.line(-n/2,n/2,n/2,-n/2),this.canvas.noFill(),this.canvas.stroke(0),this.canvas.strokeWeight(n/6),this.canvas.circle(-n/2,-n/2,n),this.canvas.circle(n/2,n/2,n),this.canvas.pop(),t.image(this.canvas,this.x,this.y),this.prevMod=r%t.HALF_PI},r}();t.setup=function(){o&&t.frameRate(30),t.createCanvas(660,840),t.createLoop(10,{gif:!!o&&{render:!1,open:!0},noiseRadius:.3});for(var e=0;e<t.width;e+=n)for(var a=0;a<t.height;a+=n)r.push(new i(e,a))},t.draw=function(){t.background(255),r.forEach((function(t){return t.draw()}))}};n.default=function(){return e.a.createElement(a.a,null,e.a.createElement(c.a,{sketch:u}),e.a.createElement("p",null,"Same as yesterday, but now rotating at slightly different intervals."))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-19-js-02088a3c38bc13742f68.js.map