"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[7770],{31459:function(e,o,n){var i=n(94035),t=n.n(i),h=(n(96995),process.env.DEV&&!0);new(t())((function(e){var o,n,i,t=e.random(100);e.setup=function(){e.frameRate(30),h&&e.pixelDensity(1),e.createCanvas(e.windowWidth,e.windowHeight),e.colorMode(e.HSL,100),e.background(t,50,90),e.noFill(),e.strokeWeight(2),o=e.width/20,n=e.color(t,100,20,10),i=e.color(100-t,50,50,10),e.createLoop(60,{gif:!!h&&{render:!1,open:!0},noiseRadius:.8})},e.draw=function(){var t=e.animLoop,r=t.noise1D,s=t.theta;e.push(),e.translate(e.width/2,e.height/2),e.stroke(e.lerpColor(n,i,e.map(e.sin(s),-1,1,0,1))),e.line((-e.width/2+o)*r(-e.width/2+o),-e.height/2+o,(e.width/2-o)*r(e.width/2-o),e.height/2-o),e.pop(),!h&&1800===e.frameCount&&e.noLoop()},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch")}},function(e){e.O(0,[4035,6995],(function(){return 31459,e(e.s=31459)})),e.O()}]);