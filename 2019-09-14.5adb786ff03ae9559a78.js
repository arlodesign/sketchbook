(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{309:function(e,n,t){"use strict";t.r(n),function(e){var n=t(0),i=t.n(n),o=(t(3),e.env.DEV&&!1);new i.a((function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.createLoop(10,{gif:!!o&&{render:!1,open:!0},noiseRadius:.1})},e.draw=function(){e.background(0),e.stroke(255),e.fill(0);for(var n=e.animLoop,t=n.noise2D,i=n.theta,o=0;o<e.height;o+=e.height/100){e.beginShape(),e.curveVertex(0,o),e.curveVertex(0,o);for(var r=e.width/5;r<=e.width-e.width/5;r+=e.width/5){var s=e.abs(o-e.map(e.cos(i),-1,1,0,e.height)),a=e.map(s,0,e.height,0,100),w=e.abs(t(r,o))*a;e.curveVertex(r,o-w)}e.curveVertex(e.width,o),e.curveVertex(e.width,o),e.endShape()}},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML='\n        Every code artist does one of these \n        <Link href="https://www.washingtonpost.com/entertainment/music/how-joy-divisions-unknown-pleasures-image-went-from-underground-album-cover-to-piece-of-cultural-ubiquity/2019/06/14/26e75338-8c76-11e9-adf3-f70f78c156e8_story.html?arc404=true">\n          Unknown Pleasures\n        </Link> \n        sort of sketches at some point. It’s my turn to riff on this for a few\n        days.\n      '}.call(this,t(5))}},[[309,0,1]]]);