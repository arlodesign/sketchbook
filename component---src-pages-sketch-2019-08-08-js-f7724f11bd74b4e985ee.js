(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{uHxE:function(t,n,r){"use strict";r.r(n);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("bHtr");var a=r("q1tI"),e=r.n(a),i=r("Bl7J"),o=r("9VVL");r("PZSu");function s(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c={}.DEV&&!1,u=function(t){var n=[1,2,3,5,8],r=60,a=[],e=[],i=function(){function n(n,a,e){this.x=n*r,this.y=a*r,this.size=e,this.direction=t.random([-1,1]),this.canvasSize=r*e,this.canvas=t.createGraphics(this.canvasSize,this.canvasSize)}return n.prototype.draw=function(){var n=this.x,r=this.y,a=this.size,e=this.canvas,i=this.canvasSize;e.blendMode(t.BLEND),e.background(0),e.blendMode(t.SCREEN),e.push(),e.noStroke(),["red","green","blue"].forEach((function(o,s){e.push(),e.translate(i/2,i/2);var c=t.animLoop.noise2D(t.cos(t.animLoop.theta*(s+1)),n),u=t.animLoop.noise2D(t.sin(t.animLoop.theta*(s+1)),r);e.translate(i*t.map(t.cos(t.animLoop.theta),-1,1,0,c),i*t.map(t.cos(t.animLoop.theta),-1,1,0,u)),e.fill(o);for(var f=0;f<=i;f+=i/a)e.circle(0,0,i/2);e.pop()})),e.pop(),t.image(e,n,r)},n}();t.setup=function(){c&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840);var o=t.floor(t.width/r),u=t.floor(t.height/r);t.createLoop(10,{gif:!!c&&{render:!1,open:!0},noiseRadius:1});for(var f=0;f<t.width/r;f++){a.push([]);for(var h=0;h<t.height/r;h++)a[f].push({x:f,y:h,visited:!1})}for(;(p=[]).concat.apply(p,a).filter((function(t){return!t.visited})).length;){var p,l,v=t.random((l=[]).concat.apply(l,a).filter((function(t){return!t.visited}))),d=v.x,m=v.y;a[d][m].visited||function(){var t=Math.max.apply(Math,n),r=void 0;do{r=!1;for(var c=d;c<t+d;c++)for(var f=m;f<t+m;f++)(d+t>o||m+t>u||a[c][f].visited)&&(r=!0);r&&(t=Math.max.apply(Math,s(n.filter((function(n){return n<t})))))}while(r);e.push(new i(d,m,t));for(var h=d;h<t+d;h++)for(var p=m;p<t+m;p++)a[h][p].visited=!0}()}},t.draw=function(){t.background(0),e.forEach((function(t){return t.draw()}))}};n.default=function(){return e.a.createElement(i.a,null,e.a.createElement(o.a,{sketch:u}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-08-js-f7724f11bd74b4e985ee.js.map