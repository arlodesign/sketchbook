(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{217:function(t,a,n){"use strict";n.r(a);n(399);var o=n(7),e=(n(0),n(397)),r=function(t){var a=0;t.setup=function(){t.createCanvas(660,840),t.background(255),t.rectMode(t.CENTER),t.noStroke()},t.draw=function(){var n=t.noise(t.frameCount);if(t.fill("rgba(0, 0, 0, "+n+")"),t.rect(a,t.height/2,30*n,t.height*n),(a+=20*n)>=t.width){for(var o=0;o<1e4;o++)t.stroke(o%2?"rgba(0, 0, 0, 0.5)":"rgba(255, 255, 255, 0.5)"),t.point(t.randomGaussian(t.width/2,t.width/3),t.randomGaussian(t.height/2,t.height/3));t.noLoop()}}};a.default=function(t){var a=t.location;return Object(o.c)(e.a,{sketch:r,path:a.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-02-js-e251602921c136ff2189.js.map