"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[333],{63742:function(e,r,t){var n=t(94035);new(t.n(n)())((function(e){var r,t,n=[];e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.background(255),r=e.floor(e.random(25,50)),t=e.dist(0,0,e.width,e.height);for(var o=0;o<=r;o++)for(var i=0;i<=r;i++)e.random()<.2&&n.push({vector:e.createVector(e.width/r*o,e.height/r*i),reached:!1,reachedBy:0});n[0].reached=!0,n[0].reachedBy=-1},e.draw=function(){e.push(),e.stroke("red"),e.strokeWeight(1),n.filter((function(e){return!e.reached})).forEach((function(r){var t=r.vector;return e.point(t.x,t.y)})),e.pop(),n.forEach((function(r,t){var o=r.vector,i=r.reached,c=r.reachedBy;if(i&&c>-1){var a=n[c].vector,h=a.x,d=a.y;e.stroke(0),e.strokeWeight(2),e.noFill(),e.line(o.x,o.y,h,d),e.fill(0),e.triangle(o.x,o.y,h,d,h,o.y),o.x!==h&&o.y!==d||t%3!=0||e.ellipse(h,d,e.dist(h,d,o.x,o.y))}}));var r,o,i=t;n.forEach((function(t,c){t.reached||n.forEach((function(n,a){if(n.reached){var h=e.dist(t.vector.x,t.vector.y,n.vector.x,n.vector.y);h<i&&(i=h,o=c,r=a)}}))})),n[o].reached=!0,n[o].reachedBy=r,n.filter((function(e){return e.reached})).length===n.length&&e.noLoop()},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Reload page for a different variation."}},function(e){e.O(0,[4035],(function(){return 63742,e(e.s=63742)})),e.O()}]);