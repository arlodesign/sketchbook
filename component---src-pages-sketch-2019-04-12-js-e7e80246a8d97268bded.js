(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{314:function(t,r,a){"use strict";a.r(r);var n=a(10),o=(a(0),a(450)),i=function(t){var r=t.random([{GRID:15,LINES:3},{GRID:30,LINES:4},{GRID:60,LINES:5}]),a=r.GRID,n=r.LINES,o=function(){function r(r,a){this.x=r,this.y=a,this.drawFunc=t.random([this.squareH,this.squareV,this.arc,this.triangle]),this.drawFunc()}var o=r.prototype;return o.squareH=function(){t.push(),t.strokeCap(t.SQUARE),t.translate(this.x,this.y);for(var r=0;r<=a;r+=a/n)t.line(0,r-.5,a,r-.5);t.pop()},o.squareV=function(){t.push(),t.strokeCap(t.SQUARE),t.translate(this.x,this.y);for(var r=0;r<=a;r+=a/n)t.line(r-.5,0,r-.5,a);t.pop()},o.arc=function(){t.push(),t.strokeCap(t.PROJECT),t.translate(this.x+a/2,this.y+a/2),t.rotate(t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI]));for(var r=0;r<=2*a;r+=2*a/n)t.arc(-a/2,-a/2,r,r,0,t.HALF_PI);t.pop()},o.triangle=function(){t.push(),t.translate(this.x+a/2,this.y+a/2),t.rotate(t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI]));for(var r=-a/2+a/n;r<=a/2;r+=a/n)t.line(-r-.5,-a/2-.5,a/2-.5,r-.5);t.pop()},r}();t.setup=function(){t.createCanvas(660,840),t.background(255),t.noLoop(),t.noFill(),t.stroke(.5)},t.draw=function(){for(var r=0;r<t.width;r+=a)for(var n=0;n<t.height;n+=a)new o(r,n);t.rect(0,0,t.width,t.height)}};r.default=function(t){var r=t.location;return Object(n.c)(o.a,{sketch:i,path:r.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-12-js-e7e80246a8d97268bded.js.map