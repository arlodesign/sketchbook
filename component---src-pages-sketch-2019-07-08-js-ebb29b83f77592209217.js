(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{374:function(o,n,t){"use strict";t.r(n);t(48),t(391);var a=t(7),e=(t(0),t(388)),r=(t(402),function(o){var n=o.random(1/3),t=Array.from({length:3},function(o,t){return n+1/3*t});o.setup=function(){o.createCanvas(660,840),o.createLoop(10,{gif:!1,noiseRadius:1}),o.colorMode(o.HSB,1)},o.draw=function(){o.blendMode(o.BLEND),o.background(0),o.blendMode(o.HARD_LIGHT);for(var n=function(n){t.forEach(function(t){o.push(),o.translate(n,0),o.stroke(t,.5,1),o.strokeWeight(o.map(o.cos(o.animLoop.theta),-1,1,1,15));var a=o.map(o.cos(o.animLoop.theta),-1,1,0,30*o.animLoop.noise2D(n,t)*3);o.line(a,0,a,o.height),o.pop()})},a=0;a<=o.width;a+=30)n(a)}});n.default=function(o){var n=o.location;return Object(a.c)(e.a,{sketch:r,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-08-js-ebb29b83f77592209217.js.map