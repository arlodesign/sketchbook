(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{av4u:function(n,t,r){"use strict";r.d(t,"f",(function(){return e})),r.d(t,"j",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return u})),r.d(t,"i",(function(){return c})),r.d(t,"b",(function(){return a})),r.d(t,"g",(function(){return f})),r.d(t,"k",(function(){return d})),r.d(t,"d",(function(){return s})),r.d(t,"h",(function(){return h})),r.d(t,"l",(function(){return p})),r.d(t,"e",(function(){return l}));var e=function(n){return n*n},o=function(n){return n*(2-n)},i=function(n){return n<.5?2*n*n:(4-2*n)*n-1},u=function(n){return n*n*n},c=function(n){return--n*n*n+1},a=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},s=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},h=function(n){return n*n*n*n*n},p=function(n){return 1+--n*n*n*n*n},l=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},lPzi:function(n,t,r){"use strict";r.r(t);var e=r("q1tI"),o=r.n(e),i=r("Bl7J"),u=r("9VVL"),c=(r("PZSu"),r("av4u")),a={}.DEV&&!1,f=function(n){var t=n.random(),r=[],e=0,o=function(){function t(t,r){this.x=t,this.y=r,this.rotate=n.random([0,n.HALF_PI,n.PI,n.HALF_PI+n.PI]),this.rotateDirection=n.random([-1,1]),this.turning=!1,this.offset=n.noise(t,r)*n.TWO_PI,this.thirdLine=n.random()<.5}return t.prototype.draw=function(t){var r=n.animLoop.theta;t&&(this.rotate+=n.QUARTER_PI*this.rotateDirection);var e=n.map(r%n.QUARTER_PI,0,n.QUARTER_PI,0,1);n.push(),n.translate(this.x+30,this.y+30),n.rotate(n.map(Object(c.e)(e),0,1,this.rotate,this.rotate+n.QUARTER_PI*this.rotateDirection)),n.strokeWeight(30),n.line(0,0,-30,-30),n.line(0,0,30,30),this.thirdLine&&n.line(0,0,-30,30),n.pop()},t}();n.setup=function(){n.createCanvas(660,840),n.colorMode(n.HSB,1),n.stroke(t,.8,.7),n.createLoop(15,{gif:!!a&&{render:!1,open:!0}});for(var e=0;e<n.width;e+=60)for(var i=0;i<n.height;i+=60)r.push(new o(e,i))},n.draw=function(){n.blendMode(n.BLEND),n.background(1-t,1,1),n.blendMode(n.DARKEST),r.forEach((function(t){return t.draw(n.animLoop.theta%n.QUARTER_PI<=e)})),e=n.animLoop.theta%n.QUARTER_PI}};t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(u.a,{sketch:f}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-16-js-b9fb68d9cab661c69807.js.map