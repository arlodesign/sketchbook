"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[10],{84539:function(n,t,r){var e=r(94035),o=r.n(e),i=r(61025),a=r(45456),u=r.n(a);function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}window.p5=o(),u()();var f=process.env.DEV&&!1;new(o())((function(n){var t=[];n.setup=function(){f&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(n.windowWidth,n.windowHeight),n.colorMode(n.HSB,1),n.noStroke(),t=Array.from(Array(4),(function(){return{a:n.random(n.TWO_PI),d:n.random(n.width/4,.45*n.width)}})),n.createLoop(20,{gif:!!f&&{render:!1,open:!0},noiseRadius:1})},n.draw=function(){n.blendMode(n.BLEND),n.background(.8),n.blendMode(n.HARD_LIGHT);for(var r=function(r){n.fill(n.map(n.sin(r),-1,1,0,5/6),1,.5),n.push(),n.translate(n.width/2,n.height/2),n.rotate(n.animLoop.theta),n.beginShape(),t.forEach((function(t){var e,o=t.a,a=t.d;n.curveVertex.apply(n,function(n){if(Array.isArray(n))return c(n)}(e=(0,i.ZP)(0,0,o+r+n.map(n.animLoop.noise1D(o),-1,1,1,2),a*n.map(n.animLoop.noise1D(a),-1,1,.75,1),!0))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(e)||function(n,t){if(n){if("string"==typeof n)return c(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(n,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())})),n.endShape(n.CLOSE),n.pop()},e=0;e<n.TWO_PI;e+=n.TWO_PI/6)r(e)},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},61025:function(n,t,r){r.d(t,{Y2:function(){return e},C$:function(){return o},vy:function(){return i}});var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,e,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(r)*e,u=t+Math.sin(r)*o;return i?[a,u]:{x:a,y:u}};t.ZP=function(n,t,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(n,r,i),c=o(t,r,i);return a?[u,c]:{x:u,y:c}}}},function(n){n.O(0,[4035,5456],(function(){return 84539,n(n.s=84539)})),n.O()}]);