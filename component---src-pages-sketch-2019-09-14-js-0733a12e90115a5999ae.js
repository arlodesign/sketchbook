(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{HJdo:function(e,t,n){"use strict";n.r(t);n("bHtr");var r=n("q1tI"),o=n.n(r),a=n("Bl7J"),i=n("9VVL"),s=(n("PZSu"),{}.DEV&&!1),u=function(e){e.setup=function(){e.createCanvas(660,840),e.createLoop(10,{gif:!!s&&{render:!1,open:!0},noiseRadius:.1})},e.draw=function(){e.background(0),e.stroke(255),e.fill(0);for(var t=e.animLoop,n=t.noise2D,r=t.theta,o=0;o<e.height;o+=e.height/100){e.beginShape(),e.curveVertex(0,o),e.curveVertex(0,o);for(var a=e.width/5;a<=e.width-e.width/5;a+=e.width/5){var i=e.abs(o-e.map(e.cos(r),-1,1,0,e.height)),s=e.map(i,0,e.height,0,100),u=e.abs(n(a,o))*s;e.curveVertex(a,o-u)}e.curveVertex(e.width,o),e.curveVertex(e.width,o),e.endShape()}}};t.default=function(){return o.a.createElement(a.a,null,o.a.createElement(i.a,{sketch:u}),o.a.createElement("p",null,"Every code artist does one of these"," ",o.a.createElement("a",{href:"https://www.washingtonpost.com/entertainment/music/how-joy-divisions-unknown-pleasures-image-went-from-underground-album-cover-to-piece-of-cultural-ubiquity/2019/06/14/26e75338-8c76-11e9-adf3-f70f78c156e8_story.html?arc404=true"},"Unknown Pleasures")," ","sort of sketches at some point. It’s my turn to riff on this for a few days."))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-14-js-0733a12e90115a5999ae.js.map