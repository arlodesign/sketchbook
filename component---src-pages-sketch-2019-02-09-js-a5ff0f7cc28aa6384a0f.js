(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{325:function(t,n,o){"use strict";o.r(n);o(179);var e=o(0),i=(o(1),o(251)),r=o(514),u=function(t){var n,o=!1;function e(o,e){var i=n+n/2,r=n+n/2,u=!0;for(t.fill(o);i<t.width-n;){for(;r<t.height-n;){var c=e(i,r);u&&t.rect(i,r,c,c),!u&&t.ellipse(i,r,c/2),r+=n,u=!u}i+=n,r=n+n/2,u=!u}}t.setup=function(){t.createCanvas(660,840),n=60,t.noStroke(),t.rectMode(t.CENTER),t.blendMode(t.SOFT_LIGHT)},t.draw=function(){t.background(127);var i=o?t.mouseX:Object(r.c)(t.width/2,t.frameCount/10,t.width/2),u=o?t.mouseY:Object(r.d)(t.height/2,t.frameCount/10,t.width/2);e(t.color(206,86,50),(function(o,e){return t.map(t.dist(o,e,i,u),0,t.dist(0,0,t.width,t.height),1.5*n,n/2)})),e(t.color(36,156,164),(function(o,e){return t.map(t.dist(o,e,i,u),0,t.dist(0,0,t.width,t.height),n/1.5,2*n)})),e(t.color(245,230,187),(function(o,e){return t.map(t.dist(o,e,i,u),0,t.dist(0,0,t.width,t.height),n/3.5,n)}))},t.mouseClicked=function(){o=!o},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};n.default=function(t){var n=t.location;return Object(e.c)(i.a,{sketch:u,path:n.pathname,description:"Click or tap to toggle user control of the sketch."})}},514:function(t,n,o){"use strict";o.d(n,"c",(function(){return e})),o.d(n,"d",(function(){return i})),o.d(n,"b",(function(){return r}));var e=function(t,n,o){return t+Math.cos(n)*o},i=function(t,n,o){return t+Math.sin(n)*o},r=function(t,n,o,e,i,r){void 0===r&&(r=!1);var u=t+Math.cos(o)*e,c=n+Math.sin(o)*i;return r?[u,c]:{x:u,y:c}};n.a=function(t,n,o,r,u){void 0===u&&(u=!1);var c=e(t,o,r),a=i(n,o,r);return u?[c,a]:{x:c,y:a}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-09-js-a5ff0f7cc28aa6384a0f.js.map