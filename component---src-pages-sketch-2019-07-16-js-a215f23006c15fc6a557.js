(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{399:function(n,t,e){"use strict";e.r(t);var o=e(10),a=(e(0),e(450)),i=(e(453),e(451)),r={}.DEV&&!1,c=function(n){n.setup=function(){r&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(660,840),n.strokeWeight(10),n.createLoop(10,{gif:!!r&&{render:!1,open:!0},noiseRadius:.1})},n.draw=function(){n.blendMode(n.BLEND),n.background(0),n.blendMode(n.SCREEN);for(var t=n.animLoop.noise()+1,e=0;e<33;e++)n.push(),n.noFill(),n.stroke(["red","green","blue"][e%3]),n.translate(n.width/2,n.height/2),n.rotate(n.TWO_PI/33*e+n.animLoop.theta),n.ellipse.apply(n,Object(i.a)(0,0,n.TWO_PI/33*e,n.width/10*t,!0).concat([n.width/2*n.map(n.sin(n.animLoop.theta),-1,1,t,0),n.height/2*n.map(n.cos(n.animLoop.theta),-1,1,0,t)])),n.pop()}};t.default=function(n){var t=n.location;return Object(o.c)(a.a,{sketch:c,path:t.pathname,description:""})}},451:function(n,t,e){"use strict";e.d(t,"c",function(){return o}),e.d(t,"d",function(){return a}),e.d(t,"b",function(){return i});var o=function(n,t,e){return n+Math.cos(t)*e},a=function(n,t,e){return n+Math.sin(t)*e},i=function(n,t,e,o,a,i){void 0===i&&(i=!1);var r=n+Math.cos(e)*o,c=t+Math.sin(e)*a;return i?[r,c]:{x:r,y:c}};t.a=function(n,t,e,i,r){void 0===r&&(r=!1);var c=o(n,e,i),u=a(t,e,i);return r?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-16-js-a215f23006c15fc6a557.js.map