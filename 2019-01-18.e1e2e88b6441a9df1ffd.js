(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{87:function(i,e,s){"use strict";s.r(e);var r=s(0);new(s.n(r).a)((function(i){var e,s,r=[],n=!1,o=new Array(10).fill().map((function(i,e){return(e+1)/10}));i.setup=function(){i.createCanvas(i.windowWidth,i.windowHeight),e=i.createGraphics(i.width,i.height);for(var s=function(e){var s=i.random(o),n=i.width/6*i.random(.1,1);o=o.filter((function(i){return i!==s})),r.push({r:i.HALF_PI*e,speed:s/i.TWO_PI,size:n,direction:i.random([1,-1])})},n=0;n<3;n++)s(n);i.noFill()},i.draw=function(){i.background(255),i.frameRate(n?15:30),i.image(e,0,0);var o,t=i.width/2+i.cos(r[0].r)*(i.width/2-2*r[1].size),a=r[0].size/2,h=t+i.cos(r[0].r)*(r[0].size/2),c=a+i.sin(r[0].r)*(r[0].size/2),d=i.width-r[1].size/2,w=i.height/2+i.cos(r[1].r)*(i.height/2-(r[0].size+r[2].size)),z=d+i.cos(r[1].r)*(r[1].size/2),l=w+i.sin(r[1].r)*(r[1].size/2),u=i.width/2+i.cos(r[2].r)*(i.width/2-2*r[1].size),f=i.height-r[2].size/2,p=u+i.cos(r[2].r)*(r[2].size/2),g=f+i.sin(r[2].r)*(r[2].size/2),v=r[1].size/2,m=i.height/2+i.cos(r[1].r)*(i.height/2-(r[0].size+r[2].size)),k=v+i.cos(r[1].r+i.HALF_PI)*(r[1].size/2),y=m+i.sin(r[1].r+i.HALF_PI)*(r[1].size/2);n&&(i.stroke((o=128,i.color(255,0,0,o))),i.strokeWeight(1),i.ellipse(t,a,r[0].size),i.ellipse(d,w,r[1].size),i.ellipse(u,f,r[2].size),i.ellipse(v,m,r[1].size),i.line(h,c,p,g),i.line(z,l,k,y));for(var x=0;x<r.length;x++)r[x].r+=r[x].speed*r[x].direction;var H,P,A,F,I,W,_,b,C,L,J=(L=(((A=p)-(H=h))*((P=c)-(W=l))-((F=g)-P)*(H-(I=z)))/(((b=y)-W)*(A-H)-((_=k)-I)*(F-P)),(C=((_-I)*(P-W)-(b-W)*(H-I))/((b-W)*(A-H)-(_-I)*(F-P)))>=0&&C<=1&&L>=0&&L<=1?{x:i.floor(H+C*(A-H)),y:i.floor(P+C*(F-P))}:{x:null,y:null}),R=J.x,G=J.y;if(R&&G&&i.frameCount>1)for(var O=0;O<1;O+=.01)e.line(R,G,s.x,s.y);s=R&&G?{x:R,y:G}:s},i.mousePressed=function(){n=!n},i.windowResized=function(){i.resizeCanvas(i.windowWidth,i.windowHeight)}}),"sketch")}},[[87,0,1]]]);