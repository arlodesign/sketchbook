(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{240:function(t,e,n){"use strict";n.r(e);n(297),n(248);var r=n(0),o=n.n(r),a=n(250),i=n(251),u=function(t){var e,n=!1;t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),e=t.random(0,45),t.fill(e,100,75),t.noStroke()},t.draw=function(){t.background(100-e,100,50);for(var r=30;r<t.width;r+=60)for(var o=30;o<t.height;o+=60){t.push(),t.translate(r,o);var a=n?t.createVector(t.mouseX,t.mouseY):t.createVector.apply(t,Object(i.a)(t.width/2,t.height/2,t.frameCount/100,t.width*t.noise(t.frameCount/1e3),!0));a.sub(t.createVector(r,o)),a.setMag(.9*t.min(60,t.dist(0,0,a.x,a.y))),t.beginShape(),t.vertex(a.x,a.y);var u=[t.createVector(a.y,-a.x).mult(.333),t.createVector(-a.y,a.x).mult(.333)];t.quadraticVertex(u[0].x,u[0].y,0,0),t.quadraticVertex(u[1].x,u[1].y,a.x,a.y),t.endShape(t.CLOSE),t.pop()}},t.mousePressed=function(){n=!n},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};e.default=function(t){var e=t.location;return o.a.createElement(a.a,{sketch:u,path:e.pathname,description:"Learning vector math. Click or tap on the canvas to control the focal point. Refresh page for a different color variation."})}},248:function(t,e,n){var r=n(11);r(r.P,"Array",{fill:n(249)}),n(32)("fill")},249:function(t,e,n){"use strict";var r=n(25),o=n(73),a=n(14);t.exports=function(t){for(var e=r(this),n=a(e.length),i=arguments.length,u=o(i>1?arguments[1]:void 0,n),c=i>2?arguments[2]:void 0,s=void 0===c?n:o(c,n);s>u;)e[u++]=t;return e}},251:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o});var r=function(t,e,n){return t+Math.cos(e)*n},o=function(t,e,n){return t+Math.sin(e)*n};e.a=function(t,e,n,a,i){void 0===i&&(i=!1);var u=r(t,n,a),c=o(e,n,a);return i?[u,c]:{x:u,y:c}}},297:function(t,e,n){"use strict";n(280)("sub",function(t){return function(){return t(this,"sub","","")}})}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-17-js-0c040dc687feb54244df.js.map