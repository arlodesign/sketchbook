"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5113],{63661:function(n,t,r){var e=r(94035),u=r.n(e),o=(r(96995),r(58891));function a(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return i(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var c=r(7953).c7.spherical;new(u())((function(n){var t=n.getURLParams().render,r=[Math.sin,Math.cos];n.setup=function(){n.pixelDensity(t?1:.5),n.frameRate(30),n.createCanvas(n.windowWidth,n.windowHeight,n.WEBGL),n.colorMode(n.HSB,1),n.createLoop(60,{noiseRadius:2})},n.draw=function(){var e=n.animLoop,u=e.progress,i=e.theta,f=e.noise1D,s=(0,o.easeInOutQuad)(-4*u*u+4*u);n.background(255),n.specularMaterial(255);for(var d=0;d<3;d++)n.pointLight.apply(n,[1,0,.5].concat(a(c([n.width*(1-s)*2,n.TWO_PI*(d/3),i]).cartesian())));n.camera.apply(n,a(c([2*n.width,2*i,n.map(n.sin(i),-1,1,-n.QUARTER_PI,n.QUARTER_PI)]).cartesian()).concat([0,0,0,0,1,0])),n.noStroke();for(var p=1;p<=5e3;p++){var l=n.TWO_PI/5e3*p,h=i+p%2*n.PI;n.push(),n.rotateX(l*s),n.rotateY(l*s),n.rotateZ(l+h*r[p%2](h)+f(r[p%2](l))),n.cylinder(.666*n.width,10,2*(p%3+1),3),n.pop()}t&&process.env.DEV&&n.frameCount<1800&&n.save("".concat(String(n.frameCount).padStart(String(3600).length,"0"),".png"))},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},58891:function(n,t,r){r.r(t),r.d(t,{linear:function(){return e},easeInQuad:function(){return u},easeOutQuad:function(){return o},easeInOutQuad:function(){return a},easeInCubic:function(){return i},easeOutCubic:function(){return c},easeInOutCubic:function(){return f},easeInQuart:function(){return s},easeOutQuart:function(){return d},easeInOutQuart:function(){return p},easeInQuint:function(){return l},easeOutQuint:function(){return h},easeInOutQuint:function(){return w}});var e=function(n){return n},u=function(n){return n*n},o=function(n){return n*(2-n)},a=function(n){return n<.5?2*n*n:(4-2*n)*n-1},i=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},p=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},l=function(n){return n*n*n*n*n},h=function(n){return 1+--n*n*n*n*n},w=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}},function(n){n.O(0,[4035,6995,7953],(function(){return 63661,n(n.s=63661)})),n.O()}]);