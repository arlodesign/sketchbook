(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{412:function(t,a,i){"use strict";i.r(a);var n=i(10),e=(i(0),i(442)),o=(i(447),{}.DEV&&!1),r=function(t){var a=[1,2,3,5,8],i=60,n=[],e=[],r=function(){function a(a,n,e){this.x=a*i,this.y=n*i,this.size=e,this.rotate=t.random([t.TWO_PI,t.HALF_PI]),this.direction=t.random([-1,1]),this.canvasSize=i*e,this.canvas=t.createGraphics(this.canvasSize,this.canvasSize),this.canvas.strokeCap(t.PROJECT),this.canvas.strokeWeight(2)}return a.prototype.draw=function(){var a=this.x,i=this.y,n=this.size,e=this.rotate,o=this.direction,r=this.canvas,s=this.canvasSize,c=t.map(t.animLoop.noise2D(a,i),-1,1,0,1),h=t.map(t.cos(t.animLoop.theta),-1,1,0,t.TWO_PI*c);r.blendMode(t.BLEND),r.background(255),r.blendMode(t.MULTIPLY),r.push(),r.translate(s/2,s/2),["cyan","magenta","yellow"].forEach(function(a,i){r.push(),r.rotate(e*o+h*(t.TWO_PI/3*(i+1))),r.stroke(a);for(var c=0;c<=s;c+=s/n)r.line(0,0,c,-s),r.line(0,0,c,s),r.line(0,0,-c,-s),r.line(0,0,-c,s);r.pop()}),r.pop(),t.image(r,a,i)},a}();t.setup=function(){o&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840);var s=t.floor(t.width/i),c=t.floor(t.height/i);t.createLoop(10,{gif:!!o&&{render:!1,open:!0},noiseRadius:.1});for(var h=0;h<t.width/i;h++){n.push([]);for(var p=0;p<t.height/i;p++)n[h].push({x:h,y:p,visited:!1})}for(;(f=[]).concat.apply(f,n).filter(function(t){return!t.visited}).length;){var f,u,d=t.random((u=[]).concat.apply(u,n).filter(function(t){return!t.visited})),v=d.x,l=d.y;n[v][l].visited||function(){var t=Math.max.apply(Math,a),i=void 0;do{i=!1;for(var o=v;o<t+v;o++)for(var h=l;h<t+l;h++)(v+t>s||l+t>c||n[o][h].visited)&&(i=!0);i&&(t=Math.max.apply(Math,a.filter(function(a){return a<t})))}while(i);e.push(new r(v,l,t));for(var p=v;p<t+v;p++)for(var f=l;f<t+l;f++)n[p][f].visited=!0}()}},t.draw=function(){t.background(255),e.forEach(function(t){return t.draw()})}};a.default=function(t){var a=t.location;return Object(n.c)(e.a,{sketch:r,path:a.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-01-js-039212456ea629ea17b7.js.map