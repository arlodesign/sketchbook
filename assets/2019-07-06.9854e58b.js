"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[8293],{5513:function(n,e,o){var i=o(94035),t=o.n(i);o(96995),new(t())((function(n){var e=n.shuffle(["magenta","yellow","cyan"]);n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.createLoop(3,{gif:!1,noiseRadius:.1}),n.rectMode(n.CENTER),n.noStroke()},n.draw=function(){n.blendMode(n.BLEND),n.background(255),n.blendMode(n.MULTIPLY),[n.width/30,n.width/10,n.width/5].forEach((function(o,i){for(var t=0;t<n.width;t+=o)for(var a=0;a<n.height;a+=o)n.push(),n.fill(e[i]),n.translate(t+o/2,a+o/2),n.scale(n.animLoop.noise2D(t+o/2,a+o/2)),n.circle(0,0,o),n.pop()}))},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")}},function(n){n.O(0,[4035,6995],(function(){return 5513,n(n.s=5513)})),n.O()}]);