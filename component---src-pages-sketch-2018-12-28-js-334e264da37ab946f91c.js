(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{196:function(n,o,a){"use strict";a.r(o);a(347);var t=a(12),r=(a(0),a(346)),i=function(n){var o,a,t,r,i,e=0,c=0;n.setup=function(){n.createCanvas(660,840),n.fill("rgba(0, 0, 0, 0.4)"),n.noStroke(),n.background(255),o=n.floor(n.random(3,7)),a=n.random(),t=n.random(1,2),i=(n.height-o+1)/o,r=-i},n.draw=function(){var d=o*n.map(n.noise(r,e),0,1,o,1),f=o*n.map(n.noise(r,e),0,1,-o*a,o*a);n.quad(r+f,e,r+d+f,e,r+d-f,e+i,r-f,e+i),(r+=d+n.random(o*a,o))>n.width+i&&(r=-i,e+=i+1),e>n.height&&(e=0,a*=t,4===++c&&n.noLoop())}};o.default=function(n){var o=n.location;return Object(t.c)(r.a,{sketch:i,path:o.pathname,description:"Reload page for a different variation."})}},347:function(n,o,a){var t=a(9);t(t.P,"Array",{fill:a(348)}),a(67)("fill")},348:function(n,o,a){"use strict";var t=a(34),r=a(100),i=a(18);n.exports=function(n){for(var o=t(this),a=i(o.length),e=arguments.length,c=r(e>1?arguments[1]:void 0,a),d=e>2?arguments[2]:void 0,f=void 0===d?a:r(d,a);f>c;)o[c++]=n;return o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-28-js-334e264da37ab946f91c.js.map