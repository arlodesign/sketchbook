(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{191:function(e,t,i){"use strict";i.r(t);var o=i(13),n=(i(0),i(377)),h=function(e){e.setup=function(){e.createCanvas(660,840),e.noFill()},e.draw=function(){e.background("white");for(var t=.2,i=e.map(e.mouseY,0,e.height,e.height,e.height+e.width,!0);i>e.mouseY-2*e.width;){var o=e.noise(.02*e.mouseX,.02*i);e.strokeWeight(t),e.ellipse(e.width/2*o,i,e.width),e.ellipse(e.width/2*o,e.height-i,e.width),t+=.1,i-=30}},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};t.default=function(e){var t=e.location;return Object(o.c)(n.a,{sketch:h,path:t.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-02-js-8e956d328b1078e5995b.js.map