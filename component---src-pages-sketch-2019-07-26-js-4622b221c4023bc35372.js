(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{408:function(e,o,n){"use strict";n.r(o);n(435);var a=n(10),t=(n(0),n(433)),i=(n(439),{}.DEV&&!1),r=function(e){e.setup=function(){i&&(e.pixelDensity(1),e.frameRate(30)),e.createCanvas(660,840),e.rectMode(e.CENTER),e.noStroke(),e.createLoop(5,{gif:!!i&&{render:!1,open:!0},noiseRadius:1})},e.draw=function(){e.blendMode(e.BLEND),e.background(0),e.blendMode(e.EXCLUSION),e.translate(e.width/2,e.height/2),["red","green","blue"].forEach(function(o,n){e.fill(o);for(var a=-3;a<=3;a++)for(var t=-3;t<=3;t++){var i=e.map(e.sin(e.animLoop.theta),-1,1,3,e.animLoop.noise2D(a,n)+1),r=e.map(e.cos(e.animLoop.theta),-1,1,3,e.animLoop.noise2D(t,n)+1),p=e.map(e.cos(e.animLoop.theta),-1,1,1,e.animLoop.noise2D(a,t));e.push(),e.translate(50*a*i,50*t*r),e.scale(p,p),e.rect(0,0,50,50),e.pop()}})}};o.default=function(e){var o=e.location;return Object(a.c)(t.a,{sketch:r,path:o.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-26-js-4622b221c4023bc35372.js.map