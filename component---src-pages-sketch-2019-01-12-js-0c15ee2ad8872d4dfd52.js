(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{194:function(e,r,t){"use strict";t.r(r);t(311);var o=t(9),n=(t(0),t(310)),a=function(e){var r,t,o=[];e.setup=function(){e.createCanvas(660,840),e.background(255),r=e.floor(e.random(25,50)),t=e.dist(0,0,e.width,e.height);for(var n=0;n<=r;n++)for(var a=0;a<=r;a++)e.random()<.2&&o.push({vector:e.createVector(e.width/r*n,e.height/r*a),reached:!1,reachedBy:0});o[0].reached=!0,o[0].reachedBy=-1},e.draw=function(){e.push(),e.stroke("red"),e.strokeWeight(1),o.filter(function(e){return!e.reached}).forEach(function(r){var t=r.vector;return e.point(t.x,t.y)}),e.pop(),o.forEach(function(r,t){var n=r.vector,a=r.reached,c=r.reachedBy;if(a&&c>-1){var i=o[c].vector,h=i.x,f=i.y;e.stroke(0),e.strokeWeight(2),e.noFill(),e.line(n.x,n.y,h,f),e.fill(0),e.triangle(n.x,n.y,h,f,h,n.y),n.x!==h&&n.y!==f||t%3!=0||e.ellipse(h,f,e.dist(h,f,n.x,n.y))}});var r,n,a=t;o.forEach(function(t,c){t.reached||o.forEach(function(o,i){if(o.reached){var h=e.dist(t.vector.x,t.vector.y,o.vector.x,o.vector.y);h<a&&(a=h,n=c,r=i)}})}),o[n].reached=!0,o[n].reachedBy=r,o.filter(function(e){return e.reached}).length===o.length&&e.noLoop()}};r.default=function(e){var r=e.location;return Object(o.c)(n.a,{sketch:a,path:r.pathname,description:"Reload page for a different variation."})}},311:function(e,r,t){var o=t(12);o(o.P,"Array",{fill:t(312)}),t(36)("fill")},312:function(e,r,t){"use strict";var o=t(28),n=t(79),a=t(16);e.exports=function(e){for(var r=o(this),t=a(r.length),c=arguments.length,i=n(c>1?arguments[1]:void 0,t),h=c>2?arguments[2]:void 0,f=void 0===h?t:n(h,t);f>i;)r[i++]=e;return r}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-12-js-0c15ee2ad8872d4dfd52.js.map