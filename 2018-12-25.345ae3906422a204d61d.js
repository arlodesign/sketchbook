(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{65:function(i,e,t){"use strict";t.r(e);var n=t(0);new(t.n(n).a)((function(i){var e;i.setup=function(){i.createCanvas(i.windowWidth,i.windowHeight),i.noFill(),e=i.random(2,3)},i.draw=function(){i.background(0);for(var t=0-i.height;t<=i.width+0;t+=e+1+i.noise(t)){var n=i.map(i.sin(t),-1,1,i.width,i.dist(0,0,i.width,i.height));i.strokeWeight(e),i.stroke(255),i.bezier(i.width-t,i.height+t,i.width-t,i.height+t,i.mouseX,i.mouseY,i.width-t-n,i.height+t-n)}},i.touchMoved=function(){if(i.mouseX>=0&&i.mouseY>=0&&i.mouseX<=i.width&&i.mouseY<=i.height)return!1},i.windowResized=function(){i.resizeCanvas(i.windowWidth,i.windowHeight)}}),"sketch")}},[[65,0,1]]]);