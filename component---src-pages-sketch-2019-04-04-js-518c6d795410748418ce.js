(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{256:function(n,o,a){"use strict";a.r(o);var t=a(9),e=(a(0),a(278)),i=function(n){var o=n.random(20,80),a=n.random(.01,.03)/n.TWO_PI,t=n.random(.03,.07)/n.TWO_PI,e=n.random(.03,.07)/n.TWO_PI,i=0,r=n.PI,c=0;n.setup=function(){n.createCanvas(660,840),n.background(64),n.noFill(),n.strokeWeight(10),n.colorMode(n.HSB,100),n.blendMode(n.HARD_LIGHT)},n.draw=function(){n.stroke(n.map(n.sin(i),-1,1,o-20,o+20,!0),n.map(n.cos(r),-1,1,0,100,!0),n.map(n.cos(c),-1,1,100,33,!0),1),n.triangle(n.width*n.noise(t/10,e/10,n.frameCount/1e3),n.map(n.sin(i),-1,1,0,n.height),n.width,n.map(n.sin(r),-1,1,0,n.height),0,n.map(n.sin(c),-1,1,0,n.height)),r+=t,c+=e,(i+=a)>2*n.TWO_PI&&n.noLoop()}};o.default=function(n){var o=n.location;return Object(t.c)(e.a,{sketch:i,path:o.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-04-js-518c6d795410748418ce.js.map