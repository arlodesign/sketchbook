(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{275:function(e,t,n){"use strict";n.r(t);var a=n(10),r=(n(0),n(427)),o=function(e){e.setup=function(){e.createCanvas(660,840,e.WEBGL),e.stroke(255),e.strokeWeight(.5),e.noFill(),e.noiseDetail(4,.5),e.rectMode(e.CENTER),e.camera(-e.width/4,-e.height/4,400,-e.width/4,-e.height/4,0,0,1,0)},e.draw=function(){e.background(0);for(var t=5-e.width/2,n=5-e.height/2,a=[];t<0;){for(var r=[];n<0;){var o=e.noise(.005*t,.005*n,e.frameCount/250);r.push([t,n,e.map(o,0,1,-400,400)]),n+=5}a.push(r),t+=5,n=5-e.height/2}a.forEach(function(t){e.beginShape(),t.forEach(function(t){return e.vertex.apply(e,t)}),e.endShape()});for(var h=0;h<a[0].length;h++){e.beginShape();for(var i=0;i<a.length;i++)e.vertex.apply(e,a[i][h]);e.endShape()}}};t.default=function(e){var t=e.location;return Object(a.c)(r.a,{sketch:o,path:t.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-15-js-c743e06cecdfd3fe5948.js.map