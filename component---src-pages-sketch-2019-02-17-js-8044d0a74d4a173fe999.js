(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{JRrc:function(i,t,o){"use strict";o("n0hJ");t.a=function(i,t){void 0===t&&(t=.5);var o=i.width*i.height*.02;i.push();for(var n=0;n<o;n++)i.fill(n%2?"rgba(0, 0, 0, "+t+")":"rgba(255, 255, 255, "+t+")"),i.noStroke(),i.ellipse(i.randomGaussian(i.width/2,i.width/3),i.randomGaussian(i.height/2,i.height/3),1/(i.pixelDensity()/2));i.pop()}},"jm+d":function(i,t,o){"use strict";o.r(t);o("n0hJ"),o("q1tI");var n=o("Gmm/"),a=o("JRrc"),e=o("qKvR"),r=function(i){var t=[];function o(){return{position:i.createVector(i.randomGaussian(i.width/2,i.width/15),i.randomGaussian(i.height/2,i.height/15)),velocity:i.createVector(i.random(-.1,.1),i.random(-.1,.1)),acceleration:i.createVector(i.random(-.1,.1),i.random(-.1,.1))}}i.setup=function(){i.createCanvas(660,840),t=new Array(50).fill().map((function(i){return o()})),i.background(0)},i.draw=function(){t.forEach((function(n,a){var e=n.position,r=n.velocity,c=n.acceleration;t[a].position=e.add(r.add(c)),(e.x<0||e.x>i.width||e.y<0||e.y>i.height)&&(t[a]=o())}));var n=t.map((function(i){return{position:i.position,reached:!1}}));n[0].reached=!0;for(var e=function(){var t=2*i.dist(0,0,i.width,i.height),o=void 0,a=void 0;n.forEach((function(e,r){e.reached&&n.forEach((function(n,c){if(!n.reached){var h=i.dist(e.position.x,e.position.y,n.position.x,n.position.y);h<t&&(t=h,o=r,a=c)}}))})),i.stroke(255*i.cos(i.frameCount/100),i.map(i.dist(i.width/2,i.height/2,n[a].position.x,n[a].position.y),0,i.dist(0,0,i.width/2,i.height/2),64,0)),i.line(n[o].position.x,n[o].position.y,n[a].position.x,n[a].position.y),n[a].reached=!0};n.filter((function(i){return i.reached})).length<n.length;)e();Object(a.a)(i,.02),i.frameCount>800&&i.noLoop()}};t.default=function(i){var t=i.location;return Object(e.c)(n.a,{sketch:r,path:t.pathname})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-17-js-8044d0a74d4a173fe999.js.map