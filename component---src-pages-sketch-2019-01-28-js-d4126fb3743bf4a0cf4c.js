(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{Lpr0:function(t,r,o){"use strict";o.r(r);o("bHtr"),o("Vd3H"),o("q1tI");var n=o("Gmm/"),e=o("qKvR"),a=function(t){var r=10,o=[];function n(n,e){var a=function(n,e){return o.sort((function(r,o){return t.dist(n,e,r.vector.x,r.vector.y)-t.dist(n,e,o.vector.x,o.vector.y)})),o[r-1]}(n,e),i=a.vector,c=a.color;t.stroke(c,c,c,32),t.line(n,e,i.x,i.y)}t.setup=function(){t.createCanvas(660,840),t.background(255),o=new Array(r).fill().map((function(r,o){return{vector:t.createVector(t.randomGaussian(t.width/2,t.width/30*3),t.randomGaussian(t.height/2,t.height/30*3)),color:[255,169.83,0][o%3]}}))},t.draw=function(){var r=t.floor(t.frameCount/(t.width/30)),o=t.floor(t.frameCount-t.width/30*r);if(r<t.height/30)for(var e=0;e<30;e++)for(var a=0;a<30;a++)!(t.frameCount%t.floor(30/13))&&n(o+t.width/30*e,r+t.height/30*a);else t.noLoop()}};r.default=function(t){var r=t.location;return Object(e.c)(n.a,{sketch:a,path:r.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-28-js-d4126fb3743bf4a0cf4c.js.map