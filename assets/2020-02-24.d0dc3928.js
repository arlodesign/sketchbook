"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[6549],{45897:function(t,n,r){var e=r(94035),a=r.n(e),i=(r(96995),r(61025)),o=r(58891);function u(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function s(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function c(t,n,r){return n&&s(t.prototype,n),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}new(a())((function(t){var n,r=t.getURLParams().render,e=t.floor(45*t.sqrt(3)),a=e/15,s=t.createGraphics(e,90);s.stroke(0),s.fill(0),s.beginShape(),s.translate(s.width/2,s.height/2);for(var f=0;f<t.TWO_PI;f+=t.TWO_PI/6)s.vertex.apply(s,function(t){if(Array.isArray(t))return h(t)}(n=(0,i.ZP)(0,0,f+t.TWO_PI/12,45,!0))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(t,n){if(t){if("string"==typeof t)return h(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());s.endShape();var l,v,d,p,m=[],w=[],g=0,y=function(){function n(r,a){u(this,n),this.x=r,this.y=a,this.rotate=t.random([0,1,2,3,4,5].map((function(n){return t.TWO_PI/6*n}))),this.dir=t.random([1,-1]),this.turning=!1,this.canvas=t.createGraphics(t.floor(e),t.floor(90)),this.canvas.stroke(0),this.canvas.fill(0),this.canvas.noSmooth()}return c(n,[{key:"draw",value:function(n){var r=t.animLoop.theta;n&&(this.rotate+=t.TWO_PI/6*this.dir);var i=t.map(r%(t.TWO_PI/6),0,t.TWO_PI/6,0,1);this.canvas.background(255),this.canvas.push(),this.canvas.translate(this.canvas.width/2,this.canvas.height/2),this.canvas.rotate(t.map((0,o.easeInOutQuint)(i),0,1,this.rotate,this.rotate+t.TWO_PI/6*this.dir));for(var u=0;u<45;u+=a)this.canvas.line(u,-45,u,45),u>0&&this.canvas.line(-u,-45,-u,45);this.canvas.pop();var c=this.canvas.get();c.mask(s),t.image(c,this.x-e/2,this.y-45)}}]),n}(),b=function(){function n(){u(this,n),this.canvas=t.createGraphics(t.floor(d-e),t.floor(d-e)),this.canvas.noSmooth(),this.canvas.stroke(0),this.canvas.noFill(),this.mask=t.createGraphics(t.floor(d-e),t.floor(d-e)),this.mask.fill(0),this.mask.circle(this.mask.width/2,this.mask.height/2,this.mask.width)}return c(n,[{key:"draw",value:function(){var n=t.animLoop,r=(n.noise2D,n.theta);this.canvas.background(255);for(var e=0;e<this.canvas.height;e+=a)this.canvas.line(0,e,this.canvas.width,e);var i=this.canvas.get();i.mask(this.mask),t.push(),t.blendMode(t.MULTIPLY),t.translate(t.width/2,t.height/2),t.rotate(-r),t.image(i,-this.canvas.width/2,-this.canvas.height/2),t.pop()}}]),n}();t.setup=function(){t.pixelDensity(1),t.frameRate(30),t.createCanvas(t.windowWidth,t.windowHeight),t.createLoop(30,{gif:!!r&&{render:!1,open:!0},noiseRadius:.1}),l=t.floor((t.width-e/2)/e),v=t.floor((t.width-22.5)/67.5),d=l*e+e/2,p=67.5*v+22.5;for(var n=0;n<l;n++)for(var a=0;a<v;a++){var i=n*e+(a%2?e:e/2)+(t.width-d)/2,o=90*a*.75+45+(t.height-p)/2;m.push(new y(i,o))}w=new b},t.draw=function(){t.background(255),m.forEach((function(n){return n.draw(t.animLoop.theta%(t.TWO_PI/6)<=g)})),g=t.animLoop.theta%(t.TWO_PI/6),w.draw()},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch")},58891:function(t,n,r){r.r(n),r.d(n,{linear:function(){return e},easeInQuad:function(){return a},easeOutQuad:function(){return i},easeInOutQuad:function(){return o},easeInCubic:function(){return u},easeOutCubic:function(){return s},easeInOutCubic:function(){return c},easeInQuart:function(){return h},easeOutQuart:function(){return f},easeInOutQuart:function(){return l},easeInQuint:function(){return v},easeOutQuint:function(){return d},easeInOutQuint:function(){return p}});var e=function(t){return t},a=function(t){return t*t},i=function(t){return t*(2-t)},o=function(t){return t<.5?2*t*t:(4-2*t)*t-1},u=function(t){return t*t*t},s=function(t){return--t*t*t+1},c=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},h=function(t){return t*t*t*t},f=function(t){return 1- --t*t*t*t},l=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},v=function(t){return t*t*t*t*t},d=function(t){return 1+--t*t*t*t*t},p=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},61025:function(t,n,r){r.d(n,{Y2:function(){return e},C$:function(){return a},vy:function(){return i}});var e=function(t,n,r){return t+Math.cos(n)*r},a=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,a){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=t+Math.cos(r)*e,u=n+Math.sin(r)*a;return i?[o,u]:{x:o,y:u}};n.ZP=function(t,n,r,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(t,r,i),s=a(n,r,i);return o?[u,s]:{x:u,y:s}}}},function(t){t.O(0,[4035,6995],(function(){return 45897,t(t.s=45897)})),t.O()}]);