(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{219:function(t,n,o){"use strict";o.r(n);o(74),o(268);var i=o(0),r=o.n(i),e=o(270),a=function(t){var n=[],o=function(){function n(){var n=[function(n){return t.max(15,240*t.abs(t.sin(n)))},function(n){return t.max(15,240*t.abs(t.sin(n+t.PI)))},function(n){return t.max(15,240*t.abs(t.cos(-n)))},function(n){return t.max(15,240*t.abs(t.cos(-n+t.PI)))}];this._cf=[t.random(n),t.random(n),t.random(n)],this.points=new Array(10).fill().map(function(t){return new i})}var o=n.prototype;return o.clr=function(){return t.color(this._cf[0](t.frameCount/1e3),this._cf[1](t.frameCount/1e3),this._cf[2](t.frameCount/1e3),128)},o.draw=function(){var n=this;t.beginShape(),this.points.forEach(function(o,i){var r=o.location;t.vertex(r.x,r.y),n.points[i].move()}),t.endShape(t.CLOSE)},n}(),i=function(){function n(){this.location=t.createVector(t.random(t.width),t.random(t.height)),this._velocity=t.createVector(t.random(-1,1),t.random(-1,1))}return n.prototype.move=function(){this.location.add(this._velocity),(this.location.x>t.width||this.location.x<0)&&(this._velocity.x=-1*this._velocity.x),(this.location.y>t.height||this.location.y<0)&&(this._velocity.y=-1*this._velocity.y)},n}();t.setup=function(){t.createCanvas(660,840),n=new Array(3).fill().map(function(t){return new o})},t.draw=function(){t.background(0),n.forEach(function(n,o){1!==o?(t.noStroke(),t.fill(n.clr())):(t.noFill(),t.strokeWeight(4),t.stroke(n.clr())),n.draw()})}};n.default=function(t){var n=t.location;return r.a.createElement(e.a,{sketch:a,path:n.pathname,description:"Reload page for a different variation."})}},268:function(t,n,o){var i=o(11);i(i.P,"Array",{fill:o(269)}),o(32)("fill")},269:function(t,n,o){"use strict";var i=o(25),r=o(73),e=o(14);t.exports=function(t){for(var n=i(this),o=e(n.length),a=arguments.length,c=r(a>1?arguments[1]:void 0,o),s=a>2?arguments[2]:void 0,u=void 0===s?o:r(s,o);u>c;)n[c++]=t;return n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-06-js-eb9d0695b568769882ad.js.map