(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{av4u:function(n,t,r){"use strict";r.d(t,"f",(function(){return u})),r.d(t,"j",(function(){return e})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"i",(function(){return c})),r.d(t,"b",(function(){return a})),r.d(t,"g",(function(){return f})),r.d(t,"k",(function(){return s})),r.d(t,"d",(function(){return d})),r.d(t,"h",(function(){return h})),r.d(t,"l",(function(){return l})),r.d(t,"e",(function(){return p}));var u=function(n){return n*n},e=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},o=function(n){return n*n*n},c=function(n){return--n*n*n+1},a=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},s=function(n){return 1- --n*n*n*n},d=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},h=function(n){return n*n*n*n*n},l=function(n){return 1+--n*n*n*n*n},p=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},xAbk:function(n,t,r){"use strict";r.r(t);r("bHtr");var u=r("q1tI"),e=r.n(u),i=r("Bl7J"),o=r("9VVL"),c=(r("PZSu"),r("av4u")),a={}.DEV&&!1,f=30,s=function(n){var t=[],r=function(){function t(t,r,u){this.x=t,this.y=r,this.rnd=u,this.canvas=n.createGraphics(f,f),this.canvas.noStroke(),this.canvas.translate(f/2,f/2),this.canvas.rotate(n.QUARTER_PI)}return t.prototype.draw=function(){var t=this.x,r=this.y,u=this.rnd,e=this.canvas,i=n.animLoop,o=i.noise2D,a=i.theta;e.blendMode(n.BLEND),e.background(255),e.blendMode(n.MULTIPLY),["cyan","magenta","yellow"].forEach((function(t,r){e.fill(t),e.rect(n.map(o(u,r+1),-1,1,2*-f,2*f)*Object(c.c)(n.abs(n.sin(a))),-f,2*f,2*f)})),n.image(e,t,r)},t}();n.setup=function(){a&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(660,840),n.createLoop(45,{gif:!!a&&{render:!1,open:!0},noiseRadius:5});for(var u=0;u<n.width;u+=f)for(var e=0;e<n.height;e+=f)t.push(new r(u,e,n.random()))},n.draw=function(){n.background(255),t.forEach((function(n){return n.draw()}))}};t.default=function(){return e.a.createElement(i.a,null,e.a.createElement(o.a,{sketch:s}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-06-js-41e67e8b1e0741354989.js.map