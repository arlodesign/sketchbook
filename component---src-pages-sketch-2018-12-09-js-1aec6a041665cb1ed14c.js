(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{178:function(i,n,t){"use strict";t.r(n);var e=t(12),o=(t(0),t(346)),a=function(i){var n,t,e=0,o=10,a={};i.setup=function(){i.createCanvas(660,840),i.background("black"),i.noFill(),a={width:i.width/1.6180339887,height:i.height/1.6180339887},n=i.random(1,3)*i.random(),t=n*i.noise(n)*10},i.draw=function(){e+=n,o+=t;var h=i.noise(e,o),r=i.cos(e*h)*o,c=i.sin(e*h)*o,s=i.sin(e*h)*o,d=i.cos(e*h)*o;i.stroke("rgba(255, 255, 255, "+h+")"),i.strokeWeight(n*h+1),i.line(a.width,a.height,r,c),i.line(a.width,a.height,s,d),r>1.6180339887*i.width&&c>1.6180339887*i.height&&i.noLoop()}};n.default=function(i){var n=i.location;return Object(e.c)(o.a,{sketch:a,path:n.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-09-js-1aec6a041665cb1ed14c.js.map