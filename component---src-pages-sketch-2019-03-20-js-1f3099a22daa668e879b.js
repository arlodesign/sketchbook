(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{258:function(n,o,r){"use strict";r.r(o);r(338);var t=r(12),a=(r(0),r(337)),e=r(346),i=function(n){var o=[];n.setup=function(){n.createCanvas(660,840),n.noStroke(),n.colorMode(n.HSB,100),n.rectMode(n.CENTER),o=[n.random(0,33),n.random(34,66),n.random(67,100)],o=Object(e.a)(o),n.blendMode(n.HARD_LIGHT)},n.draw=function(){n.background(64);for(var r=function(r){for(var t=function(t){o.forEach(function(o,a){var e=n.noise(r*(a+1)*.01,t*(a+1)*.01,n.frameCount*(a+1)*.01);n.fill(o,50,75,100/(a+1)),n.stroke(o,50,75,33*(a+1)),n.ellipse(r+30,t+30,60*e*(a+1),60*e*(a+1))})},a=0;a<n.height;a+=60)t(a)},t=0;t<n.width;t+=60)r(t)}};o.default=function(n){var o=n.location;return Object(t.c)(a.a,{sketch:i,path:o.pathname,description:"Refresh page for a different color variation."})}},338:function(n,o,r){var t=r(9);t(t.P,"Array",{fill:r(339)}),r(67)("fill")},339:function(n,o,r){"use strict";var t=r(34),a=r(100),e=r(18);n.exports=function(n){for(var o=t(this),r=e(o.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,r),f=i>2?arguments[2]:void 0,u=void 0===f?r:a(f,r);u>c;)o[c++]=n;return o}},346:function(n,o,r){"use strict";function t(n){for(var o=n.length-1;o>0;o--){var r=Math.floor(Math.random()*(o+1)),t=[n[r],n[o]];n[o]=t[0],n[r]=t[1]}return n}r.d(o,"a",function(){return t})}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-20-js-1f3099a22daa668e879b.js.map