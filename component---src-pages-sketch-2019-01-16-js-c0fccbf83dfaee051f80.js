(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{197:function(e,t,i){"use strict";i.r(t);i(288);var r=i(9),o=(i(0),i(287)),n=function(e){var t,i,r=[],o=!1,n=new Array(30).fill().map(function(e,t){return(t+1)/30});function a(t){return e.color(255,0,0,t)}e.setup=function(){e.createCanvas(660,840),t=e.ceil(e.random(5))+1,i=e.createImage(e.width,e.height);for(var o=function(i){var o=e.random(n);n=n.filter(function(e){return e!==o}),r.push({r:3*e.HALF_PI,speed:o/e.TWO_PI,size:e.width/t*e.random(.5,1),direction:e.random([1,-1]),lastPoint:null})},a=0;a<t;a++)o()},e.draw=function(){e.background(255),e.frameRate(o?15:30),e.image(i,0,0);var n={x:e.width/2,y:e.height/2};r.forEach(function(l,s){var c=n.x+e.cos(l.r)*(l.size/2),f=n.y+e.sin(l.r)*(l.size/2);if(o){var u=e.map(s,0,t-1,51,255);e.noFill(),e.stroke(255,255,255,u),e.strokeWeight(5),e.ellipse(n.x,n.y,l.size),e.stroke(a(u)),e.strokeWeight(1),e.ellipse(n.x,n.y,l.size),e.noStroke(),e.fill(255,255,255,u),e.ellipse(c,f,s===t-1?12:6),e.fill(a(u)),e.ellipse(c,f,s===t-1?6:3)}if(s===t-1&&l.lastPoint&&c>=0&&c<=e.width&&f>=0&&f<=e.height){for(var d=0;d<1;d+=.01)i.set(e.floor(e.lerp(c,l.lastPoint.x,d)),e.floor(e.lerp(f,l.lastPoint.y,d)),e.color(0));i.updatePixels()}n={x:c,y:f},r[s].lastPoint=n,r[s].r+=l.speed*r[s].direction})},e.mousePressed=function(){o=!o}};t.default=function(e){var t=e.location;return Object(r.c)(o.a,{sketch:n,path:t.pathname,description:" Reload page for a different variation. Click or tap sketch to toggle guides. "})}},288:function(e,t,i){var r=i(12);r(r.P,"Array",{fill:i(289)}),i(35)("fill")},289:function(e,t,i){"use strict";var r=i(28),o=i(78),n=i(16);e.exports=function(e){for(var t=r(this),i=n(t.length),a=arguments.length,l=o(a>1?arguments[1]:void 0,i),s=a>2?arguments[2]:void 0,c=void 0===s?i:o(s,i);c>l;)t[l++]=e;return t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-16-js-c0fccbf83dfaee051f80.js.map