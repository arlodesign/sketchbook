"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[2327],{47613:function(t,n,e){var r=e(94035),o=e.n(r),i=e(61025);function a(t,n,e){return a=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&c(o,e.prototype),o},a.apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,n){return c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},c(t,n)}function f(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function s(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e(96995),new(o())((function(t){var n=t.shuffle(["cyan","yellow","magenta"]),e=[],r=function(){function e(n,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=r,this.startA=t.random(t.TWO_PI)}var r,o;return r=e,(o=[{key:"draw",value:function(){var e=this;n.forEach((function(r,o){t.fill(r),t.circle.apply(t,f((0,i.ZP)(e.x,e.y,e.startA+t.animLoop.theta+t.TWO_PI/n.length*o,30*t.map(t.cos(t.animLoop.theta),-1,1,0,2),!0)).concat([t.map(t.cos(t.animLoop.theta),-1,1,10,30*t.map(t.animLoop.noise2D(e.x,e.y),-1,1,1,3))]))}))}}])&&s(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();t.setup=function(){t.pixelDensity(1),t.frameRate(30),t.createCanvas(t.windowWidth,t.windowHeight),t.noStroke(),t.createLoop(5,{gif:!1,noiseRadius:.2}),e.push(new r(t.width/2,t.height/2));for(var n=30,o=0;n<t.width/2;){for(var u=0;t.dist.apply(t,f((0,i.ZP)(t.width/2,t.height/2,0,n,!0)).concat(f((0,i.ZP)(t.width/2,t.height/2,u,n,!0))))<30;)u+=.001;for(var c=Math.floor(t.TWO_PI/u),l=o;l<t.TWO_PI+o;l+=t.TWO_PI/c)e.push(a(r,f((0,i.ZP)(t.width/2,t.height/2,l,n,!0))));n+=30,o+=u}},t.draw=function(){t.blendMode(t.BLEND),t.background(255),t.blendMode(t.MULTIPLY),e.forEach((function(t){return t.draw()}))},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch")},61025:function(t,n,e){e.d(n,{Y2:function(){return r},C$:function(){return o},vy:function(){return i}});var r=function(t,n,e){return t+Math.cos(n)*e},o=function(t,n,e){return t+Math.sin(n)*e},i=function(t,n,e,r,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=t+Math.cos(e)*r,u=n+Math.sin(e)*o;return i?[a,u]:{x:a,y:u}};n.ZP=function(t,n,e,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=r(t,e,i),c=o(n,e,i);return a?[u,c]:{x:u,y:c}}}},function(t){t.O(0,[4035,6995],(function(){return 47613,t(t.s=47613)})),t.O()}]);