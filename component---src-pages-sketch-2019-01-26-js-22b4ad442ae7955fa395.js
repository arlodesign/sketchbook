(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{208:function(t,r,n){"use strict";n.r(r);n(37),n(267),n(248);var o=n(0),i=n.n(o),e=n(250),c=function(t){var r=[];function n(n,o){var i=4*function(n,o){return r.sort(function(r,i){return t.dist(n,o,r.vector.x,r.vector.y)-t.dist(n,o,i.vector.x,i.vector.y)}),r[0].color}(n,o);t.fill(i,i,i,127.5),t.rect(n,o,2,2),t.fill(i),t.rect(n,o,1,1)}t.setup=function(){t.createCanvas(660,840),t.background(255),r=new Array(64).fill().map(function(){return{vector:t.createVector(t.randomGaussian(t.width/2,t.width/30*3),t.randomGaussian(t.height/2,t.height/30*3))}}).sort(function(r,n){return t.dist(t.width/2,t.height/2,r.vector.x,r.vector.y)-t.dist(t.width/2,t.height/2,n.vector.x,n.vector.y)}).map(function(t,r){return Object.assign(t,{color:r})}),t.noStroke(),t.rectMode(t.CENTER)},t.draw=function(){var r=t.floor(t.frameCount/(t.width/30)),o=t.floor(t.frameCount-t.width/30*r);if(r<t.height/30)for(var i=0;i<30;i++)for(var e=0;e<30;e++)n(o+t.width/30*i,r+t.height/30*e);else addNoise(.2),t.noLoop()}};r.default=function(t){var r=t.location;return i.a.createElement(e.a,{sketch:c,path:r.pathname})}},248:function(t,r,n){var o=n(11);o(o.P,"Array",{fill:n(249)}),n(32)("fill")},249:function(t,r,n){"use strict";var o=n(25),i=n(73),e=n(14);t.exports=function(t){for(var r=o(this),n=e(r.length),c=arguments.length,a=i(c>1?arguments[1]:void 0,n),u=c>2?arguments[2]:void 0,s=void 0===u?n:i(u,n);s>a;)r[a++]=t;return r}},267:function(t,r,n){"use strict";var o=n(11),i=n(28),e=n(25),c=n(18),a=[].sort,u=[1,2,3];o(o.P+o.F*(c(function(){u.sort(void 0)})||!c(function(){u.sort(null)})||!n(268)(a)),"Array",{sort:function(t){return void 0===t?a.call(e(this)):a.call(e(this),i(t))}})},268:function(t,r,n){"use strict";var o=n(18);t.exports=function(t,r){return!!t&&o(function(){r?t.call(null,function(){},1):t.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-26-js-22b4ad442ae7955fa395.js.map