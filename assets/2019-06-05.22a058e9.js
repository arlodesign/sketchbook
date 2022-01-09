"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[9285],{78228:function(t,n,e){var r=e(94035),i=e.n(r),o=e(61025);function a(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function s(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,n,e){return n&&c(t.prototype,n),e&&c(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}new(i())((function(t){var n=t.random(20,80),e=[],r=function(){function e(){s(this,e),this.lines=[]}return h(e,[{key:"draw",value:function(e,r,i,o){t.strokeWeight(10),t.stroke(0),t.fill(n,100,100,80),t.triangle(e,r,i,o,t.width/2,t.height/2),this.lines.push([e,r,i,o]),this.lines.length>20&&(this.lines=this.lines.slice(1,20))}},{key:"drawTrails",value:function(){t.noFill(),t.strokeWeight(1),this.lines.forEach((function(e,r){t.stroke(100-n,t.map(r,0,19,0,100),t.map(r,0,19,0,100),t.map(r,0,19,0,100)),t.triangle.apply(t,a(e).concat([t.width/2,t.height/2]))}))}}]),e}(),i=function(){function n(){s(this,n),this.angle=t.random(t.TWO_PI),this.distance=t.random(t.height/2-10),this.speed=t.random([-1,1])*t.random(.001,.01),this.triangle=new r,this.set()}return h(n,[{key:"set",value:function(){this.vertex=(0,o.ZP)(t.width/2,t.height/2,this.angle,this.distance)}},{key:"update",value:function(){this.angle+=this.speed,this.set()}}]),n}();t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight),e=Array.from(Array(10),(function(){return new i})),t.colorMode(t.HSL,100),t.blendMode(t.HARD_LIGHT),t.strokeJoin(t.ROUND)},t.draw=function(){t.background(0);var n=[],r=a(e);for(n.push(r[0]),r.splice(0,1);r.length>0;){for(var i=t.dist(0,0,t.width,t.height),o=void 0,u=void 0,s=0;s<n.length;s++)for(var c=0;c<r.length;c++){var h=n[s].vertex,l=r[c].vertex,f=t.dist(h.x,h.y,l.x,l.y);f<i&&(i=f,o=s,u=c)}e[u].triangle.draw(n[o].vertex.x,n[o].vertex.y,r[u].vertex.x,r[u].vertex.y),n.push(r[u]),r.splice(u,1)}e.forEach((function(t){t.triangle.drawTrails(),t.update()}))},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch")},61025:function(t,n,e){e.d(n,{Y2:function(){return r},C$:function(){return i},vy:function(){return o}});var r=function(t,n,e){return t+Math.cos(n)*e},i=function(t,n,e){return t+Math.sin(n)*e},o=function(t,n,e,r,i){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=t+Math.cos(e)*r,u=n+Math.sin(e)*i;return o?[a,u]:{x:a,y:u}};n.ZP=function(t,n,e,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=r(t,e,o),s=i(n,e,o);return a?[u,s]:{x:u,y:s}}}},function(t){t.O(0,[4035],(function(){return 78228,t(t.s=78228)})),t.O()}]);