"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[3732],{85049:function(n,t,r){var e=r(94035),u=r.n(e),o=r(45456),i=r.n(o),a=r(61025),c=r(63608),f=r(58891);function s(n){return function(n){if(Array.isArray(n))return d(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return d(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}window.p5=u(),i()(),new(u())((function(n){var t,r=n.getURLParams().draft,e=n.random(n.TWO_PI),u=n.random(n.TWO_PI),o=r?30:60;n.setup=function(){n.frameRate(o),n.pixelDensity(r?1:2),n.createCanvas(n.windowWidth,n.windowHeight),n.createLoop(360,{noiseRadius:2}),n.background(32),n.colorMode(n.HSL,n.TWO_PI),n.blendMode(n.SOFT_LIGHT),t=n.width/2},n.draw=function(){var r=n.animLoop,i=r.noise,d=r.theta,l=r.progress;n.translate.apply(n,s((0,a.ZP)(n.width/2,n.height/2,d+u,n.width/2*i(),!0))),n.stroke(e,d,n.map(i(),-1,1,n.HALF_PI,n.TWO_PI),d),c.Z.apply(void 0,[n].concat(s((0,a.ZP)(0,0,13*d-u,t/2,!0)),s((0,a.ZP)(0,0,13*d+n.PI-u,t/2,!0)),[(0,f.easeInQuart)(l)])),n.frameCount===360*o&&n.noLoop(),n.frameCount%100==0&&console.log("".concat(n.frameCount," / ").concat(360*o))},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},58891:function(n,t,r){r.r(t),r.d(t,{linear:function(){return e},easeInQuad:function(){return u},easeOutQuad:function(){return o},easeInOutQuad:function(){return i},easeInCubic:function(){return a},easeOutCubic:function(){return c},easeInOutCubic:function(){return f},easeInQuart:function(){return s},easeOutQuart:function(){return d},easeInOutQuart:function(){return l},easeInQuint:function(){return h},easeOutQuint:function(){return p},easeInOutQuint:function(){return m}});var e=function(n){return n},u=function(n){return n*n},o=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},l=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},h=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},m=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},63608:function(n,t){t.Z=function(n,t,r,e,u,o){for(var i=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],a=!(arguments.length>7&&void 0!==arguments[7])||arguments[7],c=Math.max(o,.01/n.dist(t,r,e,u)),f=0;f<1;f+=c)(0!==f||i)&&(a&&n.random()>f||!a)&&n.point(n.lerp(t,e,f),n.lerp(r,u,f))}},61025:function(n,t,r){r.d(t,{Y2:function(){return e},C$:function(){return u},vy:function(){return o}});var e=function(n,t,r){return n+Math.cos(t)*r},u=function(n,t,r){return n+Math.sin(t)*r},o=function(n,t,r,e,u){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(r)*e,a=t+Math.sin(r)*u;return o?[i,a]:{x:i,y:a}};t.ZP=function(n,t,r,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=e(n,r,o),c=u(t,r,o);return i?[a,c]:{x:a,y:c}}}},function(n){n.O(0,[4035,5456],(function(){return 85049,n(n.s=85049)})),n.O()}]);