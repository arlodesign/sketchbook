(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{413:function(n,t,e){"use strict";e.r(t);var r=e(10),o=(e(0),e(440)),a=e(475),i=(e(445),{}.DEV&&!1),u=[a.b,a.a,a.c,a.d],c=function(n){var t;n.setup=function(){i&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(660,840),n.colorMode(n.HSB,4),n.strokeWeight(30),t=.45*n.width,n.createLoop(15,{gif:!!i&&{render:!1,open:!0},noiseRadius:1})},n.draw=function(){var e=n.animLoop,r=e.theta,o=e.noise2D;n.blendMode(n.BLEND),n.background(0),n.blendMode(n.SCREEN);var a=n.map(r,0,n.TWO_PI,0,1);u.forEach(function(e,i){n.push(),n.stroke(i,3,3,2),n.translate(n.width/2,n.height/2);for(var u=1;u<=3;u++){var c=n.map(n.sin(r),-1,1,t,t*n.map(o(i+u,n.sin(r)),-1,1,0,1));n.rotate(e(a)*n.PI*u),n.line(0,-c,0,c)}n.pop()})}};t.default=function(n){var t=n.location;return Object(r.c)(o.a,{sketch:c,path:t.pathname,description:""})}},475:function(n,t,e){"use strict";e.d(t,"b",function(){return r}),e.d(t,"a",function(){return o}),e.d(t,"c",function(){return a}),e.d(t,"d",function(){return i});var r=function(n){return n<.5?2*n*n:(4-2*n)*n-1},o=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},a=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},i=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-02-js-1d359cba581b3091105c.js.map