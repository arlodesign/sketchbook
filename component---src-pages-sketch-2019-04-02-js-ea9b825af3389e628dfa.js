(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{256:function(n,t,i){"use strict";i.r(t);var e=i(0),r=i.n(e),a=i(268),o=i(269),c=function(n){var t=.05/n.TWO_PI,i=n.random(2,20),e=n.random(100),r=0,a=0;n.setup=function(){n.createCanvas(660,840),n.background(64),n.noFill(),n.strokeWeight(2),n.colorMode(n.HSB,100),n.blendMode(n.HARD_LIGHT)},n.draw=function(){var c=[n.map(n.sin(r),-1,1,40,n.width-40,!0),n.map(n.sin(a),-1,1,40,n.height-40,!0)],u=Object(o.a)(n.width/2,n.height/2,r,n.height/3-40,!0);n.stroke(e,n.map(n.sin(r),-1,1,0,100,!0),n.map(n.sin(a),-1,1,100,0,!0),10),n.bezier.apply(n,c.concat(u,[n.width-u[0],n.height-u[1],n.width-c[0],n.height-c[1]])),a+=t,(r+=t/i)>n.TWO_PI&&n.noLoop()}};t.default=function(n){var t=n.location;return r.a.createElement(a.a,{sketch:c,path:t.pathname,description:"Refresh page for a different variation"})}},269:function(n,t,i){"use strict";i.d(t,"c",function(){return e}),i.d(t,"d",function(){return r}),i.d(t,"b",function(){return a});var e=function(n,t,i){return n+Math.cos(t)*i},r=function(n,t,i){return n+Math.sin(t)*i},a=function(n,t,i,e,r,a){void 0===a&&(a=!1);var o=n+Math.cos(i)*e,c=t+Math.sin(i)*r;return a?[o,c]:{x:o,y:c}};t.a=function(n,t,i,a,o){void 0===o&&(o=!1);var c=e(n,i,a),u=r(t,i,a);return o?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-02-js-ea9b825af3389e628dfa.js.map