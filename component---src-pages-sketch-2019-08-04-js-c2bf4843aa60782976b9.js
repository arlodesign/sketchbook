(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{CJjw:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),i=o.n(n),a=o("Bl7J"),r=o("9VVL"),h=(o("PZSu"),{}.DEV&&!1),c=function(e){var t,o,n,i=e.random(100);e.setup=function(){e.frameRate(30),h&&e.pixelDensity(1),e.createCanvas(660,840),e.background(i,20,1),e.noFill(),e.strokeWeight(.5),e.colorMode(e.HSB,100),t=e.width/20,o=e.color(i,100,80,50),n=e.color(100-i,50,100,50),e.createLoop(60,{gif:!!h&&{render:!1,open:!0},noiseRadius:1})},e.draw=function(){var i=e.animLoop,a=i.noise1D,r=i.theta;e.push(),e.translate(e.width/2,e.height/2),e.stroke(e.lerpColor(o,n,e.map(e.sin(r),-1,1,0,1))),e.bezier((-e.width/2+t)*a(-e.width/2+t),(-e.height/2+t)*a(-e.height/2+t),0,0,0,0,(e.width/2-t)*a(e.width/2-t),(e.height/2-t)*a(e.height/2-t)),e.pop(),!h&&1800===e.frameCount&&e.noLoop()}};t.default=function(){return i.a.createElement(a.a,null,i.a.createElement(r.a,{sketch:c}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-04-js-c2bf4843aa60782976b9.js.map