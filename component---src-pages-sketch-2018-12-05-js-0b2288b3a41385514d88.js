(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{162:function(e,n,o){"use strict";o.r(n);var t=o(0),a=o.n(t),r=o(252),i=o(256),s=function(e){var n;e.preload=function(){n=e.loadImage(Object(i.c)("/assets/susan.png"))},e.setup=function(){e.createCanvas(660,840)},e.draw=function(){e.background(n);for(var o=e.map(e.mouseX,0,e.width,0,60),t=0;t<e.width+0;t+=60)for(var a=0;a<e.height+0;a+=60){var r=e.noise(t,a)*o;e.blend(n,t,a,60,60,t-r,a-r,60+2*r,60+2*r,e.MULTIPLY)}},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};n.default=function(e){var n=e.location;return a.a.createElement(r.a,{sketch:s,path:n.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-05-js-0b2288b3a41385514d88.js.map