"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[802],{10275:function(n,t,r){var o=r(94035),e=r.n(o),i=(r(96995),r(61025));function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=n[r];return o}new(e())((function(n){var t=n.getURLParams().render,r=[n.floor(n.random(1,3)),n.floor(n.random(3,7))],o=n.random(.2,.8);n.setup=function(){n.frameRate(60),n.createCanvas(n.windowWidth,n.windowHeight),n.background(255),n.colorMode(n.HSL,1),n.createLoop(120,{gif:!!t&&{render:!1,open:!0},noiseRadius:.8}),n.rectMode(n.CENTER),n.noStroke(),n.fill(1-o,1,.9),n.square(n.width/2,n.height/2,n.width/3*2),n.blendMode(n.OVERLAY)},n.draw=function(){var e,c=n.animLoop,u=c.theta,s=c.noise,f=c.noise1D,d=(0,i.ZP)(0,0,u*r[0],n.height*s()),h=d.x,l=d.y;n.translate(n.width/2,n.height/2),n.stroke(n.map(s(10),-1,1,o-.2,o+.2),n.abs(f(r[0]/10)),n.abs(f(r[1]/10)),.3),n.line.apply(n,(e=(0,i.ZP)(0,0,u*r[1],n.width/4,!0),function(n){if(Array.isArray(n))return a(n)}(e)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(e)||function(n,t){if(n){if("string"==typeof n)return a(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(n,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([n.constrain(h,-n.width/3,n.width/3),n.constrain(l,-n.width/3,n.width/3)])),n.frameCount%100==0&&console.info("".concat(n.frameCount," / ").concat(7200)),!t&&7200===n.frameCount&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},61025:function(n,t,r){r.d(t,{Y2:function(){return o},C$:function(){return e},vy:function(){return i}});var o=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,o,e){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(r)*o,c=t+Math.sin(r)*e;return i?[a,c]:{x:a,y:c}};t.ZP=function(n,t,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=o(n,r,i),u=e(t,r,i);return a?[c,u]:{x:c,y:u}}}},function(n){n.O(0,[4035,6995],(function(){return 10275,n(n.s=10275)})),n.O()}]);