(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{243:function(n,t,o){"use strict";o.r(t);o(262);var r=o(0),e=o.n(r),a=o(264),i=o(265),u=function(n){var t,o,r=[];n.setup=function(){n.createCanvas(660,840),o=n.dist(-100,-100,n.width+100,n.height+100),r=[n.random(20,40),n.random(60,80)],n.background(r[0]),n.colorMode(n.HSB,100),n.blendMode(n.DIFFERENCE),n.noStroke()},n.draw=function(){var e=Object(i.a)(-100,-100,n.frameCount/100,n.width*n.noise(n.frameCount/1e3),!0),a=i.a.apply(void 0,e.concat([n.frameCount/2,o*n.noise(n.frameCount/100),!0]));n.fill(n.frameCount%2?r[0]:r[1],50,75),t&&(n.beginShape(),n.vertex(-100,-100),n.vertex.apply(n,t),n.vertex.apply(n,a),n.endShape(n.CLOSE)),t=a,--o<0&&n.noLoop()}};t.default=function(n){var t=n.location;return e.a.createElement(a.a,{sketch:u,path:t.pathname,description:""})}},262:function(n,t,o){var r=o(11);r(r.P,"Array",{fill:o(263)}),o(32)("fill")},263:function(n,t,o){"use strict";var r=o(25),e=o(73),a=o(14);n.exports=function(n){for(var t=r(this),o=a(t.length),i=arguments.length,u=e(i>1?arguments[1]:void 0,o),c=i>2?arguments[2]:void 0,f=void 0===c?o:e(c,o);f>u;)t[u++]=n;return t}},265:function(n,t,o){"use strict";o.d(t,"c",function(){return r}),o.d(t,"d",function(){return e}),o.d(t,"b",function(){return a});var r=function(n,t,o){return n+Math.cos(t)*o},e=function(n,t,o){return n+Math.sin(t)*o},a=function(n,t,o,r,e,a){void 0===a&&(a=!1);var i=n+Math.cos(o)*r,u=t+Math.sin(o)*e;return a?[i,u]:{x:i,y:u}};t.a=function(n,t,o,a,i){void 0===i&&(i=!1);var u=r(n,o,a),c=e(t,o,a);return i?[u,c]:{x:u,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-19-js-604c8043e93a492428ef.js.map