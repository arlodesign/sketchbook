(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{215:function(e,o,t){"use strict";t.r(o);var i=t(10),u=(t(0),t(432)),s=function(e){e.setup=function(){e.createCanvas(660,840),e.noFill()},e.draw=function(){e.background("white");Math.ceil(e.mouseY/10),e.height,e.mouseY;for(var o=0;o<=e.height;o+=10){var t=e.map(Math.abs(e.mouseY-o),0,e.height,0,e.width/3-e.mouseX),i=o<e.mouseY?e.map(o,0,e.mouseY,e.mouseX,e.width/3-e.mouseX):e.map(o,e.mouseY,e.height,e.width/3-e.mouseX,e.mouseX);e.beginShape(),e.line(0,o,t,o),e.bezier(t,o,i,o,0,e.mouseY,e.mouseX,e.mouseY),e.bezier(e.mouseX,e.mouseY,e.width,e.mouseY,e.width-i,o,e.width-t,o),e.line(e.width-t,o,e.width,o),e.endShape()}},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};o.default=function(e){var o=e.location;return Object(i.c)(u.a,{sketch:s,path:o.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-12-js-2fd912f96c997e9bbab1.js.map