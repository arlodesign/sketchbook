(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{aA9e:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),o=t("Bl7J"),i=t("9VVL"),c=(t("PZSu"),{}.DEV&&!1),u=function(e){var n,t=e.random();e.setup=function(){c&&(e.pixelDensity(1),e.frameRate(30)),e.createCanvas(660,840),e.noFill(),e.strokeWeight(2),e.colorMode(e.HSB,1),n=e.width/15,e.createLoop(20,{gif:!!c&&{render:!1,open:!0},noiseRadius:1})},e.draw=function(){e.blendMode(e.BLEND),e.background(t,.9,.1),e.blendMode(e.HARD_LIGHT);for(var a=e.animLoop,r=a.noise1D,o=a.noise2D,i=0;i<=e.height;i+=3){e.stroke(t,e.map(r(i/1e3),-1,1,.2,.8),e.map(r(i),-1,1,.2,.8),.8),e.beginShape(),e.curveVertex(-n,i);for(var c=0;c<=e.width;c+=n)e.curveVertex(c,e.map(o(c,i),-1,1,i-30,i+30));e.curveVertex(e.width+n,i),e.endShape()}}};n.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{sketch:u}),r.a.createElement("p",null,"Runs slow in the browser, but it made a nice GIF."))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-21-js-0f447161bbb477ad7306.js.map