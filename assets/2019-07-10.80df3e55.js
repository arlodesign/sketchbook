"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[6369],{8902:function(e,n,t){var i=t(94035),o=t.n(i),r=(t(96995),process.env.DEV&&!1);new(o())((function(e){var n=10;e.setup=function(){r&&(e.pixelDensity(1),e.frameRate(30)),e.createCanvas(e.windowWidth,e.windowHeight),e.noStroke(),e.rectMode(e.CENTER),e.createLoop(20,{gif:!!r&&{render:!1,open:!0},noiseRadius:.1})},e.draw=function(){e.background(0);for(var t=[],i=0;i<=e.width/2;i+=n){for(var o=[],r=e.map(e.animLoop.noise1D(i/10),-1,1,0,.5),c=0;c<1;c+=r)c>0&&o.push(e.lerp(0,e.height,c));t.push(o)}t.forEach((function(t,i){t.forEach((function(t){var o=e.map(t,0,e.height,n,1);e.rect(i*n,t,o,o),e.rect(i*n,e.height-t,o,o),e.rect(e.width-i*n,t,o,o),e.rect(e.width-i*n,e.height-t,o,o)}))}))},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch")}},function(e){e.O(0,[4035,6995],(function(){return 8902,e(e.s=8902)})),e.O()}]);