(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{429:function(t,n,r){"use strict";r.r(n);var e=r(10),i=r(0),a=r.n(i),o=r(448),c=(r(451),r(470)),u=r(460),s={}.DEV&&!1,f=function(t){var n=60,r=[],e=0,i=function(){function r(r,e){this.x=r,this.y=e,this.canvas=t.createGraphics(n,n),this.rotate=t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI]),this.rotateDirection=t.random([-1,1]),this.turning=!1,this.offset=t.noise(r,e)*t.TWO_PI}return r.prototype.draw=function(r){var e=t.animLoop.theta;r&&(this.rotate+=t.HALF_PI*this.rotateDirection);var i=t.map(e%t.HALF_PI,0,t.HALF_PI,0,1);this.canvas.push(),this.canvas.translate(n/2,n/2),this.canvas.rotate(t.map(Object(c.e)(i),0,1,this.rotate,this.rotate+t.HALF_PI*this.rotateDirection)),this.canvas.background(255),this.canvas.strokeWeight(n/10),this.canvas.circle(-n/2,-n/2,n),this.canvas.circle(n/2,n/2,n),this.canvas.pop(),t.image(this.canvas,this.x,this.y)},r}();t.setup=function(){s&&t.frameRate(30),t.createCanvas(660,840),t.createLoop(6,{gif:!!s&&{render:!1,open:!0},noiseRadius:.3});for(var e=0;e<t.width;e+=n)for(var a=0;a<t.height;a+=n)r.push(new i(e,a))},t.draw=function(){t.background(255),r.forEach(function(n){return n.draw(t.animLoop.theta%t.HALF_PI<=e)}),e=t.animLoop.theta%t.HALF_PI}};n.default=function(t){var n=t.location;return Object(e.c)(o.a,{sketch:f,path:n.pathname,description:Object(e.c)(a.a.Fragment,null,"Hat-tip to"," ",Object(e.c)(u.a,{href:"https://www.instagram.com/p/BwKuLHMA1Ho/"},"Jack Rusher"),". Inspired by those rotating truchet tiles, and I wanted to reverse engineer it.")})}},470:function(t,n,r){"use strict";r.d(n,"f",function(){return e}),r.d(n,"j",function(){return i}),r.d(n,"c",function(){return a}),r.d(n,"a",function(){return o}),r.d(n,"i",function(){return c}),r.d(n,"b",function(){return u}),r.d(n,"g",function(){return s}),r.d(n,"k",function(){return f}),r.d(n,"d",function(){return h}),r.d(n,"h",function(){return d}),r.d(n,"l",function(){return p}),r.d(n,"e",function(){return v});var e=function(t){return t*t},i=function(t){return t*(2-t)},a=function(t){return t<.5?2*t*t:(4-2*t)*t-1},o=function(t){return t*t*t},c=function(t){return--t*t*t+1},u=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},s=function(t){return t*t*t*t},f=function(t){return 1- --t*t*t*t},h=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},d=function(t){return t*t*t*t*t},p=function(t){return 1+--t*t*t*t*t},v=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-18-js-3df8dfe1580820132f6b.js.map