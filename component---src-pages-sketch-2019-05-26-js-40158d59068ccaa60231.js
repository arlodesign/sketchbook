(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{317:function(n,t,r){"use strict";r.r(t);r(339);var i=r(12),o=(r(0),r(338)),a=r(341),c=function(n){n.setup=function(){n.createCanvas(660,840),n.noStroke(),n.fill(0)},n.draw=function(){n.background(255);for(var t=1;t<=75;t++)for(var r=n.map(t,1,75,n.frameCount/50,n.frameCount/500),i=n.map(t,1,75,10,0),o=n.map(n.sin(n.frameCount/125),-1,1,3,2),c=0+r;c<n.TWO_PI+r;c+=n.TWO_PI/t){var e=Object(a.a)(n.width/o,n.height/o,c,n.map(t,1,75,0,.666*n.height)),u=e.x,f=e.y;n.circle(u,f,i),n.circle(n.width-u,n.height-f,i)}}};t.default=function(n){var t=n.location;return Object(i.c)(o.a,{sketch:c,path:t.pathname,description:""})}},339:function(n,t,r){var i=r(9);i(i.P,"Array",{fill:r(340)}),r(67)("fill")},340:function(n,t,r){"use strict";var i=r(34),o=r(100),a=r(18);n.exports=function(n){for(var t=i(this),r=a(t.length),c=arguments.length,e=o(c>1?arguments[1]:void 0,r),u=c>2?arguments[2]:void 0,f=void 0===u?r:o(u,r);f>e;)t[e++]=n;return t}},341:function(n,t,r){"use strict";r.d(t,"c",function(){return i}),r.d(t,"d",function(){return o}),r.d(t,"b",function(){return a});var i=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},a=function(n,t,r,i,o,a){void 0===a&&(a=!1);var c=n+Math.cos(r)*i,e=t+Math.sin(r)*o;return a?[c,e]:{x:c,y:e}};t.a=function(n,t,r,a,c){void 0===c&&(c=!1);var e=i(n,r,a),u=o(t,r,a);return c?[e,u]:{x:e,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-26-js-40158d59068ccaa60231.js.map