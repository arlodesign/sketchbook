"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[6408],{45562:function(e,i,t){var n=t(94035);new(t.n(n)())((function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.noFill()},e.draw=function(){e.background("white");for(var i=.2,t=e.map(e.mouseY,0,e.height,e.height,e.height+e.width,!0);t>e.mouseY-2*e.width;){var n=e.noise(.02*e.mouseX,.02*t);e.strokeWeight(i),e.ellipse(e.width/2*n,t,e.width),e.ellipse(e.width/2*n,e.height-t,e.width),i+=.1,t-=30}},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Move pointer or finger over sketch."}},function(e){e.O(0,[4035],(function(){return 45562,e(e.s=45562)})),e.O()}]);