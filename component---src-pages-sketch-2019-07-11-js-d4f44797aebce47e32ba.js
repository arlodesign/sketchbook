(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{377:function(n,t,i){"use strict";i.r(t);var o=i(7),e=(i(0),i(389)),r=(i(403),i(390)),a={}.DEV&&!1,c=function(n){var t=n.shuffle(["cyan","magenta","yellow"]);n.setup=function(){a&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(660,840),n.noFill(),n.strokeWeight(20),n.strokeJoin(n.ROUND),n.createLoop(5,{gif:!!a&&{render:!1,open:!0},noiseRadius:.8})},n.draw=function(){n.blendMode(n.BLEND),n.background(255),n.blendMode(n.MULTIPLY),n.translate(n.width/2,n.height/2),t.forEach(function(t,i){n.stroke(t);for(var o=0;o<n.TWO_PI;o+=n.TWO_PI/50){var e=n.map(n.animLoop.noise2D(i,n.sin(o)),-1,1,0,1),a=Object(r.a)(0,0,o,n.width/2*e),c=a.x,u=a.y;n.point(n.constrain(c,-n.width/3,n.width/3),n.constrain(u,-n.width/3,n.width/3))}})}};t.default=function(n){var t=n.location;return Object(o.c)(e.a,{sketch:c,path:t.pathname,description:""})}},390:function(n,t,i){"use strict";i.d(t,"c",function(){return o}),i.d(t,"d",function(){return e}),i.d(t,"b",function(){return r});var o=function(n,t,i){return n+Math.cos(t)*i},e=function(n,t,i){return n+Math.sin(t)*i},r=function(n,t,i,o,e,r){void 0===r&&(r=!1);var a=n+Math.cos(i)*o,c=t+Math.sin(i)*e;return r?[a,c]:{x:a,y:c}};t.a=function(n,t,i,r,a){void 0===a&&(a=!1);var c=o(n,i,r),u=e(t,i,r);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-11-js-d4f44797aebce47e32ba.js.map