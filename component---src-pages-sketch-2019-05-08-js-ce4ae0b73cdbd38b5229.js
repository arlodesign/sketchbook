(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{AozG:function(o,n,t){"use strict";t.r(n);t("q1tI");var e=t("Gmm/"),a=t("WK/p"),r=t("qKvR"),i=function(o){var n=o.random(100/3),t=o.random(30,50),e=1,r=0;o.setup=function(){o.createCanvas(660,840),o.blendMode(o.OVERLAY),o.colorMode(o.HSB,100),o.background(3*n,10,100/3)},o.draw=function(){var i=o.noise(o.frameCount*(e/1e3),r*(e/1e3))*(e/250),c=o.map(o.noise(o.frameCount/(t*e),r/500),0,1,0,o.width/(e/2+.5),!0);o.strokeWeight(e+1),o.stroke(n*e,100/3*e,75,50),Object(a.a)(o,0,r,o.width/2+c,r,i),(r+=e)>o.height&&(e++,r=0,e>3&&o.noLoop())}};n.default=function(o){var n=o.location;return Object(r.c)(e.a,{sketch:i,path:n.pathname,description:""})}},"WK/p":function(o,n,t){"use strict";n.a=function(o,n,t,e,a,r,i,c){void 0===i&&(i=!0),void 0===c&&(c=!0);for(var d=Math.max(r,.01/o.dist(n,t,e,a)),p=0;p<1;p+=d)(0!==p||i)&&(c&&o.random()>p||!c)&&o.point(o.lerp(n,e,p),o.lerp(t,a,p))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-08-js-ce4ae0b73cdbd38b5229.js.map