(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{417:function(n,t,e){"use strict";e.r(t);var o=e(10),r=(e(0),e(418)),a=(e(425),{}.DEV&&!1),i=[function(n){return n<.5?2*n*n:(4-2*n)*n-1},function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}],c=function(n){var t;n.setup=function(){a&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(660,840),n.colorMode(n.HSB,4),n.strokeWeight(30),t=.45*n.width,n.createLoop(15,{gif:!!a&&{render:!1,open:!0},noiseRadius:1})},n.draw=function(){var e=n.animLoop,o=e.theta,r=e.noise2D;n.blendMode(n.BLEND),n.background(0),n.blendMode(n.SCREEN);var a=n.map(o,0,n.TWO_PI,0,1);i.forEach(function(e,i){n.push(),n.stroke(i,3,3,2),n.translate(n.width/2,n.height/2);for(var c=1;c<=3;c++){var u=n.map(n.sin(o),-1,1,t,t*n.map(r(i+c,n.sin(o)),-1,1,0,1));n.rotate(e(a)*n.PI*c),n.line(0,-u,0,u)}n.pop()})}};t.default=function(n){var t=n.location;return Object(o.c)(r.a,{sketch:c,path:t.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-02-js-77c05a6be9d27986e84b.js.map