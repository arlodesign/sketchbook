"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[8641],{26880:function(n,t,r){var o=r(94035),e=r.n(o),i=(r(96995),r(61025)),a=r(63608);function u(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return c(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=n[r];return o}new(e())((function(n){n.setup=function(){n.frameRate(60),n.createCanvas(n.windowWidth,n.windowHeight),n.background(0),n.colorMode(n.HSB,2),n.blendMode(n.HARD_LIGHT),n.createLoop(120,{noiseRadius:.5})},n.draw=function(){for(var t=n.animLoop,r=t.noise1D,o=t.theta,e=(0,i.ZP)(n.width/2,n.height/2,o,r(.01)*(n.width/2),!0),c=0;c<n.TWO_PI;c+=n.TWO_PI/3)n.stroke(r(.05)+1,n.map(r(c/300),-1,1,1,2),2,.5),a.Z.apply(void 0,[n].concat(u(e),u(i.ZP.apply(void 0,u(e).concat([6*o+c,r(c/100)*n.width,!0]))),[n.map(r(c/400),-1,1,.01,.1)]));7200===n.frameCount&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},63608:function(n,t){t.Z=function(n,t,r,o,e,i){for(var a=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],u=!(arguments.length>7&&void 0!==arguments[7])||arguments[7],c=Math.max(i,.01/n.dist(t,r,o,e)),f=0;f<1;f+=c)(0!==f||a)&&(u&&n.random()>f||!u)&&n.point(n.lerp(t,o,f),n.lerp(r,e,f))}},61025:function(n,t,r){r.d(t,{Y2:function(){return o},C$:function(){return e},vy:function(){return i}});var o=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,o,e){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(r)*o,u=t+Math.sin(r)*e;return i?[a,u]:{x:a,y:u}};t.ZP=function(n,t,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=o(n,r,i),c=e(t,r,i);return a?[u,c]:{x:u,y:c}}}},function(n){n.O(0,[4035,6995],(function(){return 26880,n(n.s=26880)})),n.O()}]);