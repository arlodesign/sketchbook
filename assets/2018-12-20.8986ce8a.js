"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[1882],{10312:function(n,e,o){var t=o(94035);new(o.n(t)())((function(n){var e,o,t,i=2160;n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.background(255),n.strokeWeight(.75),e=n.random(250,350),o=n.width/2,t=n.height/2},n.draw=function(){var a,r,s,u;a=o+n.cos(n.frameCount%i*(n.TWO_PI/i))*e/2,r=t+n.sin(n.frameCount%i*(n.TWO_PI/i))*e/2,s=o+n.cos(n.frameCount%i*(n.TWO_PI/i))*e,u=t+n.sin(n.frameCount%i*(n.TWO_PI/i))*e;var c=o+n.cos(n.frameCount%i)*(e/7),f=t+n.sin(n.frameCount%i)*(e/7),d=n.noise(n.frameCount)*e,w=o+n.cos(n.frameCount%i+e)*(e+d),h=t+n.sin(n.frameCount%i+e)*(e+d),C="rgba(0, 0, 0, ".concat(n.noise(c,f)/2,")");n.stroke(C),n.noFill(),n.bezier(c,f,w,h,s,u,a,r),n.fill(C),n.ellipse(w,h,2),n.frameCount===i&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Reload page for a different variation."}},function(n){n.O(0,[4035],(function(){return 10312,n(n.s=10312)})),n.O()}]);