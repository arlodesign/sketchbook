(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{272:function(t,i,h){"use strict";h.r(i);h(442);var e=h(10),s=(h(0),h(440)),n=function(t){var i,h=function(){function i(){this.pA=t.createVector(t.random(t.width),t.random(t.height)),this.vA=t.createVector(t.random(),t.random()),this.aA=t.createVector(t.random(.1),t.random(.1)),this.pB=t.createVector(t.random(t.width),t.random(t.height)),this.vB=t.createVector(t.random(),t.random()),this.aB=t.createVector(t.random(.1),t.random(.1))}return i.prototype.draw=function(){t.beginShape(),t.vertex(this.pA.x,this.pA.y),t.quadraticVertex(0,t.height,this.pB.x,this.pB.y),t.endShape(),this.vA.add(this.aA),this.vB.add(this.aB),this.pA.add(this.vA),this.pB.add(this.vB),this.pA.x<0&&(this.pA.x=0,this.vA.x*=-1),this.pA.x>t.width&&(this.pA.x=t.width,this.vA.x*=-1),this.pA.y<0&&(this.pA.y=0,this.vA.y*=-1),this.pA.y>t.height&&(this.pA.y=t.height,this.vA.y*=-1),this.pB.x<0&&(this.pB.x=0,this.vB.x*=-1),this.pB.x>t.width&&(this.pB.x=t.width,this.vB.x*=-1),this.pB.y<0&&(this.pB.y=0,this.vB.y*=-1),this.pB.y>t.height&&(this.pB.y=t.height,this.vB.y*=-1)},i}();t.setup=function(){t.createCanvas(660,840),i=new Array(5).fill().map(function(t){return new h}),t.background(0),t.noFill(),t.stroke(255,20),t.strokeWeight(.25),setTimeout(function(){t.noLoop()},15e3)},t.draw=function(){i.forEach(function(t){return t.draw()})}};i.default=function(t){var i=t.location;return Object(e.c)(s.a,{sketch:n,path:i.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-12-js-56d6c44891f4d1fee4b9.js.map