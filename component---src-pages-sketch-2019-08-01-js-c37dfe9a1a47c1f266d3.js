(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{HfDS:function(t,n,r){"use strict";r.r(n);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo");var a=r("q1tI"),e=r.n(a),i=r("Bl7J"),o=r("9VVL");r("PZSu");function s(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c={}.DEV&&!1,h=function(t){var n=[1,2,3,5,8],r=60,a=[],e=[],i=function(){function n(n,a,e){this.x=n*r,this.y=a*r,this.size=e,this.rotate=t.random([t.TWO_PI,t.HALF_PI]),this.direction=t.random([-1,1]),this.canvasSize=r*e,this.canvas=t.createGraphics(this.canvasSize,this.canvasSize),this.canvas.strokeCap(t.PROJECT),this.canvas.strokeWeight(2)}return n.prototype.draw=function(){var n=this.x,r=this.y,a=this.size,e=this.rotate,i=this.direction,o=this.canvas,s=this.canvasSize,c=t.map(t.animLoop.noise2D(n,r),-1,1,0,1),h=t.map(t.cos(t.animLoop.theta),-1,1,0,t.TWO_PI*c);o.blendMode(t.BLEND),o.background(255),o.blendMode(t.MULTIPLY),o.push(),o.translate(s/2,s/2),["cyan","magenta","yellow"].forEach((function(n,r){o.push(),o.rotate(e*i+h*(t.TWO_PI/3*(r+1))),o.stroke(n);for(var c=0;c<=s;c+=s/a)o.line(0,0,c,-s),o.line(0,0,c,s),o.line(0,0,-c,-s),o.line(0,0,-c,s);o.pop()})),o.pop(),t.image(o,n,r)},n}();t.setup=function(){c&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840);var o=t.floor(t.width/r),h=t.floor(t.height/r);t.createLoop(10,{gif:!!c&&{render:!1,open:!0},noiseRadius:.1});for(var f=0;f<t.width/r;f++){a.push([]);for(var u=0;u<t.height/r;u++)a[f].push({x:f,y:u,visited:!1})}for(;(p=[]).concat.apply(p,a).filter((function(t){return!t.visited})).length;){var p,l,v=t.random((l=[]).concat.apply(l,a).filter((function(t){return!t.visited}))),d=v.x,y=v.y;a[d][y].visited||function(){var t=Math.max.apply(Math,n),r=void 0;do{r=!1;for(var c=d;c<t+d;c++)for(var f=y;f<t+y;f++)(d+t>o||y+t>h||a[c][f].visited)&&(r=!0);r&&(t=Math.max.apply(Math,s(n.filter((function(n){return n<t})))))}while(r);e.push(new i(d,y,t));for(var u=d;u<t+d;u++)for(var p=y;p<t+y;p++)a[u][p].visited=!0}()}},t.draw=function(){t.background(255),e.forEach((function(t){return t.draw()}))}};n.default=function(){return e.a.createElement(i.a,null,e.a.createElement(o.a,{sketch:h}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-01-js-c37dfe9a1a47c1f266d3.js.map