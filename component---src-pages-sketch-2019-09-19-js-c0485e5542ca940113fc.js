(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{RIBj:function(e,t,n){"use strict";n.r(t);n("bHtr");var r=n("q1tI"),i=n.n(r),a=n("Bl7J"),o=n("9VVL"),u=n("av4u"),h=(n("PZSu"),{}.DEV&&!1),c=function(e){var t;e.setup=function(){e.createCanvas(660,840),e.createLoop(10,{gif:!!h&&{render:!1,open:!0},noiseRadius:.1}),t=e.dist(-e.width/2,-e.height/2,e.width+e.width/2,e.height+e.height/2)},e.draw=function(){e.background(0),e.stroke(255),e.fill(0);for(var n=e.animLoop,r=n.noise2D,i=n.theta,a=0;a<=50;a++){var o=e.height*(a/50);e.beginShape();for(var h=0;h<=50;h++){var c=void 0;switch(h){case 0:c=-1;break;case 50:c=e.width+1;break;default:c=e.width/50*h+e.width/50*(r(h,a)/2)}var s=e.dist(c,o,e.map(e.cos(2*i),-1,1,-e.width/2,e.width+e.width/2),e.map(e.sin(i),-1,1,-e.height/2,e.height+e.height/2)),d=Object(u.b)(s/t)*(e.height/50)*5,f=e.abs(r(a,h))*d;e.curveVertex(c,o-f),0===h||50===h&&e.curveVertex(c,o-f)}e.vertex(e.width+1,o),e.vertex(e.width+1,e.height+1),e.vertex(-1,e.height+1),e.endShape(e.CLOSE)}}};t.default=function(){return i.a.createElement(a.a,null,i.a.createElement(o.a,{sketch:c}),i.a.createElement("p",null,"Every code artist does one of these"," ",i.a.createElement("a",{href:"https://www.washingtonpost.com/entertainment/music/how-joy-divisions-unknown-pleasures-image-went-from-underground-album-cover-to-piece-of-cultural-ubiquity/2019/06/14/26e75338-8c76-11e9-adf3-f70f78c156e8_story.html?arc404=true"},"Unknown Pleasures")," ","sort of sketches at some point. It’s my turn to riff on this for a few days."))}},av4u:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return o}));var r=function(e){return e*e},i=function(e){return e<.5?2*e*e:(4-2*e)*e-1},a=function(e){return 1+--e*e*e*e*e},o=function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-19-js-c0485e5542ca940113fc.js.map