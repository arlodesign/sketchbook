(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{"WK/p":function(t,o,n){"use strict";o.a=function(t,o,n,a,r,e,i,c){void 0===i&&(i=!0),void 0===c&&(c=!0);for(var u=Math.max(e,.01/t.dist(o,n,a,r)),f=0;f<1;f+=u)(0!==f||i)&&(c&&t.random()>f||!c)&&t.point(t.lerp(o,a,f),t.lerp(n,r,f))}},jQ0i:function(t,o,n){"use strict";n.r(o);n("n0hJ"),n("q1tI");var a=n("Gmm/"),r=n("xPdq"),e=n("WK/p"),i=n("qKvR"),c=function(t){var o,n,a=t.random(100),i=Object(r.a)([2,3,5,8,13,21,34].map((function(t){return 25*t}))),c=20;t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),o=t.color(100-a,10,15),t.background(o),t.noFill(),n=t.floor(.15*t.width)},t.draw=function(){var r=t.map(t.sin(t.frameCount/i[0]),-1,1,n,.05*n),u=t.map(t.sin(t.frameCount/i[1]),-1,1,.3,.7),f=t.map(t.cos(t.frameCount/i[2]),-1,1,t.height-n,n),p=t.map(t.cos(t.frameCount/i[3]),-1,1,n,t.height-n),m=t.lerp(r,t.width-r,u),s=t.lerp(f,p,u),d=t.map(t.cos(t.frameCount/i[4]),-1,1,1.5,2)/t.dist(m,s,r,f),h=t.map(t.cos(t.frameCount/i[4]),-1,1,1.5,2)/t.dist(m,s,t.width-r,p);t.stroke(a,t.map(t.cos(t.frameCount/i[5]),-1,1,40,80),t.map(t.cos(t.frameCount/i[6]),-1,1,0,100),c),Object(e.a)(t,m,s,r,f,d),Object(e.a)(t,m,s,t.width-r,p,h,!1),t.push(),t.noStroke(),t.fill(o),t.rect(0,0,t.width,n),t.frameCount>1e4?(c-=.01)<0&&t.noLoop():(t.fill(0,0,100),t.text(1e4-t.frameCount,10,20)),t.pop()}};o.default=function(t){var o=t.location;return Object(i.c)(a.a,{sketch:c,path:o.pathname,description:"Reload page for a different variation."})}},xPdq:function(t,o,n){"use strict";function a(t){for(var o=t.length-1;o>0;o--){var n=Math.floor(Math.random()*(o+1)),a=[t[n],t[o]];t[o]=a[0],t[n]=a[1]}return t}n.d(o,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-01-js-77c8419b0080132b3df1.js.map