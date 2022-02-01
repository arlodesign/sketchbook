"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5275],{52910:function(n,t,r){var e=r(94035),a=r.n(e),o=r(45456),u=r.n(o),i=r(58891),c=r(7953);function s(n){return function(n){if(Array.isArray(n))return f(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return f(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function l(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}window.p5=a(),u()();var p=c.c7.spherical;new(a())((function(n){var t,r,e,a=n.getURLParams().render,o=30*(a?60:1),u=a?1:30,c=50,f=n.random(.9),h=function(){function t(n,r,e){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=r,this.z=e}var r,e;return r=t,(e=[{key:"size",get:function(){var t=this.x,r=this.y,e=this.z,a=n.animLoop,o=a.theta,u=a.progress,f=(0,i.easeInOutCubic)(-4*u*u+4*u);return n.sin(n.dist.apply(n,[t,r,e].concat(s(p([c*f,2*-o,o]).cartesian()))))>0?1:0}},{key:"draw",value:function(){n.push(),n.translate(this.x,this.y,this.z),n.box(this.size),n.pop()}}])&&l(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}(),d=[];n.setup=function(){n.pixelDensity(1),n.frameRate(u),n.createCanvas(a?1080:n.floor(270),a?1080:n.floor(270),n.WEBGL),n.colorMode(n.HSB,1),a?n.smooth():n.noSmooth(),n.createLoop(o,{noiseRadius:.1});for(var i=0;i<c;i++)for(var s=0;s<c;s++)for(var f=0;f<c;f++)n.dist(25,25,25,i,s,f)<=25&&d.push(new h(i-25,s-25,f-25));t=Object.assign({cameraDistance:c*(a?8:2)},n.getURLParams()),r=n.createSlider(c*(a?8:2),c*(a?40:10),parseFloat(t.cameraDistance,10)),e=n.createA("?","Render")},n.draw=function(){var t=n.animLoop,i=t.progress,l=t.theta,h=t.noise1D;t.noise2D,n.background(f,.5,.5),n.camera.apply(n,s(p([r.value(),10,l]).cartesian()).concat([0,0,0,0,1,0])),n.pointLight.apply(n,[(f+1)%1,.5,1].concat(s(p([c,l,2*l]).cartesian()))),n.specularMaterial(n.map(h(.05),-1,1,f-.1,f+.1),.5,.8),n.noStroke(),n.push(),n.scale(n.width/c/3),d.forEach((function(n){return n.draw()})),n.pop(),e.attribute("href","?"+new URLSearchParams({cameraDistance:r.value(),render:!0}).toString()),a&&n.frameCount<=o*u&&(n.frameCount%100==0&&console.info("".concat(n.floor(100*i),"%")),n.save("".concat(String(n.frameCount).padStart(String(o*u).length,"0"),".png")))}}),"sketch")},58891:function(n,t,r){r.r(t),r.d(t,{linear:function(){return e},easeInQuad:function(){return a},easeOutQuad:function(){return o},easeInOutQuad:function(){return u},easeInCubic:function(){return i},easeOutCubic:function(){return c},easeInOutCubic:function(){return s},easeInQuart:function(){return f},easeOutQuart:function(){return l},easeInOutQuart:function(){return p},easeInQuint:function(){return h},easeOutQuint:function(){return d},easeInOutQuint:function(){return m}});var e=function(n){return n},a=function(n){return n*n},o=function(n){return n*(2-n)},u=function(n){return n<.5?2*n*n:(4-2*n)*n-1},i=function(n){return n*n*n},c=function(n){return--n*n*n+1},s=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},l=function(n){return 1- --n*n*n*n},p=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},h=function(n){return n*n*n*n*n},d=function(n){return 1+--n*n*n*n*n},m=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}},function(n){n.O(0,[4035,5456,7953],(function(){return 52910,n(n.s=52910)})),n.O()}]);