(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{yIiF:function(t,e,n){"use strict";n.r(e);n("n0hJ"),n("q1tI");var o=n("Gmm/"),r=n("qKvR"),a=function(t){var e;function n(t,e){return Math.sqrt(t*t+e*e)}function o(e,o){return n(Math.abs(t.mouseX-e),Math.abs(t.mouseY-o))}t.setup=function(){t.createCanvas(660,840),e=n(t.width,t.height),t.noStroke()},t.draw=function(){t.background("white");for(var n=0;n<t.width;n+=20)for(var r=0;r<t.height;r+=20){var a=t.noise(n,r),i=t.map(o(n,r),0,e,.1,1.1);t.push(),t.translate(n+10,r+10),t.fill("rgba(0, 0, 0, "+a+")"),t.ellipse(0,0,20*a/i),t.pop()}},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};e.default=function(t){var e=t.location;return Object(r.c)(o.a,{sketch:a,path:e.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-13-js-2195e179050d78b386f5.js.map