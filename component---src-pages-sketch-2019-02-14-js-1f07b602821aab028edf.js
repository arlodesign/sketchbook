(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{274:function(n,o,a){"use strict";a.r(o);a(456);var t=a(10),e=(a(0),a(454)),i=function(n){n.setup=function(){n.createCanvas(660,840),n.noStroke(),n.colorMode(n.HSB,100),n.noiseDetail(2,.5)},n.draw=function(){n.background(255);for(var o,a=5,t=5;a<n.width;){for(;t<n.height;){var e=n.noise(.01*a,.01*t,n.frameCount/100);n.fill((o=n.TWO_PI*e,n.color(100*n.abs(n.sin(o)),100*n.abs(n.tan(-o+n.PI)),100))),n.ellipse(a,t,10*e*1.5,10*e*1.5),t+=10}a+=10,t=5}}};o.default=function(n){var o=n.location;return Object(t.c)(e.a,{sketch:i,path:o.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-14-js-1f07b602821aab028edf.js.map