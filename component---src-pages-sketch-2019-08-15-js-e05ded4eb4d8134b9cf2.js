(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{426:function(t,n,i){"use strict";i.r(n);var e=i(10),a=(i(0),i(445)),o=(i(449),i(446)),r={}.DEV&&!1,h=function(t){t.setup=function(){t.frameRate(30),r&&t.pixelDensity(1),t.createCanvas(660,840),t.background(255),t.noFill(),t.strokeWeight(10),t.createLoop(60,{gif:!!r&&{render:!1,open:!0},noiseRadius:.01})},t.draw=function(){var n=t.animLoop,i=n.noise1D,e=n.theta;t.stroke(t.map(i(t.sin(e)),-1,1,0,255),t.map(i(t.cos(e)),-1,1,255,0),t.map(i(t.tan(e)),-1,1,0,255),16);var a=t.map(i(t.sin(e)),-1,1,t.width/4,t.width),h=t.map(i(t.cos(e)),-1,1,t.height/4,t.height),c=t.map(i(t.cos(e)),-1,1,t.width,t.width/4),u=t.map(i(t.sin(e)),-1,1,t.height,t.height/4),s=Object(o.a)(t.width/2,t.height/2,e,t.width/3,!0);t.bezier.apply(t,[a,h].concat(s,s,[c,u])),t.bezier(t.width-a,t.height-h,t.width-s[0],t.height-s[1],t.width-s[0],t.height-s[1],t.width-c,t.height-u),!r&&1800===t.frameCount&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(e.c)(a.a,{sketch:h,path:n.pathname,description:""})}},446:function(t,n,i){"use strict";i.d(n,"c",function(){return e}),i.d(n,"d",function(){return a}),i.d(n,"b",function(){return o});var e=function(t,n,i){return t+Math.cos(n)*i},a=function(t,n,i){return t+Math.sin(n)*i},o=function(t,n,i,e,a,o){void 0===o&&(o=!1);var r=t+Math.cos(i)*e,h=n+Math.sin(i)*a;return o?[r,h]:{x:r,y:h}};n.a=function(t,n,i,o,r){void 0===r&&(r=!1);var h=e(t,i,o),c=a(n,i,o);return r?[h,c]:{x:h,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-15-js-e05ded4eb4d8134b9cf2.js.map