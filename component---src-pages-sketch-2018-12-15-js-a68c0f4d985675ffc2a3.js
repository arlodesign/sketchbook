(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{218:function(t,e,i){"use strict";i.r(e);var o=i(10),n=(i(0),i(421)),a=i(427),h=function(t){var e;t.preload=function(){e=t.loadImage(Object(a.c)("/assets/rope.png"))},t.setup=function(){t.createCanvas(660,840)},t.draw=function(){t.background(e);var i=t.map(t.mouseX,0,t.width,0,36,!0),o=t.map(t.mouseY,0,t.height,0,t.PI/36,!0);t.translate(t.width/2,t.height/2),t.push(),t.rotate(o),t.tint(255,128),t.image(e,-t.width/2-i,-t.height/2-i,t.width+2*i,t.height+2*i),t.pop(),t.push(),t.rotate(2*o),t.tint(255,64),t.image(e,-t.width/2-2*i,-t.height/2-2*i,t.width+4*i,t.height+4*i),t.pop()},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};e.default=function(t){var e=t.location;return Object(o.c)(n.a,{sketch:h,path:e.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-15-js-a68c0f4d985675ffc2a3.js.map