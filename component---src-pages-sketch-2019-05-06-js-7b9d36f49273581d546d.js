(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{288:function(t,n,o){"use strict";o.r(n);var a=o(9),i=(o(0),o(294)),e=o(310),r=function(t){var n,o,a,i,r;t.setup=function(){t.createCanvas(660,840),t.background("white"),t.noFill(),t.stroke(0),n=t.random(10,20),o=i=t.width/2,a=r=t.height/2},t.draw=function(){var c=t.random([-n,n]),d=t.random([-n,n]);t.strokeWeight(n*t.noise(o,a)),a=r+d,(o=i+c)>0&&a>0&&o<t.width&&a<t.height?(Object(e.a)(t,i,r,o,a,t.random()),Object(e.a)(t,t.width-i,t.height-r,t.width-o,t.height-a,t.random())):t.noLoop(),i=o,r=a}};n.default=function(t){var n=t.location;return Object(a.c)(i.a,{sketch:r,path:n.pathname,description:"Reload page for a different variation."})}},310:function(t,n,o){"use strict";n.a=function(t,n,o,a,i,e,r){void 0===r&&(r=!0);for(var c=0;c<1;c+=e)(0!==c||r)&&t.random()>c&&t.point(t.lerp(n,a,c),t.lerp(o,i,c))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-06-js-7b9d36f49273581d546d.js.map