(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{416:function(t,e,o){"use strict";o.r(e);var r=o(10),n=(o(0),o(450)),i=(o(453),o(455)),a={}.DEV&&!1,h=function(t){var e,o,r,n=t.random(100);t.setup=function(){t.frameRate(30),a&&t.pixelDensity(1),t.createCanvas(660,840),t.colorMode(t.HSL,100),t.background(n,50,90),t.noFill(),t.strokeWeight(2),e=t.width/20,o=t.color(n,100,20,80),r=t.color(100-n,50,50,80),t.createLoop(60,{gif:!!a&&{render:!1,open:!0},noiseRadius:.3})},t.draw=function(){var n=t.animLoop,h=n.noise1D,c=n.theta;t.push(),t.translate(t.width/2,t.height/2),t.stroke(t.lerpColor(o,r,t.map(t.sin(c),-1,1,0,1))),Object(i.a)(t,(-t.width/2+e)*h(-t.width/2+e),(-t.height/2+e)*h(-t.height/2+e),(t.width/2-e)*h(t.width/2-e),(t.height/2-e)*h(t.height/2-e),t.map(h(t.cos(c)),-1,1,1e-11,.1)),t.pop(),!a&&1800===t.frameCount&&t.noLoop()}};e.default=function(t){var e=t.location;return Object(r.c)(n.a,{sketch:h,path:e.pathname,description:""})}},455:function(t,e,o){"use strict";e.a=function(t,e,o,r,n,i,a){if(void 0===a&&(a=!0),i<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var h=0;h<1;h+=i)(0!==h||a)&&t.random()>h&&t.point(t.lerp(e,r,h),t.lerp(o,n,h))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-05-js-d6c931d1d9ea8ab503d7.js.map