"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[2209],{55528:function(n,t,e){var r=e(94035),o=e.n(r),i=(e(96995),e(61025));function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}new(o())((function(n){var t,e,r,o=n.getURLParams().render;n.setup=function(){n.pixelDensity(o?2:1),n.frameRate(30),n.createCanvas(n.windowWidth,n.windowHeight),n.background(255),n.createLoop(20,{gif:!!o&&{render:!1,open:!0},noiseRadius:1}),n.noFill(),t=n.width/10,r=n.width/2-t,e=(n.width-2*t)/125},n.draw=function(){var t,o=n.animLoop,u=o.noise2D,c=o.theta;n.background(255),n.push(),n.translate(n.width/2,n.height/2);for(var f=-r;f<=r;f+=e){n.line(f,-r,f,r),n.beginShape(),n.vertex(f,-r),n.vertex(f,-r);for(var s=12.5*e-r;s<=r;s+=12.5*e)n.curveVertex.apply(n,function(n){if(Array.isArray(n))return a(n)}(t=(0,i.ZP)(f,s+u(f,s)*e,n.TWO_PI*u(f/100,s/100)+c,e*u(s/100,f/100),!0))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(t)||function(n,t){if(n){if("string"==typeof n)return a(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(n,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());n.vertex(f,r),n.vertex(f,r),n.endShape()}n.pop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},61025:function(n,t,e){e.d(t,{Y2:function(){return r},C$:function(){return o},vy:function(){return i}});var r=function(n,t,e){return n+Math.cos(t)*e},o=function(n,t,e){return n+Math.sin(t)*e},i=function(n,t,e,r,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(e)*r,u=t+Math.sin(e)*o;return i?[a,u]:{x:a,y:u}};t.ZP=function(n,t,e,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=r(n,e,i),c=o(t,e,i);return a?[u,c]:{x:u,y:c}}}},function(n){n.O(0,[4035,6995],(function(){return 55528,n(n.s=55528)})),n.O()}]);