"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[7640],{62412:function(n,t,e){var r=e(94035),o=e.n(r),a=e(61025);function i(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return u(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}new(o())((function(n){var t=n.random(70),e=[];n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.noFill(),n.stroke(255),n.colorMode(n.HSB,100);for(var t=Array.from(Array(3),(function(){return{a:n.random(n.TWO_PI),d:n.random(n.height),aSpeed:n.random(.005,.01)*n.random([-1,1])}})),r=function(n){e=e.concat(t.map((function(t){return Object.assign({},t,{a:t.a+n})})))},o=0;o<n.TWO_PI;o+=n.TWO_PI/50)r(o)},n.draw=function(){n.background(0),n.beginShape(),n.curveVertex.apply(n,i((0,a.ZP)(n.width/2,n.height/2,e[e.length-3].a,e[e.length-3].d*n.noise(e[e.length-3].d,e[e.length-3].a,n.frameCount/400),!0))),n.curveVertex.apply(n,i((0,a.ZP)(n.width/2,n.height/2,e[e.length-2].a,e[e.length-2].d*n.noise(e[e.length-2].d,e[e.length-2].a,n.frameCount/400),!0))),n.curveVertex.apply(n,i((0,a.ZP)(n.width/2,n.height/2,e[e.length-1].a,e[e.length-1].d*n.noise(e[e.length-1].d,e[e.length-1].a,n.frameCount/400),!0))),e.forEach((function(t,r){var o=t.a,u=t.d,c=t.aSpeed;n.curveVertex.apply(n,i((0,a.ZP)(n.width/2,n.height/2,o,u*n.noise(u,o,n.frameCount/400),!0))),e[r].a+=c})),n.endShape(),n.push(),n.blendMode(n.MULTIPLY);for(var r=0;r<n.width;r+=60)for(var o=0;o<n.height;o+=60)n.fill(n.map(n.noise(r+1,o+1,n.frameCount/10),0,1,t,t+30),100,100,50),n.rect(r-20,o-20,80,80);n.pop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},61025:function(n,t,e){e.d(t,{Y2:function(){return r},C$:function(){return o},vy:function(){return a}});var r=function(n,t,e){return n+Math.cos(t)*e},o=function(n,t,e){return n+Math.sin(t)*e},a=function(n,t,e,r,o){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(e)*r,u=t+Math.sin(e)*o;return a?[i,u]:{x:i,y:u}};t.ZP=function(n,t,e,a){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=r(n,e,a),c=o(t,e,a);return i?[u,c]:{x:u,y:c}}}},function(n){n.O(0,[4035],(function(){return 62412,n(n.s=62412)})),n.O()}]);