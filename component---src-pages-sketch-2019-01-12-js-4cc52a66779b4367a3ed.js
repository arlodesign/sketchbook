(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{242:function(e,r,t){"use strict";t.r(r);t(421);var o=t(10),a=(t(0),t(419)),c=function(e){var r,t,o=[];e.setup=function(){e.createCanvas(660,840),e.background(255),r=e.floor(e.random(25,50)),t=e.dist(0,0,e.width,e.height);for(var a=0;a<=r;a++)for(var c=0;c<=r;c++)e.random()<.2&&o.push({vector:e.createVector(e.width/r*a,e.height/r*c),reached:!1,reachedBy:0});o[0].reached=!0,o[0].reachedBy=-1},e.draw=function(){e.push(),e.stroke("red"),e.strokeWeight(1),o.filter(function(e){return!e.reached}).forEach(function(r){var t=r.vector;return e.point(t.x,t.y)}),e.pop(),o.forEach(function(r,t){var a=r.vector,c=r.reached,n=r.reachedBy;if(c&&n>-1){var i=o[n].vector,h=i.x,d=i.y;e.stroke(0),e.strokeWeight(2),e.noFill(),e.line(a.x,a.y,h,d),e.fill(0),e.triangle(a.x,a.y,h,d,h,a.y),a.x!==h&&a.y!==d||t%3!=0||e.ellipse(h,d,e.dist(h,d,a.x,a.y))}});var r,a,c=t;o.forEach(function(t,n){t.reached||o.forEach(function(o,i){if(o.reached){var h=e.dist(t.vector.x,t.vector.y,o.vector.x,o.vector.y);h<c&&(c=h,a=n,r=i)}})}),o[a].reached=!0,o[a].reachedBy=r,o.filter(function(e){return e.reached}).length===o.length&&e.noLoop()}};r.default=function(e){var r=e.location;return Object(o.c)(a.a,{sketch:c,path:r.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-12-js-4cc52a66779b4367a3ed.js.map