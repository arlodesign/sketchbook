(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{199:function(i,t,e){"use strict";e.r(t);e(305);var n=e(9),r=(e(0),e(304)),o=function(i){var t,e=[],n=!1,r=new Array(50).fill().map(function(i,t){return(t+1)/50});function o(t){return i.color(255,0,0,t)}i.setup=function(){i.createCanvas(660,840),t=i.createGraphics(i.width,i.height);for(var n=function(t){var n=i.random(r),o=i.width/3*i.random(.5,1.5);r=r.filter(function(i){return i!==n}),e.push({r:3*i.HALF_PI,speed:n/i.TWO_PI,size:o,direction:i.random([1,-1]),lastPoint:null}),o/2},o=0;o<3;o++)n();e[0].size},i.draw=function(){i.background(255),i.frameRate(n?15:30),i.image(t,0,0);var r={x:i.width/2,y:i.height/2};e.forEach(function(a,s){var l=s%3?r.x+i.cos(a.r)*(a.size/2):r.x,c=s%2?r.y:r.y+i.sin(a.r)*(a.size/2);if(n){var f=i.map(s,0,2,51,255);i.noFill(),i.stroke(255,255,255,f),i.strokeWeight(5),i.ellipse(r.x,r.y,s%3?a.size:1,s%2?1:a.size),i.stroke(o(f)),i.strokeWeight(1),i.ellipse(r.x,r.y,s%3?a.size:1,s%2?1:a.size),i.noStroke(),i.fill(255,255,255,f),i.ellipse(l,c,2===s?12:6),i.fill(o(f)),i.ellipse(l,c,2===s?6:3)}if(2===s&&a.lastPoint&&l>=0&&l<=i.width&&c>=0&&c<=i.height)for(var u=0;u<1;u+=.01)t.line(l,c,a.lastPoint.x,a.lastPoint.y);r={x:l,y:c},e[s].lastPoint=r,e[s].r+=a.speed*e[s].direction})},i.mousePressed=function(){n=!n}};t.default=function(i){var t=i.location;return Object(n.c)(r.a,{sketch:o,path:t.pathname,description:" Reload page for a different variation. Click or tap sketch to toggle guides. "})}},305:function(i,t,e){var n=e(12);n(n.P,"Array",{fill:e(306)}),e(36)("fill")},306:function(i,t,e){"use strict";var n=e(28),r=e(79),o=e(16);i.exports=function(i){for(var t=n(this),e=o(t.length),a=arguments.length,s=r(a>1?arguments[1]:void 0,e),l=a>2?arguments[2]:void 0,c=void 0===l?e:r(l,e);c>s;)t[s++]=i;return t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-17-js-7a1496384640c54da04a.js.map