(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{264:function(n,t,r){"use strict";r.r(t);r(384),r(26),r(20),r(8),r(91),r(48),r(385);var o=r(7),a=(r(0),r(382)),e=r(383),i=function(n){var t,r,o,a,i,u,c=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))}],s=0,f=0,d=0,b=function(){};n.setup=function(){for(n.pixelDensity(4),n.createCanvas(660,840),n.background(0),t=n.random(.05,.1)/n.TWO_PI*n.random([-1,1]),r=n.random(.15,.25)/n.TWO_PI*n.random([-1,1]),o=n.random(.01,.015)/n.TWO_PI;Array.from(new Set([a,i,u])).length<3;)a=n.random(c),i=n.random(c),u=n.random(c);b=function(t){return n.color(a(t),i(t),u(t),8)},n.noStroke(),n.blendMode(n.HARD_LIGHT)},n.draw=function(){n.translate(n.width/2,n.height*n.sin(d));var a=Object(e.a)(0,0,s,200),i=a.x,u=a.y,c=Object(e.a)(i,u,f,500*n.sin(d));n.height*n.sin(d)<0&&u<0&&c.y<0?n.noLoop():(n.fill(b(2*d)),n.beginShape(),n.vertex(0,0),n.quadraticVertex(c.x,c.y,i,u),n.endShape(n.CLOSE),s+=t,f+=r,d+=o)}};t.default=function(n){var t=n.location;return Object(o.c)(a.a,{sketch:i,path:t.pathname,description:"Reload page for a different variation."})}},383:function(n,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"d",function(){return a}),r.d(t,"b",function(){return e});var o=function(n,t,r){return n+Math.cos(t)*r},a=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,o,a,e){void 0===e&&(e=!1);var i=n+Math.cos(r)*o,u=t+Math.sin(r)*a;return e?[i,u]:{x:i,y:u}};t.a=function(n,t,r,e,i){void 0===i&&(i=!1);var u=o(n,r,e),c=a(t,r,e);return i?[u,c]:{x:u,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-21-js-e4b2c11cb352f0afb0c1.js.map