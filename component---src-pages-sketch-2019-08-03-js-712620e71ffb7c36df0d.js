(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{ViKx:function(t,n,e){"use strict";e.d(n,"b",(function(){return r}));var r=function(t,n,e,r,o,a){void 0===a&&(a=!1);var i=t+Math.cos(e)*r,c=n+Math.sin(e)*o;return a?[i,c]:{x:i,y:c}};n.a=function(t,n,e,r,o){void 0===o&&(o=!1);var a=function(t,n,e){return t+Math.cos(n)*e}(t,e,r),i=function(t,n,e){return t+Math.sin(n)*e}(n,e,r);return o?[a,i]:{x:a,y:i}}},WMym:function(t,n,e){"use strict";e.r(n);e("XfO3"),e("HEwt"),e("a1Th"),e("Btvt"),e("rE2o"),e("ioFf"),e("rGqo");var r=e("q1tI"),o=e.n(r),a=e("Bl7J"),i=e("9VVL"),c=(e("PZSu"),e("ViKx"));function u(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s={}.DEV&&!1,f=function(t){var n=t.random(80);t.setup=function(){t.frameRate(30),s&&t.pixelDensity(1),t.createCanvas(660,840),t.background(0),t.noFill(),t.colorMode(t.HSB,100),t.blendMode(t.HARD_LIGHT),t.createLoop(60,{gif:!!s&&{render:!1,open:!0}})},t.draw=function(){var e=t.animLoop,r=e.noise1D,o=e.noise2D,a=e.theta;t.stroke(t.map(a,0,t.TWO_PI,n-20,n+20),50,100,1),t.push(),t.translate.apply(t,u(Object(c.a)(t.width/2,t.height/2,a,t.width/10*(r(t.sin(a))+1),!0))),t.rotate(a),t.beginShape();for(var i=0;i<t.TWO_PI;i+=.01)t.vertex.apply(t,u(Object(c.a)(0,0,i,o(t.cos(i),t.sin(a))*t.width,!0)));t.endShape(t.CLOSE),t.pop(),!s&&1800===t.frameCount&&t.noLoop()}};n.default=function(){return o.a.createElement(a.a,null,o.a.createElement(i.a,{sketch:f}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-03-js-712620e71ffb7c36df0d.js.map