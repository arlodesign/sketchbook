(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{180:function(e,t,i){"use strict";i.r(t);var o=i(0),n=i.n(o),r=i(255),a=function(e){var t;e.setup=function(){e.createCanvas(660,840),e.noFill(),t=e.random(2,3)},e.draw=function(){e.background(0);for(var i=0-e.height;i<=e.width+0;i+=t+1+e.noise(i)){var o=e.map(e.sin(i),-1,1,e.width,e.dist(0,0,e.width,e.height));e.strokeWeight(t),e.stroke(255),e.bezier(e.width-i,e.height+i,e.width-i,e.height+i,e.mouseX,e.mouseY,e.width-i-o,e.height+i-o)}},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};t.default=function(e){var t=e.location;return n.a.createElement(r.a,{sketch:a,path:t.pathname,description:" Move pointer or finger over sketch. Reload page for a different variation. "})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-25-js-f00980b24d9c70051aeb.js.map