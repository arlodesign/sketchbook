(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"1fiN":function(a,r,e){"use strict";e.r(r);var n=e("q1tI"),o=e.n(n),t=e("Bl7J"),i=e("9VVL"),l=function(a){var r,e,n=a.random(100);function o(a,e){var n=0;return n+=-1*r[a][e].a,n+=.2*r[a-1][e].a,n+=.2*r[a+1][e].a,n+=.2*r[a][e+1].a,n+=.2*r[a][e-1].a,n+=.05*r[a-1][e-1].a,n+=.05*r[a+1][e-1].a,n+=.05*r[a+1][e+1].a,n+=.05*r[a-1][e+1].a}function t(a,e){var n=0;return n+=-1*r[a][e].b,n+=.2*r[a-1][e].b,n+=.2*r[a+1][e].b,n+=.2*r[a][e+1].b,n+=.2*r[a][e-1].b,n+=.05*r[a-1][e-1].b,n+=.05*r[a+1][e-1].b,n+=.05*r[a+1][e+1].b,n+=.05*r[a-1][e+1].b}a.setup=function(){a.pixelDensity(1),a.createCanvas(330,420),a.colorMode(a.HSB,100),r=[],e=[];for(var n=0;n<a.width;n++){r[n]=[],e[n]=[];for(var o=0;o<a.height;o++)r[n][o]={a:1,b:0},e[n][o]={a:1,b:0}}for(var t=0;t<100;t++)for(var i=a.floor(a.random(1,a.width-20+1)),l=a.floor(a.random(1,a.height-20+1)),c=i;c<i+20;c++)for(var s=l;s<l+20;s++)r[c][s].b=1},a.draw=function(){a.background(n,50,0);for(var i=0;i<10;i++){for(var l=1;l<a.width-1;l++)for(var c=1;c<a.height-1;c++){var s=r[l][c].a,f=r[l][c].b;e[l][c].a=s+1*o(l,c)-s*f*f+.055*(1-s),e[l][c].b=f+.5*t(l,c)+s*f*f-(.062+.055)*f,e[l][c].a=a.constrain(e[l][c].a,0,1),e[l][c].b=a.constrain(e[l][c].b,0,1)}var b=r;r=e,e=b}a.loadPixels();for(var u=0;u<a.width;u++)for(var h=0;h<a.height;h++){var d=4*(u+h*a.width),v=e[u][h],p=v.a,w=v.b,m=a.floor(100*(p-w));m=a.map(m*m/100,50,100,25,75,!0),a.pixels[d+0]=a.red(a.color(n,50,m)),a.pixels[d+1]=a.green(a.color(n,50,m)),a.pixels[d+2]=a.blue(a.color(n,50,m)),a.pixels[d+3]=255}a.updatePixels()}};r.default=function(){return o.a.createElement(t.a,null,o.a.createElement(i.a,{sketch:l}),o.a.createElement("p",null,"Experimenting with"," ",o.a.createElement("a",{href:"https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_013_ReactionDiffusion/P5/sketch.js"},"Reaction Diffusion"),". This runs ",o.a.createElement("em",null,"slow"),"."))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-24-js-2a943d92f30ad24d171f.js.map