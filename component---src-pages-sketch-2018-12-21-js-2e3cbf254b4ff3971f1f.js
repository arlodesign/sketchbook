(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{174:function(n,o,t){"use strict";t.r(o);t(273);var e=t(9),r=(t(0),t(275)),a=function(n){var o,t,e;n.setup=function(){n.createCanvas(660,840),n.background(255),n.rectMode(n.CENTER),o=n.random(150,250),t=n.width/2,e=n.height/2},n.draw=function(){var r=n.noise(n.frameCount)+.5,a=t+n.cos(n.frameCount%360*(n.TWO_PI/360))*o*r,i=e+n.sin(n.frameCount%360*(n.TWO_PI/360))*o*r;n.fill("rgba(0, 0, 0, "+n.noise(a,i)/5+")"),n.noStroke(),n.ellipse(a,i,o*r),360===n.frameCount&&n.noLoop()}};o.default=function(n){var o=n.location;return Object(e.c)(r.a,{sketch:a,path:o.pathname,description:"Reload page for a different variation."})}},273:function(n,o,t){var e=t(12);e(e.P,"Array",{fill:t(274)}),t(35)("fill")},274:function(n,o,t){"use strict";var e=t(28),r=t(78),a=t(16);n.exports=function(n){for(var o=e(this),t=a(o.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,t),f=i>2?arguments[2]:void 0,u=void 0===f?t:r(f,t);u>c;)o[c++]=n;return o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-21-js-2e3cbf254b4ff3971f1f.js.map