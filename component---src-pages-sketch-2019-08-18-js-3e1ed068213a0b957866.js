(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{429:function(t,n,a){"use strict";a.r(n);var r=a(10),i=a(0),e=a.n(i),o=a(440),c=(a(445),a(475)),s=a(452),u={}.DEV&&!1,h=function(t){var n=60,a=[],r=0,i=function(){function a(a,r){this.x=a,this.y=r,this.canvas=t.createGraphics(n,n),this.rotate=t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI]),this.rotateDirection=t.random([-1,1]),this.turning=!1,this.offset=t.noise(a,r)*t.TWO_PI}return a.prototype.draw=function(a){var r=t.animLoop.theta;a&&(this.rotate+=t.HALF_PI*this.rotateDirection);var i=t.map(r%t.HALF_PI,0,t.HALF_PI,0,1);this.canvas.push(),this.canvas.translate(n/2,n/2),this.canvas.rotate(t.map(Object(c.d)(i),0,1,this.rotate,this.rotate+t.HALF_PI*this.rotateDirection)),this.canvas.background(255),this.canvas.strokeWeight(n/10),this.canvas.circle(-n/2,-n/2,n),this.canvas.circle(n/2,n/2,n),this.canvas.pop(),t.image(this.canvas,this.x,this.y)},a}();t.setup=function(){u&&t.frameRate(30),t.createCanvas(660,840),t.createLoop(6,{gif:!!u&&{render:!1,open:!0},noiseRadius:.3});for(var r=0;r<t.width;r+=n)for(var e=0;e<t.height;e+=n)a.push(new i(r,e))},t.draw=function(){t.background(255),a.forEach(function(n){return n.draw(t.animLoop.theta%t.HALF_PI<=r)}),r=t.animLoop.theta%t.HALF_PI}};n.default=function(t){var n=t.location;return Object(r.c)(o.a,{sketch:h,path:n.pathname,description:Object(r.c)(e.a.Fragment,null,"Hat-tip to"," ",Object(r.c)(s.a,{href:"https://www.instagram.com/p/BwKuLHMA1Ho/"},"Jack Rusher"),". Inspired by those rotating truchet tiles, and I wanted to reverse engineer it.")})}},475:function(t,n,a){"use strict";a.d(n,"b",function(){return r}),a.d(n,"a",function(){return i}),a.d(n,"c",function(){return e}),a.d(n,"d",function(){return o});var r=function(t){return t<.5?2*t*t:(4-2*t)*t-1},i=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},e=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},o=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-18-js-3e1ed068213a0b957866.js.map