(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{WjGJ:function(e,n,o){"use strict";o.r(n);o("bHtr");var a=o("q1tI"),t=o.n(a),r=o("Bl7J"),i=o("9VVL"),c=(o("PZSu"),{}.DEV&&!1),p=function(e){e.setup=function(){c&&(e.pixelDensity(1),e.frameRate(30)),e.createCanvas(660,840),e.rectMode(e.CENTER),e.noStroke(),e.createLoop(5,{gif:!!c&&{render:!1,open:!0},noiseRadius:1})},e.draw=function(){e.blendMode(e.BLEND),e.background(0),e.blendMode(e.EXCLUSION),e.translate(e.width/2,e.height/2),["red","green","blue"].forEach((function(n,o){e.fill(n);for(var a=-3;a<=3;a++)for(var t=-3;t<=3;t++){var r=e.map(e.sin(e.animLoop.theta),-1,1,3,e.animLoop.noise2D(a,o)+1),i=e.map(e.cos(e.animLoop.theta),-1,1,3,e.animLoop.noise2D(t,o)+1),c=e.map(e.cos(e.animLoop.theta),-1,1,1,e.animLoop.noise2D(a,t));e.push(),e.translate(50*a*r,50*t*i),e.scale(c,c),e.rect(0,0,50,50),e.pop()}}))}};n.default=function(){return t.a.createElement(r.a,null,t.a.createElement(i.a,{sketch:p}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-26-js-82d4d988f0f46364bc54.js.map