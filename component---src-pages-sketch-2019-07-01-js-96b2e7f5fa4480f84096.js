(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{384:function(o,t,n){"use strict";n.r(t);n(438);var e=n(10),a=(n(0),n(436)),r=function(o){var t=o.random(70),n=0,e=1,a=0;o.setup=function(){o.createCanvas(660,840),o.colorMode(o.HSB,100),o.background(t,80,5),o.noStroke(),o.blendMode(o.HARD_LIGHT),o.rectMode(o.CENTER)},o.draw=function(){var r=o.noise(o.frameCount/2300,a);o.push(),o.fill(o.map(o.cos(o.frameCount/230),-1,1,t,t+30),50,100,5),o.translate(o.width/2,a),o.rotate(n),o.rect(o.map(o.sin(o.frameCount/23),-1,1,-50,50),0,o.width*r,1),o.pop(),a++,n-=o.TWO_PI/(23*o.height),a>o.height&&(a=0,++e>23&&o.noLoop())}};t.default=function(o){var t=o.location;return Object(e.c)(a.a,{sketch:r,path:t.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-01-js-96b2e7f5fa4480f84096.js.map