(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{300:function(e,t,r){"use strict";r.r(t);r(75),r(184),r(180);var o=r(0),a=(r(1),r(255)),c=r(24),n=function(e){var t,r,o,a=[];e.preload=function(){t=e.loadFont(Object(c.withPrefix)("/assets/NewsCycle-Bold.ttf"))},e.setup=function(){e.pixelDensity(1),e.createCanvas(660,840),e.background(255),e.noStroke(),e.fill(0),e.textFont(t,130),e.text("YOUR FUTURE SELF IS A STRANGER",35,20,e.width-10,e.height-10),e.loadPixels();for(var c=[],n=0;n<e.height+0;n++)for(var i=0;i<e.width+0;i++){var h=4*(i+n*e.width);255!==e.pixels[h]&&c.push({x:i,y:n})}c=e.shuffle(c),r=e.floor(c.length/60),(a=Array.from(Array(r-2),(function(t,r){return{vector:e.createVector(c[r].x,c[r].y),reached:!1,reachedBy:0}})))[0].reached=!0,a[0].reachedBy=-1,o=e.dist(0,0,e.width,e.height)},e.draw=function(){e.background(0),e.noStroke(),e.fill(255),e.textFont(t,130),e.text("YOUR FUTURE SELF IS A STRANGER",25,20,e.width-10,e.height-10),e.stroke(0),e.noFill(),a.forEach((function(t,r){var o=t.vector,c=t.reached,n=t.reachedBy;if(c&&n>-1){var i=a[n].vector,h=i.x,d=i.y;e.strokeWeight(e.dist(o.x,o.y,h,d)/4),e.quad(o.x,o.y,o.x,d,h,d,h,o.y)}}));var r,c,n=o;a.forEach((function(t,o){t.reached||a.forEach((function(a,i){if(a.reached){var h=e.dist(t.vector.x,t.vector.y,a.vector.x,a.vector.y);h<n&&(n=h,c=o,r=i)}}))})),a[c].reached=!0,a[c].reachedBy=r,a.filter((function(e){return e.reached})).length===a.length&&e.noLoop()}};t.default=function(e){var t=e.location;return Object(o.c)(a.a,{sketch:n,path:t.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-10-js-966a8cc101dba9d2756d.js.map