(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{SpSd:function(e,t,i){"use strict";i.r(t);i("n0hJ"),i("q1tI");var r=i("Gmm/"),o=i("qKvR"),n=function(e){var t,i,r=[],o=!1,n=new Array(30).fill().map((function(e,t){return(t+1)/30}));function a(t){return e.color(255,0,0,t)}e.setup=function(){e.createCanvas(660,840),t=e.ceil(e.random(5))+1,i=e.createImage(e.width,e.height);for(var o=function(i){var o=e.random(n);n=n.filter((function(e){return e!==o})),r.push({r:3*e.HALF_PI,speed:o/e.TWO_PI,size:e.width/t*e.random(.5,1),direction:e.random([1,-1]),lastPoint:null})},a=0;a<t;a++)o()},e.draw=function(){e.background(255),e.frameRate(o?15:30),e.image(i,0,0);var n={x:e.width/2,y:e.height/2};r.forEach((function(s,l){var c=n.x+e.cos(s.r)*(s.size/2),f=n.y+e.sin(s.r)*(s.size/2);if(o){var u=e.map(l,0,t-1,51,255);e.noFill(),e.stroke(255,255,255,u),e.strokeWeight(5),e.ellipse(n.x,n.y,s.size),e.stroke(a(u)),e.strokeWeight(1),e.ellipse(n.x,n.y,s.size),e.noStroke(),e.fill(255,255,255,u),e.ellipse(c,f,l===t-1?12:6),e.fill(a(u)),e.ellipse(c,f,l===t-1?6:3)}if(l===t-1&&s.lastPoint&&c>=0&&c<=e.width&&f>=0&&f<=e.height){for(var d=0;d<1;d+=.01)i.set(e.floor(e.lerp(c,s.lastPoint.x,d)),e.floor(e.lerp(f,s.lastPoint.y,d)),e.color(0));i.updatePixels()}n={x:c,y:f},r[l].lastPoint=n,r[l].r+=s.speed*r[l].direction}))},e.mousePressed=function(){o=!o}};t.default=function(e){var t=e.location;return Object(o.c)(r.a,{sketch:n,path:t.pathname,description:" Reload page for a different variation. Click or tap sketch to toggle guides. "})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-16-js-0ee6626284090fa3fc58.js.map