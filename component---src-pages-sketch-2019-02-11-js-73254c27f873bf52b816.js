(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{271:function(t,n,r){"use strict";r.r(n);r(420);var s=r(10),i=(r(0),r(418)),o=function(t){var n,r,s,i=[function(n){return 240*t.abs(t.sin(n))},function(n){return 240*t.abs(t.cos(n))},function(n){return 240*t.abs(t.tan(n))},function(n){return 240*t.abs(t.sin(n+t.HALF_PI))},function(n){return 240*t.abs(t.cos(n+t.HALF_PI))},function(n){return 240*t.abs(t.tan(n+t.HALF_PI))},function(n){return 240*t.abs(t.sin(-n))},function(n){return 240*t.abs(t.cos(-n))},function(n){return 240*t.abs(t.tan(-n))},function(n){return 240*t.abs(t.sin(-n+t.HALF_PI))},function(n){return 240*t.abs(t.cos(-n+t.HALF_PI))},function(n){return 240*t.abs(t.tan(-n+t.HALF_PI))}],o=function(){function n(n,r,s){this.centx=n,this.centy=r,this.radius=s,this.cf=[t.random(i),t.random(i),t.random(i)]}var r=n.prototype;return r.getColor=function(){return t.color(this.cf[0](t.random(t.TAU)),this.cf[1](t.random(t.TAU)),this.cf[2](t.random(t.TAU)))},r.draw=function(){t.fill(this.getColor()),t.noStroke();var n=t.TWO_PI/6;t.beginShape();for(var r=t.PI/6;r<t.TWO_PI;r+=n){var s=this.centx+t.cos(r)*this.radius,i=this.centy+t.sin(r)*this.radius;t.vertex(s,i)}t.endShape(t.CLOSE)},n}(),a=function(){function n(n){this.cols=t.ceil(t.width/(t.sqrt(3)*n)),this.rows=t.ceil(t.height/(3*n/2))+1,this.radius=n,this.grid=[],this._makeGrid(),console.log(this.cols,this.rows)}var r=n.prototype;return r._makeGrid=function(){for(var n=t.sqrt(3)*this.radius,r=this.radius,s=0;s<this.rows;s++){this.grid.push([]);for(var i=0;i<this.cols;i++)this.grid[s].push(new o(n,r,this.radius)),n+=this.radius*t.sqrt(3);r+=3*this.radius/2,n=(s+1)%2==0?t.floor(t.sqrt(3)*this.radius):t.floor(this.radius*t.sqrt(3)/2)}},r.draw=function(){for(var t=0;t<this.rows;t++)for(var n=0;n<this.cols;n++)this.grid[t][n].draw()},n}();t.setup=function(){t.createCanvas(660,840),t.background(127),t.blendMode(t.DIFFERENCE),t.translate(-20,-20),n=new a(10),r=new a(15),s=new a(20),n.draw(),r.draw(),s.draw()}};n.default=function(t){var n=t.location;return Object(s.c)(i.a,{sketch:o,path:n.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-11-js-73254c27f873bf52b816.js.map