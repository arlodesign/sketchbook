(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{205:function(n,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),e=r(267),c=r(268),i=function(n){var t,r,a,o,e,i=0,u=0,d=0,f=[];n.setup=function(){n.createCanvas(660,840),n.background(255),t=n.floor(n.random(2,7)),r=n.random(.02,.05)/n.TWO_PI,a=n.random(1,2)/n.TWO_PI,o=n.random(.1)/n.TWO_PI,n.random(2e3,5e3)/n.TWO_PI,e=n.floor(n.random(4,7))},n.draw=function(){var s,h;n.translate(n.width/2,n.height/2),n.rotate(d);for(var v=0;v<t;v++){var p=Object(c.c)(0,i,n.width/e),O=Object(c.d)(0,i*e,n.height/e);s=Object(c.c)(p,u*e+n.TWO_PI/t*v,e),h=Object(c.d)(O,u+n.TWO_PI/t*v,e),f.length===t&&(n.stroke(n.frameCount%t?0:"rgba(255,255,255,0.8)"),n.line(s,h,f[v].x,f[v].y)),f[v]={x:s,y:h}}i+=r,u+=a,d+=o}};t.default=function(n){var t=n.location;return o.a.createElement(e.a,{sketch:i,path:t.pathname,description:"Reload page for a different variation."})}},268:function(n,t,r){"use strict";r.d(t,"c",function(){return a}),r.d(t,"d",function(){return o}),r.d(t,"b",function(){return e});var a=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,a,o,e){void 0===e&&(e=!1);var c=n+Math.cos(r)*a,i=t+Math.sin(r)*o;return e?[c,i]:{x:c,y:i}};t.a=function(n,t,r,e,c){void 0===c&&(c=!1);var i=a(n,r,e),u=o(t,r,e);return c?[i,u]:{x:i,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-23-js-4a83ce655d927153eaa8.js.map