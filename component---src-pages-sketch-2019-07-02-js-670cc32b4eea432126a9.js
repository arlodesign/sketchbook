(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{ViKx:function(n,t,r){"use strict";r.d(t,"c",(function(){return e})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return a}));var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},a=function(n,t,r,e,o,a){void 0===a&&(a=!1);var u=n+Math.cos(r)*e,i=t+Math.sin(r)*o;return a?[u,i]:{x:u,y:i}};t.a=function(n,t,r,a,u){void 0===u&&(u=!1);var i=e(n,r,a),c=o(t,r,a);return u?[i,c]:{x:i,y:c}}},cJEv:function(n,t,r){"use strict";r.r(t);r("pJf4"),r("q8oJ"),r("8npG"),r("rzGZ"),r("m210"),r("4DPX"),r("n0hJ"),r("YbXK"),r("cFtU"),r("q1tI");var e=r("Gmm/"),o=r("ViKx"),a=r("qKvR");function u(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return i(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var c=function(n){var t=n.random(80),r=[],e=[];n.setup=function(){n.pixelDensity(1),n.createCanvas(660,840),n.colorMode(n.HSB,100),(r=Array.from(Array(15),(function(){return{x:n.mouseX,y:n.mouseY,a:n.random(n.TWO_PI),d:n.random(6)}}))).sort((function(n,t){return n.a-t.a})),e=[r],n.noStroke()},n.draw=function(){n.background(t+20,100,20);for(var a=function(r){var a=e[r];n.fill(n.map(r,0,e.length,t,t+20),100,n.map(r,0,e.length,100,20)),n.beginShape(),n.curveVertex.apply(n,u(Object(o.a)(a[a.length-3].x,a[a.length-3].y,a[a.length-3].a,a[a.length-3].d+6*r,!0))),n.curveVertex.apply(n,u(Object(o.a)(a[a.length-2].x,a[a.length-2].y,a[a.length-2].a,a[a.length-2].d+6*r,!0))),n.curveVertex.apply(n,u(Object(o.a)(a[a.length-1].x,a[a.length-1].y,a[a.length-1].a,a[a.length-1].d+6*r,!0))),a.forEach((function(t){return n.curveVertex.apply(n,u(Object(o.a)(t.x,t.y,t.a,t.d+6*r,!0)))})),n.endShape()},i=e.length-1;i>=0;i--)a(i);e.unshift(r.map((function(t){var r=t.a,e=t.d;return{x:n.mouseX,y:n.mouseY,a:n.constrain(r*n.map(n.noise(r,n.frameCount/500),0,1,.1,1.9),0,n.TWO_PI),d:e*n.noise(e,n.frameCount/500)*10}}))),e.length>n.height/12&&e.pop()},n.touchMoved=function(){if(n.mouseX>=0&&n.mouseY>=0&&n.mouseX<=n.width&&n.mouseY<=n.height)return!1}};t.default=function(n){var t=n.location;return Object(a.c)(e.a,{sketch:c,path:t.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-02-js-670cc32b4eea432126a9.js.map