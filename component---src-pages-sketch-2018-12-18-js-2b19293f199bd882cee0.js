(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{186:function(n,t,a){"use strict";a.r(t);var o=a(12),e=(a(0),a(343)),i=function(n){var t,a,o,e,i=0,r=0,c=0,s=!1,d=0;n.setup=function(){n.createCanvas(660,840),n.background(0),n.noFill(),n.strokeWeight(.7),o=n.random(300,500),e=n.random(5,10),t=n.width+50,a=n.random(0,n.height)},n.draw=function(){var p=t+n.cos(c)*r,h=a+n.sin(c)*r,u=n.noise(p,h);p>0&&h>0&&p<n.width&&h<n.height&&(s=!0,d++,n.stroke("rgba(255, 255, 255, "+u+")"),n.bezier(t,a,t+r*u,a+r*u,p+r*u,h+r*u,p,h)),(c+=e)/360>i&&(s&&0===d&&n.noLoop(),d=0,r+=e,e+=e/o,i++)}};t.default=function(n){var t=n.location;return Object(o.c)(e.a,{sketch:i,path:t.pathname,description:"Be patient. Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-18-js-2b19293f199bd882cee0.js.map