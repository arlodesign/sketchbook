(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{292:function(t,i,n){"use strict";n.r(i);n(180);var s=n(0),e=(n(1),n(255)),a=function(t){var i,n,s=[],e=1,a=0,h=function(){function s(s){void 0===s&&(s=0),this.distance=s,this.angle=t.frameCount/e,this.r=t.constrain(t.noise(this.angle)*i,n,i),this._setXY()}var a=s.prototype;return a._setXY=function(){this.x=t.width/2+t.cos(this.angle)*this.distance,this.y=t.height/2+t.sin(this.angle)*this.distance},a.setDistance=function(t){this.distance=t,this._setXY()},a.increaseDistance=function(){this.distance+=1,this._setXY()},a.isOnCanvas=function(){return this.x>this.r&&this.x<t.width-this.r&&this.y>this.r&&this.y<t.height-this.r},a.draw=function(){t.ellipse(this.x,this.y,2*this.r)},s}();t.setup=function(){t.createCanvas(660,840),i=t.random(t.width/4,t.width/3),n=5,s.push(new h),t.fill(0),t.stroke(0),s[0].r=i,s[0].draw()},t.draw=function(){t.background(255),i===n&&1500===a&&t.noLoop(),s.forEach((function(t){return t.draw()})),a<1500&&(t.push(),t.noStroke(),t.fill(255),t.rect(0,0,80,30),t.fill(0),t.text(a+"/1500",10,20),t.pop());var r=new h;for(r.setDistance(s[0].r+r.r),a<1500&&(t.push(),t.stroke("red"),t.strokeWeight(1),t.line(t.width/2,t.height/2,t.width/2+t.cos(r.angle)*t.height,t.height/2+t.sin(r.angle)*t.height),t.pop());s.some((function(i){return t.dist(r.x,r.y,i.x,i.y)<r.r+i.r}));)r.increaseDistance();r.isOnCanvas()?(s.push(r),i>n&&(e+=5),a=0):(i=t.max(i-.1,n),e=i>n?t.max(1,e-1):e,a++)}};i.default=function(t){var i=t.location;return Object(s.c)(e.a,{sketch:a,path:i.pathname,description:"Be patient. Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-30-js-f0ed84547bd53a708a0c.js.map