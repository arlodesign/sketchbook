(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{445:function(n,t,e){"use strict";e.r(t);var o=e(10),r=(e(0),e(454)),a=(e(457),e(455)),i={}.DEV&&!1,c=function(n){var t=n.random(100/7);n.setup=function(){n.frameRate(60),i&&n.pixelDensity(1),n.createCanvas(660,840),n.background(0),n.colorMode(n.HSB,100),n.blendMode(n.SCREEN),n.strokeWeight(2),n.createLoop(60,{gif:!!i&&{render:!1,open:!0},noiseRadius:.5})},n.draw=function(){var e=n.animLoop,o=e.noise2D,r=e.theta;n.translate.apply(n,Object(a.a)(n.width/2,n.height/2,-r,o(.01,.02)*(n.width/2),!0));for(var c=1;c<=7;c++){var u=o(.06*c,.08*c)*n.height,s=(o(.05*c,.07*c)+1)/3,d=r+n.TWO_PI*(c/7),f=Object(a.a)(0,0,d,u),h=f.x,p=f.y;n.stroke(t+100/7*(c-1),50,25,50),n.line(h*s,p*s,h,p)}3600===n.frameCount&&!i&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(o.c)(r.a,{sketch:c,path:t.pathname,description:""})}},455:function(n,t,e){"use strict";e.d(t,"c",function(){return o}),e.d(t,"d",function(){return r}),e.d(t,"b",function(){return a});var o=function(n,t,e){return n+Math.cos(t)*e},r=function(n,t,e){return n+Math.sin(t)*e},a=function(n,t,e,o,r,a){void 0===a&&(a=!1);var i=n+Math.cos(e)*o,c=t+Math.sin(e)*r;return a?[i,c]:{x:i,y:c}};t.a=function(n,t,e,a,i){void 0===i&&(i=!1);var c=o(n,e,a),u=r(t,e,a);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-03-js-eed0f994bfdb14bd038b.js.map