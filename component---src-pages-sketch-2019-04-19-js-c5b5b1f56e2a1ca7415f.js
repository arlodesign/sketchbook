(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{321:function(n,t,r){"use strict";r.r(t);var a=r(10),e=(r(0),r(443)),o=r(444),c=function(n){var t=0;n.setup=function(){n.createCanvas(660,840),n.background(0),n.stroke(255,10),n.noFill()},n.draw=function(){n.translate(n.width/2,n.map(n.cos(n.frameCount/1e3),-1,1,0,n.height)),n.beginShape();for(var r=0;r<n.TWO_PI;r+=.01){var a=Object(o.a)(0,0,r+t,n.map(n.noise(r,t),0,1,0,n.width),!0);n.curveVertex.apply(n,a)}n.endShape(),t+=.001,n.frameCount/1e3>n.PI&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(a.c)(e.a,{sketch:c,path:t.pathname,description:""})}},444:function(n,t,r){"use strict";r.d(t,"c",function(){return a}),r.d(t,"d",function(){return e}),r.d(t,"b",function(){return o});var a=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},o=function(n,t,r,a,e,o){void 0===o&&(o=!1);var c=n+Math.cos(r)*a,i=t+Math.sin(r)*e;return o?[c,i]:{x:c,y:i}};t.a=function(n,t,r,o,c){void 0===c&&(c=!1);var i=a(n,r,o),u=e(t,r,o);return c?[i,u]:{x:i,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-19-js-c5b5b1f56e2a1ca7415f.js.map