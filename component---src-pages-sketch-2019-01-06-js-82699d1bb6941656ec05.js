(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{220:function(n,a,t){"use strict";t.r(a);var i=t(7),o=(t(0),t(396)),e=function(n){var a,t,i,o,e,r=0;n.setup=function(){n.createCanvas(660,840),a=n.random(.01,.03),t=n.width/3,i=n.random(2,2.3),o=n.random(2.7,3),e=n.random(.25*n.width,.333*n.width),n.background(255),n.noFill(),n.strokeWeight(n.map(a,.01,.03,.25,.4))},n.draw=function(){r+=a;var s=n.width/2+n.cos(r*i)*t,c=n.height/2+n.sin(r*o)*t,d=e*n.abs(n.cos(r*o)),h=e*n.abs(n.sin(r*i));n.ellipse(s,c,d,h),n.ellipse(n.width-s,n.height-c,d,h),r>n.TWO_PI&&n.noLoop()}};a.default=function(n){var a=n.location;return Object(i.c)(o.a,{sketch:e,path:a.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-06-js-82699d1bb6941656ec05.js.map