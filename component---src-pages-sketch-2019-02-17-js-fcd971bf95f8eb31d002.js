(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{260:function(i,o,t){"use strict";t.r(o);t(384);var n=t(7),a=(t(0),t(382)),e=t(391),r=function(i){var o=[];function t(){return{position:i.createVector(i.randomGaussian(i.width/2,i.width/15),i.randomGaussian(i.height/2,i.height/15)),velocity:i.createVector(i.random(-.1,.1),i.random(-.1,.1)),acceleration:i.createVector(i.random(-.1,.1),i.random(-.1,.1))}}i.setup=function(){i.createCanvas(660,840),o=new Array(50).fill().map(function(i){return t()}),i.background(0)},i.draw=function(){o.forEach(function(n,a){var e=n.position,r=n.velocity,c=n.acceleration;o[a].position=e.add(r.add(c)),(e.x<0||e.x>i.width||e.y<0||e.y>i.height)&&(o[a]=t())});var n=o.map(function(i){return{position:i.position,reached:!1}});n[0].reached=!0;for(var a=function(){var o=2*i.dist(0,0,i.width,i.height),t=void 0,a=void 0;n.forEach(function(e,r){e.reached&&n.forEach(function(n,c){if(!n.reached){var h=i.dist(e.position.x,e.position.y,n.position.x,n.position.y);h<o&&(o=h,t=r,a=c)}})}),i.stroke(255*i.cos(i.frameCount/100),i.map(i.dist(i.width/2,i.height/2,n[a].position.x,n[a].position.y),0,i.dist(0,0,i.width/2,i.height/2),64,0)),i.line(n[t].position.x,n[t].position.y,n[a].position.x,n[a].position.y),n[a].reached=!0};n.filter(function(i){return i.reached}).length<n.length;)a();Object(e.a)(i,.02),i.frameCount>800&&i.noLoop()}};o.default=function(i){var o=i.location;return Object(n.c)(a.a,{sketch:r,path:o.pathname})}},391:function(i,o,t){"use strict";t(384);o.a=function(i,o){void 0===o&&(o=.5);var t=i.width*i.height*.02;console.log(t),i.push();for(var n=0;n<t;n++)i.fill(n%2?"rgba(0, 0, 0, "+o+")":"rgba(255, 255, 255, "+o+")"),i.noStroke(),i.ellipse(i.randomGaussian(i.width/2,i.width/3),i.randomGaussian(i.height/2,i.height/3),1/(i.pixelDensity()/2));i.pop()}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-17-js-fcd971bf95f8eb31d002.js.map