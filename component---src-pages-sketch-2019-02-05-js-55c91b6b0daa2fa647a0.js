(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{ViKx:function(n,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return e})),r.d(t,"b",(function(){return i}));var o=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,o,e,i){void 0===i&&(i=!1);var c=n+Math.cos(r)*o,u=t+Math.sin(r)*e;return i?[c,u]:{x:c,y:u}};t.a=function(n,t,r,i,c){void 0===c&&(c=!1);var u=o(n,r,i),a=e(t,r,i);return c?[u,a]:{x:u,y:a}}},XZdy:function(n,t,r){"use strict";r.r(t);r("n0hJ"),r("q1tI");var o=r("Gmm/"),e=r("ViKx"),i=r("qKvR"),c=function(n){var t=10,r=[],o=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))}];function i(o,e){var i=function(o,e){return r.sort((function(t,r){return n.dist(o,e,t.vector.x,t.vector.y)-n.dist(o,e,r.vector.x,r.vector.y)})),r[t-1]}(o,e),c=i.vector,u=i.color;n.fill(u),n.noStroke();for(var a=0;a<n.PI;a+=.05)n.ellipse(n.lerp(o,c.x,n.sin(a)),n.lerp(e,c.y,n.sin(a)),3)}n.setup=function(){n.createCanvas(660,840),n.background(128),r=Array(t).fill().map((function(t,r){return{vector:n.createVector(Object(e.c)(n.width/2,n.noise(r)*n.TWO_PI,n.height),Object(e.d)(n.height/2,n.noise(r)*n.TWO_PI,n.height)),color:n.color(n.random(o)(r),n.random(o)(r),n.random(o)(r),32)}})),n.blendMode(n.OVERLAY)},n.draw=function(){var t=n.floor(n.frameCount/(n.width/10)),r=n.floor(n.frameCount-n.width/10*t);if(t<n.height/10)for(var o=0;o<10;o++)for(var e=0;e<10;e++)!(n.frameCount%10)&&i(r+n.width/10*o,t+n.height/10*e);else n.noLoop()}};t.default=function(n){var t=n.location;return Object(i.c)(o.a,{sketch:c,path:t.pathname,description:"Be patient. Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-05-js-55c91b6b0daa2fa647a0.js.map