(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{YtTH:function(t,e,n){"use strict";n.r(e);n("bHtr");var o=n("q1tI"),a=n.n(o),r=n("Bl7J"),c=n("9VVL"),u=function(t){var e=t.random(70),n=0,o=1,a=0;t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),t.background(e,80,5),t.noStroke(),t.blendMode(t.HARD_LIGHT),t.rectMode(t.CENTER)},t.draw=function(){var r=t.noise(t.frameCount/2300,a);t.push(),t.fill(t.map(t.cos(t.frameCount/230),-1,1,e,e+30),50,100,5),t.translate(t.width/2,a),t.rotate(n),t.rect(t.map(t.sin(t.frameCount/23),-1,1,-50,50),0,t.width*r,1),t.pop(),a++,n-=t.TWO_PI/(23*t.height),a>t.height&&(a=0,++o>23&&t.noLoop())}};e.default=function(){return a.a.createElement(r.a,null,a.a.createElement(c.a,{sketch:u}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-01-js-ae6d2003c4394041aac0.js.map