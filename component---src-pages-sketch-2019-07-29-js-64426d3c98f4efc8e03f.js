(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{XJAx:function(t,n,e){"use strict";e.r(n);var a=e("q1tI"),r=e.n(a),o=e("Bl7J"),i=e("9VVL"),s=(e("PZSu"),{}.DEV&&!1),u=function(t){var n=60,e=[],a=function(){function e(e,a){this.x=e+n/2,this.y=a+n/2,this.rotate=t.random([0,t.HALF_PI])}return e.prototype.draw=function(){t.push(),t.translate(this.x,this.y),t.rotate(this.rotate);for(var e=-n/2;e<n/2;e+=n/7)t.strokeWeight(t.map(e,-n/2,n/2,t.map(t.sin(t.animLoop.theta),-1,1,5,1),t.map(t.sin(t.animLoop.theta),-1,1,1,5))),t.line(e,n/2,n/2,e),t.line(-e,-n/2,-n/2,-e);t.pop()},e}();t.setup=function(){s&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840),t.createLoop(5,{gif:!!s&&{render:!1,open:!0},noiseRadius:.1});for(var r=0;r<t.width;r+=n)for(var o=0;o<t.height;o+=n)e.push(new a(r,o))},t.draw=function(){t.background(255),e.forEach((function(t){return t.draw()}))}};n.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{sketch:u}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-29-js-64426d3c98f4efc8e03f.js.map