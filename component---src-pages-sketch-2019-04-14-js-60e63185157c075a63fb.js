(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{268:function(t,i,e){"use strict";e.r(i);e(302);var r=e(9),n=(e(0),e(301)),o=e(317),s=function(t){var i,e,r=60,n=[1,2,3,5,8,13,21],s=[],a=function(){function i(i,e,n){this.x=i*r,this.y=e*r,this.size=n*r,t.random()<.3?this.arc():this.triangle()}var e=i.prototype;return e.arc=function(){t.push(),t.translate(this.x+this.size/2,this.y+this.size/2),t.rotate(t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI])),t.arc(-this.size/2,-this.size/2,2*this.size,2*this.size,0,t.HALF_PI),t.pop()},e.triangle=function(){t.push(),t.translate(this.x+this.size/2,this.y+this.size/2),t.rotate(t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI])),t.beginShape(),t.vertex(-this.size/2,-this.size/2),t.vertex(this.size/2,this.size/2),t.vertex(-this.size/2,this.size/2),t.endShape(t.CLOSE),t.pop()},i}();t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100);var n=t.random(100);t.background(n,25,25),t.fill(100-n,50,75),t.noStroke(),i=t.floor(t.width/r),e=t.floor(t.height/r);for(var o=0;o<i;o++){s.push([]);for(var a=0;a<e;a++)s[o].push({x:o,y:a,visited:!1})}},t.draw=function(){var r,h,c=t.random((r=[]).concat.apply(r,s).filter(function(t){return!t.visited})),u=c.x,f=c.y;s[u][f].visited||function(){var t,r=Math.max.apply(Math,n);do{t=!1;for(var o=u;o<r+u;o++)for(var h=f;h<r+f;h++)(u+r>i||f+r>e||s[o][h].visited)&&(t=!0);t&&(r=Math.max.apply(Math,n.filter(function(t){return t<r})))}while(t);new a(u,f,r);for(var c=u;c<r+u;c++)for(var p=f;p<r+f;p++)s[c][p].visited=!0}(),(h=[]).concat.apply(h,s).filter(function(t){return!t.visited}).length||(Object(o.a)(t,.1),t.noLoop())}};i.default=function(t){var i=t.location;return Object(r.c)(n.a,{sketch:s,path:i.pathname,description:""})}},302:function(t,i,e){var r=e(12);r(r.P,"Array",{fill:e(303)}),e(36)("fill")},303:function(t,i,e){"use strict";var r=e(28),n=e(79),o=e(16);t.exports=function(t){for(var i=r(this),e=o(i.length),s=arguments.length,a=n(s>1?arguments[1]:void 0,e),h=s>2?arguments[2]:void 0,c=void 0===h?e:n(h,e);c>a;)i[a++]=t;return i}},317:function(t,i,e){"use strict";e(302);i.a=function(t,i){void 0===i&&(i=.5);var e=t.width*t.height*.02;console.log(e),t.push();for(var r=0;r<e;r++)t.fill(r%2?"rgba(0, 0, 0, "+i+")":"rgba(255, 255, 255, "+i+")"),t.noStroke(),t.ellipse(t.randomGaussian(t.width/2,t.width/3),t.randomGaussian(t.height/2,t.height/3),1/(t.pixelDensity()/2));t.pop()}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-14-js-60e63185157c075a63fb.js.map