(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{MQam:function(a,n,o){"use strict";o.r(n);o("bHtr"),o("q1tI");var t=o("Gmm/"),r=o("qKvR"),e=function(a){var n,o,t,r,e,i=0,c=0;a.setup=function(){a.createCanvas(660,840),a.fill("rgba(0, 0, 0, 0.4)"),a.noStroke(),a.background(255),n=a.floor(a.random(3,7)),o=a.random(),t=a.random(1,2),e=(a.height-n+1)/n,r=-e},a.draw=function(){var d=n*a.map(a.noise(r,i),0,1,n,1),p=n*a.map(a.noise(r,i),0,1,-n*o,n*o);a.quad(r+p,i,r+d+p,i,r+d-p,i+e,r-p,i+e),(r+=d+a.random(n*o,n))>a.width+e&&(r=-e,i+=e+1),i>a.height&&(i=0,o*=t,4===++c&&a.noLoop())}};n.default=function(a){var n=a.location;return Object(r.c)(t.a,{sketch:e,path:n.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-28-js-c3922a98873ab10e1ad0.js.map