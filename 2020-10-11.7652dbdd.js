(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{2:function(n,t,r){"use strict";r.r(t),r.d(t,"linear",(function(){return e})),r.d(t,"easeInQuad",(function(){return o})),r.d(t,"easeOutQuad",(function(){return a})),r.d(t,"easeInOutQuad",(function(){return u})),r.d(t,"easeInCubic",(function(){return i})),r.d(t,"easeOutCubic",(function(){return c})),r.d(t,"easeInOutCubic",(function(){return s})),r.d(t,"easeInQuart",(function(){return f})),r.d(t,"easeOutQuart",(function(){return l})),r.d(t,"easeInOutQuart",(function(){return p})),r.d(t,"easeInQuint",(function(){return d})),r.d(t,"easeOutQuint",(function(){return b})),r.d(t,"easeInOutQuint",(function(){return h}));var e=function(n){return n},o=function(n){return n*n},a=function(n){return n*(2-n)},u=function(n){return n<.5?2*n*n:(4-2*n)*n-1},i=function(n){return n*n*n},c=function(n){return--n*n*n+1},s=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},l=function(n){return 1- --n*n*n*n},p=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},d=function(n){return n*n*n*n*n},b=function(n){return 1+--n*n*n*n*n},h=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},473:function(n,t,r){"use strict";r.r(t);var e=r(0),o=r.n(e),a=(r(3),r(2)),u=r(6);function i(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return c(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function s(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}var f=u.Coordinate.spherical;new o.a((function(n){var t,r,e,o=n.getURLParams().render,u=30*(o?60:1),c=o?1:30,l=n.random(.9),p=function(){function t(n,r,e){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=r,this.z=e}var r,e,o;return r=t,(e=[{key:"size",get:function(){var t=this.x,r=this.y,e=this.z,o=n.animLoop.progress,u=Object(a.easeInOutCubic)(-4*o*o+4*o),i=n.sin(n.dist(t,r,e,n.lerp(-20,20,n.abs(n.animLoop.noise1D(t/100)*u)),n.lerp(-20,20,n.abs(n.animLoop.noise1D(r/100)*u)),n.lerp(-20,20,n.abs(n.animLoop.noise1D(e/100)*u))));return Object(a.easeInOutQuint)(Object(a.easeInOutQuint)(n.abs(i)))}},{key:"draw",value:function(){n.push(),n.translate(this.x,this.y,this.z),n.box(this.size),n.pop()}}])&&s(r.prototype,e),o&&s(r,o),Object.defineProperty(r,"prototype",{writable:!1}),t}(),d=[];n.setup=function(){n.pixelDensity(1),n.frameRate(c),n.createCanvas(o?1080:n.floor(270),o?1080:n.floor(270),n.WEBGL),n.colorMode(n.HSB,1),o?n.smooth():n.noSmooth(),n.createLoop(u,{noiseRadius:.1});for(var a=0;a<20;a++)for(var i=0;i<20;i++)for(var s=0;s<20;s++)d.push(new p(a-10,i-10,s-10));t=Object.assign({cameraDistance:20*(o?32:8)},n.getURLParams()),r=n.createSlider(20*(o?12:3),20*(o?40:10),parseFloat(t.cameraDistance,10)),e=n.createA("?","Render")},n.draw=function(){var t=n.animLoop,a=t.progress,s=t.theta,p=t.noise1D;t.noise2D;n.background(l,.5,.5),n.camera.apply(n,i(f([r.value(),10,s]).cartesian()).concat([0,0,0,0,1,0])),n.pointLight(0,0,1,0,0,1),n.specularMaterial(n.map(p(.05),-1,1,l-.1,l+.1),.5,.8),n.noStroke(),n.push(),n.scale(n.width/20/3),d.forEach((function(n){return n.draw()})),n.pop(),e.attribute("href","?"+new URLSearchParams({cameraDistance:r.value(),render:!0}).toString()),o&&n.frameCount<=u*c&&(n.frameCount%100==0&&console.info("".concat(n.floor(100*a),"%")),n.save("".concat(String(n.frameCount).padStart(String(u*c).length,"0"),".png")))}}),"sketch")}},[[473,0,1]]]);