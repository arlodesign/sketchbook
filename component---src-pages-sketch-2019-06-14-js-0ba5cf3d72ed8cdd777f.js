(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return e})),r.d(n,"b",(function(){return a}));var o=function(t,n,r){return t+Math.cos(n)*r},e=function(t,n,r){return t+Math.sin(n)*r},a=function(t,n,r,o,e,a){void 0===a&&(a=!1);var i=t+Math.cos(r)*o,c=n+Math.sin(r)*e;return a?[i,c]:{x:i,y:c}};n.a=function(t,n,r,a,i){void 0===i&&(i=!1);var c=o(t,r,a),u=e(n,r,a);return i?[c,u]:{x:c,y:u}}},WFZQ:function(t,n,r){"use strict";r.r(n);r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("91GP"),r("XfO3"),r("HEwt"),r("bHtr"),r("q1tI");var o=r("Gmm/"),e=r("ViKx"),a=r("qKvR");function i(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(t){var n=[];t.setup=function(){t.createCanvas(660,840),t.stroke(255),t.strokeWeight(10),t.strokeJoin(t.BEVEL),t.fill(0),t.colorMode(t.HSB,100);for(var r=Array.from(Array(5),(function(){return{a:t.random(t.TWO_PI),d:t.random(t.width/10,t.width/2),aSpeed:t.random(.01)*t.random([-1,1])}})),o=function(t){n=n.concat(r.map((function(n){return Object.assign({},n,{a:n.a+t})})))},e=0;e<t.TWO_PI;e+=t.TWO_PI/3)o(e)},t.draw=function(){t.background(255),t.beginShape(),n.forEach((function(r,o){var a=r.a,c=r.d,u=r.aSpeed;t.vertex.apply(t,i(Object(e.a)(t.width/2,t.height/2,a,c,!0))),n[o].a+=u})),t.endShape(t.CLOSE),t.push(),t.blendMode(t.SCREEN),t.fill(t.map(t.sin(t.frameCount/500),-1,1,0,100),100,100),t.rect(0,0,t.width,t.height),t.pop()}};n.default=function(t){var n=t.location;return Object(a.c)(o.a,{sketch:c,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-14-js-0ba5cf3d72ed8cdd777f.js.map