(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{323:function(n,t,o){"use strict";o.r(t);o(424);var e=o(10),a=(o(0),o(422)),i=function(n){var t=0,o=0;n.setup=function(){n.createCanvas(660,840),n.background(0),n.colorMode(n.HSB,100),n.blendMode(n.ADD),n.rectMode(n.CENTER),n.noStroke()},n.draw=function(){n.fill(n.map(n.sin(n.frameCount/2),-1,1,0,100),100,100,20),n.rect(n.map(n.noise(o/100,n.frameCount/1e4),0,1,.333*n.width,.666*n.width),o,n.map(n.noise(o/200,n.frameCount/100),0,1,n.width/24,n.width/24*(t+1)),3),(o+=6)>n.height&&(o-=n.height,24===++t&&n.noLoop())}};t.default=function(n){var t=n.location;return Object(e.c)(a.a,{sketch:i,path:t.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-21-js-51b5148440b98dfaa007.js.map