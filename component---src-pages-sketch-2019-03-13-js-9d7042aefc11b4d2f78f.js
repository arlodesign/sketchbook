(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{236:function(n,t,e){"use strict";e.r(t);var a=e(0),o=e.n(a),r=e(253),i=function(n){var t={};n.setup=function(){n.createCanvas(660,840),n.background(255),t=n.createVector(0,-10),n.stroke(0),n.noFill()},n.draw=function(){t.x=n.map(n.noise(t.y/50,n.frameCount/5e3),0,1,.25*n.width,.75*n.width),n.arc(t.x,t.y,n.map(n.noise(t.y/100,n.frameCount/1e4),0,1,0,.9*n.width),20,n.frameCount%2?0:n.PI,n.frameCount%2?n.PI:0),t.y++,t.y>n.height+20&&n.noLoop()}};t.default=function(n){var t=n.location;return o.a.createElement(r.a,{sketch:i,path:t.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-13-js-9d7042aefc11b4d2f78f.js.map