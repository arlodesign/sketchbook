(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{305:function(n,t,e){"use strict";e.r(t);var r=e(13),a=(e(0),e(381)),o=e(382),i=function(n){var t=0,e=0;n.setup=function(){n.createCanvas(660,840),n.background(0),n.colorMode(n.HSB,100),n.noFill()},n.draw=function(){n.translate(n.width/2,n.height/2),t=n.map(n.sin(n.frameCount/500),-1,1,0,100),n.stroke(t,50,100,10),n.beginShape();for(var r=0;r<n.HALF_PI;r+=.01)n.curveVertex.apply(n,Object(o.a)(0,0,r+e,n.map(n.noise(r,e),0,1,0,n.width),!0));n.endShape(),n.beginShape();for(var a=0;a<n.HALF_PI;a+=.01)n.curveVertex.apply(n,Object(o.a)(0,0,a+e+n.PI,n.map(n.noise(a,e),0,1,0,n.width/2),!0));n.endShape(),(e+=.001)>n.TWO_PI&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(r.c)(a.a,{sketch:i,path:t.pathname,description:""})}},382:function(n,t,e){"use strict";e.d(t,"c",function(){return r}),e.d(t,"d",function(){return a}),e.d(t,"b",function(){return o});var r=function(n,t,e){return n+Math.cos(t)*e},a=function(n,t,e){return n+Math.sin(t)*e},o=function(n,t,e,r,a,o){void 0===o&&(o=!1);var i=n+Math.cos(e)*r,c=t+Math.sin(e)*a;return o?[i,c]:{x:i,y:c}};t.a=function(n,t,e,o,i){void 0===i&&(i=!1);var c=r(n,e,o),u=a(t,e,o);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-18-js-06a3a1a6b06aa51c14f8.js.map