(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{290:function(t,e,n){"use strict";n.r(e);n(383);var a=n(13),i=(n(0),n(381)),o=n(382),r=function(t){var e=t.random(100),n=t.random(.03,.07)/t.TWO_PI,a=t.random(.03,.07)/t.TWO_PI,i=t.random(.03,.07)/t.TWO_PI,r=t.random(.03,.07)/t.TWO_PI,c=t.random(.01,.03)/t.TWO_PI,h=0,d=t.PI,u=0,s=t.PI,p=0;t.setup=function(){t.createCanvas(660,840),t.background(64),t.noFill(),t.strokeWeight(5),t.colorMode(t.HSB,100),t.blendMode(t.SOFT_LIGHT)},t.draw=function(){t.beginShape(),t.stroke(e,t.map(t.cos(p),-1,1,0,100,!0),t.map(t.cos(p),-1,1,100,0,!0),10),t.vertex(t.map(t.cos(h),-1,1,20,t.width-20),20,!0),t.quadraticVertex.apply(t,Object(o.a)(t.width/2,t.height/2,p-t.HALF_PI,t.height*t.noise(n/10,i/10,t.frameCount/1e3),!0).concat([t.width-20,t.map(t.sin(d),-1,1,20,t.height-20,!0)])),t.quadraticVertex.apply(t,Object(o.a)(t.width/2,t.height/2,p,t.height*t.noise(n/10,i/10,t.frameCount/1e3),!0).concat([t.map(t.cos(u),-1,1,20,t.width-20,!0),t.height-20])),t.quadraticVertex.apply(t,Object(o.a)(t.width/2,t.height/2,p+t.HALF_PI,t.height*t.noise(n/10,i/10,t.frameCount/1e3),!0).concat([20,t.map(t.sin(s),-1,1,20,t.height-20,!0)])),t.quadraticVertex.apply(t,Object(o.a)(t.width/2,t.height/2,p+t.PI,t.height*t.noise(n/10,i/10,t.frameCount/1e3),!0).concat([t.map(t.cos(h),-1,1,20,t.width-20,!0),20])),t.endShape(t.CLOSE),h+=n,d+=a,u+=i,s+=r,(p+=c)>2*t.TWO_PI&&(t.noLoop(),t.fill(e,10,10),t.noStroke(),t.blendMode(t.BLEND),t.rect(0,0,t.width,40),t.rect(0,t.height-40,t.width,40),t.rect(0,0,40,t.height),t.rect(t.width-40,0,40,t.height))}};e.default=function(t){var e=t.location;return Object(a.c)(i.a,{sketch:r,path:e.pathname,description:"Refresh page for a different variation"})}},382:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"d",function(){return i}),n.d(e,"b",function(){return o});var a=function(t,e,n){return t+Math.cos(e)*n},i=function(t,e,n){return t+Math.sin(e)*n},o=function(t,e,n,a,i,o){void 0===o&&(o=!1);var r=t+Math.cos(n)*a,c=e+Math.sin(n)*i;return o?[r,c]:{x:r,y:c}};e.a=function(t,e,n,o,r){void 0===r&&(r=!1);var c=a(t,n,o),h=i(e,n,o);return r?[c,h]:{x:c,y:h}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-03-js-f58164fcf1d3a57c0b00.js.map