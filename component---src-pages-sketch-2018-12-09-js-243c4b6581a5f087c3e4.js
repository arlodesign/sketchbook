(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{165:function(n,t,i){"use strict";i.r(t);var e=i(0),a=i.n(e),o=i(259),r=function(n){var t,i,e=0,a=10,o={};n.setup=function(){n.createCanvas(660,840),n.background("black"),n.noFill(),o={width:n.width/1.6180339887,height:n.height/1.6180339887},t=n.random(1,3)*n.random(),i=t*n.noise(t)*10},n.draw=function(){e+=t,a+=i;var r=n.noise(e,a),h=n.cos(e*r)*a,c=n.sin(e*r)*a,s=n.sin(e*r)*a,d=n.cos(e*r)*a;n.stroke("rgba(255, 255, 255, "+r+")"),n.strokeWeight(t*r+1),n.line(o.width,o.height,h,c),n.line(o.width,o.height,s,d),h>1.6180339887*n.width&&c>1.6180339887*n.height&&n.noLoop()}};t.default=function(n){var t=n.location;return a.a.createElement(o.a,{sketch:r,path:t.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-09-js-243c4b6581a5f087c3e4.js.map