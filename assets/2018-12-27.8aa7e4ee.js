"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[8787],{67265:function(n,e,t){var o=t(94035);new(t.n(o)())((function(n){var e,t,o=50,i=0,r=0;n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.background(0),e=n.random(10,20),t=n.floor(n.random(3,5))},n.draw=function(){n.stroke(255),n.strokeWeight(t);var a=n.width/2+n.cos(n.frameCount/e)*n.frameCount/(n.noise(n.frameCount)*(e/t)),h=n.height/2+n.sin(n.frameCount/e)*n.frameCount/(n.noise(n.frameCount)*(e/t));a>o&&h>o&&a<n.width-o&&h<n.height-o?n.line(a,h,n.width/2,n.height/2):i++,n.stroke(0),n.strokeWeight(t/3);var s=n.width/2+n.cos(n.frameCount/(e/(t-1)))*n.frameCount/(n.noise(n.frameCount)*e),f=n.height/2+n.sin(n.frameCount/(e/(t-1)))*n.frameCount/(n.noise(n.frameCount)*e);if(s>o&&f>o&&s<n.width-o&&f<n.height-o?n.line(s,f,n.width/2,n.height/2):r++,i>n.frameCount/e*2&&r>n.frameCount/e*2){for(var u=0;u<1e3*e;u++)n.stroke(u%t?0:255),n.point(n.constrain(n.random(0,n.width),o,n.width-o),n.constrain(n.random(0,n.height),o,n.height-o));n.noLoop()}},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Reload page for a different variation."}},function(n){n.O(0,[4035],(function(){return 67265,n(n.s=67265)})),n.O()}]);