(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1:function(n,t,i){"use strict";i.d(t,"c",(function(){return e})),i.d(t,"d",(function(){return r})),i.d(t,"b",(function(){return o}));var e=function(n,t,i){return n+Math.cos(t)*i},r=function(n,t,i){return n+Math.sin(t)*i},o=function(n,t,i,e,r){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],h=n+Math.cos(i)*e,c=t+Math.sin(i)*r;return o?[h,c]:{x:h,y:c}};t.a=function(n,t,i,o){var h=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=e(n,i,o),d=r(t,i,o);return h?[c,d]:{x:c,y:d}}},229:function(n,t,i){"use strict";i.r(t);var e=i(0),r=i.n(e),o=i(1);new r.a((function(n){var t,i,e=["red","green","blue"];n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),t=n.width/20,i=n.width*(1/6),n.strokeWeight(2)},n.draw=function(){n.blendMode(n.BLEND),n.background(0),n.fill(255),n.noStroke(),n.circle(n.width/2,n.height/2,n.width-i/2),n.noFill(),n.blendMode(n.MULTIPLY);for(var r=n.map(n.frameCount%1200,0,1200,0,n.TWO_PI),h=n.map(n.sin(3*r),-1,1,0,n.width/2-i),c=[Object(o.a)(n.width/2,n.height/2,r,h),Object(o.a)(n.width/2,n.height/2,r+n.TWO_PI*(1/3),h),Object(o.a)(n.width/2,n.height/2,r+n.TWO_PI*(2/3),h)],d=function(t){var r=n.lerp(6,n.width-i,t);c.forEach((function(i,o){n.stroke(e[o]);var h=n.lerp(i.x,n.width/2,t),c=n.lerp(i.y,n.height/2,t);n.circle(h,c,r)}))},a=0;a<1;a+=1/t)d(a)},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")}},[[229,0,1]]]);