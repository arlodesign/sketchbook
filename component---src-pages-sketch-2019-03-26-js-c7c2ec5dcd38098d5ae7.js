(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{297:function(n,t,o){"use strict";o.r(t);var a=o(10),r=(o(0),o(426)),i=o(427),c=function(n){var t,o,a=0,r=n.PI,c=.01/3/n.TWO_PI,e=1/3/n.TWO_PI,u=n.random(100);n.setup=function(){n.createCanvas(660,840),n.colorMode(n.HSB,100),n.background(u,90,10),n.noFill(),n.strokeWeight(.5),t=n.width},n.draw=function(){n.stroke(n.lerpColor(n.color(u,0,0,0),n.color(u,5,95),n.map(n.sin(r),-1,1,0,1)));var s=[n.width/2,n.map(n.cos(a),-1,1,100,n.height-100)],p=i.a.apply(void 0,s.concat([r,(a>n.TWO_PI?n.map(a,n.TWO_PI,2*n.TWO_PI,t,0):n.map(a,0,n.TWO_PI,0,t))*n.noise(.01,.02,n.frameCount/3e3),!0]));o&&n.line.apply(n,p.concat(o)),o=p,r+=e,(a+=c)>2*n.TWO_PI&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(a.c)(r.a,{sketch:c,path:t.pathname,description:"Be patient. This one takes a while to draw."})}},427:function(n,t,o){"use strict";o.d(t,"c",function(){return a}),o.d(t,"d",function(){return r}),o.d(t,"b",function(){return i});var a=function(n,t,o){return n+Math.cos(t)*o},r=function(n,t,o){return n+Math.sin(t)*o},i=function(n,t,o,a,r,i){void 0===i&&(i=!1);var c=n+Math.cos(o)*a,e=t+Math.sin(o)*r;return i?[c,e]:{x:c,y:e}};t.a=function(n,t,o,i,c){void 0===c&&(c=!1);var e=a(n,o,i),u=r(t,o,i);return c?[e,u]:{x:e,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-26-js-c7c2ec5dcd38098d5ae7.js.map