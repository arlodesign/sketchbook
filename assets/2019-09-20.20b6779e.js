"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[2762],{19529:function(e,t,o){var i=o(94035),h=o.n(i),n=o(45456),r=o.n(n);window.p5=h(),r()();var s=process.env.DEV&&!1;new(h())((function(e){var t,o=e.shuffle([e.color("red"),e.color("green"),e.color("blue"),e.color("yellow")]);e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.pixelDensity(1),e.strokeWeight(2),e.noFill(),t=e.dist(0,0,e.width,e.height),e.createLoop(50,{gif:!!s&&{render:!1,download:!0,options:{quality:1,workers:10,dither:"FloydSteinberg-serpentine",debug:!0}},noiseRadius:.5})},e.draw=function(){e.blendMode(e.BLEND),e.background(0),e.blendMode(e.SCREEN),e.translate(e.width/2,e.height/2);var i=e.animLoop.theta;o[0].setAlpha(192),e.stroke(o[0]);for(var h=e.map(e.cos(i),-1,1,1,75),n=t;n>0;n-=t/h)e.circle(0,0,n);e.push(),e.rotate(e.animLoop.theta),o[1].setAlpha(192),e.stroke(o[1]);for(var r=0;r<t;r+=t/h)e.line(-r/2,-e.height,-r/2,e.height),r>0&&e.line(r/2,-e.height,r/2,e.height);e.pop(),e.push(),e.rotate(-e.animLoop.theta+e.TWO_PI/3*e.cos(4*i)),o[2].setAlpha(192),e.stroke(o[2]);for(var s=0;s<t;s+=t/h)e.line(-s/2,-e.height,-s/2,e.height),s>0&&e.line(s/2,-e.height,s/2,e.height);e.pop(),e.push(),e.rotate(-e.animLoop.theta-e.TWO_PI/3*e.cos(4*i)),o[3].setAlpha(192),e.stroke(o[3]);for(var a=0;a<t;a+=t/h)e.line(-a/2,-e.height,-a/2,e.height),a>0&&e.line(a/2,-e.height,a/2,e.height);e.pop()},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch")}},function(e){e.O(0,[4035,5456],(function(){return 19529,e(e.s=19529)})),e.O()}]);