(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{LjPc:function(n,t,r){"use strict";r.r(t);r("YbXK"),r("cFtU"),r("q8oJ"),r("8npG"),r("m210"),r("4DPX"),r("rzGZ"),r("q1tI");var o=r("Gmm/"),e=r("ViKx"),a=r("qKvR");function i(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(n){var t,r,o=0,a=n.PI,c=.01/3/n.TWO_PI,u=1/3/n.TWO_PI,p=n.random(100);n.setup=function(){n.createCanvas(660,840),n.colorMode(n.HSB,100),n.background(p,90,10),n.noFill(),n.strokeWeight(.5),t=n.width},n.draw=function(){n.stroke(n.lerpColor(n.color(p,0,0,0),n.color(p,5,95),n.map(n.sin(a),-1,1,0,1)));var s=[n.width/2,n.map(n.cos(o),-1,1,100,n.height-100)],f=e.a.apply(void 0,s.concat([a,(o>n.TWO_PI?n.map(o,n.TWO_PI,2*n.TWO_PI,t,0):n.map(o,0,n.TWO_PI,0,t))*n.noise(.01,.02,n.frameCount/3e3),!0]));r&&n.line.apply(n,i(f).concat(i(r))),r=f,a+=u,(o+=c)>2*n.TWO_PI&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(a.c)(o.a,{sketch:c,path:t.pathname,description:"Be patient. This one takes a while to draw."})}},ViKx:function(n,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return e})),r.d(t,"b",(function(){return a}));var o=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},a=function(n,t,r,o,e,a){void 0===a&&(a=!1);var i=n+Math.cos(r)*o,c=t+Math.sin(r)*e;return a?[i,c]:{x:i,y:c}};t.a=function(n,t,r,a,i){void 0===i&&(i=!1);var c=o(n,r,a),u=e(t,r,a);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-26-js-2f4c5e4cbde8f1930357.js.map