(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{239:function(n,t,e){"use strict";e.r(t);var o=e(9),r=(e(0),e(308)),i=e(311),a=function(n){var t=0,e=0,o=100,r={},a=255;n.setup=function(){n.createCanvas(660,840),n.background(0),r={x:n.width/2,y:n.height/2},setTimeout(function(){n.noLoop()},6e4)},n.draw=function(){n.noFill(),n.strokeWeight(n.map(n.noise(e/5,t/5)*o,0,n.width,4,8)),n.stroke(a),n.beginShape();for(var u=0;u<n.TWO_PI;u+=n.TWO_PI/4){var c=e+u,s=Object(i.a)(r.x,r.y,c,n.noise(e/5,t/5)*o),h=s.x,f=s.y;n.vertex(h,f)}n.endShape(n.CLOSE),e+=.01,t+=.1,o+=.5,r=Object(i.a)(n.width/2,n.height/2,e/4,2*t),n.frameCount%100==0&&(a=255===a?0:255)}};t.default=function(n){var t=n.location;return Object(o.c)(r.a,{sketch:a,path:t.pathname})}},311:function(n,t,e){"use strict";e.d(t,"c",function(){return o}),e.d(t,"d",function(){return r}),e.d(t,"b",function(){return i});var o=function(n,t,e){return n+Math.cos(t)*e},r=function(n,t,e){return n+Math.sin(t)*e},i=function(n,t,e,o,r,i){void 0===i&&(i=!1);var a=n+Math.cos(e)*o,u=t+Math.sin(e)*r;return i?[a,u]:{x:a,y:u}};t.a=function(n,t,e,i,a){void 0===a&&(a=!1);var u=o(n,e,i),c=r(t,e,i);return a?[u,c]:{x:u,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-15-js-598b4d2a9be79155be38.js.map