(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{343:function(n,t,o){"use strict";o.r(t);var a=o(0),e=(o(1),o(255)),r=o(545),i=o(591),c=function(n){var t,o,a,e;n.setup=function(){n.createCanvas(660,840),n.noFill(),n.background(240),n.colorMode(n.HSB,100),n.blendMode(n.HARD_LIGHT),o=3*n.dist(0,0,n.width,n.height),a=n.random(0,49),e=n.random(50,100),t=[-n.width/3,-n.height/3]};var c=function(a){n.beginShape();for(var e=0;e<n.TWO_PI;e+=.4/3){var i=r.a.apply(void 0,t.concat([e*n.noise(o/1e3,a(e+n.frameCount/1e3)),o*n.noise(e/1e3,a(e+n.frameCount/500))])),c=i.x,u=i.y;n.vertex(c,u)}n.endShape()};n.draw=function(){Object(i.a)(n.frameCount,(function(){n.stroke(a,n.map(n.tan(n.frameCount/300),-1,1,66,33),66,10),c(Math.cos)}),(function(){n.stroke(e,n.map(n.tan(n.frameCount/300),-1,1,33,66),66,10),c(Math.sin)})),(o-=.4)<n.dist.apply(n,[0,0].concat(t))&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(a.c)(e.a,{sketch:c,path:t.pathname,description:"Be patient. Sometimes this one starts drawing off-canvas."})}},545:function(n,t,o){"use strict";o.d(t,"c",(function(){return a})),o.d(t,"d",(function(){return e})),o.d(t,"b",(function(){return r}));var a=function(n,t,o){return n+Math.cos(t)*o},e=function(n,t,o){return n+Math.sin(t)*o},r=function(n,t,o,a,e,r){void 0===r&&(r=!1);var i=n+Math.cos(o)*a,c=t+Math.sin(o)*e;return r?[i,c]:{x:i,y:c}};t.a=function(n,t,o,r,i){void 0===i&&(i=!1);var c=a(n,o,r),u=e(t,o,r);return i?[c,u]:{x:c,y:u}}},591:function(n,t,o){"use strict";function a(n,t,o){n%2?(t(),o()):(o(),t())}o.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-23-js-12b75f2cd2a3f290af57.js.map