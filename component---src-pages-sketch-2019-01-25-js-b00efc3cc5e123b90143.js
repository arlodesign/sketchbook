(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{254:function(n,t,r){"use strict";r.r(t);var o=r(10),a=(r(0),r(454)),e=r(455),u=function(n){var t,r,o,a=0,u=0,c=0,i=[];n.setup=function(){n.createCanvas(660,840,n.WEBGL),t=n.random(.1,.2)/n.TWO_PI*n.random([-1,1]),r=n.random(.3,.4)/n.TWO_PI*n.random([-1,1]),o=n.random(.5,.6)/n.TWO_PI*n.random([-1,1]),n.noStroke(),n.color(255),setTimeout(function(){},45e3)},n.draw=function(){n.background(255),n.directionalLight(n.min(n.frameCount,255),n.min(n.frameCount,255),n.min(n.frameCount,255),n.cos(n.frameCount/100),n.sin(n.frameCount/200),n.sin(n.frameCount/100)/2),n.camera(400*n.sin(n.frameCount/1e3),400*n.cos(n.frameCount/1e3),400,0,0,0,0,1,0),i.forEach(function(t,r){n.push(),n.specularMaterial(255),n.translate.apply(n,t),n.sphere(n.map(r,0,2e3,0,10)),n.pop()}),i.push([Object(e.c)(0,a,200),Object(e.d)(0,u,200),n.frameCount%2?Object(e.c)(0,c,200):Object(e.d)(0,c,200)]),i.length>2e3&&i.shift(),a+=t,u+=r,c+=o}};t.default=function(n){var t=n.location;return Object(o.c)(a.a,{sketch:u,path:t.pathname})}},455:function(n,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"d",function(){return a}),r.d(t,"b",function(){return e});var o=function(n,t,r){return n+Math.cos(t)*r},a=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,o,a,e){void 0===e&&(e=!1);var u=n+Math.cos(r)*o,c=t+Math.sin(r)*a;return e?[u,c]:{x:u,y:c}};t.a=function(n,t,r,e,u){void 0===u&&(u=!1);var c=o(n,r,e),i=a(t,r,e);return u?[c,i]:{x:c,y:i}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-25-js-b00efc3cc5e123b90143.js.map