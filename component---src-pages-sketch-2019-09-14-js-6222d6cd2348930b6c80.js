(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{HJdo:function(e,t,n){"use strict";n.r(t);n("n0hJ");var o=n("q1tI"),r=n.n(o),a=n("Gmm/"),i=n("Aw06"),s=(n("PZSu"),n("qKvR")),c={}.DEV&&!1,u=function(e){e.setup=function(){e.createCanvas(660,840),e.createLoop(10,{gif:!!c&&{render:!1,open:!0},noiseRadius:.1})},e.draw=function(){e.background(0),e.stroke(255),e.fill(0);for(var t=e.animLoop,n=t.noise2D,o=t.theta,r=0;r<e.height;r+=e.height/100){e.beginShape(),e.curveVertex(0,r),e.curveVertex(0,r);for(var a=e.width/5;a<=e.width-e.width/5;a+=e.width/5){var i=e.abs(r-e.map(e.cos(o),-1,1,0,e.height)),s=e.map(i,0,e.height,0,100),c=e.abs(n(a,r))*s;e.curveVertex(a,r-c)}e.curveVertex(e.width,r),e.curveVertex(e.width,r),e.endShape()}}};t.default=function(e){var t=e.location;return Object(s.c)(a.a,{sketch:u,path:t.pathname,description:Object(s.c)(r.a.Fragment,null,"Every code artist does one of these"," ",Object(s.c)(i.a,{href:"https://www.washingtonpost.com/entertainment/music/how-joy-divisions-unknown-pleasures-image-went-from-underground-album-cover-to-piece-of-cultural-ubiquity/2019/06/14/26e75338-8c76-11e9-adf3-f70f78c156e8_story.html?arc404=true"},"Unknown Pleasures")," ","sort of sketches at some point. It’s my turn to riff on this for a few days.")})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-14-js-6222d6cd2348930b6c80.js.map