"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[4529],{38478:function(n,t,r){var e=r(94035),o=r.n(e),a=r(45456),i=r.n(a),u=r(87540),c=r(61025);function l(n){return function(n){if(Array.isArray(n))return f(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return f(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}window.p5=o(),i()(),new(o())((function(n){var t,r=n.getURLParams().render,e=n.random(),o=[];n.setup=function(){n.pixelDensity(1),n.frameRate(30),n.createCanvas(r?360:200,r?360:200),n.background(255),n.noSmooth(),n.createLoop(40,{noiseRadius:1.2}),n.colorMode(n.HSB,1),o=[n.color(e,1,.8),n.color(e,.1,.1),n.color((e+.4)%1,.5,.3),n.color((e+.6)%1,.3,.5)],t=n.floor(n.width/10)},n.draw=function(){var a=n.animLoop,i=a.theta,f=a.noise,s=a.noise2D;n.background(e,.1,.1),n.loadPixels();for(var h=t;h<n.width-t;h++)for(var d=t;d<n.height-t;d++){var p=4*(h+d*n.width),g=n.dist.apply(n,[h,d].concat(l((0,c.ZP)(n.width/2,n.height/2,i,n.width/2*f(),!0))))+n.width/10,v=u.Z.apply(void 0,[n,n.abs(s(h/g,d/g))].concat(l(o)));n.pixels[p]=n.red(v),n.pixels[p+1]=n.green(v),n.pixels[p+2]=n.blue(v),n.pixels[p+3]=255}n.updatePixels(),r&&n.frameCount<=1200&&n.save("".concat(String(n.frameCount).padStart(String(1200).length,"0"),".png"))}}),"sketch")},87540:function(n,t){t.Z=function(n,t){for(var r=n.constrain(t,0,1),e=arguments.length,o=new Array(e>2?e-2:0),a=2;a<e;a++)o[a-2]=arguments[a];var i=1===r?o.length-2:n.floor(r*(o.length-1)),u=n.map(r,i/(o.length-1),(i+1)/(o.length-1),0,1,!0);return n.lerpColor(o[i],o[i+1],u)}},61025:function(n,t,r){r.d(t,{Y2:function(){return e},C$:function(){return o},vy:function(){return a}});var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},a=function(n,t,r,e,o){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(r)*e,u=t+Math.sin(r)*o;return a?[i,u]:{x:i,y:u}};t.ZP=function(n,t,r,a){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(n,r,a),c=o(t,r,a);return i?[u,c]:{x:u,y:c}}}},function(n){n.O(0,[4035,5456],(function(){return 38478,n(n.s=38478)})),n.O()}]);