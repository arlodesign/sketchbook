(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{176:function(o,n,t){"use strict";t.r(n);t(351);var e=t(12),i=(t(0),t(350)),r=function(o){var n,t,e=0;o.setup=function(){o.createCanvas(660,840),o.background("white"),o.noStroke(),o.fill("rgba(0, 0, 0, .9)"),n=o.random(10,20),t=o.random(10,20)},o.draw=function(){var i=o.mouseX+o.cos(e)*n,r=o.mouseY+o.sin(e)*n,s=o.noise(i,r);i>0&&r>0&&i<o.width&&r<o.height&&o.mouseIsPressed&&o.ellipse(i,r,t*s),e+=6},o.touchMoved=function(){if(o.mouseX>=0&&o.mouseY>=0&&o.mouseX<=o.width&&o.mouseY<=o.height)return!1}};n.default=function(o){var n=o.location;return Object(e.c)(i.a,{sketch:r,path:n.pathname,description:"Click to draw."})}},351:function(o,n,t){var e=t(9);e(e.P,"Array",{fill:t(352)}),t(67)("fill")},352:function(o,n,t){"use strict";var e=t(34),i=t(100),r=t(18);o.exports=function(o){for(var n=e(this),t=r(n.length),s=arguments.length,u=i(s>1?arguments[1]:void 0,t),a=s>2?arguments[2]:void 0,c=void 0===a?t:i(a,t);c>u;)n[u++]=o;return n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-06-js-43bc1a1bf84f42d140dd.js.map