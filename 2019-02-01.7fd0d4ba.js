(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1:function(n,t,r){"use strict";r.d(t,"c",(function(){return e})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return a}));var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},a=function(n,t,r,e,o){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(r)*e,u=t+Math.sin(r)*o;return a?[i,u]:{x:i,y:u}};t.a=function(n,t,r,a){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(n,r,a),c=o(t,r,a);return i?[u,c]:{x:u,y:c}}},107:function(n,t,r){"use strict";r.r(t);var e=r(0),o=r.n(e),a=r(1);function i(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return u(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}new o.a((function(n){var t,r,e,o,u,c,s,f=0,d=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))},function(){return 240},function(){return 15},function(){return 128}];n.setup=function(){for(n.createCanvas(n.windowWidth,n.windowHeight),n.background(128),t=n.floor(n.random(3,7)),r=n.random(.01,.05),e=n.random([-1,1]),o=n.random(1,2);Array.from(new Set([u,c,s])).length<3;)u=n.random(d),c=n.random(d),s=n.random(d);n.strokeWeight(.25),n.noFill(),n.blendMode(n.HARD_LIGHT)},n.draw=function(){n.translate.apply(n,i(Object.values(Object(a.a)(n.width/2,n.height/2,f,300)))),n.rotate(e*f/t);var d=Object(a.a)(0,0,f,300*n.cos(f*t)),b=d.x,l=d.y;n.stroke(u(f/t),c(f/t),s(f/t)),n.beginShape(),n.vertex.apply(n,i(Object.values(Object(a.a)(0,0,0,300*o))));for(var p=1;p<=t;p++)n.quadraticVertex.apply(n,[b,l].concat(i(Object.values(Object(a.a)(0,0,n.TWO_PI/t*p,300*o)))));n.endShape(),(f+=r/n.TWO_PI)>n.TWO_PI*t&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Reload page for a different variation."}},[[107,0,1]]]);