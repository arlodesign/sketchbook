(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{346:function(n,t,o){"use strict";o.r(t);var r=o(12),i=(o(0),o(352)),a=o(355),e=function(n){var t=n.random(90),o=0,r=0;n.setup=function(){n.createCanvas(660,840),n.colorMode(n.HSB,100),n.background(t,80,5),n.noFill(),n.blendMode(n.HARD_LIGHT),n.strokeWeight(2)},n.draw=function(){var i=n.noise(n.frameCount/400,o);n.stroke(n.map(n.tan(o),-1,1,t,t+10),80,75,r);for(var e=0;e<5;e++)n.line.apply(n,Object(a.a)(n.width/2,n.height/2,o+e*n.TWO_PI/5,n.height/2*i,!0).concat([n.width/2,n.height/2]));(o+=.01)>3*n.TWO_PI?(r-=.01)<0&&n.noLoop():r=n.min(r+.01,5)}};t.default=function(n){var t=n.location;return Object(r.c)(i.a,{sketch:e,path:t.pathname,description:""})}},355:function(n,t,o){"use strict";o.d(t,"c",function(){return r}),o.d(t,"d",function(){return i}),o.d(t,"b",function(){return a});var r=function(n,t,o){return n+Math.cos(t)*o},i=function(n,t,o){return n+Math.sin(t)*o},a=function(n,t,o,r,i,a){void 0===a&&(a=!1);var e=n+Math.cos(o)*r,c=t+Math.sin(o)*i;return a?[e,c]:{x:e,y:c}};t.a=function(n,t,o,a,e){void 0===e&&(e=!1);var c=r(n,o,a),u=i(t,o,a);return e?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-27-js-ca6da5a2c8aa524a5803.js.map