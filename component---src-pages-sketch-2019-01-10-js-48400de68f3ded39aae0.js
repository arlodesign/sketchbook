(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{240:function(e,t,r){"use strict";r.r(t);r(73),r(423),r(421);var o=r(10),c=(r(0),r(419)),a=r(425),n=function(e){var t,r,o,c=[];e.preload=function(){t=e.loadFont(Object(a.c)("/assets/NewsCycle-Bold.ttf"))},e.setup=function(){e.pixelDensity(1),e.createCanvas(660,840),e.background(255),e.noStroke(),e.fill(0),e.textFont(t,130),e.text("YOUR FUTURE SELF IS A STRANGER",35,20,e.width-10,e.height-10),e.loadPixels();for(var a=[],n=0;n<e.height+0;n++)for(var i=0;i<e.width+0;i++){var h=4*(i+n*e.width);255!==e.pixels[h]&&a.push({x:i,y:n})}a=e.shuffle(a),r=e.floor(a.length/60),(c=Array.from(Array(r-2),function(t,r){return{vector:e.createVector(a[r].x,a[r].y),reached:!1,reachedBy:0}}))[0].reached=!0,c[0].reachedBy=-1,o=e.dist(0,0,e.width,e.height)},e.draw=function(){e.background(0),e.noStroke(),e.fill(255),e.textFont(t,130),e.text("YOUR FUTURE SELF IS A STRANGER",25,20,e.width-10,e.height-10),e.stroke(0),e.noFill(),c.forEach(function(t,r){var o=t.vector,a=t.reached,n=t.reachedBy;if(a&&n>-1){var i=c[n].vector,h=i.x,d=i.y;e.strokeWeight(e.dist(o.x,o.y,h,d)/4),e.quad(o.x,o.y,o.x,d,h,d,h,o.y)}});var r,a,n=o;c.forEach(function(t,o){t.reached||c.forEach(function(c,i){if(c.reached){var h=e.dist(t.vector.x,t.vector.y,c.vector.x,c.vector.y);h<n&&(n=h,a=o,r=i)}})}),c[a].reached=!0,c[a].reachedBy=r,c.filter(function(e){return e.reached}).length===c.length&&e.noLoop()}};t.default=function(e){var t=e.location;return Object(o.c)(c.a,{sketch:n,path:t.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-10-js-48400de68f3ded39aae0.js.map