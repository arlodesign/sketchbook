(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{235:function(n,t,e){"use strict";e.r(t);var o=e(9),a=(e(0),e(291)),r=function(n){var t={};n.setup=function(){n.createCanvas(660,840),n.background(255),t=n.createVector(0,-10),n.stroke(0),n.noFill()},n.draw=function(){t.x=n.map(n.noise(t.y/50,n.frameCount/5e3),0,1,.25*n.width,.75*n.width),n.arc(t.x,t.y,n.map(n.noise(t.y/100,n.frameCount/1e4),0,1,0,.9*n.width),20,n.frameCount%2?0:n.PI,n.frameCount%2?n.PI:0),t.y++,t.y>n.height+20&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(o.c)(a.a,{sketch:r,path:t.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-13-js-64de54758e227f933180.js.map