(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{222:function(r,e,c){"use strict";c.r(e);c(48),c(397);var t=c(7),a=(c(0),c(393)),o=function(r){var e,c,t=[],a=!1;function o(e){return r.constrain(r.randomGaussian(0,.75*e),-e,e)}r.setup=function(){r.createCanvas(660,840,r.WEBGL),e=r.width/3,t=(t=Array.from(Array(125),function(){return{vector:r.createVector(o(e/2),o(e/2),o(e/2)),reached:!1,reachedBy:0}})).concat(Array.from(Array(250),function(){return{vector:r.createVector(o(e),o(e),o(e)),reached:!1,reachedBy:0}})),[-1,1].forEach(function(c){[-1,1].forEach(function(a){[-1,1].forEach(function(o){t.push({vector:r.createVector(e*c,e*a,e*o),reached:!1,reachedBy:0})})})}),t[0].reached=!0,t[0].reachedBy=-1,c=r.dist(-e,-e,-e,e,e,e)},r.draw=function(){r.background(0),r.rotateX(r.sin(r.frameCount/200)),r.rotateY(r.cos(r.frameCount/300)),r.stroke(255),r.noFill(),t.forEach(function(e,a){var o=e.vector,n=e.reached,i=e.reachedBy;if(n&&i>-1){var f=t[i].vector,h=f.x,u=f.y,d=f.z;r.stroke(a%2?255:0),r.strokeWeight(r.map(r.dist(0,0,0,o.x,o.y,o.z),0,c/2,4,.25)),r.bezier(o.x,o.y,o.z,0,0,0,0,0,0,h,u,d)}});var e,o,n=c;a||(t.forEach(function(c,a){c.reached||t.forEach(function(t,i){if(t.reached){var f=r.dist(c.vector.x,c.vector.y,c.vector.z,t.vector.x,t.vector.y,t.vector.z);f<n&&(n=f,o=a,e=i)}})}),t[o].reached=!0,t[o].reachedBy=e),383===t.filter(function(r){return r.reached}).length&&(a=!0)}};e.default=function(r){var e=r.location;return Object(t.c)(a.a,{sketch:o,path:e.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-09-js-6c787138ecbde8ec1c3d.js.map