"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[7861],{39458:function(t,n,e){var o=e(94035),r=e.n(o),i=e(61025);function a(t,n,e){return a=c()?Reflect.construct:function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&u(r,e.prototype),r},a.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,n){return u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},u(t,n)}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function f(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}new(r())((function(t){var n=t.random(20,80),e=30,o=[],r=function(){function n(e,o,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.x=e,this.y=o,this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.position=t.createVector(this.x,this.y)}var e,o;return e=n,(o=[{key:"move",value:function(){this.prev={x:this.position.x,y:this.position.y},this.velocity.add(t.createVector(t.map(t.noise(this.position.x/300,this.position.y/200,t.frameCount/400),0,1,-.1,.1),t.map(t.noise(this.position.x/200,this.position.y/300,t.frameCount/400),0,1,-.1,.1))),this.velocity.mult(.98,.98),this.position.add(this.velocity)}}])&&f(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),n}();t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight);for(var e=0;e<t.TWO_PI;e+=t.TWO_PI/50)o.push(a(r,function(t){if(Array.isArray(t))return s(t)}(c=(0,i.ZP)(t.width,.666*t.height,e,100,!0))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(c)||function(t,n){if(t){if("string"==typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,n):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var c;t.colorMode(t.HSB,100),t.background(n,80,20),t.noFill(),t.blendMode(t.HARD_LIGHT)},t.draw=function(){t.stroke(t.map(t.cos(t.frameCount/50),-1,1,n-20,n+20),80,t.map(t.sin(t.frameCount/200),-1,1,20,100),e),t.beginShape(),o.forEach((function(n){n.move(),t.curveVertex(n.position.x,n.position.y)})),t.endShape(t.CLOSE),e-=.01,console.log(e),e<=0&&t.noLoop()},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Reload page for a different variation."},61025:function(t,n,e){e.d(n,{Y2:function(){return o},C$:function(){return r},vy:function(){return i}});var o=function(t,n,e){return t+Math.cos(n)*e},r=function(t,n,e){return t+Math.sin(n)*e},i=function(t,n,e,o,r){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=t+Math.cos(e)*o,c=n+Math.sin(e)*r;return i?[a,c]:{x:a,y:c}};n.ZP=function(t,n,e,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=o(t,e,i),u=r(n,e,i);return a?[c,u]:{x:c,y:u}}}},function(t){t.O(0,[4035],(function(){return 39458,t(t.s=39458)})),t.O()}]);