(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{ViKx:function(t,n,r){"use strict";r.d(n,"b",(function(){return e}));var e=function(t,n,r,e,o,a){void 0===a&&(a=!1);var i=t+Math.cos(r)*e,c=n+Math.sin(r)*o;return a?[i,c]:{x:i,y:c}};n.a=function(t,n,r,e,o){void 0===o&&(o=!1);var a=function(t,n,r){return t+Math.cos(n)*r}(t,r,e),i=function(t,n,r){return t+Math.sin(n)*r}(n,r,e);return o?[a,i]:{x:a,y:i}}},gqQl:function(t,n,r){"use strict";r.r(n);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("bHtr");var e=r("q1tI"),o=r.n(e),a=r("Bl7J"),i=r("9VVL"),c=r("ViKx");r("PZSu");function u(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f={}.DEV&&!1,l=function(t){t.setup=function(){t.pixelDensity(1),f&&t.frameRate(30),t.createCanvas(660,840),t.noStroke(),t.colorMode(t.HSB,1),t.createLoop(15,{gif:!!f&&{render:!1,open:!0},noiseRadius:1})},t.draw=function(){t.blendMode(t.BLEND),t.background(255),t.blendMode(t.HARD_LIGHT);for(var n=t.animLoop,r=n.noise1D,e=n.theta,o=t.PI;o>0;o-=t.PI/20)for(var a=0;a<t.TWO_PI;a+=t.TWO_PI/3)t.fill(t.map(r(t.cos(a+e-o)),-1,1,0,1),50,100,t.map(o,t.PI,0,0,.5)),t.circle.apply(t,u(Object(c.a)(t.width/2,t.height/2,a+e-o,t.map(r(t.sin(e-o)),-1,1,0,t.width/3),!0)).concat([t.map(o,t.PI,0,1e3,10)])),t.fill(t.map(r(t.cos(a+e)),-1,1,0,1),50,100),t.circle.apply(t,u(Object(c.a)(t.width/2,t.height/2,a+e,t.map(r(t.sin(e)),-1,1,0,t.width/3),!0)).concat([10]))}};n.default=function(){return o.a.createElement(a.a,null,o.a.createElement(i.a,{sketch:l}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-16-js-8161c61807970e15689e.js.map