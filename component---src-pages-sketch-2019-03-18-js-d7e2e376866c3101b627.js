(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{DCzN:function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("rzGZ"),r("m210"),r("4DPX"),r("YbXK"),r("cFtU"),r("q1tI");var e=r("I335"),o=r.n(e),i=r("Gmm/"),a=r("ViKx"),c=r("qKvR");function u(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return h(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function s(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var f=function(t){var n=[],r=0,e=function(){function n(n){this.i=n||this.i,this.stroke=this.i%2?255:0,this.location=t.createVector.apply(t,u(Object(a.a)(t.width/2,t.height/2,t.random(t.TWO_PI),t.random(t.width/4),!0))),this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.acceleration=o.a.Vector.random2D()}var r,e,i;return n.prototype.draw=function(){this.acceleration=t.createVector(t.random(-1,1),t.random(-1,1)),this.velocity.add(this.acceleration),t.strokeWeight(t.map(t.dist(t.width/2,t.height/2,this.location.x,this.location.y),0,t.dist(t.width/2,t.height/2,t.width/2,0),100,10,!0)),t.stroke(this.stroke),t.beginShape(),t.vertex(this.location.x,this.location.y),this.location.add(this.velocity),t.vertex(this.location.x,this.location.y),t.endShape()},r=n,(e=[{key:"onScreen",get:function(){var n=this.location,r=n.x,e=n.y;return r>0&&r<t.width&&e>0&&e<t.height}}])&&s(r.prototype,e),i&&s(r,i),n}();t.setup=function(){t.createCanvas(660,840),t.background(255),n=Array.from({length:1e3},(function(t,n){return new e(n)}))},t.draw=function(){n.forEach((function(t){return t.draw()})),n.filter((function(t){return!t.onScreen})).forEach((function(t){t.constructor(),r++})),r>1e4&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(c.c)(i.a,{sketch:f,path:n.pathname,description:""})}},ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return o})),r.d(n,"b",(function(){return i}));var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,o,i){void 0===i&&(i=!1);var a=t+Math.cos(r)*e,c=n+Math.sin(r)*o;return i?[a,c]:{x:a,y:c}};n.a=function(t,n,r,i,a){void 0===a&&(a=!1);var c=e(t,r,i),u=o(n,r,i);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-18-js-d7e2e376866c3101b627.js.map