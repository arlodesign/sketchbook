"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[2932],{17798:function(n,t,r){var e=r(94035),u=r.n(e),o=(r(96995),r(61025)),i=r(58891);function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function c(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}new(u())((function(n){var t,r,e,u,f=n.getURLParams().render,s=10*n.sqrt(3),h=[],l=function(){function t(n,r){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=r}var r,e;return r=t,(e=[{key:"z",get:function(){return n.abs(n.animLoop.noise2D(this.x,this.y))}},{key:"draw",value:function(){n.push(),n.fill(255*this.z),n.translate(this.x,this.y),n.scale(n.map((0,i.easeInOutQuint)(this.z),0,1,.75,2)),n.beginShape();for(var t=0;t<n.TWO_PI;t+=n.TWO_PI/6)n.vertex.apply(n,function(n){if(Array.isArray(n))return a(n)}(r=(0,o.ZP)(0,0,t+n.TWO_PI/12,10,!0))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(r)||function(n,t){if(n){if("string"==typeof n)return a(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(n,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var r;n.endShape(),n.pop()}}])&&c(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();n.setup=function(){n.pixelDensity(1),n.frameRate(30),n.createCanvas(n.windowWidth,n.windowHeight),n.background(255),n.createLoop(30,{gif:!!f&&{render:!1,open:!0},noiseRadius:1.5}),n.noStroke(),t=n.floor((n.width-s/2)/s),r=n.floor((n.width-5)/15),e=t*s+s/2,u=15*r+5;for(var o=0;o<t;o++)for(var i=0;i<r;i++){var a=o*s+(i%2?s:s/2)+(n.width-e)/2,c=20*i*.75+10+(n.height-u)/2;h.push(new l(a,c))}},n.draw=function(){n.background(0),h.sort((function(n,t){return n.z-t.z})).forEach((function(n){return n.draw()}))},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},58891:function(n,t,r){r.r(t),r.d(t,{linear:function(){return e},easeInQuad:function(){return u},easeOutQuad:function(){return o},easeInOutQuad:function(){return i},easeInCubic:function(){return a},easeOutCubic:function(){return c},easeInOutCubic:function(){return f},easeInQuart:function(){return s},easeOutQuart:function(){return h},easeInOutQuart:function(){return l},easeInQuint:function(){return d},easeOutQuint:function(){return p},easeInOutQuint:function(){return y}});var e=function(n){return n},u=function(n){return n*n},o=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},h=function(n){return 1- --n*n*n*n},l=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},d=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},y=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},61025:function(n,t,r){r.d(t,{Y2:function(){return e},C$:function(){return u},vy:function(){return o}});var e=function(n,t,r){return n+Math.cos(t)*r},u=function(n,t,r){return n+Math.sin(t)*r},o=function(n,t,r,e,u){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(r)*e,a=t+Math.sin(r)*u;return o?[i,a]:{x:i,y:a}};t.ZP=function(n,t,r,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=e(n,r,o),c=u(t,r,o);return i?[a,c]:{x:a,y:c}}}},function(n){n.O(0,[4035,6995],(function(){return 17798,n(n.s=17798)})),n.O()}]);