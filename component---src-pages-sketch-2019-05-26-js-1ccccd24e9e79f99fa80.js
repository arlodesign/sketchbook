(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{334:function(n,t,r){"use strict";r.r(t);r(387);var a=r(7),i=(r(0),r(385)),c=r(386),o=function(n){n.setup=function(){n.createCanvas(660,840),n.noStroke(),n.fill(0)},n.draw=function(){n.background(255);for(var t=1;t<=75;t++)for(var r=n.map(t,1,75,n.frameCount/50,n.frameCount/500),a=n.map(t,1,75,10,0),i=n.map(n.sin(n.frameCount/125),-1,1,3,2),o=0+r;o<n.TWO_PI+r;o+=n.TWO_PI/t){var e=Object(c.a)(n.width/i,n.height/i,o,n.map(t,1,75,0,.666*n.height)),u=e.x,f=e.y;n.circle(u,f,a),n.circle(n.width-u,n.height-f,a)}}};t.default=function(n){var t=n.location;return Object(a.c)(i.a,{sketch:o,path:t.pathname,description:""})}},386:function(n,t,r){"use strict";r.d(t,"c",function(){return a}),r.d(t,"d",function(){return i}),r.d(t,"b",function(){return c});var a=function(n,t,r){return n+Math.cos(t)*r},i=function(n,t,r){return n+Math.sin(t)*r},c=function(n,t,r,a,i,c){void 0===c&&(c=!1);var o=n+Math.cos(r)*a,e=t+Math.sin(r)*i;return c?[o,e]:{x:o,y:e}};t.a=function(n,t,r,c,o){void 0===o&&(o=!1);var e=a(n,r,c),u=i(t,r,c);return o?[e,u]:{x:e,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-26-js-1ccccd24e9e79f99fa80.js.map