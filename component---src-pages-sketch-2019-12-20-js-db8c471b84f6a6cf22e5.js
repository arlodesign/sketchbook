(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{PC87:function(t,n,e){"use strict";e.r(n);e("q1tI");var i=e("Gmm/"),r=e("ViKx"),o=(e("PZSu"),e("qKvR")),a=function(t){var n,e,i=t.getURLParams().render,o=t.shuffle(["cyan","magenta","yellow"]);t.setup=function(){t.pixelDensity(1),t.frameRate(30),t.createCanvas(660,840),t.background(255),t.createLoop(20,{gif:!!i&&{render:!1,open:!0},noiseRadius:.1}),t.strokeWeight(2),n=t.floor(.03*t.width),e=(t.height-2*n)/150},t.draw=function(){var i=t.animLoop.theta;t.blendMode(t.BLEND),t.background(255),t.blendMode(t.MULTIPLY),o.forEach((function(o,a){t.stroke(o);for(var c=0,u=n;u<t.height-n;u+=e){var h=Object(r.b)(t.width/2,t.height/2,i*(c%5)+a/5,.02*t.height*t.cos(5*i),t.width/2*t.sin(i)),s=h.x,d=h.y,f=Object(r.b)(t.width/2,t.height/2,i*(c%5)+a/5,.02*t.height*-t.cos(5*i),t.width/2*-t.sin(i)),p=f.x,w=f.y;t.bezier(n,u+(a-1),s,t.map(t.sin(i),-1,1,d,u),p,t.map(t.sin(i),-1,1,w,u),t.width-n,u+(a-1)),c++}}))}};n.default=function(t){var n=t.location;return Object(o.c)(i.a,{sketch:a,path:n.pathname,description:""})}},ViKx:function(t,n,e){"use strict";e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return r})),e.d(n,"b",(function(){return o}));var i=function(t,n,e){return t+Math.cos(n)*e},r=function(t,n,e){return t+Math.sin(n)*e},o=function(t,n,e,i,r,o){void 0===o&&(o=!1);var a=t+Math.cos(e)*i,c=n+Math.sin(e)*r;return o?[a,c]:{x:a,y:c}};n.a=function(t,n,e,o,a){void 0===a&&(a=!1);var c=i(t,e,o),u=r(n,e,o);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-12-20-js-db8c471b84f6a6cf22e5.js.map