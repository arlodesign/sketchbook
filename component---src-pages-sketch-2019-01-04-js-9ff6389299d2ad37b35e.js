(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{219:function(t,n,a){"use strict";a.r(n);a(395);var o=a(7),e=(a(0),a(393)),r=function(t){t.setup=function(){t.createCanvas(660,840,t.WEBGL),t.fill(255),t.noStroke()},t.draw=function(){t.background(0),t.directionalLight(t.min(t.frameCount,255),t.min(t.frameCount,255),t.min(t.frameCount,255),t.cos(t.frameCount/100),t.sin(t.frameCount/200),t.sin(t.frameCount/100)/2);for(var n=-t.floor(4.5);n<4.5;n++)t.push(),t.translate(t.width/9*n,0),t.rotateY(t.frameCount/1500*(n%2?-1:1)),t.rotateX(t.frameCount/2500),t.rotateZ(t.frameCount/3500+1e3*n),t.scale(t.map(t.sin(t.frameCount/5500),-1,1,1/3,3)),t.box(t.width/4.5,t.height/2,t.width/4.5),t.pop()}};n.default=function(t){var n=t.location;return Object(o.c)(e.a,{sketch:r,path:n.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-04-js-9ff6389299d2ad37b35e.js.map