"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[7809],{98500:function(n,t,r){var e=r(94035),o=r.n(e),i=r(61025);function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}new(o())((function(n){var t=n.random(90),r=0,e=0;n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.colorMode(n.HSB,100),n.background(t,80,5),n.noFill(),n.blendMode(n.SCREEN)},n.draw=function(){var o,u=n.noise(n.frameCount/400,r);n.stroke(n.map(n.tan(r),-1,1,t,t+10),80,75,e);for(var c=0;c<4;c++)n.push(),n.translate.apply(n,function(n){if(Array.isArray(n))return a(n)}(o=(0,i.ZP)(n.width/2,n.height/2,r+c*n.TWO_PI/4,n.height/2*u,!0))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(o)||function(n,t){if(n){if("string"==typeof n)return a(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(n,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n.circle(0,0,n.map(u,0,1,200,0)),n.pop();(r+=.005)>3*n.TWO_PI?(e-=.01)<0&&n.noLoop():e=n.min(e+.01,5)},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},61025:function(n,t,r){r.d(t,{Y2:function(){return e},C$:function(){return o},vy:function(){return i}});var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,e,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(r)*e,u=t+Math.sin(r)*o;return i?[a,u]:{x:a,y:u}};t.ZP=function(n,t,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(n,r,i),c=o(t,r,i);return a?[u,c]:{x:u,y:c}}}},function(n){n.O(0,[4035],(function(){return 98500,n(n.s=98500)})),n.O()}]);