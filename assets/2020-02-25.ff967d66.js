"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[207],{4510:function(n,t,e){var r=e(94035),o=e.n(r),i=e(45456),u=e.n(i),a=e(58891);function c(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}window.p5=o(),u()(),new(o())((function(n){var t=n.getURLParams().render,e=n.random(1/3),r=n.shuffle([e,e+1/3,e+2/3]),o=200,i=[],u=function(){function t(e,r){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=r,this.dir=n.createVector(0,0),this.vel=n.createVector(0,0),this.pos=n.createVector(e,r)}var e,r;return e=t,(r=[{key:"move",value:function(){this.prevPos={x:this.pos.x,y:this.pos.y};var t=n.animLoop.noise2D(this.x/1200,this.y/1200,{radius:2*(1-n.animLoop.progress)});this.dir.x=n.sin(n.animLoop.theta)*t,this.dir.y=n.cos(n.animLoop.theta)*t,this.vel=this.dir.copy(),this.vel.mult(2),this.pos.add(this.vel)}},{key:"draw",value:function(){this.move(),n.line(this.prevPos.x,this.prevPos.y,this.pos.x,this.pos.y)}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();n.setup=function(){n.pixelDensity(2),n.frameRate(30),n.createCanvas(n.windowWidth,n.windowHeight),n.colorMode(n.HSL,1),n.background(n.random(r),.2,.8),n.createLoop(120,{gif:!!t&&{render:!1,open:!0}}),i=Array(3).fill().map((function(){return Array(o).fill().map((function(t,e){return new u(n.random(n.width/o*e,n.width/o*(e+1)),n.random(n.height/o*e,n.height/o*(e+1)))}))}))},n.draw=function(){var e=n.animLoop.progress,o=(0,a.easeInQuad)(-2*e*e+2*e);i.forEach((function(t,e){n.strokeWeight((e+1)/2),n.stroke(r[e],1,e/3,o),t.forEach((function(n){return n.draw()}))})),n.frameCount%100==0&&console.info("".concat(n.floor(100*e),"%")),t||3600!==n.frameCount||(console.info("100%"),n.noLoop())},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},58891:function(n,t,e){e.r(t),e.d(t,{linear:function(){return r},easeInQuad:function(){return o},easeOutQuad:function(){return i},easeInOutQuad:function(){return u},easeInCubic:function(){return a},easeOutCubic:function(){return c},easeInOutCubic:function(){return s},easeInQuart:function(){return f},easeOutQuart:function(){return h},easeInOutQuart:function(){return d},easeInQuint:function(){return p},easeOutQuint:function(){return l},easeInOutQuint:function(){return w}});var r=function(n){return n},o=function(n){return n*n},i=function(n){return n*(2-n)},u=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},s=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},h=function(n){return 1- --n*n*n*n},d=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},p=function(n){return n*n*n*n*n},l=function(n){return 1+--n*n*n*n*n},w=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}},function(n){n.O(0,[4035,5456],(function(){return 4510,n(n.s=4510)})),n.O()}]);