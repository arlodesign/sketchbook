(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{174:function(n,a,o){"use strict";o.r(a);var e=o(0),s=o.n(e),t=o(266),i=function(n){var a,o,e,s,t,i=0;n.setup=function(){n.createCanvas(660,840),n.background(0),n.noFill(),a=60*n.PI,o=n.random(250,300),e=n.random(10,15)/a,s=n.width/2,t=n.height/2},n.draw=function(){var r,c,u,f;switch(n.frameCount%3){case 0:r=s+n.cos(7*n.PI/6)*o/2,c=t+n.sin(7*n.PI/6)*o/2,u=s+n.cos(7*n.PI/6)*o*2,f=t+n.sin(7*n.PI/6)*o*2;break;case 1:r=s+n.cos(11*n.PI/6)*o/2,c=t+n.sin(11*n.PI/6)*o/2,u=s+n.cos(11*n.PI/6)*o*2,f=t+n.sin(11*n.PI/6)*o*2;break;case 2:r=s+n.cos(n.HALF_PI)*o/2,c=t+n.sin(n.HALF_PI)*o/2,u=s+n.cos(n.HALF_PI)*o*2,f=t+n.sin(n.HALF_PI)*o*2}var I=n.noise(n.frameCount)*(o/20),P=s+n.cos(i)*(o-I),d=t+n.sin(i)*(o-I);n.stroke(n.frameCount%5?255:0),n.strokeWeight(n.frameCount%5?1:2),n.bezier(P,d,s,t,u,f,r,c),(i+=e)>a&&n.noLoop()}};a.default=function(n){var a=n.location;return s.a.createElement(t.a,{sketch:i,path:a.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-19-js-8bbac13fcd4effc2064a.js.map