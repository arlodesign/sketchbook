(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{156:function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),r=o(272),i=function(t){var e,o=0;function a(e,o,a){t.triangle(e,o-a,e-Math.sqrt(3)/2*a,o+a/2,e+Math.sqrt(3)/2*a,o+a/2)}t.setup=function(){t.createCanvas(660,840),t.noFill(),t.angleMode(t.DEGREES)},t.draw=function(){t.background("white"),o=t.map(t.mouseX,0,t.width,0,60),e=t.map(t.mouseY,0,t.height,0,60/(Math.floor(t.width/20)*Math.floor(t.height/20)));for(var n=0;n<Math.ceil(t.height/10)+2;n+=2)for(var r=0;r<Math.ceil(t.width/10)+2;r+=2){var i=10*r,h=10*n;t.push(),t.translate(i,h),t.rotate(o),a(0,0,20),t.pop(),o+=e}},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};e.default=function(t){var e=t.location;return n.a.createElement(r.a,{sketch:i,path:e.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-11-29-js-41c4b507b99bd8f9ce0d.js.map