(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{161:function(e,o,t){"use strict";t.r(o);var n=t(0),i=t.n(n),r=t(269),a=function(e){var o;e.setup=function(){e.createCanvas(660,840,e.WEBGL),e.strokeWeight(2),e.noFill(),e.stroke(255),o=e.width/3},e.draw=function(){e.background(0);var t=e.map(e.mouseY,0,e.height,-1e3,1e3,!0),n=e.map(e.mouseX,0,e.width,-1e3,1e3,!0);e.camera(t+n,t,n,0,0,0,0,1,0);for(var i=-e.ceil(1.5);i<=e.ceil(1.5);i++)for(var r=-e.ceil(1.5);r<=e.ceil(1.5);r++)for(var a=-e.ceil(1.5);a<=e.ceil(1.5);a++)e.push(),e.translate(o*i,o*r,o*a),e.box(o*e.noise(i,r),o*e.noise(i,a),o*e.noise(r,a)),e.pop()},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};o.default=function(e){var o=e.location;return i.a.createElement(r.a,{sketch:a,path:o.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-04-js-8d707015c1fe40fd6d67.js.map