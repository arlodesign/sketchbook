(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{CjsR:function(t,n,i){"use strict";i.r(n);i("bHtr");var r=i("q1tI"),e=i.n(r),a=i("Bl7J"),o=i("9VVL"),s=(i("PZSu"),i("av4u")),c=30,u=2,h={}.DEV&&!1,d=function(t){var n=Array(3).fill().map((function(){return t.random(.3,.5)})),i=[],r=[],e=function(){function i(i,r){this.x=i,this.y=r,this.rotate=t.random()<n[0]?0:t.HALF_PI,this.direction=t.random([1,-1]),this.prevMod=0,this.canvas=t.createGraphics(c,c),this.canvas.stroke(255)}return i.prototype.draw=function(){var n=t.animLoop.theta,i=t.map(n%t.HALF_PI,0,t.HALF_PI,0,1);n%t.HALF_PI<=this.prevMod&&(this.rotate+=t.HALF_PI*this.direction),this.canvas.background(0),this.canvas.push(),this.canvas.translate(this.canvas.width/2,this.canvas.height/2),this.canvas.rotate(t.map(Object(s.e)(i),0,1,this.rotate,this.rotate+t.HALF_PI*this.direction)),this.canvas.line(-this.canvas.width/2,-this.canvas.height/2,this.canvas.width/2,this.canvas.height/2),this.canvas.pop(),t.blendMode(t.SCREEN),t.image(this.canvas,this.x,this.y),t.blendMode(t.BLEND),this.prevMod=n%t.HALF_PI},i}(),a=function(){function n(n,i){this.x=n,this.y=i,this.slide=0,this.direction=0,this.prevMod=0,n===c*u?this.direction=1:n===t.width-u*c-c?this.direction=-1:this.direction=t.random([1,-1])}return n.prototype.draw=function(){var n=t.animLoop.theta,i=t.map(n%t.HALF_PI,0,t.HALF_PI,0,1);n%t.HALF_PI<=this.prevMod&&(this.x=this.x+c*this.direction,this.direction=-this.direction);var r=t.map(Object(s.e)(i),0,1,this.x,this.x+c*this.direction);t.line(r,this.y,r+c,this.y),this.prevMod=n%t.HALF_PI},n}();t.setup=function(){t.createCanvas(660,840),t.noFill(),t.stroke(255),t.createLoop(20,{gif:!!h&&{render:!1,open:!0}});for(var o=u*c;o<t.width-u*c;o+=c)for(var s=u*c;s<=t.height-u*c;s+=c)t.random()<n[1]&&s<t.height-u*c&&i.push(new e(o,s)),t.random()<n[2]&&r.push(new a(o,s))},t.draw=function(){t.background(0),i.forEach((function(t){return t.draw()})),r.forEach((function(t){return t.draw()}))}};n.default=function(){return e.a.createElement(a.a,null,e.a.createElement(o.a,{sketch:d}),e.a.createElement("p",null,"Inspired by"," ",e.a.createElement("a",{href:"https://albersfoundation.org/art/anni-albers/weavings/#slide13"},"Anni Albers"),"."))}},av4u:function(t,n,i){"use strict";i.d(n,"f",(function(){return r})),i.d(n,"j",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return o})),i.d(n,"i",(function(){return s})),i.d(n,"b",(function(){return c})),i.d(n,"g",(function(){return u})),i.d(n,"k",(function(){return h})),i.d(n,"d",(function(){return d})),i.d(n,"h",(function(){return f})),i.d(n,"l",(function(){return p})),i.d(n,"e",(function(){return v}));var r=function(t){return t*t},e=function(t){return t*(2-t)},a=function(t){return t<.5?2*t*t:(4-2*t)*t-1},o=function(t){return t*t*t},s=function(t){return--t*t*t+1},c=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},u=function(t){return t*t*t*t},h=function(t){return 1- --t*t*t*t},d=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},f=function(t){return t*t*t*t*t},p=function(t){return 1+--t*t*t*t*t},v=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-13-js-599429adc20b072c5578.js.map