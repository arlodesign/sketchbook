(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{LVnK:function(n,t,r){"use strict";r.r(t);r("bHtr");var e=r("q1tI"),u=r.n(e),o=r("Bl7J"),c=r("9VVL"),i=r("av4u"),f=(r("PZSu"),{}.DEV&&!1),a=function(n){var t,r=n.random(20);n.setup=function(){n.createCanvas(660,840),n.createLoop(10,{gif:!!f&&{render:!1,open:!0},noiseRadius:1}),n.colorMode(n.HSB,20),n.curveTightness(.3),t=n.width/50},n.draw=function(){n.background(r,0,20);for(var e=n.animLoop.noise2D,u=function(u){[n.color(r,20,20/30,20/30),n.color(r,20,20/30,1),n.color(r,20,1,1),n.color(r,20,2,1),n.color(r,u%2?20:u,20)].forEach((function(o,c){n.fill(o),4===c?(n.stroke(r,10,20),n.blendMode(n.BLEND)):(n.noStroke(),n.blendMode(n.MULTIPLY));var f=n.height*(u/20)-(4-c);n.beginShape(),n.curveVertex(-1,f),n.curveVertex(-1,f);for(var a=0;a<=50;a++){var d=t+(n.width-2*t)/50*a,h=Object(i.e)(n.map(e(d/50,n.height*(u/20)/50),-1,1,0,1))*n.map(n.abs(n.width/2-d),0,n.width/2,n.height/20*1.5,0);n.curveVertex(d,f-h)}n.curveVertex(n.width+1,f),n.curveVertex(n.width+1,f),n.vertex(n.width+1,n.height+1),n.vertex(-1,n.height+1),n.endShape(n.CLOSE)}))},o=0;o<20;o++)u(o)}};t.default=function(){return u.a.createElement(o.a,null,u.a.createElement(c.a,{sketch:a}))}},av4u:function(n,t,r){"use strict";r.d(t,"f",(function(){return e})),r.d(t,"j",(function(){return u})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"i",(function(){return i})),r.d(t,"b",(function(){return f})),r.d(t,"g",(function(){return a})),r.d(t,"k",(function(){return d})),r.d(t,"d",(function(){return h})),r.d(t,"h",(function(){return v})),r.d(t,"l",(function(){return l})),r.d(t,"e",(function(){return s}));var e=function(n){return n*n},u=function(n){return n*(2-n)},o=function(n){return n<.5?2*n*n:(4-2*n)*n-1},c=function(n){return n*n*n},i=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},a=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},h=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},v=function(n){return n*n*n*n*n},l=function(n){return 1+--n*n*n*n*n},s=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-15-js-d130925512e0333e3b51.js.map