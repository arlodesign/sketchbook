(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{220:function(t,n,o){"use strict";o.r(n);o(293);var i=o(9),r=(o(0),o(292)),e=o(295),u=function(t){var n,o=!1;function i(o,i){var r=n+n/2,e=n+n/2,u=!0;for(t.fill(o);r<t.width-n;){for(;e<t.height-n;){var c=i(r,e);u&&t.rect(r,e,c,c),!u&&t.ellipse(r,e,c/2),e+=n,u=!u}r+=n,e=n+n/2,u=!u}}t.setup=function(){t.createCanvas(660,840),n=60,t.noStroke(),t.rectMode(t.CENTER),t.blendMode(t.SOFT_LIGHT)},t.draw=function(){t.background(127);var r=o?t.mouseX:Object(e.c)(t.width/2,t.frameCount/10,t.width/2),u=o?t.mouseY:Object(e.d)(t.height/2,t.frameCount/10,t.width/2);i(t.color(206,86,50),function(o,i){return t.map(t.dist(o,i,r,u),0,t.dist(0,0,t.width,t.height),1.5*n,n/2)}),i(t.color(36,156,164),function(o,i){return t.map(t.dist(o,i,r,u),0,t.dist(0,0,t.width,t.height),n/1.5,2*n)}),i(t.color(245,230,187),function(o,i){return t.map(t.dist(o,i,r,u),0,t.dist(0,0,t.width,t.height),n/3.5,n)})},t.mouseClicked=function(){o=!o},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};n.default=function(t){var n=t.location;return Object(i.c)(r.a,{sketch:u,path:n.pathname,description:"Click or tap to toggle user control of the sketch."})}},293:function(t,n,o){var i=o(12);i(i.P,"Array",{fill:o(294)}),o(35)("fill")},294:function(t,n,o){"use strict";var i=o(28),r=o(78),e=o(16);t.exports=function(t){for(var n=i(this),o=e(n.length),u=arguments.length,c=r(u>1?arguments[1]:void 0,o),a=u>2?arguments[2]:void 0,d=void 0===a?o:r(a,o);d>c;)n[c++]=t;return n}},295:function(t,n,o){"use strict";o.d(n,"c",function(){return i}),o.d(n,"d",function(){return r}),o.d(n,"b",function(){return e});var i=function(t,n,o){return t+Math.cos(n)*o},r=function(t,n,o){return t+Math.sin(n)*o},e=function(t,n,o,i,r,e){void 0===e&&(e=!1);var u=t+Math.cos(o)*i,c=n+Math.sin(o)*r;return e?[u,c]:{x:u,y:c}};n.a=function(t,n,o,e,u){void 0===u&&(u=!1);var c=i(t,o,e),a=r(n,o,e);return u?[c,a]:{x:c,y:a}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-09-js-6e9dc69562bf98ce3bcb.js.map