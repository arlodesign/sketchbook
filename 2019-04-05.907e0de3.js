(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{153:function(e,n,t){"use strict";t.r(n);var a=t(0);function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}new(t.n(a).a)((function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.noStroke()},e.draw=function(){e.background(255);for(var n=e.frameCount/500,t={a:[-600,0],aHandle:[-600,.333*e.height],bHandle:[-600,.666*e.height],b:[-600,e.height]},a=0;a<=e.ceil((e.width+600)/60);a++){e.fill(a%2?e.color(255,0):e.color(0));var o={a:[t.a[0]+60,0],aHandle:[t.a[0]+60+e.noise(.01*a,.02*a,n)*-e.pow(60,2),.5*e.height*e.noise(.03*a,.04*a,n)],bHandle:[t.b[0]+60+e.noise(.05*a,.06*a,n)*e.pow(60,2),.666*e.height*e.noise(.07*a,.08*a,n)],b:[t.b[0]+60,e.height]};e.beginShape(),e.vertex.apply(e,r(t.a)),e.bezierVertex.apply(e,r(t.aHandle).concat(r(t.bHandle),r(t.b))),e.vertex.apply(e,r(o.b)),e.bezierVertex.apply(e,r(o.bHandle).concat(r(o.aHandle),r(o.a))),e.endShape(e.CLOSE),t=o}t={a:[0,-600],aHandle:[.333*e.width,-600],bHandle:[.666*e.width,-600],b:[e.width,-600]};for(var i=0;i<=e.ceil((e.height+600)/60);i++){e.fill(i%2?e.color(255,0):e.color(0));var l={a:[0,t.a[1]+60],aHandle:[.5*e.width*e.noise(.03*i,.04*i,n),t.a[1]+60+e.noise(.01*i,.02*i,n)*-e.pow(60,2)],bHandle:[.666*e.width*e.noise(.07*i,.08*i,n),t.b[1]+60+e.noise(.05*i,.06*i,n)*e.pow(60,2)],b:[e.width,t.b[1]+60]};e.beginShape(),e.vertex.apply(e,r(t.a)),e.bezierVertex.apply(e,r(t.aHandle).concat(r(t.bHandle),r(t.b))),e.vertex.apply(e,r(l.b)),e.bezierVertex.apply(e,r(l.bHandle).concat(r(l.aHandle),r(l.a))),e.endShape(e.CLOSE),t=l}},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch")}},[[153,0,1]]]);