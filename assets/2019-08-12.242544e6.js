"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5530],{39449:function(t,n,e){var r=e(94035),o=e.n(r);function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e(96995);var c=e(7953).c7.spherical,s=process.env.DEV&&!1;new(o())((function(t){var n,e,r,o=t.random(100);t.setup=function(){s&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(t.windowWidth,t.windowHeight,t.WEBGL),t.colorMode(t.HSB,100),n=t.floor(t.width/30),e=t.floor(t.height/30),r=t.dist(0,0,t.width,t.height),t.noStroke(),t.createLoop(60,{gif:!!s&&{render:!1,open:!0},noiseRadius:1})},t.draw=function(){var a=t.animLoop,s=(a.noise1D,a.noise2D,a.theta),u=t.map(s,0,t.TWO_PI,-t.width/2,t.width/2),p=t.map(s,0,t.TWO_PI,t.height/2,-t.height/2);t.background(o,100,50),t.specularMaterial(o,100,75),t.pointLight.apply(t,[0,0,100].concat(i(c([100,s,0]).cartesian()))),t.pointLight.apply(t,[100-o,25,50].concat(i(c([1e3,t.map(t.sin(s),-1,1,0,t.PI),t.map(t.cos(s),-1,1,0,t.PI)]).cartesian())));for(var h=-n/2;h<n;h++)for(var f=-e/2;f<e;f++)t.push(),t.translate(30*h-15,30*f-15),t.rotateX(t.map(t.dist(h,f,u,p),0,r,0,15*-t.TWO_PI)),t.box(31,31,3),t.pop()},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch")}},function(t){t.O(0,[4035,6995,7953],(function(){return 39449,t(t.s=39449)})),t.O()}]);