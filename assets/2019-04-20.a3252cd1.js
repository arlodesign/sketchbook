"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[6246],{85123:function(n,t,r){var e=r(94035),o=r.n(e),i=r(61025);function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}new(o())((function(n){var t=!1,r=0;n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.background(255),n.strokeWeight(2),n.noFill()},n.draw=function(){n.translate(n.width/2,n.map(n.sin(n.frameCount/1e3+n.HALF_PI),-1,1,-n.width/2,n.height-200)),t=n.frameCount%60==0?!t:t,n.stroke(t?0:255),n.beginShape();for(var e=0;e<n.PI;e+=.01){var o=(0,i.ZP)(0,0,e,n.map(n.noise(e,r),0,1,n.width/2,n.width),!0);n.curveVertex.apply(n,function(n){if(Array.isArray(n))return a(n)}(u=o)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(u)||function(n,t){if(n){if("string"==typeof n)return a(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(n,t):void 0}}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}var u;n.endShape(),r+=.001,n.frameCount/1e3>n.PI&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Be patient. This one starts drawing off-canvas."},61025:function(n,t,r){r.d(t,{Y2:function(){return e},C$:function(){return o},vy:function(){return i}});var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,e,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(r)*e,u=t+Math.sin(r)*o;return i?[a,u]:{x:a,y:u}};t.ZP=function(n,t,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(n,r,i),c=o(t,r,i);return a?[u,c]:{x:u,y:c}}}},function(n){n.O(0,[4035],(function(){return 85123,n(n.s=85123)})),n.O()}]);