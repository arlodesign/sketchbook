"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[7175],{36183:function(n,e,r){var t=r(94035),u=r.n(t),o=r(45456),i=r.n(o),c=r(58891);window.p5=u(),i()(),new(u())((function(n){var e=n.getURLParams().render,r=[];n.setup=function(){n.pixelDensity(1),n.frameRate(30),n.createCanvas(540,540),n.background(255),n.noSmooth(),n.createLoop(40,{gif:!!e&&{render:!1,open:!0,fileName:"2020-07-18.gif"},noiseRadius:.3}),n.colorMode(n.HSB,1);var t=n.random();r=[n.color((t+.4)%1,.5,.7),n.color((t+.6)%1,.3,.7),n.color(t,.5,1),n.color(t,.5,.5)].map((function(e){return{r:n.red(e),g:n.green(e),b:n.blue(e)}})),n.colorMode(n.RGB,255)},n.draw=function(){var e=n.animLoop.noise2D,t=function(e){return(0,c.easeInOutQuart)(.5*n.sin(e/.01)+.5)};n.loadPixels();for(var u=0;u<n.width;u++)for(var o=0;o<n.height;o++){var i=4*(u+o*n.width),a=r[3];[t((e(u/500,o/500)+1)/2),t((e(u/100,o/200)+1)/2),t((e(u/200,o/200)+1)/2)].forEach((function(n,e){n<.5&&(a=r[e])})),n.pixels[i]=a.r,n.pixels[i+1]=a.g,n.pixels[i+2]=a.b,n.pixels[i+3]=255}n.updatePixels()}}),"sketch")},58891:function(n,e,r){r.r(e),r.d(e,{linear:function(){return t},easeInQuad:function(){return u},easeOutQuad:function(){return o},easeInOutQuad:function(){return i},easeInCubic:function(){return c},easeOutCubic:function(){return a},easeInOutCubic:function(){return f},easeInQuart:function(){return s},easeOutQuart:function(){return l},easeInOutQuart:function(){return d},easeInQuint:function(){return p},easeOutQuint:function(){return h},easeInOutQuint:function(){return b}});var t=function(n){return n},u=function(n){return n*n},o=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},c=function(n){return n*n*n},a=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},l=function(n){return 1- --n*n*n*n},d=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},p=function(n){return n*n*n*n*n},h=function(n){return 1+--n*n*n*n*n},b=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}},function(n){n.O(0,[4035,5456],(function(){return 36183,n(n.s=36183)})),n.O()}]);