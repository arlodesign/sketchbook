(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{155:function(t,n,a){"use strict";a.r(n);var e=a(0),i=a.n(e),o=a(263),h=function(t){var n,a,e=0,i=0;t.setup=function(){t.createCanvas(660,840),t.background("white"),t.noFill(),t.strokeWeight(2),n=t.random(10,20),a=2*Math.sqrt(Math.pow(t.width*(2/3),2)+Math.pow(t.height*(2/3),2))},t.draw=function(){var o=t.width/3+t.cos(e)*t.random(i-100,i+100),h=t.height/3+t.sin(e)*t.random(i-100,i+100),r=t.width/3+t.sin(e)*t.random(i-100,i+100),d=t.height/3+t.cos(e)*t.random(i-100,i+100);t.triangle(t.width/3,t.height/3,o,h,r,d),t.push(),t.strokeWeight(1),t.ellipse(t.width/3,t.height/3,i),t.pop(),i>a&&t.noLoop(),e+=n,i+=n}};n.default=function(t){var n=t.location;return i.a.createElement(o.a,{sketch:h,path:n.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-11-28-js-b2d86eb7c81f21ef1015.js.map