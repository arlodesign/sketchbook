(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{190:function(r,e,t){"use strict";t.r(e);t(79),t(87),t(278);var c=t(9),n=(t(0),t(276)),o=function(r){var e,t,c=[],n=!1;function o(e){return r.constrain(r.randomGaussian(0,.75*e),-e,e)}r.setup=function(){r.createCanvas(660,840,r.WEBGL),e=r.width/3,c=(c=Array.from(Array(125),function(){return{vector:r.createVector(o(e/2),o(e/2),o(e/2)),reached:!1,reachedBy:0}})).concat(Array.from(Array(250),function(){return{vector:r.createVector(o(e),o(e),o(e)),reached:!1,reachedBy:0}})),[-1,1].forEach(function(t){[-1,1].forEach(function(n){[-1,1].forEach(function(o){c.push({vector:r.createVector(e*t,e*n,e*o),reached:!1,reachedBy:0})})})}),c[0].reached=!0,c[0].reachedBy=-1,t=r.dist(-e,-e,-e,e,e,e)},r.draw=function(){r.background(0),r.rotateX(r.sin(r.frameCount/200)),r.rotateY(r.cos(r.frameCount/300)),r.stroke(255),r.noFill(),c.forEach(function(e,n){var o=e.vector,a=e.reached,i=e.reachedBy;if(a&&i>-1){var f=c[i].vector,u=f.x,h=f.y,d=f.z;r.stroke(n%2?255:0),r.strokeWeight(r.map(r.dist(0,0,0,o.x,o.y,o.z),0,t/2,4,.25)),r.bezier(o.x,o.y,o.z,0,0,0,0,0,0,u,h,d)}});var e,o,a=t;n||(c.forEach(function(t,n){t.reached||c.forEach(function(c,i){if(c.reached){var f=r.dist(t.vector.x,t.vector.y,t.vector.z,c.vector.x,c.vector.y,c.vector.z);f<a&&(a=f,o=n,e=i)}})}),c[o].reached=!0,c[o].reachedBy=e),383===c.filter(function(r){return r.reached}).length&&(n=!0)}};e.default=function(r){var e=r.location;return Object(c.c)(n.a,{sketch:o,path:e.pathname})}},278:function(r,e,t){"use strict";var c=t(20),n=t(12),o=t(28),a=t(84),i=t(85),f=t(16),u=t(279),h=t(86);n(n.S+n.F*!t(80)(function(r){Array.from(r)}),"Array",{from:function(r){var e,t,n,d,s=o(r),v="function"==typeof this?this:Array,y=arguments.length,l=y>1?arguments[1]:void 0,p=void 0!==l,w=0,m=h(s);if(p&&(l=c(l,y>2?arguments[2]:void 0,2)),null==m||v==Array&&i(m))for(t=new v(e=f(s.length));e>w;w++)u(t,w,p?l(s[w],w):s[w]);else for(d=m.call(s),t=new v;!(n=d.next()).done;w++)u(t,w,p?a(d,l,[n.value,w],!0):n.value);return t.length=w,t}})},279:function(r,e,t){"use strict";var c=t(29),n=t(57);r.exports=function(r,e,t){e in r?c.f(r,e,n(0,t)):r[e]=t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-09-js-9670accf65a174b52950.js.map