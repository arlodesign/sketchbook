(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{173:function(n,o,a){"use strict";a.r(o);var e=a(9),s=(a(0),a(304)),t=function(n){var o,a,e,s,t,i=0;n.setup=function(){n.createCanvas(660,840),n.background(0),n.noFill(),o=60*n.PI,a=n.random(250,300),e=n.random(10,15)/o,s=n.width/2,t=n.height/2},n.draw=function(){var r,c,u,f;switch(n.frameCount%3){case 0:r=s+n.cos(7*n.PI/6)*a/2,c=t+n.sin(7*n.PI/6)*a/2,u=s+n.cos(7*n.PI/6)*a*2,f=t+n.sin(7*n.PI/6)*a*2;break;case 1:r=s+n.cos(11*n.PI/6)*a/2,c=t+n.sin(11*n.PI/6)*a/2,u=s+n.cos(11*n.PI/6)*a*2,f=t+n.sin(11*n.PI/6)*a*2;break;case 2:r=s+n.cos(n.HALF_PI)*a/2,c=t+n.sin(n.HALF_PI)*a/2,u=s+n.cos(n.HALF_PI)*a*2,f=t+n.sin(n.HALF_PI)*a*2}var I=n.noise(n.frameCount)*(a/20),P=s+n.cos(i)*(a-I),d=t+n.sin(i)*(a-I);n.stroke(n.frameCount%5?255:0),n.strokeWeight(n.frameCount%5?1:2),n.bezier(P,d,s,t,u,f,r,c),(i+=e)>o&&n.noLoop()}};o.default=function(n){var o=n.location;return Object(e.c)(s.a,{sketch:t,path:o.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-19-js-10c0219a39233274729a.js.map