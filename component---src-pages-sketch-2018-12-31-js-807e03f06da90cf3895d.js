(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{218:function(a,n,t){"use strict";t.r(n);var o=t(13),r=(t(0),t(376)),e=function(a){var n,t;a.setup=function(){a.createCanvas(660,840),n=a.random([2,3,4,5,6,8,10]),t=a.random(.3,.8),a.background(255),a.noFill(),a.stroke("rgba(0, 0, 0, "+t+")"),a.strokeWeight(2)},a.draw=function(){for(var o=a.frameCount%(a.width/n)*n,r=a.frameCount%(a.height/n)*n,e=0;e<1;e+=.1*t){var i=a.lerp(a.width/2,o,e),h=a.lerp(a.height/2,r,e),s=n*a.map(a.noise(i,h),0,1,1-t,1+t);a.line(i+s,h-s,i-s,h+s)}if(0===o&&0===r&&a.frameCount>0){for(var d=0;d<1e3*n;d++)a.stroke(d%n?"rgba(0, 0, 0, "+t+")":"rgba(255, 255, 255, "+t+")"),a.point(a.randomGaussian(a.width/2,a.width/4),a.randomGaussian(a.height/2,a.height/4));a.noLoop()}}};n.default=function(a){var n=a.location;return Object(o.c)(r.a,{sketch:e,path:n.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-31-js-807e03f06da90cf3895d.js.map