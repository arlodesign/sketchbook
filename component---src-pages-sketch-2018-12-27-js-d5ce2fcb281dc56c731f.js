(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{229:function(t,n,o){"use strict";o.r(n);var e=o(10),a=(o(0),o(436)),i=function(t){var n,o,e=0,a=0;t.setup=function(){t.createCanvas(660,840),t.background(0),n=t.random(10,20),o=t.floor(t.random(3,5))},t.draw=function(){t.stroke(255),t.strokeWeight(o);var i=t.width/2+t.cos(t.frameCount/n)*t.frameCount/(t.noise(t.frameCount)*(n/o)),r=t.height/2+t.sin(t.frameCount/n)*t.frameCount/(t.noise(t.frameCount)*(n/o));i>50&&r>50&&i<t.width-50&&r<t.height-50?t.line(i,r,t.width/2,t.height/2):e++,t.stroke(0),t.strokeWeight(o/3);var h=t.width/2+t.cos(t.frameCount/(n/(o-1)))*t.frameCount/(t.noise(t.frameCount)*n),f=t.height/2+t.sin(t.frameCount/(n/(o-1)))*t.frameCount/(t.noise(t.frameCount)*n);if(h>50&&f>50&&h<t.width-50&&f<t.height-50?t.line(h,f,t.width/2,t.height/2):a++,e>t.frameCount/n*2&&a>t.frameCount/n*2){for(var u=0;u<1e3*n;u++)t.stroke(u%o?0:255),t.point(t.constrain(t.random(0,t.width),50,t.width-50),t.constrain(t.random(0,t.height),50,t.height-50));t.noLoop()}}};n.default=function(t){var n=t.location;return Object(e.c)(a.a,{sketch:i,path:n.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-27-js-d5ce2fcb281dc56c731f.js.map