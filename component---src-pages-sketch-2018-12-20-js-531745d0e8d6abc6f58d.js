(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{205:function(n,o,e){"use strict";e.r(o);e(401);var a=e(7),t=(e(0),e(399)),r=function(n){var o,e,a;n.setup=function(){n.createCanvas(660,840),n.background(255),n.strokeWeight(.75),o=n.random(250,350),e=n.width/2,a=n.height/2},n.draw=function(){var t,r,i,s;t=e+n.cos(n.frameCount%2160*(n.TWO_PI/2160))*o/2,r=a+n.sin(n.frameCount%2160*(n.TWO_PI/2160))*o/2,i=e+n.cos(n.frameCount%2160*(n.TWO_PI/2160))*o,s=a+n.sin(n.frameCount%2160*(n.TWO_PI/2160))*o;var u=e+n.cos(n.frameCount%2160)*(o/7),f=a+n.sin(n.frameCount%2160)*(o/7),c=n.noise(n.frameCount)*o,m=e+n.cos(n.frameCount%2160+o)*(o+c),p=a+n.sin(n.frameCount%2160+o)*(o+c),C="rgba(0, 0, 0, "+n.noise(u,f)/2+")";n.stroke(C),n.noFill(),n.bezier(u,f,m,p,i,s,t,r),n.fill(C),n.ellipse(m,p,2),2160===n.frameCount&&n.noLoop()}};o.default=function(n){var o=n.location;return Object(a.c)(t.a,{sketch:r,path:o.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-20-js-531745d0e8d6abc6f58d.js.map