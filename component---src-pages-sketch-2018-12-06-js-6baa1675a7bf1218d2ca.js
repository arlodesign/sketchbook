(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{266:function(e,o,n){"use strict";n.r(o);n(179);var t=n(0),i=(n(1),n(251)),s=function(e){var o,n,t=0;e.setup=function(){e.createCanvas(660,840),e.background("white"),e.noStroke(),e.fill("rgba(0, 0, 0, .9)"),o=e.random(10,20),n=e.random(10,20)},e.draw=function(){var i=e.mouseX+e.cos(t)*o,s=e.mouseY+e.sin(t)*o,a=e.noise(i,s);i>0&&s>0&&i<e.width&&s<e.height&&e.mouseIsPressed&&e.ellipse(i,s,n*a),t+=6},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};o.default=function(e){var o=e.location;return Object(t.c)(i.a,{sketch:s,path:o.pathname,description:"Click to draw."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-06-js-6baa1675a7bf1218d2ca.js.map