(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{199:function(e,t,i){"use strict";i.r(t);i(267);var r=i(0),n=i.n(r),o=i(269),a=function(e){var t,i,r=[],n=!1,o=new Array(30).fill().map(function(e,t){return(t+1)/30});function a(t){return e.color(255,0,0,t)}e.setup=function(){e.createCanvas(660,840),t=e.ceil(e.random(5))+1,i=e.createImage(e.width,e.height);for(var n=function(i){var n=e.random(o);o=o.filter(function(e){return e!==n}),r.push({r:3*e.HALF_PI,speed:n/e.TWO_PI,size:e.width/t*e.random(.5,1),direction:e.random([1,-1]),lastPoint:null})},a=0;a<t;a++)n()},e.draw=function(){e.background(255),e.frameRate(n?15:30),e.image(i,0,0);var o={x:e.width/2,y:e.height/2};r.forEach(function(l,s){var c=o.x+e.cos(l.r)*(l.size/2),f=o.y+e.sin(l.r)*(l.size/2);if(n){var u=e.map(s,0,t-1,51,255);e.noFill(),e.stroke(255,255,255,u),e.strokeWeight(5),e.ellipse(o.x,o.y,l.size),e.stroke(a(u)),e.strokeWeight(1),e.ellipse(o.x,o.y,l.size),e.noStroke(),e.fill(255,255,255,u),e.ellipse(c,f,s===t-1?12:6),e.fill(a(u)),e.ellipse(c,f,s===t-1?6:3)}if(s===t-1&&l.lastPoint&&c>=0&&c<=e.width&&f>=0&&f<=e.height){for(var d=0;d<1;d+=.01)i.set(e.floor(e.lerp(c,l.lastPoint.x,d)),e.floor(e.lerp(f,l.lastPoint.y,d)),e.color(0));i.updatePixels()}o={x:c,y:f},r[s].lastPoint=o,r[s].r+=l.speed*r[s].direction})},e.mousePressed=function(){n=!n}};t.default=function(e){var t=e.location;return n.a.createElement(o.a,{sketch:a,path:t.pathname,description:" Reload page for a different variation. Click or tap sketch to toggle guides. "})}},267:function(e,t,i){var r=i(11);r(r.P,"Array",{fill:i(268)}),i(32)("fill")},268:function(e,t,i){"use strict";var r=i(25),n=i(73),o=i(14);e.exports=function(e){for(var t=r(this),i=o(t.length),a=arguments.length,l=n(a>1?arguments[1]:void 0,i),s=a>2?arguments[2]:void 0,c=void 0===s?i:n(s,i);c>l;)t[l++]=e;return t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-16-js-7c88604db04e2507ac46.js.map