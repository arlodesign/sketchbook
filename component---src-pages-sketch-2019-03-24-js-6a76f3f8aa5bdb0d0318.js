(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{248:function(t,n,o){"use strict";o.r(n);o(308);var r=o(9),e=(o(0),o(307)),a=o(310),i=function(t){var n,o,r=0,e=t.PI,i=5e-4/t.TWO_PI,c=.25/t.TWO_PI,u=t.random(100);t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),t.background(u,90,10),t.noStroke(),t.strokeWeight(.5),n=.4*t.width},t.draw=function(){t.fill(t.lerpColor(t.color(u,0,0),t.lerpColor(t.color(u,95,5),t.color(u,5,95),.8),t.map(t.sin(e),-1,1,0,1)));var p=Object(a.b)(t.width/2,t.height/2,r+t.HALF_PI,t.map(r,0,2*t.TWO_PI,n,0),t.map(r,0,2*t.TWO_PI,n*(t.height/t.width),0),!0),s=a.a.apply(void 0,p.concat([e,(r>t.TWO_PI?t.map(r,t.TWO_PI,2*t.TWO_PI,n,0):t.map(r,0,t.TWO_PI,0,n))*t.noise(.01,.02,t.frameCount/4e3),!0]));o&&(t.beginShape(),t.vertex.apply(t,s),t.vertex.apply(t,o),t.vertex.apply(t,p),t.endShape(t.CLOSE)),o=s,e+=c,(r+=i)>2*t.TWO_PI&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(r.c)(e.a,{sketch:i,path:n.pathname,description:"Be patient. This one takes a while to draw."})}},308:function(t,n,o){var r=o(12);r(r.P,"Array",{fill:o(309)}),o(36)("fill")},309:function(t,n,o){"use strict";var r=o(28),e=o(79),a=o(16);t.exports=function(t){for(var n=r(this),o=a(n.length),i=arguments.length,c=e(i>1?arguments[1]:void 0,o),u=i>2?arguments[2]:void 0,p=void 0===u?o:e(u,o);p>c;)n[c++]=t;return n}},310:function(t,n,o){"use strict";o.d(n,"c",function(){return r}),o.d(n,"d",function(){return e}),o.d(n,"b",function(){return a});var r=function(t,n,o){return t+Math.cos(n)*o},e=function(t,n,o){return t+Math.sin(n)*o},a=function(t,n,o,r,e,a){void 0===a&&(a=!1);var i=t+Math.cos(o)*r,c=n+Math.sin(o)*e;return a?[i,c]:{x:i,y:c}};n.a=function(t,n,o,a,i){void 0===i&&(i=!1);var c=r(t,o,a),u=e(n,o,a);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-24-js-6a76f3f8aa5bdb0d0318.js.map