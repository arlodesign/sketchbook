(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{281:function(o,t,n){"use strict";n.r(t);n(295);var r=n(9),a=(n(0),n(294)),e=n(309),i=function(o){var t=o.random(100),n=Object(e.a)([1,2,3,5,8,13,21,34].map(function(o){return 100*o})),r=0;o.setup=function(){o.createCanvas(660,840),o.background(0),o.noStroke(),o.colorMode(o.HSB,100),o.blendMode(o.HARD_LIGHT),o.curveTightness(-3)},o.draw=function(){o.fill(t,o.map(o.cos(o.frameCount/n[4]),-1,1,20,50),o.map(o.cos(o.frameCount/n[5]),-1,1,60,100),r);for(var a=0;a<1;a+=o.noise(o.frameCount/100)/10){var e=o.curvePoint(0,o.map(o.cos(o.frameCount/n[5]),-1,1,50,100),o.map(o.cos(o.frameCount/n[6]),-1,1,o.width-100,o.width-50),o.width,a),i=o.curvePoint(o.map(o.cos(o.frameCount/n[0]),-1,1,100,o.height-100),o.map(o.cos(o.frameCount/n[1]),-1,1,100,o.height-100),o.map(o.cos(o.frameCount/n[2]),-1,1,100,o.height-100),o.map(o.cos(o.frameCount/n[3]),-1,1,100,o.height-100),a);o.circle(e,i,1)}o.frameCount>5e3?(r-=.1)<0&&o.noLoop():r=r<100?r+.1:r}};t.default=function(o){var t=o.location;return Object(r.c)(a.a,{sketch:i,path:t.pathname,description:"Reload page for a different variation."})}},295:function(o,t,n){var r=n(12);r(r.P,"Array",{fill:n(296)}),n(35)("fill")},296:function(o,t,n){"use strict";var r=n(28),a=n(78),e=n(16);o.exports=function(o){for(var t=r(this),n=e(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),u=i>2?arguments[2]:void 0,f=void 0===u?n:a(u,n);f>c;)t[c++]=o;return t}},309:function(o,t,n){"use strict";function r(o){for(var t=o.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[o[n],o[t]];o[t]=r[0],o[n]=r[1]}return o}n.d(t,"a",function(){return r})}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-29-js-54518b889aa4cc9cf14e.js.map