(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{2:function(n,t,e){"use strict";e.r(t),e.d(t,"linear",(function(){return r})),e.d(t,"easeInQuad",(function(){return i})),e.d(t,"easeOutQuad",(function(){return u})),e.d(t,"easeInOutQuad",(function(){return o})),e.d(t,"easeInCubic",(function(){return a})),e.d(t,"easeOutCubic",(function(){return s})),e.d(t,"easeInOutCubic",(function(){return c})),e.d(t,"easeInQuart",(function(){return f})),e.d(t,"easeOutQuart",(function(){return d})),e.d(t,"easeInOutQuart",(function(){return h})),e.d(t,"easeInQuint",(function(){return l})),e.d(t,"easeOutQuint",(function(){return p})),e.d(t,"easeInOutQuint",(function(){return y}));var r=function(n){return n},i=function(n){return n*n},u=function(n){return n*(2-n)},o=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},s=function(n){return--n*n*n+1},c=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},h=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},l=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},y=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},377:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),u=e(2);e(3);function o(n){return function(n){if(Array.isArray(n))return a(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return a(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function s(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}new i.a((function(n){var t=n.getURLParams().render,e=[],r=function(){function t(e,r){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=r,this.hue=n.random()}var e,r,i;return e=t,(r=[{key:"noise",value:function(t,e){return[t+30*n.animLoop.noise2D(t,e),e+30*n.animLoop.noise2D(e,t)]}},{key:"setCoordinates",value:function(){this.tl=this.noise(this.x,this.y),this.tr=this.noise(this.x+60,this.y),this.br=this.noise(this.x+60,this.y+60),this.bl=this.noise(this.x,this.y+60)}},{key:"draw",value:function(){this.setCoordinates();var t=n.map(Object(u.easeInOutQuint)((n.animLoop.noise2D(this.x/100,this.y/100)+1)/2),0,1,.1,.8);return n.fill(this.hue,.6,t),n.stroke(this.hue,.3,t/3),n.quad.apply(n,o(this.tl).concat(o(this.tr),o(this.br),o(this.bl)))}}])&&s(e.prototype,r),i&&s(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();n.setup=function(){t&&n.pixelDensity(1),n.createCanvas(n.windowWidth,n.windowHeight),n.background(255),n.colorMode(n.HSL,1),n.strokeWeight(2),n.strokeJoin(n.ROUND),n.createLoop(20,{gif:!!t&&{render:!1,open:!0},noiseRadius:.4});for(var i=-30;i<n.width+60;i+=60)for(var u=-30;u<n.height+60;u+=60)e.push(new r(i,u))},n.draw=function(){e.forEach((function(n){return n.draw()}))},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Not quite Sol LeWitt, but an attempt."}},[[377,0,1]]]);