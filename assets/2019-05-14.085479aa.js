"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[3965],{26604:function(n,t,o){var r=o(94035),e=o.n(r),i=o(63608),a=o(61025);function c(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return u(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?u(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=n[o];return r}new(e())((function(n){var t,o=n.random(50),r=0,e=[];n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),e=[n.width/3,n.height/3],t=n.dist.apply(n,c(e).concat([n.width,n.height])),n.colorMode(n.HSB,100),n.background(o,10,40)},n.draw=function(){n.strokeWeight(2),n.stroke(n.map(n.sin(r),-1,1,o+50,o),30,80),i.Z.apply(void 0,[n].concat(c(e),c(a.ZP.apply(void 0,c(e).concat([r,t/2,!0]))),[n.noise(n.frameCount/50,t,r)/20,!1])),n.stroke(n.map(n.sin(r),-1,1,o,o+50),50,80),i.Z.apply(void 0,[n].concat(c(e),c(a.ZP.apply(void 0,c(e).concat([r,t,!0]))),[n.noise(n.frameCount/10,t,r)/10,!1])),(r+=n.TWO_PI/2e3)>n.TWO_PI&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},63608:function(n,t){t.Z=function(n,t,o,r,e,i){for(var a=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],c=!(arguments.length>7&&void 0!==arguments[7])||arguments[7],u=Math.max(i,.01/n.dist(t,o,r,e)),f=0;f<1;f+=u)(0!==f||a)&&(c&&n.random()>f||!c)&&n.point(n.lerp(t,r,f),n.lerp(o,e,f))}},61025:function(n,t,o){o.d(t,{Y2:function(){return r},C$:function(){return e},vy:function(){return i}});var r=function(n,t,o){return n+Math.cos(t)*o},e=function(n,t,o){return n+Math.sin(t)*o},i=function(n,t,o,r,e){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(o)*r,c=t+Math.sin(o)*e;return i?[a,c]:{x:a,y:c}};t.ZP=function(n,t,o,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=r(n,o,i),u=e(t,o,i);return a?[c,u]:{x:c,y:u}}}},function(n){n.O(0,[4035],(function(){return 26604,n(n.s=26604)})),n.O()}]);