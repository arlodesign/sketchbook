(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{205:function(n,t,r){"use strict";r.r(t);var a=r(0),e=r.n(a),o=r(254),c=r(255),i=function(n){var t,r,a,e,o,i=0,u=0,d=0,f=[];n.setup=function(){n.createCanvas(660,840),n.background(255),t=n.floor(n.random(2,7)),r=n.random(.02,.05)/n.TWO_PI,a=n.random(1,2)/n.TWO_PI,e=n.random(.1)/n.TWO_PI,n.random(2e3,5e3)/n.TWO_PI,o=n.floor(n.random(4,7))},n.draw=function(){var s,h;n.translate(n.width/2,n.height/2),n.rotate(d);for(var b=0;b<t;b++){var v=Object(c.b)(0,i,n.width/o),p=Object(c.c)(0,i*o,n.height/o);s=Object(c.b)(v,u*o+n.TWO_PI/t*b,o),h=Object(c.c)(p,u+n.TWO_PI/t*b,o),f.length===t&&(n.stroke(n.frameCount%t?0:"rgba(255,255,255,0.8)"),n.line(s,h,f[b].x,f[b].y)),f[b]={x:s,y:h}}i+=r,u+=a,d+=e}};t.default=function(n){var t=n.location;return e.a.createElement(o.a,{sketch:i,path:t.pathname,description:"Reload page for a different variation."})}},255:function(n,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"c",function(){return e});var a=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r};t.a=function(n,t,r,o,c){void 0===c&&(c=!1);var i=a(n,r,o),u=e(t,r,o);return c?[i,u]:{x:i,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-23-js-db815032f83d419d6e5f.js.map