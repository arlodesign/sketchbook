(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"2UUA":function(t,o,n){"use strict";n.r(o);n("bHtr"),n("XfO3"),n("HEwt");var i=n("qKvR"),r=(n("q1tI"),n("Gmm/")),e=function(t){var o,n=[],i={},r=0;t.setup=function(){t.createCanvas(660,840);var i=t.floor(t.height/20),r=t.floor(t.width/20);n=Array.from({length:i},(function(){return Array.from({length:r},(function(){return{}}))})),o=t.random(20,80),t.background(255),t.colorMode(t.HSB,100),t.noStroke();for(var e=0;e<t.width/20;e++)for(var a=0;a<t.height/20;a++){var h=t.map(t.dist(20*e,20*a,t.width,t.height),20,t.dist(0,0,t.width,t.height),o-20,o+20),l=t.map(t.dist(20*e,20*a,t.width,t.height),20,t.dist(0,0,t.width,t.height),0,100);t.fill(h,l,100),t.rect(20*e,20*a,20,20),n[a][e]={clr:t.color(100-h,50-l,80,10),visitCount:0}}t.blendMode(t.DODGE)},t.draw=function(){i={row:t.constrain(t.floor(t.randomGaussian(n.length/2,n.length/5)),0,n.length-1),col:t.constrain(t.floor(t.randomGaussian(n[0].length/2,n[0].length/5)),0,n[0].length-1)},n[i.row][i.col].visitCount++;var o=n[i.row][i.col],e=o.clr,a=o.visitCount;t.fill(e),t.ellipse(20*i.col+10,20*i.row+10,12,12),10===a&&r++,25===r&&t.noLoop()}};o.default=function(t){var o=t.location;return Object(i.c)(r.a,{sketch:e,path:o.pathname,description:"Be patient. This is going to look like it's doing nothing for a bit."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-24-js-884e9d6f21f0321d3e44.js.map