(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{362:function(n,t,o){"use strict";o.r(t);var r=o(7),a=(o(0),o(394)),c=o(395),e=function(n){var t=n.random(90),o=0,r=0;n.setup=function(){n.createCanvas(660,840),n.colorMode(n.HSB,100),n.background(t,80,5),n.noFill(),n.blendMode(n.SCREEN)},n.draw=function(){var a=n.noise(n.frameCount/400,o);n.stroke(n.map(n.tan(o),-1,1,t,t+10),80,75,r);for(var e=0;e<4;e++)n.push(),n.translate.apply(n,Object(c.a)(n.width/2,n.height/2,o+e*n.TWO_PI/4,n.height/2*a,!0)),n.circle(0,0,n.map(a,0,1,200,0)),n.pop();(o+=.005)>3*n.TWO_PI?(r-=.01)<0&&n.noLoop():r=n.min(r+.01,5)}};t.default=function(n){var t=n.location;return Object(r.c)(a.a,{sketch:e,path:t.pathname,description:""})}},395:function(n,t,o){"use strict";o.d(t,"c",function(){return r}),o.d(t,"d",function(){return a}),o.d(t,"b",function(){return c});var r=function(n,t,o){return n+Math.cos(t)*o},a=function(n,t,o){return n+Math.sin(t)*o},c=function(n,t,o,r,a,c){void 0===c&&(c=!1);var e=n+Math.cos(o)*r,i=t+Math.sin(o)*a;return c?[e,i]:{x:e,y:i}};t.a=function(n,t,o,c,e){void 0===e&&(e=!1);var i=r(n,o,c),u=a(t,o,c);return e?[i,u]:{x:i,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-26-js-061927a29f399e440eab.js.map