(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{374:function(n,t,r){"use strict";r.r(t);r(138),r(73),r(449);var a=r(10),o=(r(0),r(443)),e=r(444),u=function(n){var t=[],r=[];n.setup=function(){n.createCanvas(660,840,n.WEBGL),(t=Array.from(Array(10),function(){return{a:n.random(n.TWO_PI),d:n.random()}})).sort(function(n,t){return n.a-t.a}),r=[t],n.noFill()},n.draw=function(){n.background(0),n.camera(200*n.sin(n.frameCount/200),200*n.cos(n.frameCount/200),500*n.map(n.cos(n.frameCount/1e3),-1,1,0,1),0,0,0,0,1,0);for(var a=function(t){var a=r[t];n.stroke(255,n.map(t,0,r.length,255,0)),n.rotateX(n.map(t,0,r.length,0,n.HALF_PI)),n.beginShape(),a.forEach(function(r){return n.vertex.apply(n,Object(e.a)(0,0,r.a,r.d+10*t,!0))}),n.endShape(n.CLOSE)},o=r.length-1;o>=0;o--)a(o);r.unshift(t.map(function(t){var r=t.a,a=t.d;return{a:n.constrain(r*n.map(n.noise(r,n.frameCount/500),0,1,.1,1.9),0,n.TWO_PI),d:a*n.noise(a,n.frameCount/500)*10}})),r.length>n.height/20&&r.pop()}};t.default=function(n){var t=n.location;return Object(a.c)(o.a,{sketch:u,path:t.pathname,description:""})}},444:function(n,t,r){"use strict";r.d(t,"c",function(){return a}),r.d(t,"d",function(){return o}),r.d(t,"b",function(){return e});var a=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,a,o,e){void 0===e&&(e=!1);var u=n+Math.cos(r)*a,c=t+Math.sin(r)*o;return e?[u,c]:{x:u,y:c}};t.a=function(n,t,r,e,u){void 0===u&&(u=!1);var c=a(n,r,e),i=o(t,r,e);return u?[c,i]:{x:c,y:i}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-20-js-29cff3987a518008fdda.js.map