(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{257:function(t,o,r){"use strict";r.r(o);r(423),r(138);var n=r(10),e=(r(0),r(421)),a=function(t){var o=10,r=[];function n(n,e){var a=function(n,e){return r.sort(function(o,r){return t.dist(n,e,o.vector.x,o.vector.y)-t.dist(n,e,r.vector.x,r.vector.y)}),r[o-1]}(n,e),i=a.vector,c=a.color;t.stroke(c,c,c,32),t.line(n,e,i.x,i.y)}t.setup=function(){t.createCanvas(660,840),t.background(255),r=new Array(o).fill().map(function(o,r){return{vector:t.createVector(t.randomGaussian(t.width/2,t.width/30*3),t.randomGaussian(t.height/2,t.height/30*3)),color:[255,169.83,0][r%3]}})},t.draw=function(){var o=t.floor(t.frameCount/(t.width/30)),r=t.floor(t.frameCount-t.width/30*o);if(o<t.height/30)for(var e=0;e<30;e++)for(var a=0;a<30;a++)!(t.frameCount%t.floor(30/13))&&n(r+t.width/30*e,o+t.height/30*a);else t.noLoop()}};o.default=function(t){var o=t.location;return Object(n.c)(e.a,{sketch:a,path:o.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-28-js-09032cc6f966bd0bb7fd.js.map