(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{dr7y:function(t,o,e){"use strict";e.r(o);var a=e("q1tI"),n=e.n(a),r=e("Wbzz"),i=e("Bl7J"),s=e("9VVL"),c=function(t){var o,e,a=t.random(1e6);t.preload=function(){o=t.loadFont(Object(r.withPrefix)("/assets/Cousine-BoldItalic.otf"))},t.setup=function(){t.createCanvas(660,840),t.background(0),t.colorMode(t.HSB,100),t.blendMode(t.HARD_LIGHT),t.strokeWeight(.1)},t.draw=function(){var n=t.map(t.cos(t.frameCount/100),-1,1,0,.1);(e=(e=(e=[]).concat(o.textToPoints("—————",t.random(t.width),-150,120,{sampleFactor:n}),o.textToPoints("There is",20,150,100,{sampleFactor:n}),o.textToPoints("no way",20,250,100,{sampleFactor:n}),o.textToPoints("out,",20,350,100,{sampleFactor:n}),o.textToPoints("only a",20,450,100,{sampleFactor:n}),o.textToPoints("new place",20,550,100,{sampleFactor:n}),o.textToPoints("to be.",20,650,100,{sampleFactor:n}),o.textToPoints("—————",t.random(t.width),t.height+150,120,{sampleFactor:n}))).map((function(o){return{x:o.x,y:o.y,corner:t.random([{x:0,y:0},{x:t.width,y:0},{x:0,y:t.height},{x:t.width,y:t.height}])}}))).forEach((function(o,n){var r=o.x,i=o.y;e[n+1]&&(t.stroke(t.map(t.sin((t.frameCount+a)/1e3),-1,1,0,100),50,t.frameCount%2?100:0,t.map(t.dist(r,i,e[n+1].x,e[n+1].y),0,t.width,100,0)),t.line(r,i,e[n+1].x,e[n+1].y))})),t.frameCount>1500&&t.noLoop()}};o.default=function(){return n.a.createElement(i.a,null,n.a.createElement(s.a,{sketch:c}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-10-js-fe12f1ce0e2f1a86f762.js.map