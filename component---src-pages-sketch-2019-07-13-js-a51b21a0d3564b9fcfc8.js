(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{379:function(n,t,e){"use strict";e.r(t);var o=e(7),a=(e(0),e(396)),r=e(397),i=(e(407),{}.DEV&&!0),c=function(n){n.setup=function(){i&&(n.pixelDensity(1),n.frameRate(15)),n.createCanvas(660,660),n.strokeWeight(20),n.createLoop(40,{gif:!!i&&{render:!1,open:!0},noiseRadius:.1})},n.draw=function(){var t;n.blendMode(n.BLEND),n.background(255),n.blendMode(n.MULTIPLY);for(var e=0;e<n.TWO_PI;e+=n.TWO_PI/1e3){n.push(),n.stroke(["magenta","yellow","cyan"][n.floor(n.map(n.cos(e),-1,1,0,2.99999999999))]),n.translate(n.width/2,n.height/2),n.rotate(e*n.map(n.cos(n.animLoop.theta),-1,1,1,3));var o=Object(r.a)(0,0,e,n.width*n.cos(n.map(n.sin(n.animLoop.theta),-1,1,1,10)*e),!0);t&&n.line.apply(n,t.concat(o)),n.pop(),t=o}}};t.default=function(n){var t=n.location;return Object(o.c)(a.a,{sketch:c,path:t.pathname,description:""})}},397:function(n,t,e){"use strict";e.d(t,"c",function(){return o}),e.d(t,"d",function(){return a}),e.d(t,"b",function(){return r});var o=function(n,t,e){return n+Math.cos(t)*e},a=function(n,t,e){return n+Math.sin(t)*e},r=function(n,t,e,o,a,r){void 0===r&&(r=!1);var i=n+Math.cos(e)*o,c=t+Math.sin(e)*a;return r?[i,c]:{x:i,y:c}};t.a=function(n,t,e,r,i){void 0===i&&(i=!1);var c=o(n,e,r),u=a(t,e,r);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-13-js-a51b21a0d3564b9fcfc8.js.map