(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return i})),r.d(n,"b",(function(){return o}));var e=function(t,n,r){return t+Math.cos(n)*r},i=function(t,n,r){return t+Math.sin(n)*r},o=function(t,n,r,e,i,o){void 0===o&&(o=!1);var a=t+Math.cos(r)*e,c=n+Math.sin(r)*i;return o?[a,c]:{x:a,y:c}};n.a=function(t,n,r,o,a){void 0===a&&(a=!1);var c=e(t,r,o),u=i(n,r,o);return a?[c,u]:{x:c,y:u}}},qLl8:function(t,n,r){"use strict";function e(t,n,r,e,i,o,a,c){var u=((a-i)*(n-o)-(c-o)*(t-i))/((c-o)*(r-t)-(a-i)*(e-n)),s=((r-t)*(n-o)-(e-n)*(t-i))/((c-o)*(r-t)-(a-i)*(e-n));return u>=0&&u<=1&&s>=0&&s<=1?{x:t+u*(r-t),y:n+u*(e-n)}:{x:null,y:null}}r.d(n,"a",(function(){return e}))},ynAP:function(t,n,r){"use strict";r.r(n);r("E5k/"),r("q1tI");var e=r("Gmm/"),i=r("ViKx"),o=r("qLl8"),a=r("qKvR"),c=function(t){var n,r,e,a=[],c=!1;t.setup=function(){t.createCanvas(660,840),(r=t.createGraphics(t.width,t.height)).background(255),r.stroke(0,0,0,63.75),r.strokeWeight(.5),r.noFill(),n=[t.random(.2,.3),t.random(.2,.3),t.random(.2,.3)],a.push({r:t.HALF_PI,speed:n[0]/t.TWO_PI,direction:t.random([-1,1])}),a.push({r:0,speed:n[1]/t.TWO_PI,direction:-1}),a.push({r:1.5*t.PI,speed:n[2]/t.TWO_PI,direction:t.random([-1,1])}),a.push(Object.assign({},a[1]))},t.draw=function(){t.background(255),t.image(r,0,0);var n,u=Object(i.c)(t.width/2,a[0].r,t.width/2-100),s=t.width,d=t.height/2+t.sin(a[1].r)*(t.height/2-100),h=Object(i.c)(t.width/2,a[2].r,t.width/2-100),f=t.height,p=t.height/2+t.sin(a[3].r)*(t.height/2-100);c&&(t.stroke((n=64,t.color(255,0,0,n))),t.strokeWeight(1),t.line(u,0,h,f),t.line(s,d,0,p));for(var l=0;l<a.length;l++)a[l].r+=a[l].speed*a[l].direction;var g=Object(o.a)(u,0,h,f,s,d,0,p),v=g.x,w=g.y;if(v&&w&&t.frameCount>1)for(var k=0;k<1;k+=.01)r.line(v,w,e.x,e.y);e=v&&w?{x:v,y:w}:e},t.mousePressed=function(){c=!c}};n.default=function(t){var n=t.location;return Object(a.c)(e.a,{sketch:c,path:n.pathname,description:"Reload page for a different variation. Click or tap sketch to toggle guides."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-20-js-7f4e0e4c1b0b427c21a4.js.map