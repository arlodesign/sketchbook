(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{ViKx:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return o}));var r=function(t,e,n){return t+Math.cos(e)*n},i=function(t,e,n){return t+Math.sin(e)*n},o=function(t,e,n,r,i,o){void 0===o&&(o=!1);var a=t+Math.cos(n)*r,c=e+Math.sin(n)*i;return o?[a,c]:{x:a,y:c}};e.a=function(t,e,n,o,a){void 0===a&&(a=!1);var c=r(t,n,o),h=i(e,n,o);return a?[c,h]:{x:c,y:h}}},izSD:function(t,e,n){"use strict";n.r(e);n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("rE2o"),n("ioFf"),n("rGqo"),n("bHtr"),n("q1tI");var r=n("Gmm/"),i=n("ViKx"),o=n("qKvR");function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(t){var e=t.random(100),n=t.random(.03,.07)/t.TWO_PI,r=t.random(.03,.07)/t.TWO_PI,o=t.random(.03,.07)/t.TWO_PI,c=t.random(.03,.07)/t.TWO_PI,h=t.random(.01,.03)/t.TWO_PI,u=0,d=t.PI,f=0,p=t.PI,s=0;t.setup=function(){t.createCanvas(660,840),t.background(64),t.noFill(),t.strokeWeight(5),t.colorMode(t.HSB,100),t.blendMode(t.SOFT_LIGHT)},t.draw=function(){t.beginShape(),t.stroke(e,t.map(t.cos(s),-1,1,0,100,!0),t.map(t.cos(s),-1,1,100,0,!0),10),t.vertex(t.map(t.cos(u),-1,1,20,t.width-20),20,!0),t.quadraticVertex.apply(t,a(Object(i.a)(t.width/2,t.height/2,s-t.HALF_PI,t.height*t.noise(n/10,o/10,t.frameCount/1e3),!0)).concat([t.width-20,t.map(t.sin(d),-1,1,20,t.height-20,!0)])),t.quadraticVertex.apply(t,a(Object(i.a)(t.width/2,t.height/2,s,t.height*t.noise(n/10,o/10,t.frameCount/1e3),!0)).concat([t.map(t.cos(f),-1,1,20,t.width-20,!0),t.height-20])),t.quadraticVertex.apply(t,a(Object(i.a)(t.width/2,t.height/2,s+t.HALF_PI,t.height*t.noise(n/10,o/10,t.frameCount/1e3),!0)).concat([20,t.map(t.sin(p),-1,1,20,t.height-20,!0)])),t.quadraticVertex.apply(t,a(Object(i.a)(t.width/2,t.height/2,s+t.PI,t.height*t.noise(n/10,o/10,t.frameCount/1e3),!0)).concat([t.map(t.cos(u),-1,1,20,t.width-20,!0),20])),t.endShape(t.CLOSE),u+=n,d+=r,f+=o,p+=c,(s+=h)>2*t.TWO_PI&&(t.noLoop(),t.fill(e,10,10),t.noStroke(),t.blendMode(t.BLEND),t.rect(0,0,t.width,40),t.rect(0,t.height-40,t.width,40),t.rect(0,0,40,t.height),t.rect(t.width-40,0,40,t.height))}};e.default=function(t){var e=t.location;return Object(o.c)(r.a,{sketch:c,path:e.pathname,description:"Refresh page for a different variation"})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-03-js-7f23d7c19f9faf23abf4.js.map