(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{189:function(n,o,t){"use strict";t.r(o);t(341);var e=t(12),r=(t(0),t(340)),a=function(n){var o,t,e;n.setup=function(){n.createCanvas(660,840),n.background(255),n.rectMode(n.CENTER),o=n.random(150,250),t=n.width/2,e=n.height/2},n.draw=function(){var r=n.noise(n.frameCount)+.5,a=t+n.cos(n.frameCount%360*(n.TWO_PI/360))*o*r,i=e+n.sin(n.frameCount%360*(n.TWO_PI/360))*o*r;n.fill("rgba(0, 0, 0, "+n.noise(a,i)/5+")"),n.noStroke(),n.ellipse(a,i,o*r),360===n.frameCount&&n.noLoop()}};o.default=function(n){var o=n.location;return Object(e.c)(r.a,{sketch:a,path:o.pathname,description:"Reload page for a different variation."})}},341:function(n,o,t){var e=t(9);e(e.P,"Array",{fill:t(342)}),t(67)("fill")},342:function(n,o,t){"use strict";var e=t(34),r=t(100),a=t(18);n.exports=function(n){for(var o=e(this),t=a(o.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,t),f=i>2?arguments[2]:void 0,u=void 0===f?t:r(f,t);u>c;)o[c++]=n;return o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-21-js-7e42e6875bafdcacf926.js.map