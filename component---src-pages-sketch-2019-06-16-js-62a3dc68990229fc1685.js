(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return a})),r.d(n,"b",(function(){return o}));var e=function(t,n,r){return t+Math.cos(n)*r},a=function(t,n,r){return t+Math.sin(n)*r},o=function(t,n,r,e,a,o){void 0===o&&(o=!1);var i=t+Math.cos(r)*e,c=n+Math.sin(r)*a;return o?[i,c]:{x:i,y:c}};n.a=function(t,n,r,o,i){void 0===i&&(i=!1);var c=e(t,r,o),u=a(n,r,o);return i?[c,u]:{x:c,y:u}}},"v+/z":function(t,n,r){"use strict";r.r(n);r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("91GP"),r("XfO3"),r("HEwt"),r("q1tI");var e=r("Gmm/"),a=r("ViKx"),o=r("qKvR");function i(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(t){var n=t.random(50),r=[[],[],[]],e=15;t.setup=function(){t.createCanvas(660,840),t.background(32),t.noFill(),t.colorMode(t.HSL,100),t.blendMode(t.OVERLAY);for(var n=function(n){for(var e=Array.from(Array(3),(function(){return{a:t.random(t.TWO_PI),d:t.random(t.width/r.length*(n+1),t.height/r.length*(n+1)),aSpeed:t.random(.005,.01)*t.random([-1,1])}})),a=function(t){r[n]=r[n].concat(e.map((function(n){return Object.assign({},n,{a:n.a+t})})))},o=0;o<t.TWO_PI;o+=t.TWO_PI/3)a(o)},e=0;e<r.length;e++)n(e)},t.draw=function(){for(var o=function(o){var c=r[o];t.stroke(t.map(t.sin(t.frameCount/(250*(o+1))),-1,1,n,n+50),100,t.map(t.cos(t.frameCount/(750*(o+1))),-1,1,20,80),e),t.beginShape(),t.curveVertex.apply(t,i(Object(a.a)(t.width/2,t.height/2,c[c.length-3].a,c[c.length-3].d,!0))),t.curveVertex.apply(t,i(Object(a.a)(t.width/2,t.height/2,c[c.length-2].a,c[c.length-2].d,!0))),t.curveVertex.apply(t,i(Object(a.a)(t.width/2,t.height/2,c[c.length-1].a,c[c.length-1].d,!0))),c.forEach((function(n,e){var c=n.a,u=n.d,h=n.aSpeed;t.curveVertex.apply(t,i(Object(a.a)(t.width/2,t.height/2,c,u,!0))),r[o][e].a+=h})),t.endShape()},c=0;c<r.length;c++)o(c);(e-=.005)<0&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(o.c)(e.a,{sketch:c,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-16-js-62a3dc68990229fc1685.js.map