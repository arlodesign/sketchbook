(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{"/mVx":function(n,t,u){"use strict";u.r(t);u("q1tI");var e=u("Gmm/"),r=u("av4u"),i=(u("PZSu"),u("qKvR")),a={}.DEV&&!1,o=[r.easeInOutQuad,r.easeInOutCubic,r.easeInOutQuart,r.easeInOutQuint],c=function(n){var t;n.setup=function(){a&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(660,840),n.colorMode(n.HSB,4),n.strokeWeight(30),t=.45*n.width,n.createLoop(15,{gif:!!a&&{render:!1,open:!0},noiseRadius:1})},n.draw=function(){var u=n.animLoop,e=u.theta,r=u.noise2D;n.blendMode(n.BLEND),n.background(0),n.blendMode(n.SCREEN);var i=n.map(e,0,n.TWO_PI,0,1);o.forEach((function(u,a){n.push(),n.stroke(a,3,3,2),n.translate(n.width/2,n.height/2);for(var o=1;o<=3;o++){var c=n.map(n.sin(e),-1,1,t,t*n.map(r(a+o,n.sin(e)),-1,1,0,1));n.rotate(u(i)*n.PI*o),n.line(0,-c,0,c)}n.pop()}))}};t.default=function(n){var t=n.location;return Object(i.c)(e.a,{sketch:c,path:t.pathname,description:""})}},av4u:function(n,t,u){"use strict";u.r(t),u.d(t,"linear",(function(){return e})),u.d(t,"easeInQuad",(function(){return r})),u.d(t,"easeOutQuad",(function(){return i})),u.d(t,"easeInOutQuad",(function(){return a})),u.d(t,"easeInCubic",(function(){return o})),u.d(t,"easeOutCubic",(function(){return c})),u.d(t,"easeInOutCubic",(function(){return f})),u.d(t,"easeInQuart",(function(){return s})),u.d(t,"easeOutQuart",(function(){return d})),u.d(t,"easeInOutQuart",(function(){return p})),u.d(t,"easeInQuint",(function(){return I})),u.d(t,"easeOutQuint",(function(){return O})),u.d(t,"easeInOutQuint",(function(){return h}));var e=function(n){return n},r=function(n){return n*n},i=function(n){return n*(2-n)},a=function(n){return n<.5?2*n*n:(4-2*n)*n-1},o=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},p=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},I=function(n){return n*n*n*n*n},O=function(n){return 1+--n*n*n*n*n},h=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-02-js-fa31fef0529ff3339c02.js.map