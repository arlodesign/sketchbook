(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{382:function(n,t,a){"use strict";a.r(t);var e=a(0),r=(a(1),a(255)),o=a(540),i=function(n){var t=!1,a=0;n.setup=function(){n.createCanvas(660,840),n.background(255),n.strokeWeight(2),n.noFill()},n.draw=function(){n.translate(n.width/2,n.map(n.sin(n.frameCount/1e3+n.HALF_PI),-1,1,-n.width/2,n.height-200)),t=n.frameCount%60==0?!t:t,n.stroke(t?0:255),n.beginShape();for(var e=0;e<n.PI;e+=.01){var r=Object(o.a)(0,0,e,n.map(n.noise(e,a),0,1,n.width/2,n.width),!0);n.curveVertex.apply(n,r)}n.endShape(),a+=.001,n.frameCount/1e3>n.PI&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(e.c)(r.a,{sketch:i,path:t.pathname,description:"Be patient. This one starts drawing off-canvas."})}},540:function(n,t,a){"use strict";a.d(t,"c",(function(){return e})),a.d(t,"d",(function(){return r})),a.d(t,"b",(function(){return o}));var e=function(n,t,a){return n+Math.cos(t)*a},r=function(n,t,a){return n+Math.sin(t)*a},o=function(n,t,a,e,r,o){void 0===o&&(o=!1);var i=n+Math.cos(a)*e,u=t+Math.sin(a)*r;return o?[i,u]:{x:i,y:u}};t.a=function(n,t,a,o,i){void 0===i&&(i=!1);var u=e(n,a,o),c=r(t,a,o);return i?[u,c]:{x:u,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-20-js-7594b72d12f3ecd80d09.js.map