(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{203:function(n,t,r){"use strict";r.r(t);var a=r(9),o=(r(0),r(272)),e=r(274),c=function(n){var t,r,a,o,c,i=0,u=0,d=0,f=[];n.setup=function(){n.createCanvas(660,840),n.background(255),t=n.floor(n.random(2,7)),r=n.random(.02,.05)/n.TWO_PI,a=n.random(1,2)/n.TWO_PI,o=n.random(.1)/n.TWO_PI,n.random(2e3,5e3)/n.TWO_PI,c=n.floor(n.random(4,7))},n.draw=function(){var s,h;n.translate(n.width/2,n.height/2),n.rotate(d);for(var v=0;v<t;v++){var O=Object(e.c)(0,i,n.width/c),b=Object(e.d)(0,i*c,n.height/c);s=Object(e.c)(O,u*c+n.TWO_PI/t*v,c),h=Object(e.d)(b,u+n.TWO_PI/t*v,c),f.length===t&&(n.stroke(n.frameCount%t?0:"rgba(255,255,255,0.8)"),n.line(s,h,f[v].x,f[v].y)),f[v]={x:s,y:h}}i+=r,u+=a,d+=o}};t.default=function(n){var t=n.location;return Object(a.c)(o.a,{sketch:c,path:t.pathname,description:"Reload page for a different variation."})}},274:function(n,t,r){"use strict";r.d(t,"c",function(){return a}),r.d(t,"d",function(){return o}),r.d(t,"b",function(){return e});var a=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,a,o,e){void 0===e&&(e=!1);var c=n+Math.cos(r)*a,i=t+Math.sin(r)*o;return e?[c,i]:{x:c,y:i}};t.a=function(n,t,r,e,c){void 0===c&&(c=!1);var i=a(n,r,e),u=o(t,r,e);return c?[i,u]:{x:i,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-23-js-bbd7f0b0fa3fe9c75752.js.map