(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{194:function(n,o,t){"use strict";t.r(o);var i=t(0),e=t.n(i),a=t(260),r=function(n){var o,t,i,e,a=0;n.setup=function(){n.createCanvas(660,840),o=.01/n.TWO_PI,t=n.height/2,i=n.floor(n.random([1,2,3,5])),e=n.floor(n.random([7,11,13,17])),n.background(255),n.strokeWeight(.25),n.noFill()},n.draw=function(){a+=o;var r=n.width/2+n.cos(a*i)*t,h=n.height/2+n.sin(a*e)*t,c=n.width/2+n.cos(a*e+n.HALF_PI)*t,s=n.height/2+n.sin(a*i+n.HALF_PI)*t,d=n.width/2+n.cos(a*i+n.PI)*t,f=n.height/2+n.sin(a*e+n.PI)*t,p=n.width/2+n.cos(a*e+.75*n.PI)*t,u=n.height/2+n.sin(a*i+.75*n.PI)*t;n.bezier(r,h,c,s,d,f,p,u),a>n.PI&&n.noLoop()}};o.default=function(n){var o=n.location;return e.a.createElement(a.a,{sketch:r,path:o.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-11-js-4f4573f59985ffd61ec5.js.map