"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[2900],{26903:function(n,t,r){var e=r(94035),o=r.n(e),a=r(61025);function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}new(o())((function(n){var t=[],r=[];n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight,n.WEBGL),(t=Array.from(Array(10),(function(){return{a:n.random(n.TWO_PI),d:n.random()}}))).sort((function(n,t){return n.a-t.a})),r=[t],n.noFill()},n.draw=function(){n.background(0),n.camera(200*n.sin(n.frameCount/200),200*n.cos(n.frameCount/200),500*n.map(n.cos(n.frameCount/1e3),-1,1,0,1),0,0,0,0,1,0);for(var e=function(t){var e=r[t];n.stroke(255,n.map(t,0,r.length,255,0)),n.rotateX(n.map(t,0,r.length,0,n.HALF_PI)),n.beginShape(),e.forEach((function(r){return n.vertex.apply(n,function(n){if(Array.isArray(n))return i(n)}(e=(0,a.ZP)(0,0,r.a,r.d+10*t,!0))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(e)||function(n,t){if(n){if("string"==typeof n)return i(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(n,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var e})),n.endShape(n.CLOSE)},o=r.length-1;o>=0;o--)e(o);r.unshift(t.map((function(t){var r=t.a,e=t.d;return{a:n.constrain(r*n.map(n.noise(r,n.frameCount/500),0,1,.1,1.9),0,n.TWO_PI),d:e*n.noise(e,n.frameCount/500)*10}}))),r.length>n.height/20&&r.pop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},61025:function(n,t,r){r.d(t,{Y2:function(){return e},C$:function(){return o},vy:function(){return a}});var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},a=function(n,t,r,e,o){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(r)*e,u=t+Math.sin(r)*o;return a?[i,u]:{x:i,y:u}};t.ZP=function(n,t,r,a){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(n,r,a),c=o(t,r,a);return i?[u,c]:{x:u,y:c}}}},function(n){n.O(0,[4035],(function(){return 26903,n(n.s=26903)})),n.O()}]);