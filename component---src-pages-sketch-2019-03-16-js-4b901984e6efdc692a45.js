(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{271:function(t,n,o){"use strict";o.r(n);o(394),o(48),o(396);var a=o(7),r=(o(0),o(392)),e=function(t){var n=30,o=[],a=[],r=function(){function o(){this.vector=t.createVector(t.randomGaussian(.666*t.width,n),t.randomGaussian(.666*t.height,n)),this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.onCanvas=!0}return o.prototype.draw=function(){var o=this.vector,a=o.x,r=o.y,e=t.map(t.dist(a,r,.666*t.width,.666*t.height),0,t.dist(0,0,.666*t.width,.666*t.height),1,n);this.onCanvas&&(t.ellipse(a,r,e),this.vector.add(this.velocity),this.velocity.add(t.map(t.noise(t.frameCount/100,a/10,r/10),0,1,-.05,.05),t.map(t.noise(t.frameCount/100,r/10,a/10),0,1,-.05,.05))),(a<-n||a>t.width+n)&&(r<-n||r>t.height+n)&&(this.onCanvas=!1)},o}();t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),o=[t.color(t.random(0,50),50,25),t.color(t.random(50,100),50,75)],t.background(o[1]),a=Array.from({length:500},function(){return new r}),t.noStroke()},t.draw=function(){t.fill(t.lerpColor.apply(t,o.concat([t.map(t.sin(t.frameCount/100),-1,1,0,1)]))),a.forEach(function(t){return t.draw()}),a.filter(function(t){return!t.onCanvas}).length>250&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(a.c)(r.a,{sketch:e,path:n.pathname,description:"Refresh page for a different color variation"})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-16-js-4b901984e6efdc692a45.js.map