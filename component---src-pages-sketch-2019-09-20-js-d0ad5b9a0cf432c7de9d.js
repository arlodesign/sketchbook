(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{UBOJ:function(e,t,o){"use strict";o.r(t);o("q1tI");var i=o("Gmm/"),h=(o("PZSu"),o("qKvR")),r={}.DEV&&!1,a=function(e){var t,o=e.shuffle([e.color("red"),e.color("green"),e.color("blue"),e.color("yellow")]);e.setup=function(){e.createCanvas(660,840),e.pixelDensity(1),e.strokeWeight(2),e.noFill(),t=e.dist(0,0,e.width,e.height),e.createLoop(50,{gif:!!r&&{render:!1,download:!0,options:{quality:1,workers:10,dither:"FloydSteinberg-serpentine",debug:!0}},noiseRadius:.5})},e.draw=function(){e.blendMode(e.BLEND),e.background(0),e.blendMode(e.SCREEN),e.translate(e.width/2,e.height/2);var i=e.animLoop.theta;o[0].setAlpha(192),e.stroke(o[0]);for(var h=e.map(e.cos(i),-1,1,1,75),r=t;r>0;r-=t/h)e.circle(0,0,r);e.push(),e.rotate(e.animLoop.theta),o[1].setAlpha(192),e.stroke(o[1]);for(var a=0;a<t;a+=t/h)e.line(-a/2,-e.height,-a/2,e.height),a>0&&e.line(a/2,-e.height,a/2,e.height);e.pop(),e.push(),e.rotate(-e.animLoop.theta+e.TWO_PI/3*e.cos(4*i)),o[2].setAlpha(192),e.stroke(o[2]);for(var n=0;n<t;n+=t/h)e.line(-n/2,-e.height,-n/2,e.height),n>0&&e.line(n/2,-e.height,n/2,e.height);e.pop(),e.push(),e.rotate(-e.animLoop.theta-e.TWO_PI/3*e.cos(4*i)),o[3].setAlpha(192),e.stroke(o[3]);for(var s=0;s<t;s+=t/h)e.line(-s/2,-e.height,-s/2,e.height),s>0&&e.line(s/2,-e.height,s/2,e.height);e.pop()}};t.default=function(e){var t=e.location;return Object(h.c)(i.a,{sketch:a,path:t.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-20-js-d0ad5b9a0cf432c7de9d.js.map