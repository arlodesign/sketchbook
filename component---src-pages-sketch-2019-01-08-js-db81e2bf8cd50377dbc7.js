(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"kb/5":function(r,t,e){"use strict";e.r(t);e("XfO3"),e("HEwt"),e("q1tI");var n=e("Gmm/");function o(r){if(1===r)return!1;if(2===r)return!0;for(var t=2;t<r;t++)if(r%t==0)return!1;return!0}var a=e("qKvR"),c=function(r){var t,e,n,a=1,c=[],i=!0;r.setup=function(){for(r.createCanvas(660,840),r.background(255),t=r.floor(r.random(5,8));!o(a);)a=r.floor(r.random(20*t,25*t));var i=r.width/2/t;e=i/t,n=r.width/2-e;for(var f=function(e){c=c.concat(Array.from(Array(a*(e+1)),(function(o,c){var f=r.map(c*t,0,a,0,r.TWO_PI),u=r.constrain(r.randomGaussian((e*i+(e+1)*i)/2,i/t+r.noise(f)*t),0,n);return{vector:r.createVector(r.width/2+r.cos(f)*u,r.height/2+r.sin(f)*u),reached:!1}})))},u=0;u<t;u++)f(u);c[r.floor(r.random(a))].reached=!0},r.draw=function(){r.push(),r.stroke(i?"red":255),r.strokeWeight(1),c.filter((function(r){return!r.reached})).forEach((function(t){var e=t.vector;return r.point(e.x,e.y)})),r.pop();var t,e,o=c.filter((function(r){return r.reached})),a=n;r.strokeWeight(2),c.forEach((function(n,c){n.reached||o.forEach((function(o){var i=o.vector,f=r.dist(i.x,i.y,n.vector.x,n.vector.y);f<a&&(a=f,e=c,t=i)}))})),r.line(t.x,t.y,c[e].vector.x,c[e].vector.y),c[e].reached=!0,c.filter((function(r){return r.reached})).length===c.length&&r.noLoop()},r.mousePressed=function(){i=!i}};t.default=function(r){var t=r.location;return Object(a.c)(n.a,{sketch:c,path:t.pathname,description:" Be patient. Reload page for a different variation. Click sketch to toggle the vertices. "})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-08-js-db81e2bf8cd50377dbc7.js.map