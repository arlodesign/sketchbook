(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{284:function(o,t,n){"use strict";n.r(t);n(425),n(73),n(427);var i=n(10),r=(n(0),n(423)),e=function(o){var t,n=[],i={},r=0;o.setup=function(){o.createCanvas(660,840);var i=o.floor(o.height/20),r=o.floor(o.width/20);n=Array.from({length:i},function(){return Array.from({length:r},function(){return{}})}),t=o.random(20,80),o.background(255),o.colorMode(o.HSB,100),o.noStroke();for(var e=0;e<o.width/20;e++)for(var a=0;a<o.height/20;a++){var h=o.map(o.dist(20*e,20*a,o.width,o.height),20,o.dist(0,0,o.width,o.height),t-20,t+20),l=o.map(o.dist(20*e,20*a,o.width,o.height),20,o.dist(0,0,o.width,o.height),0,100);o.fill(h,l,100),o.rect(20*e,20*a,20,20),n[a][e]={clr:o.color(100-h,50-l,80,10),visitCount:0}}o.blendMode(o.DODGE)},o.draw=function(){i={row:o.constrain(o.floor(o.randomGaussian(n.length/2,n.length/5)),0,n.length-1),col:o.constrain(o.floor(o.randomGaussian(n[0].length/2,n[0].length/5)),0,n[0].length-1)},n[i.row][i.col].visitCount++;var t=n[i.row][i.col],e=t.clr,a=t.visitCount;o.fill(e),o.ellipse(20*i.col+10,20*i.row+10,12,12),10===a&&r++,25===r&&o.noLoop()}};t.default=function(o){var t=o.location;return Object(i.c)(r.a,{sketch:e,path:t.pathname,description:"Be patient. This is going to look like it's doing nothing for a bit."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-24-js-3c87921f367f4605b687.js.map