(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"7i/t":function(e,t,n){"use strict";n.r(t);n("n0hJ"),n("q1tI");var r=n("Gmm/"),i=n("ViKx"),a=n("qKvR"),o=function(e){var t,n,r=[],a=!1;e.setup=function(){e.createCanvas(660,840),(t=e.createGraphics(e.width,e.height)).background(255),t.noStroke(),r.push({r:0,speed:e.random(1.5)/e.TWO_PI,direction:e.random([-1,1])}),r.push({r:e.HALF_PI,speed:e.random(.5)/e.TWO_PI,direction:-1}),r.push({r:0,speed:e.random(1.5)/e.TWO_PI,direction:e.random([-1,1])}),r.push({r:0,speed:e.random(.5,1.5)/e.TWO_PI,direction:e.random([-1,1])})},e.draw=function(){e.frameRate(a?15:60),e.background(255),e.image(t,0,0);var o=Object(i.c)(e.width/2,r[0].r,e.width/2-100),d=e.width,c=e.height/2+e.sin(r[1].r)*(e.height/2),h=Object(i.c)(e.width/2,r[2].r,e.width/2-100),s=e.height,u=e.height/2+e.sin(r[3].r)*(e.height/2),l=e.lerp(0,o,.5),p=e.lerp(u,0,.5),f=e.lerp(d,h,.5),g=e.lerp(c,s,.5);a&&(e.stroke("red"),e.strokeWeight(1),e.line(d,c,h,s),e.line(0,u,o,0),e.strokeWeight(6),e.line(d,c,0,u),e.line(d,c,f,g),e.line(0,u,l,p),e.ellipse(f,g,12),e.ellipse(l,p,12));for(var m=0;m<r.length;m++)r[m].r+=r[m].speed*r[m].direction;e.frameCount>1&&(t.fill(e.frameCount%2?255:0),t.beginShape(),t.vertex(d,c),t.bezierVertex(f,g,l,p,0,u),t.vertex(n.X3,n.Y3),t.bezierVertex(n.leftHandleX,n.leftHandleY,n.rightHandleX,n.rightHandleY,n.X1,n.Y1),t.endShape()),n={X0:o,Y0:0,X1:d,Y1:c,X2:h,Y2:s,X3:0,Y3:u,rightHandleX:f,rightHandleY:g,leftHandleX:l,leftHandleY:p},e.abs(r[1].r),e.PI,e.PI},e.mousePressed=function(){a=!a}};t.default=function(e){var t=e.location;return Object(a.c)(r.a,{sketch:o,path:t.pathname,description:" Reload page for a different variation. Click or tap sketch to toggle guides."})}},ViKx:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return a}));var r=function(e,t,n){return e+Math.cos(t)*n},i=function(e,t,n){return e+Math.sin(t)*n},a=function(e,t,n,r,i,a){void 0===a&&(a=!1);var o=e+Math.cos(n)*r,d=t+Math.sin(n)*i;return a?[o,d]:{x:o,y:d}};t.a=function(e,t,n,a,o){void 0===o&&(o=!1);var d=r(e,n,a),c=i(t,n,a);return o?[d,c]:{x:d,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-29-js-0617455297379e8af7ea.js.map