(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{UjcY:function(t,n,r){"use strict";r.r(n);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("q1tI");var i=r("Gmm/"),o=r("ViKx"),e=r("qKvR");function a(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(t){var n=[],r=[],i=t.random(.1,.5)/t.TWO_PI,e=t.random(.1,.5)/t.TWO_PI,c=t.random(.01,.05)/t.TWO_PI,h=0,u=t.PI,d=0,p=[];t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSL,100),n=[t.random(t.width/3,t.width/2),t.random(t.height/3,t.height/2)],r=[t.random(t.width/3,t.width/2),t.random(t.height/3,t.height/2)]},t.draw=function(){t.background(0),t.stroke(255),t.noFill(),p.push({pointA:o.b.apply(void 0,[t.width/2,t.height/2,h].concat(a(n),[!0])),pointB:o.b.apply(void 0,[t.width/2,t.height/2,u].concat(a(r),[!0])),hue:t.map(t.sin(t.frameCount/1e3),-1,1,0,100)});var f=Object(o.a)(t.width/2,t.height/2,d,.4*t.width,!0),s=Object(o.a)(t.width/2,t.height/2,d+t.PI,.4*t.width,!0);p.length>100&&p.shift(),p.forEach((function(n,r){t.stroke(n.hue,50,75,r/100*100),t.beginShape(),t.vertex.apply(t,a(f)),t.bezierVertex.apply(t,a(n.pointA).concat(a(n.pointB),a(s))),t.endShape(),t.stroke(n.hue,50,50,25),t.line.apply(t,a(n.pointA).concat(a(n.pointB)))})),h+=i,u-=e,d+=c}};n.default=function(t){var n=t.location;return Object(e.c)(i.a,{sketch:c,path:n.pathname,description:""})}},ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return i})),r.d(n,"d",(function(){return o})),r.d(n,"b",(function(){return e}));var i=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},e=function(t,n,r,i,o,e){void 0===e&&(e=!1);var a=t+Math.cos(r)*i,c=n+Math.sin(r)*o;return e?[a,c]:{x:a,y:c}};n.a=function(t,n,r,e,a){void 0===a&&(a=!1);var c=i(t,r,e),h=o(n,r,e);return a?[c,h]:{x:c,y:h}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-01-js-eb6a502182add4926820.js.map