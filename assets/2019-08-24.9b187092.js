"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5927],{13328:function(t,n,e){var r=e(94035),i=e.n(r),o=e(17738),a=e(61025);function h(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e(96995);var s=process.env.DEV&&!1;new(i())((function(t){var n,e,r=20,i=function(){function n(e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.centerX=e,this.centerY=r,this.x=e,this.y=r,this.dist=t.random(t.width/10),this.dir=t.random([1,-1]),this.offset=t.random(t.TWO_PI)}var e,r;return e=n,(r=[{key:"update",value:function(){var n=t.animLoop,e=n.noise2D,r=n.theta,i=(0,a.ZP)(this.centerX,this.centerY,(this.offset+r)*this.dir,this.dist*e(this.x/1e3,this.y/1e3)),o=i.x,h=i.y;this.x=o,this.y=h}},{key:"getArray",value:function(){return[this.x,this.y]}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),n}();t.setup=function(){t.pixelDensity(1),t.frameRate(30),t.createCanvas(t.windowWidth,t.windowHeight),t.createLoop(30,{gif:!!s&&{render:!1,open:!0},noiseDetail:.5}),e=[[-t.width/2+r,-t.width/2+r],[t.width/2-r,-t.width/2+r],[t.width/2-r,t.width/2-r],[-t.width/2+r,t.width/2-r]],n=new Array(10).fill().map((function(){return new i(t.random.apply(t,h(e[3])),t.random.apply(t,h(e[3])))}))},t.draw=function(){var i=t.animLoop.theta;t.background(255),n.forEach((function(t){return t.update()})),t.translate(t.width/2,t.height/2);var a=new o.X(n.map((function(t){return t.getArray()}))).voronoi(e);a.forEach((function(n,o){var u=t.createGraphics(t.width-r,t.width-r),c=t.createGraphics(t.width-r,t.width-r);u.fill(255),c.fill(0),[u,c].forEach((function(e){e.strokeWeight(r),e.strokeJoin(t.BEVEL),e.translate(u.width/2,u.height/2),e.beginShape(),n.forEach((function(t){return e.vertex.apply(e,h(t))})),e.endShape(t.CLOSE)})),u.rotate((o+1)*(t.TWO_PI/a.length)+i);for(var s=-t.width/2;s<2*t.width;)u.line(-t.width,s-t.width,t.width,s-t.width),s+=60;var f=u.get();f.mask(c),t.image(f,e[0][0]-10,e[0][1]-10)})),t.noFill(),t.strokeWeight(r),t.square.apply(t,h(e[0]).concat([t.width-40]))},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch")},61025:function(t,n,e){e.d(n,{Y2:function(){return r},C$:function(){return i},vy:function(){return o}});var r=function(t,n,e){return t+Math.cos(n)*e},i=function(t,n,e){return t+Math.sin(n)*e},o=function(t,n,e,r,i){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=t+Math.cos(e)*r,h=n+Math.sin(e)*i;return o?[a,h]:{x:a,y:h}};n.ZP=function(t,n,e,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],h=r(t,e,o),u=i(n,e,o);return a?[h,u]:{x:h,y:u}}}},function(t){t.O(0,[4035,6995,7738],(function(){return 13328,t(t.s=13328)})),t.O()}]);