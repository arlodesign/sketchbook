(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{178:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(250),i=function(e){var a;e.setup=function(){e.createCanvas(660,840,e.WEBGL),a=e.random(500,700),e.stroke(255),e.strokeWeight(.5)},e.draw=function(){e.background(0),e.camera(e.cos((e.frameCount+200)/200)*(a/3),e.sin((e.frameCount+200)/100)*(a/2),e.sin((e.frameCount+200)/300)*a,0,0,0,0,1,0),e.noFill();for(var n=0;n<e.TWO_PI;n+=e.TWO_PI/(a/10)){var t=e.noise(n),r=a/2*t;e.push(),e.rotateZ(n),e.rotateX(t/2),e.rotateY(2*t),e.bezier(-r,0,r,t,t,t,t,t,t,r,0,r),e.bezier(r,0,r,t,t,t,t,t,t,r,0,-r),e.bezier(r,0,-r,t,t,t,t,t,t,-r,0,-r),e.bezier(-r,0,-r,t,t,t,t,t,t,-r,0,r),e.pop()}}};a.default=function(e){var a=e.location;return r.a.createElement(o.a,{sketch:i,path:a.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-23-js-ea6460827b047d3c16b7.js.map