"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[5504],{53606:function(t,o,n){var e=n(94035),a=n.n(e),i=n(56766);new(a())((function(t){var o,n,e=t.random(1e6);t.preload=function(){o=t.loadFont(i.Z)},t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight),t.background(0),t.colorMode(t.HSB,100),t.blendMode(t.HARD_LIGHT),t.strokeWeight(.1)},t.draw=function(){var a=t.map(t.cos(t.frameCount/100),-1,1,0,.1);(n=(n=(n=[]).concat(o.textToPoints("—————",t.random(t.width),-150,120,{sampleFactor:a}),o.textToPoints("There is",20,150,100,{sampleFactor:a}),o.textToPoints("no way",20,250,100,{sampleFactor:a}),o.textToPoints("out,",20,350,100,{sampleFactor:a}),o.textToPoints("only a",20,450,100,{sampleFactor:a}),o.textToPoints("new place",20,550,100,{sampleFactor:a}),o.textToPoints("to be.",20,650,100,{sampleFactor:a}),o.textToPoints("—————",t.random(t.width),t.height+150,120,{sampleFactor:a}))).map((function(o){return{x:o.x,y:o.y,corner:t.random([{x:0,y:0},{x:t.width,y:0},{x:0,y:t.height},{x:t.width,y:t.height}])}}))).forEach((function(o,a){var i=o.x,s=o.y;o.corner,n[a+1]&&(t.stroke(t.map(t.sin((t.frameCount+e)/1e3),-1,1,0,100),50,t.frameCount%2?100:0,t.map(t.dist(i,s,n[a+1].x,n[a+1].y),0,t.width,100,0)),t.line(i,s,n[a+1].x,n[a+1].y))})),t.frameCount>1500&&t.noLoop()},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch")},56766:function(t,o){o.Z="/assets/Cousine-BoldItalic.e8500cf0.otf"}},function(t){t.O(0,[4035],(function(){return 53606,t(t.s=53606)})),t.O()}]);