(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{230:function(n,r,t){"use strict";t.r(r);t(351),t(105),t(69),t(44),t(106),t(104),t(354);var o=t(12),e=(t(0),t(350)),a=function(n){var r,t=100,o=[],e=0,a=[function(r){return 240*n.abs(n.sin(r))},function(r){return 240*n.abs(n.cos(r))},function(r){return 240*n.abs(n.tan(r))},function(r){return 240*n.abs(n.sin(-r))},function(r){return 240*n.abs(n.cos(-r))},function(r){return 240*n.abs(n.tan(-r))},function(){return 240},function(){return 15},function(){return 128}];n.setup=function(){for(n.createCanvas(660,840),n.background(127),r=n.width-200;Array.from(new Set(o)).length<3;)o=[n.random(a),n.random(a),n.random(a)];n.blendMode(n.OVERLAY),n.rectMode(n.CENTER),n.strokeWeight(2)},n.draw=function(){n.translate(100,t);var a=n.floor(n.random(30)),i=r/a,u=n.color.apply(n,o.map(function(n){return n(t*e)}).concat([127]));e%2?(n.noFill(),n.stroke(u)):(n.noStroke(),n.fill(u)),n.beginShape(),n.vertex(0,0);for(var c=0;c<a;c++){var f=n.lerp(i*c,i*(c+1),n.noise(c,t)),s=30*n.noise(t,c)*n.random([-1,1]);n.quadraticVertex(f,s,i*(c+1),0)}n.vertex(r,0),n.endShape(),(t+=30)>n.height-100&&(e++,t=100),15===e&&n.noLoop()}};r.default=function(n){var r=n.location;return Object(o.c)(e.a,{sketch:a,path:r.pathname})}},351:function(n,r,t){var o=t(9);o(o.P,"Array",{fill:t(352)}),t(67)("fill")},352:function(n,r,t){"use strict";var o=t(34),e=t(100),a=t(18);n.exports=function(n){for(var r=o(this),t=a(r.length),i=arguments.length,u=e(i>1?arguments[1]:void 0,t),c=i>2?arguments[2]:void 0,f=void 0===c?t:e(c,t);f>u;)r[u++]=n;return r}},354:function(n,r,t){"use strict";var o=t(21),e=t(9),a=t(34),i=t(101),u=t(102),c=t(18),f=t(355),s=t(103);e(e.S+e.F*!t(68)(function(n){Array.from(n)}),"Array",{from:function(n){var r,t,e,l,d=a(n),v="function"==typeof this?this:Array,h=arguments.length,p=h>1?arguments[1]:void 0,b=void 0!==p,w=0,g=s(d);if(b&&(p=o(p,h>2?arguments[2]:void 0,2)),null==g||v==Array&&u(g))for(t=new v(r=c(d.length));r>w;w++)f(t,w,b?p(d[w],w):d[w]);else for(l=g.call(d),t=new v;!(e=l.next()).done;w++)f(t,w,b?i(l,p,[e.value,w],!0):e.value);return t.length=w,t}})},355:function(n,r,t){"use strict";var o=t(13),e=t(35);n.exports=function(n,r,t){r in n?o.f(n,r,e(0,t)):n[r]=t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-04-js-dfee496a4e77c0478e45.js.map