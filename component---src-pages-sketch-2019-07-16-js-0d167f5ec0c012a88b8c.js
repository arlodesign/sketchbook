(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{OumG:function(t,n,e){"use strict";e.r(n);e("XfO3"),e("HEwt"),e("a1Th"),e("Btvt"),e("rE2o"),e("ioFf"),e("rGqo");var r=e("q1tI"),o=e.n(r),a=e("Bl7J"),i=e("9VVL"),u=(e("PZSu"),e("ViKx"));function c(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s={}.DEV&&!1,p=function(t){t.setup=function(){s&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840),t.strokeWeight(10),t.createLoop(10,{gif:!!s&&{render:!1,open:!0},noiseRadius:.1})},t.draw=function(){t.blendMode(t.BLEND),t.background(0),t.blendMode(t.SCREEN);for(var n=t.animLoop.noise()+1,e=0;e<33;e++)t.push(),t.noFill(),t.stroke(["red","green","blue"][e%3]),t.translate(t.width/2,t.height/2),t.rotate(t.TWO_PI/33*e+t.animLoop.theta),t.ellipse.apply(t,c(Object(u.a)(0,0,t.TWO_PI/33*e,t.width/10*n,!0)).concat([t.width/2*t.map(t.sin(t.animLoop.theta),-1,1,n,0),t.height/2*t.map(t.cos(t.animLoop.theta),-1,1,0,n)])),t.pop()}};n.default=function(){return o.a.createElement(a.a,null,o.a.createElement(i.a,{sketch:p}))}},ViKx:function(t,n,e){"use strict";e.d(n,"b",(function(){return r}));var r=function(t,n,e,r,o,a){void 0===a&&(a=!1);var i=t+Math.cos(e)*r,u=n+Math.sin(e)*o;return a?[i,u]:{x:i,y:u}};n.a=function(t,n,e,r,o){void 0===o&&(o=!1);var a=function(t,n,e){return t+Math.cos(n)*e}(t,e,r),i=function(t,n,e){return t+Math.sin(n)*e}(n,e,r);return o?[a,i]:{x:a,y:i}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-16-js-0d167f5ec0c012a88b8c.js.map