(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{174:function(e,o,t){"use strict";t.r(o);var i=t(12),n=(t(0),t(345)),r=function(e){var o;e.setup=function(){e.createCanvas(660,840,e.WEBGL),e.strokeWeight(2),e.noFill(),e.stroke(255),o=e.width/3},e.draw=function(){e.background(0);var t=e.map(e.mouseY,0,e.height,-1e3,1e3,!0),i=e.map(e.mouseX,0,e.width,-1e3,1e3,!0);e.camera(t+i,t,i,0,0,0,0,1,0);for(var n=-e.ceil(1.5);n<=e.ceil(1.5);n++)for(var r=-e.ceil(1.5);r<=e.ceil(1.5);r++)for(var a=-e.ceil(1.5);a<=e.ceil(1.5);a++)e.push(),e.translate(o*n,o*r,o*a),e.box(o*e.noise(n,r),o*e.noise(n,a),o*e.noise(r,a)),e.pop()},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};o.default=function(e){var o=e.location;return Object(i.c)(n.a,{sketch:r,path:o.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-04-js-30e8bf672642e150c461.js.map