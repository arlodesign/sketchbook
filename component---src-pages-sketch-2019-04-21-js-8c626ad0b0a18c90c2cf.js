(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{275:function(t,n,o){"use strict";o.r(n);o(309);var e=o(9),i=(o(0),o(308)),r=function(t){var n=0,o=0;t.setup=function(){t.createCanvas(660,840),t.background(0),t.colorMode(t.HSB,100),t.blendMode(t.ADD),t.rectMode(t.CENTER),t.noStroke()},t.draw=function(){t.fill(t.map(t.sin(t.frameCount/2),-1,1,0,100),100,100,20),t.rect(t.map(t.noise(o/100,t.frameCount/1e4),0,1,.333*t.width,.666*t.width),o,t.map(t.noise(o/200,t.frameCount/100),0,1,t.width/24,t.width/24*(n+1)),3),(o+=6)>t.height&&(o-=t.height,24===++n&&t.noLoop())}};n.default=function(t){var n=t.location;return Object(e.c)(i.a,{sketch:r,path:n.pathname,description:""})}},309:function(t,n,o){var e=o(12);e(e.P,"Array",{fill:o(310)}),o(36)("fill")},310:function(t,n,o){"use strict";var e=o(28),i=o(79),r=o(16);t.exports=function(t){for(var n=e(this),o=r(n.length),a=arguments.length,c=i(a>1?arguments[1]:void 0,o),u=a>2?arguments[2]:void 0,d=void 0===u?o:i(u,o);d>c;)n[c++]=t;return n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-21-js-8c626ad0b0a18c90c2cf.js.map