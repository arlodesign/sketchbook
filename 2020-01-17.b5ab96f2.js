(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{1:function(n,t,r){"use strict";r.d(t,"c",(function(){return e})),r.d(t,"d",(function(){return u})),r.d(t,"b",(function(){return i}));var e=function(n,t,r){return n+Math.cos(t)*r},u=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,e,u){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=n+Math.cos(r)*e,a=t+Math.sin(r)*u;return i?[o,a]:{x:o,y:a}};t.a=function(n,t,r,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=e(n,r,i),c=u(t,r,i);return o?[a,c]:{x:a,y:c}}},2:function(n,t,r){"use strict";r.r(t),r.d(t,"linear",(function(){return e})),r.d(t,"easeInQuad",(function(){return u})),r.d(t,"easeOutQuad",(function(){return i})),r.d(t,"easeInOutQuad",(function(){return o})),r.d(t,"easeInCubic",(function(){return a})),r.d(t,"easeOutCubic",(function(){return c})),r.d(t,"easeInOutCubic",(function(){return f})),r.d(t,"easeInQuart",(function(){return s})),r.d(t,"easeOutQuart",(function(){return d})),r.d(t,"easeInOutQuart",(function(){return h})),r.d(t,"easeInQuint",(function(){return p})),r.d(t,"easeOutQuint",(function(){return l})),r.d(t,"easeInOutQuint",(function(){return w}));var e=function(n){return n},u=function(n){return n*n},i=function(n){return n*(2-n)},o=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},h=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},p=function(n){return n*n*n*n*n},l=function(n){return 1+--n*n*n*n*n},w=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},390:function(n,t,r){"use strict";r.r(t);var e=r(0),u=r.n(e),i=(r(3),r(1)),o=r(2);function a(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return c(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}new u.a((function(n){var t=n.getURLParams().render;n.setup=function(){n.pixelDensity(1),n.frameRate(60),n.createCanvas(n.windowWidth,n.windowHeight,n.WEBGL),n.noStroke(),n.createLoop(60,{gif:!!t&&{render:!1,open:!0},noiseRadius:2})},n.draw=function(){var t=n.animLoop,r=t.theta,e=t.noise1D;n.background(0),n.specularMaterial(128),n.pointLight.apply(n,[255,255,0].concat(a(Object(i.a)(0,0,r,n.width/2,!0)),[n.width*Object(o.easeInOutQuart)(n.abs(e(5)))])),n.pointLight.apply(n,[0,255,255].concat(a(Object(i.a)(0,0,r+n.TWO_PI/3,n.width/2,!0)),[n.width*Object(o.easeInOutQuart)(n.abs(e(7)))])),n.pointLight.apply(n,[255,0,255].concat(a(Object(i.a)(0,0,r+n.TWO_PI/3*2,n.width/2,!0)),[n.width*Object(o.easeInOutQuart)(n.abs(e(9)))]));for(var u=-n.width/2;u<=n.width/2;u+=30)for(var c=-n.height/2;c<=n.height/2;c+=30)n.push(),n.translate(u,c,15*n.cos(r+n.dist.apply(n,[u,c].concat(a(Object(i.a)(0,0,-r,10*n.height,!0)))))),n.box(30),n.pop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")}},[[390,0,1]]]);