(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{Gdyg:function(e,t,n){"use strict";n.r(t);n("q1tI");var o=n("Gmm/"),a=n("Wbzz"),i=n("qKvR"),r=function(e){var t;e.preload=function(){t=e.loadImage(Object(a.withPrefix)("/assets/susan.png"))},e.setup=function(){e.createCanvas(660,840)},e.draw=function(){e.background(t);for(var n=e.map(e.mouseX,0,e.width,0,60),o=0;o<e.width+0;o+=60)for(var a=0;a<e.height+0;a+=60){var i=e.noise(o,a)*n;e.blend(t,o,a,60,60,o-i,a-i,60+2*i,60+2*i,e.MULTIPLY)}},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};t.default=function(e){var t=e.location;return Object(i.c)(o.a,{sketch:r,path:t.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-05-js-c976a3a28ed88f51b40f.js.map