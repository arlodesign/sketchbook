(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{506:function(n,t,r){"use strict";r.r(t);var o=r(0);function e(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return i(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=n[r];return o}new(r.n(o).a)((function(n){var t,r=n.random([function(n,t,r){return.2126*n+.7152*t+.0722*r},function(n,t,r){return n+t+r},function(t,r,o){return n.saturation(n.color(t,r,o))},function(t,r,o){return n.brightness(n.color(t,r,o))},function(t,r,o){return n.lightness(n.color(t,r,o))},function(n,t,r){return n},function(n,t,r){return t},function(n,t,r){return r}]);n.preload=function(){t=n.loadImage("/assets/brimley.1a4b4125.png")},n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.background(255),n.image(t,0,0,n.width,n.height)},n.draw=function(){n.loadPixels();for(var t=n.floor(n.noise(.02,(n.frameCount-1)%n.width/100)*(n.height/2)),o=function(o){for(var i=[],a=o;a<Math.min(o+t,n.height);a++)i.push(n.get((n.frameCount-1)%n.width,a));i.sort((function(n,t){return r.apply(void 0,e(n))-r.apply(void 0,e(t))})).forEach((function(t,r){n.set((n.frameCount-1)%n.width,r+o,n.color.apply(n,e(t)))}))},i=0;i<n.height;i+=t)o(i);n.updatePixels(),n.frameCount>n.height&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")}},[[506,0,1]]]);