(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{dije:function(t,n,o){"use strict";o.r(n);o("XfO3"),o("HEwt"),o("a1Th"),o("Btvt"),o("rE2o"),o("ioFf"),o("rGqo"),o("bHtr");var r=o("q1tI"),e=o.n(r),a=o("Bl7J"),i=o("9VVL");function c(t){return function(t){if(Array.isArray(t)){for(var n=0,o=new Array(t.length);n<t.length;n++)o[n]=t[n];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function(t){var n=function(){function n(n){this.location=[n,0],this.noiseVal=t.random([t.random(0,20),t.random(80,100)])}var o=n.prototype;return o.update=function(){this.location[1]=t.frameCount%t.height,this.location[0]+=t.map(t.noise(this.noiseVal,this.location[1],t.frameCount),0,1,-1,1)},o.draw=function(){t.noStroke(),t.fill(this.noiseVal,75,90,10),t.rect.apply(t,c(this.location).concat([.5,100]))},n}(),o=[];t.setup=function(){t.createCanvas(660,840),t.background(32),t.colorMode(t.HSB,100),t.blendMode(t.DIFFERENCE),t.rectMode(t.CENTER);for(var r=-100;r<t.width+100;r+=5)o.push(new n(r))},t.draw=function(){o.forEach((function(t){t.draw(),t.update()})),t.frameCount>3*t.height&&t.noLoop()}};n.default=function(){return e.a.createElement(a.a,null,e.a.createElement(i.a,{sketch:u}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-06-js-e9412f8e64c79d7dd0ac.js.map