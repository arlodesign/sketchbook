(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{164:function(t,n,r){"use strict";r.r(n);r(281);var o=r(9),a=(r(0),r(280)),i=function(t){t.setup=function(){t.createCanvas(660,840),t.rectMode(t.CENTER),t.noStroke(),t.noLoop()},t.draw=function(){t.background(255),t.translate(t.width/3,t.height/3);for(var n=0;n<=t.width;n+=79.98)for(var r=0;r<=t.height;r+=79.98){var o=t.noise(n,r),a=t.map(o,0,1,2,4);t.rotate(t.PI/a),t.fill("rgba(0, 0, 0, "+o/4+")"),t.rect(n,0,120*o,t.height),t.fill("rgba(0, 0, 0, "+o/4+")"),t.rect(0,r,t.width,60*o)}}};n.default=function(t){var n=t.location;return Object(o.c)(a.a,{sketch:i,path:n.pathname})}},281:function(t,n,r){var o=r(12);o(o.P,"Array",{fill:r(282)}),r(35)("fill")},282:function(t,n,r){"use strict";var o=r(28),a=r(78),i=r(16);t.exports=function(t){for(var n=o(this),r=i(n.length),e=arguments.length,c=a(e>1?arguments[1]:void 0,r),f=e>2?arguments[2]:void 0,h=void 0===f?r:a(f,r);h>c;)n[c++]=t;return n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-10-js-b80579d133cddef13f79.js.map