(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{411:function(n,t,e){"use strict";e.r(t);e(179),e(83),e(182);var o=e(0),a=(e(1),e(251)),r=function(n){var t=660,e=10,o={111:n.random([0,1]),110:n.random([0,1]),101:n.random([0,1]),100:n.random([0,1]),"011":n.random([0,1]),"010":n.random([0,1]),"001":n.random([0,1]),"000":n.random([0,1])},a=new(function(){function a(){this.cells=Array.from({length:t/e},(function(){return n.random([0,1])})),this.cells[this.cells.length-1]=1}var r=a.prototype;return r.draw=function(t){var o=this;this.cells.forEach((function(a,r){console.log(a,r*e,o.y),n.fill(a?0:255),n.square(r*e,t*e,e)}))},r.update=function(){var n=this,t=[];this.cells.forEach((function(e,a){var r=0===a?"1":String(n.cells[a-1]);r+=String(n.cells[a]),r+=a===n.cells.length-1?"1":String(n.cells[a+1]),t.push(o[r])})),this.cells=t},a}());n.setup=function(){n.createCanvas(t,840),n.background(255),n.noStroke()},n.draw=function(){a.draw(n.frameCount-1),a.update(),n.frameCount*e>840&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(o.c)(a.a,{sketch:r,path:t.pathname,description:"Randomly generated cellular automata. Some of these will look, well, bad. Just keep refreshing the page until you see something you like."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-31-js-6d74503206065e540208.js.map