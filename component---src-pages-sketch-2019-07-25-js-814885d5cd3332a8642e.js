(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{407:function(t,e,o){"use strict";o.r(e);var a=o(10),n=(o(0),o(432)),i=(o(438),{}.DEV&&!1),r=function(t){t.setup=function(){i&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840),t.noFill(),t.strokeWeight(3),t.rectMode(t.CENTER),t.createLoop(20,{gif:!!i&&{render:!1,open:!0}})},t.draw=function(){t.blendMode(t.BLEND),t.background(255),t.blendMode(t.MULTIPLY),["cyan","magenta","yellow"].forEach(function(e,o){for(var a=0;a<t.PI;a+=t.PI/20)t.push(),t.stroke(e),t.translate(t.width/2,t.height/2),t.rotate(a*t.cos(t.animLoop.theta)-t.animLoop.theta+t.TWO_PI*(o/3)),t.translate(t.sin(t.animLoop.theta)*(t.width/20)*a,t.sin(t.animLoop.theta)*(t.height/20)*a),t.ellipse(0,0,t.map(t.cos(t.animLoop.theta),-1,1,2,t.height/2),t.width/2),t.pop()})}};e.default=function(t){var e=t.location;return Object(a.c)(n.a,{sketch:r,path:e.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-25-js-814885d5cd3332a8642e.js.map