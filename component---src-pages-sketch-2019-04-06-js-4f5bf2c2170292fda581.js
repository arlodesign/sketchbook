(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{258:function(o,n,t){"use strict";t.r(n);t(274);var i=t(9),a=(t(0),t(276)),r=function(o){var n=function(){function n(n){this.location=[n,0],this.noiseVal=o.random([o.random(0,20),o.random(80,100)])}var t=n.prototype;return t.update=function(){this.location[1]=o.frameCount%o.height,this.location[0]+=o.map(o.noise(this.noiseVal,this.location[1],o.frameCount),0,1,-1,1)},t.draw=function(){o.noStroke(),o.fill(this.noiseVal,75,90,10),o.rect.apply(o,this.location.concat([.5,100]))},n}(),t=[];o.setup=function(){o.createCanvas(660,840),o.background(32),o.colorMode(o.HSB,100),o.blendMode(o.DIFFERENCE),o.rectMode(o.CENTER);for(var i=-100;i<o.width+100;i+=5)t.push(new n(i))},o.draw=function(){t.forEach(function(o){o.draw(),o.update()}),o.frameCount>3*o.height&&o.noLoop()}};n.default=function(o){var n=o.location;return Object(i.c)(a.a,{sketch:r,path:n.pathname,description:""})}},274:function(o,n,t){var i=t(12);i(i.P,"Array",{fill:t(275)}),t(35)("fill")},275:function(o,n,t){"use strict";var i=t(28),a=t(78),r=t(16);o.exports=function(o){for(var n=i(this),t=r(n.length),e=arguments.length,c=a(e>1?arguments[1]:void 0,t),u=e>2?arguments[2]:void 0,s=void 0===u?t:a(u,t);s>c;)n[c++]=o;return n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-06-js-4f5bf2c2170292fda581.js.map