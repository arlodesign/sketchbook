(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{128:function(n,t,r){"use strict";r.r(t);var e=r(0);function o(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return i(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function a(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}new(r.n(e).a)((function(n){var t=[],r=[],e=function(){function t(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.vector=n.createVector(n.randomGaussian(.666*n.width,30),n.randomGaussian(.666*n.height,30)),this.velocity=n.createVector(n.random(-1,1),n.random(-1,1)),this.onCanvas=!0}var r,e,o;return r=t,(e=[{key:"draw",value:function(){var t=this.vector,r=t.x,e=t.y,o=n.map(n.dist(r,e,.666*n.width,.666*n.height),0,n.dist(0,0,.666*n.width,.666*n.height),1,30);this.onCanvas&&(n.ellipse(r,e,o),this.vector.add(this.velocity),this.velocity.add(n.map(n.noise(n.frameCount/100,r/10,e/10),0,1,-.05,.05),n.map(n.noise(n.frameCount/100,e/10,r/10),0,1,-.05,.05))),(r<-30||r>n.width+30)&&(e<-30||e>n.height+30)&&(this.onCanvas=!1)}}])&&a(r.prototype,e),o&&a(r,o),t}();n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.colorMode(n.HSB,100),t=[n.color(n.random(0,50),50,25),n.color(n.random(50,100),50,75)],n.background(t[1]),r=Array.from({length:500},(function(){return new e})),n.noStroke()},n.draw=function(){n.fill(n.lerpColor.apply(n,o(t).concat([n.map(n.sin(n.frameCount/100),-1,1,0,1)]))),r.forEach((function(n){return n.draw()})),r.filter((function(n){return!n.onCanvas})).length>250&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Refresh page for a different color variatio n"}},[[128,0,1]]]);