"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5514],{85932:function(t,e,n){var i=n(94035);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}new(n.n(i)())((function(t){var e,n,i=[],r=1,o=0,h=1500,c=function(){function i(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;s(this,i),this.distance=a,this.angle=t.frameCount/r,this.r=t.constrain(t.noise(this.angle)*e,n,e),this._setXY()}var o,h;return o=i,(h=[{key:"_setXY",value:function(){this.x=t.width/2+t.cos(this.angle)*this.distance,this.y=t.height/2+t.sin(this.angle)*this.distance}},{key:"setDistance",value:function(t){this.distance=t,this._setXY()}},{key:"increaseDistance",value:function(){this.distance+=1,this._setXY()}},{key:"isOnCanvas",value:function(){return this.x>this.r&&this.x<t.width-this.r&&this.y>this.r&&this.y<t.height-this.r}},{key:"draw",value:function(){t.ellipse(this.x,this.y,2*this.r)}}])&&a(o.prototype,h),Object.defineProperty(o,"prototype",{writable:!1}),i}();t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight),e=t.random(t.width/4,t.width/3),n=5,i.push(new c),t.fill(0),t.stroke(0),i[0].r=e,i[0].draw()},t.draw=function(){t.background(255),e===n&&o===h&&t.noLoop(),i.forEach((function(t){return t.draw()})),o<h&&(t.push(),t.noStroke(),t.fill(255),t.rect(0,0,80,30),t.fill(0),t.text("".concat(o,"/").concat(h),10,20),t.pop());var s=new c;for(s.setDistance(i[0].r+s.r),o<h&&(t.push(),t.stroke("red"),t.strokeWeight(1),t.line(t.width/2,t.height/2,t.width/2+t.cos(s.angle)*t.height,t.height/2+t.sin(s.angle)*t.height),t.pop());i.some((function(e){return t.dist(s.x,s.y,e.x,e.y)<s.r+e.r}));)s.increaseDistance();s.isOnCanvas()?(i.push(s),e>n&&(r+=5),o=0):(e=t.max(e-.1,n),r=e>n?t.max(1,r-1):r,o++)},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Be patient. Reload page for a different variation."}},function(t){t.O(0,[4035],(function(){return 85932,t(t.s=85932)})),t.O()}]);