(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{349:function(t,e,r){"use strict";r.r(e);r(194),r(180);var n=r(0),o=(r(1),r(255)),a=r(539),c=function(t){var e,r=!1;t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),e=t.random(0,45),t.fill(e,100,75),t.noStroke()},t.draw=function(){t.background(100-e,100,50);for(var n=30;n<t.width;n+=60)for(var o=30;o<t.height;o+=60){t.push(),t.translate(n,o);var c=r?t.createVector(t.mouseX,t.mouseY):t.createVector.apply(t,Object(a.a)(t.width/2,t.height/2,t.frameCount/100,t.width*t.noise(t.frameCount/1e3),!0));c.sub(t.createVector(n,o)),c.setMag(.9*t.min(60,t.dist(0,0,c.x,c.y))),t.beginShape(),t.vertex(c.x,c.y);var i=[t.createVector(c.y,-c.x).mult(.333),t.createVector(-c.y,c.x).mult(.333)];t.quadraticVertex(i[0].x,i[0].y,0,0),t.quadraticVertex(i[1].x,i[1].y,c.x,c.y),t.endShape(t.CLOSE),t.pop()}},t.mousePressed=function(){r=!r},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};e.default=function(t){var e=t.location;return Object(n.c)(o.a,{sketch:c,path:e.pathname,description:"Learning vector math. Click or tap on the canvas to control the focal point. Refresh page for a different color variation."})}},539:function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"b",(function(){return a}));var n=function(t,e,r){return t+Math.cos(e)*r},o=function(t,e,r){return t+Math.sin(e)*r},a=function(t,e,r,n,o,a){void 0===a&&(a=!1);var c=t+Math.cos(r)*n,i=e+Math.sin(r)*o;return a?[c,i]:{x:c,y:i}};e.a=function(t,e,r,a,c){void 0===c&&(c=!1);var i=n(t,r,a),u=o(e,r,a);return c?[i,u]:{x:i,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-17-js-d04c129ca7fb25f0712f.js.map