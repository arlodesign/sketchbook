(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{232:function(e,i,t){"use strict";t.r(i);t(378);var n=t(13),r=(t(0),t(376)),o=function(e){var i,t=[],n=!1,r=new Array(50).fill().map(function(e,i){return(i+1)/50});function o(i){return e.color(255,0,0,i)}e.setup=function(){e.createCanvas(660,840),i=e.createGraphics(e.width,e.height);for(var n=function(i){var n=e.random(r),o=e.width/3*e.random(.5,1.5);r=r.filter(function(e){return e!==n}),t.push({r:3*e.HALF_PI,speed:n/e.TWO_PI,size:o,direction:e.random([1,-1]),lastPoint:null}),o/2},o=0;o<3;o++)n();t[0].size},e.draw=function(){e.background(255),e.frameRate(n?15:30),e.image(i,0,0);var r={x:e.width/2,y:e.height/2};t.forEach(function(a,s){var l=s%3?r.x+e.cos(a.r)*(a.size/2):r.x,c=s%2?r.y:r.y+e.sin(a.r)*(a.size/2);if(n){var f=e.map(s,0,2,51,255);e.noFill(),e.stroke(255,255,255,f),e.strokeWeight(5),e.ellipse(r.x,r.y,s%3?a.size:1,s%2?1:a.size),e.stroke(o(f)),e.strokeWeight(1),e.ellipse(r.x,r.y,s%3?a.size:1,s%2?1:a.size),e.noStroke(),e.fill(255,255,255,f),e.ellipse(l,c,2===s?12:6),e.fill(o(f)),e.ellipse(l,c,2===s?6:3)}if(2===s&&a.lastPoint&&l>=0&&l<=e.width&&c>=0&&c<=e.height)for(var u=0;u<1;u+=.01)i.line(l,c,a.lastPoint.x,a.lastPoint.y);r={x:l,y:c},t[s].lastPoint=r,t[s].r+=a.speed*t[s].direction})},e.mousePressed=function(){n=!n}};i.default=function(e){var i=e.location;return Object(n.c)(r.a,{sketch:o,path:i.pathname,description:" Reload page for a different variation. Click or tap sketch to toggle guides. "})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-17-js-12ce22a24980525fa3ed.js.map