(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{191:function(e,t,r){"use strict";r.r(t);r(74),r(82),r(271);var n=r(0),c=r.n(n),o=r(269),i=function(e){var t,r,n,c;e.setup=function(){e.createCanvas(660,840),t=(e.width-e.width/1.6180339887)/2,r=(e.height-e.height/1.6180339887)/2,(n=Array.from(Array(2500),function(){return{vector:e.createVector(e.constrain(e.randomGaussian(e.width/2,e.width/1.6180339887/5),t,e.width-t),e.constrain(e.randomGaussian(e.height/2,e.height/1.6180339887/5),r,e.height-r)),reached:!1}}))[0]={vector:e.createVector(e.width/2,e.height/2),reached:!0},n.push({vector:e.createVector(t,r),reached:!1}),n.push({vector:e.createVector(e.width-t,r),reached:!1}),n.push({vector:e.createVector(t,e.height-r),reached:!1}),n.push({vector:e.createVector(e.width-t,e.height-r),reached:!1}),c=e.dist(t,r,e.width-t,e.height-r),e.background(255)},e.draw=function(){var t,r,o=n.filter(function(e){return e.reached}),i=c;n.forEach(function(n,c){n.reached||o.forEach(function(o){var a=o.vector,h=e.dist(a.x,a.y,n.vector.x,n.vector.y);h<i&&(i=h,r=c,t=a)})}),e.strokeWeight(e.map(e.dist(e.width/2,e.height/2,n[r].vector.x,n[r].vector.y),0,c/2,1,5)),e.line(t.x,t.y,n[r].vector.x,n[r].vector.y),n[r].reached=!0,n.filter(function(e){return e.reached}).length===n.length&&e.noLoop()}};t.default=function(e){var t=e.location;return c.a.createElement(o.a,{sketch:i,path:t.pathname,description:"Be patient. Reload page for a different variation."})}},271:function(e,t,r){"use strict";var n=r(17),c=r(11),o=r(25),i=r(79),a=r(80),h=r(14),d=r(272),u=r(81);c(c.S+c.F*!r(75)(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,c,f,s=o(e),v="function"==typeof this?this:Array,l=arguments.length,p=l>1?arguments[1]:void 0,w=void 0!==p,g=0,y=u(s);if(w&&(p=n(p,l>2?arguments[2]:void 0,2)),null==y||v==Array&&a(y))for(r=new v(t=h(s.length));t>g;g++)d(r,g,w?p(s[g],g):s[g]);else for(f=y.call(s),r=new v;!(c=f.next()).done;g++)d(r,g,w?i(f,p,[c.value,g],!0):c.value);return r.length=g,r}})},272:function(e,t,r){"use strict";var n=r(26),c=r(54);e.exports=function(e,t,r){t in e?n.f(e,t,c(0,r)):e[t]=r}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-07-js-8d21e9f2396cb9d27d64.js.map