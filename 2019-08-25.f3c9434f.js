(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{1:function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return i})),e.d(n,"b",(function(){return o}));var r=function(t,n,e){return t+Math.cos(n)*e},i=function(t,n,e){return t+Math.sin(n)*e},o=function(t,n,e,r,i){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=t+Math.cos(e)*r,u=n+Math.sin(e)*i;return o?[a,u]:{x:a,y:u}};n.a=function(t,n,e,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=r(t,e,o),c=i(n,e,o);return a?[u,c]:{x:u,y:c}}},298:function(t,n,e){"use strict";e.r(n),function(t){var n=e(0),r=e.n(n),i=e(19),o=e(1);e(3);function a(t,n,e){return(a=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return e&&c(i,e.prototype),i}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return h(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return h(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function f(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function d(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,n,e){return n&&d(t.prototype,n),e&&d(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}var p=t.env.DEV&&!1;new r.a((function(t){var n,e,r,u=0,c=function(){function n(r,i){f(this,n);t.animLoop.noise2D;var o=t.noise(r,i);this.centerX=r,this.centerY=i,this.x=r,this.y=i,this.onBoundary=e.has(r)||e.has(i),this.dist=t.map(o,-1,1,0,t.width/10),this.dir=o<0?-1:1,this.offset=t.map(o,-1,1,0,t.width/10)}return l(n,[{key:"update",value:function(){if(!this.onBoundary){var n=t.animLoop,e=n.noise2D,r=n.theta,i=Object(o.a)(this.centerX,this.centerY,(this.offset+r)*this.dir,this.dist*e(this.x/1e3,this.y/1e3)),a=i.x,u=i.y;this.x=a,this.y=u}}},{key:"getArray",value:function(){return[this.x,this.y]}}]),n}(),h=function(){function e(n){f(this,e),this.pts=n.map((function(t){return a(c,s(t))})),this.dir=t.random([1,-1]),this.offset=t.random(t.TWO_PI)}return l(e,[{key:"update",value:function(){var e=this,r=t.animLoop.theta;this.pts.forEach((function(t){return t.update()}));var i=t.createGraphics(t.width-20,t.width-20),o=t.createGraphics(t.width-20,t.width-20);i.background(255),i.noFill(),i.colorMode(t.HSB,1),i.stroke(u,1,1),o.fill(0),i.push(),i.translate(i.width/2,i.height/2),i.rotate((this.offset+r)*this.dir),i.stroke(1-u,1,1),i.strokeWeight(20);for(var a=-t.width/2;a<2*t.width;)i.line(-t.width,a-t.width,t.width,a-t.width),a+=40;i.pop(),[i,o].forEach((function(n){n.strokeWeight(20),n.strokeJoin(t.BEVEL),n.translate(n.width/2,n.height/2),n.beginShape(),e.pts.forEach((function(t){return n.vertex.apply(n,s(t.getArray()))})),n.endShape(t.CLOSE)}));var c=i.get();c.mask(o),t.image(c,n[0][0]-10,n[0][1]-10)}}]),e}();t.setup=function(){t.pixelDensity(1),t.frameRate(30),t.createCanvas(t.windowWidth,t.windowHeight),t.colorMode(t.HSB,1),t.createLoop(30,{gif:!!p&&{render:!1,open:!0},noiseDetail:.5}),n=[[-t.width/2+20,-t.width/2+20],[t.width/2-20,-t.width/2+20],[t.width/2-20,t.width/2-20],[-t.width/2+20,t.width/2-20]],e=new Set(n.flat());var o=new Array(10).fill().map((function(){return[t.random.apply(t,s(n[3])),t.random.apply(t,s(n[3]))]})),a=new i.a(o);r=a.voronoi(n).map((function(t){return new h(t)}))},t.draw=function(){u=t.map(t.sin(t.animLoop.theta),-1,1,0,1),t.background(255),t.translate(t.width/2,t.height/2),r.forEach((function(t){return t.update()})),t.noFill(),t.stroke(u,1,1),t.strokeWeight(20),t.square.apply(t,s(n[0]).concat([t.width-40]))},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="\n        Improved version of yesterday’s. Still pokey in browser, but the GIF it\n        makes is <code>:chefkiss:</code>.\n      "}.call(this,e(5))}},[[298,0,1]]]);