(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{A2wo:function(e,o,r){"use strict";r.r(o);var n=r("q1tI"),t=r.n(n),i=r("Bl7J"),a=r("9VVL"),d=(r("PZSu"),{}.DEV&&!1),c=function(e){var o,r=[{xPeriod:3,yPeriod:4,color:"red",rotationDir:-1},{xPeriod:3,yPeriod:2,color:"green",rotationDir:0},{xPeriod:5,yPeriod:4,color:"blue",rotationDir:1}];e.setup=function(){e.createCanvas(660,840),e.createLoop(49,{gif:!!d&&{render:!1,open:!0},noiseRadius:.1}),e.noFill(),e.strokeWeight(30),o=e.width/2-50},e.draw=function(){var n=e.animLoop,t=n.theta;n.noise1D;e.blendMode(e.BLEND),e.background(0),e.blendMode(e.SCREEN),e.translate(e.width/2,e.height/2),r.forEach((function(r,n){var i=r.xPeriod,a=r.yPeriod,d=r.color,c=r.rotationDir;e.push(),e.rotate(t*c),e.stroke(d),e.beginShape();for(var u=-.02;u<e.TWO_PI+.04;u+=.02){var s=o*e.sin(i*u),l=o*e.sin(a*u+3*t);e.curveVertex(s,l)}e.endShape(),e.pop()}))}};o.default=function(){return t.a.createElement(i.a,null,t.a.createElement(a.a,{sketch:c}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-11-js-034ffbf2c8d7a3ab2f31.js.map