(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{255:function(t,r,o){"use strict";o.r(r);o(38),o(138),o(438);var e=o(10),n=(o(0),o(436)),i=function(t){var r=[];function o(o,e){var n=4*function(o,e){return r.sort(function(r,n){return t.dist(o,e,r.vector.x,r.vector.y)-t.dist(o,e,n.vector.x,n.vector.y)}),r[0].color}(o,e);t.fill(n,n,n,127.5),t.rect(o,e,2,2),t.fill(n),t.rect(o,e,1,1)}t.setup=function(){t.createCanvas(660,840),t.background(255),r=new Array(64).fill().map(function(){return{vector:t.createVector(t.randomGaussian(t.width/2,t.width/30*3),t.randomGaussian(t.height/2,t.height/30*3))}}).sort(function(r,o){return t.dist(t.width/2,t.height/2,r.vector.x,r.vector.y)-t.dist(t.width/2,t.height/2,o.vector.x,o.vector.y)}).map(function(t,r){return Object.assign(t,{color:r})}),t.noStroke(),t.rectMode(t.CENTER)},t.draw=function(){var r=t.floor(t.frameCount/(t.width/30)),e=t.floor(t.frameCount-t.width/30*r);if(r<t.height/30)for(var n=0;n<30;n++)for(var i=0;i<30;i++)o(e+t.width/30*n,r+t.height/30*i);else addNoise(.2),t.noLoop()}};r.default=function(t){var r=t.location;return Object(e.c)(n.a,{sketch:i,path:r.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-26-js-3f4e6edceb75c7482f98.js.map