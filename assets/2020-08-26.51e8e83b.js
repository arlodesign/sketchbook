"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[2122],{79458:function(n,t,r){var e=r(94035),u=r.n(e),i=(r(96995),r(53228)),o=r(61025),a=r(58891);new(u())((function(n){var t,r=n.getURLParams().render,e=r?540:180,u=r?60:30,c=[n.random(256),n.random(256),n.random(256)];n.preload=function(){n.loadImage(i.Z)},n.setup=function(){n.pixelDensity(1),n.frameRate(u),n.createCanvas(e,e),n.background(255),n.noSmooth(),n.createLoop(20,{noiseRadius:.7}),t=n.createGraphics(n.width,n.height)},n.draw=function(){var e,i=n.animLoop,f=i.progress,s=i.noise2D,h=n.map((0,a.easeInCubic)(-4*f*f+4*f),0,1,.3,1.3);n.background(255),n.loadPixels(),(e=t).background.apply(e,c),t.strokeWeight(n.width/30*.75);for(var d=n.width/30;d<n.width;d+=n.width/30)for(var l=n.width/30;l<n.height;l+=n.height/30)t.stroke(255*n.abs(s(d,l))),t.point(d,l);t.loadPixels();for(var p=function(r){for(var e=function(e){var u=4*(e+r*n.width),i=[1,2,3].map((function(u){var i=s(r/400*u,e/400*u)*n.PI,a=s(e/1e3*u,r/1e3*u)*(n.width/3)*h,c=(0,o.ZP)(e,r,i,a);return c.x=n.floor(n.constrain(c.x,0,t.width-1)),c.y=n.floor(n.constrain(c.y,0,t.height-1)),4*(c.x+c.y*t.width)}));n.pixels[u]=t.pixels[i[0]],n.pixels[u+1]=t.pixels[i[1]+1],n.pixels[u+2]=t.pixels[i[2]+2],n.pixels[u+3]=255},u=0;u<n.width;u++)e(u)},g=0;g<n.height;g++)p(g);n.updatePixels(),r&&n.frameCount<=20*u&&(n.frameCount%100==0&&console.info("".concat(n.floor(100*f),"%")),n.save("".concat(String(n.frameCount).padStart(String(20*u).length,"0"),".png")))}}),"sketch")},58891:function(n,t,r){r.r(t),r.d(t,{linear:function(){return e},easeInQuad:function(){return u},easeOutQuad:function(){return i},easeInOutQuad:function(){return o},easeInCubic:function(){return a},easeOutCubic:function(){return c},easeInOutCubic:function(){return f},easeInQuart:function(){return s},easeOutQuart:function(){return h},easeInOutQuart:function(){return d},easeInQuint:function(){return l},easeOutQuint:function(){return p},easeInOutQuint:function(){return g}});var e=function(n){return n},u=function(n){return n*n},i=function(n){return n*(2-n)},o=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},h=function(n){return 1- --n*n*n*n},d=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},l=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},g=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},61025:function(n,t,r){r.d(t,{Y2:function(){return e},C$:function(){return u},vy:function(){return i}});var e=function(n,t,r){return n+Math.cos(t)*r},u=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,e,u){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=n+Math.cos(r)*e,a=t+Math.sin(r)*u;return i?[o,a]:{x:o,y:a}};t.ZP=function(n,t,r,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=e(n,r,i),c=u(t,r,i);return o?[a,c]:{x:a,y:c}}},53228:function(n,t){t.Z="/assets/susan.b1b4b30f.png"}},function(n){n.O(0,[4035,6995],(function(){return 79458,n(n.s=79458)})),n.O()}]);