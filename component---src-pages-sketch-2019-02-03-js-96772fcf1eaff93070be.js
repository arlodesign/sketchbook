(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{263:function(n,t,r){"use strict";r.r(t);r(30),r(29),r(12),r(101),r(73),r(427);var o=r(10),a=(r(0),r(423)),e=function(n){var t,r,o,a,e,i,u,s,c,f,d=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))}];n.setup=function(){for(n.createCanvas(660,840),t=n.random([0,1]),n.background(t?0:255),n.noFill(),n.stroke(0),r=n.random([3,5,7,9]),o=e=r,a=i=r;Array.from(new Set([u,s,c,f])).length<4;)u=n.random(d),s=n.random(d),c=n.random(d),f=n.random(d);n.blendMode(t?n.LIGHTEST:n.DARKEST)},n.draw=function(){n.translate(n.width/2,n.height/2);var t,d=n.random([-10,10]),b=n.random([-10,10]);if(o=e+d,a=i+b,n.strokeWeight(7*n.noise(d,b)),t=n.frameCount/200,n.stroke(u(t),s(t),c(t),f(t*r)),o>-n.width/2&&a>-n.height/2&&o<n.width/2&&a<n.height/2)for(var h=0;h<r;h++)n.push(),n.rotate(n.TWO_PI/r*h),n.triangle(o,a,n.lerp(o,i,.5),n.lerp(a,e,.5),e,i),n.endShape(),n.pop();else n.noLoop();e=o,i=a}};t.default=function(n){var t=n.location;return Object(o.c)(a.a,{sketch:e,path:t.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-03-js-96772fcf1eaff93070be.js.map