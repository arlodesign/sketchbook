"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[2386],{95924:function(n,t,e){var r=e(94035),o=e.n(r),i=e(45456),u=e.n(i),a=e(58891);function c(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}window.p5=o(),u()(),new(o())((function(n){var t=n.getURLParams().render,e=n.random(),r=[],i=[],u=0,s=function(){function t(e,r,i){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.pos=n.createVector(e,r),this.vel=o().Vector.random2D(),this.acc=n.createVector(),this.prev=null,this.sat=i}var i,a;return i=t,(a=[{key:"update",value:function(){this.pos.add(this.vel),this.vel.add(this.acc)}},{key:"show",value:function(){var t=this;if(n.stroke(e,this.sat,.5,u),this.prev){var o=1e4,i=null;r.forEach((function(e){var r=n.dist(e.x,e.y,t.pos.x,t.pos.y);r<o&&(o=r,i=e)})),n.line(this.pos.x,this.pos.y,i.x,i.y),n.line(this.pos.x,this.pos.y,this.prev.x,this.prev.y)}this.prev={x:this.pos.x,y:this.pos.y}}},{key:"attracted",value:function(t){var e=o().Vector.sub(t,this.pos),r=e.magSq(),i=25/(r=n.min(r,500));e.setMag(i),this.acc=e}}])&&c(i.prototype,a),Object.defineProperty(i,"prototype",{writable:!1}),t}();n.setup=function(){n.pixelDensity(t?1:2),n.frameRate(30),n.createCanvas(n.windowWidth,n.windowHeight),n.colorMode(n.HSB,1),n.background(1-e,.2,1),n.blendMode(n.HARD_LIGHT),n.createLoop(60,{gif:!!t&&{render:!1,open:!0},noiseRadius:.1}),r=Array(10).fill().map((function(t){return n.createVector(n.randomGaussian(n.width/2,n.width/5),n.randomGaussian(n.height/2,n.width/5))})),i=Array(5).fill().map((function(t){return new s(n.random(n.width),n.random(n.height),n.random())}))},n.draw=function(){var e=n.animLoop.progress,o=(0,a.easeOutQuad)(e);u=-2*o*o+2*o,i.forEach((function(n){r.forEach((function(t){n.attracted(t)})),n.update(),n.show()})),n.frameCount%100==0&&console.info("".concat(n.floor(100*e),"%")),t||1800!==n.frameCount||(console.info("100%"),n.noLoop())},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},58891:function(n,t,e){e.r(t),e.d(t,{linear:function(){return r},easeInQuad:function(){return o},easeOutQuad:function(){return i},easeInOutQuad:function(){return u},easeInCubic:function(){return a},easeOutCubic:function(){return c},easeInOutCubic:function(){return s},easeInQuart:function(){return f},easeOutQuart:function(){return h},easeInOutQuart:function(){return d},easeInQuint:function(){return p},easeOutQuint:function(){return l},easeInOutQuint:function(){return w}});var r=function(n){return n},o=function(n){return n*n},i=function(n){return n*(2-n)},u=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},s=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},h=function(n){return 1- --n*n*n*n},d=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},p=function(n){return n*n*n*n*n},l=function(n){return 1+--n*n*n*n*n},w=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}}},function(n){n.O(0,[4035,5456],(function(){return 95924,n(n.s=95924)})),n.O()}]);