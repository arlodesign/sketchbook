(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{279:function(n,t,o){"use strict";o.r(t);o(391);var e=o(7),r=(o(0),o(389)),a=o(390),i=function(n){var t,o,e=0,r=n.PI,i=5e-4/n.TWO_PI,c=.25/n.TWO_PI,p=n.random(100);n.setup=function(){n.createCanvas(660,840),n.colorMode(n.HSB,100),n.background(p,90,10),n.noStroke(),n.strokeWeight(.5),t=.4*n.width},n.draw=function(){n.fill(n.lerpColor(n.color(p,0,0),n.lerpColor(n.color(p,95,5),n.color(p,5,95),.8),n.map(n.sin(r),-1,1,0,1)));var u=Object(a.b)(n.width/2,n.height/2,e+n.HALF_PI,n.map(e,0,2*n.TWO_PI,t,0),n.map(e,0,2*n.TWO_PI,t*(n.height/n.width),0),!0),d=a.a.apply(void 0,u.concat([r,(e>n.TWO_PI?n.map(e,n.TWO_PI,2*n.TWO_PI,t,0):n.map(e,0,n.TWO_PI,0,t))*n.noise(.01,.02,n.frameCount/4e3),!0]));o&&(n.beginShape(),n.vertex.apply(n,d),n.vertex.apply(n,o),n.vertex.apply(n,u),n.endShape(n.CLOSE)),o=d,r+=c,(e+=i)>2*n.TWO_PI&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(e.c)(r.a,{sketch:i,path:t.pathname,description:"Be patient. This one takes a while to draw."})}},390:function(n,t,o){"use strict";o.d(t,"c",function(){return e}),o.d(t,"d",function(){return r}),o.d(t,"b",function(){return a});var e=function(n,t,o){return n+Math.cos(t)*o},r=function(n,t,o){return n+Math.sin(t)*o},a=function(n,t,o,e,r,a){void 0===a&&(a=!1);var i=n+Math.cos(o)*e,c=t+Math.sin(o)*r;return a?[i,c]:{x:i,y:c}};t.a=function(n,t,o,a,i){void 0===i&&(i=!1);var c=e(n,o,a),p=r(t,o,a);return i?[c,p]:{x:c,y:p}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-24-js-a20e5004e91bef88da31.js.map