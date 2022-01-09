"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5812],{53078:function(n,t,e){var r=e(94035),u=e.n(r),o=(e(96995),e(61025)),i=e(58891),a=e(87540);function c(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}new(u())((function(n){var t,e=n.getURLParams().render,r=function(){function t(e){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.d=e,this.start=n.random(n.TWO_PI),this.direction=n.random([-1,1]),this.speed=n.floor(n.random(1,4))}var e,r;return e=t,(r=[{key:"update",value:function(t){this.loc=(0,o.ZP)(n.width/2,n.height/2,(t*this.speed+this.start)*this.direction,this.d)}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u={red:[],blue:[],green:[]};n.setup=function(){for(var o in n.pixelDensity(1),n.frameRate(30),n.createCanvas(e?540:n.floor(135),e?540:n.floor(135)),n.background(255),n.noSmooth(),n.createLoop(10,{noiseRadius:.5}),u)u.hasOwnProperty(o)&&(u[o]=Array(2).fill().map((function(t,e){return new r(n.width/2/2*(e+1))})));t=n.dist(0,0,n.width,n.height)},n.draw=function(){var r=n.animLoop,o=r.progress,c=r.theta,f=r.noise2D;n.background(255),n.loadPixels(),Object.values(u).forEach((function(n){return n.forEach((function(n){return n.update(c)}))}));for(var s=function(e){for(var r=function(r){var c=4*(r+e*n.width),s={red:0,green:0,blue:0};["red","green","blue"].forEach((function(c,l){var h=u[c].reduce((function(u,o){return u+n.dist(r,e,o.loc.x,o.loc.y)/t}),0)/2,d=(0,i.easeInCubic)(-1*o*o+1*o)*(l+1)*10,p=f((r-n.width/2)/(300+d),(e-n.height/2)/(300+d));p=n.abs((.85*Math.sin(p)+p/.25%1*.22)*(.417*Math.sin(p/.139)+.743)),s[c]=(0,a.Z)(n,h*p,n.color("cyan"),n.color("magenta"),n.color("yellow"),n.color("white"))}));var l=[u.red,u.green,u.blue].flat().reduce((function(u,o){return u+n.dist(r,e,o.loc.x,o.loc.y)/t}),0)/6;n.pixels[c]=n.red(l>.35?0:s.red),n.pixels[c+1]=n.green(l>.35?64:s.green),n.pixels[c+2]=n.blue(l>.35?128:s.blue),n.pixels[c+3]=255},c=0;c<n.width;c++)r(c)},l=0;l<n.height;l++)s(l);n.updatePixels(),n.frameCount%10==0&&console.info("".concat(n.floor(100*o),"%")),e&&n.frameCount<=300&&n.save("".concat(String(n.frameCount).padStart(String(300).length,"0"),".png"))}}),"sketch")},58891:function(n,t,e){e.r(t),e.d(t,{linear:function(){return r},easeInQuad:function(){return u},easeOutQuad:function(){return o},easeInOutQuad:function(){return i},easeInCubic:function(){return a},easeOutCubic:function(){return c},easeInOutCubic:function(){return f},easeInQuart:function(){return s},easeOutQuart:function(){return l},easeInOutQuart:function(){return h},easeInQuint:function(){return d},easeOutQuint:function(){return p},easeInOutQuint:function(){return g}});var r=function(n){return n},u=function(n){return n*n},o=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},l=function(n){return 1- --n*n*n*n},h=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},d=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},g=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},87540:function(n,t){t.Z=function(n,t){for(var e=n.constrain(t,0,1),r=arguments.length,u=new Array(r>2?r-2:0),o=2;o<r;o++)u[o-2]=arguments[o];var i=1===e?u.length-2:n.floor(e*(u.length-1)),a=n.map(e,i/(u.length-1),(i+1)/(u.length-1),0,1,!0);return n.lerpColor(u[i],u[i+1],a)}},61025:function(n,t,e){e.d(t,{Y2:function(){return r},C$:function(){return u},vy:function(){return o}});var r=function(n,t,e){return n+Math.cos(t)*e},u=function(n,t,e){return n+Math.sin(t)*e},o=function(n,t,e,r,u){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(e)*r,a=t+Math.sin(e)*u;return o?[i,a]:{x:i,y:a}};t.ZP=function(n,t,e,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=r(n,e,o),c=u(t,e,o);return i?[a,c]:{x:a,y:c}}}},function(n){n.O(0,[4035,6995],(function(){return 53078,n(n.s=53078)})),n.O()}]);