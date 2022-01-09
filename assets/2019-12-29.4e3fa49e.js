"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[4748],{49044:function(n,t,e){var r=e(94035),i=e.n(r),u=e(58891);function o(n){return function(n){if(Array.isArray(n))return a(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return a(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function s(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}e(96995),new(i())((function(n){var t=n.getURLParams().render,e=60,r=[],i=function(){function t(e,r){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=r,this.hue=n.random()}var r,i;return r=t,(i=[{key:"noise",value:function(t,e){return[t+30*n.animLoop.noise2D(t,e),e+30*n.animLoop.noise2D(e,t)]}},{key:"setCoordinates",value:function(){this.tl=this.noise(this.x,this.y),this.tr=this.noise(this.x+e,this.y),this.br=this.noise(this.x+e,this.y+e),this.bl=this.noise(this.x,this.y+e)}},{key:"draw",value:function(){this.setCoordinates();var t=n.map((0,u.easeInOutQuint)((n.animLoop.noise2D(this.x/100,this.y/100)+1)/2),0,1,.1,.8);return n.fill(this.hue,.6,t),n.stroke(this.hue,.3,t/3),n.quad.apply(n,o(this.tl).concat(o(this.tr),o(this.br),o(this.bl)))}}])&&s(r.prototype,i),Object.defineProperty(r,"prototype",{writable:!1}),t}();n.setup=function(){t&&n.pixelDensity(1),n.createCanvas(n.windowWidth,n.windowHeight),n.background(255),n.colorMode(n.HSL,1),n.strokeWeight(2),n.strokeJoin(n.ROUND),n.createLoop(20,{gif:!!t&&{render:!1,open:!0},noiseRadius:.4});for(var u=-30;u<n.width+e;u+=e)for(var o=-30;o<n.height+e;o+=e)r.push(new i(u,o))},n.draw=function(){r.forEach((function(n){return n.draw()}))},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Not quite Sol LeWitt, but an attempt."},58891:function(n,t,e){e.r(t),e.d(t,{linear:function(){return r},easeInQuad:function(){return i},easeOutQuad:function(){return u},easeInOutQuad:function(){return o},easeInCubic:function(){return a},easeOutCubic:function(){return s},easeInOutCubic:function(){return c},easeInQuart:function(){return f},easeOutQuart:function(){return h},easeInOutQuart:function(){return l},easeInQuint:function(){return d},easeOutQuint:function(){return p},easeInOutQuint:function(){return y}});var r=function(n){return n},i=function(n){return n*n},u=function(n){return n*(2-n)},o=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},s=function(n){return--n*n*n+1},c=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},h=function(n){return 1- --n*n*n*n},l=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},d=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},y=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}},function(n){n.O(0,[4035,6995],(function(){return 49044,n(n.s=49044)})),n.O()}]);