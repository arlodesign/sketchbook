(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{214:function(i,e,r){"use strict";r.r(e);r(353);var s=r(12),t=(r(0),r(352)),n=function(i){var e,r,s=[],t=!1,n=new Array(10).fill().map(function(i,e){return(e+1)/10});i.setup=function(){i.createCanvas(660,840),e=i.createGraphics(i.width,i.height);for(var r=function(e){var r=i.random(n),t=i.width/6*i.random(.1,1);n=n.filter(function(i){return i!==r}),s.push({r:i.HALF_PI*e,speed:r/i.TWO_PI,size:t,direction:i.random([1,-1])})},t=0;t<3;t++)r(t);i.noFill()},i.draw=function(){i.background(255),i.frameRate(t?15:30),i.image(e,0,0);var n,o=i.width/2+i.cos(s[0].r)*(i.width/2-2*s[1].size),a=s[0].size/2,c=o+i.cos(s[0].r)*(s[0].size/2),l=a+i.sin(s[0].r)*(s[0].size/2),h=i.width-s[1].size/2,f=i.height/2+i.cos(s[1].r)*(i.height/2-(s[0].size+s[2].size)),u=h+i.cos(s[1].r)*(s[1].size/2),d=f+i.sin(s[1].r)*(s[1].size/2),z=i.width/2+i.cos(s[2].r)*(i.width/2-2*s[1].size),p=i.height-s[2].size/2,v=z+i.cos(s[2].r)*(s[2].size/2),g=p+i.sin(s[2].r)*(s[2].size/2),w=s[1].size/2,m=i.height/2+i.cos(s[1].r)*(i.height/2-(s[0].size+s[2].size)),k=w+i.cos(s[1].r+i.HALF_PI)*(s[1].size/2),y=m+i.sin(s[1].r+i.HALF_PI)*(s[1].size/2);t&&(i.stroke((n=128,i.color(255,0,0,n))),i.strokeWeight(1),i.ellipse(o,a,s[0].size),i.ellipse(h,f,s[1].size),i.ellipse(z,p,s[2].size),i.ellipse(w,m,s[1].size),i.line(c,l,v,g),i.line(u,d,k,y));for(var x=0;x<s.length;x++)s[x].r+=s[x].speed*s[x].direction;var P,A,b,F,I,_,C,H,L,J,O=(J=(((b=v)-(P=c))*((A=l)-(_=d))-((F=g)-A)*(P-(I=u)))/(((H=y)-_)*(b-P)-((C=k)-I)*(F-A)),(L=((C-I)*(A-_)-(H-_)*(P-I))/((H-_)*(b-P)-(C-I)*(F-A)))>=0&&L<=1&&J>=0&&J<=1?{x:i.floor(P+L*(b-P)),y:i.floor(A+L*(F-A))}:{x:null,y:null}),R=O.x,W=O.y;if(R&&W&&i.frameCount>1)for(var j=0;j<1;j+=.01)e.line(R,W,r.x,r.y);r=R&&W?{x:R,y:W}:r},i.mousePressed=function(){t=!t}};e.default=function(i){var e=i.location;return Object(s.c)(t.a,{sketch:n,path:e.pathname,description:" Reload page for a different variation. Click or tap sketch to toggle guides. "})}},353:function(i,e,r){var s=r(9);s(s.P,"Array",{fill:r(354)}),r(67)("fill")},354:function(i,e,r){"use strict";var s=r(34),t=r(100),n=r(18);i.exports=function(i){for(var e=s(this),r=n(e.length),o=arguments.length,a=t(o>1?arguments[1]:void 0,r),c=o>2?arguments[2]:void 0,l=void 0===c?r:t(c,r);l>a;)e[a++]=i;return e}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-18-js-8da8871693582e7f9e71.js.map