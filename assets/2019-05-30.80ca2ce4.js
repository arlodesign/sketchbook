"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[9153],{92275:function(n,i,a){var e=a(94035);new(a.n(e)())((function(n){var i,a,e=100;function t(n,a){var e=0;return e+=-1*i[n][a].a,e+=.2*i[n-1][a].a,e+=.2*i[n+1][a].a,e+=.2*i[n][a+1].a,e+=.2*i[n][a-1].a,e+=.05*i[n-1][a-1].a,e+=.05*i[n+1][a-1].a,(e+=.05*i[n+1][a+1].a)+.05*i[n-1][a+1].a}function o(n,a){var e=0;return e+=-1*i[n][a].b,e+=.2*i[n-1][a].b,e+=.2*i[n+1][a].b,e+=.2*i[n][a+1].b,e+=.2*i[n][a-1].b,e+=.05*i[n-1][a-1].b,e+=.05*i[n+1][a-1].b,(e+=.05*i[n+1][a+1].b)+.05*i[n-1][a+1].b}n.setup=function(){n.pixelDensity(.25),n.createCanvas(n.windowWidth,n.windowHeight),i=[],a=[];for(var t=0;t<n.width;t++){i[t]=[],a[t]=[];for(var o=0;o<n.height;o++)i[t][o]={a:1,b:0},a[t][o]={a:1,b:0}}for(var r=n.floor(n.random(1,n.width-e+1)),s=n.floor(n.random(1,n.height-e+1)),h=r;h<r+e;h++)for(var b=s;b<s+e;b++)i[h][b].b=1,i[n.width-h][n.height-b].b=1},n.draw=function(){n.background(255);for(var e=0;e<10;e++){for(var r=1;r<n.width-1;r++)for(var s=1;s<n.height-1;s++){var h=i[r][s].a,b=i[r][s].b;a[r][s].a=h+1*t(r,s)-h*b*b+.055*(1-h),a[r][s].b=b+.5*o(r,s)+h*b*b-(.062+.055)*b,a[r][s].a=n.constrain(a[r][s].a,0,1),a[r][s].b=n.constrain(a[r][s].b,0,1)}var c=i;i=a,a=c}n.loadPixels();for(var f=0;f<n.width;f++)for(var d=0;d<n.height;d++){var u=4*(f+d*n.width),w=a[f][d],v=(w.a-w.b)*n.TWO_PI;v=n.constrain(v,0,n.TWO_PI),v=n.map(n.cos(v),-1,1,0,255),n.pixels[u+0]=v,n.pixels[u+1]=v,n.pixels[u+2]=v,n.pixels[u+3]=255}n.updatePixels()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML='\n  More experimenting with \n  <a href="https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_013_ReactionDiffusion/P5/sketch.js">\n    Reaction Diffusion\n  </a>. This runs <em>slow</em>.\n'}},function(n){n.O(0,[4035],(function(){return 92275,n(n.s=92275)})),n.O()}]);