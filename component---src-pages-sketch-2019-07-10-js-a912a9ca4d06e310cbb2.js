(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{"WK/p":function(t,e,n){"use strict";e.a=function(t,e,n,o,i,r,a,c){void 0===a&&(a=!0),void 0===c&&(c=!0);for(var p=Math.max(r,.01/t.dist(e,n,o,i)),h=0;h<1;h+=p)(0!==h||a)&&(c&&t.random()>h||!c)&&t.point(t.lerp(e,o,h),t.lerp(n,i,h))}},kYpF:function(t,e,n){"use strict";n.r(e);n("q1tI");var o=n("Gmm/"),i=(n("WK/p"),n("PZSu"),n("qKvR")),r={}.DEV&&!1,a=function(t){t.setup=function(){r&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840),t.noStroke(),t.rectMode(t.CENTER),t.createLoop(20,{gif:!!r&&{render:!1,open:!0},noiseRadius:.1})},t.draw=function(){t.background(0);for(var e=[],n=0;n<=t.width/2;n+=10){for(var o=[],i=t.map(t.animLoop.noise1D(n/10),-1,1,0,.5),r=0;r<1;r+=i)r>0&&o.push(t.lerp(0,t.height,r));e.push(o)}e.forEach((function(e,n){e.forEach((function(e){var o=t.map(e,0,t.height,10,1);t.rect(10*n,e,o,o),t.rect(10*n,t.height-e,o,o),t.rect(t.width-10*n,e,o,o),t.rect(t.width-10*n,t.height-e,o,o)}))}))}};e.default=function(t){var e=t.location;return Object(i.c)(o.a,{sketch:a,path:e.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-10-js-a912a9ca4d06e310cbb2.js.map