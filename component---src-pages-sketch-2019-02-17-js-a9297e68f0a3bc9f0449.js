(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{243:function(i,t,o){"use strict";o.r(t);o(346);var n=o(12),e=(o(0),o(345)),r=o(357),a=function(i){var t=[];function o(){return{position:i.createVector(i.randomGaussian(i.width/2,i.width/15),i.randomGaussian(i.height/2,i.height/15)),velocity:i.createVector(i.random(-.1,.1),i.random(-.1,.1)),acceleration:i.createVector(i.random(-.1,.1),i.random(-.1,.1))}}i.setup=function(){i.createCanvas(660,840),t=new Array(50).fill().map(function(i){return o()}),i.background(0)},i.draw=function(){t.forEach(function(n,e){var r=n.position,a=n.velocity,c=n.acceleration;t[e].position=r.add(a.add(c)),(r.x<0||r.x>i.width||r.y<0||r.y>i.height)&&(t[e]=o())});var n=t.map(function(i){return{position:i.position,reached:!1}});n[0].reached=!0;for(var e=function(){var t=2*i.dist(0,0,i.width,i.height),o=void 0,e=void 0;n.forEach(function(r,a){r.reached&&n.forEach(function(n,c){if(!n.reached){var s=i.dist(r.position.x,r.position.y,n.position.x,n.position.y);s<t&&(t=s,o=a,e=c)}})}),i.stroke(255*i.cos(i.frameCount/100),i.map(i.dist(i.width/2,i.height/2,n[e].position.x,n[e].position.y),0,i.dist(0,0,i.width/2,i.height/2),64,0)),i.line(n[o].position.x,n[o].position.y,n[e].position.x,n[e].position.y),n[e].reached=!0};n.filter(function(i){return i.reached}).length<n.length;)e();Object(r.a)(i,.02),i.frameCount>800&&i.noLoop()}};t.default=function(i){var t=i.location;return Object(n.c)(e.a,{sketch:a,path:t.pathname})}},346:function(i,t,o){var n=o(9);n(n.P,"Array",{fill:o(347)}),o(67)("fill")},347:function(i,t,o){"use strict";var n=o(34),e=o(100),r=o(18);i.exports=function(i){for(var t=n(this),o=r(t.length),a=arguments.length,c=e(a>1?arguments[1]:void 0,o),s=a>2?arguments[2]:void 0,h=void 0===s?o:e(s,o);h>c;)t[c++]=i;return t}},357:function(i,t,o){"use strict";o(346);t.a=function(i,t){void 0===t&&(t=.5);var o=i.width*i.height*.02;console.log(o),i.push();for(var n=0;n<o;n++)i.fill(n%2?"rgba(0, 0, 0, "+t+")":"rgba(255, 255, 255, "+t+")"),i.noStroke(),i.ellipse(i.randomGaussian(i.width/2,i.width/3),i.randomGaussian(i.height/2,i.height/3),1/(i.pixelDensity()/2));i.pop()}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-17-js-a9297e68f0a3bc9f0449.js.map