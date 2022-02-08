"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[8886],{20393:function(n,t,e){var r=e(94035),u=e.n(r),o=e(45456),a=e.n(o),i=e(58891),c=e(61025),f=e(88455);function s(n){return function(n){if(Array.isArray(n))return l(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return l(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function h(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function d(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?h(Object(e),!0).forEach((function(t){p(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}window.p5=u(),a()(),new(u())((function(n){var t,e,r,u="true"===n.getURLParams().render,o=(n.windowHeight,n.windowHeight,60*(u?12:1)),a=~~(u?5:60),l=o*a;function h(){var n={hue:e.value()};r.attribute("href","?"+new URLSearchParams(d(d({},n),{},{render:!u})).toString()),window.history.replaceState(null,document.title,"?"+new URLSearchParams(d(d({},n),{},{render:u})).toString())}n.setup=function(){n.pixelDensity(2),n.frameRate(a),n.createCanvas(n.windowWidth,n.windowWidth),n.createLoop(o,{noiseRadius:.5}),t=Object.assign({hue:n.random()},n.getURLParams()),u||n.noSmooth(),(e=n.createSlider(.1,.9,parseFloat(t.hue,10),.01)).changed(h),r=n.createA("?",u?"Draft":"Render"),h(),n.colorMode(n.HSB,1),n.background(e.value(),.2,.7)},n.draw=function(){var t=n.animLoop,r=t.progress,o=t.theta,a=(t.noise,t.noise1D),h=t.noise2D,d=(0,f.Z)(r);n.fill(e.value()+.1*a(1),(0,f.Z)(r,7),(0,f.Z)(r,10),.05),n.noStroke(),n.blendMode(n.HARD_LIGHT),n.translate(n.width/2,n.height/2);var p=[(0,c.ZP)(0,0,o,n.lerp(0,n.width,d*(0,i.easeInOutQuad)(Math.abs(h(0,.1)))),!0),(0,c.ZP)(0,0,o+n.TWO_PI/5*1,n.lerp(0,n.width,d*(0,i.easeInOutQuad)(Math.abs(h(.2,.3)))),!0),(0,c.ZP)(0,0,o+n.TWO_PI/5*2,n.lerp(0,n.width,d*(0,i.easeInOutQuad)(Math.abs(h(.4,.5)))),!0),(0,c.ZP)(0,0,o+n.TWO_PI/5*3,n.lerp(0,n.width,d*(0,i.easeInOutQuad)(Math.abs(h(.6,.7)))),!0),(0,c.ZP)(0,0,o+n.TWO_PI/5*4,n.lerp(0,n.width,d*(0,i.easeInOutQuad)(Math.abs(h(.8,.9)))),!0)];n.beginShape(),p.forEach((function(t){return n.curveVertex.apply(n,s(t))})),n.curveVertex.apply(n,s(p[0])),n.curveVertex.apply(n,s(p[1])),n.curveVertex.apply(n,s(p[2])),n.endShape(),n.frameCount%100==0&&console.info("".concat(n.ceil(100*r),"% | ").concat(n.frameCount,"/").concat(l)),u&&n.save("".concat(String(n.frameCount).padStart(String(l).length,"0"),".png")),n.frameCount===l&&n.noLoop()}}),"sketch")},58891:function(n,t,e){e.r(t),e.d(t,{linear:function(){return r},easeInQuad:function(){return u},easeOutQuad:function(){return o},easeInOutQuad:function(){return a},easeInCubic:function(){return i},easeOutCubic:function(){return c},easeInOutCubic:function(){return f},easeInQuart:function(){return s},easeOutQuart:function(){return l},easeInOutQuart:function(){return h},easeInQuint:function(){return d},easeOutQuint:function(){return p},easeInOutQuint:function(){return b}});var r=function(n){return n},u=function(n){return n*n},o=function(n){return n*(2-n)},a=function(n){return n<.5?2*n*n:(4-2*n)*n-1},i=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},l=function(n){return 1- --n*n*n*n},h=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},d=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},b=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},61025:function(n,t,e){e.d(t,{Y2:function(){return r},C$:function(){return u},vy:function(){return o}});var r=function(n,t,e){return n+Math.cos(t)*e},u=function(n,t,e){return n+Math.sin(t)*e},o=function(n,t,e,r,u){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(e)*r,i=t+Math.sin(e)*u;return o?[a,i]:{x:a,y:i}};t.ZP=function(n,t,e,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=r(n,e,o),c=u(t,e,o);return a?[i,c]:{x:i,y:c}}},88455:function(n,t,e){function r(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return(Math.sin(t*Math.PI*n-Math.PI/2)/2+.5)*Math.sin(Math.PI*n)}e.d(t,{Z:function(){return r}})}},function(n){n.O(0,[4035,5456],(function(){return 20393,n(n.s=20393)})),n.O()}]);