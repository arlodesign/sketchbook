"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[3286],{27169:function(n,t,r){var e=r(94035),o=r.n(e),i=(r(96995),r(61025));function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var u=process.env.DEV&&!1;new(o())((function(n){var t=n.random(100/7);n.setup=function(){n.frameRate(60),u&&n.pixelDensity(1),n.createCanvas(n.windowWidth,n.windowHeight),n.background(0),n.colorMode(n.HSB,100),n.blendMode(n.SCREEN),n.strokeWeight(2),n.createLoop(60,{gif:!!u&&{render:!1,open:!0},noiseRadius:.5})},n.draw=function(){var r,e=n.animLoop,o=e.noise2D,c=e.theta;n.translate.apply(n,function(n){if(Array.isArray(n))return a(n)}(r=(0,i.ZP)(n.width/2,n.height/2,-c,o(.01,.02)*(n.width/2),!0))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(r)||function(n,t){if(n){if("string"==typeof n)return a(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(n,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());for(var s=1;s<=7;s++){var f=o(.06*s,.08*s)*n.height,d=(o(.05*s,.07*s)+1)/3,h=c+n.TWO_PI*(s/7),l=(0,i.ZP)(0,0,h,f),p=l.x,v=l.y;n.stroke(t+100/7*(s-1),50,25,50),n.line(p*d,v*d,p,v)}3600===n.frameCount&&!u&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},61025:function(n,t,r){r.d(t,{Y2:function(){return e},C$:function(){return o},vy:function(){return i}});var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,e,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(r)*e,u=t+Math.sin(r)*o;return i?[a,u]:{x:a,y:u}};t.ZP=function(n,t,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(n,r,i),c=o(t,r,i);return a?[u,c]:{x:u,y:c}}}},function(n){n.O(0,[4035,6995],(function(){return 27169,n(n.s=27169)})),n.O()}]);