(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{GS09:function(t,a,e){"use strict";e.r(a);e("a1Th"),e("Btvt"),e("rE2o"),e("ioFf"),e("rGqo"),e("XfO3"),e("HEwt");var n=e("q1tI"),r=e.n(n),i=e("Bl7J"),o=e("9VVL"),h=e("ViKx");function c(t){return function(t){if(Array.isArray(t)){for(var a=0,e=new Array(t.length);a<t.length;a++)e[a]=t[a];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function(t){var a=[];t.setup=function(){t.createCanvas(660,840),t.background(0),t.stroke(255),t.strokeWeight(5),t.noFill();for(var e=Array.from(Array(4),(function(){return{a:t.random(t.TWO_PI),d:t.random(t.width/4,.45*t.width)}})),n=function(t){a=a.concat(e.map((function(a){var e=a.a,n=a.d;return{a:e+t,d:n}})))},r=0;r<t.TWO_PI;r+=t.TWO_PI/5)n(r)},t.draw=function(){t.curve.apply(t,c(Object(h.a)(t.width/2,t.height/2,a[t.frameCount].a,a[t.frameCount].d,!0)).concat(c(Object(h.a)(t.width/2,t.height/2,a[t.frameCount+1].a,a[t.frameCount+1].d,!0)),c(Object(h.a)(t.width/2,t.height/2,a[t.frameCount+2].a,a[t.frameCount+2].d,!0)),c(Object(h.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0)))),t.frameCount===a.length-4&&(t.curve.apply(t,c(Object(h.a)(t.width/2,t.height/2,a[t.frameCount+1].a,a[t.frameCount+1].d,!0)).concat(c(Object(h.a)(t.width/2,t.height/2,a[t.frameCount+2].a,a[t.frameCount+2].d,!0)),c(Object(h.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0)),c(Object(h.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0)))),t.curve.apply(t,c(Object(h.a)(t.width/2,t.height/2,a[t.frameCount+2].a,a[t.frameCount+2].d,!0)).concat(c(Object(h.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0)),c(Object(h.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0)),c(Object(h.a)(t.width/2,t.height/2,a[1].a,a[1].d,!0)))),t.curve.apply(t,c(Object(h.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0)).concat(c(Object(h.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0)),c(Object(h.a)(t.width/2,t.height/2,a[1].a,a[1].d,!0)),c(Object(h.a)(t.width/2,t.height/2,a[2].a,a[2].d,!0)))),t.curve.apply(t,c(Object(h.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0)).concat(c(Object(h.a)(t.width/2,t.height/2,a[1].a,a[1].d,!0)),c(Object(h.a)(t.width/2,t.height/2,a[2].a,a[2].d,!0)),c(Object(h.a)(t.width/2,t.height/2,a[3].a,a[3].d,!0)))),t.noLoop())}};a.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{sketch:u}),r.a.createElement("p",null,"Reload page for a different variation."))}},ViKx:function(t,a,e){"use strict";e.d(a,"b",(function(){return n}));var n=function(t,a,e,n,r,i){void 0===i&&(i=!1);var o=t+Math.cos(e)*n,h=a+Math.sin(e)*r;return i?[o,h]:{x:o,y:h}};a.a=function(t,a,e,n,r){void 0===r&&(r=!1);var i=function(t,a,e){return t+Math.cos(a)*e}(t,e,n),o=function(t,a,e){return t+Math.sin(a)*e}(a,e,n);return r?[i,o]:{x:i,y:o}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-11-js-c88e9c108bfc9d45c0f5.js.map