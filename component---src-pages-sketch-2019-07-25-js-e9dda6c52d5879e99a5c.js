(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{a8tq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),i=a("Bl7J"),r=a("9VVL"),c=(a("PZSu"),{}.DEV&&!1),h=function(e){e.setup=function(){c&&(e.pixelDensity(1),e.frameRate(30)),e.createCanvas(660,840),e.noFill(),e.strokeWeight(3),e.rectMode(e.CENTER),e.createLoop(20,{gif:!!c&&{render:!1,open:!0}})},e.draw=function(){e.blendMode(e.BLEND),e.background(255),e.blendMode(e.MULTIPLY),["cyan","magenta","yellow"].forEach((function(t,a){for(var n=0;n<e.PI;n+=e.PI/20)e.push(),e.stroke(t),e.translate(e.width/2,e.height/2),e.rotate(n*e.cos(e.animLoop.theta)-e.animLoop.theta+e.TWO_PI*(a/3)),e.translate(e.sin(e.animLoop.theta)*(e.width/20)*n,e.sin(e.animLoop.theta)*(e.height/20)*n),e.ellipse(0,0,e.map(e.cos(e.animLoop.theta),-1,1,2,e.height/2),e.width/2),e.pop()}))}};t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(r.a,{sketch:h}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-25-js-e9dda6c52d5879e99a5c.js.map