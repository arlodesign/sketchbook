(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{296:function(t,o,n){"use strict";n.r(o);n(339);var e=n(12),r=(n(0),n(338)),a=n(347),i=function(t){var o=t.random(100),n=Object(a.a)([1,2,3,5,8,13].map(function(t){return 100*t})),e=10;t.setup=function(){t.createCanvas(660,840),t.background("gray"),t.noFill(),t.colorMode(t.HSB,100),t.blendMode(t.OVERLAY),t.curveTightness(-3)},t.draw=function(){t.stroke(o,t.map(t.cos(t.frameCount/n[4]),-1,1,33,66),t.map(t.cos(t.frameCount/n[5]),-1,1,60,80),e),t.curve(0,t.map(t.cos(t.frameCount/n[0]),-1,1,100,t.height-100),100,t.map(t.cos(t.frameCount/n[1]),-1,1,100,t.height-100),t.width-100,t.map(t.cos(t.frameCount/n[2]),-1,1,100,t.height-100),t.width,t.map(t.cos(t.frameCount/n[3]),-1,1,100,t.height-100)),t.push(),t.noStroke(),t.blendMode(t.BLEND),t.fill("gray"),t.rect(0,0,t.width,100),t.rect(0,t.height-100,t.width,t.height),t.fill("black"),t.frameCount>1e4?(e-=.01)<0&&t.noLoop():t.text(1e4-t.frameCount,10,20),t.pop()}};o.default=function(t){var o=t.location;return Object(e.c)(r.a,{sketch:i,path:o.pathname,description:"Reload page for a different variation."})}},339:function(t,o,n){var e=n(9);e(e.P,"Array",{fill:n(340)}),n(67)("fill")},340:function(t,o,n){"use strict";var e=n(34),r=n(100),a=n(18);t.exports=function(t){for(var o=e(this),n=a(o.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,n),u=i>2?arguments[2]:void 0,f=void 0===u?n:r(u,n);f>c;)o[c++]=t;return o}},347:function(t,o,n){"use strict";function e(t){for(var o=t.length-1;o>0;o--){var n=Math.floor(Math.random()*(o+1)),e=[t[n],t[o]];t[o]=e[0],t[n]=e[1]}return t}n.d(o,"a",function(){return e})}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-28-js-abae7f7ef6ed7704eef3.js.map