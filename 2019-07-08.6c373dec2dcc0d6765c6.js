(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{245:function(n,o,e){"use strict";e.r(o);var i=e(0),t=e.n(i);e(3);new t.a((function(n){var o=n.random(1/3),e=Array.from({length:3},(function(n,e){return o+1/3*e}));n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.createLoop(10,{gif:!1,noiseRadius:1}),n.colorMode(n.HSB,1)},n.draw=function(){n.blendMode(n.BLEND),n.background(0),n.blendMode(n.HARD_LIGHT);for(var o=function(o){e.forEach((function(e){n.push(),n.translate(o,0),n.stroke(e,.5,1),n.strokeWeight(n.map(n.cos(n.animLoop.theta),-1,1,1,15));var i=n.map(n.cos(n.animLoop.theta),-1,1,0,30*n.animLoop.noise2D(o,e)*3);n.line(i,0,i,n.height),n.pop()}))},i=0;i<=n.width;i+=30)o(i)},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")}},[[245,0,1]]]);