(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{AOMh:function(o,n,e){"use strict";e.r(n);e("q1tI");var t=e("Gmm/"),a=e("qKvR"),r=function(o){var n=o.random(.5,1),e=1,t=0;o.setup=function(){o.createCanvas(660,840),o.colorMode(o.HSB,1),o.background(n,.8,.1),o.noFill(),o.blendMode(o.OVERLAY),o.ellipseMode(o.CENTER)},o.draw=function(){var a=o.noise(o.frameCount/3e3,t);o.push(),o.stroke(o.map(o.cos(o.frameCount/300),-1,1,n,n-.5),.5,.8,a),o.translate(t,o.height/2),o.arc(0,0,50,o.height*a,o.frameCount/30,o.frameCount/30+o.QUARTER_PI),o.pop(),t++,console.log(e),o.TWO_PI/(30*o.height),t>o.width&&(t=0,++e>30&&(o.noLoop(),console.log("done")))}};n.default=function(o){var n=o.location;return Object(a.c)(t.a,{sketch:r,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-19-js-26bebe8f87cd3611ecc0.js.map