(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{13:function(n,t,r){"use strict";t.a=function(n,t){for(var r=arguments.length,e=new Array(r>2?r-2:0),u=2;u<r;u++)e[u-2]=arguments[u];var o=1===t?e.length-2:n.floor(t*(e.length-1)),i=n.map(t,o/(e.length-1),(o+1)/(e.length-1),0,1,!0);return n.lerpColor(e[o],e[o+1],i)}},2:function(n,t,r){"use strict";r.r(t),r.d(t,"linear",(function(){return e})),r.d(t,"easeInQuad",(function(){return u})),r.d(t,"easeOutQuad",(function(){return o})),r.d(t,"easeInOutQuad",(function(){return i})),r.d(t,"easeInCubic",(function(){return a})),r.d(t,"easeOutCubic",(function(){return c})),r.d(t,"easeInOutCubic",(function(){return f})),r.d(t,"easeInQuart",(function(){return s})),r.d(t,"easeOutQuart",(function(){return l})),r.d(t,"easeInOutQuart",(function(){return d})),r.d(t,"easeInQuint",(function(){return p})),r.d(t,"easeOutQuint",(function(){return h})),r.d(t,"easeInOutQuint",(function(){return g}));var e=function(n){return n},u=function(n){return n*n},o=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},f=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},s=function(n){return n*n*n*n},l=function(n){return 1- --n*n*n*n},d=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},p=function(n){return n*n*n*n*n},h=function(n){return 1+--n*n*n*n*n},g=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},454:function(n,t,r){"use strict";r.r(t);var e=r(0),u=r.n(e),o=(r(3),r(2)),i=r(13);function a(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return c(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}new u.a((function(n){var t=n.getURLParams().render,r=[n.color(3,0,30),n.color(115,3,192),n.color(236,56,188),n.color(253,239,249),n.color(255,241,251)],e=function(n){return Math.abs((.85*Math.sin(n)+.22*function(n){return n%1}(n/.25))*(.417*Math.sin(n/.139)+.743))},u=0,c=function(){};n.setup=function(){n.pixelDensity(1),n.frameRate(30),n.createCanvas(t?540:360,t?540:360),n.background(r[0]),n.noSmooth(),n.createLoop(20,{noiseRadius:.4}),u=n.floor(n.width/20),c=function(t,r){return 4*(t+r*n.width)}},n.draw=function(){var f=n.animLoop,s=f.progress,l=f.noise2D;n.background(0),n.loadPixels();for(var d=Object(o.easeInOutQuint)(-4*s*s+4*s),p=u;p<=n.width/2;p++)for(var h=function(t){var u=n.dist(p,t,n.width,n.height),o=r;Math.sin(l(p/50,t/50))<0&&(o=r.slice(0,length-1)),Math.sin(l(p/100,t/100))<-.5&&(o=r.slice(0,length-2));var f=i.a.apply(void 0,[n,e(l(p/n.map(d,0,1,u,u/2),t/n.map(d,0,1,u,u/2)))].concat(a(o)));[[p,t],[n.width-p,t]].forEach((function(t){var r=c.apply(void 0,a(t));n.pixels[r]=n.red(f),n.pixels[r+1]=n.green(f),n.pixels[r+2]=n.blue(f),n.pixels[r+3]=255}))},g=u;g<=n.height-u;g++)h(g);n.updatePixels(),t&&n.frameCount<=600&&n.save("".concat(String(n.frameCount).padStart(String(600).length,"0"),".png"))}}),"sketch")}},[[454,0,1]]]);