(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{200:function(e,i,t){"use strict";t.r(i);t(257);var n=t(0),r=t.n(n),o=t(259),a=function(e){var i,t=[],n=!1,r=new Array(50).fill().map(function(e,i){return(i+1)/50});function o(i){return e.color(255,0,0,i)}e.setup=function(){e.createCanvas(660,840),i=e.createGraphics(e.width,e.height);for(var n=function(i){var n=e.random(r),o=e.width/3*e.random(.5,1.5);r=r.filter(function(e){return e!==n}),t.push({r:3*e.HALF_PI,speed:n/e.TWO_PI,size:o,direction:e.random([1,-1]),lastPoint:null}),o/2},o=0;o<3;o++)n();t[0].size},e.draw=function(){e.background(255),e.frameRate(n?15:30),e.image(i,0,0);var r={x:e.width/2,y:e.height/2};t.forEach(function(a,s){var l=s%3?r.x+e.cos(a.r)*(a.size/2):r.x,c=s%2?r.y:r.y+e.sin(a.r)*(a.size/2);if(n){var f=e.map(s,0,2,51,255);e.noFill(),e.stroke(255,255,255,f),e.strokeWeight(5),e.ellipse(r.x,r.y,s%3?a.size:1,s%2?1:a.size),e.stroke(o(f)),e.strokeWeight(1),e.ellipse(r.x,r.y,s%3?a.size:1,s%2?1:a.size),e.noStroke(),e.fill(255,255,255,f),e.ellipse(l,c,2===s?12:6),e.fill(o(f)),e.ellipse(l,c,2===s?6:3)}if(2===s&&a.lastPoint&&l>=0&&l<=e.width&&c>=0&&c<=e.height)for(var u=0;u<1;u+=.01)i.line(l,c,a.lastPoint.x,a.lastPoint.y);r={x:l,y:c},t[s].lastPoint=r,t[s].r+=a.speed*t[s].direction})},e.mousePressed=function(){n=!n}};i.default=function(e){var i=e.location;return r.a.createElement(o.a,{sketch:a,path:i.pathname,description:" Reload page for a different variation. Click or tap sketch to toggle guides. "})}},257:function(e,i,t){var n=t(11);n(n.P,"Array",{fill:t(258)}),t(32)("fill")},258:function(e,i,t){"use strict";var n=t(25),r=t(73),o=t(14);e.exports=function(e){for(var i=n(this),t=o(i.length),a=arguments.length,s=r(a>1?arguments[1]:void 0,t),l=a>2?arguments[2]:void 0,c=void 0===l?t:r(l,t);c>s;)i[s++]=e;return i}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-17-js-ee6208b9b5f722f35862.js.map