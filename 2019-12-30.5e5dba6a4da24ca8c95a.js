(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{1:function(t,r,n){"use strict";n.d(r,"c",(function(){return e})),n.d(r,"d",(function(){return i})),n.d(r,"b",(function(){return o}));var e=function(t,r,n){return t+Math.cos(r)*n},i=function(t,r,n){return t+Math.sin(r)*n},o=function(t,r,n,e,i){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=t+Math.cos(n)*e,c=r+Math.sin(n)*i;return o?[a,c]:{x:a,y:c}};r.a=function(t,r,n,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=e(t,n,o),h=i(r,n,o);return a?[c,h]:{x:c,y:h}}},370:function(t,r,n){"use strict";n.r(r);var e=n(0),i=n.n(e),o=(n(3),n(1));function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return c(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}new i.a((function(t){var r,n,e,i=t.getURLParams().render,c=t.random();t.setup=function(){var h;i&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(t.windowWidth,t.windowHeight),t.createLoop(20,{gif:!!i&&{render:!1,open:!0},noiseRadius:.5}),t.colorMode(t.HSL,1),n=t.color(c,.4,.9),e=t.color(c,.8,.5),(r=t.createGraphics(t.width,t.height)).fill(0),(h=r).triangle.apply(h,[t.width/2,t.height/2].concat(a(Object(o.a)(t.width/2,t.height/2,-t.TWO_PI/24/2,1/t.cos(-t.TWO_PI/24/2)*t.width/2,!0)),a(Object(o.a)(t.width/2,t.height/2,t.TWO_PI/24/2,1/t.cos(t.TWO_PI/24/2)*t.width/2,!0))))},t.draw=function(){t.background(n);var i=t.createGraphics(t.width,t.height);i.colorMode(t.HSL,1);for(var o=t.height/5;o<t.height-t.height/5;o++)for(var a=t.animLoop.noise1D,h=t.width/2,u=t.map(a(o/10),-1,1,.01,1),d=0;d<1;d+=u){var s=t.width/2+h*d;i.fill(t.lerpColor(e,t.color(c,1,.1,0),d)),i.noStroke(),i.rect(s,o,-h*u,1)}var f=i.get();f.mask(r),t.translate(t.width/2,t.height/2);for(var l=0;l<24;l++)t.push(),t.scale(l%2?1:-1,1),t.rotate(t.TWO_PI/24*l),t.image(f,-t.width/2,-t.height/2),t.pop()},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch")}},[[370,0,1]]]);