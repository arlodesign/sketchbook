"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[4679],{13876:function(e,t,i){var n=i(94035),o=i.n(n),h=(i(96995),i(63608));new(o())((function(e){var t=e.getURLParams().render;e.setup=function(){t&&(e.pixelDensity(1),e.frameRate(30)),e.createCanvas(e.windowWidth,e.windowHeight),e.createLoop(30,{gif:!!t&&{render:!1,open:!0},noiseRadius:.1}),e.strokeWeight(2)},e.draw=function(){e.blendMode(e.BLEND),e.background(255),e.blendMode(e.MULTIPLY);var t=e.animLoop,i=t.theta,n=t.noise1D;e.translate(e.width/2,0),e.stroke("cyan");for(var o=0;o<e.height;o+=3)(0,h.Z)(e,e.width*e.sin(3*i+e.map(o,0,e.height,0,e.TWO_PI))*n(10),o,e.width*-e.cos(7*i+e.map(o,0,e.height,0,e.TWO_PI))*n(20),o,e.map(e.cos(3*i),-1,1,.02,.03),!1,!1);e.stroke("magenta");for(var a=0;a<e.height;a+=3)(0,h.Z)(e,e.width*-e.cos(5*i+e.map(a,0,e.height,0,e.TWO_PI))*n(30),a,e.width*e.sin(3*i+e.map(a,0,e.height,0,e.TWO_PI))*n(40),a,.03,!0,!1);e.stroke("yellow");for(var r=0;r<e.height;r+=3)(0,h.Z)(e,e.width*-e.sin(7*i+e.map(r,0,e.height,0,e.TWO_PI))*n(50),r,e.width*e.cos(2*i+e.map(r,0,e.height,0,e.TWO_PI))*n(60),r,.03,!0,!1)},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch")},63608:function(e,t){t.Z=function(e,t,i,n,o,h){for(var a=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],r=!(arguments.length>7&&void 0!==arguments[7])||arguments[7],s=Math.max(h,.01/e.dist(t,i,n,o)),d=0;d<1;d+=s)(0!==d||a)&&(r&&e.random()>d||!r)&&e.point(e.lerp(t,n,d),e.lerp(i,o,d))}}},function(e){e.O(0,[4035,6995],(function(){return 13876,e(e.s=13876)})),e.O()}]);