(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{209:function(e,r,t){"use strict";t.r(r);t(354);var o=t(12),i=(t(0),t(353)),n=function(e){var r,t,o=[];e.setup=function(){e.pixelDensity(1),e.createCanvas(660,840),t=e.floor(e.random(25,50));for(var i=0;i<=t;i++)for(var n=0;n<=t;n++){var a=e.floor(e.width/t*i),c=e.floor(e.height/t*n);e.dist(a,c,e.width/2,e.height/2)<e.width/2-100&&e.random()<.5&&o.push({vector:e.createVector(a,c),reached:!1,reachedBy:0})}o[0].reached=!0,o[0].reachedBy=-1,r=e.dist(0,0,e.width,e.height),e.background(0),e.strokeWeight(2),e.fill(0)},e.draw=function(){e.fill(255),e.ellipse(e.width/2,e.height/2,e.width/2+100+e.width/t*8),e.push(),e.stroke("red"),o.filter(function(e){return!e.reached}).forEach(function(r){var t=r.vector;return e.point(t.x,t.y)}),e.pop();var i,n,a=r;o.forEach(function(r,t){r.reached||o.forEach(function(o,c){if(o.reached){var h=e.dist(r.vector.x,r.vector.y,o.vector.x,o.vector.y);h<a&&(a=h,n=t,i=c)}})}),o[n].reached=!0,o[n].reachedBy=i,o.forEach(function(r,t){var i=r.vector,n=r.reached,a=r.reachedBy;if(n&&a>-1){var c=o[a].vector,h=c.x,d=c.y;e.stroke(0),e.strokeWeight(2),e.noFill(),e.line(i.x,i.y,h,d),e.fill(0),e.strokeWeight(1),e.triangle(i.x,i.y,h,d,h,i.y),i.x!==h&&i.y!==d||t%4!=0||e.ellipse(h,d,e.dist(h,d,i.x,i.y))}}),o.filter(function(e){return e.reached}).length===o.length&&e.noLoop()}};r.default=function(e){var r=e.location;return Object(o.c)(i.a,{sketch:n,path:r.pathname,description:"Reload page for a different variation."})}},354:function(e,r,t){var o=t(9);o(o.P,"Array",{fill:t(355)}),t(67)("fill")},355:function(e,r,t){"use strict";var o=t(34),i=t(100),n=t(18);e.exports=function(e){for(var r=o(this),t=n(r.length),a=arguments.length,c=i(a>1?arguments[1]:void 0,t),h=a>2?arguments[2]:void 0,d=void 0===h?t:i(h,t);d>c;)r[c++]=e;return r}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-13-js-f30a7051426e4d61046b.js.map