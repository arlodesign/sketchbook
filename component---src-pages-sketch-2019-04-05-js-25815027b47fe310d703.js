(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{292:function(e,a,n){"use strict";n.r(a);n(377);var t=n(20),i=(n(0),n(375)),o=function(e){e.setup=function(){e.createCanvas(660,840),e.noStroke()},e.draw=function(){e.background(255);for(var a=e.frameCount/500,n={a:[-600,0],aHandle:[-600,.333*e.height],bHandle:[-600,.666*e.height],b:[-600,e.height]},t=0;t<=e.ceil((e.width+600)/60);t++){e.fill(t%2?e.color(255,0):e.color(0));var i={a:[n.a[0]+60,0],aHandle:[n.a[0]+60+e.noise(.01*t,.02*t,a)*-e.pow(60,2),.5*e.height*e.noise(.03*t,.04*t,a)],bHandle:[n.b[0]+60+e.noise(.05*t,.06*t,a)*e.pow(60,2),.666*e.height*e.noise(.07*t,.08*t,a)],b:[n.b[0]+60,e.height]};e.beginShape(),e.vertex.apply(e,n.a),e.bezierVertex.apply(e,n.aHandle.concat(n.bHandle,n.b)),e.vertex.apply(e,i.b),e.bezierVertex.apply(e,i.bHandle.concat(i.aHandle,i.a)),e.endShape(e.CLOSE),n=i}n={a:[0,-600],aHandle:[.333*e.width,-600],bHandle:[.666*e.width,-600],b:[e.width,-600]};for(var o=0;o<=e.ceil((e.height+600)/60);o++){e.fill(o%2?e.color(255,0):e.color(0));var l={a:[0,n.a[1]+60],aHandle:[.5*e.width*e.noise(.03*o,.04*o,a),n.a[1]+60+e.noise(.01*o,.02*o,a)*-e.pow(60,2)],bHandle:[.666*e.width*e.noise(.07*o,.08*o,a),n.b[1]+60+e.noise(.05*o,.06*o,a)*e.pow(60,2)],b:[e.width,n.b[1]+60]};e.beginShape(),e.vertex.apply(e,n.a),e.bezierVertex.apply(e,n.aHandle.concat(n.bHandle,n.b)),e.vertex.apply(e,l.b),e.bezierVertex.apply(e,l.bHandle.concat(l.aHandle,l.a)),e.endShape(e.CLOSE),n=l}}};a.default=function(e){var a=e.location;return Object(t.c)(i.a,{sketch:o,path:a.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-05-js-25815027b47fe310d703.js.map