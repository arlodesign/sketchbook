(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{"WK/p":function(t,n,o){"use strict";n.a=function(t,n,o,a,i,e,r,d){void 0===r&&(r=!0),void 0===d&&(d=!0);for(var c=Math.max(e,.01/t.dist(n,o,a,i)),h=0;h<1;h+=c)(0!==h||r)&&(d&&t.random()>h||!d)&&t.point(t.lerp(n,a,h),t.lerp(o,i,h))}},vq1J:function(t,n,o){"use strict";o.r(n);o("q1tI");var a=o("Gmm/"),i=o("WK/p"),e=o("qKvR"),r=function(t){var n,o,a,e,r;t.setup=function(){t.createCanvas(660,840),t.background("white"),t.noFill(),t.stroke(0),n=t.random(10,20),o=e=t.width/2,a=r=t.height/2},t.draw=function(){var d=t.random([-n,n]),c=t.random([-n,n]);t.strokeWeight(n*t.noise(o,a)),a=r+c,(o=e+d)>0&&a>0&&o<t.width&&a<t.height?(Object(i.a)(t,e,r,o,a,t.random()),Object(i.a)(t,t.width-e,t.height-r,t.width-o,t.height-a,t.random())):t.noLoop(),e=o,r=a}};n.default=function(t){var n=t.location;return Object(e.c)(a.a,{sketch:r,path:n.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-06-js-7300f9371033f3036638.js.map