(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1:function(n,t,e){"use strict";e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return o})),e.d(t,"b",(function(){return i}));var r=function(n,t,e){return n+Math.cos(t)*e},o=function(n,t,e){return n+Math.sin(t)*e},i=function(n,t,e,r,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(e)*r,u=t+Math.sin(e)*o;return i?[a,u]:{x:a,y:u}};t.a=function(n,t,e,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=r(n,e,i),c=o(t,e,i);return a?[u,c]:{x:u,y:c}}},228:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(1);function a(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return u(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}new o.a((function(n){var t=n.random(80),e=[],r=[];n.setup=function(){n.pixelDensity(1),n.createCanvas(n.windowWidth,n.windowHeight),n.colorMode(n.HSB,100),(e=Array.from(Array(15),(function(){return{x:n.mouseX,y:n.mouseY,a:n.random(n.TWO_PI),d:n.random(6)}}))).sort((function(n,t){return n.a-t.a})),r=[e],n.noStroke()},n.draw=function(){n.background(t+20,100,20);for(var o=function(e){var o=r[e];n.fill(n.map(e,0,r.length,t,t+20),100,n.map(e,0,r.length,100,20)),n.beginShape(),n.curveVertex.apply(n,a(Object(i.a)(o[o.length-3].x,o[o.length-3].y,o[o.length-3].a,o[o.length-3].d+6*e,!0))),n.curveVertex.apply(n,a(Object(i.a)(o[o.length-2].x,o[o.length-2].y,o[o.length-2].a,o[o.length-2].d+6*e,!0))),n.curveVertex.apply(n,a(Object(i.a)(o[o.length-1].x,o[o.length-1].y,o[o.length-1].a,o[o.length-1].d+6*e,!0))),o.forEach((function(t){return n.curveVertex.apply(n,a(Object(i.a)(t.x,t.y,t.a,t.d+6*e,!0)))})),n.endShape()},u=r.length-1;u>=0;u--)o(u);r.unshift(e.map((function(t){var e=t.a,r=t.d;return{x:n.mouseX,y:n.mouseY,a:n.constrain(e*n.map(n.noise(e,n.frameCount/500),0,1,.1,1.9),0,n.TWO_PI),d:r*n.noise(r,n.frameCount/500)*10}}))),r.length>n.height/12&&r.pop()},n.touchMoved=function(){if(n.mouseX>=0&&n.mouseY>=0&&n.mouseX<=n.width&&n.mouseY<=n.height)return!1},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Move pointer or finger over sketch."}},[[228,0,1]]]);