(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{410:function(t,n,a){"use strict";a.r(n);var e=a(10),o=(a(0),a(443)),i=(a(448),{}.DEV&&!1),r=function(t){var n=60,a=[],e=function(){function a(a,e){this.x=a+n/2,this.y=e+n/2,this.rotate=t.random([0,t.HALF_PI])}return a.prototype.draw=function(){t.push(),t.translate(this.x,this.y),t.rotate(this.rotate);for(var a=-n/2;a<n/2;a+=n/7)t.strokeWeight(t.map(a,-n/2,n/2,t.map(t.sin(t.animLoop.theta),-1,1,5,1),t.map(t.sin(t.animLoop.theta),-1,1,1,5))),t.line(a,n/2,n/2,a),t.line(-a,-n/2,-n/2,-a);t.pop()},a}();t.setup=function(){i&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840),t.createLoop(5,{gif:!!i&&{render:!1,open:!0},noiseRadius:.1});for(var o=0;o<t.width;o+=n)for(var r=0;r<t.height;r+=n)a.push(new e(o,r))},t.draw=function(){t.background(255),a.forEach(function(t){return t.draw()})}};n.default=function(t){var n=t.location;return Object(e.c)(o.a,{sketch:r,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-29-js-802abe94a9115fbfa444.js.map