(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{ViKx:function(n,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return e}));var a=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,a,o,e){void 0===e&&(e=!1);var i=n+Math.cos(r)*a,c=t+Math.sin(r)*o;return e?[i,c]:{x:i,y:c}};t.a=function(n,t,r,e,i){void 0===i&&(i=!1);var c=a(n,r,e),u=o(t,r,e);return i?[c,u]:{x:c,y:u}}},uhXl:function(n,t,r){"use strict";r.r(t);r("q1tI");var a=r("Gmm/"),o=r("ViKx"),e=r("qKvR"),i=function(n){var t,r,a,e,i,c=0,u=0,d=0,f=[];n.setup=function(){n.createCanvas(660,840),n.background(255),t=n.floor(n.random(2,7)),r=n.random(.02,.05)/n.TWO_PI,a=n.random(1,2)/n.TWO_PI,e=n.random(.1)/n.TWO_PI,n.random(2e3,5e3)/n.TWO_PI,i=n.floor(n.random(4,7))},n.draw=function(){var s,h;n.translate(n.width/2,n.height/2),n.rotate(d);for(var v=0;v<t;v++){var O=Object(o.c)(0,c,n.width/i),b=Object(o.d)(0,c*i,n.height/i);s=Object(o.c)(O,u*i+n.TWO_PI/t*v,i),h=Object(o.d)(b,u+n.TWO_PI/t*v,i),f.length===t&&(n.stroke(n.frameCount%t?0:"rgba(255,255,255,0.8)"),n.line(s,h,f[v].x,f[v].y)),f[v]={x:s,y:h}}c+=r,u+=a,d+=e}};t.default=function(n){var t=n.location;return Object(e.c)(a.a,{sketch:i,path:t.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-23-js-fbbe1db92c257cba349a.js.map