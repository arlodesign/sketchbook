(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{240:function(n,t,a){"use strict";a.r(t);var o=a(0),e=a.n(o),r=a(246),i=a(247);var c=function(n){var t,a,o,e;n.setup=function(){n.createCanvas(660,840),n.noFill(),n.background(240),n.colorMode(n.HSB,100),n.blendMode(n.HARD_LIGHT),a=3*n.dist(0,0,n.width,n.height),o=n.random(0,49),e=n.random(50,100),t=[-n.width/3,-n.height/3]};var r=function(o){n.beginShape();for(var e=0;e<n.TWO_PI;e+=.4/3){var r=i.a.apply(void 0,t.concat([e*n.noise(a/1e3,o(e+n.frameCount/1e3)),a*n.noise(e/1e3,o(e+n.frameCount/500))])),c=r.x,u=r.y;n.vertex(c,u)}n.endShape()};n.draw=function(){var i,c,u;i=n.frameCount,c=function(){n.stroke(o,n.map(n.tan(n.frameCount/300),-1,1,66,33),66,10),r(Math.cos)},u=function(){n.stroke(e,n.map(n.tan(n.frameCount/300),-1,1,33,66),66,10),r(Math.sin)},i%2?(c(),u()):(u(),c()),(a-=.4)<n.dist.apply(n,[0,0].concat(t))&&n.noLoop()}};t.default=function(n){var t=n.location;return e.a.createElement(r.a,{sketch:c,path:t.pathname,description:"Be patient. Sometimes this one starts drawing off-canvas."})}},247:function(n,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"c",function(){return e});var o=function(n,t,a){return n+Math.cos(t)*a},e=function(n,t,a){return n+Math.sin(t)*a};t.a=function(n,t,a,r,i){void 0===i&&(i=!1);var c=o(n,a,r),u=e(t,a,r);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-23-js-c019cf67b838b9ee9748.js.map