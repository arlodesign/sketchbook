(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{244:function(o,e,a){"use strict";a.r(e);var n=a(10),t=(a(0),a(427)),i=function(o){var e,a,n,t,i=0;o.setup=function(){o.createCanvas(660,840),n=o.floor(o.random(2,10)),t=o.floor(o.random(3)),e=.03/o.TWO_PI,a=o.height/6,o.background(255),o.stroke("rgba(0, 0, 0, 0.5)"),o.strokeWeight(.5),o.noFill()},o.draw=function(){i+=e;var r=o.width/2+o.cos(i)*(o.width/4),c=o.height/2+o.cos(i)*(o.width/4),s=r+o.cos(i)*a,d=c+o.sin(i*n)*a,h=r+o.cos(i+o.HALF_PI)*a,f=c+o.sin(i*n+o.HALF_PI)*a,u=r+o.cos(i+o.PI)*a,p=c+o.sin(i*n+o.PI)*a;switch(t){case 0:o.bezier(s,d,u,p,h,f,s,d);break;case 1:o.bezier(u,p,s,d,h,f,u,p);break;default:o.bezier(h,f,s,d,u,p,h,f)}i>o.TWO_PI&&o.noLoop()}};e.default=function(o){var e=o.location;return Object(n.c)(t.a,{sketch:i,path:e.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-14-js-805422538daeda261bfd.js.map