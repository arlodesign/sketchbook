(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{419:function(t,a,i){"use strict";i.r(a);i(454);var n=i(10),o=(i(0),i(452)),e=(i(455),{}.DEV&&!1),r=function(t){var a=[1,2,3,5,8],i=60,n=[],o=[],r=function(){function a(a,n,o){this.x=a*i,this.y=n*i,this.size=o,this.direction=t.random([-1,1]),this.canvasSize=i*o,this.canvas=t.createGraphics(this.canvasSize,this.canvasSize)}return a.prototype.draw=function(){var a=this.x,i=this.y,n=this.size,o=(this.direction,this.canvas),e=this.canvasSize,r=t.map(t.animLoop.noise2D(a,i),-1,1,0,1);t.map(t.cos(t.animLoop.theta),-1,1,0,t.TWO_PI*r);o.blendMode(t.BLEND),o.background(0),o.blendMode(t.SCREEN),o.push(),o.noStroke(),["red","green","blue"].forEach(function(r,s){o.push(),o.translate(e/2,e/2);var c=t.animLoop.noise2D(t.cos(t.animLoop.theta*(s+1)),a),p=t.animLoop.noise2D(t.sin(t.animLoop.theta*(s+1)),i);o.translate(e*t.map(t.cos(t.animLoop.theta),-1,1,0,c),e*t.map(t.cos(t.animLoop.theta),-1,1,0,p)),o.fill(r);for(var h=0;h<=e;h+=e/n)o.circle(0,0,e/2);o.pop()}),o.pop(),t.image(o,a,i)},a}();t.setup=function(){e&&(t.pixelDensity(1),t.frameRate(30)),t.createCanvas(660,840);var s=t.floor(t.width/i),c=t.floor(t.height/i);t.createLoop(10,{gif:!!e&&{render:!1,open:!0},noiseRadius:1});for(var p=0;p<t.width/i;p++){n.push([]);for(var h=0;h<t.height/i;h++)n[p].push({x:p,y:h,visited:!1})}for(;(f=[]).concat.apply(f,n).filter(function(t){return!t.visited}).length;){var f,u,d=t.random((u=[]).concat.apply(u,n).filter(function(t){return!t.visited})),v=d.x,l=d.y;n[v][l].visited||function(){var t=Math.max.apply(Math,a),i=void 0;do{i=!1;for(var e=v;e<t+v;e++)for(var p=l;p<t+l;p++)(v+t>s||l+t>c||n[e][p].visited)&&(i=!0);i&&(t=Math.max.apply(Math,a.filter(function(a){return a<t})))}while(i);o.push(new r(v,l,t));for(var h=v;h<t+v;h++)for(var f=l;f<t+l;f++)n[h][f].visited=!0}()}},t.draw=function(){t.background(0),o.forEach(function(t){return t.draw()})}};a.default=function(t){var a=t.location;return Object(n.c)(o.a,{sketch:r,path:a.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-08-js-bbb2c365802b0334a25d.js.map