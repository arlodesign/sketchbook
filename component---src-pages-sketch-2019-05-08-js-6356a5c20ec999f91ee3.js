(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{AozG:function(o,e,n){"use strict";n.r(e);n("q1tI");var t=n("Gmm/"),r=n("WK/p"),a=n("qKvR"),i=function(o){var e=o.random(100/3),n=o.random(30,50),t=1,a=0;o.setup=function(){o.createCanvas(660,840),o.blendMode(o.OVERLAY),o.colorMode(o.HSB,100),o.background(3*e,10,100/3)},o.draw=function(){var i=o.noise(o.frameCount*(t/1e3),a*(t/1e3))*(t/250),c=o.map(o.noise(o.frameCount/(n*t),a/500),0,1,0,o.width/(t/2+.5),!0);o.strokeWeight(t+1),o.stroke(e*t,100/3*t,75,50),Object(r.a)(o,0,a,o.width/2+c,a,i),(a+=t)>o.height&&(a=0,++t>3&&o.noLoop())}};e.default=function(o){var e=o.location;return Object(a.c)(t.a,{sketch:i,path:e.pathname,description:""})}},"WK/p":function(o,e,n){"use strict";e.a=function(o,e,n,t,r,a,i){if(void 0===i&&(i=!0),a<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var c=0;c<1;c+=a)(0!==c||i)&&o.random()>c&&o.point(o.lerp(e,t,c),o.lerp(n,r,c))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-08-js-6356a5c20ec999f91ee3.js.map