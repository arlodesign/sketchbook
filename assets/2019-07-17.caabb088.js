"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[4565],{17337:function(o,n,e){var t=e(94035);new(e.n(t)())((function(o){var n=o.random(70),e=0,t=1,i=0;o.setup=function(){o.createCanvas(o.windowWidth,o.windowHeight),o.colorMode(o.HSL,100),o.background(n,5,80),o.noFill(),o.blendMode(o.MULTIPLY),o.ellipseMode(o.CENTER)},o.draw=function(){var a=o.noise(o.frameCount/3e3,i);o.push(),o.stroke(o.map(o.cos(o.frameCount/300),-1,1,n,n+30),100,50,10),o.translate(o.width/2,i),o.rotate(e),o.arc(o.map(o.sin(o.frameCount/30),-1,1,-o.width/2,o.width/2),0,o.width*a,50,o.frameCount/30,o.frameCount/30+o.HALF_PI),o.pop(),i++,console.log(t),e-=o.TWO_PI/(30*o.height),i>o.height&&(i=0,++t>30&&(o.noLoop(),console.log("done")))},o.windowResized=function(){o.resizeCanvas(o.windowWidth,o.windowHeight)}}),"sketch")}},function(o){o.O(0,[4035],(function(){return 17337,o(o.s=17337)})),o.O()}]);