(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{156:function(e,o,u){"use strict";u.r(o);u(275);var s=u(9),t=(u(0),u(276)),m=function(e){e.setup=function(){e.createCanvas(660,840),e.strokeWeight(3),e.fill(0)},e.draw=function(){e.background("white");var o=e.map(Math.abs(e.width/2-e.mouseX),0,e.width/2,20,120),u=e.map(Math.abs(e.height/2-e.mouseY),0,e.height/2,120,20);e.stroke(0),e.line(e.mouseX,0,e.mouseX,e.mouseY),e.line(e.width,e.mouseY,e.mouseX,e.mouseY),e.line(e.mouseX,e.height,e.mouseX,e.mouseY),e.line(0,e.mouseY,e.mouseX,e.mouseY),e.stroke(255),e.quad(e.mouseX,e.mouseY,e.mouseX-o,e.mouseY,0,0,e.mouseX,e.mouseY-u),e.quad(e.mouseX,e.mouseY,e.mouseX+o,e.mouseY,e.width,0,e.mouseX,e.mouseY-u),e.quad(e.mouseX,e.mouseY,e.mouseX+o,e.mouseY,e.width,e.height,e.mouseX,e.mouseY+u),e.quad(e.mouseX,e.mouseY,e.mouseX-o,e.mouseY,0,e.height,e.mouseX,e.mouseY+u)},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};o.default=function(e){var o=e.location;return Object(s.c)(t.a,{sketch:m,path:o.pathname,description:"Move pointer or finger over sketch."})}},275:function(e,o,u){var s=u(12);s(s.P,"Array",{fill:u(277)}),u(35)("fill")},277:function(e,o,u){"use strict";var s=u(28),t=u(78),m=u(16);e.exports=function(e){for(var o=s(this),u=m(o.length),i=arguments.length,n=t(i>1?arguments[1]:void 0,u),h=i>2?arguments[2]:void 0,a=void 0===h?u:t(h,u);a>n;)o[n++]=e;return o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-01-js-1809e5d77a7147f0e133.js.map