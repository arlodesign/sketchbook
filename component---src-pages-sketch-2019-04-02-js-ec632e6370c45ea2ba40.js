(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{304:function(n,t,i){"use strict";i.r(t);var o=i(10),r=(i(0),i(420)),e=i(421),a=function(n){var t=.05/n.TWO_PI,i=n.random(2,20),o=n.random(100),r=0,a=0;n.setup=function(){n.createCanvas(660,840),n.background(64),n.noFill(),n.strokeWeight(2),n.colorMode(n.HSB,100),n.blendMode(n.HARD_LIGHT)},n.draw=function(){var c=[n.map(n.sin(r),-1,1,40,n.width-40,!0),n.map(n.sin(a),-1,1,40,n.height-40,!0)],u=Object(e.a)(n.width/2,n.height/2,r,n.height/3-40,!0);n.stroke(o,n.map(n.sin(r),-1,1,0,100,!0),n.map(n.sin(a),-1,1,100,0,!0),10),n.bezier.apply(n,c.concat(u,[n.width-u[0],n.height-u[1],n.width-c[0],n.height-c[1]])),a+=t,(r+=t/i)>n.TWO_PI&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(o.c)(r.a,{sketch:a,path:t.pathname,description:"Refresh page for a different variation"})}},421:function(n,t,i){"use strict";i.d(t,"c",function(){return o}),i.d(t,"d",function(){return r}),i.d(t,"b",function(){return e});var o=function(n,t,i){return n+Math.cos(t)*i},r=function(n,t,i){return n+Math.sin(t)*i},e=function(n,t,i,o,r,e){void 0===e&&(e=!1);var a=n+Math.cos(i)*o,c=t+Math.sin(i)*r;return e?[a,c]:{x:a,y:c}};t.a=function(n,t,i,e,a){void 0===a&&(a=!1);var c=o(n,i,e),u=r(t,i,e);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-02-js-ec632e6370c45ea2ba40.js.map