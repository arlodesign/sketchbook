(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{jwIQ:function(t,i,o){"use strict";o.r(i);var e=o("q1tI"),n=o.n(e),s=o("Bl7J"),a=o("9VVL"),r=function(t){var i=t.random(80),o=[],e=function(){function o(i){this.x=i,this.y=.6666*t.height,this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.position=t.createVector(this.x,this.y)}var e=o.prototype;return e.move=function(){this.prev={x:this.position.x,y:this.position.y},this.velocity.add(t.createVector(t.map(t.noise(this.position.x/300,this.position.y/200),0,1,-.1,.1),t.map(t.noise(this.position.x/200,this.position.y/300),0,1,-.1,.1))),this.velocity.mult(.95,.95),this.position.add(this.velocity)},e.display=function(){t.stroke(t.map(this.position.x,0,t.width,i,i+20),100,t.map(t.sin(this.position.x/20),-1,1,50,100)),t.line(this.prev.x,this.prev.y,this.position.x,this.position.y)},o}();t.setup=function(){t.createCanvas(660,840);for(var i=0;i<t.width;i+=8)o.push(new e(i));t.background(0),t.colorMode(t.HSB,100),t.strokeWeight(2)},t.draw=function(){o.forEach((function(t){t.move(),t.display()}))}};i.default=function(){return n.a.createElement(s.a,null,n.a.createElement(a.a,{sketch:r}),n.a.createElement("p",null,"Reload page for a different variation. Exploring some of"," ",n.a.createElement("a",{href:"https://github.com/wangyasai"},"Yasai’s work"),"."))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-16-js-2133f5aefc05c1bcb783.js.map