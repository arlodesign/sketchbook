(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{173:function(n,o,t){"use strict";t.r(o);t(290);var e=t(9),r=(t(0),t(289)),a=function(n){var o,t,e;n.setup=function(){n.createCanvas(660,840),n.background(255),n.strokeWeight(.75),o=n.random(250,350),t=n.width/2,e=n.height/2},n.draw=function(){var r,a,i,f;r=t+n.cos(n.frameCount%2160*(n.TWO_PI/2160))*o/2,a=e+n.sin(n.frameCount%2160*(n.TWO_PI/2160))*o/2,i=t+n.cos(n.frameCount%2160*(n.TWO_PI/2160))*o,f=e+n.sin(n.frameCount%2160*(n.TWO_PI/2160))*o;var s=t+n.cos(n.frameCount%2160)*(o/7),u=e+n.sin(n.frameCount%2160)*(o/7),c=n.noise(n.frameCount)*o,l=t+n.cos(n.frameCount%2160+o)*(o+c),d=e+n.sin(n.frameCount%2160+o)*(o+c),p="rgba(0, 0, 0, "+n.noise(s,u)/2+")";n.stroke(p),n.noFill(),n.bezier(s,u,l,d,i,f,r,a),n.fill(p),n.ellipse(l,d,2),2160===n.frameCount&&n.noLoop()}};o.default=function(n){var o=n.location;return Object(e.c)(r.a,{sketch:a,path:o.pathname,description:"Reload page for a different variation."})}},290:function(n,o,t){var e=t(12);e(e.P,"Array",{fill:t(291)}),t(35)("fill")},291:function(n,o,t){"use strict";var e=t(28),r=t(78),a=t(16);n.exports=function(n){for(var o=e(this),t=a(o.length),i=arguments.length,f=r(i>1?arguments[1]:void 0,t),s=i>2?arguments[2]:void 0,u=void 0===s?t:r(s,t);u>f;)o[f++]=n;return o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-20-js-2d2844bd078b93b0a973.js.map