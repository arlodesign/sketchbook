(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{176:function(n,o,t){"use strict";t.r(o);t(256);var e=t(0),a=t.n(e),r=t(258),i=function(n){var o,t,e;n.setup=function(){n.createCanvas(660,840),n.background(255),n.rectMode(n.CENTER),o=n.random(150,250),t=n.width/2,e=n.height/2},n.draw=function(){var a=n.noise(n.frameCount)+.5,r=t+n.cos(n.frameCount%360*(n.TWO_PI/360))*o*a,i=e+n.sin(n.frameCount%360*(n.TWO_PI/360))*o*a;n.fill("rgba(0, 0, 0, "+n.noise(r,i)/5+")"),n.noStroke(),n.ellipse(r,i,o*a),360===n.frameCount&&n.noLoop()}};o.default=function(n){var o=n.location;return a.a.createElement(r.a,{sketch:i,path:o.pathname,description:"Reload page for a different variation."})}},256:function(n,o,t){var e=t(11);e(e.P,"Array",{fill:t(257)}),t(32)("fill")},257:function(n,o,t){"use strict";var e=t(25),a=t(73),r=t(14);n.exports=function(n){for(var o=e(this),t=r(o.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,t),f=i>2?arguments[2]:void 0,u=void 0===f?t:a(f,t);u>c;)o[c++]=n;return o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-21-js-56a4af7b7e31698762ce.js.map