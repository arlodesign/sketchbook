(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{181:function(n,t,o){"use strict";o.r(t);o(251);var r=o(0),a=o.n(r),e=o(253),i=function(n){var t;n.setup=function(){n.createCanvas(660,840,n.WEBGL),n.fill(0),t=n.floor(n.random(300,600)),n.strokeWeight(t/100)},n.draw=function(){n.background(0),n.camera(n.sin(n.frameCount/t)*t,n.cos(n.frameCount/t)*t,t,0,0,0,0,1,0);for(var o=0;o<t;o++)n.stroke("rgba(255, 255, 255, "+o/t+")"),n.line(n.cos(n.frameCount+o)*o,n.sin(n.frameCount+o)*o,n.tan(n.frameCount+o)*o,n.cos(n.frameCount+o)*o,n.sin(n.frameCount+o)*o,0);n.frameCount}};t.default=function(n){var t=n.location;return a.a.createElement(e.a,{sketch:i,path:t.pathname})}},251:function(n,t,o){var r=o(11);r(r.P,"Array",{fill:o(252)}),o(32)("fill")},252:function(n,t,o){"use strict";var r=o(25),a=o(73),e=o(14);n.exports=function(n){for(var t=r(this),o=e(t.length),i=arguments.length,u=a(i>1?arguments[1]:void 0,o),f=i>2?arguments[2]:void 0,c=void 0===f?o:a(f,o);c>u;)t[u++]=n;return t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-26-js-193115ae98fcdf2b609d.js.map