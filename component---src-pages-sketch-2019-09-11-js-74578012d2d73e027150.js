(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{"WU+Z":function(n,t,r){"use strict";r.r(t);r("bHtr");var e=r("q1tI"),u=r.n(e),i=r("Bl7J"),o=r("9VVL"),c=r("av4u"),a=(r("PZSu"),{}.DEV&&!1),f=function(n){n.setup=function(){n.createCanvas(660,840),n.noStroke(),n.colorMode(n.HSL,1),n.rectMode(n.CENTER),n.createLoop(3,{gif:!!a&&{render:!1,open:!0},noiseRadius:.5})},n.draw=function(){var t=n.animLoop.theta;n.blendMode(n.BLEND),n.background(0),n.blendMode(n.HARD_LIGHT);for(var r=0;r<n.width/30;r++)for(var e=0;e<n.height/30;e++)n.push(),n.translate(30*r+15,30*e+15),n.square(0,0,30*Object(c.c)(n.map(n.cos(n.dist(r,e,n.width/2,n.height/2)+t),-1,1,0,1)),30*Object(c.c)(n.map(n.sin(n.dist(r,e,n.width/2,n.height/2)+t),-1,1,0,1))),n.pop(),n.push(),n.fill(0),n.translate(30*r-15,30*e+15),n.square(0,0,15*Object(c.c)(n.map(n.sin(n.dist(r,e,-n.width/2,n.height/2)+t),-1,1,1,0)),15*Object(c.c)(n.map(n.cos(n.dist(r,e,-n.width/2,n.height/2)+t),-1,1,1,0))),n.pop()}};t.default=function(){return u.a.createElement(i.a,null,u.a.createElement(o.a,{sketch:f}))}},av4u:function(n,t,r){"use strict";r.d(t,"f",(function(){return e})),r.d(t,"j",(function(){return u})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"i",(function(){return c})),r.d(t,"b",(function(){return a})),r.d(t,"g",(function(){return f})),r.d(t,"k",(function(){return d})),r.d(t,"d",(function(){return s})),r.d(t,"h",(function(){return h})),r.d(t,"l",(function(){return p})),r.d(t,"e",(function(){return l}));var e=function(n){return n*n},u=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},o=function(n){return n*n*n},c=function(n){return--n*n*n+1},a=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},s=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},h=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},l=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-11-js-74578012d2d73e027150.js.map