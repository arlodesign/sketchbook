"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[3627],{93044:function(e,n,t){var r=t(94035),i=t.n(r),o=t(61025);new(i())((function(e){var n,t,r=[],i=!1;e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),(n=e.createGraphics(e.width,e.height)).background(255),n.noStroke(),r.push({r:0,speed:e.random(1.5)/e.TWO_PI,direction:e.random([-1,1])}),r.push({r:e.HALF_PI,speed:e.random(.5)/e.TWO_PI,direction:-1}),r.push({r:0,speed:e.random(1.5)/e.TWO_PI,direction:e.random([-1,1])}),r.push({r:0,speed:e.random(.5,1.5)/e.TWO_PI,direction:e.random([-1,1])})},e.draw=function(){e.frameRate(i?15:60),e.background(255),e.image(n,0,0);var d=(0,o.Y2)(e.width/2,r[0].r,e.width/2-100),h=e.width,a=e.height/2+e.sin(r[1].r)*(e.height/2),s=(0,o.Y2)(e.width/2,r[2].r,e.width/2-100),u=e.height,c=e.height/2+e.sin(r[3].r)*(e.height/2),l=e.lerp(0,d,.5),f=e.lerp(c,0,.5),p=e.lerp(h,s,.5),g=e.lerp(a,u,.5);i&&(e.stroke("red"),e.strokeWeight(1),e.line(h,a,s,u),e.line(0,c,d,0),e.strokeWeight(6),e.line(h,a,0,c),e.line(h,a,p,g),e.line(0,c,l,f),e.ellipse(p,g,12),e.ellipse(l,f,12));for(var w=0;w<r.length;w++)r[w].r+=r[w].speed*r[w].direction;e.frameCount>1&&(n.fill(e.frameCount%2?255:0),n.beginShape(),n.vertex(h,a),n.bezierVertex(p,g,l,f,0,c),n.vertex(t.X3,t.Y3),n.bezierVertex(t.leftHandleX,t.leftHandleY,t.rightHandleX,t.rightHandleY,t.X1,t.Y1),n.endShape()),t={X0:d,Y0:0,X1:h,Y1:a,X2:s,Y2:u,X3:0,Y3:c,rightHandleX:p,rightHandleY:g,leftHandleX:l,leftHandleY:f}},e.mousePressed=function(){i=!i},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch")},61025:function(e,n,t){t.d(n,{Y2:function(){return r},C$:function(){return i},vy:function(){return o}});var r=function(e,n,t){return e+Math.cos(n)*t},i=function(e,n,t){return e+Math.sin(n)*t},o=function(e,n,t,r,i){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],d=e+Math.cos(t)*r,h=n+Math.sin(t)*i;return o?[d,h]:{x:d,y:h}};n.ZP=function(e,n,t,o){var d=arguments.length>4&&void 0!==arguments[4]&&arguments[4],h=r(e,t,o),a=i(n,t,o);return d?[h,a]:{x:h,y:a}}}},function(e){e.O(0,[4035],(function(){return 93044,e(e.s=93044)})),e.O()}]);