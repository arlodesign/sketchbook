(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{206:function(t,r,n){"use strict";n.r(r);n(60),n(313),n(295);var o=n(9),i=(n(0),n(294)),e=function(t){var r=[];function n(n,o){var i=4*function(n,o){return r.sort(function(r,i){return t.dist(n,o,r.vector.x,r.vector.y)-t.dist(n,o,i.vector.x,i.vector.y)}),r[0].color}(n,o);t.fill(i,i,i,127.5),t.rect(n,o,2,2),t.fill(i),t.rect(n,o,1,1)}t.setup=function(){t.createCanvas(660,840),t.background(255),r=new Array(64).fill().map(function(){return{vector:t.createVector(t.randomGaussian(t.width/2,t.width/30*3),t.randomGaussian(t.height/2,t.height/30*3))}}).sort(function(r,n){return t.dist(t.width/2,t.height/2,r.vector.x,r.vector.y)-t.dist(t.width/2,t.height/2,n.vector.x,n.vector.y)}).map(function(t,r){return Object.assign(t,{color:r})}),t.noStroke(),t.rectMode(t.CENTER)},t.draw=function(){var r=t.floor(t.frameCount/(t.width/30)),o=t.floor(t.frameCount-t.width/30*r);if(r<t.height/30)for(var i=0;i<30;i++)for(var e=0;e<30;e++)n(o+t.width/30*i,r+t.height/30*e);else addNoise(.2),t.noLoop()}};r.default=function(t){var r=t.location;return Object(o.c)(i.a,{sketch:e,path:r.pathname})}},295:function(t,r,n){var o=n(12);o(o.P,"Array",{fill:n(296)}),n(35)("fill")},296:function(t,r,n){"use strict";var o=n(28),i=n(78),e=n(16);t.exports=function(t){for(var r=o(this),n=e(r.length),c=arguments.length,u=i(c>1?arguments[1]:void 0,n),a=c>2?arguments[2]:void 0,s=void 0===a?n:i(a,n);s>u;)r[u++]=t;return r}},313:function(t,r,n){"use strict";var o=n(12),i=n(31),e=n(28),c=n(21),u=[].sort,a=[1,2,3];o(o.P+o.F*(c(function(){a.sort(void 0)})||!c(function(){a.sort(null)})||!n(314)(u)),"Array",{sort:function(t){return void 0===t?u.call(e(this)):u.call(e(this),i(t))}})},314:function(t,r,n){"use strict";var o=n(21);t.exports=function(t,r){return!!t&&o(function(){r?t.call(null,function(){},1):t.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-26-js-d1ff0abb1da35de9f55a.js.map