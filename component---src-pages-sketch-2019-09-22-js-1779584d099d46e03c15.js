(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{ViKx:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var r=function(e,t,n,r,i,a){void 0===a&&(a=!1);var o=e+Math.cos(n)*r,u=t+Math.sin(n)*i;return a?[o,u]:{x:o,y:u}};t.a=function(e,t,n,r,i){void 0===i&&(i=!1);var a=function(e,t,n){return e+Math.cos(t)*n}(e,n,r),o=function(e,t,n){return e+Math.sin(t)*n}(t,n,r);return i?[a,o]:{x:a,y:o}}},hwPp:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("Bl7J"),o=n("9VVL"),u=(n("ViKx"),n("PZSu"),{}.DEV&&!1),c=function(e){var t=(e.sqrt(5)+1)/2;e.setup=function(){u&&e.pixelDensity(1),e.createCanvas(660,840),e.createLoop(40,{gif:!!u&&{render:!1,download:!0,options:{quality:1,workers:10,dither:"FloydSteinberg-serpentine",debug:!0}},noiseRadius:.5})},e.draw=function(){var n=e.animLoop,r=n.noise2D,i=n.theta;e.blendMode(e.BLEND),e.background(255),e.blendMode(e.MULTIPLY),e.translate(e.width/2,e.height/2);for(var a=0;a<3;a++)e.rotate(e.TWO_PI/3-i),["cyan","magenta","yellow"].forEach((function(n,i){var a=1;for(e.stroke(n);a<2*e.height;)e.strokeWeight(e.map(a,0,e.height,1,20,!0)),e.bezier(a,-e.height,0,0,0,0,a,e.height),e.bezier(-a,-e.height,0,0,0,0,-a,e.height),a*=t*e.map(r(t,i+1),-1,1,1,4)}))}};t.default=function(){return i.a.createElement(a.a,null,i.a.createElement(o.a,{sketch:c}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-22-js-1779584d099d46e03c15.js.map