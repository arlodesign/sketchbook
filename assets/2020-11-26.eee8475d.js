"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[1741],{13683:function(n,t,e){var u=e(94035),r=e.n(u),o=e(45456),i=e.n(o),a=e(58891),c=e(61025);window.p5=r(),i()(),new(r())((function(n){var t=n.getURLParams().render,e=40*(t?60:1),u=t?1:60,r=n.random(),o=n.shuffle([r,(r+3/8)%1,(r+5/8)%1]),i=[{},{},{}];n.setup=function(){n.pixelDensity(1),n.frameRate(u),n.createCanvas(1080,1080),n.noSmooth(),n.background(255),n.strokeWeight(2),n.blendMode(n.HARD_LIGHT),n.colorMode(n.HSB,1),n.createLoop(e,{noiseRadius:1.3})},n.draw=function(){for(var r=n.animLoop,f=r.progress,s=r.noise1D,h=(0,a.easeInOutQuad)((0,a.easeInOutQuad)(n.sin(2*n.PI*f-n.PI/2)/2+.5)),d=n.map(f,0,1,n.width/10,n.width-n.width/10),v=0;v<i.length;v++){var g=n.color(o[v],n.map(v,0,2,.5,1),1,.7);n.stroke(g);for(var l=n.height/10;l<n.height-n.height/10;l+=2){var p=(0,c.ZP)(d,l,s(l/(250*(v+1)))*n.TWO_PI,2*(h+2)*2*s(l/(1e3*(v+1))));i[v][l]&&n.line(i[v][l].x,i[v][l].y,p.x,p.y),i[v][l]=i[v][l]||{},i[v][l].x=p.x,i[v][l].y=p.y}}t&&n.frameCount<=e*u&&(n.frameCount%100==0&&console.info("".concat(n.ceil(100*f),"%")),n.save("".concat(String(n.frameCount).padStart(String(e*u).length,"0"),".png"))),n.frameCount===e*u&&(n.noLoop(),!t&&n.save("2020-11-26_".concat(Date.now(),".png")))}}),"sketch")},58891:function(n,t,e){e.r(t),e.d(t,{linear:function(){return u},easeInQuad:function(){return r},easeOutQuad:function(){return o},easeInOutQuad:function(){return i},easeInCubic:function(){return a},easeOutCubic:function(){return c},easeInOutCubic:function(){return f},easeInQuart:function(){return s},easeOutQuart:function(){return h},easeInOutQuart:function(){return d},easeInQuint:function(){return v},easeOutQuint:function(){return g},easeInOutQuint:function(){return l}});var u=function(n){return n},r=function(n){return n*n},o=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},h=function(n){return 1- --n*n*n*n},d=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},v=function(n){return n*n*n*n*n},g=function(n){return 1+--n*n*n*n*n},l=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},61025:function(n,t,e){e.d(t,{Y2:function(){return u},C$:function(){return r},vy:function(){return o}});var u=function(n,t,e){return n+Math.cos(t)*e},r=function(n,t,e){return n+Math.sin(t)*e},o=function(n,t,e,u,r){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(e)*u,a=t+Math.sin(e)*r;return o?[i,a]:{x:i,y:a}};t.ZP=function(n,t,e,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=u(n,e,o),c=r(t,e,o);return i?[a,c]:{x:a,y:c}}}},function(n){n.O(0,[4035,5456],(function(){return 13683,n(n.s=13683)})),n.O()}]);