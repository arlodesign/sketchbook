(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{234:function(t,a,n){"use strict";n.r(a);n(426);var o=n(10),e=(n(0),n(424)),r=function(t){var a=0;t.setup=function(){t.createCanvas(660,840),t.background(255),t.rectMode(t.CENTER),t.noStroke()},t.draw=function(){var n=t.noise(t.frameCount);if(t.fill("rgba(0, 0, 0, "+n+")"),t.rect(a,t.height/2,30*n,t.height*n),(a+=20*n)>=t.width){for(var o=0;o<1e4;o++)t.stroke(o%2?"rgba(0, 0, 0, 0.5)":"rgba(255, 255, 255, 0.5)"),t.point(t.randomGaussian(t.width/2,t.width/3),t.randomGaussian(t.height/2,t.height/3));t.noLoop()}}};a.default=function(t){var a=t.location;return Object(o.c)(e.a,{sketch:r,path:a.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-02-js-f864b4ca7d5f454c4c9b.js.map