"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[7478],{63453:function(n,t,e){var o=e(94035),r=e.n(o),i=e(61025);new(r())((function(n){var t,e,o,r,a,u=0,c=0,d=0,f=[];n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.background(255),t=n.floor(n.random(2,7)),e=n.random(.02,.05)/n.TWO_PI,o=n.random(1,2)/n.TWO_PI,r=n.random(.1)/n.TWO_PI,n.random(2e3,5e3),n.TWO_PI,a=n.floor(n.random(4,7))},n.draw=function(){var h,s;n.translate(n.width/2,n.height/2),n.rotate(d);for(var w=0;w<t;w++){var v=(0,i.Y2)(0,u,n.width/a),g=(0,i.C$)(0,u*a,n.height/a);h=(0,i.Y2)(v,c*a+n.TWO_PI/t*w,a),s=(0,i.C$)(g,c+n.TWO_PI/t*w,a),f.length===t&&(n.stroke(n.frameCount%t?0:"rgba(255,255,255,0.8)"),n.line(h,s,f[w].x,f[w].y)),f[w]={x:h,y:s}}u+=e,c+=o,d+=r},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Reload page for a different variation."},61025:function(n,t,e){e.d(t,{Y2:function(){return o},C$:function(){return r},vy:function(){return i}});var o=function(n,t,e){return n+Math.cos(t)*e},r=function(n,t,e){return n+Math.sin(t)*e},i=function(n,t,e,o,r){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(e)*o,u=t+Math.sin(e)*r;return i?[a,u]:{x:a,y:u}};t.ZP=function(n,t,e,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=o(n,e,i),c=r(t,e,i);return a?[u,c]:{x:u,y:c}}}},function(n){n.O(0,[4035],(function(){return 63453,n(n.s=63453)})),n.O()}]);