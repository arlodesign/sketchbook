(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{274:function(n,t,o){"use strict";o.r(t);o(399);var e=o(7),r=(o(0),o(397)),a=o(398),i=function(n){var t,o,e=[];n.setup=function(){n.createCanvas(660,840),o=n.dist(-100,-100,n.width+100,n.height+100),e=[n.random(20,40),n.random(60,80)],n.background(e[0]),n.colorMode(n.HSB,100),n.blendMode(n.DIFFERENCE),n.noStroke()},n.draw=function(){var r=Object(a.a)(-100,-100,n.frameCount/100,n.width*n.noise(n.frameCount/1e3),!0),i=a.a.apply(void 0,r.concat([n.frameCount/2,o*n.noise(n.frameCount/100),!0]));n.fill(n.frameCount%2?e[0]:e[1],50,75),t&&(n.beginShape(),n.vertex(-100,-100),n.vertex.apply(n,t),n.vertex.apply(n,i),n.endShape(n.CLOSE)),t=i,--o<0&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(e.c)(r.a,{sketch:i,path:t.pathname,description:""})}},398:function(n,t,o){"use strict";o.d(t,"c",function(){return e}),o.d(t,"d",function(){return r}),o.d(t,"b",function(){return a});var e=function(n,t,o){return n+Math.cos(t)*o},r=function(n,t,o){return n+Math.sin(t)*o},a=function(n,t,o,e,r,a){void 0===a&&(a=!1);var i=n+Math.cos(o)*e,u=t+Math.sin(o)*r;return a?[i,u]:{x:i,y:u}};t.a=function(n,t,o,a,i){void 0===i&&(i=!1);var u=e(n,o,a),c=r(t,o,a);return i?[u,c]:{x:u,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-19-js-7a4d46cc33f176c176fb.js.map