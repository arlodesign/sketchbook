(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{295:function(i,t,e){"use strict";e.r(t);var l=e(9),s=(e(0),e(306)),r=(e(323),function(i){var t,e,l=30,s=[1,4,4,4,4,5,5,5,6,6],r=i.random(100),h=i.color(r,75,100),a=[],c=function(){function t(t,e,s){switch(this.x=t*l,this.y=e*l,this.tileSize=s*l,this.tile=i.createGraphics(this.tileSize,this.tileSize),this.tile.colorMode(i.HSB,100),this.tile.background(h),this.tile.stroke(100-r,25,50),this.tile.strokeCap(i.PROJECT),this.tile.strokeWeight(l/5),this.tile.noFill(),s){case 1:this.drawSmallTile();break;case 4:this.drawTile();break;case 5:this.drawTile(),this.drawBigTile();break;case 6:this.drawTile(),this.drawReallyBigTile()}i.push(),i.translate(this.x+this.tileSize/2,this.y+this.tileSize/2),i.rotate(i.random([0,i.HALF_PI])),i.image(this.tile,-this.tileSize/2,-this.tileSize/2),i.pop()}var e=t.prototype;return e.drawSmallTile=function(){this.tile.arc(0,0,this.tileSize,this.tileSize,0,i.HALF_PI),this.tile.arc(this.tileSize,this.tileSize,this.tileSize,this.tileSize,i.PI,i.HALF_PI+i.PI)},e.drawTile=function(){this.tile.circle(0,0,l/2),this.tile.circle(0,this.tileSize,l/2),this.tile.circle(this.tileSize,0,l/2),this.tile.circle(this.tileSize,this.tileSize,l/2),this.tile.circle(0,0,1.5*l),this.tile.circle(0,this.tileSize,1.5*l),this.tile.circle(this.tileSize,0,1.5*l),this.tile.circle(this.tileSize,this.tileSize,1.5*l),this.tile.circle(this.tileSize/2,this.tileSize/2,l/2)},e.drawBigTile=function(){this.tile.circle(0,0,this.tileSize/2),this.tile.circle(this.tileSize,this.tileSize,this.tileSize/2)},e.drawReallyBigTile=function(){this.tile.circle(0,0,2.5*l),this.tile.circle(this.tileSize,this.tileSize,2.5*l),this.tile.circle(0,this.tileSize,2.5*l),this.tile.circle(this.tileSize,0,2.5*l)},t}();i.setup=function(){i.createCanvas(660,840),i.background(h),t=i.floor(i.width/l),e=i.floor(i.height/l);for(var s=0;s<t;s++){a.push([]);for(var r=0;r<e;r++)a[s].push({x:s,y:r,visited:!1})}},i.draw=function(){var l,r,h=i.random((l=[]).concat.apply(l,a).filter(function(i){return!i.visited})),o=h.x,n=h.y;a[o][n].visited||function(){var i,l=Math.max.apply(Math,s);do{i=!1;for(var r=o;r<l+o;r++)for(var h=n;h<l+n;h++)(o+l>t||n+l>e||a[r][h].visited)&&(i=!0);i&&(l=Math.max.apply(Math,s.filter(function(i){return i<l})))}while(i);new c(o,n,l);for(var u=o;u<l+o;u++)for(var d=n;d<l+n;d++)a[u][d].visited=!0}(),(r=[]).concat.apply(r,a).filter(function(i){return!i.visited}).length||i.noLoop()}});t.default=function(i){var t=i.location;return Object(l.c)(s.a,{sketch:r,path:t.pathname,description:""})}},307:function(i,t,e){var l=e(12);l(l.P,"Array",{fill:e(308)}),e(36)("fill")},308:function(i,t,e){"use strict";var l=e(28),s=e(79),r=e(16);i.exports=function(i){for(var t=l(this),e=r(t.length),h=arguments.length,a=s(h>1?arguments[1]:void 0,e),c=h>2?arguments[2]:void 0,o=void 0===c?e:s(c,e);o>a;)t[a++]=i;return t}},323:function(i,t,e){"use strict";e(307);t.a=function(i,t){void 0===t&&(t=.5);var e=i.width*i.height*.02;console.log(e),i.push();for(var l=0;l<e;l++)i.fill(l%2?"rgba(0, 0, 0, "+t+")":"rgba(255, 255, 255, "+t+")"),i.noStroke(),i.ellipse(i.randomGaussian(i.width/2,i.width/3),i.randomGaussian(i.height/2,i.height/3),1/(i.pixelDensity()/2));i.pop()}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-11-js-99a6ce0cbeb48ba351b8.js.map