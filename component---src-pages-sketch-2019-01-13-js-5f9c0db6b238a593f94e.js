(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{303:function(e,r,t){"use strict";t.r(r);t(180);var o=t(0),i=(t(1),t(255)),a=function(e){var r,t,o=[];e.setup=function(){e.pixelDensity(1),e.createCanvas(660,840),t=e.floor(e.random(25,50));for(var i=0;i<=t;i++)for(var a=0;a<=t;a++){var c=e.floor(e.width/t*i),n=e.floor(e.height/t*a);e.dist(c,n,e.width/2,e.height/2)<e.width/2-100&&e.random()<.5&&o.push({vector:e.createVector(c,n),reached:!1,reachedBy:0})}o[0].reached=!0,o[0].reachedBy=-1,r=e.dist(0,0,e.width,e.height),e.background(0),e.strokeWeight(2),e.fill(0)},e.draw=function(){e.fill(255),e.ellipse(e.width/2,e.height/2,e.width/2+100+e.width/t*8),e.push(),e.stroke("red"),o.filter((function(e){return!e.reached})).forEach((function(r){var t=r.vector;return e.point(t.x,t.y)})),e.pop();var i,a,c=r;o.forEach((function(r,t){r.reached||o.forEach((function(o,n){if(o.reached){var h=e.dist(r.vector.x,r.vector.y,o.vector.x,o.vector.y);h<c&&(c=h,a=t,i=n)}}))})),o[a].reached=!0,o[a].reachedBy=i,o.forEach((function(r,t){var i=r.vector,a=r.reached,c=r.reachedBy;if(a&&c>-1){var n=o[c].vector,h=n.x,d=n.y;e.stroke(0),e.strokeWeight(2),e.noFill(),e.line(i.x,i.y,h,d),e.fill(0),e.strokeWeight(1),e.triangle(i.x,i.y,h,d,h,i.y),i.x!==h&&i.y!==d||t%4!=0||e.ellipse(h,d,e.dist(h,d,i.x,i.y))}})),o.filter((function(e){return e.reached})).length===o.length&&e.noLoop()}};r.default=function(e){var r=e.location;return Object(o.c)(i.a,{sketch:a,path:r.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-13-js-5f9c0db6b238a593f94e.js.map