(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{FN8D:function(e,o,u){"use strict";u.r(o);u("bHtr"),u("q1tI");var s=u("Gmm/"),m=u("qKvR"),t=function(e){e.setup=function(){e.createCanvas(660,840),e.strokeWeight(3),e.fill(0)},e.draw=function(){e.background("white");var o=e.map(Math.abs(e.width/2-e.mouseX),0,e.width/2,20,120),u=e.map(Math.abs(e.height/2-e.mouseY),0,e.height/2,120,20);e.stroke(0),e.line(e.mouseX,0,e.mouseX,e.mouseY),e.line(e.width,e.mouseY,e.mouseX,e.mouseY),e.line(e.mouseX,e.height,e.mouseX,e.mouseY),e.line(0,e.mouseY,e.mouseX,e.mouseY),e.stroke(255),e.quad(e.mouseX,e.mouseY,e.mouseX-o,e.mouseY,0,0,e.mouseX,e.mouseY-u),e.quad(e.mouseX,e.mouseY,e.mouseX+o,e.mouseY,e.width,0,e.mouseX,e.mouseY-u),e.quad(e.mouseX,e.mouseY,e.mouseX+o,e.mouseY,e.width,e.height,e.mouseX,e.mouseY+u),e.quad(e.mouseX,e.mouseY,e.mouseX-o,e.mouseY,0,e.height,e.mouseX,e.mouseY+u)},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};o.default=function(e){var o=e.location;return Object(m.c)(s.a,{sketch:t,path:o.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-01-js-c5a293696a974ee891ca.js.map