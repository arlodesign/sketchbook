(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{411:function(a,t,n){"use strict";n.r(t);var s=n(10),i=(n(0),n(434)),o=(n(440),{}.DEV&&!1),e=function(a){var t=60,n=[],s=function(){function n(n,s){this.x=n,this.y=s,this.rotate=a.random([a.TWO_PI,a.HALF_PI]),this.canvas=a.createGraphics(t,t),this.canvas.strokeCap(a.PROJECT)}return n.prototype.draw=function(){this.canvas.background(255),this.canvas.push(),this.canvas.translate(t/2,t/2),this.canvas.rotate(this.rotate*a.animLoop.noise2D(this.x,this.y));for(var n=-t;n<=t;n+=t/5)this.canvas.strokeWeight(a.map(n,-t,t,a.map(a.cos(a.animLoop.theta),-1,1,t/3,0),a.map(a.cos(a.animLoop.theta),-1,1,0,t/3))),this.canvas.line(-t,n,t,n);this.canvas.pop(),a.image(this.canvas,this.x,this.y)},n}();a.setup=function(){o&&(a.pixelDensity(1),a.frameRate(30)),a.createCanvas(660,840),a.createLoop(5,{gif:!!o&&{render:!1,open:!0},noiseRadius:.3});for(var i=0;i<a.width;i+=t)for(var e=0;e<a.height;e+=t)n.push(new s(i,e))},a.draw=function(){a.background(255),n.forEach(function(a){return a.draw()})}};t.default=function(a){var t=a.location;return Object(s.c)(i.a,{sketch:e,path:t.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-31-js-12cc4f8946bd3851d1b2.js.map