(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{276:function(e,t,n){"use strict";n.r(t);n(79);var o=n(9),i=(n(0),n(287)),r=function(e){var t,n=[];function o(){e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height&&n.push({x:e.mouseX,y:e.mouseY,time:+new Date})}e.setup=function(){e.createCanvas(660,840),e.colorMode(e.HSB,100),t=e.dist(0,0,e.width,e.height)},e.draw=function(){if(e.background(0),n.length){n.forEach(function(o,i){if(i>0){var r=n[i-1],a=r.x,u=r.y;e.stroke(i/n.length*100,100,100),e.strokeWeight(e.map(e.dist(a,u,o.x,o.y),0,t,10,100)),e.line(a,u,o.x,o.y)}});var o=+new Date;n=n.filter(function(e){var t=e.time;return o-t<5e3})}},e.mouseMoved=o,e.touchMoved=function(){return o(),!1}};t.default=function(e){var t=e.location;return Object(o.c)(i.a,{sketch:r,path:t.pathname,description:"My son requested I draw the “love” in cursive and in rainbow colors. Drag your mouse or finger across the canvas."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-24-js-bed0e351eb1b8502d824.js.map