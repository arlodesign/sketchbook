(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{414:function(n,t,e){"use strict";e.r(t);var o=e(10),a=(e(0),e(436)),r=(e(442),e(437)),i={}.DEV&&!1,c=function(n){var t=n.random(80);n.setup=function(){n.frameRate(30),i&&n.pixelDensity(1),n.createCanvas(660,840),n.background(0),n.noFill(),n.colorMode(n.HSB,100),n.blendMode(n.HARD_LIGHT),n.createLoop(60,{gif:!!i&&{render:!1,open:!0}})},n.draw=function(){var e=n.animLoop,o=e.noise1D,a=e.noise2D,c=e.theta;n.stroke(n.map(c,0,n.TWO_PI,t-20,t+20),50,100,1),n.push(),n.translate.apply(n,Object(r.a)(n.width/2,n.height/2,c,n.width/10*(o(n.sin(c))+1),!0)),n.rotate(c),n.beginShape();for(var u=0;u<n.TWO_PI;u+=.01){n.TWO_PI;n.vertex.apply(n,Object(r.a)(0,0,u,a(n.cos(u),n.sin(c))*n.width,!0))}n.endShape(n.CLOSE),n.pop(),!i&&1800===n.frameCount&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(o.c)(a.a,{sketch:c,path:t.pathname,description:""})}},437:function(n,t,e){"use strict";e.d(t,"c",function(){return o}),e.d(t,"d",function(){return a}),e.d(t,"b",function(){return r});var o=function(n,t,e){return n+Math.cos(t)*e},a=function(n,t,e){return n+Math.sin(t)*e},r=function(n,t,e,o,a,r){void 0===r&&(r=!1);var i=n+Math.cos(e)*o,c=t+Math.sin(e)*a;return r?[i,c]:{x:i,y:c}};t.a=function(n,t,e,r,i){void 0===i&&(i=!1);var c=o(n,e,r),u=a(t,e,r);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-03-js-6bf9e096014d75dcecbd.js.map