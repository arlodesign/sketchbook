(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{183:function(t,i,n){"use strict";n.r(i);n(298);var s=n(9),e=(n(0),n(297)),r=function(t){var i,n,s=[],e=1,r=0,a=function(){function s(s){void 0===s&&(s=0),this.distance=s,this.angle=t.frameCount/e,this.r=t.constrain(t.noise(this.angle)*i,n,i),this._setXY()}var r=s.prototype;return r._setXY=function(){this.x=t.width/2+t.cos(this.angle)*this.distance,this.y=t.height/2+t.sin(this.angle)*this.distance},r.setDistance=function(t){this.distance=t,this._setXY()},r.increaseDistance=function(){this.distance+=1,this._setXY()},r.isOnCanvas=function(){return this.x>this.r&&this.x<t.width-this.r&&this.y>this.r&&this.y<t.height-this.r},r.draw=function(){t.ellipse(this.x,this.y,2*this.r)},s}();t.setup=function(){t.createCanvas(660,840),i=t.random(t.width/4,t.width/3),n=5,s.push(new a),t.fill(0),t.stroke(0),s[0].r=i,s[0].draw()},t.draw=function(){t.background(255),i===n&&1500===r&&t.noLoop(),s.forEach(function(t){return t.draw()}),r<1500&&(t.push(),t.noStroke(),t.fill(255),t.rect(0,0,80,30),t.fill(0),t.text(r+"/1500",10,20),t.pop());var h=new a;for(h.setDistance(s[0].r+h.r),r<1500&&(t.push(),t.stroke("red"),t.strokeWeight(1),t.line(t.width/2,t.height/2,t.width/2+t.cos(h.angle)*t.height,t.height/2+t.sin(h.angle)*t.height),t.pop());s.some(function(i){return t.dist(h.x,h.y,i.x,i.y)<h.r+i.r});)h.increaseDistance();h.isOnCanvas()?(s.push(h),i>n&&(e+=5),r=0):(i=t.max(i-.1,n),e=i>n?t.max(1,e-1):e,r++)}};i.default=function(t){var i=t.location;return Object(s.c)(e.a,{sketch:r,path:i.pathname,description:"Be patient. Reload page for a different variation."})}},298:function(t,i,n){var s=n(12);s(s.P,"Array",{fill:n(299)}),n(35)("fill")},299:function(t,i,n){"use strict";var s=n(28),e=n(78),r=n(16);t.exports=function(t){for(var i=s(this),n=r(i.length),a=arguments.length,h=e(a>1?arguments[1]:void 0,n),o=a>2?arguments[2]:void 0,c=void 0===o?n:e(o,n);c>h;)i[h++]=t;return i}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-30-js-3f2900039ac0c5d8f7d7.js.map