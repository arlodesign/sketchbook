(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{250:function(t,e,n){"use strict";n.r(e);n(37);var r=n(0),i=n.n(r),o=n(254),a=n(255);var c=function(t){var e,n,r,i=[],o=!1;t.setup=function(){t.createCanvas(660,840),(n=t.createGraphics(t.width,t.height)).background(255),n.stroke(0,0,0,63.75),n.strokeWeight(.5),n.noFill(),e=[t.random(.2,.3),t.random(.2,.3),t.random(.2,.3)],i.push({r:t.HALF_PI,speed:e[0]/t.TWO_PI,direction:t.random([-1,1])}),i.push({r:0,speed:e[1]/t.TWO_PI,direction:-1}),i.push({r:1.5*t.PI,speed:e[2]/t.TWO_PI,direction:t.random([-1,1])}),i.push(Object.assign({},i[1]))},t.draw=function(){t.background(255),t.image(n,0,0);var e,c=Object(a.b)(t.width/2,i[0].r,t.width/2-100),s=t.width,u=t.height/2+t.sin(i[1].r)*(t.height/2-100),d=Object(a.b)(t.width/2,i[2].r,t.width/2-100),h=t.height,f=t.height/2+t.sin(i[3].r)*(t.height/2-100);o&&(t.stroke((e=64,t.color(255,0,0,e))),t.strokeWeight(1),t.line(c,0,d,h),t.line(s,u,0,f));for(var p=0;p<i.length;p++)i[p].r+=i[p].speed*i[p].direction;var g,l,v,w,k,b,m,x,y,O,P=(O=(((v=d)-(g=c))*((l=0)-(b=u))-((w=h)-l)*(g-(k=s)))/(((x=f)-b)*(v-g)-((m=0)-k)*(w-l)),(y=((m-k)*(l-b)-(x-b)*(g-k))/((x-b)*(v-g)-(m-k)*(w-l)))>=0&&y<=1&&O>=0&&O<=1?{x:g+y*(v-g),y:l+y*(w-l)}:{x:null,y:null}),I=P.x,W=P.y;if(I&&W&&t.frameCount>1)for(var _=0;_<1;_+=.01)n.line(I,W,r.x,r.y);r=I&&W?{x:I,y:W}:r},t.mousePressed=function(){o=!o}};e.default=function(t){var e=t.location;return i.a.createElement(o.a,{sketch:c,path:e.pathname,description:"Reload page for a different variation. Click or tap sketch to toggle guides."})}},255:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i});var r=function(t,e,n){return t+Math.cos(e)*n},i=function(t,e,n){return t+Math.sin(e)*n};e.a=function(t,e,n,o,a){void 0===a&&(a=!1);var c=r(t,n,o),s=i(e,n,o);return a?[c,s]:{x:c,y:s}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-20-js-9a2a6fb2e2a096df40d4.js.map