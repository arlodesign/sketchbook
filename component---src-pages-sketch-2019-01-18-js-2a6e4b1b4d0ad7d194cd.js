(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"+jzf":function(e,i,r){"use strict";r.r(i);r("bHtr"),r("q1tI");var s=r("Gmm/"),t=r("qKvR"),n=function(e){var i,r,s=[],t=!1,n=new Array(10).fill().map((function(e,i){return(i+1)/10}));e.setup=function(){e.createCanvas(660,840),i=e.createGraphics(e.width,e.height);for(var r=function(i){var r=e.random(n),t=e.width/6*e.random(.1,1);n=n.filter((function(e){return e!==r})),s.push({r:e.HALF_PI*i,speed:r/e.TWO_PI,size:t,direction:e.random([1,-1])})},t=0;t<3;t++)r(t);e.noFill()},e.draw=function(){e.background(255),e.frameRate(t?15:30),e.image(i,0,0);var n,o=e.width/2+e.cos(s[0].r)*(e.width/2-2*s[1].size),a=s[0].size/2,c=o+e.cos(s[0].r)*(s[0].size/2),l=a+e.sin(s[0].r)*(s[0].size/2),h=e.width-s[1].size/2,d=e.height/2+e.cos(s[1].r)*(e.height/2-(s[0].size+s[2].size)),f=h+e.cos(s[1].r)*(s[1].size/2),z=d+e.sin(s[1].r)*(s[1].size/2),u=e.width/2+e.cos(s[2].r)*(e.width/2-2*s[1].size),p=e.height-s[2].size/2,w=u+e.cos(s[2].r)*(s[2].size/2),g=p+e.sin(s[2].r)*(s[2].size/2),v=s[1].size/2,m=e.height/2+e.cos(s[1].r)*(e.height/2-(s[0].size+s[2].size)),k=v+e.cos(s[1].r+e.HALF_PI)*(s[1].size/2),y=m+e.sin(s[1].r+e.HALF_PI)*(s[1].size/2);t&&(e.stroke((n=128,e.color(255,0,0,n))),e.strokeWeight(1),e.ellipse(o,a,s[0].size),e.ellipse(h,d,s[1].size),e.ellipse(u,p,s[2].size),e.ellipse(v,m,s[1].size),e.line(c,l,w,g),e.line(f,z,k,y));for(var b=0;b<s.length;b++)s[b].r+=s[b].speed*s[b].direction;var x,I,P,A,F,H,_,C,L,R,j=(R=(((P=w)-(x=c))*((I=l)-(H=z))-((A=g)-I)*(x-(F=f)))/(((C=y)-H)*(P-x)-((_=k)-F)*(A-I)),(L=((_-F)*(I-H)-(C-H)*(x-F))/((C-H)*(P-x)-(_-F)*(A-I)))>=0&&L<=1&&R>=0&&R<=1?{x:e.floor(x+L*(P-x)),y:e.floor(I+L*(A-I))}:{x:null,y:null}),q=j.x,G=j.y;if(q&&G&&e.frameCount>1)for(var J=0;J<1;J+=.01)i.line(q,G,r.x,r.y);r=q&&G?{x:q,y:G}:r},e.mousePressed=function(){t=!t}};i.default=function(e){var i=e.location;return Object(t.c)(s.a,{sketch:n,path:i.pathname,description:" Reload page for a different variation. Click or tap sketch to toggle guides. "})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-18-js-2a6e4b1b4d0ad7d194cd.js.map