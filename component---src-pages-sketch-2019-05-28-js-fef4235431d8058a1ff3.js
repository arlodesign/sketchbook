(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{352:function(n,t,e){"use strict";e.r(t);var r=e(10),o=(e(0),e(450)),a=e(451),i=function(n){n.setup=function(){n.createCanvas(660,840),n.noStroke(),n.noFill(),n.colorMode(n.HSB,100)},n.draw=function(){n.blendMode(n.BLEND),n.background(255),n.blendMode(n.HARD_LIGHT),n.translate(n.width/2,n.height/2),n.rotate(n.HALF_PI/2);for(var t=1;t<=10;t++)for(var e=n.map(t,1,10,n.frameCount/100,n.frameCount/1e3),r=n.map(n.sin(n.frameCount/500),-1,1,4,1),o=0+e;o<n.TWO_PI+e;o+=n.TWO_PI/t){var i=Object(a.a)(r,r,o,n.map(t,1,10,0,.666*n.height)),u=i.x,c=i.y;n.strokeWeight(n.map(t,1,10,20,0)),n.stroke(n.map(n.sin(o),-1,1,0,100),75,50),n.beginShape(),n.vertex(u,c),n.vertex(-u,c),n.vertex(-u,-c),n.vertex(u,-c),n.endShape(n.CLOSE)}}};t.default=function(n){var t=n.location;return Object(r.c)(o.a,{sketch:i,path:t.pathname,description:""})}},451:function(n,t,e){"use strict";e.d(t,"c",function(){return r}),e.d(t,"d",function(){return o}),e.d(t,"b",function(){return a});var r=function(n,t,e){return n+Math.cos(t)*e},o=function(n,t,e){return n+Math.sin(t)*e},a=function(n,t,e,r,o,a){void 0===a&&(a=!1);var i=n+Math.cos(e)*r,u=t+Math.sin(e)*o;return a?[i,u]:{x:i,y:u}};t.a=function(n,t,e,a,i){void 0===i&&(i=!1);var u=r(n,e,a),c=o(t,e,a);return i?[u,c]:{x:u,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-28-js-fef4235431d8058a1ff3.js.map