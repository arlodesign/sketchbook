(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1:function(n,t,r){"use strict";r.d(t,"c",(function(){return e})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return o}));var e=function(n,t,r){return n+Math.cos(t)*r},i=function(n,t,r){return n+Math.sin(t)*r},o=function(n,t,r,e,i){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(r)*e,u=t+Math.sin(r)*i;return o?[a,u]:{x:a,y:u}};t.a=function(n,t,r,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(n,r,o),c=i(t,r,o);return a?[u,c]:{x:u,y:c}}},150:function(n,t,r){"use strict";r.r(t);var e=r(0),i=r.n(e),o=r(1);function a(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return u(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}new i.a((function(n){var t=.05/n.TWO_PI,r=n.random(2,20),e=n.random(100),i=0,u=0;n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.background(64),n.noFill(),n.strokeWeight(2),n.colorMode(n.HSB,100),n.blendMode(n.HARD_LIGHT)},n.draw=function(){var c=[n.map(n.sin(i),-1,1,40,n.width-40,!0),n.map(n.sin(u),-1,1,40,n.height-40,!0)],d=Object(o.a)(n.width/2,n.height/2,i,n.height/3-40,!0);n.stroke(e,n.map(n.sin(i),-1,1,0,100,!0),n.map(n.sin(u),-1,1,100,0,!0),10),n.bezier.apply(n,c.concat(a(d),[n.width-d[0],n.height-d[1],n.width-c[0],n.height-c[1]])),u+=t,(i+=t/r)>n.TWO_PI&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Refresh page for a different variatio n"}},[[150,0,1]]]);