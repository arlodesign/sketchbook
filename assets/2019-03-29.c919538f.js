"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[6844],{85801:function(t,n,r){var e=r(94035),i=r.n(e),o=r(61025);function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}new(i())((function(t){var n,r,e=t.random(.05,.1),i=e/t.TWO_PI,u=.1*e/t.TWO_PI,c=0,s=t.PI;t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight),t.background(0),n=t.createVector(t.randomGaussian(t.width/2,t.width/10),t.randomGaussian(t.height/2,t.height/10)),r=t.min(t.dist(n.x,n.y,t.width,t.height),t.dist(n.x,n.y,0,0),t.dist(n.x,n.y,0,t.height),t.dist(n.x,n.y,t.width,0))},t.draw=function(){for(var e=[t.width/2,t.map(t.sin(c),-1,1,.25*t.height,.75*t.height)],h=o.ZP.apply(void 0,e.concat([s,t.width/2*t.noise(.001,.002,t.frameCount/1e3)])),d=t.map(t.dist(h.x,h.y,n.x,n.y),0,r,1,50),f=0;f<t.TWO_PI;f+=.1/t.TWO_PI)t.stroke(255,t.map(d,1,50,10,.5,!0)),t.point.apply(t,function(t){if(Array.isArray(t))return a(t)}(y=(0,o.ZP)(h.x,h.y,f,t.randomGaussian(1,d),!0))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(y)||function(t,n){if(t){if("string"==typeof t)return a(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,n):void 0}}(y)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var y;s+=u,(c+=i)>t.TWO_PI&&(c=0),s>2*t.TWO_PI&&t.noLoop()},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch")},61025:function(t,n,r){r.d(n,{Y2:function(){return e},C$:function(){return i},vy:function(){return o}});var e=function(t,n,r){return t+Math.cos(n)*r},i=function(t,n,r){return t+Math.sin(n)*r},o=function(t,n,r,e,i){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=t+Math.cos(r)*e,u=n+Math.sin(r)*i;return o?[a,u]:{x:a,y:u}};n.ZP=function(t,n,r,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(t,r,o),c=i(n,r,o);return a?[u,c]:{x:u,y:c}}}},function(t){t.O(0,[4035],(function(){return 85801,t(t.s=85801)})),t.O()}]);