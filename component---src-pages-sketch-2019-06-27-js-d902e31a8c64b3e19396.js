(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"3VuS":function(t,n,r){"use strict";r.r(n);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo");var e=r("q1tI"),o=r.n(e),a=r("Bl7J"),i=r("9VVL"),c=r("ViKx");function u(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(t){var n=t.random(90),r=0,e=0;t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),t.background(n,80,5),t.noFill(),t.blendMode(t.HARD_LIGHT),t.strokeWeight(2)},t.draw=function(){var o=t.noise(t.frameCount/400,r);t.stroke(t.map(t.tan(r),-1,1,n,n+10),80,75,e);for(var a=0;a<5;a++)t.line.apply(t,u(Object(c.a)(t.width/2,t.height/2,r+a*t.TWO_PI/5,t.height/2*o,!0)).concat([t.width/2,t.height/2]));(r+=.01)>3*t.TWO_PI?(e-=.01)<0&&t.noLoop():e=t.min(e+.01,5)}};n.default=function(){return o.a.createElement(a.a,null,o.a.createElement(i.a,{sketch:f}))}},ViKx:function(t,n,r){"use strict";r.d(n,"b",(function(){return e}));var e=function(t,n,r,e,o,a){void 0===a&&(a=!1);var i=t+Math.cos(r)*e,c=n+Math.sin(r)*o;return a?[i,c]:{x:i,y:c}};n.a=function(t,n,r,e,o){void 0===o&&(o=!1);var a=function(t,n,r){return t+Math.cos(n)*r}(t,r,e),i=function(t,n,r){return t+Math.sin(n)*r}(n,r,e);return o?[a,i]:{x:a,y:i}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-27-js-d902e31a8c64b3e19396.js.map