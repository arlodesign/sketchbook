(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{1:function(n,t,r){"use strict";r.d(t,"c",(function(){return e})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return i}));var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,e,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(r)*e,u=t+Math.sin(r)*o;return i?[a,u]:{x:a,y:u}};t.a=function(n,t,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(n,r,i),c=o(t,r,i);return a?[u,c]:{x:u,y:c}}},356:function(n,t,r){"use strict";r.r(t);var e=r(0),o=r.n(e),i=r(1),a=r(8);r(3);function u(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return c(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}new o.a((function(n){var t,r=n.getURLParams().render,e=n.random(),o=0;n.setup=function(){r&&n.pixelDensity(1),n.frameRate(30),n.createCanvas(n.windowWidth,n.windowHeight),n.background(192),n.createLoop(n.height/2*4/30,{gif:!!r&&{render:!1,open:!0},noiseRadius:1}),n.colorMode(n.HSB,4),Object(a.a)(n),t=n.height+100},n.draw=function(){n.stroke(e+o,3,4,1),n.noFill(),n.blendMode(n.BURN);for(var a=0;a<n.TWO_PI;a+=n.map(n.noise(.6),0,1,.001,.005))n.random()<.5&&n.point.apply(n,u(Object(i.b)(n.width/2+n.width/4*n.animLoop.noise1D(.7),t,a,n.width/2*n.noise(.5,n.frameCount/100),50*n.noise(.4,n.frameCount/100),!0)));(t-=2)<-100&&(t=n.height+100,o++),4===o&&!r&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},8:function(n,t,r){"use strict";t.a=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,r=n.width*n.height*.02;n.push();for(var e=0;e<r;e++)n.fill(e%2?"rgba(0, 0, 0, ".concat(t,")"):"rgba(255, 255, 255, ".concat(t,")")),n.noStroke(),n.ellipse(n.randomGaussian(n.width/2,n.width/3),n.randomGaussian(n.height/2,n.height/3),1/(n.pixelDensity()/2));n.pop()}}},[[356,0,1]]]);