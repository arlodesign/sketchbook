(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{HfDS:function(t,r,n){"use strict";n.r(r);n("pJf4"),n("q8oJ"),n("8npG"),n("YbXK"),n("cFtU"),n("rzGZ"),n("m210"),n("4DPX"),n("q1tI");var e=n("Gmm/"),a=(n("PZSu"),n("qKvR"));function i(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return o(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var s={}.DEV&&!1,c=function(t){var r=[1,2,3,5,8],n=[],e=[],a=function(){function r(r,n,e){this.x=60*r,this.y=60*n,this.size=e,this.rotate=t.random([t.TWO_PI,t.HALF_PI]),this.direction=t.random([-1,1]),this.canvasSize=60*e,this.canvas=t.createGraphics(this.canvasSize,this.canvasSize),this.canvas.strokeCap(t.PROJECT),this.canvas.strokeWeight(2)}return r.prototype.draw=function(){var r=this.x,n=this.y,e=this.size,a=this.rotate,i=this.direction,o=this.canvas,s=this.canvasSize,c=t.map(t.animLoop.noise2D(r,n),-1,1,0,1),u=t.map(t.cos(t.animLoop.theta),-1,1,0,t.TWO_PI*c);o.blendMode(t.BLEND),o.background(255),o.blendMode(t.MULTIPLY),o.push(),o.translate(s/2,s/2),["cyan","magenta","yellow"].forEach((function(r,n){o.push(),o.rotate(a*i+u*(t.TWO_PI/3*(n+1))),o.stroke(r);for(var c=0;c<=s;c+=s/e)o.line(0,0,c,-s),o.line(0,0,c,s),o.line(0,0,-c,-s),o.line(0,0,-c,s);o.pop()})),o.pop(),t.image(o,r,n)},r}();t.setup=function(){s&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840);var o=t.floor(t.width/60),c=t.floor(t.height/60);t.createLoop(10,{gif:!!s&&{render:!1,open:!0},noiseRadius:.1});for(var u=0;u<t.width/60;u++){n.push([]);for(var f=0;f<t.height/60;f++)n[u].push({x:u,y:f,visited:!1})}for(;(h=[]).concat.apply(h,n).filter((function(t){return!t.visited})).length;){var h,p,d=t.random((p=[]).concat.apply(p,n).filter((function(t){return!t.visited}))),l=d.x,v=d.y;n[l][v].visited||function(){var t=Math.max.apply(Math,r),s=void 0;do{s=!1;for(var u=l;u<t+l;u++)for(var f=v;f<t+v;f++)(l+t>o||v+t>c||n[u][f].visited)&&(s=!0);s&&(t=Math.max.apply(Math,i(r.filter((function(r){return r<t})))))}while(s);e.push(new a(l,v,t));for(var h=l;h<t+l;h++)for(var p=v;p<t+v;p++)n[h][p].visited=!0}()}},t.draw=function(){t.background(255),e.forEach((function(t){return t.draw()}))}};r.default=function(t){var r=t.location;return Object(a.c)(e.a,{sketch:c,path:r.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-01-js-82a50446ab640dd16203.js.map