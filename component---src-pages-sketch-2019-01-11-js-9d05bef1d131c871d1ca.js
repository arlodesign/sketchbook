(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{226:function(o,i,n){"use strict";n.r(i);var t=n(20),e=(n(0),n(375)),a=function(o){var i,n,t,e,a=0;o.setup=function(){o.createCanvas(660,840),i=.01/o.TWO_PI,n=o.height/2,t=o.floor(o.random([1,2,3,5])),e=o.floor(o.random([7,11,13,17])),o.background(255),o.strokeWeight(.25),o.noFill()},o.draw=function(){a+=i;var r=o.width/2+o.cos(a*t)*n,c=o.height/2+o.sin(a*e)*n,h=o.width/2+o.cos(a*e+o.HALF_PI)*n,s=o.height/2+o.sin(a*t+o.HALF_PI)*n,d=o.width/2+o.cos(a*t+o.PI)*n,f=o.height/2+o.sin(a*e+o.PI)*n,p=o.width/2+o.cos(a*e+.75*o.PI)*n,u=o.height/2+o.sin(a*t+.75*o.PI)*n;o.bezier(r,c,h,s,d,f,p,u),a>o.PI&&o.noLoop()}};i.default=function(o){var i=o.location;return Object(t.c)(e.a,{sketch:a,path:i.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-11-js-9d05bef1d131c871d1ca.js.map