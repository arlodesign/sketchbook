(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{207:function(n,a,t){"use strict";t.r(a);var r=t(7),e=(t(0),t(385)),o=function(n){var a,t=[];function r(){var t=n.random(-a,a);return Math.min(Math.max(t,-a/2),a/2)}n.setup=function(){n.createCanvas(660,840,n.WEBGL),n.noFill(),n.strokeWeight(.5),a=n.random(300,500);for(var e=0;e<2*a;e++)t[e]={x:r(),y:r(),z:r()}},n.draw=function(){n.background("white"),n.camera(n.cos(n.frameCount/100)*a,n.sin(n.frameCount/100)*a,n.sin(n.frameCount/100)*a,0,0,0,0,1,0);for(var r=0;r<t.length;r++){var e=t[r];if(n.push(),n.translate(e.x,e.y,e.z),n.sphere(a/100*n.noise(e.x,e.y,e.z)),n.pop(),r<t.length/2){var o=t[t.length-1-r];n.bezier(e.x,e.y,e.z,-a/100,-a/100,-a/100,a/100,a/100,a/100,o.x,o.y,o.z)}}}};a.default=function(n){var a=n.location;return Object(r.c)(e.a,{sketch:o,path:a.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-22-js-effa01ab2ea79d3938a4.js.map