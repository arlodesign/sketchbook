(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{405:function(t,e,n){"use strict";n.r(e);n(435);var o=n(10),r=(n(0),n(433)),a=n(434),i=(n(439),{}.DEV&&!1),p=function(t){t.setup=function(){i&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840),t.noStroke(),t.createLoop(30,{gif:!!i&&{render:!1,open:!0},noiseRadius:1})},t.draw=function(){t.background(t.lerpColor(t.color("white"),t.color("pink"),.2)),t.push(),t.translate(t.width/2,t.height/2);for(var e=t.width/3*t.map(t.animLoop.noise1D(t.sin(t.animLoop.theta)),-1,1,.5,1.5),n=1;n>0;n-=.02)t.push(),t.rotate(t.map(t.sin(t.animLoop.theta),-1,1,-t.TWO_PI,t.TWO_PI)*n),t.fill(t.lerpColor(t.color("white"),t.color("pink"),n)),t.beginShape(),t.vertex.apply(t,Object(a.a)(0,0,0,e*n,!0)),t.vertex.apply(t,Object(a.a)(0,0,.4*t.TWO_PI,e*n,!0)),t.vertex.apply(t,Object(a.a)(0,0,.8*t.TWO_PI,e*n,!0)),t.vertex.apply(t,Object(a.a)(0,0,.2*t.TWO_PI,e*n,!0)),t.vertex.apply(t,Object(a.a)(0,0,.6*t.TWO_PI,e*n,!0)),t.endShape(t.CLOSE),t.pop();t.pop()}};e.default=function(t){var e=t.location;return Object(o.c)(r.a,{sketch:p,path:e.pathname,description:"For my daughter. She requested a pink star."})}},434:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"d",function(){return r}),n.d(e,"b",function(){return a});var o=function(t,e,n){return t+Math.cos(e)*n},r=function(t,e,n){return t+Math.sin(e)*n},a=function(t,e,n,o,r,a){void 0===a&&(a=!1);var i=t+Math.cos(n)*o,p=e+Math.sin(n)*r;return a?[i,p]:{x:i,y:p}};e.a=function(t,e,n,a,i){void 0===i&&(i=!1);var p=o(t,n,a),c=r(e,n,a);return i?[p,c]:{x:p,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-22-js-c16c340c63920b25b168.js.map