(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{313:function(t,n,r){"use strict";r.r(n);var a=r(10),o=(r(0),r(433)),c=r(434),e=function(t){var n,r,a;t.setup=function(){t.createCanvas(660,840),t.background(255),r=t.width/2-.05*t.width,a=t.floor(t.random(3,6)),t.stroke(255,128)},t.draw=function(){n=t.map(t.sin(t.frameCount/1e3),-1,1,3,50),t.background(0),t.push(),t.translate(t.width/2,t.height/2);for(var o=0;o<t.PI;o+=t.PI/n){var e=Object(c.a)(0,0,o,r,!0),i=[-e[0],e[1]];t.strokeWeight(t.map(e[1],0,r,0,5,!0)),t.rotate(t.HALF_PI/n);for(var u=0;u<a;u++)t.line.apply(t,e.concat(i)),t.rotate(t.TWO_PI/a)}t.pop()}};n.default=function(t){var n=t.location;return Object(a.c)(o.a,{sketch:e,path:n.pathname,description:""})}},434:function(t,n,r){"use strict";r.d(n,"c",function(){return a}),r.d(n,"d",function(){return o}),r.d(n,"b",function(){return c});var a=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},c=function(t,n,r,a,o,c){void 0===c&&(c=!1);var e=t+Math.cos(r)*a,i=n+Math.sin(r)*o;return c?[e,i]:{x:e,y:i}};n.a=function(t,n,r,c,e){void 0===e&&(e=!1);var i=a(t,r,c),u=o(n,r,c);return e?[i,u]:{x:i,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-11-js-9cf2e1cf69e7fd3cb348.js.map