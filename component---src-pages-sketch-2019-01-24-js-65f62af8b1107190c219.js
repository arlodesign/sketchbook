(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{253:function(n,t,r){"use strict";r.r(t);r(427);var a=r(10),o=(r(0),r(425)),e=r(426),i=function(n){var t,r,a,o,i,c=0,u=0,d=0;n.setup=function(){n.createCanvas(660,840),n.background(0),t=n.random(.02,.05)/n.TWO_PI,r=n.random(4,6)/n.TWO_PI,a=n.random(.1)/n.TWO_PI,n.random(2e3,5e3)/n.TWO_PI,o=n.floor(n.random(10,20))},n.draw=function(){n.translate(n.width/2,n.height/2),n.rotate(d);var f=Object(e.c)(0,c,n.width/3),s=Object(e.d)(0,c*o,n.height/3),h=Object(e.c)(f,u*o,o),b=Object(e.d)(s,u,o);i&&(n.noStroke(),n.fill(n.frameCount%2?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)"),n.triangle(0,0,h,b,i.x,i.y),n.stroke(255),n.line(h,b,i.x,i.y)),i={x:h,y:b},c+=t,u+=r,d+=a}};t.default=function(n){var t=n.location;return Object(a.c)(o.a,{sketch:i,path:t.pathname,description:"Reload page for a different variation."})}},426:function(n,t,r){"use strict";r.d(t,"c",function(){return a}),r.d(t,"d",function(){return o}),r.d(t,"b",function(){return e});var a=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,a,o,e){void 0===e&&(e=!1);var i=n+Math.cos(r)*a,c=t+Math.sin(r)*o;return e?[i,c]:{x:i,y:c}};t.a=function(n,t,r,e,i){void 0===i&&(i=!1);var c=a(n,r,e),u=o(t,r,e);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-24-js-65f62af8b1107190c219.js.map