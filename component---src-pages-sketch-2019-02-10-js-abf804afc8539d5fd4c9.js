(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{253:function(e,t,i){"use strict";i.r(t);var h=i(7),a=(i(0),i(389)),n=function(e){var t=0,i=0;e.setup=function(){e.createCanvas(660,840),e.background(127),e.noFill(),e.strokeWeight(2)},e.draw=function(){var h;e.random()<.2&&(e.stroke.apply(e,(h=e.map(e.noise(e.dist(t,i,e.width/2,e.height/2)),0,1,0,e.TWO_PI),[e.max(15,240*e.abs(e.sin(h))),e.max(15,240*e.abs(e.cos(-h+e.PI))),e.max(15,240*e.abs(e.tan(h+e.PI)))])),e.blendMode(e.frameCount%3?e.SOFT_LIGHT:e.HARD_LIGHT),e.beginShape(),e.vertex(t,i),e.bezierVertex(e.width/2,e.height,e.width/2,e.height,e.width-t,i),e.bezierVertex(0,e.height/2,0,e.height/2,e.width-t,e.height-i),e.bezierVertex(e.width/2,0,e.width/2,0,t,e.height-i),e.bezierVertex(e.width,e.height/2,e.width,e.height/2,t,i),e.endShape(e.CLOSE)),(i+=2)>e.height/2&&(i=0,t+=2),t>e.width/2&&e.noLoop()}};t.default=function(e){var t=e.location;return Object(h.c)(a.a,{sketch:n,path:t.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-10-js-abf804afc8539d5fd4c9.js.map