(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{262:function(n,t,e){"use strict";e.r(t);e(138),e(30),e(29),e(12),e(101),e(73),e(424),e(422);var r=e(10),i=(e(0),e(420)),o=e(421),a=function(n){var t,e,r,i,a,u,c,s=[],d=!1,h=!1,f=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))}];n.setup=function(){for(n.createCanvas(660,840),e=n.random([0,1]),(t=n.createGraphics(n.width,n.height)).background(e?0:255),t.stroke(e?255:0),t.strokeWeight(100),t.line(.25*n.width,150,.25*n.width,n.height-150),t.line(.5*n.width,150,.5*n.width,n.height-150),t.line(.75*n.width,150,.75*n.width,n.height-150),t.blendMode(e?n.DARKEST:n.LIGHTEST),t.noStroke();Array.from(new Set([i,a,u,c])).length<4;)i=n.random(f),a=n.random(f),u=n.random(f),c=n.random(f);for(var r=0;r<4;r++)s.push({r:n.HALF_PI*r,speed:n.random(.01,.1*(2-r/2))/n.TWO_PI,direction:n.random([-1,1])});s.sort(function(n,t){return n.r-t.r})},n.draw=function(){n.background(255),n.image(t,0,0);var e,f=Object(o.c)(n.width/2,s[0].r,n.width/2),l=n.width,b=n.height/2+n.sin(s[1].r)*(n.height/2),g=Object(o.c)(n.width/2,s[2].r,n.width/2),p=n.height,w=n.height/2+n.sin(s[3].r)*(n.height/2),v=n.lerp(0,f,.2),k=n.lerp(w,0,.2),m=n.lerp(l,g,.2),I=n.lerp(b,p,.2);d&&(n.stroke("red"),n.strokeWeight(1),n.line(l,b,g,p),n.line(0,w,f,0),n.strokeWeight(6),n.line(l,b,0,w),n.line(l,b,m,I),n.line(0,w,v,k),n.ellipse(m,I,12),n.ellipse(v,k,12));for(var P=0;P<s.length;P++)s[P].r+=s[P].speed*s[P].direction;n.frameCount>1&&(e=s[0].r,t.fill(i(e),a(e),u(e),c(3*e)),t.beginShape(),t.vertex(l,b),t.bezierVertex(m,I,v,k,0,w),t.vertex(r.X3,r.Y3),t.bezierVertex(r.leftHandleX,r.leftHandleY,r.rightHandleX,r.rightHandleY,r.X1,r.Y1),t.endShape()),r={X0:f,Y0:0,X1:l,Y1:b,X2:g,Y2:p,X3:0,Y3:w,rightHandleX:m,rightHandleY:I,leftHandleX:v,leftHandleY:k},n.abs(s[1].r)>3*n.TWO_PI&&n.abs(s[3].r)>3*n.TWO_PI&&(n.noLoop(),h=!0)},n.mousePressed=function(){d=!d,h&&n.redraw()}};t.default=function(n){var t=n.location;return Object(r.c)(i.a,{sketch:a,path:t.pathname,description:"Reload page for a different variation. Click or tap sketch to toggle guides."})}},421:function(n,t,e){"use strict";e.d(t,"c",function(){return r}),e.d(t,"d",function(){return i}),e.d(t,"b",function(){return o});var r=function(n,t,e){return n+Math.cos(t)*e},i=function(n,t,e){return n+Math.sin(t)*e},o=function(n,t,e,r,i,o){void 0===o&&(o=!1);var a=n+Math.cos(e)*r,u=t+Math.sin(e)*i;return o?[a,u]:{x:a,y:u}};t.a=function(n,t,e,o,a){void 0===a&&(a=!1);var u=r(n,e,o),c=i(t,e,o);return a?[u,c]:{x:u,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-02-js-f79883c753a6be3153ed.js.map