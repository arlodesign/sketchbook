(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{261:function(t,n,o){"use strict";o.r(n);var e=o(9),i=(o(0),o(310)),r=function(t){var n=function(){function n(t){this.x=t}return n.prototype.draw=function(){t.push(),t.blendMode(t.HARD_LIGHT),t.stroke(t.map(this.x,0,t.width,0,100),100,30),t.line(this.x,0,this.x+t.map(t.noise(this.x,.04,t.frameCount/200),0,1,-100,100),t.height),t.pop()},n}(),o=[];t.setup=function(){t.createCanvas(660,840),t.strokeWeight(30),t.colorMode(t.HSB,100);for(var e=0;e<=t.width;e+=30)o.push(new n(e))},t.draw=function(){t.background(100),o.forEach(function(t){return t.draw()})}};n.default=function(t){var n=t.location;return Object(e.c)(i.a,{sketch:r,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-07-js-3d7f1da6397260cbd78b.js.map