(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{312:function(t,o,n){"use strict";n.r(o);n(21);var e=n(7),a=(n(0),n(399)),r=n(394),c=function(t){var o,n,e=t.random("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),r=t.random(1e6);t.preload=function(){o=t.loadFont(Object(a.c)("/assets/Cousine-BoldItalic.otf"))},t.setup=function(){t.createCanvas(660,840),t.background(0),t.colorMode(t.HSB,100),t.strokeWeight(.1)},t.draw=function(){t.stroke(t.map(t.sin((t.frameCount+r)/1e3),-1,1,0,100),50,100);var a=t.map(t.cos(t.frameCount/100),-1,1,0,.1);(n=(n=o.textToPoints(e+" "+t.random("!@#$%^&*()-+{}[]".split("")),20,625,900,{sampleFactor:a})).map(function(o){return{x:o.x,y:o.y,corner:t.random([{x:0,y:0},{x:t.width,y:0},{x:0,y:t.height},{x:t.width,y:t.height}])}})).forEach(function(o,e){var a=o.x,r=o.y;o.corner;n[e+1]&&t.line(a,r,n[e+1].x,n[e+1].y)})}};o.default=function(t){var o=t.location;return Object(e.c)(r.a,{sketch:c,path:o.pathname,description:"Reload page for a different letter."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-27-js-7a16941f2ae27974a0da.js.map