(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{1:function(n,t,r){"use strict";r.d(t,"c",(function(){return e})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return a}));var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},a=function(n,t,r,e,o){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(r)*e,u=t+Math.sin(r)*o;return a?[i,u]:{x:i,y:u}};t.a=function(n,t,r,a){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(n,r,a),c=o(t,r,a);return i?[u,c]:{x:u,y:c}}},11:function(n,t,r){"use strict";t.a=function(n,t){for(var r=n.constrain(t,0,1),e=arguments.length,o=new Array(e>2?e-2:0),a=2;a<e;a++)o[a-2]=arguments[a];var i=1===r?o.length-2:n.floor(r*(o.length-1)),u=n.map(r,i/(o.length-1),(i+1)/(o.length-1),0,1,!0);return n.lerpColor(o[i],o[i+1],u)}},451:function(n,t,r){"use strict";r.r(t);var e=r(0),o=r.n(e),a=(r(3),r(11)),i=r(1);function u(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return c(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}new o.a((function(n){var t,r=n.getURLParams().render,e=n.random(),o=function(n){return function(n){return n%1}(n/.2)*Math.sin(n/.2)*.5+.5},c=[];n.setup=function(){n.pixelDensity(1),n.frameRate(30),n.createCanvas(r?540:360,r?540:360),n.background(255),n.noSmooth(),n.createLoop(40,{noiseRadius:.8}),n.colorMode(n.HSB,1),c=[n.color(e,.6,.2),n.color((e+.4)%1,.8,.8),n.color(e,1,.1),n.color((e+.6)%1,.6,.5)],t=n.floor(n.width/20)},n.draw=function(){var f=n.animLoop,s=f.theta,l=f.noise1D,d=f.noise2D;n.background(e,.1,.1),n.loadPixels();for(var h=function(r){for(var e=function(t){var e=4*(r+t*n.width),f=[1,2,3].map((function(t){return Object(i.a)(n.width/2,n.height/2,(n.TWO_PI/3*t+s)*l(t/100),n.width)})),h=Math.max.apply(Math,u(f.map((function(e){return n.dist(r,t,e.x,e.y)})))),p=a.a.apply(void 0,[n,n.constrain(o(n.abs(d(r/h,t/h))),0,1)].concat(u(c)));n.pixels[e]=n.red(p),n.pixels[e+1]=n.green(p),n.pixels[e+2]=n.blue(p),n.pixels[e+3]=255},f=t;f<n.height-t;f++)e(f)},p=t;p<n.width-t;p++)h(p);n.updatePixels(),r&&n.frameCount<=1200&&n.save("".concat(String(n.frameCount).padStart(String(1200).length,"0"),".png"))}}),"sketch")}},[[451,0,1]]]);