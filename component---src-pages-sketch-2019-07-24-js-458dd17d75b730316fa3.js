(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{ViKx:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var o=function(t,e,n,o,a,r){void 0===r&&(r=!1);var i=t+Math.cos(n)*o,p=e+Math.sin(n)*a;return r?[i,p]:{x:i,y:p}};e.a=function(t,e,n,o,a){void 0===a&&(a=!1);var r=function(t,e,n){return t+Math.cos(e)*n}(t,n,o),i=function(t,e,n){return t+Math.sin(e)*n}(e,n,o);return a?[r,i]:{x:r,y:i}}},kKKS:function(t,e,n){"use strict";n.r(e);n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("rE2o"),n("ioFf"),n("rGqo"),n("bHtr");var o=n("q1tI"),a=n.n(o),r=n("Bl7J"),i=n("9VVL"),p=n("ViKx");n("PZSu");function c(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u={}.DEV&&!1,s=function(t){t.setup=function(){u&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840),t.noStroke(),t.colorMode(t.HSB,1),t.createLoop(30,{gif:!!u&&{render:!1,open:!0},noiseRadius:.5})},t.draw=function(){t.blendMode(t.BLEND),t.background(.5),t.blendMode(t.OVERLAY),t.push(),t.translate(t.width/2,t.height/2);for(var e=t.width/2,n=0;n<1;n+=.1)t.push(),t.rotate(t.map(t.sin(t.animLoop.theta),-1,1,-t.TWO_PI,t.TWO_PI)*(n+.1)),t.fill(n,1,1,.5),t.beginShape(),t.vertex.apply(t,c(Object(p.a)(0,0,0,e*n*t.map(t.animLoop.noise2D(n*t.cos(t.animLoop.theta),0),-1,1,.25,1),!0))),t.vertex.apply(t,c(Object(p.a)(0,0,.4*t.TWO_PI,e*n*t.map(t.animLoop.noise2D(n*t.cos(t.animLoop.theta),.4*t.TWO_PI),-1,1,.5,2),!0))),t.vertex.apply(t,c(Object(p.a)(0,0,.8*t.TWO_PI,e*n*t.map(t.animLoop.noise2D(n*t.cos(t.animLoop.theta),.8*t.TWO_PI),-1,1,.5,3),!0))),t.vertex.apply(t,c(Object(p.a)(0,0,.2*t.TWO_PI,e*n*t.map(t.animLoop.noise2D(n*t.cos(t.animLoop.theta),.2*t.TWO_PI),-1,1,.5,4),!0))),t.vertex.apply(t,c(Object(p.a)(0,0,.6*t.TWO_PI,e*n*t.map(t.animLoop.noise2D(n*t.cos(t.animLoop.theta),.6*t.TWO_PI),-1,1,.5,5),!0))),t.endShape(t.CLOSE),t.pop();t.pop()}};e.default=function(){return a.a.createElement(r.a,null,a.a.createElement(i.a,{sketch:s}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-24-js-458dd17d75b730316fa3.js.map