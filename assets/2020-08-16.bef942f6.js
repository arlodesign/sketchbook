"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[8982],{54787:function(n,t,r){var e=r(94035),u=r.n(e),o=(r(96995),r(58891)),i=r(87540);new(u())((function(n){var t=n.getURLParams().render;n.setup=function(){n.pixelDensity(1),n.frameRate(30),n.createCanvas(180,180),n.background(255),n.noSmooth(),n.createLoop(20,{noiseRadius:.5})},n.draw=function(){var r=n.animLoop,e=r.progress,u=r.noise2D;n.background(255),n.loadPixels();for(var c=-4*e*e+4*e,a=0;a<n.height;a++)for(var f=0;f<n.width;f++){var s=4*(f+a*n.width),l=n.floor(a/(n.height/36)),h=u((f+n.width)/100*c,l),p=(0,i.Z)(n,(0,o.easeInOutCubic)(Math.abs(h)),n.color(25,0,0),n.color(255,0,0),n.color(255,191,128),n.color(255,255,191),n.color(0,128,255),n.color(0,0,255),n.color(170,0,255),n.color(25,0,25));n.pixels[s]=n.red(p),n.pixels[s+1]=n.green(p),n.pixels[s+2]=n.blue(p),n.pixels[s+3]=255}n.updatePixels(),t&&n.frameCount<=600&&n.save("".concat(String(n.frameCount).padStart(String(600).length,"0"),".png"))}}),"sketch")},58891:function(n,t,r){r.r(t),r.d(t,{linear:function(){return e},easeInQuad:function(){return u},easeOutQuad:function(){return o},easeInOutQuad:function(){return i},easeInCubic:function(){return c},easeOutCubic:function(){return a},easeInOutCubic:function(){return f},easeInQuart:function(){return s},easeOutQuart:function(){return l},easeInOutQuart:function(){return h},easeInQuint:function(){return p},easeOutQuint:function(){return d},easeInOutQuint:function(){return g}});var e=function(n){return n},u=function(n){return n*n},o=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},c=function(n){return n*n*n},a=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},l=function(n){return 1- --n*n*n*n},h=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},p=function(n){return n*n*n*n*n},d=function(n){return 1+--n*n*n*n*n},g=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},87540:function(n,t){t.Z=function(n,t){for(var r=n.constrain(t,0,1),e=arguments.length,u=new Array(e>2?e-2:0),o=2;o<e;o++)u[o-2]=arguments[o];var i=1===r?u.length-2:n.floor(r*(u.length-1)),c=n.map(r,i/(u.length-1),(i+1)/(u.length-1),0,1,!0);return n.lerpColor(u[i],u[i+1],c)}}},function(n){n.O(0,[4035,6995],(function(){return 54787,n(n.s=54787)})),n.O()}]);