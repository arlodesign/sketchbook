"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5780],{38686:function(e,t,i){var n=i(94035);new(i.n(n)())((function(e){var t;e.preload=function(){t=e.loadImage("/assets/rope.db1ac181.png")},e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight)},e.draw=function(){e.background(t);var i=e.map(e.mouseX,0,e.width,0,36,!0),n=e.map(e.mouseY,0,e.height,0,e.PI/36,!0);e.translate(e.width/2,e.height/2),e.push(),e.rotate(n),e.tint(255,128),e.image(t,-e.width/2-i,-e.height/2-i,e.width+2*i,e.height+2*i),e.pop(),e.push(),e.rotate(2*n),e.tint(255,64),e.image(t,-e.width/2-2*i,-e.height/2-2*i,e.width+4*i,e.height+4*i),e.pop()},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Move pointer or finger over sketch."}},function(e){e.O(0,[4035],(function(){return 38686,e(e.s=38686)})),e.O()}]);