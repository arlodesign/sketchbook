(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{227:function(n,t,o){"use strict";o.r(t);o(273);var a=o(0),e=o.n(a),r=o(272),i=function(n){n.setup=function(){n.createCanvas(660,840),n.noStroke(),n.colorMode(n.HSB,100),n.noiseDetail(2,.5)},n.draw=function(){n.background(255);for(var t,o=5,a=5;o<n.width;){for(;a<n.height;){var e=n.noise(.01*o,.01*a,n.frameCount/100);n.fill((t=n.TWO_PI*e,n.color(100*n.abs(n.sin(t)),100*n.abs(n.tan(-t+n.PI)),100))),n.ellipse(o,a,10*e*1.5,10*e*1.5),a+=10}o+=10,a=5}}};t.default=function(n){var t=n.location;return e.a.createElement(r.a,{sketch:i,path:t.pathname})}},273:function(n,t,o){var a=o(11);a(a.P,"Array",{fill:o(274)}),o(32)("fill")},274:function(n,t,o){"use strict";var a=o(25),e=o(73),r=o(14);n.exports=function(n){for(var t=a(this),o=r(t.length),i=arguments.length,c=e(i>1?arguments[1]:void 0,o),s=i>2?arguments[2]:void 0,u=void 0===s?o:e(s,o);u>c;)t[c++]=n;return t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-14-js-c7e4d1af65b897f24b84.js.map