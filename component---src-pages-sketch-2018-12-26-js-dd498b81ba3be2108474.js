(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{179:function(n,t,o){"use strict";o.r(t);o(280);var r=o(9),a=(o(0),o(279)),e=function(n){var t;n.setup=function(){n.createCanvas(660,840,n.WEBGL),n.fill(0),t=n.floor(n.random(300,600)),n.strokeWeight(t/100)},n.draw=function(){n.background(0),n.camera(n.sin(n.frameCount/t)*t,n.cos(n.frameCount/t)*t,t,0,0,0,0,1,0);for(var o=0;o<t;o++)n.stroke("rgba(255, 255, 255, "+o/t+")"),n.line(n.cos(n.frameCount+o)*o,n.sin(n.frameCount+o)*o,n.tan(n.frameCount+o)*o,n.cos(n.frameCount+o)*o,n.sin(n.frameCount+o)*o,0);n.frameCount}};t.default=function(n){var t=n.location;return Object(r.c)(a.a,{sketch:e,path:t.pathname})}},280:function(n,t,o){var r=o(12);r(r.P,"Array",{fill:o(281)}),o(35)("fill")},281:function(n,t,o){"use strict";var r=o(28),a=o(78),e=o(16);n.exports=function(n){for(var t=r(this),o=e(t.length),i=arguments.length,u=a(i>1?arguments[1]:void 0,o),f=i>2?arguments[2]:void 0,c=void 0===f?o:a(f,o);c>u;)t[u++]=n;return t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-26-js-dd498b81ba3be2108474.js.map