(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{262:function(n,e,o){"use strict";o.r(e),function(n){var e=o(0),i=o.n(e),a=(o(3),n.env.DEV&&!1);new i.a((function(n){n.setup=function(){a&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(n.windowWidth,n.windowHeight),n.rectMode(n.CENTER),n.noStroke(),n.createLoop(5,{gif:!!a&&{render:!1,open:!0},noiseRadius:1})},n.draw=function(){n.blendMode(n.BLEND),n.background(0),n.blendMode(n.EXCLUSION),n.translate(n.width/2,n.height/2),["red","green","blue"].forEach((function(e,o){n.fill(e);for(var i=-3;i<=3;i++)for(var a=-3;a<=3;a++){var t=n.map(n.sin(n.animLoop.theta),-1,1,3,n.animLoop.noise2D(i,o)+1),s=n.map(n.cos(n.animLoop.theta),-1,1,3,n.animLoop.noise2D(a,o)+1),r=n.map(n.cos(n.animLoop.theta),-1,1,1,n.animLoop.noise2D(i,a));n.push(),n.translate(50*i*t,50*a*s),n.scale(r,r),n.rect(0,0,50,50),n.pop()}}))},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")}.call(this,o(5))}},[[262,0,1]]]);