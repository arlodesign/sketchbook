(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{2:function(n,t,e){"use strict";e.r(t),e.d(t,"linear",(function(){return u})),e.d(t,"easeInQuad",(function(){return i})),e.d(t,"easeOutQuad",(function(){return r})),e.d(t,"easeInOutQuad",(function(){return a})),e.d(t,"easeInCubic",(function(){return o})),e.d(t,"easeOutCubic",(function(){return c})),e.d(t,"easeInOutCubic",(function(){return d})),e.d(t,"easeInQuart",(function(){return s})),e.d(t,"easeOutQuart",(function(){return f})),e.d(t,"easeInOutQuart",(function(){return h})),e.d(t,"easeInQuint",(function(){return w})),e.d(t,"easeOutQuint",(function(){return p})),e.d(t,"easeInOutQuint",(function(){return O}));var u=function(n){return n},i=function(n){return n*n},r=function(n){return n*(2-n)},a=function(n){return n<.5?2*n*n:(4-2*n)*n-1},o=function(n){return n*n*n},c=function(n){return--n*n*n+1},d=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},f=function(n){return 1- --n*n*n*n},h=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},w=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},O=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},307:function(n,t,e){"use strict";e.r(t),function(n){var t=e(0),u=e.n(t),i=e(2),r=(e(3),n.env.DEV&&!1);new u.a((function(n){n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.noStroke(),n.colorMode(n.HSL,1),n.rectMode(n.CENTER),n.createLoop(3,{gif:!!r&&{render:!1,open:!0},noiseRadius:.5})},n.draw=function(){var t=n.animLoop.theta;n.blendMode(n.BLEND),n.background(255),n.blendMode(n.MULTIPLY);for(var e=0;e<n.width/30;e++)for(var u=0;u<n.height/30;u++)n.push(),n.fill("cyan"),n.translate(30*e+15,30*u+15),n.square(0,0,30*Object(i.easeInOutQuad)(n.map(n.cos(n.dist(30*e+15,30*u+15,n.width/2,n.height/2)+t),-1,1,0,1)),30*Object(i.easeInOutQuad)(n.map(n.sin(n.dist(30*e+15,30*u+15,n.width/2,n.height/2)+t),-1,1,0,1))),n.pop(),n.push(),n.fill("yellow"),n.translate(n.width-(30*e+15),30*u+15),n.square(0,0,30*Object(i.easeInOutQuad)(n.map(n.sin(n.dist(30*e+15,30*u+15,n.width/2,n.height/2)+t),-1,1,0,1)),30*Object(i.easeInOutQuad)(n.map(n.cos(n.dist(30*e+15,30*u+15,n.width/2,n.height/2)+t),-1,1,0,1))),n.pop(),n.push(),n.fill("magenta"),n.translate(30*e-15,30*u+15),n.square(0,0,15*Object(i.easeInOutQuad)(n.map(n.sin(n.dist(e,u,-n.width/2,n.height/2)+t),-1,1,1,0)),15*Object(i.easeInOutQuad)(n.map(n.cos(n.dist(e,u,-n.width/2,n.height/2)+t),-1,1,1,0))),n.pop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")}.call(this,e(5))}},[[307,0,1]]]);