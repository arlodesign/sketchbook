(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{364:function(n,t,o){"use strict";o.r(t);o(429),o(73),o(431);var r=o(10),e=(o(0),o(427)),a=o(440),l=function(n){var t=n.random(100),o=660,r={111:n.random([0,1]),110:n.random([0,1]),101:n.random([0,1]),100:n.random([0,1]),"011":n.random([0,1]),"010":n.random([0,1]),"001":n.random([0,1]),"000":n.random([0,1])},e=10,l=Object(a.a)([0,n.HALF_PI,n.PI,n.HALF_PI+n.PI]),c=0,s=new(function(){function a(){this.cells=Array.from({length:o/e},function(){return 0}),this.cells[0]=1,this.cells[this.cells.length-1]=1,this.cells[n.floor(this.cells.length/3)]=1,this.cells[n.floor(this.cells.length*(2/3))]=1}var s=a.prototype;return s.draw=function(o){var r=this;this.cells.forEach(function(a,s){console.log(a,s*e,r.y),n.fill(a?n.color(t,100,50):n.color(t,100,25)),n.push(),n.translate(s*e+e/2,o*e+e/2),n.rotate(l[c%4]),n.triangle(-e/2,-e/2,e/2,e/2,-e/2,e/2),n.pop(),c++})},s.update=function(){var n=this,t=[];this.cells.forEach(function(o,e){var a=0===e?"0":String(n.cells[e-1]);a+=String(n.cells[e]),a+=e===n.cells.length-1?"0":String(n.cells[e+1]),t.push(r[a])}),this.cells=t},a}());n.setup=function(){n.createCanvas(o,840),n.colorMode(n.HSL,75),n.background(t,100,33),n.noStroke()},n.draw=function(){s.draw(n.frameCount-1),s.update(),n.frameCount*e>840&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(r.c)(e.a,{sketch:l,path:t.pathname,description:"Continuing to explore randomly generated cellular automata."})}},440:function(n,t,o){"use strict";function r(n){for(var t=n.length-1;t>0;t--){var o=Math.floor(Math.random()*(t+1)),r=[n[o],n[t]];n[t]=r[0],n[o]=r[1]}return n}o.d(t,"a",function(){return r})}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-09-js-36f83be853b78f88390f.js.map