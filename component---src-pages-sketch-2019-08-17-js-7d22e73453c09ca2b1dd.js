(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{jYgp:function(t,a,s){"use strict";s.r(a);s("q1tI");var i=s("Gmm/"),n=(s("PZSu"),s("qKvR")),e={}.DEV&&!1,o=function(t){var a=t.random(.8),s=[],i=function(){function s(a,s){this.x=a,this.y=s,this.canvas=t.createGraphics(60,60),this.canvas.colorMode(t.HSB,1),this.rotate=t.TWO_PI/8*t.random([1,3,5,7]),this.offset=t.noise(a,s)*t.TWO_PI}return s.prototype.draw=function(){var s=t.animLoop,i=s.noise2D,n=s.theta,e=n+this.offset>t.TWO_PI?n+this.offset-t.TWO_PI:n+this.offset,o=t.map(e,0,t.TWO_PI,-90,90),r=t.map(i(t.sin(n),t.dist(t.width/2,t.height/2,this.x,this.y)),-1,1,a,a+.2);this.canvas.push(),this.canvas.translate(30,30),this.canvas.rotate(this.rotate),this.canvas.background(r,1,.25),this.canvas.stroke(r,.5,.75),this.canvas.strokeWeight(60),this.canvas.line(o,-60,o,60),this.canvas.pop(),t.image(this.canvas,this.x,this.y)},s}();t.setup=function(){e&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840),t.createLoop(5,{gif:!!e&&{render:!1,open:!0},noiseRadius:.3});for(var a=0;a<t.width;a+=60)for(var n=0;n<t.height;n+=60)s.push(new i(a,n))},t.draw=function(){t.background(255),s.forEach((function(t){return t.draw()}))}};a.default=function(t){var a=t.location;return Object(n.c)(i.a,{sketch:o,path:a.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-17-js-7d22e73453c09ca2b1dd.js.map