"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5187],{5820:function(i,t,o){var n=o(94035);function e(i,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}new(o.n(n)())((function(i){var t=i.random(80),o=[],n=function(){function o(t,n){!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.x=t,this.y=.6666*i.height,this.velocity=i.createVector(i.random(-1,1),i.random(-1,1)),this.position=i.createVector(this.x,this.y)}var n,s;return n=o,(s=[{key:"move",value:function(){this.prev={x:this.position.x,y:this.position.y},this.velocity.add(i.createVector(i.map(i.noise(this.position.x/300,this.position.y/200),0,1,-.1,.1),i.map(i.noise(this.position.x/200,this.position.y/300),0,1,-.1,.1))),this.velocity.mult(.95,.95),this.position.add(this.velocity)}},{key:"display",value:function(){i.stroke(i.map(this.position.x,0,i.width,t,t+20),100,i.map(i.sin(this.position.x/20),-1,1,50,100)),i.line(this.prev.x,this.prev.y,this.position.x,this.position.y)}}])&&e(n.prototype,s),Object.defineProperty(n,"prototype",{writable:!1}),o}();i.setup=function(){i.createCanvas(i.windowWidth,i.windowHeight);for(var t=0;t<i.width;t+=8)o.push(new n(t));i.background(0),i.colorMode(i.HSB,100),i.strokeWeight(2)},i.draw=function(){o.forEach((function(i){i.move(),i.display()}))},i.windowResized=function(){i.resizeCanvas(i.windowWidth,i.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML='\n        Reload page for a different variation. Exploring some of \n        <Link href="https://github.com/wangyasai">Yasai’s work</Link>.\n      '}},function(i){i.O(0,[4035],(function(){return 5820,i(i.s=5820)})),i.O()}]);