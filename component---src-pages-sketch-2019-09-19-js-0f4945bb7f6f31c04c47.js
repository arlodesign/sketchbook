(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{RIBj:function(t,n,e){"use strict";e.r(n);e("bHtr");var r=e("q1tI"),u=e.n(r),i=e("Bl7J"),o=e("9VVL"),c=e("av4u"),a=(e("PZSu"),{}.DEV&&!1),f=function(t){var n;t.setup=function(){t.createCanvas(660,840),t.createLoop(10,{gif:!!a&&{render:!1,open:!0},noiseRadius:.1}),n=t.dist(-t.width/2,-t.height/2,t.width+t.width/2,t.height+t.height/2)},t.draw=function(){t.background(0),t.stroke(255),t.fill(0);for(var e=t.animLoop,r=e.noise2D,u=e.theta,i=0;i<=50;i++){var o=t.height*(i/50);t.beginShape();for(var a=0;a<=50;a++){var f=void 0;switch(a){case 0:f=-1;break;case 50:f=t.width+1;break;default:f=t.width/50*a+t.width/50*(r(a,i)/2)}var h=t.dist(f,o,t.map(t.cos(2*u),-1,1,-t.width/2,t.width+t.width/2),t.map(t.sin(u),-1,1,-t.height/2,t.height+t.height/2)),d=Object(c.e)(h/n)*(t.height/50)*5,s=t.abs(r(i,a))*d;t.curveVertex(f,o-s),0===a||50===a&&t.curveVertex(f,o-s)}t.vertex(t.width+1,o),t.vertex(t.width+1,t.height+1),t.vertex(-1,t.height+1),t.endShape(t.CLOSE)}}};n.default=function(){return u.a.createElement(i.a,null,u.a.createElement(o.a,{sketch:f}),u.a.createElement("p",null,"Every code artist does one of these"," ",u.a.createElement("a",{href:"https://www.washingtonpost.com/entertainment/music/how-joy-divisions-unknown-pleasures-image-went-from-underground-album-cover-to-piece-of-cultural-ubiquity/2019/06/14/26e75338-8c76-11e9-adf3-f70f78c156e8_story.html?arc404=true"},"Unknown Pleasures")," ","sort of sketches at some point. It’s my turn to riff on this for a few days."))}},av4u:function(t,n,e){"use strict";e.d(n,"f",(function(){return r})),e.d(n,"j",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o})),e.d(n,"i",(function(){return c})),e.d(n,"b",(function(){return a})),e.d(n,"g",(function(){return f})),e.d(n,"k",(function(){return h})),e.d(n,"d",(function(){return d})),e.d(n,"h",(function(){return s})),e.d(n,"l",(function(){return w})),e.d(n,"e",(function(){return l}));var r=function(t){return t*t},u=function(t){return t*(2-t)},i=function(t){return t<.5?2*t*t:(4-2*t)*t-1},o=function(t){return t*t*t},c=function(t){return--t*t*t+1},a=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},f=function(t){return t*t*t*t},h=function(t){return 1- --t*t*t*t},d=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},s=function(t){return t*t*t*t*t},w=function(t){return 1+--t*t*t*t*t},l=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-19-js-0f4945bb7f6f31c04c47.js.map