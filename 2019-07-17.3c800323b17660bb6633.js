(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{254:function(o,n,e){"use strict";e.r(n);var t=e(0);new(e.n(t).a)((function(o){var n=o.random(70),e=0,t=1,i=0;o.setup=function(){o.createCanvas(o.windowWidth,o.windowHeight),o.colorMode(o.HSL,100),o.background(n,5,80),o.noFill(),o.blendMode(o.MULTIPLY),o.ellipseMode(o.CENTER)},o.draw=function(){var a=o.noise(o.frameCount/3e3,i);o.push(),o.stroke(o.map(o.cos(o.frameCount/300),-1,1,n,n+30),100,50,10),o.translate(o.width/2,i),o.rotate(e),o.arc(o.map(o.sin(o.frameCount/30),-1,1,-o.width/2,o.width/2),0,o.width*a,50,o.frameCount/30,o.frameCount/30+o.HALF_PI),o.pop(),i++,console.log(t),e-=o.TWO_PI/(30*o.height),i>o.height&&(i=0,++t>30&&(o.noLoop(),console.log("done")))},o.windowResized=function(){o.resizeCanvas(o.windowWidth,o.windowHeight)}}),"sketch")}},[[254,0,1]]]);