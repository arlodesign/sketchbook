(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{233:function(n,o,t){"use strict";t.r(o);t(79),t(297);var a=t(9),e=(t(0),t(296)),i=function(n){var o,t,a=[],e=[],i=10,r=!1;function c(o,t){return new Array(10).fill().map(function(a){return{position:n.createVector(n.randomGaussian(o,100),n.randomGaussian(t,100)),velocity:n.createVector(n.randomGaussian(0,.1),n.randomGaussian(0,.1)),acceleration:n.createVector(n.randomGaussian(.001,.01),n.randomGaussian(.001,.01))}})}function s(o){n.beginShape(),o.forEach(function(o){n.vertex(o.position.x,o.position.y),o.position.add(o.velocity.add(o.acceleration))}),n.endShape(n.CLOSE)}n.setup=function(){n.pixelDensity(4),n.createCanvas(660,840),n.background(64),n.colorMode(n.HSB,100),n.noFill(),n.blendMode(n.HARD_LIGHT),a=c(.1*n.width,.1*n.height),e=c(.2*n.width,.2*n.height),o=n.random(0,49),t=n.random(50,100),setTimeout(function(){r=!0},25e3)},n.draw=function(){n.frameCount%2?(n.stroke(o*n.sin(n.frameCount/200),50,100,i),s(a),n.stroke(t*n.cos(n.frameCount/200),50,100,i),s(e)):(n.stroke(t*n.cos(n.frameCount/200),50,100,i),s(e),n.stroke(o*n.sin(n.frameCount/200),50,100,i),s(a)),(i=r?i-.01:i)<0&&n.noLoop()}};o.default=function(n){var o=n.location;return Object(a.c)(e.a,{sketch:i,path:o.pathname,description:"Reload page for a different variation."})}},297:function(n,o,t){var a=t(12);a(a.P,"Array",{fill:t(298)}),t(35)("fill")},298:function(n,o,t){"use strict";var a=t(28),e=t(78),i=t(16);n.exports=function(n){for(var o=a(this),t=i(o.length),r=arguments.length,c=e(r>1?arguments[1]:void 0,t),s=r>2?arguments[2]:void 0,u=void 0===s?t:e(s,t);u>c;)o[c++]=n;return o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-22-js-55cc8fa48fbbcdcd4305.js.map