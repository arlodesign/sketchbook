(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{ViKx:function(n,t,e){"use strict";e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return o})),e.d(t,"b",(function(){return r}));var i=function(n,t,e){return n+Math.cos(t)*e},o=function(n,t,e){return n+Math.sin(t)*e},r=function(n,t,e,i,o,r){void 0===r&&(r=!1);var a=n+Math.cos(e)*i,u=t+Math.sin(e)*o;return r?[a,u]:{x:a,y:u}};t.a=function(n,t,e,r,a){void 0===a&&(a=!1);var u=i(n,e,r),c=o(t,e,r);return a?[u,c]:{x:u,y:c}}},yiBA:function(n,t,e){"use strict";e.r(t);e("q1tI");var i=e("Gmm/"),o=e("ViKx"),r=e("qKvR"),a=function(n){var t=0,e=0,i=100,r={},a=255;n.setup=function(){n.createCanvas(660,840),n.background(0),r={x:n.width/2,y:n.height/2},setTimeout((function(){n.noLoop()}),6e4)},n.draw=function(){n.noFill(),n.strokeWeight(n.map(n.noise(e/5,t/5)*i,0,n.width,4,8)),n.stroke(a),n.beginShape();for(var u=0;u<n.TWO_PI;u+=n.TWO_PI/4){var c=e+u,s=Object(o.a)(r.x,r.y,c,n.noise(e/5,t/5)*i),h=s.x,f=s.y;n.vertex(h,f)}n.endShape(n.CLOSE),e+=.01,t+=.1,i+=.5,r=Object(o.a)(n.width/2,n.height/2,e/4,2*t),n.frameCount%100==0&&(a=255===a?0:255)}};t.default=function(n){var t=n.location;return Object(r.c)(i.a,{sketch:a,path:t.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-15-js-2d23edb57bc9091c18f8.js.map