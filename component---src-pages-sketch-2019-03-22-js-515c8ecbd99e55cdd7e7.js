(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{294:function(e,r,t){"use strict";t.r(r);t(441);var o=t(10),n=(t(0),t(439)),a=t(452),c=function(e){var r,t,o=[],n=[];function c(t,o,n){e.push(),e.translate(t+r/2,o+r/2),n(t,o),e.pop()}var i=function(){e.rotate(e.random([0,e.HALF_PI,e.PI,e.HALF_PI+e.PI])),e.beginShape(),e.vertex(-r/2,-r/2),e.vertex(r/2,r/2),e.vertex(-r/2,r/2),e.endShape(e.CLOSE)},h=function(){e.scale(.8),e.ellipse(0,0,r)},d=function(){e.rect(-r/2,-r/2,r,r)},f=function(t,n){e.point(0,0),o.push({vector:{x:t+r/2,y:n+r/2},reached:!1,reachedBy:0})};e.setup=function(){e.createCanvas(660,840),e.colorMode(e.HSB,100);var u=e.random(33);n=Object(a.a)([e.color(u,e.random([20,40,60]),33),e.color(2*u,e.random([20,40,60]),66),e.color(3*u,e.random([20,40,60]),99)]),r=e.random([20,30,60]),e.background(n[0]),e.noStroke(),e.fill(n[1]);for(var s=0;s<e.width;s+=r)for(var v=0;v<e.height;v+=r)c(s,v,e.random([i,h,d,f,f,f]));e.stroke(n[0]),e.strokeWeight(r/3),o[0].reached=!0,o[0].reachedBy=-1,t=e.dist(0,0,e.width,e.height)},e.draw=function(){var a,c,i=t;o.forEach(function(r,t){r.reached||o.forEach(function(o,n){if(o.reached){var h=e.dist(r.vector.x,r.vector.y,o.vector.x,o.vector.y);h<i&&(i=h,c=t,a=n)}})}),o[c].reached=!0,o[c].reachedBy=a,o.forEach(function(r,t){var n=r.vector,a=r.reached,c=r.reachedBy;if(a&&c>-1){var i=o[c].vector,h=i.x,d=i.y;e.line(n.x,n.y,h,d)}}),o.filter(function(e){return e.reached}).length===o.length&&(e.stroke(n[2]),e.strokeWeight(r/5),o.forEach(function(e,r){o[r].reached=!1,o[r].reachedBy=0}),o[0].reached=!0,o[0].reachedBy=-1)}};r.default=function(e){var r=e.location;return Object(o.c)(n.a,{sketch:c,path:r.pathname,description:"Be patient. Sometimes this will look like it’s doing nothing for a few seconds. Refresh page for a different variation."})}},452:function(e,r,t){"use strict";function o(e){for(var r=e.length-1;r>0;r--){var t=Math.floor(Math.random()*(r+1)),o=[e[t],e[r]];e[r]=o[0],e[t]=o[1]}return e}t.d(r,"a",function(){return o})}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-22-js-515c8ecbd99e55cdd7e7.js.map