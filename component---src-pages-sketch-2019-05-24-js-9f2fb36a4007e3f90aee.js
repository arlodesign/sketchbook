(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{350:function(a,r,o){"use strict";o.r(r);var n=o(10),e=o(0),t=o.n(e),i=o(433),c=o(445),b=function(a){var r,o,n=a.random(100);function e(a,o){var n=0;return n+=-1*r[a][o].a,n+=.2*r[a-1][o].a,n+=.2*r[a+1][o].a,n+=.2*r[a][o+1].a,n+=.2*r[a][o-1].a,n+=.05*r[a-1][o-1].a,n+=.05*r[a+1][o-1].a,n+=.05*r[a+1][o+1].a,n+=.05*r[a-1][o+1].a}function t(a,o){var n=0;return n+=-1*r[a][o].b,n+=.2*r[a-1][o].b,n+=.2*r[a+1][o].b,n+=.2*r[a][o+1].b,n+=.2*r[a][o-1].b,n+=.05*r[a-1][o-1].b,n+=.05*r[a+1][o-1].b,n+=.05*r[a+1][o+1].b,n+=.05*r[a-1][o+1].b}a.setup=function(){a.pixelDensity(1),a.createCanvas(330,420),a.colorMode(a.HSB,100),r=[],o=[];for(var n=0;n<a.width;n++){r[n]=[],o[n]=[];for(var e=0;e<a.height;e++)r[n][e]={a:1,b:0},o[n][e]={a:1,b:0}}for(var t=0;t<100;t++)for(var i=a.floor(a.random(1,a.width-20+1)),c=a.floor(a.random(1,a.height-20+1)),b=i;b<i+20;b++)for(var s=c;s<c+20;s++)r[b][s].b=1},a.draw=function(){a.background(n,50,0);for(var i=0;i<10;i++){for(var c=1;c<a.width-1;c++)for(var b=1;b<a.height-1;b++){var s=r[c][b].a,f=r[c][b].b;o[c][b].a=s+1*e(c,b)-s*f*f+.055*(1-s),o[c][b].b=f+.5*t(c,b)+s*f*f-(.062+.055)*f,o[c][b].a=a.constrain(o[c][b].a,0,1),o[c][b].b=a.constrain(o[c][b].b,0,1)}var l=r;r=o,o=l}a.loadPixels();for(var h=0;h<a.width;h++)for(var u=0;u<a.height;u++){var d=4*(h+u*a.width),v=o[h][u],p=v.a,w=v.b,g=a.floor(100*(p-w));g=a.map(g*g/100,50,100,25,75,!0),a.pixels[d+0]=a.red(a.color(n,50,g)),a.pixels[d+1]=a.green(a.color(n,50,g)),a.pixels[d+2]=a.blue(a.color(n,50,g)),a.pixels[d+3]=255}a.updatePixels()}};r.default=function(a){var r=a.location;return Object(n.c)(i.a,{sketch:b,path:r.pathname,description:Object(n.c)(t.a.Fragment,null,"Experimenting with"," ",Object(n.c)(c.a,{href:"https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_013_ReactionDiffusion/P5/sketch.js"},"Reaction Diffusion"),". This runs ",Object(n.c)("em",null,"slow"),".")})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-24-js-9f2fb36a4007e3f90aee.js.map