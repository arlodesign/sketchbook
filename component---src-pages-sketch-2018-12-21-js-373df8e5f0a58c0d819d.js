(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"6XtG":function(n,o,t){"use strict";t.r(o);t("n0hJ"),t("q1tI");var a=t("Gmm/"),e=t("qKvR"),r=function(n){var o,t,a;n.setup=function(){n.createCanvas(660,840),n.background(255),n.rectMode(n.CENTER),o=n.random(150,250),t=n.width/2,a=n.height/2},n.draw=function(){var e=n.noise(n.frameCount)+.5,r=t+n.cos(n.frameCount%360*(n.TWO_PI/360))*o*e,i=a+n.sin(n.frameCount%360*(n.TWO_PI/360))*o*e;n.fill("rgba(0, 0, 0, "+n.noise(r,i)/5+")"),n.noStroke(),n.ellipse(r,i,o*e),360===n.frameCount&&n.noLoop()}};o.default=function(n){var o=n.location;return Object(e.c)(a.a,{sketch:r,path:o.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-21-js-373df8e5f0a58c0d819d.js.map