(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{280:function(t,n,e){"use strict";e.r(n);var a=e(9),r=e(0),o=e.n(r),i=e(302),s=e(310),c=e(320),p=function(t){var n,e,a=t.random([t.BLEND,t.DARKEST,t.LIGHTEST,t.DIFFERENCE,t.MULTIPLY,t.EXCLUSION,t.SCREEN,t.OVERLAY,t.HARD_LIGHT,t.DODGE,t.BURN,t.ADD]);console.log(a),t.preload=function(){e=t.loadImage(Object(s.c)("/assets/susan.png"))},t.setup=function(){t.createCanvas(660,840),n=t.width/3},t.draw=function(){t.background(e);for(var r=0;r<t.height/n;r++)for(var o=0;o<t.width/n;o++){var i={x:parseInt(o*n,10),y:parseInt(r*n,10)},s={x:parseInt(o*n,10),y:parseInt(r*n+t.sin(t.frameCount/50+(o+1)*(r+1))*(n/2),10)};t.blend(e,i.x,i.y,n,n,s.x,s.y,n,n,a)}}};n.default=function(t){var n=t.location;return Object(a.c)(i.a,{sketch:p,path:n.pathname,description:Object(a.c)(o.a.Fragment,null,"Spent some time with"," ",Object(a.c)(c.a,{href:"https://timrodenbroeker.de/processing-tutorial-kinetic-typography-1/"},"this tutorial"),". Reload page for different variations.")})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-26-js-1c7e49db9322f5863532.js.map