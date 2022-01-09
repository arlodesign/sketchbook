"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[8131],{8812:function(t,n,r){var e=r(94035),i=r.n(e),o=r(58891);function u(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function c(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function a(t,n,r){return n&&c(t.prototype,n),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}new(i())((function(t){var n=t.random(),r=60,e=function(){function e(r,i){u(this,e),this.x=r,this.y=i,this.rotate=t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI]);var o=n*t.floor(t.random(5));this.colors=Array(3).fill().map((function(r,e){return t.color(t.random()<.3?n*t.floor(t.random(5)):o,2.5,5/3*e)})),this.box=t.random([!0,!1])}return a(e,[{key:"draw",value:function(){t.push(),t.translate(this.x+30,this.y+30),t.rotate(this.rotate),t.translate(-30,-30),t.noStroke(),this.box?this.boxes():this.gradient(),t.pop()}},{key:"boxes",value:function(){for(var n=0;n<3;n++)t.fill(this.colors[n]),t.rect(20*n,0,20,r)}},{key:"gradient",value:function(){t.fill(t.lerpColor(this.colors[2],t.color(255),.5)),t.square(0,0,r);for(var n=this.colors[0],e=0;e<r;e++)n.setAlpha(5*(0,o.easeInOutQuad)(e/r)),t.fill(n),t.rect(e,0,1,r)}}]),e}(),i=function(){function r(e){u(this,r),this.margin=90,this.circleWidth=t.width-2*this.margin,this.y=t.lerp(this.margin+this.circleWidth,t.height-this.margin-this.circleWidth,e),this.colorA=t.color(n*t.floor(t.random(5)),5,5,t.random(2.5,5)),this.colorB=t.lerpColor(t.color(n*t.floor(t.random(5),5,5)),t.color(255),t.random()),this.colorB.setAlpha(t.random(1,5)),this.rotate=t.random([0,t.PI]),this.mask=t.createGraphics(this.circleWidth,this.circleWidth),this.mask.noStroke(),this.mask.fill(0),this.mask.circle(this.circleWidth/2,this.circleWidth/2,this.circleWidth)}return a(r,[{key:"draw",value:function(){var n=t.createGraphics(this.circleWidth,this.circleWidth);n.noStroke();for(var r=0;r<this.circleWidth;r++){var e=t.lerpColor(this.colorA,this.colorB,(0,o.easeInOutQuad)(r/this.circleWidth));n.fill(e),n.rect(0,r,this.circleWidth,1)}var i=n.get();i.mask(this.mask),t.push(),t.translate(t.width/2,this.y),t.rotate(this.rotate),t.translate(-this.circleWidth/2,-this.circleWidth/2),t.image(i,0,0),t.pop()}}]),r}(),c=[],s=[];t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight),t.background(255),t.colorMode(t.HSB,5),t.noStroke();for(var n=0;n<t.width;n+=r)for(var o=0;o<t.height;o+=r)c.push(new e(n,o));s.push(new i(0)),s.push(new i(t.random())),s.push(new i(1))},t.draw=function(){c.forEach((function(t){return t.draw()})),t.blendMode(t.HARD_LIGHT),s.forEach((function(t){return t.draw()})),t.noLoop()},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML='\n        Deeply inspired by the work of \n        <Link href="http://www.gfellerhellsgard.com/">Gfeller + Hellsgård</Link>\n        .\n      '},58891:function(t,n,r){r.r(n),r.d(n,{linear:function(){return e},easeInQuad:function(){return i},easeOutQuad:function(){return o},easeInOutQuad:function(){return u},easeInCubic:function(){return c},easeOutCubic:function(){return a},easeInOutCubic:function(){return s},easeInQuart:function(){return h},easeOutQuart:function(){return l},easeInOutQuart:function(){return f},easeInQuint:function(){return d},easeOutQuint:function(){return p},easeInOutQuint:function(){return w}});var e=function(t){return t},i=function(t){return t*t},o=function(t){return t*(2-t)},u=function(t){return t<.5?2*t*t:(4-2*t)*t-1},c=function(t){return t*t*t},a=function(t){return--t*t*t+1},s=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},h=function(t){return t*t*t*t},l=function(t){return 1- --t*t*t*t},f=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},d=function(t){return t*t*t*t*t},p=function(t){return 1+--t*t*t*t*t},w=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}},function(t){t.O(0,[4035],(function(){return 8812,t(t.s=8812)})),t.O()}]);