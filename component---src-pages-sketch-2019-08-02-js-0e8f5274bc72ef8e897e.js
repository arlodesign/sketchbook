(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"/mVx":function(n,t,r){"use strict";r.r(t);var e=r("q1tI"),u=r.n(e),o=r("Bl7J"),i=r("9VVL"),c=r("av4u"),a=(r("PZSu"),{}.DEV&&!1),f=[c.c,c.b,c.d,c.e],d=function(n){var t;n.setup=function(){a&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(660,840),n.colorMode(n.HSB,4),n.strokeWeight(30),t=.45*n.width,n.createLoop(15,{gif:!!a&&{render:!1,open:!0},noiseRadius:1})},n.draw=function(){var r=n.animLoop,e=r.theta,u=r.noise2D;n.blendMode(n.BLEND),n.background(0),n.blendMode(n.SCREEN);var o=n.map(e,0,n.TWO_PI,0,1);f.forEach((function(r,i){n.push(),n.stroke(i,3,3,2),n.translate(n.width/2,n.height/2);for(var c=1;c<=3;c++){var a=n.map(n.sin(e),-1,1,t,t*n.map(u(i+c,n.sin(e)),-1,1,0,1));n.rotate(r(o)*n.PI*c),n.line(0,-a,0,a)}n.pop()}))}};t.default=function(){return u.a.createElement(o.a,null,u.a.createElement(i.a,{sketch:d}))}},av4u:function(n,t,r){"use strict";r.d(t,"f",(function(){return e})),r.d(t,"j",(function(){return u})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"i",(function(){return c})),r.d(t,"b",(function(){return a})),r.d(t,"g",(function(){return f})),r.d(t,"k",(function(){return d})),r.d(t,"d",(function(){return s})),r.d(t,"h",(function(){return p})),r.d(t,"l",(function(){return l})),r.d(t,"e",(function(){return h}));var e=function(n){return n*n},u=function(n){return n*(2-n)},o=function(n){return n<.5?2*n*n:(4-2*n)*n-1},i=function(n){return n*n*n},c=function(n){return--n*n*n+1},a=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},s=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},p=function(n){return n*n*n*n*n},l=function(n){return 1+--n*n*n*n*n},h=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-02-js-0e8f5274bc72ef8e897e.js.map