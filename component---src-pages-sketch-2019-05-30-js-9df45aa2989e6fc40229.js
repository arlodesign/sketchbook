(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{uHhx:function(a,e,r){"use strict";r.r(e);var t=r("q1tI"),n=r.n(t),i=r("Bl7J"),o=r("9VVL"),s=function(a){var e,r;function t(a,r){var t=0;return t+=-1*e[a][r].a,t+=.2*e[a-1][r].a,t+=.2*e[a+1][r].a,t+=.2*e[a][r+1].a,t+=.2*e[a][r-1].a,t+=.05*e[a-1][r-1].a,t+=.05*e[a+1][r-1].a,t+=.05*e[a+1][r+1].a,t+=.05*e[a-1][r+1].a}function n(a,r){var t=0;return t+=-1*e[a][r].b,t+=.2*e[a-1][r].b,t+=.2*e[a+1][r].b,t+=.2*e[a][r+1].b,t+=.2*e[a][r-1].b,t+=.05*e[a-1][r-1].b,t+=.05*e[a+1][r-1].b,t+=.05*e[a+1][r+1].b,t+=.05*e[a-1][r+1].b}a.setup=function(){a.pixelDensity(1),a.createCanvas(165,210),e=[],r=[];for(var t=0;t<a.width;t++){e[t]=[],r[t]=[];for(var n=0;n<a.height;n++)e[t][n]={a:1,b:0},r[t][n]={a:1,b:0}}for(var i=a.floor(a.random(1,a.width-100+1)),o=a.floor(a.random(1,a.height-100+1)),s=i;s<i+100;s++)for(var l=o;l<o+100;l++)e[s][l].b=1,e[a.width-s][a.height-l].b=1},a.draw=function(){a.background(255);for(var i=0;i<10;i++){for(var o=1;o<a.width-1;o++)for(var s=1;s<a.height-1;s++){var l=e[o][s].a,c=e[o][s].b;r[o][s].a=l+1*t(o,s)-l*c*c+.055*(1-l),r[o][s].b=c+.5*n(o,s)+l*c*c-(.062+.055)*c,r[o][s].a=a.constrain(r[o][s].a,0,1),r[o][s].b=a.constrain(r[o][s].b,0,1)}var h=e;e=r,r=h}a.loadPixels();for(var b=0;b<a.width;b++)for(var f=0;f<a.height;f++){var u=4*(b+f*a.width),d=r[b][f],v=(d.a-d.b)*a.TWO_PI;v=a.constrain(v,0,a.TWO_PI,!0),v=a.map(a.cos(v),-1,1,0,255),a.pixels[u+0]=v,a.pixels[u+1]=v,a.pixels[u+2]=v,a.pixels[u+3]=255}a.updatePixels()}};e.default=function(){return n.a.createElement(i.a,null,n.a.createElement(o.a,{sketch:s}),n.a.createElement("p",null,"More experimenting with"," ",n.a.createElement("a",{href:"https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_013_ReactionDiffusion/P5/sketch.js"},"Reaction Diffusion"),". This runs ",n.a.createElement("em",null,"slow"),"."))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-30-js-9df45aa2989e6fc40229.js.map