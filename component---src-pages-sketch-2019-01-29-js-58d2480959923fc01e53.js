(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{224:function(e,t,r){"use strict";r.r(t);r(341);var n=r(12),i=(r(0),r(340)),a=r(343),o=function(e){var t,r,n=[],i=!1;e.setup=function(){e.createCanvas(660,840),(t=e.createGraphics(e.width,e.height)).background(255),t.noStroke(),n.push({r:0,speed:e.random(1.5)/e.TWO_PI,direction:e.random([-1,1])}),n.push({r:e.HALF_PI,speed:e.random(.5)/e.TWO_PI,direction:-1}),n.push({r:0,speed:e.random(1.5)/e.TWO_PI,direction:e.random([-1,1])}),n.push({r:0,speed:e.random(.5,1.5)/e.TWO_PI,direction:e.random([-1,1])})},e.draw=function(){e.frameRate(i?15:60),e.background(255),e.image(t,0,0);var o=Object(a.c)(e.width/2,n[0].r,e.width/2-100),d=e.width,c=e.height/2+e.sin(n[1].r)*(e.height/2),h=Object(a.c)(e.width/2,n[2].r,e.width/2-100),s=e.height,u=e.height/2+e.sin(n[3].r)*(e.height/2),l=e.lerp(0,o,.5),f=e.lerp(u,0,.5),p=e.lerp(d,h,.5),g=e.lerp(c,s,.5);i&&(e.stroke("red"),e.strokeWeight(1),e.line(d,c,h,s),e.line(0,u,o,0),e.strokeWeight(6),e.line(d,c,0,u),e.line(d,c,p,g),e.line(0,u,l,f),e.ellipse(p,g,12),e.ellipse(l,f,12));for(var v=0;v<n.length;v++)n[v].r+=n[v].speed*n[v].direction;e.frameCount>1&&(t.fill(e.frameCount%2?255:0),t.beginShape(),t.vertex(d,c),t.bezierVertex(p,g,l,f,0,u),t.vertex(r.X3,r.Y3),t.bezierVertex(r.leftHandleX,r.leftHandleY,r.rightHandleX,r.rightHandleY,r.X1,r.Y1),t.endShape()),r={X0:o,Y0:0,X1:d,Y1:c,X2:h,Y2:s,X3:0,Y3:u,rightHandleX:p,rightHandleY:g,leftHandleX:l,leftHandleY:f},e.abs(n[1].r),e.PI,e.PI},e.mousePressed=function(){i=!i}};t.default=function(e){var t=e.location;return Object(n.c)(i.a,{sketch:o,path:t.pathname,description:" Reload page for a different variation. Click or tap sketch to toggle guides."})}},341:function(e,t,r){var n=r(9);n(n.P,"Array",{fill:r(342)}),r(67)("fill")},342:function(e,t,r){"use strict";var n=r(34),i=r(100),a=r(18);e.exports=function(e){for(var t=n(this),r=a(t.length),o=arguments.length,d=i(o>1?arguments[1]:void 0,r),c=o>2?arguments[2]:void 0,h=void 0===c?r:i(c,r);h>d;)t[d++]=e;return t}},343:function(e,t,r){"use strict";r.d(t,"c",function(){return n}),r.d(t,"d",function(){return i}),r.d(t,"b",function(){return a});var n=function(e,t,r){return e+Math.cos(t)*r},i=function(e,t,r){return e+Math.sin(t)*r},a=function(e,t,r,n,i,a){void 0===a&&(a=!1);var o=e+Math.cos(r)*n,d=t+Math.sin(r)*i;return a?[o,d]:{x:o,y:d}};t.a=function(e,t,r,a,o){void 0===o&&(o=!1);var d=n(e,r,a),c=i(t,r,a);return o?[d,c]:{x:d,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-29-js-58d2480959923fc01e53.js.map