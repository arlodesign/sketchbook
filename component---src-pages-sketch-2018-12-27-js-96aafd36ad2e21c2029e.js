(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{182:function(t,n,e){"use strict";e.r(n);var o=e(0),a=e.n(o),r=e(253),i=function(t){var n,e,o=0,a=0;t.setup=function(){t.createCanvas(660,840),t.background(0),n=t.random(10,20),e=t.floor(t.random(3,5))},t.draw=function(){t.stroke(255),t.strokeWeight(e);var r=t.width/2+t.cos(t.frameCount/n)*t.frameCount/(t.noise(t.frameCount)*(n/e)),i=t.height/2+t.sin(t.frameCount/n)*t.frameCount/(t.noise(t.frameCount)*(n/e));r>50&&i>50&&r<t.width-50&&i<t.height-50?t.line(r,i,t.width/2,t.height/2):o++,t.stroke(0),t.strokeWeight(e/3);var h=t.width/2+t.cos(t.frameCount/(n/(e-1)))*t.frameCount/(t.noise(t.frameCount)*n),f=t.height/2+t.sin(t.frameCount/(n/(e-1)))*t.frameCount/(t.noise(t.frameCount)*n);if(h>50&&f>50&&h<t.width-50&&f<t.height-50?t.line(h,f,t.width/2,t.height/2):a++,o>t.frameCount/n*2&&a>t.frameCount/n*2){for(var u=0;u<1e3*n;u++)t.stroke(u%e?0:255),t.point(t.constrain(t.random(0,t.width),50,t.width-50),t.constrain(t.random(0,t.height),50,t.height-50));t.noLoop()}}};n.default=function(t){var n=t.location;return a.a.createElement(r.a,{sketch:i,path:n.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-27-js-96aafd36ad2e21c2029e.js.map