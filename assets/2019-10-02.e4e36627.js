"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[6922],{28864:function(n,t,r){var e=r(94035),u=r.n(e),o=r(7953),i=r(58891),a=r(45456),c=r.n(a);function s(n){return function(n){if(Array.isArray(n))return f(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return f(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}window.p5=u(),c()();var d=process.env.DEV&&!1;new(u())((function(n){var t=n.random();function r(r,e){var u=n.animLoop,a=u.theta,c=(u.noise1D,o.c7.spherical([n.width/2*(0,i.easeInOutQuad)(n.sin(a)),r,e]).cartesian());n.push(),n.specularMaterial(t,.5,.8),n.translate.apply(n,s(c)),n.sphere(n.map((0,i.easeInOutQuad)(n.sin(a)),0,1,n.width/10,n.width/5,!0)),n.pop()}n.setup=function(){d&&n.frameRate(30),n.createCanvas(n.windowWidth,n.windowHeight,n.WEBGL),n.colorMode(n.HSB,1),n.createLoop(49,{gif:!!d&&{render:!1,open:!0},noiseRadius:.1})},n.draw=function(){var t=n.animLoop,e=t.theta,u=(t.noise1D,500*(0,i.easeInOutQuad)(n.abs(n.sin(e))));n.background(255),n.fill(255),n.noStroke(),n.pointLight(0,0,1,0,0,3*-n.width),n.pointLight(0,0,.5,0,0,3*n.width);var a=o.c7.spherical([2*n.width,0,n.PI]);n.camera.apply(n,s(a.cartesian()).concat([0,0,0,0,1,0])),n.rotateX(n.HALF_PI),n.rotateY(2*e),n.rotateZ(e);for(var c=0,f=0;f<n.PI;f+=n.PI/u)r(c,f),c+=n.QUARTER_PI/4*n.cos(e)},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},58891:function(n,t,r){r.r(t),r.d(t,{linear:function(){return e},easeInQuad:function(){return u},easeOutQuad:function(){return o},easeInOutQuad:function(){return i},easeInCubic:function(){return a},easeOutCubic:function(){return c},easeInOutCubic:function(){return s},easeInQuart:function(){return f},easeOutQuart:function(){return d},easeInOutQuart:function(){return p},easeInQuint:function(){return l},easeOutQuint:function(){return h},easeInOutQuint:function(){return w}});var e=function(n){return n},u=function(n){return n*n},o=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},s=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},p=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},l=function(n){return n*n*n*n*n},h=function(n){return 1+--n*n*n*n*n},w=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}},function(n){n.O(0,[4035,5456,7953],(function(){return 28864,n(n.s=28864)})),n.O()}]);