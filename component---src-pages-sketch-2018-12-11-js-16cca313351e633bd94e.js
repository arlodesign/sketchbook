(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{167:function(e,t,i){"use strict";i.r(t);var h=i(0),o=i.n(h),n=i(270),r=function(e){e.setup=function(){e.createCanvas(660,840),e.noFill()},e.draw=function(){e.background("white");for(var t=e.map(e.mouseX,0,e.width,-e.width,2*e.width,!0),i=e.map(e.mouseY,0,e.height,-e.height,2*e.height,!0),h=0;h<=e.height;h+=20)e.bezier(0,h,t,i,e.width-t,e.height-i,e.width,h);for(var o=20;o<e.width;o+=20)e.bezier(o,0,t,i,e.width-t,e.height-i,o,e.height)},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};t.default=function(e){var t=e.location;return o.a.createElement(n.a,{sketch:r,path:t.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-11-js-16cca313351e633bd94e.js.map