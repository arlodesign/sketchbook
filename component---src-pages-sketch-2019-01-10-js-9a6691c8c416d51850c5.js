(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{EiF4:function(t,e,r){"use strict";r.r(e);r("XfO3"),r("HEwt"),r("bHtr");var o=r("qKvR"),a=(r("q1tI"),r("Gmm/")),c=r("Wbzz"),n=function(t){var e,r,o,a=[];t.preload=function(){e=t.loadFont(Object(c.withPrefix)("/assets/NewsCycle-Bold.ttf"))},t.setup=function(){t.pixelDensity(1),t.createCanvas(660,840),t.background(255),t.noStroke(),t.fill(0),t.textFont(e,130),t.text("YOUR FUTURE SELF IS A STRANGER",35,20,t.width-10,t.height-10),t.loadPixels();for(var c=[],n=0;n<t.height+0;n++)for(var i=0;i<t.width+0;i++){var h=4*(i+n*t.width);255!==t.pixels[h]&&c.push({x:i,y:n})}c=t.shuffle(c),r=t.floor(c.length/60),(a=Array.from(Array(r-2),(function(e,r){return{vector:t.createVector(c[r].x,c[r].y),reached:!1,reachedBy:0}})))[0].reached=!0,a[0].reachedBy=-1,o=t.dist(0,0,t.width,t.height)},t.draw=function(){t.background(0),t.noStroke(),t.fill(255),t.textFont(e,130),t.text("YOUR FUTURE SELF IS A STRANGER",25,20,t.width-10,t.height-10),t.stroke(0),t.noFill(),a.forEach((function(e,r){var o=e.vector,c=e.reached,n=e.reachedBy;if(c&&n>-1){var i=a[n].vector,h=i.x,d=i.y;t.strokeWeight(t.dist(o.x,o.y,h,d)/4),t.quad(o.x,o.y,o.x,d,h,d,h,o.y)}}));var r,c,n=o;a.forEach((function(e,o){e.reached||a.forEach((function(a,i){if(a.reached){var h=t.dist(e.vector.x,e.vector.y,a.vector.x,a.vector.y);h<n&&(n=h,c=o,r=i)}}))})),a[c].reached=!0,a[c].reachedBy=r,a.filter((function(t){return t.reached})).length===a.length&&t.noLoop()}};e.default=function(t){var e=t.location;return Object(o.c)(a.a,{sketch:n,path:e.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-10-js-9a6691c8c416d51850c5.js.map