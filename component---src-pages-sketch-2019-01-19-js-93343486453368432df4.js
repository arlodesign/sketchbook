(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{202:function(e,t,n){"use strict";n.r(t);n(74),n(95);var c=n(0),a=n.n(c),r=n(263),o=n(267),i=function(e){var t,n,c=[];e.preload=function(){t=e.loadFont(Object(o.c)("/assets/NewsCycle-Bold.ttf"))},e.setup=function(){e.pixelDensity(1),e.createCanvas(660,840),e.background(0),e.stroke(255);var a="SELF-\nESTEEM\nSELF-\nRELIANCE\nSELF-\nCONTROL".split("\n"),r=[];a.forEach(function(e,n){r=r.concat(t.textToPoints(e,25,130*(n+1),130,{sampleFactor:1/(n+6)}))}),r.forEach(function(t,n){var a=t.x,o=t.y,i=e.map(n,0,r.length,0,8);c.push({vector:e.createVector(a+e.map(e.noise(a,n),0,1,-i,i),o+e.map(e.noise(o,n),0,1,-i,i)),reached:!1,reachedBy:0})}),c[0].reached=!0,c[0].reachedBy=-1,n=e.dist(0,0,e.width,e.height)},e.draw=function(){e.background(0),c.forEach(function(t,n){var a=t.vector,r=t.reached,o=t.reachedBy;if(r&&o>-1){var i=c[o].vector,h=i.x,d=i.y,s=e.ceil(e.dist(h,d,a.x,a.y));e.strokeWeight(e.map(s,5,20,1,6,!0)),e.line(h,d,a.x,a.y)}});var t,a,r=n;c.forEach(function(n,o){n.reached||c.forEach(function(c,i){if(c.reached){var h=e.dist(n.vector.x,n.vector.y,c.vector.x,c.vector.y);h<r&&(r=h,a=o,t=i)}})}),c[a].reached=!0,c[a].reachedBy=t,c.filter(function(e){return e.reached}).length===c.length&&e.noLoop()}};t.default=function(e){var t=e.location;return a.a.createElement(r.a,{sketch:i,path:t.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-19-js-93343486453368432df4.js.map