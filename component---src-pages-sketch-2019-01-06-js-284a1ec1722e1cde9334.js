(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{190:function(n,a,t){"use strict";t.r(a);var e=t(0),i=t.n(e),o=t(262),r=function(n){var a,t,e,i,o,r=0;n.setup=function(){n.createCanvas(660,840),a=n.random(.01,.03),t=n.width/3,e=n.random(2,2.3),i=n.random(2.7,3),o=n.random(.25*n.width,.333*n.width),n.background(255),n.noFill(),n.strokeWeight(n.map(a,.01,.03,.25,.4))},n.draw=function(){r+=a;var s=n.width/2+n.cos(r*e)*t,d=n.height/2+n.sin(r*i)*t,c=o*n.abs(n.cos(r*i)),h=o*n.abs(n.sin(r*e));n.ellipse(s,d,c,h),n.ellipse(n.width-s,n.height-d,c,h),r>n.TWO_PI&&n.noLoop()}};a.default=function(n){var a=n.location;return i.a.createElement(o.a,{sketch:r,path:a.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-06-js-284a1ec1722e1cde9334.js.map