(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{279:function(t,n,o){"use strict";o.r(n);o(79),o(99);var r=o(9),a=(o(0),o(301)),e=o(293),c=(o(308),function(t){var n,o,r=t.random("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),e=t.random(1e6);t.preload=function(){n=t.loadFont(Object(a.c)("/assets/Cousine-BoldItalic.otf"))},t.setup=function(){t.createCanvas(660,840),t.background(0),t.colorMode(t.HSB,100),t.strokeWeight(.1)},t.draw=function(){t.stroke(t.map(t.sin((t.frameCount+e)/1e3),-1,1,0,100),50,100);var a=t.map(t.cos(t.frameCount/100),-1,1,0,.1);(o=(o=n.textToPoints(r+" "+t.random("!@#$%^&*()-+{}[]".split("")),20,625,900,{sampleFactor:a})).map(function(n){return{x:n.x,y:n.y,corner:t.random([{x:0,y:0},{x:t.width,y:0},{x:0,y:t.height},{x:t.width,y:t.height}])}})).forEach(function(n,r){var a=n.x,e=n.y;n.corner;o[r+1]&&t.line(a,e,o[r+1].x,o[r+1].y)})}});n.default=function(t){var n=t.location;return Object(r.c)(e.a,{sketch:c,path:n.pathname,description:"Reload page for a different letter."})}},308:function(t,n,o){"use strict";function r(t){for(var n=t.length-1;n>0;n--){var o=Math.floor(Math.random()*(n+1)),r=[t[o],t[n]];t[n]=r[0],t[o]=r[1]}return t}o.d(n,"a",function(){return r})}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-27-js-2ab6fb89b27ff02c9a74.js.map