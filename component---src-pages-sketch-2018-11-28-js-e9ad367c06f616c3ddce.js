(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{168:function(t,i,n){"use strict";n.r(i);var o=n(12),a=(n(0),n(346)),e=function(t){var i,n,o=0,a=0;t.setup=function(){t.createCanvas(660,840),t.background("white"),t.noFill(),t.strokeWeight(2),i=t.random(10,20),n=2*Math.sqrt(Math.pow(t.width*(2/3),2)+Math.pow(t.height*(2/3),2))},t.draw=function(){var e=t.width/3+t.cos(o)*t.random(a-100,a+100),h=t.height/3+t.sin(o)*t.random(a-100,a+100),r=t.width/3+t.sin(o)*t.random(a-100,a+100),d=t.height/3+t.cos(o)*t.random(a-100,a+100);t.triangle(t.width/3,t.height/3,e,h,r,d),t.push(),t.strokeWeight(1),t.ellipse(t.width/3,t.height/3,a),t.pop(),a>n&&t.noLoop(),o+=i,a+=i}};i.default=function(t){var i=t.location;return Object(o.c)(a.a,{sketch:e,path:i.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-11-28-js-e9ad367c06f616c3ddce.js.map