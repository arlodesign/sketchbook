(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"3Sv9":function(t,n,r){"use strict";r.r(n);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo");var o=r("q1tI"),e=r.n(o),a=r("Bl7J"),i=r("9VVL"),c=r("ViKx"),u=r("WK/p");function f(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(t){var n=t.random(70),r=0,o=0;t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),t.background(n,80,5),t.noFill(),t.strokeWeight(4)},t.draw=function(){var e=t.noise(t.frameCount/100,r);t.blendMode(t.SCREEN),t.stroke(t.map(t.cos(r/6),-1,1,n,n+30),80,75,o);for(var a=0;a<6;a++)u.a.apply(void 0,[t,t.width/2,t.height/2].concat(f(Object(c.a)(t.width/2,t.height/2,r+a*t.TWO_PI/6,t.height*e,!0)),[e,!1]));(r+=.005)>6*t.TWO_PI?(o-=.001)<0&&t.noLoop():o=t.min(o+.1,100/6)}};n.default=function(){return e.a.createElement(a.a,null,e.a.createElement(i.a,{sketch:s}))}},ViKx:function(t,n,r){"use strict";r.d(n,"b",(function(){return o}));var o=function(t,n,r,o,e,a){void 0===a&&(a=!1);var i=t+Math.cos(r)*o,c=n+Math.sin(r)*e;return a?[i,c]:{x:i,y:c}};n.a=function(t,n,r,o,e){void 0===e&&(e=!1);var a=function(t,n,r){return t+Math.cos(n)*r}(t,r,o),i=function(t,n,r){return t+Math.sin(n)*r}(n,r,o);return e?[a,i]:{x:a,y:i}}},"WK/p":function(t,n,r){"use strict";n.a=function(t,n,r,o,e,a,i){if(void 0===i&&(i=!0),a<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var c=0;c<1;c+=a)(0!==c||i)&&t.random()>c&&t.point(t.lerp(n,o,c),t.lerp(r,e,c))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-28-js-b38d17420ac0bcd2f6a5.js.map