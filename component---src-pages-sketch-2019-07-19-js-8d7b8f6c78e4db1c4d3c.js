(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{AOMh:function(e,n,o){"use strict";o.r(n);var t=o("q1tI"),a=o.n(t),r=o("Bl7J"),u=o("9VVL"),c=function(e){var n=e.random(.5,1),o=1,t=0;e.setup=function(){e.createCanvas(660,840),e.colorMode(e.HSB,1),e.background(n,.8,.1),e.noFill(),e.blendMode(e.OVERLAY),e.ellipseMode(e.CENTER)},e.draw=function(){var a=e.noise(e.frameCount/3e3,t);e.push(),e.stroke(e.map(e.cos(e.frameCount/300),-1,1,n,n-.5),.5,.8,a),e.translate(t,e.height/2),e.arc(0,0,50,e.height*a,e.frameCount/30,e.frameCount/30+e.QUARTER_PI),e.pop(),++t>e.width&&(t=0,++o>30&&e.noLoop())}};n.default=function(){return a.a.createElement(r.a,null,a.a.createElement(u.a,{sketch:c}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-19-js-8d7b8f6c78e4db1c4d3c.js.map