(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{418:function(t,n,o){"use strict";o.r(n);var e=o(10),i=(o(0),o(443)),r=(o(448),o(444)),a={}.DEV&&!1,c=function(t){var n,o,e=t.random(70);t.setup=function(){t.frameRate(30),a&&t.pixelDensity(1),t.colorMode(t.HSL,100),t.createCanvas(660,840),t.background(e,20,10),n=t.color(e,50,50,10),o=t.color(e+30,100,100,10),t.createLoop(60,{gif:!!a&&{render:!1,open:!0},noiseRadius:.31})},t.draw=function(){var e=t.animLoop,i=e.noise1D,c=e.theta;t.strokeWeight(2),t.colorMode(t.HSB,100),t.push(),t.translate(t.width/2,t.height/2),t.noFill(),t.stroke(t.lerpColor(n,o,t.map(t.sin(c),-1,1,0,1))),t.curve.apply(t,Object(r.a)(0,0,c,t.height,!0).concat([-t.width/2*i(-t.width),-t.height/2*i(-t.height),t.width/2*i(t.width),t.height/2*i(t.height)],Object(r.a)(0,0,c+t.PI,t.height,!0))),t.pop(),!a&&1800===t.frameCount&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(e.c)(i.a,{sketch:c,path:n.pathname,description:""})}},444:function(t,n,o){"use strict";o.d(n,"c",function(){return e}),o.d(n,"d",function(){return i}),o.d(n,"b",function(){return r});var e=function(t,n,o){return t+Math.cos(n)*o},i=function(t,n,o){return t+Math.sin(n)*o},r=function(t,n,o,e,i,r){void 0===r&&(r=!1);var a=t+Math.cos(o)*e,c=n+Math.sin(o)*i;return r?[a,c]:{x:a,y:c}};n.a=function(t,n,o,r,a){void 0===a&&(a=!1);var c=e(t,o,r),u=i(n,o,r);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-07-js-cf18cf9c2ea9bf10bcb5.js.map