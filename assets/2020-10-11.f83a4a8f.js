"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[942],{87154:function(n,t,e){var r=e(94035),o=e.n(r),a=(e(96995),e(58891));function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function i(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var c=e(7953).c7.spherical;new(o())((function(n){var t,e,r,o=n.getURLParams().render,s=30*(o?60:1),f=o?1:30,l=20,p=n.random(.9),h=function(){function t(n,e,r){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=e,this.z=r}var e,r;return e=t,(r=[{key:"size",get:function(){var t=this.x,e=this.y,r=this.z,o=n.animLoop.progress,u=(0,a.easeInOutCubic)(-4*o*o+4*o),i=n.sin(n.dist(t,e,r,n.lerp(-20,l,n.abs(n.animLoop.noise1D(t/100)*u)),n.lerp(-20,l,n.abs(n.animLoop.noise1D(e/100)*u)),n.lerp(-20,l,n.abs(n.animLoop.noise1D(r/100)*u))));return(0,a.easeInOutQuint)((0,a.easeInOutQuint)(n.abs(i)))}},{key:"draw",value:function(){n.push(),n.translate(this.x,this.y,this.z),n.box(this.size),n.pop()}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),m=[];n.setup=function(){n.pixelDensity(1),n.frameRate(f),n.createCanvas(o?1080:n.floor(270),o?1080:n.floor(270),n.WEBGL),n.colorMode(n.HSB,1),o?n.smooth():n.noSmooth(),n.createLoop(s,{noiseRadius:.1});for(var a=0;a<l;a++)for(var u=0;u<l;u++)for(var i=0;i<l;i++)m.push(new h(a-10,u-10,i-10));t=Object.assign({cameraDistance:l*(o?32:8)},n.getURLParams()),e=n.createSlider(l*(o?12:3),l*(o?40:10),parseFloat(t.cameraDistance,10)),r=n.createA("?","Render")},n.draw=function(){var t,a=n.animLoop,i=a.progress,h=a.theta,b=a.noise1D;a.noise2D,n.background(p,.5,.5),n.camera.apply(n,(t=c([e.value(),10,h]).cartesian(),function(n){if(Array.isArray(n))return u(n)}(t)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(t)||function(n,t){if(n){if("string"==typeof n)return u(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(n,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([0,0,0,0,1,0])),n.pointLight(0,0,1,0,0,1),n.specularMaterial(n.map(b(.05),-1,1,p-.1,p+.1),.5,.8),n.noStroke(),n.push(),n.scale(n.width/l/3),m.forEach((function(n){return n.draw()})),n.pop(),r.attribute("href","?"+new URLSearchParams({cameraDistance:e.value(),render:!0}).toString()),o&&n.frameCount<=s*f&&(n.frameCount%100==0&&console.info("".concat(n.floor(100*i),"%")),n.save("".concat(String(n.frameCount).padStart(String(s*f).length,"0"),".png")))}}),"sketch")},58891:function(n,t,e){e.r(t),e.d(t,{linear:function(){return r},easeInQuad:function(){return o},easeOutQuad:function(){return a},easeInOutQuad:function(){return u},easeInCubic:function(){return i},easeOutCubic:function(){return c},easeInOutCubic:function(){return s},easeInQuart:function(){return f},easeOutQuart:function(){return l},easeInOutQuart:function(){return p},easeInQuint:function(){return h},easeOutQuint:function(){return m},easeInOutQuint:function(){return b}});var r=function(n){return n},o=function(n){return n*n},a=function(n){return n*(2-n)},u=function(n){return n<.5?2*n*n:(4-2*n)*n-1},i=function(n){return n*n*n},c=function(n){return--n*n*n+1},s=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},l=function(n){return 1- --n*n*n*n},p=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},h=function(n){return n*n*n*n*n},m=function(n){return 1+--n*n*n*n*n},b=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}},function(n){n.O(0,[4035,6995,7953],(function(){return 87154,n(n.s=87154)})),n.O()}]);