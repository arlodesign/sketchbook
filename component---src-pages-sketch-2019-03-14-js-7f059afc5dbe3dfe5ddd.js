(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{286:function(n,t,r){"use strict";r.r(t);r(420),r(30),r(29),r(12),r(101),r(73),r(422);var o=r(10),e=(r(0),r(418)),u=function(n){var t,r,o,e=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))},function(){return 240},function(){return 15},function(){return 128}],u=0,a={},i=1;n.setup=function(){for(n.createCanvas(660,840),n.background(32),a=n.createVector(0,-40);Array.from(new Set([t,r,o])).length<3;)t=n.random(e),r=n.random(e),o=n.random(e);n.noStroke()},n.draw=function(){n.fill(t(u),r(u),o(u),32),a.x=n.map(n.noise(a.y*i/50,n.frameCount*i/5e3),0,1,.25*n.width,.75*n.width),n.ellipse(a.x,a.y,n.map(n.noise(a.y*i/100,n.frameCount*i/1e4),0,1,0,n.width),20),a.y+=i,a.y>n.height+20&&(i>3&&n.noLoop(),a.y=-40,u+=n.HALF_PI/2,i++,n.blendMode(i%2?n.SCREEN:n.MULTIPLY))}};t.default=function(n){var t=n.location;return Object(o.c)(e.a,{sketch:u,path:t.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-14-js-7f059afc5dbe3dfe5ddd.js.map