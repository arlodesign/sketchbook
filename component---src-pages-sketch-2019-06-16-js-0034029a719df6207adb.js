(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{ViKx:function(n,t,r){"use strict";r.d(t,"c",(function(){return e})),r.d(t,"d",(function(){return a})),r.d(t,"b",(function(){return o}));var e=function(n,t,r){return n+Math.cos(t)*r},a=function(n,t,r){return n+Math.sin(t)*r},o=function(n,t,r,e,a,o){void 0===o&&(o=!1);var i=n+Math.cos(r)*e,c=t+Math.sin(r)*a;return o?[i,c]:{x:i,y:c}};t.a=function(n,t,r,o,i){void 0===i&&(i=!1);var c=e(n,r,o),u=a(t,r,o);return i?[c,u]:{x:c,y:u}}},"v+/z":function(n,t,r){"use strict";r.r(t);r("q8oJ"),r("8npG"),r("m210"),r("4DPX"),r("rzGZ"),r("E5k/"),r("YbXK"),r("cFtU"),r("q1tI");var e=r("Gmm/"),a=r("ViKx"),o=r("qKvR");function i(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(n){var t=n.random(50),r=[[],[],[]],e=15;n.setup=function(){n.createCanvas(660,840),n.background(32),n.noFill(),n.colorMode(n.HSL,100),n.blendMode(n.OVERLAY);for(var t=function(t){for(var e=Array.from(Array(3),(function(){return{a:n.random(n.TWO_PI),d:n.random(n.width/r.length*(t+1),n.height/r.length*(t+1)),aSpeed:n.random(.005,.01)*n.random([-1,1])}})),a=function(n){r[t]=r[t].concat(e.map((function(t){return Object.assign({},t,{a:t.a+n})})))},o=0;o<n.TWO_PI;o+=n.TWO_PI/3)a(o)},e=0;e<r.length;e++)t(e)},n.draw=function(){for(var o=function(o){var c=r[o];n.stroke(n.map(n.sin(n.frameCount/(250*(o+1))),-1,1,t,t+50),100,n.map(n.cos(n.frameCount/(750*(o+1))),-1,1,20,80),e),n.beginShape(),n.curveVertex.apply(n,i(Object(a.a)(n.width/2,n.height/2,c[c.length-3].a,c[c.length-3].d,!0))),n.curveVertex.apply(n,i(Object(a.a)(n.width/2,n.height/2,c[c.length-2].a,c[c.length-2].d,!0))),n.curveVertex.apply(n,i(Object(a.a)(n.width/2,n.height/2,c[c.length-1].a,c[c.length-1].d,!0))),c.forEach((function(t,e){var c=t.a,u=t.d,h=t.aSpeed;n.curveVertex.apply(n,i(Object(a.a)(n.width/2,n.height/2,c,u,!0))),r[o][e].a+=h})),n.endShape()},c=0;c<r.length;c++)o(c);(e-=.005)<0&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(o.c)(e.a,{sketch:c,path:t.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-16-js-0034029a719df6207adb.js.map