(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{291:function(o,n,t){"use strict";t.r(n);t(390);var a=t(7),i=(t(0),t(388)),e=function(o){var n=function(){function n(n){this.location=[n,0],this.noiseVal=o.random([o.random(0,20),o.random(80,100)])}var t=n.prototype;return t.update=function(){this.location[1]=o.frameCount%o.height,this.location[0]+=o.map(o.noise(this.noiseVal,this.location[1],o.frameCount),0,1,-1,1)},t.draw=function(){o.noStroke(),o.fill(this.noiseVal,75,90,10),o.rect.apply(o,this.location.concat([.5,100]))},n}(),t=[];o.setup=function(){o.createCanvas(660,840),o.background(32),o.colorMode(o.HSB,100),o.blendMode(o.DIFFERENCE),o.rectMode(o.CENTER);for(var a=-100;a<o.width+100;a+=5)t.push(new n(a))},o.draw=function(){t.forEach(function(o){o.draw(),o.update()}),o.frameCount>3*o.height&&o.noLoop()}};n.default=function(o){var n=o.location;return Object(a.c)(i.a,{sketch:e,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-06-js-46dfc66caf33061e2292.js.map