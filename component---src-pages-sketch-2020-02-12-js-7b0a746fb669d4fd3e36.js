(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return o})),r.d(n,"b",(function(){return i}));var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,o,i){void 0===i&&(i=!1);var a=t+Math.cos(r)*e,u=n+Math.sin(r)*o;return i?[a,u]:{x:a,y:u}};n.a=function(t,n,r,i,a){void 0===a&&(a=!1);var u=e(t,r,i),c=o(n,r,i);return a?[u,c]:{x:u,y:c}}},z2at:function(t,n,r){"use strict";r.r(n);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("q1tI");var e=r("Gmm/"),o=r("ViKx"),i=(r("PZSu"),r("qKvR"));function a(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return u(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var c=function(t){var n=t.getURLParams().render,r=t.random(),e=[];t.setup=function(){t.frameRate(60),t.noSmooth(),t.createCanvas(660,840),t.background(0),t.colorMode(t.HSB,1),t.noFill(),t.createLoop(120,{gif:!!n&&{render:!1,open:!0},noiseRadius:.1})},t.draw=function(){var i=t.animLoop,u=i.progress,c=i.theta,f=i.noise1D,h=[];h.push([.1*t.width,(t.height-t.width)/2]),h.push(Object(o.a)(.1*t.width,(t.height-t.width)/2,c*(400+100*f(.05)),t.width*f(.07),!0)),h.push(Object(o.a)(.9*t.width,(t.height-t.width)/2+t.width,-c*(400+100*f(.06)),t.width*-f(.08),!0)),h.push([.9*t.width,(t.height-t.width)/2+t.width]),e.push([t.bezierPoint.apply(t,a(h.map((function(t){return t[0]}))).concat([u])),t.bezierPoint.apply(t,a(h.map((function(t){return t[1]}))).concat([u]))]),t.stroke(r,1,1),e.length>3&&t.curve.apply(t,a(e.slice(-4).flat())),t.frameCount%100==0&&console.info(t.floor(100*u)+"%"),n||7200!==t.frameCount||(console.info("100%"),t.noLoop())}};n.default=function(t){var n=t.location;return Object(i.c)(e.a,{sketch:c,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2020-02-12-js-7b0a746fb669d4fd3e36.js.map