(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{192:function(r,e,t){"use strict";t.r(e);t(74),t(82),t(257);var n=t(0),c=t.n(n),o=t(255),a=function(r){var e,t,n=[],c=!1;function o(e){return r.constrain(r.randomGaussian(0,.75*e),-e,e)}r.setup=function(){r.createCanvas(660,840,r.WEBGL),e=r.width/3,n=(n=Array.from(Array(125),function(){return{vector:r.createVector(o(e/2),o(e/2),o(e/2)),reached:!1,reachedBy:0}})).concat(Array.from(Array(250),function(){return{vector:r.createVector(o(e),o(e),o(e)),reached:!1,reachedBy:0}})),[-1,1].forEach(function(t){[-1,1].forEach(function(c){[-1,1].forEach(function(o){n.push({vector:r.createVector(e*t,e*c,e*o),reached:!1,reachedBy:0})})})}),n[0].reached=!0,n[0].reachedBy=-1,t=r.dist(-e,-e,-e,e,e,e)},r.draw=function(){r.background(0),r.rotateX(r.sin(r.frameCount/200)),r.rotateY(r.cos(r.frameCount/300)),r.stroke(255),r.noFill(),n.forEach(function(e,c){var o=e.vector,a=e.reached,i=e.reachedBy;if(a&&i>-1){var f=n[i].vector,u=f.x,h=f.y,d=f.z;r.stroke(c%2?255:0),r.strokeWeight(r.map(r.dist(0,0,0,o.x,o.y,o.z),0,t/2,4,.25)),r.bezier(o.x,o.y,o.z,0,0,0,0,0,0,u,h,d)}});var e,o,a=t;c||(n.forEach(function(t,c){t.reached||n.forEach(function(n,i){if(n.reached){var f=r.dist(t.vector.x,t.vector.y,t.vector.z,n.vector.x,n.vector.y,n.vector.z);f<a&&(a=f,o=c,e=i)}})}),n[o].reached=!0,n[o].reachedBy=e),383===n.filter(function(r){return r.reached}).length&&(c=!0)}};e.default=function(r){var e=r.location;return c.a.createElement(o.a,{sketch:a,path:e.pathname})}},257:function(r,e,t){"use strict";var n=t(17),c=t(11),o=t(25),a=t(79),i=t(80),f=t(14),u=t(258),h=t(81);c(c.S+c.F*!t(75)(function(r){Array.from(r)}),"Array",{from:function(r){var e,t,c,d,s=o(r),v="function"==typeof this?this:Array,y=arguments.length,l=y>1?arguments[1]:void 0,p=void 0!==l,m=0,w=h(s);if(p&&(l=n(l,y>2?arguments[2]:void 0,2)),null==w||v==Array&&i(w))for(t=new v(e=f(s.length));e>m;m++)u(t,m,p?l(s[m],m):s[m]);else for(d=w.call(s),t=new v;!(c=d.next()).done;m++)u(t,m,p?a(d,l,[c.value,m],!0):c.value);return t.length=m,t}})},258:function(r,e,t){"use strict";var n=t(26),c=t(54);r.exports=function(r,e,t){e in r?n.f(r,e,c(0,t)):r[e]=t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-09-js-18ce439693529890fe42.js.map