(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{H9wm:function(n,t,e){"use strict";e.r(t);e("bHtr");var r=e("q1tI"),u=e.n(r),i=e("Bl7J"),c=e("9VVL"),o=e("av4u"),a=(e("PZSu"),{}.DEV&&!1),d=function(n){n.setup=function(){n.createCanvas(660,840),n.noStroke(),n.colorMode(n.HSL,1),n.rectMode(n.CENTER),n.createLoop(3,{gif:!!a&&{render:!1,open:!0},noiseRadius:.5})},n.draw=function(){var t=n.animLoop.theta;n.blendMode(n.BLEND),n.background(255),n.blendMode(n.MULTIPLY);for(var e=0;e<n.width/30;e++)for(var r=0;r<n.height/30;r++)n.push(),n.fill("cyan"),n.translate(30*e+15,30*r+15),n.square(0,0,30*Object(o.c)(n.map(n.cos(n.dist(30*e+15,30*r+15,n.width/2,n.height/2)+t),-1,1,0,1)),30*Object(o.c)(n.map(n.sin(n.dist(30*e+15,30*r+15,n.width/2,n.height/2)+t),-1,1,0,1))),n.pop(),n.push(),n.fill("yellow"),n.translate(n.width-(30*e+15),30*r+15),n.square(0,0,30*Object(o.c)(n.map(n.sin(n.dist(30*e+15,30*r+15,n.width/2,n.height/2)+t),-1,1,0,1)),30*Object(o.c)(n.map(n.cos(n.dist(30*e+15,30*r+15,n.width/2,n.height/2)+t),-1,1,0,1))),n.pop(),n.push(),n.fill("magenta"),n.translate(30*e-15,30*r+15),n.square(0,0,15*Object(o.c)(n.map(n.sin(n.dist(e,r,-n.width/2,n.height/2)+t),-1,1,1,0)),15*Object(o.c)(n.map(n.cos(n.dist(e,r,-n.width/2,n.height/2)+t),-1,1,1,0))),n.pop()}};t.default=function(){return u.a.createElement(i.a,null,u.a.createElement(c.a,{sketch:d}))}},av4u:function(n,t,e){"use strict";e.d(t,"f",(function(){return r})),e.d(t,"j",(function(){return u})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return c})),e.d(t,"i",(function(){return o})),e.d(t,"b",(function(){return a})),e.d(t,"g",(function(){return d})),e.d(t,"k",(function(){return f})),e.d(t,"d",(function(){return s})),e.d(t,"h",(function(){return h})),e.d(t,"l",(function(){return p})),e.d(t,"e",(function(){return l}));var r=function(n){return n*n},u=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},c=function(n){return n*n*n},o=function(n){return--n*n*n+1},a=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},d=function(n){return n*n*n*n},f=function(n){return 1- --n*n*n*n},s=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},h=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},l=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-12-js-69164f3c26b0f7acf4fa.js.map