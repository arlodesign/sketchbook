"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5947],{8381:function(t,e,n){var r=n(94035);function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}new(n.n(r)())((function(t){t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight,t.WEBGL),t.stroke(255),t.strokeWeight(.5),t.noFill(),t.noiseDetail(4,.5),t.rectMode(t.CENTER),t.camera(-t.width/4,-t.height/4,400,-t.width/4,-t.height/4,0,0,1,0)},t.draw=function(){t.background(0);for(var e=5-t.width/2,n=5-t.height/2,r=[];e<0;){for(var i=[];n<0;){var a=t.noise(.005*e,.005*n,t.frameCount/250);i.push([e,n,t.map(a,0,1,-400,400)]),n+=5}r.push(i),e+=5,n=5-t.height/2}r.forEach((function(e){t.beginShape(),e.forEach((function(e){return t.vertex.apply(t,o(e))})),t.endShape()}));for(var u=0;u<r[0].length;u++){t.beginShape();for(var c=0;c<r.length;c++)t.vertex.apply(t,o(r[c][u]));t.endShape()}},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch")}},function(t){t.O(0,[4035],(function(){return 8381,t(t.s=8381)})),t.O()}]);