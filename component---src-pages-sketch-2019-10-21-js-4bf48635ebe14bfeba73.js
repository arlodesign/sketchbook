(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{h7xQ:function(o,r,n){"use strict";n.r(r);n("n0hJ"),n("q1tI");var t=n("Gmm/"),a=n("qKvR"),e=function(o){var r,n,t,a,e=o.random();o.setup=function(){o.createCanvas(660,840),o.colorMode(o.HSL,1),o.background(e,.95,.95),o.noStroke(),t=o.floor(o.height/21),a=o.floor(o.height/51),r=2*t,n=o.floor(r/a)*a},o.draw=function(){for(var c=o.frameCount%3?o.color(e,.1,.1,.9):o.color(e,1,.5,.9),f=o.floor(o.random(r,o.width-r)/t)*t,i=o.floor(o.random(n,o.height-n)/a)*a,h=o.floor(o.random(f+t,o.width-r)),d=o.floor(o.random(i+a,o.height-n)),l=o.random([[!0,!1],[!1,!0],[!0,!0]]),u=f;u<h;u+=l[0]?t:2*t)for(var m=i;m<d;m+=l[1]?2*a:3*a)o.fill(c),o.rect(u,m,t,a);10===o.frameCount&&o.noLoop()}};r.default=function(o){var r=o.location;return Object(a.c)(t.a,{sketch:e,path:r.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-21-js-4bf48635ebe14bfeba73.js.map