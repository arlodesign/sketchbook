(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{X6eM:function(n,e,a){"use strict";a.r(e);var o=a("q1tI"),t=a.n(o),i=a("Bl7J"),r=a("9VVL"),s=function(n){var e=n.random(20,80),a=n.random(.01,.03)/n.TWO_PI,o=n.random(.03,.07)/n.TWO_PI,t=n.random(.03,.07)/n.TWO_PI,i=0,r=n.PI,s=0;n.setup=function(){n.createCanvas(660,840),n.background(64),n.noFill(),n.strokeWeight(10),n.colorMode(n.HSB,100),n.blendMode(n.HARD_LIGHT)},n.draw=function(){n.stroke(n.map(n.sin(i),-1,1,e-20,e+20,!0),n.map(n.cos(r),-1,1,0,100,!0),n.map(n.cos(s),-1,1,100,33,!0),1),n.triangle(n.width*n.noise(o/10,t/10,n.frameCount/1e3),n.map(n.sin(i),-1,1,0,n.height),n.width,n.map(n.sin(r),-1,1,0,n.height),0,n.map(n.sin(s),-1,1,0,n.height)),r+=o,s+=t,(i+=a)>2*n.TWO_PI&&n.noLoop()}};e.default=function(){return t.a.createElement(i.a,null,t.a.createElement(r.a,{sketch:s}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-04-js-46e923dccdea92185a8e.js.map