(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{413:function(n,t,r){"use strict";r.r(t);var u=r(10),e=(r(0),r(448)),o=r(470),i=(r(451),{}.DEV&&!1),c=[o.c,o.b,o.d,o.e],f=function(n){var t;n.setup=function(){i&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(660,840),n.colorMode(n.HSB,4),n.strokeWeight(30),t=.45*n.width,n.createLoop(15,{gif:!!i&&{render:!1,open:!0},noiseRadius:1})},n.draw=function(){var r=n.animLoop,u=r.theta,e=r.noise2D;n.blendMode(n.BLEND),n.background(0),n.blendMode(n.SCREEN);var o=n.map(u,0,n.TWO_PI,0,1);c.forEach(function(r,i){n.push(),n.stroke(i,3,3,2),n.translate(n.width/2,n.height/2);for(var c=1;c<=3;c++){var f=n.map(n.sin(u),-1,1,t,t*n.map(e(i+c,n.sin(u)),-1,1,0,1));n.rotate(r(o)*n.PI*c),n.line(0,-f,0,f)}n.pop()})}};t.default=function(n){var t=n.location;return Object(u.c)(e.a,{sketch:f,path:t.pathname,description:""})}},470:function(n,t,r){"use strict";r.d(t,"f",function(){return u}),r.d(t,"j",function(){return e}),r.d(t,"c",function(){return o}),r.d(t,"a",function(){return i}),r.d(t,"i",function(){return c}),r.d(t,"b",function(){return f}),r.d(t,"g",function(){return a}),r.d(t,"k",function(){return d}),r.d(t,"d",function(){return s}),r.d(t,"h",function(){return p}),r.d(t,"l",function(){return h}),r.d(t,"e",function(){return l});var u=function(n){return n*n},e=function(n){return n*(2-n)},o=function(n){return n<.5?2*n*n:(4-2*n)*n-1},i=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},a=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},s=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},p=function(n){return n*n*n*n*n},h=function(n){return 1+--n*n*n*n*n},l=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-02-js-3d8912386573400e5591.js.map