(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{MH9l:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),r=o.n(n),a=o("Bl7J"),i=o("9VVL"),h=(o("PZSu"),o("WK/p")),p={}.DEV&&!1,c=function(e){var t,o,n,r=e.random(100);e.setup=function(){e.frameRate(30),p&&e.pixelDensity(1),e.createCanvas(660,840),e.colorMode(e.HSL,100),e.background(r,50,90),e.noFill(),e.strokeWeight(2),t=e.width/20,o=e.color(r,100,20,80),n=e.color(100-r,50,50,80),e.createLoop(60,{gif:!!p&&{render:!1,open:!0},noiseRadius:.3})},e.draw=function(){var r=e.animLoop,a=r.noise1D,i=r.theta;e.push(),e.translate(e.width/2,e.height/2),e.stroke(e.lerpColor(o,n,e.map(e.sin(i),-1,1,0,1))),Object(h.a)(e,(-e.width/2+t)*a(-e.width/2+t),(-e.height/2+t)*a(-e.height/2+t),(e.width/2-t)*a(e.width/2-t),(e.height/2-t)*a(e.height/2-t),e.map(a(e.cos(i)),-1,1,1e-11,.1)),e.pop(),!p&&1800===e.frameCount&&e.noLoop()}};t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(i.a,{sketch:c}))}},"WK/p":function(e,t,o){"use strict";t.a=function(e,t,o,n,r,a,i){if(void 0===i&&(i=!0),a<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var h=0;h<1;h+=a)(0!==h||i)&&e.random()>h&&e.point(e.lerp(t,n,h),e.lerp(o,r,h))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-05-js-e4e46540d25d7afe97ed.js.map