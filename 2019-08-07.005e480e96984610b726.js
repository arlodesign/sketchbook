(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{1:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return o})),r.d(n,"b",(function(){return i}));var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=t+Math.cos(r)*e,c=n+Math.sin(r)*o;return i?[a,c]:{x:a,y:c}};n.a=function(t,n,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=e(t,r,i),u=o(n,r,i);return a?[c,u]:{x:c,y:u}}},272:function(t,n,r){"use strict";r.r(n),function(t){var n=r(0),e=r.n(n),o=(r(3),r(1));function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var c=t.env.DEV&&!1;new e.a((function(t){var n,r,e=t.random(70);t.setup=function(){t.frameRate(30),c&&t.pixelDensity(1),t.colorMode(t.HSL,100),t.createCanvas(t.windowWidth,t.windowHeight),t.background(e,20,10),n=t.color(e,50,50,10),r=t.color(e+30,100,100,10),t.createLoop(60,{gif:!!c&&{render:!1,open:!0},noiseRadius:.31})},t.draw=function(){var e=t.animLoop,a=e.noise1D,u=e.theta;t.strokeWeight(2),t.colorMode(t.HSB,100),t.push(),t.translate(t.width/2,t.height/2),t.noFill(),t.stroke(t.lerpColor(n,r,t.map(t.sin(u),-1,1,0,1))),t.curve.apply(t,i(Object(o.a)(0,0,u,t.height,!0)).concat([-t.width/2*a(-t.width),-t.height/2*a(-t.height),t.width/2*a(t.width),t.height/2*a(t.height)],i(Object(o.a)(0,0,u+t.PI,t.height,!0)))),t.pop(),!c&&1800===t.frameCount&&t.noLoop()},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch")}.call(this,r(5))}},[[272,0,1]]]);