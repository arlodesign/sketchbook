(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{"5lhK":function(e,a,n){"use strict";n.r(a);n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("rE2o"),n("ioFf"),n("rGqo"),n("bHtr"),n("q1tI");var t=n("Gmm/"),r=n("qKvR");function o(e){return function(e){if(Array.isArray(e)){for(var a=0,n=new Array(e.length);a<e.length;a++)n[a]=e[a];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=function(e){e.setup=function(){e.createCanvas(660,840),e.noStroke()},e.draw=function(){e.background(255);for(var a=e.frameCount/500,n={a:[-600,0],aHandle:[-600,.333*e.height],bHandle:[-600,.666*e.height],b:[-600,e.height]},t=0;t<=e.ceil((e.width+600)/60);t++){e.fill(t%2?e.color(255,0):e.color(0));var r={a:[n.a[0]+60,0],aHandle:[n.a[0]+60+e.noise(.01*t,.02*t,a)*-e.pow(60,2),.5*e.height*e.noise(.03*t,.04*t,a)],bHandle:[n.b[0]+60+e.noise(.05*t,.06*t,a)*e.pow(60,2),.666*e.height*e.noise(.07*t,.08*t,a)],b:[n.b[0]+60,e.height]};e.beginShape(),e.vertex.apply(e,o(n.a)),e.bezierVertex.apply(e,o(n.aHandle).concat(o(n.bHandle),o(n.b))),e.vertex.apply(e,o(r.b)),e.bezierVertex.apply(e,o(r.bHandle).concat(o(r.aHandle),o(r.a))),e.endShape(e.CLOSE),n=r}n={a:[0,-600],aHandle:[.333*e.width,-600],bHandle:[.666*e.width,-600],b:[e.width,-600]};for(var i=0;i<=e.ceil((e.height+600)/60);i++){e.fill(i%2?e.color(255,0):e.color(0));var l={a:[0,n.a[1]+60],aHandle:[.5*e.width*e.noise(.03*i,.04*i,a),n.a[1]+60+e.noise(.01*i,.02*i,a)*-e.pow(60,2)],bHandle:[.666*e.width*e.noise(.07*i,.08*i,a),n.b[1]+60+e.noise(.05*i,.06*i,a)*e.pow(60,2)],b:[e.width,n.b[1]+60]};e.beginShape(),e.vertex.apply(e,o(n.a)),e.bezierVertex.apply(e,o(n.aHandle).concat(o(n.bHandle),o(n.b))),e.vertex.apply(e,o(l.b)),e.bezierVertex.apply(e,o(l.bHandle).concat(o(l.aHandle),o(l.a))),e.endShape(e.CLOSE),n=l}}};a.default=function(e){var a=e.location;return Object(r.c)(t.a,{sketch:i,path:a.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-05-js-c42cf2635cd8349a3515.js.map