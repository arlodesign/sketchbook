(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{83:function(e,i,n){"use strict";n.r(i);var o=n(0);new(n.n(o).a)((function(e){var i,n,o,t,a=0;e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),o=e.floor(e.random(2,10)),t=e.floor(e.random(3)),i=.03/e.TWO_PI,n=e.height/6,e.background(255),e.stroke("rgba(0, 0, 0, 0.5)"),e.strokeWeight(.5),e.noFill()},e.draw=function(){a+=i;var r=e.width/2+e.cos(a)*(e.width/4),s=e.height/2+e.cos(a)*(e.width/4),d=r+e.cos(a)*n,w=s+e.sin(a*o)*n,c=r+e.cos(a+e.HALF_PI)*n,h=s+e.sin(a*o+e.HALF_PI)*n,f=r+e.cos(a+e.PI)*n,u=s+e.sin(a*o+e.PI)*n;switch(t){case 0:e.bezier(d,w,f,u,c,h,d,w);break;case 1:e.bezier(f,u,d,w,c,h,f,u);break;default:e.bezier(c,h,d,w,f,u,c,h)}a>e.TWO_PI&&e.noLoop()},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Reload page for a different variation."}},[[83,0,1]]]);