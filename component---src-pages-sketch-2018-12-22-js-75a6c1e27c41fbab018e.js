(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{177:function(n,a,t){"use strict";t.r(a);var e=t(0),r=t.n(e),o=t(263),i=function(n){var a,t=[];function e(){var t=n.random(-a,a);return Math.min(Math.max(t,-a/2),a/2)}n.setup=function(){n.createCanvas(660,840,n.WEBGL),n.noFill(),n.strokeWeight(.5),a=n.random(300,500);for(var r=0;r<2*a;r++)t[r]={x:e(),y:e(),z:e()}},n.draw=function(){n.background("white"),n.camera(n.cos(n.frameCount/100)*a,n.sin(n.frameCount/100)*a,n.sin(n.frameCount/100)*a,0,0,0,0,1,0);for(var e=0;e<t.length;e++){var r=t[e];if(n.push(),n.translate(r.x,r.y,r.z),n.sphere(a/100*n.noise(r.x,r.y,r.z)),n.pop(),e<t.length/2){var o=t[t.length-1-e];n.bezier(r.x,r.y,r.z,-a/100,-a/100,-a/100,a/100,a/100,a/100,o.x,o.y,o.z)}}}};a.default=function(n){var a=n.location;return r.a.createElement(o.a,{sketch:i,path:a.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-22-js-75a6c1e27c41fbab018e.js.map