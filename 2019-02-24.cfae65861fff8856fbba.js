(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{124:function(o,n,t){"use strict";t.r(n);var i=t(0);new(t.n(i).a)((function(o){var n,t=[],i={},r=0;o.setup=function(){o.createCanvas(o.windowWidth,o.windowHeight);var i=o.floor(o.height/20),r=o.floor(o.width/20);t=Array.from({length:i},(function(){return Array.from({length:r},(function(){return{}}))})),n=o.random(20,80),o.background(255),o.colorMode(o.HSB,100),o.noStroke();for(var e=0;e<o.width/20;e++)for(var h=0;h<o.height/20;h++){var a=o.map(o.dist(20*e,20*h,o.width,o.height),20,o.dist(0,0,o.width,o.height),n-20,n+20),d=o.map(o.dist(20*e,20*h,o.width,o.height),20,o.dist(0,0,o.width,o.height),0,100);o.fill(a,d,100),o.rect(20*e,20*h,20,20),t[h][e]={clr:o.color(100-a,50-d,80,10),visitCount:0}}o.blendMode(o.DODGE)},o.draw=function(){i={row:o.constrain(o.floor(o.randomGaussian(t.length/2,t.length/5)),0,t.length-1),col:o.constrain(o.floor(o.randomGaussian(t[0].length/2,t[0].length/5)),0,t[0].length-1)},t[i.row][i.col].visitCount++;var n=t[i.row][i.col],e=n.clr,h=n.visitCount;o.fill(e),o.ellipse(20*i.col+10,20*i.row+10,12,12),10===h&&r++,25===r&&o.noLoop()},o.windowResized=function(){o.resizeCanvas(o.windowWidth,o.windowHeight)}}),"sketch")}},[[124,0,1]]]);