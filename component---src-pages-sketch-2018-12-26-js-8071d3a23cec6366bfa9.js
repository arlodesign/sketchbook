(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{228:function(n,a,o){"use strict";o.r(a);o(434);var t=o(10),r=(o(0),o(432)),e=function(n){var a;n.setup=function(){n.createCanvas(660,840,n.WEBGL),n.fill(0),a=n.floor(n.random(300,600)),n.strokeWeight(a/100)},n.draw=function(){n.background(0),n.camera(n.sin(n.frameCount/a)*a,n.cos(n.frameCount/a)*a,a,0,0,0,0,1,0);for(var o=0;o<a;o++)n.stroke("rgba(255, 255, 255, "+o/a+")"),n.line(n.cos(n.frameCount+o)*o,n.sin(n.frameCount+o)*o,n.tan(n.frameCount+o)*o,n.cos(n.frameCount+o)*o,n.sin(n.frameCount+o)*o,0);n.frameCount}};a.default=function(n){var a=n.location;return Object(t.c)(r.a,{sketch:e,path:a.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-26-js-8071d3a23cec6366bfa9.js.map