"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5582],{16303:function(e,n,o){var i=o(94035),t=o.n(i),a=o(45456),r=o.n(a);window.p5=t(),r()(),new(t())((function(e){var n,o,i=e.getURLParams().render,t=e.shuffle(["cyan","magenta","yellow"]);e.setup=function(){e.pixelDensity(1),e.frameRate(30),e.createCanvas(e.windowWidth,e.windowHeight),e.noSmooth(),e.strokeCap(e.SQUARE),e.background(255),e.createLoop(20,{gif:!!i&&{render:!1,open:!0},noiseRadius:.1}),e.rectMode(e.CORNERS),n=e.floor(e.width/30),o=e.height-2*n},e.draw=function(){var i=e.animLoop,a=i.theta,r=i.noise2D;e.blendMode(e.BLEND),e.background(255),e.blendMode(e.MULTIPLY);for(var d=n;d<=e.width-n;d++)for(var s=0;s<3;s++){e.stroke(t[s]);var h=e.map(e.sin(a*(s+1)+e.map(d,n,e.width-n,0,e.TWO_PI)+s),-1,1,o/4,o),w=e.map(r(d,s),-1,1,n,n+o-h);e.line(d,n,d+1,w),e.line(d,w+h,d+1,e.height-n)}},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch")}},function(e){e.O(0,[4035,5456],(function(){return 16303,e(e.s=16303)})),e.O()}]);