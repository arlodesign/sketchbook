(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{XA57:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a),o=n("Gmm/"),i=n("Wbzz"),s=n("Aw06"),c=n("qKvR"),p=function(t){var e,n,a=t.random([t.BLEND,t.DARKEST,t.LIGHTEST,t.DIFFERENCE,t.MULTIPLY,t.EXCLUSION,t.SCREEN,t.OVERLAY,t.HARD_LIGHT,t.DODGE,t.BURN,t.ADD]);console.log(a),t.preload=function(){n=t.loadImage(Object(i.withPrefix)("/assets/susan.png"))},t.setup=function(){t.createCanvas(660,840),e=t.width/3},t.draw=function(){t.background(n);for(var r=0;r<t.height/e;r++)for(var o=0;o<t.width/e;o++){var i={x:parseInt(o*e,10),y:parseInt(r*e,10)},s={x:parseInt(o*e,10),y:parseInt(r*e+t.sin(t.frameCount/50+(o+1)*(r+1))*(e/2),10)};t.blend(n,i.x,i.y,e,e,s.x,s.y,e,e,a)}}};e.default=function(t){var e=t.location;return Object(c.c)(o.a,{sketch:p,path:e.pathname,description:Object(c.c)(r.a.Fragment,null,"Spent some time with"," ",Object(c.c)(s.a,{href:"https://timrodenbroeker.de/processing-tutorial-kinetic-typography-1/"},"this tutorial"),". Reload page for different variations.")})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-26-js-70e0bb6fd37e2302c9b3.js.map