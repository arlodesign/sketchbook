(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{307:function(n,t,o){"use strict";o.r(t);o(314),o(84),o(317);var r=o(9),e=(o(0),o(313)),a=function(n){var t=660,o=10,r={111:n.random([0,1]),110:n.random([0,1]),101:n.random([0,1]),100:n.random([0,1]),"011":n.random([0,1]),"010":n.random([0,1]),"001":n.random([0,1]),"000":n.random([0,1])},e=new(function(){function e(){this.cells=Array.from({length:t/o},function(){return n.random([0,1])}),this.cells[this.cells.length-1]=1}var a=e.prototype;return a.draw=function(t){var r=this;this.cells.forEach(function(e,a){console.log(e,a*o,r.y),n.fill(e?0:255),n.square(a*o,t*o,o)})},a.update=function(){var n=this,t=[];this.cells.forEach(function(o,e){var a=0===e?"1":String(n.cells[e-1]);a+=String(n.cells[e]),a+=e===n.cells.length-1?"1":String(n.cells[e+1]),t.push(r[a])}),this.cells=t},e}());n.setup=function(){n.createCanvas(t,840),n.background(255),n.noStroke()},n.draw=function(){e.draw(n.frameCount-1),e.update(),n.frameCount*o>840&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(r.c)(e.a,{sketch:a,path:t.pathname,description:"Randomly generated cellular automata. Some of these will look, well, bad. Just keep refreshing the page until you see something you like."})}},314:function(n,t,o){var r=o(12);r(r.P,"Array",{fill:o(315)}),o(36)("fill")},315:function(n,t,o){"use strict";var r=o(28),e=o(79),a=o(16);n.exports=function(n){for(var t=r(this),o=a(t.length),i=arguments.length,l=e(i>1?arguments[1]:void 0,o),c=i>2?arguments[2]:void 0,u=void 0===c?o:e(c,o);u>l;)t[l++]=n;return t}},317:function(n,t,o){"use strict";var r=o(21),e=o(12),a=o(28),i=o(81),l=o(82),c=o(16),u=o(318),s=o(83);e(e.S+e.F*!o(80)(function(n){Array.from(n)}),"Array",{from:function(n){var t,o,e,f,h=a(n),d="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,m=void 0!==p,g=0,w=s(h);if(m&&(p=r(p,v>2?arguments[2]:void 0,2)),null==w||d==Array&&l(w))for(o=new d(t=c(h.length));t>g;g++)u(o,g,m?p(h[g],g):h[g]);else for(f=w.call(h),o=new d;!(e=f.next()).done;g++)u(o,g,m?i(f,p,[e.value,g],!0):e.value);return o.length=g,o}})},318:function(n,t,o){"use strict";var r=o(29),e=o(58);n.exports=function(n,t,o){t in n?r.f(n,t,e(0,o)):n[t]=o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-31-js-19b7093a8f5e79302384.js.map