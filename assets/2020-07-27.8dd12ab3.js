"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[8717],{35680:function(e,r,n){var t=n(94035),o=n.n(t),i=n(45456),a=n.n(i);function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}window.p5=o(),a()(),new(o())((function(e){var r=e.getURLParams().render,n=e.random(),t=e.shuffle([[(n+.4)%1,.333],[(n+.6)%1,.666],[n,1]]),o=function(r){return e.map(e.sin(e.sin(r/(e.PI*(1/30)))/(.1*e.PI)),-1,1,0,1)},i=0;e.setup=function(){e.pixelDensity(1),e.frameRate(30),e.createCanvas(r?400:200,r?400:200),e.background(255),e.noSmooth(),e.createLoop(40,{gif:!!r&&{render:!1,open:!0},noiseRadius:.7}),e.colorMode(e.HSL,1),i=e.width/2},e.draw=function(){var r,n=e.animLoop.noise2D;e.loadPixels();for(var a=0;a<e.width;a++)for(var u=0;u<e.height;u++){var c=4*(a+u*e.width),l=u%t.length,f=e.constrain(1*[o(n(a/100,u/500)),o(n(a/400,u/500)),o(n(a/700,u/500))][l]-e.dist(e.width/2,e.height/2,a,u)/i,0,1),p=e.color.apply(e,(r=t[l],function(e){if(Array.isArray(e))return s(e)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,r){if(e){if("string"==typeof e)return s(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([f]));e.pixels[c]=e.red(p),e.pixels[c+1]=e.green(p),e.pixels[c+2]=e.blue(p),e.pixels[c+3]=255}e.updatePixels()}}),"sketch")}},function(e){e.O(0,[4035,5456],(function(){return 35680,e(e.s=35680)})),e.O()}]);