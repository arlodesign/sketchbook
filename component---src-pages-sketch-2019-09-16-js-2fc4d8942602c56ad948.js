(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{av4u:function(n,t,r){"use strict";r.d(t,"f",(function(){return e})),r.d(t,"j",(function(){return u})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"i",(function(){return c})),r.d(t,"b",(function(){return f})),r.d(t,"g",(function(){return a})),r.d(t,"k",(function(){return d})),r.d(t,"d",(function(){return h})),r.d(t,"h",(function(){return s})),r.d(t,"l",(function(){return v})),r.d(t,"e",(function(){return w}));var e=function(n){return n*n},u=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},o=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},a=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},h=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},s=function(n){return n*n*n*n*n},v=function(n){return 1+--n*n*n*n*n},w=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},nuRW:function(n,t,r){"use strict";r.r(t);r("bHtr");var e=r("q1tI"),u=r.n(e),i=r("Bl7J"),o=r("9VVL"),c=r("av4u"),f=(r("PZSu"),{}.DEV&&!1),a=function(n){var t;n.setup=function(){n.createCanvas(660,840),n.createLoop(10,{gif:!!f&&{render:!1,open:!0},noiseRadius:1}),n.noStroke(),t=n.width/100},n.draw=function(){n.background(255);for(var r=n.animLoop,e=r.noise1D,u=r.noise2D,i=0;i<=50;i++){var o=n.height*(i/50);n.fill(["cyan","magenta","yellow",0][i%4]),n.beginShape(),n.vertex(-1,o);for(var f=0;f<=100;f++){var a=t+(n.width-2*t)/100*f+e(f*o)*(n.width/100/2),d=Object(c.e)(n.map(u(a/50,n.height*(i/50)/50),-1,1,0,1))*n.map(n.abs(n.width/2-a),0,n.width/2,n.height/50*4,0);n.vertex(a,o-d)}n.vertex(n.width+1,o),n.vertex(n.width+1,n.height+1),n.vertex(-1,n.height+1),n.endShape(n.CLOSE)}}};t.default=function(){return u.a.createElement(i.a,null,u.a.createElement(o.a,{sketch:a}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-16-js-2fc4d8942602c56ad948.js.map