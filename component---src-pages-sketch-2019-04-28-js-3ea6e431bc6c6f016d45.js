(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{330:function(t,o,e){"use strict";e.r(o);e(425);var n=e(10),a=(e(0),e(423)),r=e(436),c=function(t){var o=t.random(100),e=Object(r.a)([1,2,3,5,8,13].map(function(t){return 100*t})),n=10;t.setup=function(){t.createCanvas(660,840),t.background("gray"),t.noFill(),t.colorMode(t.HSB,100),t.blendMode(t.OVERLAY),t.curveTightness(-3)},t.draw=function(){t.stroke(o,t.map(t.cos(t.frameCount/e[4]),-1,1,33,66),t.map(t.cos(t.frameCount/e[5]),-1,1,60,80),n),t.curve(0,t.map(t.cos(t.frameCount/e[0]),-1,1,100,t.height-100),100,t.map(t.cos(t.frameCount/e[1]),-1,1,100,t.height-100),t.width-100,t.map(t.cos(t.frameCount/e[2]),-1,1,100,t.height-100),t.width,t.map(t.cos(t.frameCount/e[3]),-1,1,100,t.height-100)),t.push(),t.noStroke(),t.blendMode(t.BLEND),t.fill("gray"),t.rect(0,0,t.width,100),t.rect(0,t.height-100,t.width,t.height),t.fill("black"),t.frameCount>1e4?(n-=.01)<0&&t.noLoop():t.text(1e4-t.frameCount,10,20),t.pop()}};o.default=function(t){var o=t.location;return Object(n.c)(a.a,{sketch:c,path:o.pathname,description:"Reload page for a different variation."})}},436:function(t,o,e){"use strict";function n(t){for(var o=t.length-1;o>0;o--){var e=Math.floor(Math.random()*(o+1)),n=[t[e],t[o]];t[o]=n[0],t[e]=n[1]}return t}e.d(o,"a",function(){return n})}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-28-js-3ea6e431bc6c6f016d45.js.map