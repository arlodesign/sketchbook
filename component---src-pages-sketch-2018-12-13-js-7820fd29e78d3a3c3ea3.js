(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{169:function(t,n,e){"use strict";e.r(n);e(262);var o=e(0),r=e.n(o),i=e(264),a=function(t){var n;function e(t,n){return Math.sqrt(t*t+n*n)}function o(n,o){return e(Math.abs(t.mouseX-n),Math.abs(t.mouseY-o))}t.setup=function(){t.createCanvas(660,840),n=e(t.width,t.height),t.noStroke()},t.draw=function(){t.background("white");for(var e=0;e<t.width;e+=20)for(var r=0;r<t.height;r+=20){var i=t.noise(e,r),a=t.map(o(e,r),0,n,.1,1.1);t.push(),t.translate(e+10,r+10),t.fill("rgba(0, 0, 0, "+i+")"),t.ellipse(0,0,20*i/a),t.pop()}},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};n.default=function(t){var n=t.location;return r.a.createElement(i.a,{sketch:a,path:n.pathname,description:"Move pointer or finger over sketch."})}},262:function(t,n,e){var o=e(11);o(o.P,"Array",{fill:e(263)}),e(32)("fill")},263:function(t,n,e){"use strict";var o=e(25),r=e(73),i=e(14);t.exports=function(t){for(var n=o(this),e=i(n.length),a=arguments.length,u=r(a>1?arguments[1]:void 0,e),s=a>2?arguments[2]:void 0,c=void 0===s?e:r(s,e);c>u;)n[u++]=t;return n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-13-js-7820fd29e78d3a3c3ea3.js.map