(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{428:function(t,n,r){"use strict";r.r(n),function(t){var n=r(0),e=r.n(n),a=(r(3),r(6));function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var c=a.Coordinate.spherical;new e.a((function(n){var r=n.getURLParams().render,e=[Math.sin,Math.cos];n.setup=function(){n.pixelDensity(r?1:.5),n.frameRate(30),n.createCanvas(n.windowWidth,n.windowHeight,n.WEBGL),n.colorMode(n.HSB,1),n.createLoop(60,{noiseRadius:.1}),n.smooth()},n.draw=function(){var a=n.animLoop,i=a.theta,s=a.noise1D;n.background(255),n.specularMaterial(1,0,1),n.pointLight.apply(n,[1,0,1].concat(o(c([n.height,0,i]).cartesian()))),n.camera.apply(n,o(c([2*n.width,2*i,n.map(n.sin(i),-1,1,-n.QUARTER_PI,n.QUARTER_PI)]).cartesian()).concat([0,0,0,0,1,0])),n.noStroke();for(var u=1;u<=2500;u++){var p=n.TWO_PI/2500*u,f=i+u%2*n.HALF_PI;n.push(),n.rotateY(p),n.rotateZ(p+f*e[u%2](f)+s(e[u%2](p))),n.torus(.666*n.width,10,3,3),n.pop()}r&&t.env.DEV&&n.frameCount<1800&&n.save("".concat(String(n.frameCount).padStart(String(3600).length,"0"),".png"))},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")}.call(this,r(5))}},[[428,0,1]]]);