(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1:function(n,t,o){"use strict";o.d(t,"c",(function(){return r})),o.d(t,"d",(function(){return e})),o.d(t,"b",(function(){return a}));var r=function(n,t,o){return n+Math.cos(t)*o},e=function(n,t,o){return n+Math.sin(t)*o},a=function(n,t,o,r,e){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(o)*r,c=t+Math.sin(o)*e;return a?[i,c]:{x:i,y:c}};t.a=function(n,t,o,a){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=r(n,o,a),u=e(t,o,a);return i?[c,u]:{x:c,y:u}}},244:function(n,t,o){"use strict";o.r(t);var r=o(0),e=o.n(r),a=(o(3),o(6));o(1);function i(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return c(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);"Object"===o&&n.constructor&&(o=n.constructor.name);if("Map"===o||"Set"===o)return Array.from(n);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return c(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=n[o];return r}var u=a.Coordinate.spherical;new e.a((function(n){n.setup=function(){n.frameRate(30),n.createCanvas(n.windowWidth,n.windowHeight,n.WEBGL),n.createLoop(10,{gif:!1,noiseRadius:.05}),n.rectMode(n.CENTER),n.noStroke()},n.draw=function(){n.background(0),n.camera.apply(n,i(u([n.height,0,n.map(n.animLoop.noise(),-1,1,0,n.TWO_PI)]).cartesian()).concat([0,0,0,0,1,0])),n.directionalLight(255,255,255,n.cos(n.animLoop.theta),n.sin(n.animLoop.theta),0);for(var t=1,o=-n.height/2+15;o<n.height/2;o+=30)t=-t,n.push(),n.specularMaterial(n.map(n.animLoop.noise2D(-o,n.animLoop.theta),-1,1,224,96),n.map(n.animLoop.noise2D(o,n.animLoop.theta),-1,1,96,224),128),n.translate(0,o),n.rotateZ(n.HALF_PI),n.rotateX(n.map(n.animLoop.noise1D(o),-1,1,0,t*n.PI)),n.rotateY(n.HALF_PI/2*n.map(n.animLoop.noise1D(o),-1,1,0,1)),n.scale(1,20,1),n.box(30*n.map(n.animLoop.noise1D(o),-1,1,.25,1.75)),n.pop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")}},[[244,0,1]]]);