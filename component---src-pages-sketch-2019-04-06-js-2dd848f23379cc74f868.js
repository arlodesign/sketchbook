(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{dije:function(o,t,n){"use strict";n.r(t);n("bHtr");var a=n("qKvR"),i=(n("q1tI"),n("Gmm/")),e=function(o){var t=function(){function t(t){this.location=[t,0],this.noiseVal=o.random([o.random(0,20),o.random(80,100)])}var n=t.prototype;return n.update=function(){this.location[1]=o.frameCount%o.height,this.location[0]+=o.map(o.noise(this.noiseVal,this.location[1],o.frameCount),0,1,-1,1)},n.draw=function(){o.noStroke(),o.fill(this.noiseVal,75,90,10),o.rect.apply(o,this.location.concat([.5,100]))},t}(),n=[];o.setup=function(){o.createCanvas(660,840),o.background(32),o.colorMode(o.HSB,100),o.blendMode(o.DIFFERENCE),o.rectMode(o.CENTER);for(var a=-100;a<o.width+100;a+=5)n.push(new t(a))},o.draw=function(){n.forEach((function(o){o.draw(),o.update()})),o.frameCount>3*o.height&&o.noLoop()}};t.default=function(o){var t=o.location;return Object(a.c)(i.a,{sketch:e,path:t.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-06-js-2dd848f23379cc74f868.js.map