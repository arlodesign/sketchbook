(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{417:function(o,t,e){"use strict";e.r(t);var n=e(10),r=(e(0),e(452)),i=(e(455),e(457),{}.DEV&&!0),a=function(o){var t,e,n,r=o.random(100);o.setup=function(){o.frameRate(30),i&&o.pixelDensity(1),o.createCanvas(660,840),o.colorMode(o.HSL,100),o.background(r,50,90),o.noFill(),o.strokeWeight(2),t=o.width/20,e=o.color(r,100,20,10),n=o.color(100-r,50,50,10),o.createLoop(60,{gif:!!i&&{render:!1,open:!0},noiseRadius:.8})},o.draw=function(){var r=o.animLoop,a=r.noise1D,p=r.theta;o.push(),o.translate(o.width/2,o.height/2),o.stroke(o.lerpColor(e,n,o.map(o.sin(p),-1,1,0,1))),o.line((-o.width/2+t)*a(-o.width/2+t),-o.height/2+t,(o.width/2-t)*a(o.width/2-t),o.height/2-t),o.pop(),!i&&1800===o.frameCount&&o.noLoop()}};t.default=function(o){var t=o.location;return Object(n.c)(r.a,{sketch:a,path:t.pathname,description:""})}},457:function(o,t,e){"use strict";t.a=function(o,t,e,n,r,i,a){if(void 0===a&&(a=!0),i<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var p=0;p<1;p+=i)(0!==p||a)&&o.random()>p&&o.point(o.lerp(t,n,p),o.lerp(e,r,p))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-06-js-60dfc4555b7636c45b51.js.map