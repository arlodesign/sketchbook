(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{"+qgk":function(e,t,i){"use strict";i.r(t);i("q1tI");var n=i("Wbzz"),a=i("Gmm/"),o=(i("PZSu"),i("qKvR")),r={}.DEV&&!1,h=function(e){var t;e.preload=function(){t=e.loadImage(Object(n.withPrefix)("/assets/susan.png"))},e.setup=function(){e.pixelDensity(1),e.createCanvas(660,840),e.createLoop(20,{gif:!!r&&{render:!1,open:!0},noiseRadius:.1})},e.draw=function(){e.background(t);var i=e.animLoop,n=i.noise2D,a=i.theta;e.push(),e.blendMode(e.MULTIPLY);for(var o=0;o<e.height;o+=e.height/10)e.image(t,0,o,e.width,e.height/10,e.width*e.sin(a)*n(4,o),o,e.width,e.height/10);e.pop();for(var r=0;r<e.height;r++){e.push();var h=e.color(["red","green","blue"][r%3]);h.setAlpha(128),e.stroke(h),e.translate(e.width/2,r),e.line(e.width*n(2,r),0,e.width*n(3,r),0),e.pop()}}};t.default=function(e){var t=e.location;return Object(o.c)(a.a,{sketch:h,path:t.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-05-js-93041f5f316877021934.js.map