(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{280:function(n,t,r){"use strict";r.r(t);r(30),r(29),r(12),r(101),r(73),r(438);var o=r(10),e=(r(0),r(433)),u=r(434),i=function(n){var t,r,o,e=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))}],i=0,a=0,c=10,s={},f=32,b=function(){};n.setup=function(){for(n.pixelDensity(4),n.createCanvas(660,840),n.background(0),s={x:n.width/2,y:n.height/2};Array.from(new Set([t,r,o])).length<3;)t=n.random(e),r=n.random(e),o=n.random(e);b=function(e){return n.color(t(e),r(e),o(e),f)},n.blendMode(n.HARD_LIGHT)},n.draw=function(){n.noFill(),n.strokeWeight(n.map(n.noise(a/5,i/5)*c,0,n.width,1,3)),n.stroke(b(a/4.5)),n.beginShape();for(var t=0;t<n.TWO_PI;t+=n.TWO_PI/3){var r=a+t,o=Object(u.a)(s.x,s.y,r,n.noise(a/5,i/5)*c),e=o.x,d=o.y;n.vertex(e,d)}n.endShape(n.CLOSE),a+=.01,i+=.01,f=(c+=.05)>n.width?f-.1:f,s=Object(u.a)(n.width/2,n.height/2,a/3,1.5*i),0===f&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(o.c)(e.a,{sketch:i,path:t.pathname})}},434:function(n,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"d",function(){return e}),r.d(t,"b",function(){return u});var o=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},u=function(n,t,r,o,e,u){void 0===u&&(u=!1);var i=n+Math.cos(r)*o,a=t+Math.sin(r)*e;return u?[i,a]:{x:i,y:a}};t.a=function(n,t,r,u,i){void 0===i&&(i=!1);var a=o(n,r,u),c=e(t,r,u);return i?[a,c]:{x:a,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-20-js-0148fef7155e02733b8b.js.map