(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{180:function(t,e,i){"use strict";i.r(e);var h=i(12),o=(i(0),i(343)),n=function(t){t.setup=function(){t.createCanvas(660,840),t.noFill()},t.draw=function(){t.background("white");for(var e=t.map(t.mouseX,0,t.width,-t.width,2*t.width,!0),i=t.map(t.mouseY,0,t.height,-t.height,2*t.height,!0),h=0;h<=t.height;h+=20)t.bezier(0,h,e,i,t.width-e,t.height-i,t.width,h);for(var o=20;o<t.width;o+=20)t.bezier(o,0,e,i,t.width-e,t.height-i,o,t.height)},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};e.default=function(t){var e=t.location;return Object(h.c)(o.a,{sketch:n,path:e.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-11-js-a61efdb23e6fe2c9abaa.js.map