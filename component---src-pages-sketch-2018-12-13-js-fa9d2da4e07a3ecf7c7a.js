(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{182:function(t,n,o){"use strict";o.r(n);o(338);var e=o(12),r=(o(0),o(337)),i=function(t){var n;function o(t,n){return Math.sqrt(t*t+n*n)}function e(n,e){return o(Math.abs(t.mouseX-n),Math.abs(t.mouseY-e))}t.setup=function(){t.createCanvas(660,840),n=o(t.width,t.height),t.noStroke()},t.draw=function(){t.background("white");for(var o=0;o<t.width;o+=20)for(var r=0;r<t.height;r+=20){var i=t.noise(o,r),a=t.map(e(o,r),0,n,.1,1.1);t.push(),t.translate(o+10,r+10),t.fill("rgba(0, 0, 0, "+i+")"),t.ellipse(0,0,20*i/a),t.pop()}},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};n.default=function(t){var n=t.location;return Object(e.c)(r.a,{sketch:i,path:n.pathname,description:"Move pointer or finger over sketch."})}},338:function(t,n,o){var e=o(9);e(e.P,"Array",{fill:o(339)}),o(67)("fill")},339:function(t,n,o){"use strict";var e=o(34),r=o(100),i=o(18);t.exports=function(t){for(var n=e(this),o=i(n.length),a=arguments.length,u=r(a>1?arguments[1]:void 0,o),s=a>2?arguments[2]:void 0,c=void 0===s?o:r(s,o);c>u;)n[u++]=t;return n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-13-js-fa9d2da4e07a3ecf7c7a.js.map