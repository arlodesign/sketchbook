(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{191:function(t,n,o){"use strict";o.r(n);o(244);var a=o(0),r=o.n(a),e=o(246),i=function(t){t.setup=function(){t.createCanvas(660,840,t.WEBGL),t.fill(255),t.noStroke()},t.draw=function(){t.background(0),t.directionalLight(t.min(t.frameCount,255),t.min(t.frameCount,255),t.min(t.frameCount,255),t.cos(t.frameCount/100),t.sin(t.frameCount/200),t.sin(t.frameCount/100)/2);for(var n=-t.floor(4.5);n<4.5;n++)t.push(),t.translate(t.width/9*n,0),t.rotateY(t.frameCount/1500*(n%2?-1:1)),t.rotateX(t.frameCount/2500),t.rotateZ(t.frameCount/3500+1e3*n),t.scale(t.map(t.sin(t.frameCount/5500),-1,1,1/3,3)),t.box(t.width/4.5,t.height/2,t.width/4.5),t.pop()}};n.default=function(t){var n=t.location;return r.a.createElement(e.a,{sketch:i,path:n.pathname})}},244:function(t,n,o){var a=o(11);a(a.P,"Array",{fill:o(245)}),o(32)("fill")},245:function(t,n,o){"use strict";var a=o(25),r=o(73),e=o(14);t.exports=function(t){for(var n=a(this),o=e(n.length),i=arguments.length,u=r(i>1?arguments[1]:void 0,o),f=i>2?arguments[2]:void 0,c=void 0===f?o:r(f,o);c>u;)n[u++]=t;return n}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-04-js-69f1d1bd9c931f78095b.js.map