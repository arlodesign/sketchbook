(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{UeBt:function(t,n,o){"use strict";o.r(n);o("n0hJ"),o("q1tI");var i=o("Gmm/"),e=o("ViKx"),r=o("qKvR"),u=function(t){var n,o=!1;function i(o,i){var e=n+n/2,r=n+n/2,u=!0;for(t.fill(o);e<t.width-n;){for(;r<t.height-n;){var c=i(e,r);u&&t.rect(e,r,c,c),!u&&t.ellipse(e,r,c/2),r+=n,u=!u}e+=n,r=n+n/2,u=!u}}t.setup=function(){t.createCanvas(660,840),n=60,t.noStroke(),t.rectMode(t.CENTER),t.blendMode(t.SOFT_LIGHT)},t.draw=function(){t.background(127);var r=o?t.mouseX:Object(e.c)(t.width/2,t.frameCount/10,t.width/2),u=o?t.mouseY:Object(e.d)(t.height/2,t.frameCount/10,t.width/2);i(t.color(206,86,50),(function(o,i){return t.map(t.dist(o,i,r,u),0,t.dist(0,0,t.width,t.height),1.5*n,n/2)})),i(t.color(36,156,164),(function(o,i){return t.map(t.dist(o,i,r,u),0,t.dist(0,0,t.width,t.height),n/1.5,2*n)})),i(t.color(245,230,187),(function(o,i){return t.map(t.dist(o,i,r,u),0,t.dist(0,0,t.width,t.height),n/3.5,n)}))},t.mouseClicked=function(){o=!o},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};n.default=function(t){var n=t.location;return Object(r.c)(i.a,{sketch:u,path:n.pathname,description:"Click or tap to toggle user control of the sketch."})}},ViKx:function(t,n,o){"use strict";o.d(n,"c",(function(){return i})),o.d(n,"d",(function(){return e})),o.d(n,"b",(function(){return r}));var i=function(t,n,o){return t+Math.cos(n)*o},e=function(t,n,o){return t+Math.sin(n)*o},r=function(t,n,o,i,e,r){void 0===r&&(r=!1);var u=t+Math.cos(o)*i,c=n+Math.sin(o)*e;return r?[u,c]:{x:u,y:c}};n.a=function(t,n,o,r,u){void 0===u&&(u=!1);var c=i(t,o,r),a=e(n,o,r);return u?[c,a]:{x:c,y:a}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-09-js-e8b1b5dddd35f7fb180f.js.map