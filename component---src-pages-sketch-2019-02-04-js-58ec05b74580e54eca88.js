(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{320:function(n,r,t){"use strict";t.r(r);t(179),t(17),t(13),t(7),t(133),t(83),t(182);var o=t(0),e=(t(1),t(251)),a=function(n){var r,t=100,o=[],e=0,a=[function(r){return 240*n.abs(n.sin(r))},function(r){return 240*n.abs(n.cos(r))},function(r){return 240*n.abs(n.tan(r))},function(r){return 240*n.abs(n.sin(-r))},function(r){return 240*n.abs(n.cos(-r))},function(r){return 240*n.abs(n.tan(-r))},function(){return 240},function(){return 15},function(){return 128}];n.setup=function(){for(n.createCanvas(660,840),n.background(127),r=n.width-200;Array.from(new Set(o)).length<3;)o=[n.random(a),n.random(a),n.random(a)];n.blendMode(n.OVERLAY),n.rectMode(n.CENTER),n.strokeWeight(2)},n.draw=function(){n.translate(100,t);var a=n.floor(n.random(30)),u=r/a,c=n.color.apply(n,o.map((function(n){return n(t*e)})).concat([127]));e%2?(n.noFill(),n.stroke(c)):(n.noStroke(),n.fill(c)),n.beginShape(),n.vertex(0,0);for(var i=0;i<a;i++){var s=n.lerp(u*i,u*(i+1),n.noise(i,t)),f=30*n.noise(t,i)*n.random([-1,1]);n.quadraticVertex(s,f,u*(i+1),0)}n.vertex(r,0),n.endShape(),(t+=30)>n.height-100&&(e++,t=100),15===e&&n.noLoop()}};r.default=function(n){var r=n.location;return Object(o.c)(e.a,{sketch:a,path:r.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-04-js-58ec05b74580e54eca88.js.map