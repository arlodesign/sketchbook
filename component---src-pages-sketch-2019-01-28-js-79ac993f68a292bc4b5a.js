(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{208:function(t,n,r){"use strict";r.r(n);r(271),r(288);var o=r(9),i=(r(0),r(272)),e=function(t){var n=10,r=[];function o(o,i){var e=function(o,i){return r.sort(function(n,r){return t.dist(o,i,n.vector.x,n.vector.y)-t.dist(o,i,r.vector.x,r.vector.y)}),r[n-1]}(o,i),a=e.vector,c=e.color;t.stroke(c,c,c,32),t.line(o,i,a.x,a.y)}t.setup=function(){t.createCanvas(660,840),t.background(255),r=new Array(n).fill().map(function(n,r){return{vector:t.createVector(t.randomGaussian(t.width/2,t.width/30*3),t.randomGaussian(t.height/2,t.height/30*3)),color:[255,169.83,0][r%3]}})},t.draw=function(){var n=t.floor(t.frameCount/(t.width/30)),r=t.floor(t.frameCount-t.width/30*n);if(n<t.height/30)for(var i=0;i<30;i++)for(var e=0;e<30;e++)!(t.frameCount%t.floor(30/13))&&o(r+t.width/30*i,n+t.height/30*e);else t.noLoop()}};n.default=function(t){var n=t.location;return Object(o.c)(i.a,{sketch:e,path:n.pathname,description:"Reload page for a different variation."})}},271:function(t,n,r){var o=r(12);o(o.P,"Array",{fill:r(273)}),r(35)("fill")},273:function(t,n,r){"use strict";var o=r(28),i=r(78),e=r(16);t.exports=function(t){for(var n=o(this),r=e(n.length),a=arguments.length,c=i(a>1?arguments[1]:void 0,r),u=a>2?arguments[2]:void 0,f=void 0===u?r:i(u,r);f>c;)n[c++]=t;return n}},288:function(t,n,r){"use strict";var o=r(12),i=r(31),e=r(28),a=r(21),c=[].sort,u=[1,2,3];o(o.P+o.F*(a(function(){u.sort(void 0)})||!a(function(){u.sort(null)})||!r(289)(c)),"Array",{sort:function(t){return void 0===t?c.call(e(this)):c.call(e(this),i(t))}})},289:function(t,n,r){"use strict";var o=r(21);t.exports=function(t,n){return!!t&&o(function(){n?t.call(null,function(){},1):t.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-28-js-79ac993f68a292bc4b5a.js.map