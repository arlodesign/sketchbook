(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{430:function(t,n,a){"use strict";a.r(n);a(445);var i=a(10),s=(a(0),a(443)),r=(a(448),a(478)),e=(a(455),{}.DEV&&!1),c=function(t){var n=66,a=[],i=function(){function a(a,i){this.x=a,this.y=i,this.canvas=t.createGraphics(n,n),this.rotate=t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI]),this.rotateDirection=t.random([-1,1]),this.turning=!1,this.offset=t.noise(a,i)*t.QUARTER_PI,this.prevMod=0}return a.prototype.draw=function(){var a=t.animLoop.theta+this.offset;a%t.HALF_PI<=this.prevMod&&(this.rotate+=t.HALF_PI*this.rotateDirection);var i=t.map(a%t.HALF_PI,0,t.HALF_PI,0,1);this.canvas.background(255),this.canvas.push(),this.canvas.translate(n/2,n/2),this.canvas.rotate(t.map(Object(r.d)(i),0,1,this.rotate,this.rotate+t.HALF_PI*this.rotateDirection)),this.canvas.fill(192),this.canvas.noStroke(),this.canvas.circle(-n/2,-n/2,n/2),this.canvas.circle(n/2,n/2,n/2),this.canvas.circle(n/2,-n/2,n/2),this.canvas.circle(-n/2,n/2,n/2),this.canvas.stroke(192),this.canvas.strokeWeight(n/12),this.canvas.line(-n/2,n/2,n/2,-n/2),this.canvas.noFill(),this.canvas.stroke(0),this.canvas.strokeWeight(n/6),this.canvas.circle(-n/2,-n/2,n),this.canvas.circle(n/2,n/2,n),this.canvas.pop(),t.image(this.canvas,this.x,this.y),this.prevMod=a%t.HALF_PI},a}();t.setup=function(){e&&t.frameRate(30),t.createCanvas(660,840),t.createLoop(10,{gif:!!e&&{render:!1,open:!0},noiseRadius:.3});for(var s=0;s<t.width;s+=n)for(var r=0;r<t.height;r+=n)a.push(new i(s,r))},t.draw=function(){t.background(255),a.forEach(function(t){return t.draw()})}};n.default=function(t){var n=t.location;return Object(i.c)(s.a,{sketch:c,path:n.pathname,description:"Same as yesterday, but now rotating at slightly different intervals."})}},478:function(t,n,a){"use strict";a.d(n,"b",function(){return i}),a.d(n,"a",function(){return s}),a.d(n,"c",function(){return r}),a.d(n,"d",function(){return e});var i=function(t){return t<.5?2*t*t:(4-2*t)*t-1},s=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},r=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},e=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-19-js-2c392f31e173674fbd78.js.map