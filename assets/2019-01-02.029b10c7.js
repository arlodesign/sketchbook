"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5152],{95352:function(n,t,i){var e=i(94035);new(i.n(e)())((function(n){var t=0;n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.background(255),n.rectMode(n.CENTER),n.noStroke()},n.draw=function(){var i=n.noise(n.frameCount);if(n.fill("rgba(0, 0, 0, ".concat(i,")")),n.rect(t,n.height/2,30*i,n.height*i),(t+=20*i)>=n.width){for(var e=0;e<1e4;e++)n.stroke(e%2?"rgba(0, 0, 0, 0.5)":"rgba(255, 255, 255, 0.5)"),n.point(n.randomGaussian(n.width/2,n.width/3),n.randomGaussian(n.height/2,n.height/3));n.noLoop()}},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")}},function(n){n.O(0,[4035],(function(){return 95352,n(n.s=95352)})),n.O()}]);