(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{383:function(o,n,e){"use strict";e.r(n);var t=e(7),a=(e(0),e(394)),r=function(o){var n=o.random(70),e=0,t=1,a=0;o.setup=function(){o.createCanvas(660,840),o.colorMode(o.HSL,100),o.background(n,5,80),o.noFill(),o.blendMode(o.MULTIPLY),o.ellipseMode(o.CENTER)},o.draw=function(){var r=o.noise(o.frameCount/3e3,a);o.push(),o.stroke(o.map(o.cos(o.frameCount/300),-1,1,n,n+30),100,50,10),o.translate(o.width/2,a),o.rotate(e),o.arc(o.map(o.sin(o.frameCount/30),-1,1,-o.width/2,o.width/2),0,o.width*r,50,o.frameCount/30,o.frameCount/30+o.HALF_PI),o.pop(),a++,console.log(t),e-=o.TWO_PI/(30*o.height),a>o.height&&(a=0,++t>30&&(o.noLoop(),console.log("done")))}};n.default=function(o){var n=o.location;return Object(t.c)(a.a,{sketch:r,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-17-js-8042002304293f1d5994.js.map