"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[4713],{99151:function(n,t,r){var e=r(94035),u=r.n(e),o=(r(96995),r(61025)),i=r(58891);function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}new(u())((function(n){var t=[n.floor(n.random(1,3)),n.floor(n.random(3,7))],r=n.random(.1,.9);n.setup=function(){n.frameRate(60),n.createCanvas(n.windowWidth,n.windowHeight),n.colorMode(n.HSL,1),n.background(1-r,1,.1),n.createLoop(240,{noiseRadius:.8}),n.rectMode(n.CENTER),n.noStroke(),n.fill(1-r,.5,.9),n.square(n.width/2,n.height/2,n.width/3*2),n.fill(1-r,1,.9),n.square(n.width/2,n.height/2,n.width/5*2),n.blendMode(n.SOFT_LIGHT)},n.draw=function(){var e,u=n.animLoop,c=u.theta,f=u.noise,s=u.noise1D,d=u.progress,h=(0,o.ZP)(0,0,c*t[0],n.height*f()),l=h.x,w=h.y;n.translate(n.width/2,n.height/2),n.stroke(r+f(10)/10,(0,i.easeInOutQuart)(n.abs(s(t[0]/10))),(0,i.easeInOutQuart)(n.abs(s(t[1]/10))),(-2*d*d+2*d)/2),n.line.apply(n,[n.constrain(l,-n.width/5,n.width/5),n.constrain(w,-n.width/5,n.width/5)].concat(function(n){if(Array.isArray(n))return a(n)}(e=(0,o.ZP)(0,0,c*t[1],n.width/3,!0))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(e)||function(n,t){if(n){if("string"==typeof n)return a(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(n,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),n.frameCount%100==0&&console.info("".concat(n.frameCount," / ").concat(14400))},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},58891:function(n,t,r){r.r(t),r.d(t,{linear:function(){return e},easeInQuad:function(){return u},easeOutQuad:function(){return o},easeInOutQuad:function(){return i},easeInCubic:function(){return a},easeOutCubic:function(){return c},easeInOutCubic:function(){return f},easeInQuart:function(){return s},easeOutQuart:function(){return d},easeInOutQuart:function(){return h},easeInQuint:function(){return l},easeOutQuint:function(){return w},easeInOutQuint:function(){return b}});var e=function(n){return n},u=function(n){return n*n},o=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},h=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},l=function(n){return n*n*n*n*n},w=function(n){return 1+--n*n*n*n*n},b=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},61025:function(n,t,r){r.d(t,{Y2:function(){return e},C$:function(){return u},vy:function(){return o}});var e=function(n,t,r){return n+Math.cos(t)*r},u=function(n,t,r){return n+Math.sin(t)*r},o=function(n,t,r,e,u){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(r)*e,a=t+Math.sin(r)*u;return o?[i,a]:{x:i,y:a}};t.ZP=function(n,t,r,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=e(n,r,o),c=u(t,r,o);return i?[a,c]:{x:a,y:c}}}},function(n){n.O(0,[4035,6995],(function(){return 99151,n(n.s=99151)})),n.O()}]);