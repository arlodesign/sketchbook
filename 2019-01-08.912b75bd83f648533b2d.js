(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{15:function(r,n,e){"use strict";function t(r){if(1===r)return!1;if(2===r)return!0;for(var n=2;n<r;n++)if(r%n==0)return!1;return!0}e.d(n,"a",(function(){return t}))},77:function(r,n,e){"use strict";e.r(n);var t=e(0),o=e.n(t),i=e(15);new o.a((function(r){var n,e,t,o=1,c=[],a=!0;r.setup=function(){for(r.createCanvas(r.windowWidth,r.windowHeight),r.background(255),n=r.floor(r.random(5,8));!Object(i.a)(o);)o=r.floor(r.random(20*n,25*n));var a=r.width/2/n;e=a/n,t=r.width/2-e;for(var u=function(e){c=c.concat(Array.from(Array(o*(e+1)),(function(i,c){var u=r.map(c*n,0,o,0,r.TWO_PI),f=r.constrain(r.randomGaussian((e*a+(e+1)*a)/2,a/n+r.noise(u)*n),0,t);return{vector:r.createVector(r.width/2+r.cos(u)*f,r.height/2+r.sin(u)*f),reached:!1}})))},f=0;f<n;f++)u(f);c[r.floor(r.random(o))].reached=!0},r.draw=function(){r.push(),r.stroke(a?"red":255),r.strokeWeight(1),c.filter((function(r){return!r.reached})).forEach((function(n){var e=n.vector;return r.point(e.x,e.y)})),r.pop();var n,e,o=c.filter((function(r){return r.reached})),i=t;r.strokeWeight(2),c.forEach((function(t,c){t.reached||o.forEach((function(o){var a=o.vector,u=r.dist(a.x,a.y,t.vector.x,t.vector.y);u<i&&(i=u,e=c,n=a)}))})),r.line(n.x,n.y,c[e].vector.x,c[e].vector.y),c[e].reached=!0,c.filter((function(r){return r.reached})).length===c.length&&r.noLoop()},r.mousePressed=function(){a=!a},r.windowResized=function(){r.resizeCanvas(r.windowWidth,r.windowHeight)}}),"sketch")}},[[77,0,1]]]);