"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5819],{8245:function(n,t,r){var e=r(94035),o=r.n(e),u=(r(96995),r(61025)),i=r(58891),a=r(63608);function c(n){return function(n){if(Array.isArray(n))return f(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return f(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}new(o())((function(n){var t=n.getURLParams().render,r=n.random(n.random(.7),n.random(.3,1)),e=n.shuffle([n.floor(n.random(20,50)),n.floor(n.random(50,90))]);n.setup=function(){n.frameRate(60),n.noSmooth(),n.createCanvas(n.windowWidth,n.windowHeight),n.colorMode(n.HSB,1),n.background(r+.5>1?r-.5:r+.5,.5,.1),n.noStroke(),n.blendMode(n.OVERLAY),n.createLoop(360,{gif:!!t&&{render:!1,open:!0},noiseRadius:.2})},n.draw=function(){var o=n.animLoop,f=o.progress,s=o.theta,d=o.noise,h=o.noise1D,l=o.noise2D;n.stroke(r+.3*h(r),(0,i.easeOutQuad)(n.abs(d())),1,.1);var p=[];p.push([0,(n.height-n.width)/2]),p.push((0,u.ZP)(0,(n.height-n.width)/2,s*e[0],n.width,!0)),p.push((0,u.ZP)(n.width,(n.height-n.width)/2+n.width,-s*e[1],n.width,!0)),p.push([n.width,(n.height-n.width)/2+n.width]);for(var m=n.bezierPoint.apply(n,c(p.map((function(n){return n[0]}))).concat([f])),w=n.bezierPoint.apply(n,c(p.map((function(n){return n[1]}))).concat([f])),v=0;v<1;v+=.005){var b=(0,u.ZP)(m,w,360*s,500*(0,i.easeInQuart)(n.abs(l(m,w,{noiseRadius:10}))),!0);a.Z.apply(void 0,[n].concat(c(b),c(u.vy.apply(void 0,c(b).concat([n.TWO_PI*v,50*(h(m)+1)/2,50*(h(w)+1)/2,!0]))),[n.random(.05,.1),!1]))}n.frameCount%100==0&&console.info("".concat(n.floor(100*f),"%")),t||21600!==n.frameCount||(console.info("100%"),n.noLoop())},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},58891:function(n,t,r){r.r(t),r.d(t,{linear:function(){return e},easeInQuad:function(){return o},easeOutQuad:function(){return u},easeInOutQuad:function(){return i},easeInCubic:function(){return a},easeOutCubic:function(){return c},easeInOutCubic:function(){return f},easeInQuart:function(){return s},easeOutQuart:function(){return d},easeInOutQuart:function(){return h},easeInQuint:function(){return l},easeOutQuint:function(){return p},easeInOutQuint:function(){return m}});var e=function(n){return n},o=function(n){return n*n},u=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},h=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},l=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},m=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},63608:function(n,t){t.Z=function(n,t,r,e,o,u){for(var i=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],a=!(arguments.length>7&&void 0!==arguments[7])||arguments[7],c=Math.max(u,.01/n.dist(t,r,e,o)),f=0;f<1;f+=c)(0!==f||i)&&(a&&n.random()>f||!a)&&n.point(n.lerp(t,e,f),n.lerp(r,o,f))}},61025:function(n,t,r){r.d(t,{Y2:function(){return e},C$:function(){return o},vy:function(){return u}});var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},u=function(n,t,r,e,o){var u=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(r)*e,a=t+Math.sin(r)*o;return u?[i,a]:{x:i,y:a}};t.ZP=function(n,t,r,u){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=e(n,r,u),c=o(t,r,u);return i?[a,c]:{x:a,y:c}}}},function(n){n.O(0,[4035,6995],(function(){return 8245,n(n.s=8245)})),n.O()}]);