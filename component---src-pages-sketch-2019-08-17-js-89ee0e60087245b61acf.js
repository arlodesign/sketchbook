(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{jYgp:function(t,a,s){"use strict";s.r(a);var n=s("q1tI"),i=s.n(n),e=s("Bl7J"),o=s("9VVL"),r=(s("PZSu"),{}.DEV&&!1),h=function(t){var a=60,s=t.random(.8),n=[],i=function(){function n(s,n){this.x=s,this.y=n,this.canvas=t.createGraphics(a,a),this.canvas.colorMode(t.HSB,1),this.rotate=t.TWO_PI/8*t.random([1,3,5,7]),this.offset=t.noise(s,n)*t.TWO_PI}return n.prototype.draw=function(){var n=t.animLoop,i=n.noise2D,e=n.theta,o=e+this.offset>t.TWO_PI?e+this.offset-t.TWO_PI:e+this.offset,r=t.map(o,0,t.TWO_PI,-a/2-a,a/2+a),h=t.map(i(t.sin(e),t.dist(t.width/2,t.height/2,this.x,this.y)),-1,1,s,s+.2);this.canvas.push(),this.canvas.translate(a/2,a/2),this.canvas.rotate(this.rotate),this.canvas.background(h,1,.25),this.canvas.stroke(h,.5,.75),this.canvas.strokeWeight(a),this.canvas.line(r,-a,r,a),this.canvas.pop(),t.image(this.canvas,this.x,this.y)},n}();t.setup=function(){r&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840),t.createLoop(5,{gif:!!r&&{render:!1,open:!0},noiseRadius:.3});for(var s=0;s<t.width;s+=a)for(var e=0;e<t.height;e+=a)n.push(new i(s,e))},t.draw=function(){t.background(255),n.forEach((function(t){return t.draw()}))}};a.default=function(){return i.a.createElement(e.a,null,i.a.createElement(o.a,{sketch:h}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-17-js-89ee0e60087245b61acf.js.map