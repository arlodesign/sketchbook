"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[2067],{12062:function(n,t,o){var r=o(94035),i=o.n(r),e=o(61025);new(i())((function(n){var t=30,o=[];n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.background(255),o=new Array(256).fill().map((function(t,o){return{vector:(0,e.ZP)(n.width/2,n.height/2,o,n.width*(o/256)),color:o}})),n.noStroke()},n.draw=function(){var r,i,e,u=n.floor(n.frameCount/(n.width/t)),c=n.floor(n.frameCount-n.width/t*u);if(u<n.height/t)for(var f=0;f<t;f++)for(var a=0;a<t;a++)r=c+n.width/t*f,i=u+n.height/t*a,e=void 0,e=function(t,r){return o.sort((function(o,i){return n.dist(t,r,o.vector.x,o.vector.y)-n.dist(t,r,i.vector.x,i.vector.y)})),o[0].color}(r,i),n.fill(e),n.ellipse(r+2*n.map(n.noise(r,i),0,1,-1,1),i+2*n.map(n.noise(i,r),0,1,-1,1),2,2);else n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},61025:function(n,t,o){o.d(t,{Y2:function(){return r},C$:function(){return i},vy:function(){return e}});var r=function(n,t,o){return n+Math.cos(t)*o},i=function(n,t,o){return n+Math.sin(t)*o},e=function(n,t,o,r,i){var e=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=n+Math.cos(o)*r,c=t+Math.sin(o)*i;return e?[u,c]:{x:u,y:c}};t.ZP=function(n,t,o,e){var u=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=r(n,o,e),f=i(t,o,e);return u?[c,f]:{x:c,y:f}}}},function(n){n.O(0,[4035],(function(){return 12062,n(n.s=12062)})),n.O()}]);