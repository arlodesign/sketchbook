(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{2:function(n,t,e){"use strict";e.r(t),e.d(t,"linear",(function(){return u})),e.d(t,"easeInQuad",(function(){return r})),e.d(t,"easeOutQuad",(function(){return i})),e.d(t,"easeInOutQuad",(function(){return o})),e.d(t,"easeInCubic",(function(){return a})),e.d(t,"easeOutCubic",(function(){return c})),e.d(t,"easeInOutCubic",(function(){return s})),e.d(t,"easeInQuart",(function(){return d})),e.d(t,"easeOutQuart",(function(){return f})),e.d(t,"easeInOutQuart",(function(){return w})),e.d(t,"easeInQuint",(function(){return p})),e.d(t,"easeOutQuint",(function(){return O})),e.d(t,"easeInOutQuint",(function(){return h}));var u=function(n){return n},r=function(n){return n*n},i=function(n){return n*(2-n)},o=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},s=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},d=function(n){return n*n*n*n},f=function(n){return 1- --n*n*n*n},w=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},p=function(n){return n*n*n*n*n},O=function(n){return 1+--n*n*n*n*n},h=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},305:function(n,t,e){"use strict";e.r(t),function(n){var t=e(0),u=e.n(t),r=e(2),i=(e(3),n.env.DEV&&!1);new u.a((function(n){n.setup=function(){i&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(n.windowWidth,n.windowHeight),n.noStroke(),n.colorMode(n.HSL,1),n.rectMode(n.CENTER),n.createLoop(10,{gif:!!i&&{render:!1,open:!0},noiseRadius:.5})},n.draw=function(){var t=n.animLoop,e=t.noise2D,u=t.theta;n.blendMode(n.BLEND),n.background(.5,.3,.1),n.blendMode(n.HARD_LIGHT);for(var i=0;i<n.width/30;i++)for(var o=0;o<n.height/30;o++){var a=30*Object(r.easeInOutQuint)(n.map(e(i,o),-1,1,0,1)),c=30*Object(r.easeInOutQuint)(n.map(e(o,i),-1,1,0,1));n.push(),n.fill(n.map(n.sin(n.dist(i,o,n.width/2,n.height/2)+u),-1,1,0,1),.5,.5),n.translate(30*i+15,30*o+15),n.translate(30*e(i+.5,o)*2*Object(r.easeInOutQuint)(n.cos(u)),30*e(i,o+.7)*2*Object(r.easeInOutQuint)(n.cos(u))),n.square(0,0,c,a),n.pop()}},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")}.call(this,e(5))}},[[305,0,1]]]);