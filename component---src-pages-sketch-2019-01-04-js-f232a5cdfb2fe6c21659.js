(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{188:function(t,n,o){"use strict";o.r(n);o(305);var a=o(9),r=(o(0),o(304)),e=function(t){t.setup=function(){t.createCanvas(660,840,t.WEBGL),t.fill(255),t.noStroke()},t.draw=function(){t.background(0),t.directionalLight(t.min(t.frameCount,255),t.min(t.frameCount,255),t.min(t.frameCount,255),t.cos(t.frameCount/100),t.sin(t.frameCount/200),t.sin(t.frameCount/100)/2);for(var n=-t.floor(4.5);n<4.5;n++)t.push(),t.translate(t.width/9*n,0),t.rotateY(t.frameCount/1500*(n%2?-1:1)),t.rotateX(t.frameCount/2500),t.rotateZ(t.frameCount/3500+1e3*n),t.scale(t.map(t.sin(t.frameCount/5500),-1,1,1/3,3)),t.box(t.width/4.5,t.height/2,t.width/4.5),t.pop()}};n.default=function(t){var n=t.location;return Object(a.c)(r.a,{sketch:e,path:n.pathname})}},305:function(t,n,o){var a=o(12);a(a.P,"Array",{fill:o(306)}),o(36)("fill")},306:function(t,n,o){"use strict";var a=o(28),r=o(79),e=o(16);t.exports=function(t){for(var n=a(this),o=e(n.length),i=arguments.length,u=r(i>1?arguments[1]:void 0,o),f=i>2?arguments[2]:void 0,c=void 0===f?o:r(f,o);c>u;)n[u++]=t;return n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-04-js-f232a5cdfb2fe6c21659.js.map