(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{330:function(n,t,r){"use strict";r.r(t);r(350),r(104),r(353);var o=r(12),e=(r(0),r(349)),l=r(360),a=function(n){var t=n.random(100),r=660,o={111:n.random([0,1]),110:n.random([0,1]),101:n.random([0,1]),100:n.random([0,1]),"011":n.random([0,1]),"010":n.random([0,1]),"001":n.random([0,1]),"000":n.random([0,1])},e=10,a=Object(l.a)([0,n.HALF_PI,n.PI,n.HALF_PI+n.PI]),i=0,c=new(function(){function l(){this.cells=Array.from({length:r/e},function(){return 0}),this.cells[0]=1,this.cells[this.cells.length-1]=1,this.cells[n.floor(this.cells.length/3)]=1,this.cells[n.floor(this.cells.length*(2/3))]=1}var c=l.prototype;return c.draw=function(r){var o=this;this.cells.forEach(function(l,c){console.log(l,c*e,o.y),n.fill(l?n.color(t,100,50):n.color(t,100,25)),n.push(),n.translate(c*e+e/2,r*e+e/2),n.rotate(a[i%4]),n.triangle(-e/2,-e/2,e/2,e/2,-e/2,e/2),n.pop(),i++})},c.update=function(){var n=this,t=[];this.cells.forEach(function(r,e){var l=0===e?"0":String(n.cells[e-1]);l+=String(n.cells[e]),l+=e===n.cells.length-1?"0":String(n.cells[e+1]),t.push(o[l])}),this.cells=t},l}());n.setup=function(){n.createCanvas(r,840),n.colorMode(n.HSL,75),n.background(t,100,33),n.noStroke()},n.draw=function(){c.draw(n.frameCount-1),c.update(),n.frameCount*e>840&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(o.c)(e.a,{sketch:a,path:t.pathname,description:"Continuing to explore randomly generated cellular automata."})}},350:function(n,t,r){var o=r(9);o(o.P,"Array",{fill:r(351)}),r(67)("fill")},351:function(n,t,r){"use strict";var o=r(34),e=r(100),l=r(18);n.exports=function(n){for(var t=o(this),r=l(t.length),a=arguments.length,i=e(a>1?arguments[1]:void 0,r),c=a>2?arguments[2]:void 0,s=void 0===c?r:e(c,r);s>i;)t[i++]=n;return t}},353:function(n,t,r){"use strict";var o=r(21),e=r(9),l=r(34),a=r(101),i=r(102),c=r(18),s=r(354),u=r(103);e(e.S+e.F*!r(68)(function(n){Array.from(n)}),"Array",{from:function(n){var t,r,e,f,h=l(n),d="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,g=void 0!==p,m=0,w=u(h);if(g&&(p=o(p,v>2?arguments[2]:void 0,2)),null==w||d==Array&&i(w))for(r=new d(t=c(h.length));t>m;m++)s(r,m,g?p(h[m],m):h[m]);else for(f=w.call(h),r=new d;!(e=f.next()).done;m++)s(r,m,g?a(f,p,[e.value,m],!0):e.value);return r.length=m,r}})},354:function(n,t,r){"use strict";var o=r(13),e=r(35);n.exports=function(n,t,r){t in n?o.f(n,t,e(0,r)):n[t]=r}},360:function(n,t,r){"use strict";function o(n){for(var t=n.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),o=[n[r],n[t]];n[t]=o[0],n[r]=o[1]}return n}r.d(t,"a",function(){return o})}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-09-js-710be2e181f3bb113295.js.map