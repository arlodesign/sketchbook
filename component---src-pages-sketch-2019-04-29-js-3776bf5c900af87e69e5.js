(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{391:function(o,n,t){"use strict";t.r(n);t(180);var a=t(0),e=(t(1),t(255)),r=t(570),c=function(o){var n=o.random(100),t=Object(r.a)([1,2,3,5,8,13,21,34].map((function(o){return 100*o}))),a=0;o.setup=function(){o.createCanvas(660,840),o.background(0),o.noStroke(),o.colorMode(o.HSB,100),o.blendMode(o.HARD_LIGHT),o.curveTightness(-3)},o.draw=function(){o.fill(n,o.map(o.cos(o.frameCount/t[4]),-1,1,20,50),o.map(o.cos(o.frameCount/t[5]),-1,1,60,100),a);for(var e=0;e<1;e+=o.noise(o.frameCount/100)/10){var r=o.curvePoint(0,o.map(o.cos(o.frameCount/t[5]),-1,1,50,100),o.map(o.cos(o.frameCount/t[6]),-1,1,o.width-100,o.width-50),o.width,e),c=o.curvePoint(o.map(o.cos(o.frameCount/t[0]),-1,1,100,o.height-100),o.map(o.cos(o.frameCount/t[1]),-1,1,100,o.height-100),o.map(o.cos(o.frameCount/t[2]),-1,1,100,o.height-100),o.map(o.cos(o.frameCount/t[3]),-1,1,100,o.height-100),e);o.circle(r,c,1)}o.frameCount>5e3?(a-=.1)<0&&o.noLoop():a=a<100?a+.1:a}};n.default=function(o){var n=o.location;return Object(a.c)(e.a,{sketch:c,path:n.pathname,description:"Reload page for a different variation."})}},570:function(o,n,t){"use strict";function a(o){for(var n=o.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),a=[o[t],o[n]];o[n]=a[0],o[t]=a[1]}return o}t.d(n,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-29-js-3776bf5c900af87e69e5.js.map