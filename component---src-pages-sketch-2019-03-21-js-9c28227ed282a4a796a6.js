(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{sgpj:function(t,o,n){"use strict";n.r(o);n("q8oJ"),n("8npG"),n("m210"),n("4DPX"),n("rzGZ"),n("YbXK"),n("cFtU"),n("n0hJ"),n("Ml7+"),n("q1tI");var e=n("I335"),r=n.n(e),i=n("Gmm/"),a=n("qKvR");function c(t){return function(t){if(Array.isArray(t)){for(var o=0,n=new Array(t.length);o<t.length;o++)n[o]=t[o];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(t){var o=function(){function o(){this.color=t.color(t.random(33,66),50,75),this.location=t.createVector(t.random(t.width),t.random(t.height)),this.prevLocations=[],this.velocity=r.a.Vector.random2D()}var n=o.prototype;return n.update=function(){var o=t.createVector(t.mouseX,t.mouseY);o.sub(this.location),o.setMag(.1),this.velocity.add(o.add(r.a.Vector.random2D())),this.prevLocations.push([this.location.x,this.location.y]),this.prevLocations.length>15&&(this.prevLocations=this.prevLocations.slice(1,30)),this.location.add(this.velocity),this.velocity.limit(5)},n.draw=function(){var o=this;t.beginShape(),this.prevLocations.forEach((function(n,e){t.fill(t.lerpColor(t.color(0,0),o.color,1/o.prevLocations.length*e)),t.ellipse.apply(t,c(n).concat([30]))})),t.endShape(),t.fill(this.color),t.ellipse(this.location.x,this.location.y,30)},o}(),n=[];t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),n=Array.from({length:30},(function(){return new o})),t.noStroke()},t.draw=function(){t.background(0),n.forEach((function(t){t.update(),t.draw()}))},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};o.default=function(t){var o=t.location;return Object(a.c)(i.a,{sketch:s,path:o.pathname,description:"More experimentations with vector math. The particles are attracted to a mouse pointer or taps on the canvas."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-21-js-9c28227ed282a4a796a6.js.map