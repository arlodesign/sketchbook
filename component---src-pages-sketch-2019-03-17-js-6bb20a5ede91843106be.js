(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{241:function(t,n,r){"use strict";r.r(n);r(344),r(309);var e=r(9),o=(r(0),r(308)),i=r(311),a=function(t){var n,r=!1;t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),n=t.random(0,45),t.fill(n,100,75),t.noStroke()},t.draw=function(){t.background(100-n,100,50);for(var e=30;e<t.width;e+=60)for(var o=30;o<t.height;o+=60){t.push(),t.translate(e,o);var a=r?t.createVector(t.mouseX,t.mouseY):t.createVector.apply(t,Object(i.a)(t.width/2,t.height/2,t.frameCount/100,t.width*t.noise(t.frameCount/1e3),!0));a.sub(t.createVector(e,o)),a.setMag(.9*t.min(60,t.dist(0,0,a.x,a.y))),t.beginShape(),t.vertex(a.x,a.y);var u=[t.createVector(a.y,-a.x).mult(.333),t.createVector(-a.y,a.x).mult(.333)];t.quadraticVertex(u[0].x,u[0].y,0,0),t.quadraticVertex(u[1].x,u[1].y,a.x,a.y),t.endShape(t.CLOSE),t.pop()}},t.mousePressed=function(){r=!r},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};n.default=function(t){var n=t.location;return Object(e.c)(o.a,{sketch:a,path:n.pathname,description:"Learning vector math. Click or tap on the canvas to control the focal point. Refresh page for a different color variation."})}},309:function(t,n,r){var e=r(12);e(e.P,"Array",{fill:r(310)}),r(36)("fill")},310:function(t,n,r){"use strict";var e=r(28),o=r(79),i=r(16);t.exports=function(t){for(var n=e(this),r=i(n.length),a=arguments.length,u=o(a>1?arguments[1]:void 0,r),c=a>2?arguments[2]:void 0,s=void 0===c?r:o(c,r);s>u;)n[u++]=t;return n}},311:function(t,n,r){"use strict";r.d(n,"c",function(){return e}),r.d(n,"d",function(){return o}),r.d(n,"b",function(){return i});var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,o,i){void 0===i&&(i=!1);var a=t+Math.cos(r)*e,u=n+Math.sin(r)*o;return i?[a,u]:{x:a,y:u}};n.a=function(t,n,r,i,a){void 0===a&&(a=!1);var u=e(t,r,i),c=o(n,r,i);return a?[u,c]:{x:u,y:c}}},344:function(t,n,r){"use strict";r(345)("sub",function(t){return function(){return t(this,"sub","","")}})},345:function(t,n,r){var e=r(12),o=r(22),i=r(24),a=/"/g,u=function(t,n,r,e){var o=String(i(t)),u="<"+n;return""!==r&&(u+=" "+r+'="'+String(e).replace(a,"&quot;")+'"'),u+">"+o+"</"+n+">"};t.exports=function(t,n){var r={};r[t]=n(u),e(e.P+e.F*o(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-17-js-6bb20a5ede91843106be.js.map