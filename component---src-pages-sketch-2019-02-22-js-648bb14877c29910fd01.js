(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{282:function(n,o,a){"use strict";a.r(o);a(446);var e=a(10),t=(a(0),a(444)),i=function(n){var o,a,e=[],t=[],i=10,r=!1;function c(o,a){return new Array(10).fill().map(function(e){return{position:n.createVector(n.randomGaussian(o,100),n.randomGaussian(a,100)),velocity:n.createVector(n.randomGaussian(0,.1),n.randomGaussian(0,.1)),acceleration:n.createVector(n.randomGaussian(.001,.01),n.randomGaussian(.001,.01))}})}function s(o){n.beginShape(),o.forEach(function(o){n.vertex(o.position.x,o.position.y),o.position.add(o.velocity.add(o.acceleration))}),n.endShape(n.CLOSE)}n.setup=function(){n.pixelDensity(4),n.createCanvas(660,840),n.background(64),n.colorMode(n.HSB,100),n.noFill(),n.blendMode(n.HARD_LIGHT),e=c(.1*n.width,.1*n.height),t=c(.2*n.width,.2*n.height),o=n.random(0,49),a=n.random(50,100),setTimeout(function(){r=!0},25e3)},n.draw=function(){n.frameCount%2?(n.stroke(o*n.sin(n.frameCount/200),50,100,i),s(e),n.stroke(a*n.cos(n.frameCount/200),50,100,i),s(t)):(n.stroke(a*n.cos(n.frameCount/200),50,100,i),s(t),n.stroke(o*n.sin(n.frameCount/200),50,100,i),s(e)),(i=r?i-.01:i)<0&&n.noLoop()}};o.default=function(n){var o=n.location;return Object(e.c)(t.a,{sketch:i,path:o.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-22-js-648bb14877c29910fd01.js.map