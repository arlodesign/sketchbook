(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{224:function(t,n,o){"use strict";o.r(n);o(245);var e=o(0),i=o.n(e),r=o(246),u=o(248),c=function(t){var n,o=!1;function e(o,e){var i=n+n/2,r=n+n/2,u=!0;for(t.fill(o);i<t.width-n;){for(;r<t.height-n;){var c=e(i,r);u&&t.rect(i,r,c,c),!u&&t.ellipse(i,r,c/2),r+=n,u=!u}i+=n,r=n+n/2,u=!u}}t.setup=function(){t.createCanvas(660,840),n=60,t.noStroke(),t.rectMode(t.CENTER),t.blendMode(t.SOFT_LIGHT)},t.draw=function(){t.background(127);var i=o?t.mouseX:Object(u.b)(t.width/2,t.frameCount/10,t.width/2),r=o?t.mouseY:Object(u.c)(t.height/2,t.frameCount/10,t.width/2);e(t.color(206,86,50),function(o,e){return t.map(t.dist(o,e,i,r),0,t.dist(0,0,t.width,t.height),1.5*n,n/2)}),e(t.color(36,156,164),function(o,e){return t.map(t.dist(o,e,i,r),0,t.dist(0,0,t.width,t.height),n/1.5,2*n)}),e(t.color(245,230,187),function(o,e){return t.map(t.dist(o,e,i,r),0,t.dist(0,0,t.width,t.height),n/3.5,n)})},t.mouseClicked=function(){o=!o},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};n.default=function(t){var n=t.location;return i.a.createElement(r.a,{sketch:c,path:n.pathname,description:"Click or tap to toggle user control of the sketch."})}},245:function(t,n,o){var e=o(11);e(e.P,"Array",{fill:o(247)}),o(32)("fill")},247:function(t,n,o){"use strict";var e=o(25),i=o(73),r=o(14);t.exports=function(t){for(var n=e(this),o=r(n.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,o),a=u>2?arguments[2]:void 0,s=void 0===a?o:i(a,o);s>c;)n[c++]=t;return n}},248:function(t,n,o){"use strict";o.d(n,"b",function(){return e}),o.d(n,"c",function(){return i});var e=function(t,n,o){return t+Math.cos(n)*o},i=function(t,n,o){return t+Math.sin(n)*o};n.a=function(t,n,o,r,u){void 0===u&&(u=!1);var c=e(t,o,r),a=i(n,o,r);return u?[c,a]:{x:c,y:a}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-09-js-3cf7f01e571b730b7bdf.js.map