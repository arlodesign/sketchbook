(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{372:function(n,e,o){"use strict";o.r(e);o(384);var t=o(7),a=(o(0),o(382)),i=(o(408),function(n){var e=n.shuffle(["magenta","yellow","cyan"]);n.setup=function(){n.createCanvas(660,840),n.createLoop(3,{gif:!1,noiseRadius:.1}),n.rectMode(n.CENTER),n.noStroke()},n.draw=function(){n.blendMode(n.BLEND),n.background(255),n.blendMode(n.MULTIPLY),[n.width/30,n.width/10,n.width/5].forEach(function(o,t){for(var a=0;a<n.width;a+=o)for(var i=0;i<n.height;i+=o)n.push(),n.fill(e[t]),n.translate(a+o/2,i+o/2),n.scale(n.animLoop.noise2D(a+o/2,i+o/2)),n.circle(0,0,o),n.pop()})}});e.default=function(n){var e=n.location;return Object(t.c)(a.a,{sketch:i,path:e.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-06-js-5b2b7ad1f5fec619748d.js.map