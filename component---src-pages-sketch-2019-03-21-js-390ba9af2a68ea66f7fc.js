(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{293:function(o,t,e){"use strict";e.r(t);e(73),e(449),e(445),e(489);var i=e(10),n=(e(0),e(479)),a=e.n(n),c=e(443),r=function(o){var t=function(){function t(){this.color=o.color(o.random(33,66),50,75),this.location=o.createVector(o.random(o.width),o.random(o.height)),this.prevLocations=[],this.velocity=a.a.Vector.random2D()}var e=t.prototype;return e.update=function(){var t=o.createVector(o.mouseX,o.mouseY);t.sub(this.location),t.setMag(.1),this.velocity.add(t.add(a.a.Vector.random2D())),this.prevLocations.push([this.location.x,this.location.y]),this.prevLocations.length>15&&(this.prevLocations=this.prevLocations.slice(1,30)),this.location.add(this.velocity),this.velocity.limit(5)},e.draw=function(){var t=this;o.beginShape(),this.prevLocations.forEach(function(e,i){o.fill(o.lerpColor(o.color(0,0),t.color,1/t.prevLocations.length*i)),o.ellipse.apply(o,e.concat([30]))}),o.endShape(),o.fill(this.color),o.ellipse(this.location.x,this.location.y,30)},t}(),e=[];o.setup=function(){o.createCanvas(660,840),o.colorMode(o.HSB,100),e=Array.from({length:30},function(){return new t}),o.noStroke()},o.draw=function(){o.background(0),e.forEach(function(o){o.update(),o.draw()})},o.touchMoved=function(){if(o.mouseX>=0&&o.mouseY>=0&&o.mouseX<=o.width&&o.mouseY<=o.height)return!1}};t.default=function(o){var t=o.location;return Object(i.c)(c.a,{sketch:r,path:t.pathname,description:"More experimentations with vector math. The particles are attracted to a mouse pointer or taps on the canvas."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-21-js-390ba9af2a68ea66f7fc.js.map