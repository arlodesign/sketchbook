(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{234:function(n,o,t){"use strict";t.r(o);t(74),t(257);var e=t(0),a=t.n(e),i=t(259),r=function(n){var o,t,e=[],a=[],i=10,r=!1;function c(o,t){return new Array(10).fill().map(function(e){return{position:n.createVector(n.randomGaussian(o,100),n.randomGaussian(t,100)),velocity:n.createVector(n.randomGaussian(0,.1),n.randomGaussian(0,.1)),acceleration:n.createVector(n.randomGaussian(.001,.01),n.randomGaussian(.001,.01))}})}function s(o){n.beginShape(),o.forEach(function(o){n.vertex(o.position.x,o.position.y),o.position.add(o.velocity.add(o.acceleration))}),n.endShape(n.CLOSE)}n.setup=function(){n.pixelDensity(4),n.createCanvas(660,840),n.background(64),n.colorMode(n.HSB,100),n.noFill(),n.blendMode(n.HARD_LIGHT),e=c(.1*n.width,.1*n.height),a=c(.2*n.width,.2*n.height),o=n.random(0,49),t=n.random(50,100),setTimeout(function(){r=!0},25e3)},n.draw=function(){n.frameCount%2?(n.stroke(o*n.sin(n.frameCount/200),50,100,i),s(e),n.stroke(t*n.cos(n.frameCount/200),50,100,i),s(a)):(n.stroke(t*n.cos(n.frameCount/200),50,100,i),s(a),n.stroke(o*n.sin(n.frameCount/200),50,100,i),s(e)),(i=r?i-.01:i)<0&&n.noLoop()}};o.default=function(n){var o=n.location;return a.a.createElement(i.a,{sketch:r,path:o.pathname,description:"Reload page for a different variation."})}},257:function(n,o,t){var e=t(11);e(e.P,"Array",{fill:t(258)}),t(32)("fill")},258:function(n,o,t){"use strict";var e=t(25),a=t(73),i=t(14);n.exports=function(n){for(var o=e(this),t=i(o.length),r=arguments.length,c=a(r>1?arguments[1]:void 0,t),s=r>2?arguments[2]:void 0,u=void 0===s?t:a(s,t);u>c;)o[c++]=n;return o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-22-js-b253b27993fc77e32aba.js.map