(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{pX3C:function(t,i,s){"use strict";s.r(i);var e=s("q1tI"),n=s.n(e),a=s("Bl7J"),r=s("9VVL"),h=(s("PZSu"),{}.DEV&&!1),o=function(t){var i=t.random(80),s=[],e=function(){function s(i){this.startX=i,this.startY=t.height/2,this.x=this.startX,this.y=this.startY,this.move()}var e=s.prototype;return e.move=function(){var i=t.animLoop.noise2D;this.prev={x:this.x,y:this.y},this.x=this.startX+i(this.startX/100,this.startY/200)*(t.height/2),this.y=this.startY+i(this.startY/100,this.startX/200)*(t.height/2)},e.display=function(){t.stroke(t.map(this.x,0,t.width,i,i+20),100,t.map(t.sin(this.y/20),-1,1,50,100)),t.line(this.prev.x,this.prev.y,this.x,this.y)},s}();t.setup=function(){h&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840),t.background(0),t.colorMode(t.HSB,100),t.strokeWeight(3),t.createLoop(60,{gif:!!h&&{render:!1,open:!0},noiseRadius:.5});for(var i=0;i<t.width;i+=t.width/10)s.push(new e(i))},t.draw=function(){s.forEach((function(t){t.move(),t.display()}))}};i.default=function(){return n.a.createElement(a.a,null,n.a.createElement(r.a,{sketch:o}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-31-js-2604ba820660c1c4f87f.js.map