(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{337:function(a,r,t){"use strict";t.r(r);var i=t(7),n=t(0),e=t.n(n),o=t(399),c=t(411),s=function(a){var r,t;function i(a,t){var i=0;return i+=-1*r[a][t].a,i+=.2*r[a-1][t].a,i+=.2*r[a+1][t].a,i+=.2*r[a][t+1].a,i+=.2*r[a][t-1].a,i+=.05*r[a-1][t-1].a,i+=.05*r[a+1][t-1].a,i+=.05*r[a+1][t+1].a,i+=.05*r[a-1][t+1].a}function n(a,t){var i=0;return i+=-1*r[a][t].b,i+=.2*r[a-1][t].b,i+=.2*r[a+1][t].b,i+=.2*r[a][t+1].b,i+=.2*r[a][t-1].b,i+=.05*r[a-1][t-1].b,i+=.05*r[a+1][t-1].b,i+=.05*r[a+1][t+1].b,i+=.05*r[a-1][t+1].b}a.setup=function(){a.pixelDensity(1),a.createCanvas(165,210),r=[],t=[];for(var i=0;i<a.width;i++){r[i]=[],t[i]=[];for(var n=0;n<a.height;n++)r[i][n]={a:1,b:0},t[i][n]={a:1,b:0}}for(var e=a.floor(a.random(1,a.width-100+1)),o=a.floor(a.random(1,a.height-100+1)),c=e;c<e+100;c++)for(var s=o;s<o+100;s++)r[c][s].b=1,r[a.width-c][a.height-s].b=1},a.draw=function(){a.background(255);for(var e=0;e<10;e++){for(var o=1;o<a.width-1;o++)for(var c=1;c<a.height-1;c++){var s=r[o][c].a,b=r[o][c].b;t[o][c].a=s+1*i(o,c)-s*b*b+.055*(1-s),t[o][c].b=b+.5*n(o,c)+s*b*b-(.062+.055)*b,t[o][c].a=a.constrain(t[o][c].a,0,1),t[o][c].b=a.constrain(t[o][c].b,0,1)}var h=r;r=t,t=h}a.loadPixels();for(var f=0;f<a.width;f++)for(var u=0;u<a.height;u++){var l=4*(f+u*a.width),d=t[f][u],p=(d.a-d.b)*a.TWO_PI;p=a.constrain(p,0,a.TWO_PI,!0),p=a.map(a.cos(p),-1,1,0,255),a.pixels[l+0]=p,a.pixels[l+1]=p,a.pixels[l+2]=p,a.pixels[l+3]=255}a.updatePixels()}};r.default=function(a){var r=a.location;return Object(i.c)(o.a,{sketch:s,path:r.pathname,description:Object(i.c)(e.a.Fragment,null,"More experimenting with"," ",Object(i.c)(c.a,{href:"https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_013_ReactionDiffusion/P5/sketch.js"},"Reaction Diffusion"),". This runs ",Object(i.c)("em",null,"slow"),".")})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-30-js-7f19c8c1169a0af150c8.js.map