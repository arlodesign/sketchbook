(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{203:function(t,e,o){"use strict";o.r(e);var a=o(10),n=(o(0),o(437)),i=function(t){var e,o=0;function a(e,o,a){t.triangle(e,o-a,e-Math.sqrt(3)/2*a,o+a/2,e+Math.sqrt(3)/2*a,o+a/2)}t.setup=function(){t.createCanvas(660,840),t.noFill(),t.angleMode(t.DEGREES)},t.draw=function(){t.background("white"),o=t.map(t.mouseX,0,t.width,0,60),e=t.map(t.mouseY,0,t.height,0,60/(Math.floor(t.width/20)*Math.floor(t.height/20)));for(var n=0;n<Math.ceil(t.height/10)+2;n+=2)for(var i=0;i<Math.ceil(t.width/10)+2;i+=2){var r=10*i,h=10*n;t.push(),t.translate(r,h),t.rotate(o),a(0,0,20),t.pop(),o+=e}},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};e.default=function(t){var e=t.location;return Object(a.c)(n.a,{sketch:i,path:e.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-11-29-js-a87b5ec3d7fa44038acb.js.map