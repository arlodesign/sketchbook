(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{211:function(e,t,o){"use strict";o.r(t);o(272);var r=o(0),n=o.n(r),i=o(271),a=function(e){e.setup=function(){e.createCanvas(660,840),e.noStroke()},e.draw=function(){e.background("white");for(var t=[],o=0;o<=e.height+0;o+=10)t.push({y:o,distFromMouse:e.abs(o-e.mouseY)});var r=e.max.apply(e,t.map(function(e){return e.distFromMouse}));t.forEach(function(o,n){o.y;var i=o.distFromMouse,a=e.map(i,0,r,e.map(e.mouseY,0,e.height,7,2),0);t[n].ex=e.pow(a,a)});var n=t.reduce(function(e,t){return e+t.ex},0),i=[0],a=0;t.forEach(function(t){var o=t.ex/n;i.push(a+e.height*o),a+=e.height*o});t.forEach(function(t,o){var r=t.y,a=t.ex/n,u=(e.height,i[o]),c=i[o+1];e.fill(o%2?255:0),e.beginShape(),e.vertex(0,r),e.quadraticVertex(e.mouseX,u,e.width,r),e.vertex(e.width,r+10),e.quadraticVertex(e.mouseX,c,0,r+10),e.endShape()})},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};t.default=function(e){var t=e.location;return n.a.createElement(i.a,{sketch:a,path:t.pathname,description:"Move pointer or finger over sketch."})}},272:function(e,t,o){var r=o(11);r(r.P,"Array",{fill:o(273)}),o(32)("fill")},273:function(e,t,o){"use strict";var r=o(25),n=o(73),i=o(14);e.exports=function(e){for(var t=r(this),o=i(t.length),a=arguments.length,u=n(a>1?arguments[1]:void 0,o),c=a>2?arguments[2]:void 0,h=void 0===c?o:n(c,o);h>u;)t[u++]=e;return t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-30-js-4dd838f4132333ce856b.js.map