(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{339:function(n,t,r){"use strict";r.r(t);r(17),r(11),r(5),r(141),r(75),r(184);var o=r(0),u=(r(1),r(255)),i=r(530),a=function(n){var t,r,o,u=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))}],a=0,c=0,e=10,s={},f=32,b=function(){};n.setup=function(){for(n.createCanvas(660,840),n.background(192),s={x:n.width/2,y:n.height/2};Array.from(new Set([t,r,o])).length<3;)t=n.random(u),r=n.random(u),o=n.random(u);b=function(u){return n.color(t(u),r(u),o(u),f)},n.blendMode(n.DIFFERENCE)},n.draw=function(){for(var t=0;t<n.TWO_PI;t+=n.TWO_PI/2){var r=c+t,o=Object(i.a)(s.x,s.y,r,a),u=o.x,d=o.y;n.noFill(),n.strokeWeight(n.map(a,0,n.width,1,2)),n.stroke(b(r/3)),n.ellipse(u,d,n.noise(c/10,a/10)*e)}c+=.01,a+=.01,f=(e+=.05)>n.width?f-.1:f,s=Object(i.a)(n.width/2,n.height/2,c/2,1*a),0===f&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(o.c)(u.a,{sketch:a,path:t.pathname})}},530:function(n,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return u})),r.d(t,"b",(function(){return i}));var o=function(n,t,r){return n+Math.cos(t)*r},u=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,o,u,i){void 0===i&&(i=!1);var a=n+Math.cos(r)*o,c=t+Math.sin(r)*u;return i?[a,c]:{x:a,y:c}};t.a=function(n,t,r,i,a){void 0===a&&(a=!1);var c=o(n,r,i),e=u(t,r,i);return a?[c,e]:{x:c,y:e}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-19-js-e4bd23bbb4056cfeec65.js.map