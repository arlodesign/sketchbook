(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{EiF4:function(t,e,r){"use strict";r.r(e);r("XfO3"),r("HEwt"),r("bHtr"),r("q1tI");var o=r("Gmm/"),a=r("Wbzz"),c=r("qKvR"),n=function(t){var e,r,o,c=[];t.preload=function(){e=t.loadFont(Object(a.withPrefix)("/assets/NewsCycle-Bold.ttf"))},t.setup=function(){t.pixelDensity(1),t.createCanvas(660,840),t.background(255),t.noStroke(),t.fill(0),t.textFont(e,130),t.text("YOUR FUTURE SELF IS A STRANGER",35,20,t.width-10,t.height-10),t.loadPixels();for(var a=[],n=0;n<t.height+0;n++)for(var i=0;i<t.width+0;i++){var h=4*(i+n*t.width);255!==t.pixels[h]&&a.push({x:i,y:n})}a=t.shuffle(a),r=t.floor(a.length/60),(c=Array.from(Array(r-2),(function(e,r){return{vector:t.createVector(a[r].x,a[r].y),reached:!1,reachedBy:0}})))[0].reached=!0,c[0].reachedBy=-1,o=t.dist(0,0,t.width,t.height)},t.draw=function(){t.background(0),t.noStroke(),t.fill(255),t.textFont(e,130),t.text("YOUR FUTURE SELF IS A STRANGER",25,20,t.width-10,t.height-10),t.stroke(0),t.noFill(),c.forEach((function(e,r){var o=e.vector,a=e.reached,n=e.reachedBy;if(a&&n>-1){var i=c[n].vector,h=i.x,d=i.y;t.strokeWeight(t.dist(o.x,o.y,h,d)/4),t.quad(o.x,o.y,o.x,d,h,d,h,o.y)}}));var r,a,n=o;c.forEach((function(e,o){e.reached||c.forEach((function(c,i){if(c.reached){var h=t.dist(e.vector.x,e.vector.y,c.vector.x,c.vector.y);h<n&&(n=h,a=o,r=i)}}))})),c[a].reached=!0,c[a].reachedBy=r,c.filter((function(t){return t.reached})).length===c.length&&t.noLoop()}};e.default=function(t){var e=t.location;return Object(c.c)(o.a,{sketch:n,path:e.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-10-js-e8a9deef51b93c386428.js.map