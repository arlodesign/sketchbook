(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{423:function(t,n,r){"use strict";r.r(n),function(t){var n=r(0),e=r.n(n),o=(r(3),r(6));function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var c=o.Coordinate.spherical;new e.a((function(n){var r=n.getURLParams().render,e=[];n.setup=function(){n.pixelDensity(1),n.frameRate(30),n.createCanvas(n.windowWidth,n.windowHeight,n.WEBGL),n.colorMode(n.HSB,1),n.noSmooth(),n.createLoop(120,{noiseRadius:.8})},n.draw=function(){var o=n.animLoop,i=o.theta,s=o.progress,u=o.noise,f=o.noise1D,p=i,l=-16*s*s+16*s-2,d=[n.width/2*f(10),n.height/2*f(20)*l,n.width*f(30)],h=n.width/10*(u()+1)/2;n.background(255),n.frameCount<3600&&e.push({rotate:p,position:d,size:h}),n.pointLight.apply(n,[1,0,1].concat(a(c([n.height,-i,n.PI]).cartesian()))),n.camera.apply(n,a(c([2*n.width,0,i]).cartesian()).concat([0,0,0,0,1,0])),e.forEach((function(t){var r=t.rotate,e=t.position,o=t.size;n.push(),n.specularMaterial(1,0,1),n.noStroke(),n.translate.apply(n,a(e)),n.rotateX(r),n.rotateZ(2*r),n.torus(o,o/3,24,24),n.pop()})),n.frameCount<3600&&n.frameCount%100==0&&console.info("".concat(n.floor(100*s),"%")),3600===n.frameCount&&console.info("100%"),r&&t.env.DEV&&n.frameCount<7200&&n.save("".concat(String(n.frameCount).padStart(String(7200).length,"0"),".png"))},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")}.call(this,r(5))}},[[423,0,1]]]);