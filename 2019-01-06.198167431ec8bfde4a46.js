(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{75:function(n,i,e){"use strict";e.r(i);var o=e(0);new(e.n(o).a)((function(n){var i,e,o,t,d,a=0;n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),i=n.random(.01,.03),e=n.width/3,o=n.random(2,2.3),t=n.random(2.7,3),d=n.random(.25*n.width,.333*n.width),n.background(255),n.noFill(),n.strokeWeight(n.map(i,.01,.03,.25,.4))},n.draw=function(){a+=i;var w=n.width/2+n.cos(a*o)*e,s=n.height/2+n.sin(a*t)*e,r=d*n.abs(n.cos(a*t)),h=d*n.abs(n.sin(a*o));n.ellipse(w,s,r,h),n.ellipse(n.width-w,n.height-s,r,h),a>n.TWO_PI&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Reload page for a different variation."}},[[75,0,1]]]);