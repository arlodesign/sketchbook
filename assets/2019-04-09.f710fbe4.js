"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[9327],{37777:function(t,n,r){var e=r(94035),o=r.n(e),i=r(61025);function a(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return u(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}new(o())((function(t){var n,r=t.random(50),e=0;t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight),t.colorMode(t.HSB,100),t.noFill(),n=t.dist(0,0,t.width/2,t.height/2)},t.draw=function(){t.background(0);for(var o=0;o<t.TWO_PI;o+=t.TWO_PI/(50*t.noise(.08,.09,t.frameCount/3e3))){t.push(),t.strokeWeight(10),t.stroke(t.map(t.cos(o),-1,1,r,r+20),100,100),t.translate(t.width/2,t.height/2),t.rotate(e);var u=(0,i.ZP)(0,0,o,n,!0),c=[u[0],-u[1]];t.bezier.apply(t,a(u).concat([0,0,0,0],c)),t.pop()}for(var s=0;s<t.TWO_PI;s+=t.TWO_PI/(50*t.noise(.06,.07,t.frameCount/1e3))){t.push(),t.strokeWeight(5),t.stroke(0),t.translate(t.width/2,t.height/2),t.rotate(-e);var f=(0,i.ZP)(0,0,s,n,!0),h=[f[0],-f[1]];t.bezier.apply(t,a(f).concat([-n/2,-n/2,n/2,n/2],h)),t.pop()}e+=.001},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch")},61025:function(t,n,r){r.d(n,{Y2:function(){return e},C$:function(){return o},vy:function(){return i}});var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=t+Math.cos(r)*e,u=n+Math.sin(r)*o;return i?[a,u]:{x:a,y:u}};n.ZP=function(t,n,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(t,r,i),c=o(n,r,i);return a?[u,c]:{x:u,y:c}}}},function(t){t.O(0,[4035],(function(){return 37777,t(t.s=37777)})),t.O()}]);