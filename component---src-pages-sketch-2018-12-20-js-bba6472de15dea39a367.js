(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{175:function(n,o,t){"use strict";t.r(o);t(255);var e=t(0),r=t.n(e),a=t(257),i=function(n){var o,t,e;n.setup=function(){n.createCanvas(660,840),n.background(255),n.strokeWeight(.75),o=n.random(250,350),t=n.width/2,e=n.height/2},n.draw=function(){var r,a,i,f;r=t+n.cos(n.frameCount%2160*(n.TWO_PI/2160))*o/2,a=e+n.sin(n.frameCount%2160*(n.TWO_PI/2160))*o/2,i=t+n.cos(n.frameCount%2160*(n.TWO_PI/2160))*o,f=e+n.sin(n.frameCount%2160*(n.TWO_PI/2160))*o;var s=t+n.cos(n.frameCount%2160)*(o/7),u=e+n.sin(n.frameCount%2160)*(o/7),c=n.noise(n.frameCount)*o,l=t+n.cos(n.frameCount%2160+o)*(o+c),d=e+n.sin(n.frameCount%2160+o)*(o+c),m="rgba(0, 0, 0, "+n.noise(s,u)/2+")";n.stroke(m),n.noFill(),n.bezier(s,u,l,d,i,f,r,a),n.fill(m),n.ellipse(l,d,2),2160===n.frameCount&&n.noLoop()}};o.default=function(n){var o=n.location;return r.a.createElement(a.a,{sketch:i,path:o.pathname,description:"Reload page for a different variation."})}},255:function(n,o,t){var e=t(11);e(e.P,"Array",{fill:t(256)}),t(32)("fill")},256:function(n,o,t){"use strict";var e=t(25),r=t(73),a=t(14);n.exports=function(n){for(var o=e(this),t=a(o.length),i=arguments.length,f=r(i>1?arguments[1]:void 0,t),s=i>2?arguments[2]:void 0,u=void 0===s?t:r(s,t);u>f;)o[f++]=n;return o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-20-js-bba6472de15dea39a367.js.map