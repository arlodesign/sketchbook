"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[7710],{90423:function(n,o,r){var e=r(94035);new(r.n(e)())((function(n){var o,r,e=n.random(100);function i(n,r){var e=0;return e+=-1*o[n][r].a,e+=.2*o[n-1][r].a,e+=.2*o[n+1][r].a,e+=.2*o[n][r+1].a,e+=.2*o[n][r-1].a,e+=.05*o[n-1][r-1].a,e+=.05*o[n+1][r-1].a,(e+=.05*o[n+1][r+1].a)+.05*o[n-1][r+1].a}function a(n,r){var e=0;return e+=-1*o[n][r].b,e+=.2*o[n-1][r].b,e+=.2*o[n+1][r].b,e+=.2*o[n][r+1].b,e+=.2*o[n][r-1].b,e+=.05*o[n-1][r-1].b,e+=.05*o[n+1][r-1].b,(e+=.05*o[n+1][r+1].b)+.05*o[n-1][r+1].b}n.setup=function(){n.pixelDensity(.5),n.createCanvas(n.windowWidth,n.windowHeight),n.colorMode(n.HSB,100),o=[],r=[];for(var e=0;e<n.width;e++){o[e]=[],r[e]=[];for(var i=0;i<n.height;i++)o[e][i]={a:1,b:0},r[e][i]={a:1,b:0}}for(var a=0;a<100;a++)for(var t=n.floor(n.random(1,n.width-20+1)),s=n.floor(n.random(1,n.height-20+1)),h=t;h<t+20;h++)for(var c=s;c<s+20;c++)o[h][c].b=1},n.draw=function(){n.background(e,50,0);for(var t=0;t<10;t++){for(var s=1;s<n.width-1;s++)for(var h=1;h<n.height-1;h++){var c=o[s][h].a,f=o[s][h].b;r[s][h].a=c+1*i(s,h)-c*f*f+.055*(1-c),r[s][h].b=f+.5*a(s,h)+c*f*f-(.062+.055)*f,r[s][h].a=n.constrain(r[s][h].a,0,1),r[s][h].b=n.constrain(r[s][h].b,0,1)}var b=o;o=r,r=b}n.loadPixels();for(var d=0;d<n.width;d++)for(var u=0;u<n.height;u++){var l=4*(d+u*n.width),w=r[d][u],v=w.a,g=w.b,p=n.floor(100*(v-g));p=n.map(p*p/100,50,100,25,75,!0),n.pixels[l+0]=n.red(n.color(e,50,p)),n.pixels[l+1]=n.green(n.color(e,50,p)),n.pixels[l+2]=n.blue(n.color(e,50,p)),n.pixels[l+3]=255}n.updatePixels()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML='\nExperimenting with \n  <a href="https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_013_ReactionDiffusion/P5/sketch.js">\n    Reaction Diffusion\n  </a>. This runs <em>slow</em>.\n'}},function(n){n.O(0,[4035],(function(){return 90423,n(n.s=90423)})),n.O()}]);