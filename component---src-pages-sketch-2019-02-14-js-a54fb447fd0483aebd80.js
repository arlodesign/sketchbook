(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{226:function(n,o,t){"use strict";t.r(o);t(304);var i=t(9),r=(t(0),t(303)),a=function(n){n.setup=function(){n.createCanvas(660,840),n.noStroke(),n.colorMode(n.HSB,100),n.noiseDetail(2,.5)},n.draw=function(){n.background(255);for(var o,t=5,i=5;t<n.width;){for(;i<n.height;){var r=n.noise(.01*t,.01*i,n.frameCount/100);n.fill((o=n.TWO_PI*r,n.color(100*n.abs(n.sin(o)),100*n.abs(n.tan(-o+n.PI)),100))),n.ellipse(t,i,10*r*1.5,10*r*1.5),i+=10}t+=10,i=5}}};o.default=function(n){var o=n.location;return Object(i.c)(r.a,{sketch:a,path:o.pathname})}},304:function(n,o,t){var i=t(12);i(i.P,"Array",{fill:t(305)}),t(36)("fill")},305:function(n,o,t){"use strict";var i=t(28),r=t(79),a=t(16);n.exports=function(n){for(var o=i(this),t=a(o.length),e=arguments.length,c=r(e>1?arguments[1]:void 0,t),s=e>2?arguments[2]:void 0,u=void 0===s?t:r(s,t);u>c;)o[c++]=n;return o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-14-js-a54fb447fd0483aebd80.js.map