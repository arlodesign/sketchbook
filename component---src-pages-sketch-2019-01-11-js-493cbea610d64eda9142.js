(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{x0iJ:function(i,o,t){"use strict";t.r(o);t("q1tI");var n=t("Gmm/"),e=t("qKvR"),a=function(i){var o,t,n,e,a=0;i.setup=function(){i.createCanvas(660,840),o=.01/i.TWO_PI,t=i.height/2,n=i.floor(i.random([1,2,3,5])),e=i.floor(i.random([7,11,13,17])),i.background(255),i.strokeWeight(.25),i.noFill()},i.draw=function(){a+=o;var r=i.width/2+i.cos(a*n)*t,c=i.height/2+i.sin(a*e)*t,h=i.width/2+i.cos(a*e+i.HALF_PI)*t,s=i.height/2+i.sin(a*n+i.HALF_PI)*t,d=i.width/2+i.cos(a*n+i.PI)*t,f=i.height/2+i.sin(a*e+i.PI)*t,p=i.width/2+i.cos(a*e+.75*i.PI)*t,u=i.height/2+i.sin(a*n+.75*i.PI)*t;i.bezier(r,c,h,s,d,f,p,u),a>i.PI&&i.noLoop()}};o.default=function(i){var o=i.location;return Object(e.c)(n.a,{sketch:a,path:o.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-11-js-493cbea610d64eda9142.js.map