(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{207:function(n,t,r){"use strict";r.r(t);var a=r(0),e=r.n(a),o=r(261),u=r(262),c=function(n){var t,r,a,e=0,o=0,c=0,i=[];n.setup=function(){n.createCanvas(660,840,n.WEBGL),t=n.random(.1,.2)/n.TWO_PI*n.random([-1,1]),r=n.random(.3,.4)/n.TWO_PI*n.random([-1,1]),a=n.random(.5,.6)/n.TWO_PI*n.random([-1,1]),n.noStroke(),n.color(255),setTimeout(function(){},45e3)},n.draw=function(){n.background(255),n.directionalLight(n.min(n.frameCount,255),n.min(n.frameCount,255),n.min(n.frameCount,255),n.cos(n.frameCount/100),n.sin(n.frameCount/200),n.sin(n.frameCount/100)/2),n.camera(400*n.sin(n.frameCount/1e3),400*n.cos(n.frameCount/1e3),400,0,0,0,0,1,0),i.forEach(function(t,r){n.push(),n.specularMaterial(255),n.translate.apply(n,t),n.sphere(n.map(r,0,2e3,0,10)),n.pop()}),i.push([Object(u.c)(0,e,200),Object(u.d)(0,o,200),n.frameCount%2?Object(u.c)(0,c,200):Object(u.d)(0,c,200)]),i.length>2e3&&i.shift(),e+=t,o+=r,c+=a}};t.default=function(n){var t=n.location;return e.a.createElement(o.a,{sketch:c,path:t.pathname})}},262:function(n,t,r){"use strict";r.d(t,"c",function(){return a}),r.d(t,"d",function(){return e}),r.d(t,"b",function(){return o});var a=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},o=function(n,t,r,a,e,o){void 0===o&&(o=!1);var u=n+Math.cos(r)*a,c=t+Math.sin(r)*e;return o?[u,c]:{x:u,y:c}};t.a=function(n,t,r,o,u){void 0===u&&(u=!1);var c=a(n,r,o),i=e(t,r,o);return u?[c,i]:{x:c,y:i}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-25-js-980ee7c032ce3ddabae8.js.map