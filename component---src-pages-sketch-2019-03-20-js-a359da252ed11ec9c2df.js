(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{277:function(n,o,r){"use strict";r.r(o);r(382);var t=r(13),a=(r(0),r(380)),e=r(388),c=function(n){var o=[];n.setup=function(){n.createCanvas(660,840),n.noStroke(),n.colorMode(n.HSB,100),n.rectMode(n.CENTER),o=[n.random(0,33),n.random(34,66),n.random(67,100)],o=Object(e.a)(o),n.blendMode(n.HARD_LIGHT)},n.draw=function(){n.background(64);for(var r=function(r){for(var t=function(t){o.forEach(function(o,a){var e=n.noise(r*(a+1)*.01,t*(a+1)*.01,n.frameCount*(a+1)*.01);n.fill(o,50,75,100/(a+1)),n.stroke(o,50,75,33*(a+1)),n.ellipse(r+30,t+30,60*e*(a+1),60*e*(a+1))})},a=0;a<n.height;a+=60)t(a)},t=0;t<n.width;t+=60)r(t)}};o.default=function(n){var o=n.location;return Object(t.c)(a.a,{sketch:c,path:o.pathname,description:"Refresh page for a different color variation."})}},388:function(n,o,r){"use strict";function t(n){for(var o=n.length-1;o>0;o--){var r=Math.floor(Math.random()*(o+1)),t=[n[r],n[o]];n[o]=t[0],n[r]=t[1]}return n}r.d(o,"a",function(){return t})}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-20-js-a359da252ed11ec9c2df.js.map