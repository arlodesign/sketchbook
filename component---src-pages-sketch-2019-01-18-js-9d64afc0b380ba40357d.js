(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{304:function(e,i,r){"use strict";r.r(i);r(179);var s=r(0),t=(r(1),r(251)),n=function(e){var i,r,s=[],t=!1,n=new Array(10).fill().map((function(e,i){return(i+1)/10}));e.setup=function(){e.createCanvas(660,840),i=e.createGraphics(e.width,e.height);for(var r=function(i){var r=e.random(n),t=e.width/6*e.random(.1,1);n=n.filter((function(e){return e!==r})),s.push({r:e.HALF_PI*i,speed:r/e.TWO_PI,size:t,direction:e.random([1,-1])})},t=0;t<3;t++)r(t);e.noFill()},e.draw=function(){e.background(255),e.frameRate(t?15:30),e.image(i,0,0);var n,o=e.width/2+e.cos(s[0].r)*(e.width/2-2*s[1].size),a=s[0].size/2,c=o+e.cos(s[0].r)*(s[0].size/2),l=a+e.sin(s[0].r)*(s[0].size/2),h=e.width-s[1].size/2,d=e.height/2+e.cos(s[1].r)*(e.height/2-(s[0].size+s[2].size)),f=h+e.cos(s[1].r)*(s[1].size/2),u=d+e.sin(s[1].r)*(s[1].size/2),z=e.width/2+e.cos(s[2].r)*(e.width/2-2*s[1].size),p=e.height-s[2].size/2,w=z+e.cos(s[2].r)*(s[2].size/2),g=p+e.sin(s[2].r)*(s[2].size/2),v=s[1].size/2,m=e.height/2+e.cos(s[1].r)*(e.height/2-(s[0].size+s[2].size)),k=v+e.cos(s[1].r+e.HALF_PI)*(s[1].size/2),y=m+e.sin(s[1].r+e.HALF_PI)*(s[1].size/2);t&&(e.stroke((n=128,e.color(255,0,0,n))),e.strokeWeight(1),e.ellipse(o,a,s[0].size),e.ellipse(h,d,s[1].size),e.ellipse(z,p,s[2].size),e.ellipse(v,m,s[1].size),e.line(c,l,w,g),e.line(f,u,k,y));for(var x=0;x<s.length;x++)s[x].r+=s[x].speed*s[x].direction;var P,b,A,F,I,_,C,H,L,J,O=(J=(((A=w)-(P=c))*((b=l)-(_=u))-((F=g)-b)*(P-(I=f)))/(((H=y)-_)*(A-P)-((C=k)-I)*(F-b)),(L=((C-I)*(b-_)-(H-_)*(P-I))/((H-_)*(A-P)-(C-I)*(F-b)))>=0&&L<=1&&J>=0&&J<=1?{x:e.floor(P+L*(A-P)),y:e.floor(b+L*(F-b))}:{x:null,y:null}),R=O.x,W=O.y;if(R&&W&&e.frameCount>1)for(var j=0;j<1;j+=.01)i.line(R,W,r.x,r.y);r=R&&W?{x:R,y:W}:r},e.mousePressed=function(){t=!t}};i.default=function(e){var i=e.location;return Object(s.c)(t.a,{sketch:n,path:i.pathname,description:" Reload page for a different variation. Click or tap sketch to toggle guides. "})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-18-js-9d64afc0b380ba40357d.js.map