(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{200:function(e,t,c){"use strict";c.r(t);c(79),c(99);var n=c(9),a=(c(0),c(299)),r=c(307),o=function(e){var t,c,n=[];e.preload=function(){t=e.loadFont(Object(r.c)("/assets/NewsCycle-Bold.ttf"))},e.setup=function(){e.pixelDensity(1),e.createCanvas(660,840),e.background(0),e.stroke(255);var a="SELF-\nESTEEM\nSELF-\nRELIANCE\nSELF-\nCONTROL".split("\n"),r=[];a.forEach(function(e,c){r=r.concat(t.textToPoints(e,25,130*(c+1),130,{sampleFactor:1/(c+6)}))}),r.forEach(function(t,c){var a=t.x,o=t.y,i=e.map(c,0,r.length,0,8);n.push({vector:e.createVector(a+e.map(e.noise(a,c),0,1,-i,i),o+e.map(e.noise(o,c),0,1,-i,i)),reached:!1,reachedBy:0})}),n[0].reached=!0,n[0].reachedBy=-1,c=e.dist(0,0,e.width,e.height)},e.draw=function(){e.background(0),n.forEach(function(t,c){var a=t.vector,r=t.reached,o=t.reachedBy;if(r&&o>-1){var i=n[o].vector,h=i.x,d=i.y,s=e.ceil(e.dist(h,d,a.x,a.y));e.strokeWeight(e.map(s,5,20,1,6,!0)),e.line(h,d,a.x,a.y)}});var t,a,r=c;n.forEach(function(c,o){c.reached||n.forEach(function(n,i){if(n.reached){var h=e.dist(c.vector.x,c.vector.y,n.vector.x,n.vector.y);h<r&&(r=h,a=o,t=i)}})}),n[a].reached=!0,n[a].reachedBy=t,n.filter(function(e){return e.reached}).length===n.length&&e.noLoop()}};t.default=function(e){var t=e.location;return Object(n.c)(a.a,{sketch:o,path:t.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-19-js-4ba50a512cfeeecb7e2a.js.map