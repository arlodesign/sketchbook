(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{385:function(r,e,t){"use strict";t.r(e);t(48),t(390);var n=t(7),o=(t(0),t(387));function a(r){if(1===r)return!1;if(2===r)return!0;for(var e=2;e<r;e++)if(r%e==0)return!1;return!0}var c=function(r){var e,t,n,o=1,c=[],i=!0;r.setup=function(){for(r.createCanvas(660,840),r.background(255),e=r.floor(r.random(5,8));!a(o);)o=r.floor(r.random(20*e,25*e));var i=r.width/2/e;t=i/e,n=r.width/2-t;for(var f=function(t){c=c.concat(Array.from(Array(o*(t+1)),function(a,c){var f=r.map(c*e,0,o,0,r.TWO_PI),u=r.constrain(r.randomGaussian((t*i+(t+1)*i)/2,i/e+r.noise(f)*e),0,n);return{vector:r.createVector(r.width/2+r.cos(f)*u,r.height/2+r.sin(f)*u),reached:!1}}))},u=0;u<e;u++)f(u);c[r.floor(r.random(o))].reached=!0},r.draw=function(){r.push(),r.stroke(i?"red":255),r.strokeWeight(1),c.filter(function(r){return!r.reached}).forEach(function(e){var t=e.vector;return r.point(t.x,t.y)}),r.pop();var e,t,o=c.filter(function(r){return r.reached}),a=n;r.strokeWeight(2),c.forEach(function(n,c){n.reached||o.forEach(function(o){var i=o.vector,f=r.dist(i.x,i.y,n.vector.x,n.vector.y);f<a&&(a=f,t=c,e=i)})}),r.line(e.x,e.y,c[t].vector.x,c[t].vector.y),c[t].reached=!0,c.filter(function(r){return r.reached}).length===c.length&&r.noLoop()},r.mousePressed=function(){i=!i}};e.default=function(r){var e=r.location;return Object(n.c)(o.a,{sketch:c,path:e.pathname,description:" Be patient. Reload page for a different variation. Click sketch to toggle the vertices. "})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-08-js-4f71ab0379cc71c636f8.js.map