"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[7558],{55570:function(n,t,r){var e=r(94035),u=r.n(e),o=r(58891),i=r(45456),a=r.n(i),c=r(61025);function f(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}window.p5=u(),a()(),new(u())((function(n){var t=n.getURLParams().render;n.setup=function(){t&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(n.windowWidth,n.windowHeight),n.createLoop(49,{gif:!!t&&{render:!1,open:!0}}),n.rectMode(n.CENTER),n.noStroke(),n.colorMode(n.HSB,2)},n.draw=function(){var t,r=n.animLoop,e=r.theta,u=r.noise2D;n.blendMode(n.BLEND),n.background(0),n.blendMode(n.DIFFERENCE);for(var i=5;i<n.width;i+=10)for(var a=5;a<n.height;a+=10)n.push(),n.fill(u(i,a)+1,1,2),n.translate(i,a),n.square(0,0,13.33*(0,o.easeInQuad)(n.map(n.tan(n.dist.apply(n,[i,a].concat(function(n){if(Array.isArray(n))return f(n)}(t=(0,c.ZP)(n.width/2,n.height/2,e,100,!0))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(t)||function(n,t){if(n){if("string"==typeof n)return f(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(n,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))+e),-1,1,0,1,!0)),5),n.pop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},58891:function(n,t,r){r.r(t),r.d(t,{linear:function(){return e},easeInQuad:function(){return u},easeOutQuad:function(){return o},easeInOutQuad:function(){return i},easeInCubic:function(){return a},easeOutCubic:function(){return c},easeInOutCubic:function(){return f},easeInQuart:function(){return s},easeOutQuart:function(){return d},easeInOutQuart:function(){return l},easeInQuint:function(){return h},easeOutQuint:function(){return p},easeInOutQuint:function(){return w}});var e=function(n){return n},u=function(n){return n*n},o=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},l=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},h=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},w=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},61025:function(n,t,r){r.d(t,{Y2:function(){return e},C$:function(){return u},vy:function(){return o}});var e=function(n,t,r){return n+Math.cos(t)*r},u=function(n,t,r){return n+Math.sin(t)*r},o=function(n,t,r,e,u){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(r)*e,a=t+Math.sin(r)*u;return o?[i,a]:{x:i,y:a}};t.ZP=function(n,t,r,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=e(n,r,o),c=u(t,r,o);return i?[a,c]:{x:a,y:c}}}},function(n){n.O(0,[4035,5456],(function(){return 55570,n(n.s=55570)})),n.O()}]);