(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{163:function(n,e,o){"use strict";o.r(e);o(263);var t=o(0),i=o.n(t),r=o(265),a=function(n){var e,o,t=0;n.setup=function(){n.createCanvas(660,840),n.background("white"),n.noStroke(),n.fill("rgba(0, 0, 0, .9)"),e=n.random(10,20),o=n.random(10,20)},n.draw=function(){var i=n.mouseX+n.cos(t)*e,r=n.mouseY+n.sin(t)*e,a=n.noise(i,r);i>0&&r>0&&i<n.width&&r<n.height&&n.mouseIsPressed&&n.ellipse(i,r,o*a),t+=6},n.touchMoved=function(){if(n.mouseX>=0&&n.mouseY>=0&&n.mouseX<=n.width&&n.mouseY<=n.height)return!1}};e.default=function(n){var e=n.location;return i.a.createElement(r.a,{sketch:a,path:e.pathname,description:"Click to draw."})}},263:function(n,e,o){var t=o(11);t(t.P,"Array",{fill:o(264)}),o(32)("fill")},264:function(n,e,o){"use strict";var t=o(25),i=o(73),r=o(14);n.exports=function(n){for(var e=t(this),o=r(e.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,o),u=a>2?arguments[2]:void 0,c=void 0===u?o:i(u,o);c>s;)e[s++]=n;return e}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-06-js-4a876c3564fdfad93713.js.map