(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{176:function(e,t,a){"use strict";a.r(t);var n=a(9),r=(a(0),a(289)),o=function(e){var t;e.setup=function(){e.createCanvas(660,840,e.WEBGL),t=e.random(500,700),e.stroke(255),e.strokeWeight(.5)},e.draw=function(){e.background(0),e.camera(e.cos((e.frameCount+200)/200)*(t/3),e.sin((e.frameCount+200)/100)*(t/2),e.sin((e.frameCount+200)/300)*t,0,0,0,0,1,0),e.noFill();for(var a=0;a<e.TWO_PI;a+=e.TWO_PI/(t/10)){var n=e.noise(a),r=t/2*n;e.push(),e.rotateZ(a),e.rotateX(n/2),e.rotateY(2*n),e.bezier(-r,0,r,n,n,n,n,n,n,r,0,r),e.bezier(r,0,r,n,n,n,n,n,n,r,0,-r),e.bezier(r,0,-r,n,n,n,n,n,n,-r,0,-r),e.bezier(-r,0,-r,n,n,n,n,n,n,-r,0,r),e.pop()}}};t.default=function(e){var t=e.location;return Object(n.c)(r.a,{sketch:o,path:t.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-23-js-4a63af71d420a500c1b3.js.map