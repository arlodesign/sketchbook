"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[9980],{81342:function(n,t,e){var r=e(94035),o=e.n(r),i=(e(96995),e(61025));function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var u=process.env.DEV&&!1;new(o())((function(n){n.setup=function(){n.frameRate(30),u&&n.pixelDensity(1),n.createCanvas(n.windowWidth,n.windowHeight),n.background(255),n.noFill(),n.blendMode(n.MULTIPLY),n.createLoop(120,{gif:!!u&&{render:!1,open:!0}})},n.draw=function(){var t=n.animLoop,e=t.noise1D,r=t.noise2D,o=t.theta;["cyan","magenta","yellow"].forEach((function(t,u){var c,s=n.color(t);s.setAlpha(16),n.stroke(s),n.push(),n.translate.apply(n,function(n){if(Array.isArray(n))return a(n)}(c=(0,i.ZP)(n.width/3,n.height/2,o+u*(n.TWO_PI/3),n.map(n.cos(o+u*(n.TWO_PI/3)),-1,1,n.height/2,0,!0),!0))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(c)||function(n,t){if(n){if("string"==typeof n)return a(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(n,t):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n.rotate(n.map(e((u+1)/100,{radius:.1}),-1,1,n.TWO_PI,0));var h=n.map(r(t.length,u+1,{radius:2}),-1,1,n.width/2,n.width),f=n.map(r(u+1,t.length,{radius:2}),-1,1,n.height/4,n.height/8);n.ellipse(0,0,h,f),n.pop()})),!u&&3600===n.frameCount&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},61025:function(n,t,e){e.d(t,{Y2:function(){return r},C$:function(){return o},vy:function(){return i}});var r=function(n,t,e){return n+Math.cos(t)*e},o=function(n,t,e){return n+Math.sin(t)*e},i=function(n,t,e,r,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(e)*r,u=t+Math.sin(e)*o;return i?[a,u]:{x:a,y:u}};t.ZP=function(n,t,e,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=r(n,e,i),c=o(t,e,i);return a?[u,c]:{x:u,y:c}}}},function(n){n.O(0,[4035,6995],(function(){return 81342,n(n.s=81342)})),n.O()}]);