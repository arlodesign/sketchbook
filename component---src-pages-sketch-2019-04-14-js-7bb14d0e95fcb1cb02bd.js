(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{316:function(t,i,e){"use strict";e.r(i);e(436);var r=e(10),s=(e(0),e(434)),a=e(448),n=function(t){var i,e,r=60,s=[1,2,3,5,8,13,21],n=[],o=function(){function i(i,e,s){this.x=i*r,this.y=e*r,this.size=s*r,t.random()<.3?this.arc():this.triangle()}var e=i.prototype;return e.arc=function(){t.push(),t.translate(this.x+this.size/2,this.y+this.size/2),t.rotate(t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI])),t.arc(-this.size/2,-this.size/2,2*this.size,2*this.size,0,t.HALF_PI),t.pop()},e.triangle=function(){t.push(),t.translate(this.x+this.size/2,this.y+this.size/2),t.rotate(t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI])),t.beginShape(),t.vertex(-this.size/2,-this.size/2),t.vertex(this.size/2,this.size/2),t.vertex(-this.size/2,this.size/2),t.endShape(t.CLOSE),t.pop()},i}();t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100);var s=t.random(100);t.background(s,25,25),t.fill(100-s,50,75),t.noStroke(),i=t.floor(t.width/r),e=t.floor(t.height/r);for(var a=0;a<i;a++){n.push([]);for(var o=0;o<e;o++)n[a].push({x:a,y:o,visited:!1})}},t.draw=function(){var r,h,c=t.random((r=[]).concat.apply(r,n).filter(function(t){return!t.visited})),p=c.x,u=c.y;n[p][u].visited||function(){var t,r=Math.max.apply(Math,s);do{t=!1;for(var a=p;a<r+p;a++)for(var h=u;h<r+u;h++)(p+r>i||u+r>e||n[a][h].visited)&&(t=!0);t&&(r=Math.max.apply(Math,s.filter(function(t){return t<r})))}while(t);new o(p,u,r);for(var c=p;c<r+p;c++)for(var f=u;f<r+u;f++)n[c][f].visited=!0}(),(h=[]).concat.apply(h,n).filter(function(t){return!t.visited}).length||(Object(a.a)(t,.1),t.noLoop())}};i.default=function(t){var i=t.location;return Object(r.c)(s.a,{sketch:n,path:i.pathname,description:""})}},448:function(t,i,e){"use strict";e(436);i.a=function(t,i){void 0===i&&(i=.5);var e=t.width*t.height*.02;console.log(e),t.push();for(var r=0;r<e;r++)t.fill(r%2?"rgba(0, 0, 0, "+i+")":"rgba(255, 255, 255, "+i+")"),t.noStroke(),t.ellipse(t.randomGaussian(t.width/2,t.width/3),t.randomGaussian(t.height/2,t.height/3),1/(t.pixelDensity()/2));t.pop()}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-14-js-7bb14d0e95fcb1cb02bd.js.map