(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{av4u:function(n,t,r){"use strict";r.d(t,"f",(function(){return e})),r.d(t,"j",(function(){return u})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"i",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"g",(function(){return f})),r.d(t,"k",(function(){return d})),r.d(t,"d",(function(){return s})),r.d(t,"h",(function(){return p})),r.d(t,"l",(function(){return l})),r.d(t,"e",(function(){return b}));var e=function(n){return n*n},u=function(n){return n*(2-n)},o=function(n){return n<.5?2*n*n:(4-2*n)*n-1},c=function(n){return n*n*n},i=function(n){return--n*n*n+1},a=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},s=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},p=function(n){return n*n*n*n*n},l=function(n){return 1+--n*n*n*n*n},b=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},wuns:function(n,t,r){"use strict";r.r(t);r("bHtr");var e=r("q1tI"),u=r.n(e),o=r("Bl7J"),c=r("9VVL"),i=r("av4u"),a=(r("PZSu"),{}.DEV&&!1),f=function(n){n.setup=function(){a&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(660,840),n.noStroke(),n.colorMode(n.HSL,1),n.rectMode(n.CENTER),n.createLoop(10,{gif:!!a&&{render:!1,open:!0},noiseRadius:.5})},n.draw=function(){var t=n.animLoop,r=t.noise2D,e=t.theta;n.blendMode(n.BLEND),n.background(.5,.3,.1),n.blendMode(n.HARD_LIGHT);for(var u=0;u<n.width/30;u++)for(var o=0;o<n.height/30;o++){var c=30*Object(i.e)(n.map(r(u,o),-1,1,0,1)),a=30*Object(i.e)(n.map(r(o,u),-1,1,0,1));n.push(),n.fill(n.map(n.sin(n.dist(u,o,n.width/2,n.height/2)+e),-1,1,0,1),.5,.5),n.translate(30*u+15,30*o+15),n.translate(30*r(u+.5,o)*2*Object(i.e)(n.cos(e)),30*r(u,o+.7)*2*Object(i.e)(n.cos(e))),n.square(0,0,a,c),n.pop()}}};t.default=function(){return u.a.createElement(o.a,null,u.a.createElement(c.a,{sketch:f}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-10-js-4ba3bba0a2c06143ae8a.js.map