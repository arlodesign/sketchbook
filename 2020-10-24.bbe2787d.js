(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{11:function(t,n,r){"use strict";n.a=function(t,n){for(var r=t.constrain(n,0,1),e=arguments.length,o=new Array(e>2?e-2:0),a=2;a<e;a++)o[a-2]=arguments[a];var i=1===r?o.length-2:t.floor(r*(o.length-1)),c=t.map(r,i/(o.length-1),(i+1)/(o.length-1),0,1,!0);return t.lerpColor(o[i],o[i+1],c)}},482:function(t,n,r){"use strict";r.r(n);var e=r(0),o=r.n(e),a=(r(3),r(11));function i(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}new o.a((function(t){var n,r=t.getURLParams().render,e=t.getURLParams().letter||t.random("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),o=[],c=[];t.preload=function(){n=t.loadFont("/assets/SairaStencilOne-Regular.b3b0c25f.ttf")},t.setup=function(){t.pixelDensity(1),t.frameRate(r?1:30),t.createCanvas(r?540:t.floor(135),r?540:t.floor(135)),t.background(255),t.noSmooth(),t.createLoop(10*(r?60:1),{noiseRadius:2}),c=n.textToPoints(e,0,t.height,1.5*t.height,{sampleFactor:.05}),o=[t.color("red"),t.color("white"),t.color("blue")]},t.draw=function(){var n=t.animLoop,l=n.progress,s=(n.theta,n.noise1D),u=n.noise2D,f=t.sin(2*t.PI*l-t.PI/2)/2+.5;t.background(255),t.loadPixels();for(var p=function(n){for(var r=function(r){var e=4*(r+n*t.width),l=c.map((function(e){return{x:e.x+s(r/100)*(t.width/2)*f,y:e.y+s(n/100)*(t.width/2)*f}})),p=Math.min.apply(Math,i(l.map((function(e){return t.dist(r,n,e.x,e.y)})))),d=a.a.apply(void 0,[t,t.abs(u(r/p/50,n/p/50))].concat(i(o)));t.pixels[e]=t.red(d),t.pixels[e+1]=t.green(d),t.pixels[e+2]=t.blue(d),t.pixels[e+3]=255},e=0;e<t.width;e++)r(e)},d=0;d<t.height;d++)p(d);t.updatePixels(),r&&t.frameCount<=10*(r?60:1)&&(t.frameCount%100==0&&console.info("".concat(t.ceil(100*l),"%")),t.save("".concat(e,"_").concat(String(t.frameCount).padStart(String(10*(r?60:1)).length,"0"),".png")))}}),"sketch")}},[[482,0,1]]]);