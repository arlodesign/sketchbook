(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{FJep:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),a=o.n(n),i=o("Bl7J"),r=o("9VVL"),c=(o("PZSu"),{}.DEV&&!0),h=function(e){var t,o,n,a=e.random(100);e.setup=function(){e.frameRate(30),c&&e.pixelDensity(1),e.createCanvas(660,840),e.colorMode(e.HSL,100),e.background(a,50,90),e.noFill(),e.strokeWeight(2),t=e.width/20,o=e.color(a,100,20,10),n=e.color(100-a,50,50,10),e.createLoop(60,{gif:!!c&&{render:!1,open:!0},noiseRadius:.8})},e.draw=function(){var a=e.animLoop,i=a.noise1D,r=a.theta;e.push(),e.translate(e.width/2,e.height/2),e.stroke(e.lerpColor(o,n,e.map(e.sin(r),-1,1,0,1))),e.line((-e.width/2+t)*i(-e.width/2+t),-e.height/2+t,(e.width/2-t)*i(e.width/2-t),e.height/2-t),e.pop(),!c&&1800===e.frameCount&&e.noLoop()}};t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(r.a,{sketch:h}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-06-js-1b08e563c67c879b8008.js.map