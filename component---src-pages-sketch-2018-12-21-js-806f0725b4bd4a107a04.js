(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{206:function(n,o,a){"use strict";a.r(o);a(389);var e=a(7),t=(a(0),a(387)),r=function(n){var o,a,e;n.setup=function(){n.createCanvas(660,840),n.background(255),n.rectMode(n.CENTER),o=n.random(150,250),a=n.width/2,e=n.height/2},n.draw=function(){var t=n.noise(n.frameCount)+.5,r=a+n.cos(n.frameCount%360*(n.TWO_PI/360))*o*t,i=e+n.sin(n.frameCount%360*(n.TWO_PI/360))*o*t;n.fill("rgba(0, 0, 0, "+n.noise(r,i)/5+")"),n.noStroke(),n.ellipse(r,i,o*t),360===n.frameCount&&n.noLoop()}};o.default=function(n){var o=n.location;return Object(e.c)(t.a,{sketch:r,path:o.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-21-js-806f0725b4bd4a107a04.js.map