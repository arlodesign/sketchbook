(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{368:function(n,t,e){"use strict";e.r(t);e(391),e(125),e(48),e(392);var r=e(7),o=(e(0),e(389)),a=e(390),u=function(n){var t=n.random(80),e=[],r=[];n.setup=function(){n.pixelDensity(1),n.createCanvas(660,840),n.colorMode(n.HSB,100),(e=Array.from(Array(15),function(){return{x:n.mouseX,y:n.mouseY,a:n.random(n.TWO_PI),d:n.random(6)}})).sort(function(n,t){return n.a-t.a}),r=[e],n.noStroke()},n.draw=function(){n.background(t+20,100,20);for(var o=function(e){var o=r[e];n.fill(n.map(e,0,r.length,t,t+20),100,n.map(e,0,r.length,100,20)),n.beginShape(),n.curveVertex.apply(n,Object(a.a)(o[o.length-3].x,o[o.length-3].y,o[o.length-3].a,o[o.length-3].d+6*e,!0)),n.curveVertex.apply(n,Object(a.a)(o[o.length-2].x,o[o.length-2].y,o[o.length-2].a,o[o.length-2].d+6*e,!0)),n.curveVertex.apply(n,Object(a.a)(o[o.length-1].x,o[o.length-1].y,o[o.length-1].a,o[o.length-1].d+6*e,!0)),o.forEach(function(t){return n.curveVertex.apply(n,Object(a.a)(t.x,t.y,t.a,t.d+6*e,!0))}),n.endShape()},u=r.length-1;u>=0;u--)o(u);r.unshift(e.map(function(t){var e=t.a,r=t.d;return{x:n.mouseX,y:n.mouseY,a:n.constrain(e*n.map(n.noise(e,n.frameCount/500),0,1,.1,1.9),0,n.TWO_PI),d:r*n.noise(r,n.frameCount/500)*10}})),r.length>n.height/12&&r.pop()},n.touchMoved=function(){if(n.mouseX>=0&&n.mouseY>=0&&n.mouseX<=n.width&&n.mouseY<=n.height)return!1}};t.default=function(n){var t=n.location;return Object(r.c)(o.a,{sketch:u,path:t.pathname,description:"Move pointer or finger over sketch."})}},390:function(n,t,e){"use strict";e.d(t,"c",function(){return r}),e.d(t,"d",function(){return o}),e.d(t,"b",function(){return a});var r=function(n,t,e){return n+Math.cos(t)*e},o=function(n,t,e){return n+Math.sin(t)*e},a=function(n,t,e,r,o,a){void 0===a&&(a=!1);var u=n+Math.cos(e)*r,c=t+Math.sin(e)*o;return a?[u,c]:{x:u,y:c}};t.a=function(n,t,e,a,u){void 0===u&&(u=!1);var c=r(n,e,a),i=o(t,e,a);return u?[c,i]:{x:c,y:i}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-02-js-57dd5211462b028c44a9.js.map