(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{434:function(n,t,e){"use strict";e.r(t);var a=e(10),o=(e(0),e(454)),r=(e(457),e(455)),i={}.DEV&&!1,c=function(n){n.setup=function(){n.frameRate(30),i&&n.pixelDensity(1),n.createCanvas(660,840),n.background(255),n.noFill(),n.blendMode(n.MULTIPLY),n.createLoop(120,{gif:!!i&&{render:!1,open:!0}})},n.draw=function(){var t=n.animLoop,e=t.noise1D,a=t.noise2D,o=t.theta;["cyan","magenta","yellow"].forEach(function(t,i){var c=n.color(t);c.setAlpha(16),n.stroke(c),n.push(),n.translate.apply(n,Object(r.a)(n.width/3,n.height/2,o+i*(n.TWO_PI/3),n.map(n.cos(o+i*(n.TWO_PI/3)),-1,1,n.height/2,0,!0),!0)),n.rotate(n.map(e((i+1)/100,{radius:.1}),-1,1,n.TWO_PI,0));var u=n.map(a(t.length,i+1,{radius:2}),-1,1,n.width/2,n.width),s=n.map(a(i+1,t.length,{radius:2}),-1,1,n.height/4,n.height/8);n.ellipse(0,0,u,s),n.pop()}),!i&&3600===n.frameCount&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(a.c)(o.a,{sketch:c,path:t.pathname,description:""})}},455:function(n,t,e){"use strict";e.d(t,"c",function(){return a}),e.d(t,"d",function(){return o}),e.d(t,"b",function(){return r});var a=function(n,t,e){return n+Math.cos(t)*e},o=function(n,t,e){return n+Math.sin(t)*e},r=function(n,t,e,a,o,r){void 0===r&&(r=!1);var i=n+Math.cos(e)*a,c=t+Math.sin(e)*o;return r?[i,c]:{x:i,y:c}};t.a=function(n,t,e,r,i){void 0===i&&(i=!1);var c=a(n,e,r),u=o(t,e,r);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-23-js-ec0fe41ace307dc4e38f.js.map