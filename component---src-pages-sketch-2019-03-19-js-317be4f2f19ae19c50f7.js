(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{242:function(n,t,e){"use strict";e.r(t);e(250);var o=e(0),r=e.n(o),a=e(252),i=e(253),u=function(n){var t,e,o=[];n.setup=function(){n.createCanvas(660,840),e=n.dist(-100,-100,n.width+100,n.height+100),o=[n.random(20,40),n.random(60,80)],n.background(o[0]),n.colorMode(n.HSB,100),n.blendMode(n.DIFFERENCE),n.noStroke()},n.draw=function(){var r=Object(i.a)(-100,-100,n.frameCount/100,n.width*n.noise(n.frameCount/1e3),!0),a=i.a.apply(void 0,r.concat([n.frameCount/2,e*n.noise(n.frameCount/100),!0]));n.fill(n.frameCount%2?o[0]:o[1],50,75),t&&(n.beginShape(),n.vertex(-100,-100),n.vertex.apply(n,t),n.vertex.apply(n,a),n.endShape(n.CLOSE)),t=a,--e<0&&n.noLoop()}};t.default=function(n){var t=n.location;return r.a.createElement(a.a,{sketch:u,path:t.pathname,description:""})}},250:function(n,t,e){var o=e(11);o(o.P,"Array",{fill:e(251)}),e(32)("fill")},251:function(n,t,e){"use strict";var o=e(25),r=e(73),a=e(14);n.exports=function(n){for(var t=o(this),e=a(t.length),i=arguments.length,u=r(i>1?arguments[1]:void 0,e),c=i>2?arguments[2]:void 0,f=void 0===c?e:r(c,e);f>u;)t[u++]=n;return t}},253:function(n,t,e){"use strict";e.d(t,"b",function(){return o}),e.d(t,"c",function(){return r});var o=function(n,t,e){return n+Math.cos(t)*e},r=function(n,t,e){return n+Math.sin(t)*e};t.a=function(n,t,e,a,i){void 0===i&&(i=!1);var u=o(n,e,a),c=r(t,e,a);return i?[u,c]:{x:u,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-19-js-317be4f2f19ae19c50f7.js.map