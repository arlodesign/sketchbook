(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{415:function(t,e,o){"use strict";o.r(e);var i=o(10),n=(o(0),o(442)),a=(o(447),{}.DEV&&!1),r=function(t){var e,o,i,n=t.random(100);t.setup=function(){t.frameRate(30),a&&t.pixelDensity(1),t.createCanvas(660,840),t.background(n,20,1),t.noFill(),t.strokeWeight(.5),t.colorMode(t.HSB,100),e=t.width/20,o=t.color(n,100,80,50),i=t.color(100-n,50,100,50),t.createLoop(60,{gif:!!a&&{render:!1,open:!0},noiseRadius:1})},t.draw=function(){var n=t.animLoop,r=n.noise1D,h=n.theta;t.push(),t.translate(t.width/2,t.height/2),t.stroke(t.lerpColor(o,i,t.map(t.sin(h),-1,1,0,1))),t.bezier((-t.width/2+e)*r(-t.width/2+e),(-t.height/2+e)*r(-t.height/2+e),0,0,0,0,(t.width/2-e)*r(t.width/2-e),(t.height/2-e)*r(t.height/2-e)),t.pop(),!a&&1800===t.frameCount&&t.noLoop()}};e.default=function(t){var e=t.location;return Object(i.c)(n.a,{sketch:r,path:e.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-04-js-eb254337254222223ef4.js.map