(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{314:function(t,i,o){"use strict";o.r(i);var n=o(12),s=o(0),e=o.n(s),a=o(348),r=o(358),c=function(t){var i=t.random(80),o=[],n=function(){function o(i,o){this.x=i,this.y=.6666*t.height,this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.position=t.createVector(this.x,this.y)}var n=o.prototype;return n.move=function(){this.prev={x:this.position.x,y:this.position.y},this.velocity.add(t.createVector(t.map(t.noise(this.position.x/300,this.position.y/200),0,1,-.1,.1),t.map(t.noise(this.position.x/200,this.position.y/300),0,1,-.1,.1))),this.velocity.mult(.95,.95),this.position.add(this.velocity)},n.display=function(){t.stroke(t.map(this.position.x,0,t.width,i,i+20),100,t.map(t.sin(this.position.x/20),-1,1,50,100)),t.line(this.prev.x,this.prev.y,this.position.x,this.position.y)},o}();t.setup=function(){t.createCanvas(660,840);for(var i=0;i<t.width;i+=8)o.push(new n(i));t.background(0),t.colorMode(t.HSB,100),t.strokeWeight(2)},t.draw=function(){o.forEach(function(t){t.move(),t.display()})}};i.default=function(t){var i=t.location;return Object(n.c)(a.a,{sketch:c,path:i.pathname,description:Object(n.c)(e.a.Fragment,null,"Reload page for a different variation. Exploring some of"," ",Object(n.c)(r.a,{href:"https://github.com/wangyasai"},"Yasai’s work"),".")})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-16-js-c072bde184b3d4af34ce.js.map