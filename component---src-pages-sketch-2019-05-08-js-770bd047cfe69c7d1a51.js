(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{306:function(o,e,n){"use strict";n.r(e);var t=n(12),r=(n(0),n(345)),a=n(351),i=function(o){var e=o.random(100/3),n=o.random(30,50),t=1,r=0;o.setup=function(){o.createCanvas(660,840),o.blendMode(o.OVERLAY),o.colorMode(o.HSB,100),o.background(3*e,10,100/3)},o.draw=function(){var i=o.noise(o.frameCount*(t/1e3),r*(t/1e3))*(t/250),c=o.map(o.noise(o.frameCount/(n*t),r/500),0,1,0,o.width/(t/2+.5),!0);o.strokeWeight(t+1),o.stroke(e*t,100/3*t,75,50),Object(a.a)(o,0,r,o.width/2+c,r,i),(r+=t)>o.height&&(r=0,++t>3&&o.noLoop())}};e.default=function(o){var e=o.location;return Object(t.c)(r.a,{sketch:i,path:e.pathname,description:""})}},351:function(o,e,n){"use strict";e.a=function(o,e,n,t,r,a,i){if(void 0===i&&(i=!0),a<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var c=0;c<1;c+=a)(0!==c||i)&&o.random()>c&&o.point(o.lerp(e,t,c),o.lerp(n,r,c))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-08-js-770bd047cfe69c7d1a51.js.map