(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"9seb":function(n,t,r){"use strict";r.r(t);r("pJf4"),r("q8oJ"),r("m210"),r("4DPX"),r("cxuS"),r("rzGZ"),r("Dq+y"),r("8npG"),r("ToIb"),r("YbXK"),r("cFtU"),r("q1tI");var e=r("Gmm/"),o=r("ViKx"),a=r("qKvR");function u(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return c(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var i=function(n){var t,r,e,a,c,i,f,s=0,b=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))},function(){return 240},function(){return 15},function(){return 128}];n.setup=function(){for(n.createCanvas(660,840),n.background(128),t=n.floor(n.random(3,7)),r=n.random(.01,.05),e=n.random([-1,1]),a=n.random(1,2);Array.from(new Set([c,i,f])).length<3;)c=n.random(b),i=n.random(b),f=n.random(b);n.strokeWeight(.25),n.noFill(),n.blendMode(n.HARD_LIGHT)},n.draw=function(){n.translate.apply(n,u(Object.values(Object(o.a)(n.width/2,n.height/2,s,300)))),n.rotate(e*s/t);var b=Object(o.a)(0,0,s,300*n.cos(s*t)),d=b.x,l=b.y;n.stroke(c(s/t),i(s/t),f(s/t)),n.beginShape(),n.vertex.apply(n,u(Object.values(Object(o.a)(0,0,0,300*a))));for(var p=1;p<=t;p++)n.quadraticVertex.apply(n,[d,l].concat(u(Object.values(Object(o.a)(0,0,n.TWO_PI/t*p,300*a)))));n.endShape(),(s+=r/n.TWO_PI)>n.TWO_PI*t&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(a.c)(e.a,{sketch:i,path:t.pathname,description:"Reload page for a different variation."})}},ViKx:function(n,t,r){"use strict";r.d(t,"c",(function(){return e})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return a}));var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},a=function(n,t,r,e,o,a){void 0===a&&(a=!1);var u=n+Math.cos(r)*e,c=t+Math.sin(r)*o;return a?[u,c]:{x:u,y:c}};t.a=function(n,t,r,a,u){void 0===u&&(u=!1);var c=e(n,r,a),i=o(t,r,a);return u?[c,i]:{x:c,y:i}}},cxuS:function(n,t,r){var e=r("P8UN"),o=r("ys0W")(!1);e(e.S,"Object",{values:function(n){return o(n)}})},ys0W:function(n,t,r){var e=r("QPJK"),o=r("2mBY"),a=r("5SQf"),u=r("BnbX").f;n.exports=function(n){return function(t){for(var r,c=a(t),i=o(c),f=i.length,s=0,b=[];f>s;)r=i[s++],e&&!u.call(c,r)||b.push(n?[r,c[r]]:c[r]);return b}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-01-js-54f97b14c826aa20fa3a.js.map