"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5343],{63885:function(e,r,t){var c=t(94035);new(t.n(c)())((function(e){var r,t,c=[],n=!1;function o(r){return e.constrain(e.randomGaussian(0,.75*r),-r,r)}e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight,e.WEBGL),r=e.width/3,c=(c=Array.from(Array(125),(function(){return{vector:e.createVector(o(r/2),o(r/2),o(r/2)),reached:!1,reachedBy:0}}))).concat(Array.from(Array(250),(function(){return{vector:e.createVector(o(r),o(r),o(r)),reached:!1,reachedBy:0}}))),[-1,1].forEach((function(t){[-1,1].forEach((function(n){[-1,1].forEach((function(o){c.push({vector:e.createVector(r*t,r*n,r*o),reached:!1,reachedBy:0})}))}))})),c[0].reached=!0,c[0].reachedBy=-1,t=e.dist(-r,-r,-r,r,r,r)},e.draw=function(){e.background(0),e.rotateX(e.sin(e.frameCount/200)),e.rotateY(e.cos(e.frameCount/300)),e.stroke(255),e.noFill(),c.forEach((function(r,n){var o=r.vector,a=r.reached,i=r.reachedBy;if(a&&i>-1){var h=c[i].vector,f=h.x,u=h.y,d=h.z;e.stroke(n%2?255:0),e.strokeWeight(e.map(e.dist(0,0,0,o.x,o.y,o.z),0,t/2,4,.25)),e.bezier(o.x,o.y,o.z,0,0,0,0,0,0,f,u,d)}}));var r,o,a=t;n||(c.forEach((function(t,n){t.reached||c.forEach((function(c,i){if(c.reached){var h=e.dist(t.vector.x,t.vector.y,t.vector.z,c.vector.x,c.vector.y,c.vector.z);h<a&&(a=h,o=n,r=i)}}))})),c[o].reached=!0,c[o].reachedBy=r),383===c.filter((function(e){return e.reached})).length&&(n=!0)},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch")}},function(e){e.O(0,[4035],(function(){return 63885,e(e.s=63885)})),e.O()}]);