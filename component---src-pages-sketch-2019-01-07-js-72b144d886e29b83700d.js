(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{238:function(e,t,r){"use strict";r.r(t);r(73),r(438);var c=r(10),a=(r(0),r(433)),h=function(e){var t,r,c,a;e.setup=function(){e.createCanvas(660,840),t=(e.width-e.width/1.6180339887)/2,r=(e.height-e.height/1.6180339887)/2,(c=Array.from(Array(2500),function(){return{vector:e.createVector(e.constrain(e.randomGaussian(e.width/2,e.width/1.6180339887/5),t,e.width-t),e.constrain(e.randomGaussian(e.height/2,e.height/1.6180339887/5),r,e.height-r)),reached:!1}}))[0]={vector:e.createVector(e.width/2,e.height/2),reached:!0},c.push({vector:e.createVector(t,r),reached:!1}),c.push({vector:e.createVector(e.width-t,r),reached:!1}),c.push({vector:e.createVector(t,e.height-r),reached:!1}),c.push({vector:e.createVector(e.width-t,e.height-r),reached:!1}),a=e.dist(t,r,e.width-t,e.height-r),e.background(255)},e.draw=function(){var t,r,h=c.filter(function(e){return e.reached}),i=a;c.forEach(function(c,a){c.reached||h.forEach(function(h){var o=h.vector,n=e.dist(o.x,o.y,c.vector.x,c.vector.y);n<i&&(i=n,r=a,t=o)})}),e.strokeWeight(e.map(e.dist(e.width/2,e.height/2,c[r].vector.x,c[r].vector.y),0,a/2,1,5)),e.line(t.x,t.y,c[r].vector.x,c[r].vector.y),c[r].reached=!0,c.filter(function(e){return e.reached}).length===c.length&&e.noLoop()}};t.default=function(e){var t=e.location;return Object(c.c)(a.a,{sketch:h,path:t.pathname,description:"Be patient. Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-07-js-72b144d886e29b83700d.js.map