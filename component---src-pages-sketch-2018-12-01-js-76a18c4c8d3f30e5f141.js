(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{160:function(e,o,u){"use strict";u.r(o);u(247);var s=u(0),t=u.n(s),m=u(248),i=function(e){e.setup=function(){e.createCanvas(660,840),e.strokeWeight(3),e.fill(0)},e.draw=function(){e.background("white");var o=e.map(Math.abs(e.width/2-e.mouseX),0,e.width/2,20,120),u=e.map(Math.abs(e.height/2-e.mouseY),0,e.height/2,120,20);e.stroke(0),e.line(e.mouseX,0,e.mouseX,e.mouseY),e.line(e.width,e.mouseY,e.mouseX,e.mouseY),e.line(e.mouseX,e.height,e.mouseX,e.mouseY),e.line(0,e.mouseY,e.mouseX,e.mouseY),e.stroke(255),e.quad(e.mouseX,e.mouseY,e.mouseX-o,e.mouseY,0,0,e.mouseX,e.mouseY-u),e.quad(e.mouseX,e.mouseY,e.mouseX+o,e.mouseY,e.width,0,e.mouseX,e.mouseY-u),e.quad(e.mouseX,e.mouseY,e.mouseX+o,e.mouseY,e.width,e.height,e.mouseX,e.mouseY+u),e.quad(e.mouseX,e.mouseY,e.mouseX-o,e.mouseY,0,e.height,e.mouseX,e.mouseY+u)},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};o.default=function(e){var o=e.location;return t.a.createElement(m.a,{sketch:i,path:o.pathname,description:"Move pointer or finger over sketch."})}},247:function(e,o,u){var s=u(11);s(s.P,"Array",{fill:u(249)}),u(32)("fill")},249:function(e,o,u){"use strict";var s=u(25),t=u(73),m=u(14);e.exports=function(e){for(var o=s(this),u=m(o.length),i=arguments.length,n=t(i>1?arguments[1]:void 0,u),a=i>2?arguments[2]:void 0,h=void 0===a?u:t(a,u);h>n;)o[n++]=e;return o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-01-js-76a18c4c8d3f30e5f141.js.map