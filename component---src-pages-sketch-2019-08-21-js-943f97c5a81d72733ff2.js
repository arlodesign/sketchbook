(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{432:function(e,n,o){"use strict";o.r(n);var t=o(10),a=(o(0),o(440)),r=(o(445),{}.DEV&&!1),i=function(e){var n,o=e.random();e.setup=function(){r&&(e.pixelDensity(1),e.frameRate(30)),e.createCanvas(660,840),e.noFill(),e.strokeWeight(2),e.colorMode(e.HSB,1),n=e.width/15,e.createLoop(20,{gif:!!r&&{render:!1,open:!0},noiseRadius:1})},e.draw=function(){e.blendMode(e.BLEND),e.background(o,.9,.1),e.blendMode(e.HARD_LIGHT);for(var t=e.animLoop,a=t.noise1D,r=t.noise2D,i=0;i<=e.height;i+=3){e.stroke(o,e.map(a(i/1e3),-1,1,.2,.8),e.map(a(i),-1,1,.2,.8),.8),e.beginShape(),e.curveVertex(-n,i);for(var c=0;c<=e.width;c+=n)e.curveVertex(c,e.map(r(c,i),-1,1,i-30,i+30));e.curveVertex(e.width+n,i),e.endShape()}}};n.default=function(e){var n=e.location;return Object(t.c)(a.a,{sketch:i,path:n.pathname,description:"Runs slow in the browser, but it made a nice GIF."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-21-js-943f97c5a81d72733ff2.js.map