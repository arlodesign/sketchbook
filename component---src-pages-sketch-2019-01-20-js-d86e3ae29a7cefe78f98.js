(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{340:function(t,n,r){"use strict";r.r(n);r(70);var e=r(12),i=(r(0),r(341)),o=r(344);var a=function(t){var n,r,e,i=[],a=!1;t.setup=function(){t.createCanvas(660,840),(r=t.createGraphics(t.width,t.height)).background(255),r.stroke(0,0,0,63.75),r.strokeWeight(.5),r.noFill(),n=[t.random(.2,.3),t.random(.2,.3),t.random(.2,.3)],i.push({r:t.HALF_PI,speed:n[0]/t.TWO_PI,direction:t.random([-1,1])}),i.push({r:0,speed:n[1]/t.TWO_PI,direction:-1}),i.push({r:1.5*t.PI,speed:n[2]/t.TWO_PI,direction:t.random([-1,1])}),i.push(Object.assign({},i[1]))},t.draw=function(){t.background(255),t.image(r,0,0);var n,c=Object(o.c)(t.width/2,i[0].r,t.width/2-100),u=t.width,s=t.height/2+t.sin(i[1].r)*(t.height/2-100),d=Object(o.c)(t.width/2,i[2].r,t.width/2-100),h=t.height,f=t.height/2+t.sin(i[3].r)*(t.height/2-100);a&&(t.stroke((n=64,t.color(255,0,0,n))),t.strokeWeight(1),t.line(c,0,d,h),t.line(u,s,0,f));for(var p=0;p<i.length;p++)i[p].r+=i[p].speed*i[p].direction;var g,l,v,w,k,b,m,x,y,O,P=(O=(((v=d)-(g=c))*((l=0)-(b=s))-((w=h)-l)*(g-(k=u)))/(((x=f)-b)*(v-g)-((m=0)-k)*(w-l)),(y=((m-k)*(l-b)-(x-b)*(g-k))/((x-b)*(v-g)-(m-k)*(w-l)))>=0&&y<=1&&O>=0&&O<=1?{x:g+y*(v-g),y:l+y*(w-l)}:{x:null,y:null}),I=P.x,W=P.y;if(I&&W&&t.frameCount>1)for(var j=0;j<1;j+=.01)r.line(I,W,e.x,e.y);e=I&&W?{x:I,y:W}:e},t.mousePressed=function(){a=!a}};n.default=function(t){var n=t.location;return Object(e.c)(i.a,{sketch:a,path:n.pathname,description:"Reload page for a different variation. Click or tap sketch to toggle guides."})}},344:function(t,n,r){"use strict";r.d(n,"c",function(){return e}),r.d(n,"d",function(){return i}),r.d(n,"b",function(){return o});var e=function(t,n,r){return t+Math.cos(n)*r},i=function(t,n,r){return t+Math.sin(n)*r},o=function(t,n,r,e,i,o){void 0===o&&(o=!1);var a=t+Math.cos(r)*e,c=n+Math.sin(r)*i;return o?[a,c]:{x:a,y:c}};n.a=function(t,n,r,o,a){void 0===a&&(a=!1);var c=e(t,r,o),u=i(n,r,o);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-20-js-d86e3ae29a7cefe78f98.js.map